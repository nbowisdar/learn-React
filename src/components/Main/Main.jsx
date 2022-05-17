import React, { useEffect, useState } from 'react'
import Add_post from './Add_post'
import style from './Main.module.css'
import Posts from './Posts'

import Select from './UI/mySelect'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
// import SendIcon from '@mui/icons-material/Send';


export default function Main(props) {
  let data = [
    {title:'Post1', info:'About post1'},
  ]
  let [posts, setPosts] = useState(data)
  function test(post){
    setPosts([...posts, post])
  }
  function delete_post(post){
    let new_posts = posts.filter( (item) => item!==post )
    setPosts(new_posts)
  }
  let [option, setOption] = useState('')
  let [find, setFind] =useState('')
  function onChange1(e){
    setOption(e.target.value)
    setPosts([...posts].sort((a,b) =>
      a[option].localeCompare(b[option])
    )) 
  }


  return (
    <div className={style.container}>
      <Add_post create = {test}/>
      <div style={{paddingLeft:550}}>
      <TextField
      value={find}
      onChange={ (e) => setFind(e.target.value) }/>
      </div>
      {
        posts.length == 0 
        ? <h1 className={style.nexist}>No posts</h1>
        : <Posts posts={posts} delete_post={delete_post} query={find}/>
      }

      <div className={style.sort}>
        <Select arr={['title', 'info']} onChange1={onChange1}/>

      <h1>{option}</h1>                
        </div>
      </div>)
}
