import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:8000/tasks/${params.id}`);
      const data = await res.json();

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  });

  if (error) {
    // setError("Task not found!!!");

    navigate(-1);
  }

  return loading ? (
    <h3>Loading....</h3>
  ) : (
    <div className="task">
      <p style={{ fontSize: "10px", textAlign: "right", color: "blue" }}>
        {pathname}
      </p>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <p>Reminder: {task.reminder.toString()}</p>
      <Button
        text="Go Back"
        color="blue"
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};
export default TaskDetails;
