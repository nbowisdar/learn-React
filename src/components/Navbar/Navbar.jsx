import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar() {
  return (
    <nav>
      <div className={style.container}>
        <div className={style.item}>
          <Link to="/">Main</Link>
        </div>
        <div className={style.item}>
          <Link to="profile">Profile</Link>
        </div>
        <div className={style.item}>
          <Link to="about">About</Link>
        </div>
      </div>
    </nav>
  )
}
