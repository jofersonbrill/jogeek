/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";



export default class Navbars extends Component{


    render(){
        return (
            <nav>
            <h4 className='band'><img src={logo} alt='' /></h4>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/roadmap">Roadmap</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

        )
    }

}