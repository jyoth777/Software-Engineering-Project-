//import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';

function Book() {
    const [source,setsource]=useState();
    const [dest,setdest]=useState();

    
    function handleChange(e){
      if (e.target.className == "dropbtn1")
      setsource(e.target.value) ; 
      else if (e.target.className == "dropbtn2")
      setdest(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault();
    }

  return (
  <div className="App">
    <div className="App-header">
    <h5>REWARD PTS</h5>
    <h5>:0</h5>&nbsp;&nbsp;&nbsp;&nbsp;
    PROFILE&nbsp;&nbsp;
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>LOGOUT</button>
    </a>
    
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <div className="left" >
    <select onChange={handleChange} className='dropbtn1'>  
    <option  disabled selected value = "PICK UP" > PICK UP </option> 
    <option value = "BMW"> BMW </option>  
    <option value = "Mercedes"> Mercedes</option>  
    <option value = "Audi"> Audi </option>  
    </select>  
    </div>
    <div className="right">
    <select onChange={handleChange} className='dropbtn2'>  
    <option  disabled selected value = "DROP" > DROP </option> 
    <option value = "BMW"> BMW </option>  
    <option value = "Mercedes"> Mercedes</option>  
    <option value = "Audi"> Audi </option>  
    </select> 
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <a href='/Activity'>
           <button className="size" onClick={handleSubmit}  style={{backgroundColor:"blue",color:"white"}}>BOOK</button>
   </a>
  </div>
  );
}

export default Book;