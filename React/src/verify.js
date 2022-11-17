import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

function Verify() {
    
    const [Cards, setCards] = useState([]);

    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };


    async function getImg(){
        await axios.get("http://localhost:8000/getimg").then((out) => {

            if (out.status) {
                console.log("worked");
                console.log(out.data)
                out.data.forEach((a) => {
                    console.log(a)
                    setCards((cards)=>[...cards, a]);
                })

                console.log(Cards);

            }
            else
                console.log("failed");

        }).catch((error) => { console.log("Some error occurred, failed to register" + error) });
    }

    useEffect(() => {
        getImg();
        
       
    }, []);

    return (
        
        
            
        <div style={{display:"flex",flexWrap:"wrap",marginLeft:"2vw"}}>
            {

                Cards.map((ele) => {
                    return (

                        <Card style={{ width: '18rem' ,maxHeight:"25rem",margin:"3vw"}} className="shadow-lg p-2 bg-white rounded">
                            <Card.Img variant="top" src={"data:image/jpeg;base64,"+arrayBufferToBase64(ele.img.Data.data)} />
                            <Card.Body>
                                <Card.Title>{ele.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{ele.email}</Card.Subtitle>
                                <Card.Text>
                                   {ele.comment}
                                </Card.Text>
                                
                                <Button variant="success" style={{marginLeft:"1vw"}}>Accept</Button>
                                <Button variant="danger" style={{marginLeft:"4vw"}}>Reject</Button>
                            </Card.Body>
                        </Card>
                    );
                })

            }

        </div >

    );
}


export default Verify;
