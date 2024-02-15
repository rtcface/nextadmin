import Navbar from "@/app/ui/contract/navbar/navbar"
import Sidebar from "@/app/ui/contract/sidebar/sidebar"
import styles from "@/app/ui/contract/contract.module.css"


const Layout = ({children}) => {
    return (
      <div className={ styles.container }>
        <div className={styles.menu}>
        <Sidebar></Sidebar>      
        </div>
        <div className={styles.content}>
         
          {children}
        </div>
      </div>
    )
  }
  export default Layout