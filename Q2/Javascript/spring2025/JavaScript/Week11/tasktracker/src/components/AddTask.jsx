import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add day and time"
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>
      <div className="form-control check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          onChange={(e) => setReminder(e.currentTarget.checked)}
          value={reminder}
          checked={reminder}
        />
      </div>
      <input type="submit" value="Save Task" className="btn" />
    </form>
  );
};
export default AddTask;
