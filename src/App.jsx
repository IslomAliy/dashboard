import Folders from "./components/Folders";
import Menu from "./components/Menu";
import Table from "./components/Table";
import TodoProjectsWrapper from "./components/TodoProjectsWrapper";
import { db } from './firebase-config'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react";

let timestamp = Math.round(new Date().getTime() / 1000) 

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsData, setProjectsData] = useState([]);
  const [newProject, setNewProject] = useState("");
  const projectsCollection = collection(db, 'projects')

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollection)
      setProjectsData(data.docs.map((doc) => ({ ...doc.data(), timeStamp: doc.data().timeStamp })).sort(function(a, b){return a.timeStamp - b.timeStamp}).slice(-3))
      data.docs.map((data) => {
        console.log('tmps', data?.data().timeStamp);
      })
    }

    getProjects();
  }, [])

  const addProject = async (e) => {
    e.preventDefault();
      await addDoc(projectsCollection, { label: newProject, timeStamp: timestamp}).then(res => {
        console.log('response', res)
      })
 
    setNewProject('')
    setIsOpen(false)
  };

  // useEffect(() => {
  //   addProject();
  // }, [projectsData])



  return (
    <div className="App">
      <Menu/>
      <Folders addProject={addProject} isOpen={isOpen} setIsOpen={setIsOpen} newProject={newProject} setNewProject={setNewProject}/>
      <TodoProjectsWrapper projectsData={projectsData}/>
      <Table/>
    </div>
  );
}

export default App;
