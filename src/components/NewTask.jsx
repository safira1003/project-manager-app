import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex gap-3 w-full md:w-1/2">
      <input
        className="w-full p-1 md:p-2 border-b-2 rounded-lg border-skyBlue bg-white text-stone-600 text-xs md:text-sm font-medium focus:outline-none focus:border-teal"
        type="text"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="p-1 md:p-2 text-xs md:text-sm font-medium rounded-lg text-beige bg-navy hover:bg-teal hover:text-white whitespace-nowrap "
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
