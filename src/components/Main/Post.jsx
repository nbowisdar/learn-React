import React, {useState} from 'react'
import style from './Main.module.css'
import { Button } from '@mui/material'

export default function Post({post, index, delete_post}) {

  return (
    <div className={style.item}>
        <h2>{index}. {post.title}</h2>
        <p>{post.info}</p>
        <Button className={style.btn}
        variant='contained'
        onClick={ ()=> delete_post(post) }
        >Delete</Button>
    </div>
  )
}
