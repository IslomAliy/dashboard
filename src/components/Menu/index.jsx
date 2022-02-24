import { NavLink } from 'react-router-dom';
import Layout from '../Layout';
import styles from './menu.module.scss'

const Menu = () => {
  return (
  <div>
      <Layout>
        <div className={styles.menu}>
            {/* <img src="/images/settings.svg" alt="settings-icon" /> */}
            <ul className={styles.menuItems}>
                <li><NavLink activeclassname={styles.active} to="/">Home</NavLink></li>
                <li><NavLink activeclassname={styles.active} to="/myprojects">All projects</NavLink></li>
                <li><a href="/">Calendar</a></li>
                <li><a href="/">Finance</a></li>
                <li><a href="/">Inbox</a></li>
            </ul>
            {/* <div className={styles.userIcons}>
                <img src="/images/question-mark.svg" alt="question-mark" />
                <img src="/images/bell.svg" alt="bell" />
                <img src="/images/image.svg" alt="user-img" />
            </div> */}
        </div>
      </Layout>
  </div>
  )
};

export default Menu;
