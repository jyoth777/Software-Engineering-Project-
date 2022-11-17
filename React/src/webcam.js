import React, { Component, useState } from 'react';

import Webcam from "react-webcam";



const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};



const WebcamCapture = () => {



    const [image, setImage] = useState('');

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
        },

        [webcamRef]
    );

    async function upload(e){
        e.preventDefault();
        let data = new FormData();
        console.log(image);
    //   data.append("file", file);
    //   data.append("name", localStorage.getItem('name'));
    //   data.append("email", localStorage.getItem('email'));
    //   data.append("title",output.title);
    //   data.append("comment",output.Comment)
    //   console.log(data.get('file'));

    //   await axios.post("http://localhost:8000/upload", data).then((out) => {

    //      if (out.status) {
    //         console.log("worked");
    //      }
    //      else
    //         console.log("failed")
    //   }).catch((error) => { console.log("Some error occurred, failed to register") });

    }

    return (
        <div>
            <div className="webcam-container">
                <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                />
                <button
                    onClick={(e) => { e.preventDefault(); capture(); }}>
                    Capture</button>
            </div>
            <div className="webcam-container">

                <div className="webcam-img">

                    {image == '' ? <Webcam

                        audio={false}

                        height={200}

                        ref={webcamRef}

                        screenshotFormat="image/jpeg"

                        width={220}

                        videoConstraints={videoConstraints}

                    /> : <img src={image} />}
                </div>
            </div>
            <button
                    onClick={(e) => upload(e)}>
                    Upload</button>
        </div>
    );
};

export default WebcamCapture;