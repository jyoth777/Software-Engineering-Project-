//import logo from './logo.svg';
import './App.css';


function Home() {
  return (
  
  <div className="App">
    <div className="App-header">
    <h5>REWARD PTS</h5>
    <h5>:0</h5>&nbsp;&nbsp;&nbsp;&nbsp;
    PROFILE&nbsp;&nbsp;
    <a  href="/Home" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>LOGOUT</button>
    </a>
    
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <a  href="/Book" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>BOOK A RIDE</button>
    </a>
    <br/><br/><br/>
    <a  href="/Book" >
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