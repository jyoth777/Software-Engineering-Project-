//import logo from './logo.svg';
import './App.css';


function Home() {
  return (
  
  <div className="App">
    <div className="App-header">
    <img src="carpooling_logo.png" alt="carpooling logo"></img>
    <h2>REWARD PTS</h2>&nbsp;&nbsp;&nbsp;&nbsp;
    <a  href="https://react.school" >
           
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>PROFILE</button>
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>LOGOUT</button>
    </a>
    
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>BOOK A RIDE</button>
    </a>
    <br/><br/><br/>
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>HOST A RIDE</button>
    </a>
    <br/><br/><br/><br/><br/><br/><br/>
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>HAVE AN ISSUE?</button>
    </a>
  </div>
  
  );
}

export default Home;