"use client"
import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {
  const pathName = usePathname()
  //console.log(pathName)
  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>     
      {item.icon}
      <span>{item.title}</span>
    </Link>
  )
}
export default MenuLink