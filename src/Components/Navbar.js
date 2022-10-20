import React from 'react'
import { AppBar, Toolbar, Typography, styled } from '@mui/material'

const Header = styled(AppBar)`
background: #111111;
`
const Tabs = styled(Typography)`
font-size:20px;
margin-right:20px;
`

const Navbar = () => {
  return (
    <div>
      <Header position='static'>
        <Toolbar>
         <Tabs>A CRUD App</Tabs>
         <Tabs>All Users</Tabs>   
         <Tabs>Add Users</Tabs>   
        </Toolbar>
      </Header>
    </div>
  )
}

export default Navbar
