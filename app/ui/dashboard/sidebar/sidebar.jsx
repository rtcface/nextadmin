import styles from './sidebar.module.css'

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Home",
        link: "/"
      }
    ]    
  }
]

const Sidebar = () => {
  return (
    <div className={styles.container}>Sidebar</div>
  )
}
export default Sidebar