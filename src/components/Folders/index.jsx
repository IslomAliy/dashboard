import { useEffect, useState } from "react";
import Folder from "../Folder";
import Layout from "../Layout";
import styles from "./folders.module.scss";
// import { addProject } from "../../redux/actions/projectsAction";
import { useDispatch } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

// let timestamp = Math.round(new Date().getTime() / 1000)

// let idField = 1;

// console.log(timestamp);

// let projectsID = 1;

const Folders = ({newProject, setNewProject, isOpen, setIsOpen, addProject, take, setTake}) => {

  // const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(false);
  // const [newProject, setNewProject] = useState("");
  // const projectsCollection = collection(db, "projects");

  // console.log(newProject);

  // const addProject = (e) => {
  //   e.preventDefault();
  //     addDoc(projectsCollection, { label: newProject, timeStamp: timestamp}).then(res => {
  //       console.log('response', res)
  //     })
 
  //   setNewProject('')
  //   setIsOpen(false)
  // };

  // useEffect(() => {
  //   addProject();
  // }, [newProject])

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject();
    setTake(!take)
  }

  return (
    <Layout>
      <>
        <div className={styles.foldersWrapper}>
          <div className={styles.headSection}>
            <h1 className={styles.greeting}>Hello, Saidakbar</h1>
            <button
              className={styles.newProjectBtn}
              type="button"
              onClick={() => setIsOpen(true)}
            >
              <span className={styles.plusIcon}>+</span> New Project
            </button>
          </div>
          <div className={styles.folders}>
            <Folder
              img="/images/folder.svg"
              folderName="Favourites"
              projects="3"
              files="43"
            />
            <Folder
              img="/images/trips-folder.svg"
              folderName="Trips"
              projects="2"
              files="7"
            />
            <Folder
              img="/images/work-folder.svg"
              folderName="Work"
              projects="11"
              files="16"
            />
          </div>
        </div>

        {isOpen && (
          <>
            <div className={styles.overlay} onClick={() => setIsOpen(false)}/>
            <div className={styles.modal}>
              <div className={styles.modalWrapper}>
                <h1 className={styles.modalHeading}>Creating new project</h1>
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
                    <div className={styles.inputField}>
                      <label htmlFor="title">Description </label>
                      <input type="text" placeholder="Description" />
                    </div>
                    <div className={styles.inputField}>
                      <label htmlFor="title">Comments </label>
                      <input type="text" placeholder="Comments" />
                    </div>
                    <div className={styles.fileUploadField}>
                      <label htmlFor="status">Status </label>
                      <input type="file" placeholder="please choose file" />
                    </div>
                    <div className={styles.membersField}>
                      <label htmlFor="title">Members </label>
                      <select>
                        <option value="falonchi">Falonchi 1</option>
                        <option value="falonchi">Falonchi 2</option>
                        <option value="falonchi">Falonchi 3</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.buttons}>
                    <button
                      type="button"
                      className={styles.cancelBtn}
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className={styles.saveBtn} onClick={() => console.log('pressed')}>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default Folders;
