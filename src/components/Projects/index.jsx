import styles from './projects.module.scss'

const Projects = () => {
  return( 
    <div className={styles.projectsWrapper}>
        <h1 className={styles.projectsHeading}>Latest projects</h1>
        <div className={styles.projectsCardWrapper}>       
        <div className={styles.projectsCard}>
            <div className={styles.leftSide}>
                <img src="/images/default_image.svg" alt="project-img" className={styles.projectsImg}/>
                <div className={styles.projectsName}>
                    <p className={styles.projectsText}>Magnolia Warsaw</p>
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

        <div className={styles.projectsCard}>
            <div className={styles.leftSide}>
                <img src="/images/default_image.svg" alt="project-img" className={styles.projectsImg}/>
                <div className={styles.projectsName}>
                    <p className={styles.projectsText}>Magnolia Warsaw</p>
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

        <div className={styles.projectsCard}>
            <div className={styles.leftSide}>
                <img src="/images/default_image.svg" alt="project-img" className={styles.projectsImg}/>
                <div className={styles.projectsName}>
                    <p className={styles.projectsText}>Magnolia Warsaw</p>
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
        </div>
    </div>);
};

export default Projects;
