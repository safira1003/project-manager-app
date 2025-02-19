import PageContainer from "./PageContainer.jsx";
import Task from "./Tasks.jsx";

export default function ProjectSelected({
  project,
  tasks,
  onCancel,
  onDelete,
  onAddTask,
  onDeleteTask,
}) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <PageContainer>
      <button
        className="text-sm md:text-base w-fit text-medium font-semibold text-stone-600 hover:text-stone-900"
        onClick={onCancel}
      >
        Back
      </button>
      <header className="flex flex-col gap-1 md:gap-2 border-b-2 border-navy py-2 ">
        <div className="flex justify-between">
          <h2 className="text-2xl md:text-4xl text-navy font-bold">
            {project.title}
          </h2>
          <button
            className="text-sm md:text-base font-medium text-red-400 hover:text-red-600"
            onClick={() => {
              onDelete(project.id);
            }}
          >
            Delete
          </button>
        </div>
        <p className="text-sm md:text-base text-stone-400 font-medium">
          Due Date : {formattedDate}
        </p>
        <p className="py-2 text-xs md:text-sm text-teal font-normal whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      <Task onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </PageContainer>
  );
}
