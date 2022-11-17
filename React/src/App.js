
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState,useRef,useEffect} from 'react';
import background from './assets/newyork.jpg';
import Login from './login'
import Upload from './user/upload'
import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import Header from './header'
import Host from './user/host'
import Home from './user/home'
import { useState, useRef, useEffect } from 'react';
import Admin from './admin/admin'
import Verify from './admin/verify'
import Activity from './user/activity'
import Person from './user/profile'
import Edit from './user/edit'
import WebcamCapture from './user/webcam';
//exact is added to not display the home page even if the substring matches
//in switch,only the first one matching is rendered 
const App = () => {
  const [Userdetails, setUserdetails] = useState({ username: "", phonenumber: "", email: "", address: "", status: localStorage.getItem("status")});
  console.log(Userdetails.status)
  const location = useLocation();
  if (Userdetails.status == 1) {
    return (

      <AnimatePresence initial={false}>

        <header>
          <Header />
        </header>

        <Routes location={location} key={location.pathname}>

          <Route path='/admin' element={<Admin user={Userdetails} />} />

          <Route path='/activity' element={<Activity />} />

          <Route path='/verify' element={<Verify />} />

          <Route exact path='/register' element={<Register />} />

          <Route path="/login" element={<Login setUser={setUserdetails} />} />

          <Route path="/upload" element={<Upload user={Userdetails} />} />

          <Route path="/profile" element={<Person/>}/>

          <Route path="/profile/edit" element={<Edit/>}/>
          <Route path="/profile/webcam" element={<WebcamCapture/>}/>
  
          <Route path="/home" element={<Home user={Userdetails} />} />

          <Route path="/host" element={<Host />} />

          

          <Route path="*" element={<h1>Error page does not exist</h1>} />

        </Routes>
      </AnimatePresence>
    );
  }
  else {
    return (
      <AnimatePresence initial={false}>



        <Routes location={location} key={location.pathname}>

          <Route path='/admin' element={<Admin user={Userdetails} />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/verify' element={<Verify />} />
          <Route exact path='/register' element={<Register />} />

          <Route path="/login" element={<Login setUser={setUserdetails} />} />

          <Route path="/upload" element={<Upload user={Userdetails} />} />


          <Route path="/home" element={<Home user={Userdetails} />} />

          <Route path="/host" element={<Host />} />

          <Route path="*" element={<h1>Error page does not exist</h1>} />

        </Routes>
      </AnimatePresence>
    );
  }

}







export default App;





