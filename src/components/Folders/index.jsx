import React from 'react';
import Folder from '../Folder';
import Layout from '../Layout';
import styles from './folders.module.scss'

const Folders = () => {
  return (
    <Layout>
        <div className={styles.foldersWrapper}>
            <div className={styles.headSection}>
                <h1 className={styles.greeting}>Hello, Saidakbar</h1>
                <button className={styles.newProjectBtn} type='button'> <span className={styles.plusIcon}>+</span> New Project</button>
            </div>
            <div className={styles.folders}>
                <Folder img="/images/folder.svg" folderName="Favourites" projects="3" files="43"/>
                <Folder img="/images/trips-folder.svg" folderName="Trips" projects="2" files="7"/>
                <Folder img="/images/work-folder.svg" folderName="Work" projects="11" files="16"/>
            </div>
            
        </div>
   </Layout>
  )
};

export default Folders;
