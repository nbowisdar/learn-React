import React from 'react'
import style from '../Main/Main.module.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
export default function Main() {
    let navigate = useNavigate()
  return (
    <div className={style.container}>
        About
        Go to the <Button
        onClick={ () => navigate('/')}
        >Main page</Button></div>
  )
}