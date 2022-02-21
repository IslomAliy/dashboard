import styles from "./projects.module.scss";
// import { useSelector } from "react-redux";
// import { db } from '../../firebase-config'
// import { collection, getDocs } from 'firebase/firestore'
// import { useEffect, useState } from "react";

//datepicker packages
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Projects = ({
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

  const handleImageChange = (event) => {
    setImage({
      file: URL.createObjectURL(event.target.files[0])
      
    }
  )
  }

  return (
    <>
      <div className={styles.projectsWrapper}>
        <h1 className={styles.projectsHeading}>Latest projects</h1>
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
                  <p className={styles.projectsText}>{projectData.label}</p>
                  <div className={styles.projectsDate}>
                    <img src="/images/calendar_today.svg" alt="calendar" />
                    <p className={styles.date}>{projectData.startDate} - {projectData.endDate}</p>
                  </div>
                </div>
              </div>
              <div className={styles.rightSide}>
                {/* <div className={styles.members}>
                  <img src="/images/first-man.svg" alt="first-member" />
                  <img src="/images/second-man.svg" alt="second-member" />
                  <img src="/images/third-man.svg" alt="third-member" />
                </div> */}
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
      {isEditOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setIsEditOpen(false)}
          />
          <div className={styles.modal}>
            <div className={styles.modalWrapper}>
              <h1 className={styles.modalHeading}>Creating new project</h1>
              <form className={styles.modalForm}>
                <div className={styles.inputForms}>
                  <div className={styles.inputField}>
                    <label htmlFor="title">Title of project </label>
                    <input
                      type="text"
                      placeholder="Title of project"
                      // value={newProject}
                      // onChange={(e) => setNewProject(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div className={styles.inputField}>
                      <label htmlFor="title">Description </label>
                      <input type="text" placeholder="Description" />
                    </div> */}
                  <div className={styles.inputField}>
                    <label htmlFor="title">Comments </label>
                    <input type="text" placeholder="Comments" />
                  </div>
                  <div className={styles.fileUploadField}>
                    <label htmlFor="status">Image </label>
                    <input type="file" placeholder="please choose file" onChange={handleImageChange} />
                    <img src={image.file} alt="input-image" />
                  </div>
                  <div className={styles.membersField}>
                    <label htmlFor="title">Members </label>
                    <select>
                      <option value="favourites">Favourites</option>
                      <option value="trips">Trips</option>
                      <option value="work">Work</option>
                    </select>
                  </div>
                </div>

                <div className={styles.buttons}>
                  <button
                    type="button"
                    className={styles.cancelBtn}
                    onClick={() => setIsEditOpen(false)}
                    // onClick={() =>
                    //   cancelBtn()
                    // }
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={styles.saveBtn}
                    onClick={() => console.log("pressed")}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
