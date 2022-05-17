import React, { useState } from 'react'
import style from './Main.module.css'
import Posts from './Posts'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Add_post({create}) {

  let [title, setTitle] = useState('')
  let [info, setInfo] = useState('')
  
  function addPost(e){
    e.preventDefault()
    let new_post = {title:title, info:info}
    setTitle('') 
    setInfo('')
    create(new_post)


  }

  return (
    <div className={style.inl}>
      <form action="">
        <input type="text" placeholder='title' 
        value={title}
        className={style.my_input}
        onChange={(e) => setTitle(e.target.value)}/> <br />
        <input type="text" placeholder='info'
        value={info}
        className={style.my_input}
        onChange={ (e)=> setInfo(e.target.value) }/> <br />
        <Button endIcon={<SendIcon/>}
          variant='outlined' 
          onClick={addPost}>123</Button>
      </form>
    </div>
  )
}
