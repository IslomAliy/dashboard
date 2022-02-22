import { useState, useEffect } from "react";
import Layout from "../Layout";
import Menu from "../Menu";
import styles from "./style.module.scss";
import { db } from "../../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Favourites = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const projectsCollection = collection(db, "projects");

  const getProjects = async () => {
    setIsLoading(true)
    const data = await getDocs(projectsCollection);
    setProjectsData(
      data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timeStamp: doc.data().timeStamp,
          startDate: doc.data().startDate,
          endDate: doc.data().endDate,
          url: doc.data().url,
          folder: doc.data().folder,
        }))
        .filter((el) => el.folder === "favourites")      
        .reverse()
    )
    setIsLoading(false)
  };

  console.log('testData' + projectsData.map((data) => data))

  console.log('prddd', projectsData);

  const deleteProject = async (id) => {
    const projectDoc = doc(db, "projects", id);
    await deleteDoc(projectDoc);
    getProjects();
    console.log(id);
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div>
      <Layout>
        <Menu />
        <div className={styles.favouritesWrapper}>
          <h2>Projects which belong to Favourites folder show up there.</h2>
          <div className={styles.projectsCardWrapper}>
            {projectsData.map((projectData) => (
              <div className={styles.projectsCard} key={projectData.timeStamp}>
                <div className={styles.leftSide}>
                  <img
                    src={projectData.url}
                    alt="project-img"
                    className={styles.projectsImg}
                  />
                  <div className={styles.projectsName}>
                    <p className={styles.projectsText}>
                      {isLoading ? <Skeleton width={70} /> : projectData.label}
                    </p>
                    <div className={styles.projectsDate}>
                      <img src="/images/calendar_today.svg" alt="calendar" />
                      <p className={styles.date}>
                        {projectData.startDate} - {projectData.endDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.rightSide}>
                  <button
                    type="button"
                    className={styles.editBtn}
                    onClick={() => setIsEditOpen(true)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => {
                      deleteProject(projectData.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Favourites;
