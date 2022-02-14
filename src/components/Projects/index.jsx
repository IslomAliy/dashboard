import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./projects.module.scss";

const Projects = () => {
  const projects = useSelector((state) => state.projects.slice(-3));

  return (
    <>
      <div className={styles.projectsWrapper}>
        <h1 className={styles.projectsHeading}>Latest projects</h1>
        <div className={styles.projectsCardWrapper}>
          {projects.map((projectData) => (
            <div className={styles.projectsCard} key={projectData.id}>
              <div className={styles.leftSide}>
                <img
                  src="/images/default_image.svg"
                  alt="project-img"
                  className={styles.projectsImg}
                />
                <div className={styles.projectsName}>
                  <p className={styles.projectsText}>{projectData.label}</p>
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
