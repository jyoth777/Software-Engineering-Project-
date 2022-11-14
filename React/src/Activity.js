//import {ReactComponent as Logo} from './logo.svg';
import './App.css';


function Activity() {
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
    <div className="right">
    <h2>DISTANCE: </h2>
    <h2>TIME: </h2>
    </div>
    <div className="down">
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>PAYMENT</button>
    </a>
    <br/>
    <br/>
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>CANCEL</button>
    </a>
    </div>
    </div>
    )
    }
    export default Activity;