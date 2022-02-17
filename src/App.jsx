import Folders from "./components/Folders";
import Menu from "./components/Menu";
import Table from "./components/Table";
import TodoProjectsWrapper from "./components/TodoProjectsWrapper";
import { db } from "./firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
//datepicker packages
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let timestamp = Math.round(new Date().getTime() / 1000);

function App() {
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [projectsData, setProjectsData] = useState([]);
  const [newProject, setNewProject] = useState("");
  const projectsCollection = collection(db, "projects");

  const getProjects = async () => {
    const data = await getDocs(projectsCollection);
    setProjectsData(
      data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id,timeStamp: doc.data().timeStamp, startDate: doc.data().startDate, endDate: doc.data().endDate }))
        .sort(function (a, b) {
          return a.timeStamp - b.timeStamp;
        })
        .slice(-3)
    );
  };

  const addProject = async () => {
    await addDoc(projectsCollection, {  
      label: newProject,
      timeStamp: timestamp,
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString()
    });
    getProjects();

    setNewProject("");
    setIsOpen(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  console.log(projectsData)

  const deleteProject = async (id) => {
    const projectDoc = doc(db, "projects", id);
    await deleteDoc(projectDoc);
    getProjects();
    console.log(id);
  };

  return (
    <div className="App">
      <Menu />
      <Folders
        addProject={addProject}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        newProject={newProject}
        setNewProject={setNewProject}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <TodoProjectsWrapper
        projectsData={projectsData}
        deleteProject={deleteProject}
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <Table />
    </div>
  );
}

export default App;
