import MenuLink from '../../share/menuLink/MenuLink'
import styles from './sidebar.module.css'
import { MdAssignmentReturned } from 'react-icons/md'
import { FcPlanner } from "react-icons/fc";
import { GiBuyCard } from "react-icons/gi";
import { FaFileContract,FaPersonRunning } from "react-icons/fa6";


const menuItems = [
  {
    title: "Etapas",
    list: [      
      {
        title: "Planeación",
        path: "/dashboard",
        icon: <FcPlanner/>
      },
      {
        title: "Licitación",
        path: "/dashboard/users",
        icon: <GiBuyCard/>
      },
      {
        title: "Adjudicación",
        path: "/dashboard/declaraciones",
        icon: <MdAssignmentReturned/>
      },
      {
        title: "Contrato",
        path: "/dashboard/contrato",
        icon: <FaFileContract/>
      },
      {
        title: "Implementación",
        path: "/dashboard/implementacion",
        icon: <FaPersonRunning/>
      }
    ]    
  }
]

const Sidebar = () => {
  return (
    <div className={styles.container}>
      
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