import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../images/logo.png.webp"
import { Dropdown, Menu } from 'antd';
import "./index.scss"

const Header = () => {
  return (
    <div id='header'>
        <div className="container">
            <div className="header">
            <img src={Logo} alt="" className='header-img' />
              <nav>
              <ul>
                <li>
                <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                <NavLink to={"/"}>Courses</NavLink>
                </li>
                <li>
                <NavLink to={"/add-courses"}>Add Course</NavLink>
                </li>
                <li>
                <NavLink to={"/"}>
                <Dropdown
          overlay={(
            <Menu>
            <div className="blog">
            <Menu.Item key="0">
                Blog
            </Menu.Item>
            <Menu.Item key="1">
                 Blog Details
            </Menu.Item>
            <Menu.Item key="2">
                Element
            </Menu.Item>
        </div>
    </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Blog
          </a>
        </Dropdown>
                </NavLink>
                </li>
                <li>
                <NavLink to={"/"}>Contact</NavLink>
                </li>
               </ul>
               <div className="btnGroup">
                <button className='join-btn'>Join</button>
                <button className='logIn-btn'>Log In</button>
               </div>
              </nav>
            </div>
        </div>



    </div>
  )
}

export default Header