import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Test() {
    let navigate = useNavigate()
  return (
    <div>
        <Button variant="outlined"
        onClick={ ()=> navigate('/') }>Outlined</Button>

    </div>
  )
}
