//import {ReactComponent as Logo} from './logo.svg';
import './App.css';


function Book() {
  return (
  <form>
  <div className="App">
    <div className="App-header">
    <h2>REWARD PTS</h2>&nbsp;&nbsp;&nbsp;&nbsp;
    <a  href="https://react.school" >
           
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>PROFILE</button>
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>LOGOUT</button>
    </a>
    
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <div className="left" >
    PICK UP
    <br/>
    <input style={{height: "30px",width:"50%"}} type="text" placeholder="ENTER PICK UP POINT"/>
    </div>
    <div className="right">
    DROP
    <br/>
    <input style={{height: "30px",width:"50%"}} type="text" placeholder="ENTER DROP POINT"/>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>BOOK</button>
    </a>
  </div>
  </form>
  );
}

export default Book;
