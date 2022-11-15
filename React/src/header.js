import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useRef, useEffect } from 'react';
import background from './assets/newyork.jpg'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import { motion } from 'framer-motion/dist/framer-motion'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom';


const Header=()=>{
    return(
    <nav class="w3-bar w3-black" >
        <img src={logo} id="logo" style={{height:"5vw",marginLeft:"0vw"}} alt="carpooling logo"></img>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <Link to="/home" class="w3-button">Home</Link>
        <Link to="/upload" class="w3-button">Complain</Link>
        <Link to="/profile" class="w3-button">Profile</Link>
        <Link to="/login" class="w3-button ">Logout</Link>
        <p href="#contact" class="w3 " style={{marginRight:"5vw",marginTop:"1.7vw",float:"right",color:"gold"}}>Reward Points:0</p>
    </nav>
    );
}


export default Header;