import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <div className="flex flex-col gap-4 md:gap-8 text-center">
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <h2 className="text-xl md:text-3xl text-start font-bold text-teal">
          Tasks
        </h2>
        <NewTask onAdd={onAddTask} />
      </div>
      {tasks.length > 0 ? (
        <ul className="flex flex-col gap-3 overflow-auto flex-grow">
          {tasks.map((task) => {
            return (
              <li
                className="flex justify-between p-2 border-b-2 rounded-lg border-teal"
                key={task.id}
              >
                <p className="text-sm md:text-base font-medium text-navy">{task.text}</p>
                <button
                  className="text-xs md:text-sm font-normal text-red-400 hover:text-red-600"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-sm md:text-base font-medium text-stone-400 ">
          This project does not have any tasks yet.
        </p>
      )}
    </div>
  );
}
