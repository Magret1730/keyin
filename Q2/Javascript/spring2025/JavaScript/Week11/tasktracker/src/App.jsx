import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import USArray from "./components/Temp/USArray";
import TaskDetails from "./components/TaskDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  // Delete task

  //Fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`);

    const data = await res.json();
    return data;
  };

  // bring data from json server

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:8000/tasks");
      const data = await res.json();
      console.log(data);
      return data;
    };

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // To add a new task

  const addTask = async (task) => {
    const res = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No tasks to show!!!"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />

          <Route path="/usarray" element={<USArray />} />

          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// The API calls: GET,POST,PUT, and DELETE...
