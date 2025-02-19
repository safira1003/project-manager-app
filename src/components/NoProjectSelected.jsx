import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";
import PageContainer from "./PageContainer.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <PageContainer>
      <div className="flex justify-center">
        <img
          className="w-32 md:w-72 object-contain"
          src={noProjectImage}
          alt="no-project-image"
        />
      </div>
      <div>
        <p className="text-center text-lg md:text-xl font-semibold text-navy">
          No Project Selected
        </p>
        <p className="text-center text-sm md:text-base font-medium text-navy">
          Select a project or get started with a new one.
        </p>
      </div>
      <div className="flex justify-center">
        <Button onClick={onStartAddProject}>+ Create a New Project</Button>
      </div>
    </PageContainer>
  );
}
