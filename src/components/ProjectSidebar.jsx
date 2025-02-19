import Button from "./Button.jsx";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProject,
}) {
  return (
    <aside className="flex flex-col gap-8 w-1/3 md:w-80 px-4 md:px-8 py-8 md:py-16 bg-navy text-beige rounded-r-3xl h-screen sticky top-0 ">
      <h2 className="md:text-4xl text-2xl font-bold">
        Your
        <br />
        Project
      </h2>
      <div className="text-end whitespace-nowrap">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="flex flex-col gap-3 overflow-auto">
        {projects.map((item) => {
          return (
            <li key={item.id}>
              <button
                className={`text-xs md:text-sm p-2 w-full text-center border-b-2 border-teal hover:border-stone-400 rounded-xl ${
                  selectedProject === item.id && "bg-teal/30"
                }`}
                onClick={() => onSelectProject(item.id)}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
