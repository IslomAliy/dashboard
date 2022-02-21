import React from "react";
import Folders from "../components/Folders";
import Menu from "../components/Menu";
import Table from "../components/Table";
import TodoProjectsWrapper from "../components/TodoProjectsWrapper";

import { db } from "../firebase-config";
import { storage } from "../firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
//datepicker packages
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  let timestamp = Math.round(new Date().getTime() / 1000);
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [projectsData, setProjectsData] = useState([]);
  const [newProject, setNewProject] = useState("");
  const projectsCollection = collection(db, "projects");
  const [folder, setFolder] = useState("");
  const [image, setImage] = useState({
    file: null,
    uploaded: "",
  });
  const [uploadedImage, setUploadedImage] = useState("");
  const [url, setUrl] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  console.log("image = ", image);
  console.log("url", url);
  console.log(folder, "inside app");

  const getProjects = async () => {
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
        .slice(-3)
        .reverse()
    );
  };

  // const fileUpload = () => {
  //   const uploadTask = storage.ref(`images/${image.uploaded}`).put(image.uploaded);
  //   uploadTask.on(
  //     "state_changed",
  //     snapshot => {},
  //     error => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //             .ref('images')
  //             .child(image.uploaded)
  //             .getDownloadURL()
  //             .then(url => {
  //               console.log(url)
  //               setUrl(url)
  //             })
  //             .cath(err => {
  //               console.log(err);
  //             })
  //     }
  //   )
  // }

  // const memoizedCallback = useCallback(
  //   () => {
  //     fileUpload();
  //   },
  //   [url],
  // );

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

  const addProject = async () => {
    console.log("addURl", url);

    await addDoc(projectsCollection, {
      label: newProject,
      timeStamp: timestamp,
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
      url: url,
      folder: folder,
    });
    getProjects();
    setIsPressed(false);
    setNewProject("");
    setIsOpen(false);
    setFolder("");
    setUrl("");
    setImage({
      file: null,
      uploaded: "",
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  console.log("projectsData", projectsData);

  const deleteProject = async (id) => {
    const projectDoc = doc(db, "projects", id);
    await deleteDoc(projectDoc);
    getProjects();
    console.log(id);
  };
  return (
    <div>
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
        image={image}
        setImage={setImage}
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        folder={folder}
        setFolder={setFolder}
        fileUpload={fileUpload}
        isPressed={isPressed}
        setIsPressed={setIsPressed}
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
        image={image}
        setImage={setImage}
      />
      <Table />
    </div>
  );
};

export default Home;
