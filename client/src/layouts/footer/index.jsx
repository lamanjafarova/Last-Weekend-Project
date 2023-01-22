import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../images/logo.png.webp"
import "./index.scss"

const Footer = () => {
  return (
    <div id='footer'>
        <div className="container">
            <div className="footerSection">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <p className='p_footer'>The automated process starts as soon as your clothes go into the machine.</p>
                  <div className="logos">
                  <div className="logo1"><i className="fa-brands fa-twitter"></i></div>
                   <div className="logo2"><i className="fa-brands fa-facebook-f"></i></div>
                   <div className="logo3"><i className="fa-brands fa-pinterest-p"></i></div>
                  </div>
                </div>
                <div className="solutions">
                    <ul><strong>Our solutions</strong>
                        <li>
                            <NavLink>Design & creatives</NavLink>
                        </li>
                        <li>
                            <NavLink>Telecommunication</NavLink>
                        </li>
                        <li>
                            <NavLink>Restaurant</NavLink>
                        </li>
                        <li>
                            <NavLink>Programing</NavLink>
                        </li>
                        <li>
                            <NavLink>Architecture</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="support">
                    <ul><strong>Support</strong>
                    <li>
                            <NavLink>Design & creatives</NavLink>
                        </li>
                        <li>
                            <NavLink>Telecommunication</NavLink>
                        </li>
                        <li>
                            <NavLink>Restaurant</NavLink>
                        </li>
                        <li>
                            <NavLink>Programing</NavLink>
                        </li>
                        <li>
                            <NavLink>Architecture</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="company">
                    <ul><strong>Company</strong>
                    <li>
                            <NavLink>Design & creatives</NavLink>
                        </li>
                        <li>
                            <NavLink>Telecommunication</NavLink>
                        </li>
                        <li>
                            <NavLink>Restaurant</NavLink>
                        </li>
                        <li>
                            <NavLink>Programing</NavLink>
                        </li>
                        <li>
                            <NavLink>Architecture</NavLink>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
        


    </div>
  )
}

export default Footer