import { useState } from 'react';
import styles from './projects.module.scss'

let projectsID = 1;

const createProject = (label) => {
    return {
        label,
        projectsID: projectsID++
    }
}

let initialProjects = [
    createProject('First project'),
    createProject('Second project'),
    createProject('Third project'),
    createProject('Magnolia Warsaw'),
    createProject('Magnolia Warsaw'),
    createProject('Magnolia Warsaw')
]

const Projects = () => {

    const [project, setProject] = useState(initialProjects.splice(-3));

    console.log(initialProjects);
  
  return( 
    <>
    <div className={styles.projectsWrapper}>
        <h1 className={styles.projectsHeading}>Latest projects</h1>
        <div className={styles.projectsCardWrapper}>       
        {project.map((projectData) => (
            <div className={styles.projectsCard} key={projectData.projectsID}>
            <div className={styles.leftSide}>
                <img src="/images/default_image.svg" alt="project-img" className={styles.projectsImg}/>
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
  )
};

export default Projects;
