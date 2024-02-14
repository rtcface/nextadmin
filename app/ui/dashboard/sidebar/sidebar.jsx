import MenuLink from './menuLink/MenuLink'
import styles from './sidebar.module.css'
import { MdDashboard, MdPerson, MdSupervisedUserCircle } from 'react-icons/md'

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard/>
      },
      {
        title: "Users",
        path: "/users",
        icon: <MdPerson/>
      },
      {
        title: "Declaraciones",
        path: "/declaraciones",
        icon: <MdSupervisedUserCircle/>
      }
    ]    
  }
]

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        {
          menuItems.map((item) => (
            <li key={item.title}>
              <span className={styles.item}>{item.title}</span>
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