import { useState, useEffect } from "react";
import Layout from "../Layout";
import styles from "./table.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const Table = ({ folder, setFolder, isPressed, setIsPressed }) => {
  let timestamp = Math.round(new Date().getTime() / 1000);
  const [projects, setProjects] = useState([])
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [isUsersModalOpen, setIsUsersModalOpen] = useState(false);
  const usersCollection = collection(db, "users");
  const projectsCollection = collection(db, 'projects')

  // console.log('projects label', projects.map((data) => (
  //   data.label
  // )));
  console.log(projects);
  console.log("users", users);

  const getProjectsData = async () => {
    const data = await getDocs(projectsCollection);
    setProjects(
      data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timeStamp: doc.data().timeStamp,
          folder: doc.data().folder,
        }))
        .sort(function (a, b) {
          return a.timeStamp - b.timeStamp;
        })
        .slice(-10)
        .reverse()
    );
  };

  const getUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(
      data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timeStamp: doc.data().timeStamp,
          folder: doc.data().folder,
        }))
        .sort(function (a, b) {
          return a.timeStamp - b.timeStamp;
        })
        .slice(-5)
        .reverse()
    );
  };

  const addProject = async () => {
    await addDoc(usersCollection, {
      label: name,
      timeStamp: timestamp,
      folder: folder.toString(),
    });
    getUsers();
    setIsPressed(false);
    setName("");
    setIsUsersModalOpen(false);
    setFolder("");
  };

  useEffect(() => {
    getProjectsData();
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUsers();
    addProject();
    setIsPressed(true);
    setUsers();
  };

  const cancelBtn = () => {
    setIsUsersModalOpen(false);
    setIsPressed(false);
    setName("");
  };

  // const handleImageChange = (event) => {
  //   event.preventDefault();
  //   fileUpload({
  //     file: URL.createObjectURL(event.target.files[0]),
  //     uploaded: event.target.files[0],
  //   });
  // };

  const handleClickOverlay = () => {
    setName("");
    setIsUsersModalOpen(false);
    setFolder("");
  };

  const changeSelectValue = (newValue) => {
    setFolder(newValue);
    console.log("newValue", newValue);
  };

  return (
    <>
      <Layout>
        <div className={styles.tableWrapper}>
          <div className={styles.Header}>
            <h1 className={styles.tableHeading}>Users with project</h1>
            <button
              className={styles.newProjectBtn}
              type="button"
              onClick={() => setIsUsersModalOpen(true)}
            >
              <span className={styles.plusIcon}>+</span> New User
            </button>
          </div>

          <div className={styles.tableBg}>
            <div className={styles.tableContainer}>
              <div className={styles.headSection}>
                <input
                  type="text"
                  className={styles.tableSearch}
                  placeholder="Поиск..."
                />
                <ul className={styles.tableMenu}>
                  {/* <li>
                    <a href="/" className={styles.tableActive}>
                      Unpaid
                    </a>
                  </li>
                  <li>
                    <a href="/">Overdue</a>
                  </li> */}
                  <li>
                    <a href="/">All</a>
                  </li>
                </ul>
              </div>

              <table className={styles.table}>
                <thead>
                  <tr>
                    {/* <th className={styles.checkBox}>
                      <input type="checkbox" />
                    </th> */}
                    <th className={styles.name}>User's Name</th>
                    {/* <th className={styles.amount}>Amount</th> */}
                    <th className={styles.inv}>ID</th>
                    <th className={styles.status}>Project</th>
                    {/* <th className={styles.dates}>Inv Date</th>
                    <th className={styles.dates}>Disc Date</th> */}
                  </tr>
                </thead>
                <tbody>
                  {users?.map((datas) => (
                    <tr key={datas.id}>
                      {/* <td className={styles.checkBox}>
                        <input type="checkbox" />
                      </td> */}
                      <td>{datas.label}</td>
                      {/* <td>{datas.amount}</td> */}
                      <td>{datas.timeStamp}</td>
                      <td>
                        {/* <span
                          className={`${
                            datas.status ? styles.unpaid : styles.overdue
                          }`}
                        >
                 
                        </span> */}
                        {datas.folder}
                      </td>
                      {/* <td>{datas.invDate}</td>
                      <td>{datas.discDate}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {isUsersModalOpen && (
          <>
            <div className={styles.overlay} onClick={handleClickOverlay} />
            <div className={styles.modal}>
              <div className={styles.modalWrapper}>
                <h1 className={styles.modalHeading}>Adding new user</h1>
                <form className={styles.modalForm} onSubmit={handleSubmit}>
                  <div className={styles.inputForms}>
                    <div className={styles.inputField}>
                      <label htmlFor="title">Full name </label>
                      <input
                        type="text"
                        placeholder="Write your name here"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    {/* <div className={styles.dateField}>
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
                    </div> */}
                    {/* <div className={styles.fileUploadField}>
                      <label htmlFor="status">Image </label>
                      {image.file == null && (
                        <input
                          type="file"
                          accept=".jpg, .png, .jpeg"
                          onChange={handleImageChange}
                          required
                        />
                      )}
                      {image.file !== null && (
                        <img src={image.file} alt="uploaded-picture" />
                      )}
                    </div> */}
                    <div className={styles.membersField}>
                      <label htmlFor="title">Project</label>
                      <select
                        onChange={(e) => changeSelectValue(e.target.value)}
                        value={folder}
                        required
                      >
                        <option value="" defaultValue disabled hidden>
                          {" "}
                          Select project{" "}
                        </option>
                        {projects.map((data) => (
                           <option value={data.label} key={data.id}>{data.label}</option>
                        ))}
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
      </Layout>
    </>
  );
};

export default Table;
