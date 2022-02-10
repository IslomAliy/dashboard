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
    const [newTodo, setNewTodo] = useState('')

    // console.log(newTodo);

    // console.log(todos);
    console.log(localStorage.getItem('label'));

    const addTodo = (label) => {
        const newTodo = createTodo(label);
        setTodos([...todos, newTodo])
        localStorage.setItem('label', label)
        // isOpen(false)
        // window.location.reload();
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo)
        setNewTodo('')
    }

    const onToggleDone = (todoID) => {
        const toggleTodo = todos.find(item => item.id === todoID)
        toggleTodo.done = !toggleTodo.done
        const newTodos = todos.filter(item => item.id !== todoID)
        setTodos([...newTodos, toggleTodo])
    }

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
                      <label >
                         <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                        <span onClick={() => onToggleDone(todosData.id)} style={{textDecoration: todosData.done ? 'line-through' : 'none'}}>{todosData.label}</span>
                      </label>
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
                <form onSubmit={onSubmit}>
                    <div className={styles.inputForms}>             
                        <div className={styles.inputField}>
                            <label htmlFor="title">Title </label>
                            <input 
                                type="text" 
                                placeholder='Title' 
                                value={newTodo} 
                                onChange={e => setNewTodo(e.target.value)}
                            />
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
