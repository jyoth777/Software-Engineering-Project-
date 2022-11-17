
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState,useRef,useEffect} from 'react';
import { useState, useRef, useEffect } from 'react';
import Login from '../login'
import Upload from './upload'
import Home from './home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import Header from '../header'
import Register from '../Register'
//exact is added to not display the home page even if the substring matches
//in switch,only the first one matching is rendered 
const User = () => {
    //status:0->user not logged in
    //status:1-> user has logged in 
    const location = useLocation();
    const [Userdetails,setUserdetails]=useState({username:"",phonenumber:"",email:"",address:"",status:0});
  return (

    <AnimatePresence initial={false}>
       <header>
          <Header/>
        </header>

      <Routes location={location} key={location.pathname}>
       

        <Route exact path='/register' element={<Register />} />

        <Route path="/login" element={<Login  />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/home" element={<Home user={Userdetails}/>}/>

        <Route path="*" element={<h1>Error page does not exist</h1>} />

      </Routes>
    </AnimatePresence>
  );

}







export default User;





