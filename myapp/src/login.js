
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useRef, useEffect } from 'react';
import background from './assets/newyork.jpg'
import { Link } from 'react-router-dom';
import axios from "axios";
import {motion} from 'framer-motion';


const Login = () => {

  const [output, setoutput] = useState({

  });



  function handlesubmit(e) {
    e.preventDefault();




    //null case for email

    if (output.email === '') {
      console.log('Email not entered')

    }

    else {
      //email should contain one @
      if ([...output.email].filter(x => x === '@').length === 1) {

        console.log('Email format correct')
        //null case for password
        if (output.password === '') {
          console.log('Password not entered')
        }

        else {

          console.log('password format correct')
          
          axios.post("http://localhost:8000/login", output).then((output) => {
            console.log(output.data[0])
            window.location.replace("http://localhost:3000/Home");
          });
        }
      }
      //correct email
      else {
        console.log('Email does not contain @')

      }


    }


  }

  function handlechange(e) {
    e.preventDefault();
    var value = e.target.value;
    var name = e.target.name;
    setoutput({ ...output, [name]: value });
  }

  return (

    <motion.div initial={{ opacity: 1, x: 1400 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 1, x: 1400, transition: { duration: 0.2 } }} transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }} className="shadow-lg p-2 bg-white rounded" style={{ margin: "90px 120px 120px 120px", position: "relative", padding: "40px", height: "500px" }}>
      <h1 class='title_l' >Login</h1>
      <div class="login">
        <form onSubmit={(e) => handlesubmit(e)}>

          <div class="form-group" style={{ marginTop: "40px" }}>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" onChange={handlechange} id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>

          <div class="form-group" style={{ marginTop: "40px" }}>
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" onChange={handlechange} name="password" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <p style={{ paddingTop: "30px", fontSize: "14px" }}>Not registered?<Link to='/register'> Click Here</Link> to Register</p>

          <button id="loginbtn" type="submit" class="btn btn-dark" style={{ marginTop: "40px", marginLeft: "40%" }}>Log In</button>

        </form>
      </div >
      <img className='background' src={background}></img>
    </motion.div>

  );
}

export default Login;