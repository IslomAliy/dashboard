import Todo from "../Todo";
import Projects from "../Projects";
import styles from "./TodoProjectsWrapper.module.scss";
import Layout from "../Layout";

const TodoProjectsWrapper = ({
  projectsData,
  deleteProject,
  isEditOpen,
  setIsEditOpen,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  image,
  setImage,
  isPressed,
  setIsPressed,
  newProject,
  setNewProject,
  fileUpload,
  folder,
  setFolder,
  getProjects,
  url,
  setUrl
}) => {
  return (
    <>
      <Layout>
        <div className={styles.TodoProjectsWrapper}>
          <Todo />
          <Projects
            projectsData={projectsData}
            deleteProject={deleteProject}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            image={image}
            setImage={setImage}
            newProject={newProject}
            setNewProject={setNewProject}
            isPressed={isPressed}
            setIsPressed={setIsPressed}
            fileUpload={fileUpload}
            folder={folder}
            setFolder={setFolder}
            getProjects={getProjects}
            url={url}
            setUrl={setUrl}
          />
        </div>
      </Layout>
    </>
  );
};

export default TodoProjectsWrapper;
