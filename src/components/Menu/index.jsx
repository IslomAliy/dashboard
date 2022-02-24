import { NavLink } from 'react-router-dom';
import Layout from '../Layout';
import styles from './menu.module.scss'

const Menu = () => {

  const navLinkActive = ({isActive}) => {
    return {
        color: isActive ? '#4094F7' : '',
        fontWeight: isActive ? '500' : '',
        borderBottom: isActive ? '4px solid #4094F7' : ''
    
    }
  }

  return (
  <div>
      <Layout>
        <div className={styles.menu}>
            {/* <img src="/images/settings.svg" alt="settings-icon" /> */}
            <ul className={styles.menuItems}>
                <li><NavLink activeclassname={styles.active} to="/"
                style={navLinkActive}
                >Home</NavLink></li>
                <li><NavLink activeclassname={styles.active} to="/myprojects"
                style={navLinkActive}
                >All projects</NavLink></li>
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
