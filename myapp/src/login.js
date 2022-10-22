
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useRef, useEffect } from 'react';
import background from './assets/newyork.jpg'
import {Link} from 'react-router-dom';

const login = () => {



  function handlesubmit(e) {
    e.preventDefault();
    
    




  }

  return (

    <div class="shadow-lg p-2 bg-white rounded" style={{ margin: "90px 120px 120px 120px", position: "relative", padding: "40px", height: "500px" }}>
      <div class="login">
        <form onSubmit={(e) => handlesubmit(e)}>

          <div class="form-group" style={{ marginTop: "40px" }}>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>

          <div class="form-group" style={{ marginTop: "40px" }}>
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <p style={{ paddingTop: "30px", fontSize: "14px" }}>Not registered?<Link to='/register'> Click Here</Link> to Register</p>

          <button type="submit" class="btn btn-dark" style={{ marginTop: "40px", marginLeft: "40%" }}>Log In</button>

        </form>
      </div >
      <img className='background' src={background}></img>
    </div>

  );
}

export default login;