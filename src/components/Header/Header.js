import React from 'react'
import SubjectIcon from '@material-ui/icons/Subject';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import logo from '../../assets/Images/logo (2).png'
import Avatar from '@material-ui/core/Avatar';
import user from '../../assets/Images/avatar.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
    return (
        <Navbar className="nav" expand="lg" sticky="top">
  <Navbar.Brand href="/" className="ml-5">
  <SubjectIcon className="mr-5"/>
           <img
                 alt="link"
                 src={logo}
                 width="60"
                 height="30"
                 className="img-fluid"
                />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav className="mr-5">
      <Nav.Link href="#home" className="mt-2"><SearchIcon/></Nav.Link>
      <Nav.Link href="#link" className="mt-2"> <NotificationsNoneIcon/></Nav.Link>
      <Nav.Link href="#home" >
      <span className='avatar-Content'>
             <Avatar  src={user} alt="userName"/> 
             <span className='username'>UserName</span>    
            </span>
      </Nav.Link>
      <Nav.Link href="#home" className="mt-2"><SettingsIcon/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
