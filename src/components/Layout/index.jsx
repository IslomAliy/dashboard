import styles from './layout.module.scss'

const Layout = ({children}) => {
  return (
  <div className={styles.layoutWrapper}>
      {children}
  </div>);
};

export default Layout;
