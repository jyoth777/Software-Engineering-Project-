import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useRef, useEffect } from 'react';
import background from './assets/newyork.jpg'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import {motion} from 'framer-motion/dist/framer-motion'
//name,phone number,email,password,address,type(car owner or car pooler),

// type->0:car pooler
// type->1:car owner

//1 @ must be present

//max length  and password and null cases
//password length has to be more than 3


const Register = () => {

  const [output, setoutput] = useState({
   

  });






  function handleSubmit() {
    console.log(output);


  }

  console.log(output);

  function onChange(e) {

    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;



    if (name == "repeatpassword") {
      if (output.password != value) {
        //display error message


        e.target.classList.add('is-invalid');

      }
      else {
        console.log(e.target);
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');

      }

    }
    else {

      setoutput({ ...output, [name]: value })


    }



  }


  return (

    <motion.div   initial={{opacity:1,x:-1400}} animate={{opacity:1, x:0}} exit={{opacity:1,x:-1400,transition:{ duration:0.2}}} transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }} class="shadow-lg p-2 bg-white rounded" style={{  margin: "90px 120px 120px 120px",position: "relative" ,height:"500px"}}>

      <div class="Register">
        <h1 class='title' >Register</h1>


        <form style={{ width: "100%" }} onSubmit={handleSubmit}>

          <div style={{ width: "100%", overflow: "hidden", marginBottom: "40px" }}>
            <div class="left">

              <div class="form-group" style={{ marginTop: "40px" }}>
                <label forhtml="name">Name</label>
                <input type="text" class="form-control" name="name" id="name" onChange={(e) => onChange(e)} placeholder="Enter Name" required />

              </div>

              <div class="form-group" style={{ marginTop: "40px" }}>
                <label forhtml="exampleInputEmail1">Email address</label>
                <input type="email" onChange={onChange} class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" required />

              </div>

              <div class="form-group" style={{ marginTop: "40px" }}>
                <label forhtml="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="password" onChange={onChange} placeholder="Password" required />
              </div>

            </div>

            <div class="right">

              <div class="form-group" style={{ marginTop: "40px" }}>
                <label forhtml="exampleInputEmail1">PhoneNumber</label>
                <input type="tel" length='10' class="form-control" id="tel" name="phonenumber" onChange={onChange} placeholder="Enter PhoneNumber" required />

              </div>

              <div class="form-group" style={{ marginTop: "40px" }}>
                <label forhtml="exampleInputEmail1">address</label>
                <input type="textarea" class="form-control" id="address" name="address" onChange={onChange} placeholder="Enter address" required />
              </div>

              <div class="form-group" style={{ marginTop: "40px" }}>
                <label forhtml="repeatpassword1">Repeat Password</label>

                <FormControl type="password" class="form-control" id="repeatpassword1" name="repeatpassword" onChange={onChange} placeholder="Repeat Password" required  >
                </FormControl>
                <FormControl.Feedback forhtml="repeatpassword1" type="invalid" >
                  Not matching with password!
                </FormControl.Feedback>


              </div>
            </div>
            <button type="submit" class="btn btn-dark" id="registerbtn">Submit</button>
          </div>


         
        </form>

      </div >

    </motion.div>

  );

}



export default Register;