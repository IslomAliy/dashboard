import { useSelector } from "react-redux";
import styles from "./projects.module.scss";
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react";



const Projects = ({projectsData}) => {
  // const projects = useSelector((state) => state.projects.slice(-3));
  // const [projectsData, setProjectsData] = useState([]);
  // const projectsCollection = collection(db, 'projects')

 

  // useEffect(() => {
  //   const getProjects = async () => {
  //     const data = await getDocs(projectsCollection)
  //     setProjectsData(data.docs.map((doc) => ({ ...doc.data(), timeStamp: doc.data().timeStamp })).sort(function(a, b){return a.timeStamp - b.timeStamp}).slice(-3))
  //     data.docs.map((data) => {
  //       console.log('tmps', data?.data().timeStamp);
  //     })
  //   }

  //   getProjects();
  // }, [])

  // useEffect(() => {
  //   getProjectsFromFirestore();
  // }, [])

  // const getProjectsFromFirestore = () => {
  //   getDocs(projectsCollection).then((data) => {
  //     setProjectsData(data.docs.map((doc) => ({ ...doc.data(), timeStamp: doc.data().timeStamp })).sort(function(a, b){return a.timeStamp - b.timeStamp}).slice(-3))
  //   })
  // }


  // console.log('timestampp', projectsData.sort(function(a, b){return a.timeStamp - b.timeStamp}))

// .sort(function(a, b){return a - b})

  return (
    <>
      <div className={styles.projectsWrapper}>
        <h1 className={styles.projectsHeading}>Latest projects</h1>
        <div className={styles.projectsCardWrapper}>
          {projectsData.map((projectData) => (
            <div className={styles.projectsCard} key={projectData.timeStamp}>
              <div className={styles.leftSide}>
                <img
                  src="/images/default_image.svg"
                  alt="project-img"
                  className={styles.projectsImg}
                />
                <div className={styles.projectsName}>
                  <p className={styles.projectsText}>{projectData.label }</p>
                  <div className={styles.projectsDate}>
                    <img src="/images/calendar_today.svg" alt="calendar" />
                    <p className={styles.date}>15.05.2021 - 17.08.2021</p>
                  </div>
                </div>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.members}>
                  <img src="/images/first-man.svg" alt="first-member" />
                  <img src="/images/second-man.svg" alt="second-member" />
                  <img src="/images/third-man.svg" alt="third-member" />
                </div>
                <button className={styles.editBtn}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
