import React from 'react';
import styles from './todo.module.scss'

const Todo = () => {
  return (
    <div className={styles.todoWrapper}>
        <div className={styles.headSection}>
            <h1 className={styles.headText}>To do</h1>
            <div className={styles.headSelects}>
                <select className={styles.customSelect}>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                </select>
                <button type='button' className={styles.addBtn}><img src="/images/plus.svg" alt="plus" /></button>
            </div>
        </div>
        <div className={styles.todoArea}>
            {/* <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                <p> Add participants to Magnolia</p>
            </div> */}
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
            <div className={styles.todoElement}>
                <img src="/images/change-order.svg" alt="change-order" className={styles.dragIcon}/>
                <div className={styles.inputWrapper}>
                    <input type="checkbox" name="checkbox" id="checkbox" className={styles.checkbox}/>
                    <p> Add participants to Magnolia</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Todo;
