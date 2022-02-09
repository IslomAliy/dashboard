import Todo from "../Todo";
import Projects from "../Projects";
import styles from './TodoProjectsWrapper.module.scss'
import Layout from "../Layout";

const TodoProjectsWrapper = () => {
  return (
      <>
      <Layout>
        <div className={styles.TodoProjectsWrapper}>
            <Todo/>
            <Projects/>
        </div>
      </Layout>
    </>
  )
};

export default TodoProjectsWrapper;
