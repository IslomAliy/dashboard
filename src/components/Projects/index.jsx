import styles from "./projects.module.scss";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { db } from '../../firebase-config'
// import { collection, getDocs } from 'firebase/firestore'
// import { useEffect, useState } from "react";

//datepicker packages
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, updateDoc } from "firebase/firestore";

// import { ref as sRef, set,update} from "firebase/database";

import { db } from "../../firebase-config";
import Skeleton from "react-loading-skeleton";

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
  setImage,
  uploadedImage,
  setUploadedImage,
  folder,
  setFolder,
  isPressed,
  setIsPressed,
  fileUpload,
  newProject,
  setNewProject,
  getProjects,
  url,
  setUrl,
}) => {
  let timestamp = Math.round(new Date().getTime() / 1000);
  const [projectId, setProjectId] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  // const [label, setLabel] = useState('')

  console.log("prid", projectId);
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


  useEffect(() => {
    const loading = setTimeout(() => {
      setIsLoading(false)
    }, 3500);

    return () => clearTimeout(loading)

  }, [])

  const handleEdit = async (id, label, startDate, endDate, url, folder) => {
    setProjectId(id);
    // console.log('handleEditInside', id, label, startDate, endDate, url, folder);
    // // console.log('urlInside', folder);
    setIsEditOpen(true);
    // const projectDoc = doc(db, 'projects', id)
    // const changeLabel = {label: "setNewProject"}
    // const changeStartDate = {startDate: startDate}
    // const changeEndDate = {endDate: endDate}
    // const changeUrl = {url: url}
    // const changeFolder = {folder: folder}
    // var variable = await updateDoc(projectDoc, changeLabel, changeStartDate, changeEndDate, changeUrl, changeFolder)
  };

  // const handleEdit = () => {

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPressed(true);
    getProjects();
    setIsEditOpen(false);
    setImage({
      file: null,
      uploaded: "",
    }); 
    const projectDoc = doc(db, "projects", projectId);

    updateDoc(projectDoc, {
      label: newProject,
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
      url: url,
      folder: folder
    })
  };

  const cancelBtn = () => {
    setFolder("");
    setIsEditOpen(false);
    setIsPressed(false);
    setNewProject("");
    // setLabel('')
    setImage({
      file: null,
      uploaded: "",
    });
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    fileUpload({
      file: URL.createObjectURL(event.target.files[0]),
      uploaded: event.target.files[0],
    });
  };

  const handleClickOverlay = () => {
    setIsEditOpen(false);
    setImage({
      file: null,
      uploaded: "",
    });
  };

  const changeSelectValue = (newValue) => {
    setFolder(newValue);
    console.log("newValue", newValue);
  };

  return (
    <>
      <div className={styles.projectsWrapper}>
        <h1 className={styles.projectsHeading}>Latest projects</h1>
        <div className={styles.projectsCardWrapper}>
          {isLoading && (
            <>
             <div className={styles.projectsCard}>
              <div className={styles.leftSide}>
                <Skeleton width={30} height={30}/>
                <div className={styles.projectsName}>
                  <p className={styles.projectsText} style={{marginLeft: '30px'}}>{ <Skeleton width={400} height={20}/>}</p>
                  <div className={styles.projectsDate}>
                    {/* <img src="/images/calendar_today.svg" alt="calendar" /> */}
                    <p className={styles.date}>
                      {<Skeleton width={150} style={{marginLeft: '30px'}}/>}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.rightSide}>
                <Skeleton width={100} height={30}/>
              </div>
           </div>

           <div className={styles.projectsCard}>
              <div className={styles.leftSide}>
                <Skeleton width={30} height={30}/>
                <div className={styles.projectsName}>
                  <p className={styles.projectsText} style={{marginLeft: '30px'}}>{ <Skeleton width={400} height={20}/>}</p>
                  <div className={styles.projectsDate}>
                    {/* <img src="/images/calendar_today.svg" alt="calendar" /> */}
                    <p className={styles.date}>
                      {<Skeleton width={150} style={{marginLeft: '30px'}}/>}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.rightSide}>
                <Skeleton width={100} height={30}/>
              </div>
           </div>

             <div className={styles.projectsCard}>
              <div className={styles.leftSide}>
                <Skeleton width={30} height={30}/>
                <div className={styles.projectsName}>
                  <p className={styles.projectsText} style={{marginLeft: '30px'}}>{ <Skeleton width={400} height={20}/>}</p>
                  <div className={styles.projectsDate}>
                    {/* <img src="/images/calendar_today.svg" alt="calendar" /> */}
                    <p className={styles.date}>
                      {<Skeleton width={150} style={{marginLeft: '30px'}}/>}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.rightSide}>
                <Skeleton width={100} height={30}/>
              </div>
           </div>
           </>
          )}

          {!isLoading && projectsData.map((projectData) => (
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
                  onClick={() =>
                    handleEdit(
                      projectData.id,
                      projectData.label,
                      projectData.startDate,
                      projectData.endDate,
                      projectData.url,
                      projectData.folder
                    )
                  }
                  //
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
          <div className={styles.overlay} onClick={handleClickOverlay} />
          <div className={styles.modal}>
            <div className={styles.modalWrapper}>
              <h1 className={styles.modalHeading}>Updating project</h1>
              <form className={styles.modalForm} onSubmit={handleSubmit}>
                <div className={styles.inputForms}>
                  <div className={styles.inputField}>
                    <label htmlFor="title">Title of project </label>
                    <input
                      type="text"
                      placeholder="Title of project"
                      value={newProject}
                      onChange={(e) => setNewProject(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.dateField}>
                    <label htmlFor="title">Date </label>
                    <div className={styles.datesWrapper}>
                      <DatePicker
                        className={styles.DatePicker}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        required
                      />
                      <DatePicker
                        className={styles.DatePicker}
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.fileUploadField}>
                    <label htmlFor="status">Image </label>
                    {image.file == null && (
                      <input
                        type="file"
                        accept=".jpg, .png, .jpeg"
                        onChange={handleImageChange}
                        required
                      />
                    )}
                    {/* style={`${image.file ? display: 'none' : ''}`} */}
                    {image.file !== null && (
                      <img src={image.file} alt="uploaded-picture" />
                    )}
                  </div>
                  <div className={styles.membersField}>
                    <label htmlFor="title">Folders </label>
                    <select
                      onChange={(e) => changeSelectValue(e.target.value)}
                      value={folder}
                      required
                    >
                      <option value="" defaultValue disabled hidden>
                        {" "}
                        Select folder{" "}
                      </option>
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
                    onClick={() => cancelBtn()}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={styles.saveBtn}
                    disabled={isPressed}
                    onClick={() => console.log("pressed")}
                  >
                    {isPressed ? "Loading" : "Save"}
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
