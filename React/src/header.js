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
import { Routes, Route, useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate();
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.1,
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    function onClick(e) {
        e.preventDefault();

        if (e.target.value == "/login") {
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('phonenumber');
            localStorage.removeItem('address');
            localStorage.setItem('status', 0);
            window.location='http://localhost:3000/login'
        }
        else{
        navigate(e.target.value);
        }
    }

    return (


        <motion.nav variants={container}
            initial="hidden"
            animate="show" class="w3-bar w3-black" >

            <motion.img initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                }} src={logo} id="logo" style={{ height: "5vw", marginLeft: "0vw" }} alt="carpooling logo"></motion.img>

            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <motion.button variants={item} value="/home" onClick={onClick} class="w3-button">Home</motion.button>
            <motion.button variants={item} value="/upload" onClick={onClick} class="w3-button">Complain</motion.button>
            <motion.button variants={item} value="/profile" onClick={onClick} class="w3-button">Profile</motion.button>
            <motion.button variants={item} value="/login" onClick={onClick} class="w3-button ">Logout</motion.button>
            <motion.p variants={item} href="#contact" class="w3 " style={{ marginRight: "5vw", marginTop: "1.7vw", float: "right", color: "gold" }}>Reward Points:0</motion.p>

        </motion.nav>

    );
}


export default Header;