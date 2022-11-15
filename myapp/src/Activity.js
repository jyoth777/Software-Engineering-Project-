//import {ReactComponent as Logo} from './logo.svg';
import './App.css';


function Activity() {

    function handlesubmit(e) {
        e.preventDefault();

      

    }

  return (
  <div className="App">
    <div className="App-header">
    <h5>REWARD PTS</h5>
    <h5>:0</h5>&nbsp;&nbsp;&nbsp;&nbsp;
    <h5 id="profile">PROFILE</h5>&nbsp;&nbsp;
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>LOGOUT</button>
    </a>
    
    </div>
    <div className="right">
    <h2>DISTANCE: </h2>
    <h2>TIME: </h2>
    </div>
    <div className="down">
    <a  href="/Payment" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>PAYMENT</button>
    </a>
    <br/>
    <br/>
    <a  href="https://react.school" >
           <button className="size" onSubmit={handlesubmit} style={{backgroundColor:"blue",color:"white"}}>CANCEL</button>
    </a>
    </div>
    </div>
    )
    }
    export default Activity;