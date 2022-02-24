import "./style.module.scss";
import { useState, useEffect } from "react";
import Layout from "../Layout";
import Menu from "../Menu";
import styles from "./style.module.scss";
import { db, storage } from "../../firebase-config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyProjects = () => {
  let timestamp = Math.round(new Date().getTime() / 1000);
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [label, setLabel] = useState("");
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [folder, setFolder] = useState("");
  const [url, setUrl] = useState("");
  const [projectId, setProjectId] = useState("");
  const [image, setImage] = useState({
    file: null,
    uploaded: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const projectsCollection = collection(db, "projects");

  console.log('toLocale', startDate.toLocaleString().slice(0,11))

  const resetDates = () => {
      setStartDate(Date.now())
      setEndDate(Date.now())
      getProjects()
  }

  useEffect(() => {
    const loading = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(loading);
  }, []);

  const getProjects = async () => {
    setIsLoading(true);
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
        .sort(function (a, b) {
          return a.timeStamp - b.timeStamp;
        })
        .reverse()
    );
    setIsLoading(false);
  };

  //   console.log('testData' + projectsData.map((data) => data))

  const handleEdit = (id) => {
    setProjectId(id);
    setIsEditOpen(true);
  };

  const deleteProject = async (id) => {
    const projectDoc = doc(db, "projects", id);
    await deleteDoc(projectDoc);
    getProjects();
    console.log(id);
  };

  useEffect(() => {
    getProjects();
  }, []);

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
      label: label,
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
      url: url,
      folder: folder,
    });
  };

  const handleClickOverlay = () => {
    setIsEditOpen(false);
    setLabel("");
    setImage({
      file: null,
      uploaded: "",
    });
  };

  const changeSelectValue = (newValue) => {
    setFolder(newValue);
    console.log("newValue", newValue);
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    fileUpload({
      file: URL.createObjectURL(event.target.files[0]),
      uploaded: event.target.files[0],
    });
  };

  const cancelBtn = () => {
    setFolder("");
    setIsEditOpen(false);
    setIsPressed(false);
    setLabel("");
    setImage({
      file: null,
      uploaded: "",
    });
  };

  const fileUpload = (prop, func = setImage) => {
    const imageRef = ref(storage, `${timestamp + prop.uploaded.name}`);
    uploadBytes(imageRef, prop.uploaded).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          console.log(url);
          setUrl(url);
          func(prop);
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };
  return (
    <>
      <Layout>
        <Menu />
        <div className={styles.favouritesWrapper}>
          <div className={styles.favuritesHeader}>
            {isLoading && (
              <h2 className={styles.favouritesHeading}>
                <Skeleton width={400} />
              </h2>
            )}
            {!isLoading && (
              <h2 className={styles.favouritesHeading}>
                All
                {
                  <span style={{ color: "#dc3545" }}>
                  {""}  { projectsData.length } {""}
                  </span>
                }
                projects show up there.
              </h2>
            )}

            <div className={styles.filterSide}>
              <input
                type="text"
                name="search"
                className={styles.search}
                placeholder="Type to search project"
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className={styles.dateField}>
                <div className={styles.datesWrapper}>
                  <DatePicker
                    className={styles.DatePicker}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    // endDate={endDate}
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
                <button type="button" className={styles.resetBtn} onClick={() => resetDates()}>Reset</button>
              </div>
            </div>
          </div>
          <div className={styles.projectsCardWrapper}>
            {isLoading && (
              <>
                <div className={styles.projectsCard}>
                  <div className={styles.leftSide}>
                    <Skeleton
                      width={50}
                      height={40}
                      style={{ marginRight: "30px" }}
                    />
                    <div className={styles.projectsName}>
                      <p className={styles.projectsText}>
                        {<Skeleton width={400} />}
                      </p>
                      <div className={styles.projectsDate}>
                        <p className={styles.date}>{<Skeleton width={60} />}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.projectsCard}>
                  <div className={styles.leftSide}>
                    <Skeleton
                      width={50}
                      height={40}
                      style={{ marginRight: "30px" }}
                    />
                    <div className={styles.projectsName}>
                      <p className={styles.projectsText}>
                        {<Skeleton width={400} />}
                      </p>
                      <div className={styles.projectsDate}>
                        <p className={styles.date}>{<Skeleton width={60} />}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.projectsCard}>
                  <div className={styles.leftSide}>
                    <Skeleton
                      width={50}
                      height={40}
                      style={{ marginRight: "30px" }}
                    />
                    <div className={styles.projectsName}>
                      <p className={styles.projectsText}>
                        {<Skeleton width={400} />}
                      </p>
                      <div className={styles.projectsDate}>
                        <p className={styles.date}>{<Skeleton width={60} />}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {!isLoading &&
              projectsData
                .filter((value) => {
                  if (searchTerm == "") {
                    return value;
                  } 
                  else if (
                      value.startDate.search(startDate.toLocaleDateString().slice(0,10)) && value.endDate.search(endDate.toLocaleDateString().slice(0,10))
                  ) {
                      return value;
                      getProjects();
                  }
                  else if (
                    value.label.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((projectData, timeStamp) => (
                  <div
                    className={styles.projectsCard}
                    key={timeStamp}
                  >
                    <div className={styles.leftSide}>
                      <img
                        src={projectData.url}
                        alt="project-img"
                        className={styles.projectsImg}
                      />
                      <div className={styles.projectsName}>
                        <p className={styles.projectsText}>
                          {isLoading ? (
                            <Skeleton width={70} />
                          ) : (
                            projectData.label
                          )}
                        </p>
                        <div className={styles.projectsDate}>
                          <img
                            src="/images/calendar_today.svg"
                            alt="calendar"
                          />
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
                        onClick={() => handleEdit(projectData.id)}
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
                          value={label}
                          onChange={(e) => setLabel(e.target.value)}
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
                        <label htmlFor="title">Members </label>
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
        </div>
      </Layout>
    </>
  );
};

export default MyProjects;
