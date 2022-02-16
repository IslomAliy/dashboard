import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./todo.module.scss";
import { addTodos } from "../../redux/actions/todosAction";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";

let todoID = 1;

const Todo = () => {
  const todoState = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState(todoState);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [todosState, setTodosState] = useState([]);
  const todosCollection = collection(db, "todos");
  console.log(todosState);

  const addProject = async (e) => {
    e.preventDefault();
    try {
      await addDoc(todosCollection, { label: newTodo, done: checkboxValue });
    } catch (error) {
      console.error(error.message);
    }

    setIsOpen(false)
  };

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollection);
      setTodosState(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTodos();
  }, []);



//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setNewTodo(dispatch(addTodos(newTodo)));
//     setNewTodo("");
//   };

  const onToggleDone = async (id, done) => {
    const todoDoc = doc(db, "todos", id);
    const changeDone = { done: !done };
    await updateDoc(todoDoc, changeDone);
    console.log(done);
  };

  // const onToggleDone = (todoID) => {
  //     const toggleTodo = todoState.find(item => item.id === todoID)
  //     toggleTodo.done = !toggleTodo.done
  //     const newTodos = todoState.filter(item => item.id !== todoID)
  //     setTodos([...newTodos, toggleTodo])
  // }

  return (
    <>
      <div className={styles.todoWrapper}>
        <div className={styles.headSection}>
          <h1 className={styles.headText}>To do</h1>
          <div className={styles.headSelects}>
            <select className={styles.customSelect}>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
            <button className={styles.addBtn} onClick={() => setIsOpen(true)}>
              <img src="/images/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className={styles.todoArea}>
          {todosState.map((todosData) => (
            <div className={styles.todoElement} key={todosData.id}>
              <img
                src="/images/change-order.svg"
                alt="change-order"
                className={styles.dragIcon}
              />
              <div className={styles.inputWrapper}>
                <label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className={styles.checkbox}
                  />
                  <span
                    onClick={() => onToggleDone(todosData.id)}
                    style={{
                      textDecoration: todosData.done ? "line-through" : "none",
                    }}
                  >
                    {todosData.label}
                  </span>
                </label>
              </div>
            </div>
          )).slice(-3)}
        </div>
      </div>

      {isOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />
          <div className={styles.modal}>
            <div className={styles.modalWrapper}>
              <h1 className={styles.modalHeading}>Add to do list</h1>
              <form className={styles.modalForm} onSubmit={addProject}>
                <div className={styles.inputForms}>
                  <div className={styles.inputField}>
                    <label htmlFor="title">Title </label>
                    <input
                      type="text"
                      placeholder="Title"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.inputField}>
                    <label htmlFor="title">Description </label>
                    <input
                      type="text"
                      defaultChecked={checkboxValue}
                      placeholder="Description"
                    />
                  </div>
                  <div className={styles.checkboxField}>
                    <label htmlFor="status">Status </label>
                    <input type="checkbox" />
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
                  <button type="submit" className={styles.saveBtn}>
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

export default Todo;
