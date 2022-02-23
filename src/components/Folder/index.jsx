import React, {useState, useEffect} from "react";
import styles from "./folder.module.scss";
import { Link } from 'react-router-dom'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const Folder = (props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loading = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(loading);
  }, []);

  return (
    <>
    <Link to={props.link} className={styles.folderWrapper}>
      <div >
        <div className={styles.folderInner}>
          <div className={styles.folderImages}>
            <img src={props.img} alt="icon" />
            <img
              src="/images/more.svg"
              alt="more"
              className={styles.threeDots}
            />
          </div>
          <h2 className={styles.folderName}>{props.folderName}</h2>
          <div className={styles.folderDetails}>
            {isLoading && (
              <p className={styles.projects}> <Skeleton width={80}/></p>
            )}

            {!isLoading && (
              <p className={styles.projects}>{props.projects} projects</p>
            )}
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Folder;
