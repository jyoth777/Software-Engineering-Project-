
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

//exact is added to not display the home page even if the substring matches
//in switch,only the first one matching is rendered 
const App = () => {

  const location = useLocation();
  return (

    <AnimatePresence initial={false}>
       <header>
          <Header/>
        </header>

      <Routes location={location} key={location.pathname}>
       

        <Route exact path='/register' element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/home" element={<Home/>}/>

        <Route path="/host" element={<Host/>}/>

        <Route path="*" element={<h1>Error page does not exist</h1>} />

      </Routes>
    </AnimatePresence>
  );

}







export default App;





