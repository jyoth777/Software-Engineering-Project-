import '../Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.png'
import axios from "axios"
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



const Upload = ({ user }) => {
   console.log(user.name);
   const[output,setoutput]=useState()
   const [file, setFile] = useState()

   function handleChange(event) {
      event.preventDefault();
      setFile(event.target.files[0])
   }

   async function send() {
      let data = new FormData();

      data.append("file", file);
      data.append("name", localStorage.getItem('name'));
      data.append("email", localStorage.getItem('email'));
      data.append("title",output.title);
      data.append("comment",output.Comment)
      console.log(data.get('file'));

      await axios.post("http://localhost:8000/upload", data).then((out) => {

         if (out.status) {
            console.log("worked");
         }
         else
            console.log("failed")
      }).catch((error) => { console.log("Some error occurred, failed to register") });

   }


   function onClick(e) {
      e.preventDefault();
      console.log(output);
      send();


   }

   function onChange(e) {
      e.preventDefault();
      var value = e.target.value;
      var name = e.target.name;
      setoutput({ ...output, [name]: value });
   }



   return (

      <div>



         <motion.div initial={{ opacity: 1, x: 1400 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 1, x: 1400, transition: { duration: 0.2 } }} transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
         }} className="shadow-lg p-2 bg-white rounded" style={{ margin: "90px 120px 120px 120px", position: "relative", padding: "40px", height: "500px" }}>
            <h1 class='title_l' style={{ marginLeft: "33vw" }}>Place Complaint</h1>

            <FloatingLabel controlId="floatingTextarea2" label="Title" style={{  margin:'40px' }}>
               
               <input type="text" class="form-control" name="title" id="name" onChange={(e) => onChange(e)} placeholder="Enter Name" required />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Comments" style={{  margin:'40px' }}>
               <Form.Control
                  as="textarea"
                  name="Comment"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  onChange={(e) => onChange(e)}
               />
            </FloatingLabel>

            <div class="form-group" style={{ margin: "40px" }}>
               <label for="exampleInputEmail1"></label>
               <input type="file" class="form-control" onChange={handleChange} id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
               
            </div>

            <button onClick={onClick} class="btn btn-dark" id="submit" style={{marginLeft:"38vw"}}> Submit</button>

         </motion.div>

      </div>


   );




}



export default Upload;