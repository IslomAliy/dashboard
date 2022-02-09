import React from 'react';
import styles from './folder.module.scss'

const Folder = (props) => {
  return (
    <div className={styles.folderWrapper}>
        <div className={styles.folderInner}>
            <div className={styles.folderImages}>
                <img src={props.img} alt="icon" />
                <img src="/images/more.svg" alt="more" className={styles.threeDots}/>
            </div>    
            <h2 className={styles.folderName}>{props.folderName}</h2>
            <div className={styles.folderDetails}>
                <p className={styles.projects}>{props.projects} projects</p>
                <p className={styles.files}>{props.files} files</p>
            </div>
        </div>
    </div>);
};

export default Folder;
