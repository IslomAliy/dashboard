import Todo from "../Todo";
import Projects from "../Projects";
import styles from './TodoProjectsWrapper.module.scss'
import Layout from "../Layout";

const TodoProjectsWrapper = ({projectsData}) => {

  return (
      <>
      <Layout>
        <div className={styles.TodoProjectsWrapper}>
            <Todo/>
            <Projects projectsData={projectsData}/>
        </div>
      </Layout>
    </>
  )
};

export default TodoProjectsWrapper;
