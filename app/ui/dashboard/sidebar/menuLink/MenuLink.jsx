import Link from 'next/link'
import styles from './menuLink.module.css'

const MenuLink = ({item}) => {
  return (
    <Link href={item.path} className={styles.container}>     
      {item.icon}
      <span>{item.title}</span>
    </Link>
  )
}
export default MenuLink