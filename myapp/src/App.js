
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState,useRef,useEffect} from 'react';
import background from './assets/newyork.jpg';
import Login from './login'
import Home from './Home'
import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//exact is added to not display the home page even if the substring matches
//in switch,only the first one matching is rendered 
const App = () => {

  return (

    <Routes>
   
      <Route exact path='/register' element={<Register/>}/>
        
      <Route path="/login" element={<Login/>}/>
        
      <Route path="/Home" element={<Home/>}/>

     <Route path="*" element={<h1>Error page does not exist</h1>}/>
   
    </Routes>
  );

}







export default App;





