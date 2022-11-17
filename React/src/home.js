//import logo from './logo.svg';
import './home.css';
import { motion } from 'framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Home({user}) {
    console.log(user);
    if(user.status==1){
    return (

        <motion.div initial={{ opacity: 1, x: 1400 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 1, x: 1400, transition: { duration: 0.2 } }} transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }} className="shadow-lg p-2 bg-white rounded" style={{ margin: "90px 120px 120px 120px", position: "relative", padding: "40px", height: "500px" }}>
            

            <div className="App">

                <br /><br /><br /><br /><br />
                <a href="https://react.school" >
                    <button className="size" style={{ backgroundColor: "black", color: "white" ,borderRadius:"3px",padding:"5px"}}>BOOK A RIDE</button>
                </a>
                <br /><br /><br />
                <Link to="/host" >
                    <button className="size" style={{ backgroundColor: "black", color: "white",borderRadius:"3px",padding:"5px" }}>HOST A RIDE</button>
                </Link>
                <br /><br /><br /><br /><br /><br /><br />
                <Link to="/upload" >
                    <button className="size" style={{ backgroundColor: "black", color: "white",borderRadius:"3px" ,padding:"5px"}}>HAVE AN ISSUE?</button>
                </Link>
                
            </div>

        </motion.div>
    


    );
    }else{
        return (<p style={{ marginLeft:"35vw",paddingTop: "30px", fontSize: "25px" }}>Not Logged In<Link to='/login'> Click Here</Link> Login</p>);

    }
}

export default Home;