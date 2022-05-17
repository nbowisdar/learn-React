import React from 'react'
import style from '../Main/Main.module.css'
import { useParams } from 'react-router-dom'
export default function Main() {
    let {username} = useParams()
  return (
    <div className={style.container}>
        {username}s Profile</div>
  )
}