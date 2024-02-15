import Navbar from "../ui/hirings/navbar/navbar"
import Sidebar from "../ui/hirings/sidebar/sidebar"
import styles from '../ui/hirings/dashboard.module.css'

const Layout = ({children}) => {
  return (
    <div className={ styles.container }>
      <div className={styles.menu}>
      <Sidebar></Sidebar>      
      </div>
      <div className={styles.content}>
        <Navbar></Navbar>
        {children}
      </div>
    </div>
  )
}
export default Layout