import React from 'react'
import style from './Main.module.css'
import Post from './Post'
import { useState } from 'react'

export default function Posts({posts, delete_post, query}) {
  return (
    <div className={style.grid}>

        {posts.filter( (post) =>
        post.title.includes(query) )
        .map( (post, index) => 
            <Post post={post} key={index} index={index+1} delete_post={delete_post}/> )
        }
    </div>
  )
}
