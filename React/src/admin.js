

import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState,useRef,useEffect} from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

import axios from "axios";
import React,{useState,useEffect} from "react";
import { Placeholder } from 'react-bootstrap';
//exact is added to not display the home page even if the substring matches
//in switch,only the first one matching is rendered 
const Admin = ({user}) => {

  console.log("admin");
 
   function getFir(){
    console.log("test");
     axios.get("http://localhost:8000/getimg").then((out) => {

        if (out.status) {
           console.log("worked");
        }
        else
           console.log("failed");
        
     }).catch((error) => { console.log("Some error occurred, failed to register") });
    }
   
 
  return (
       <div class="ui centered card">
        <div class="image">
            <img src={`http://localhost:8000/getimg/` }/>

        </div>
       </div>
   
  );




}




export default Admin;





