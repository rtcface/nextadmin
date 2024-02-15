import MenuLink from '../../share/menuLink/MenuLink'
import styles from './sidebar.module.css'
import Image from 'next/image'
import { FcPlanner } from "react-icons/fc";
import { GiBuyCard } from "react-icons/gi";

const menuItems = [
  {
    title: "Menu",
    list: [
      {
        title: "Contrataciones",
        path: "/inbox/hirings/contract",
        icon: <FcPlanner/>
      },
      {
        title: "Información",
        path: "/inbox/hirings/information",
        icon: <GiBuyCard/>
      }
    ]    
  }
]

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/noavatar.png" alt="avatar" width="50" height="50" className={styles.userImage}/>
        <div className={styles.userDetail}>
          <span className={styles.username}>Ramiro Tepehua</span>
          <span  className={styles.usertitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {
          menuItems.map((item) => (
            <li key={item.title}>
              <span className={styles.cat}>{item.title}</span>
              {
                item.list.map((subItem) => (
                  <MenuLink key={subItem.title} item={subItem}/>
                ))
              }
            </li>
          )
        )}
      </ul>
    </div>
  )}
export default Sidebar