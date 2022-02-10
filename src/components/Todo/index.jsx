import React, { useState } from 'react';
import styles from './todo.module.scss';


let maxId = 1;

const createTodo = (label) => {
    return {
        label,
        done: false,
        id: maxId++
    }

}

const initialTodo = [

    createTodo('Add participiants to Magnolia'),
    createTodo('Add participiants to Magnolia'),
    createTodo('Add participiants to Magnolia'),
    createTodo('Add participiants to Magnolia'),
    createTodo('Add participiants to Magnolia'),
    createTodo('Add participiants to Magnolia'),
    createTodo('Add participiants to Magnolia'),
    createTodo('Add participiants to Magnolia'),
    createTodo('Add participiants to Magnolia'),
    createTodo('Add participiants to Magnolia'),
    createTodo('This is second Todo'),
    createTodo('This is third Todo'),
]

const Todo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [todos, setTodos] = useState(initialTodo)

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
                <button className={styles.addBtn} onClick={() => setIsOpen(true)} >
                    <img src="/images/plus.svg" alt="plus" />
                </button>
            
            </div>
        </div>
        <div className={styles.todoArea}> 
            {todos.map((todosData)=> (
                <div className={styles.todoElement} key={todosData.id}>
                  <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                  <div className={styles.inputWrapper}>
                      <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                      <p> {todosData.label}</p>
                  </div>
              </div>
            ))}
        </div>
        {isOpen && (
            <div className={styles.overlay}/>
        )}
      
    </div>
    
    {isOpen && 
    <div className={styles.modal}>
            <div className={styles.modalWrapper}>
                <h1 className={styles.modalHeading}>Add to do list</h1>
                <form>
                    <div className={styles.inputForms}>             
                        <div className={styles.inputField}>
                            <label htmlFor="title">Title </label>
                            <input type="text" placeholder='Title'/>
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="title">Description </label>
                            <input type="text" placeholder='Description'/>
                        </div>
                        <div className={styles.checkboxField}>
                            <label htmlFor="status">Status </label>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <button type='button' className={styles.cancelBtn} onClick={() => setIsOpen(false)}>Cancel</button>
                        <button type="submit" className={styles.saveBtn}>Save</button>
                    </div>
                </form>
            </div>
        </div>  
        }   
    </>
    );
};

export default Todo;
