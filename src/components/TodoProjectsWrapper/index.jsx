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
  setImage
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
          />
        </div>
      </Layout>
    </>
  );
};

export default TodoProjectsWrapper;
