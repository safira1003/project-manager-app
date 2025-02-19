import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSelected from "./components/ProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    const taskId = Math.random();

    setProjectsState((prevState) => {
      const enteredTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [enteredTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => {
          return task.id !== id;
        }),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(procjectData) {
    const projectId = Math.random();
    const enteredProject = { ...procjectData, id: projectId };

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, enteredProject],
      };
    });
  }

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => {
          return project.id !== id;
        }),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const selectedProjectData = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const selectedTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  return (
    <main className="min-h-screen flex bg-beige">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProject={projectsState.selectedProjectId}
      />

      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      )}

      {projectsState.selectedProjectId === null && (
        <NewProject onCancel={handleCancel} onAdd={handleAddProject} />
      )}

      {selectedProjectData && (
        <ProjectSelected
          project={selectedProjectData}
          tasks={selectedTasks}
          onCancel={handleCancel}
          onDelete={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
      )}
    </main>
  );
}

export default App;
