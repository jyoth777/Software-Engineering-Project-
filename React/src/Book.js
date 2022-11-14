//import {ReactComponent as Logo} from './logo.svg';
import './App.css';


function Book() {
  return (
  <form>
  <div className="App">
    <div className="App-header">
    <h5>REWARD PTS</h5>
    <h5>:0</h5>&nbsp;&nbsp;&nbsp;&nbsp;
    PROFILE&nbsp;&nbsp;
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>LOGOUT</button>
    </a>
    
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <div className="left" >
    <select className='dropbtn'>  
    <option  disabled selected value = "PICK UP" > PICK UP </option> 
    <option value = "BMW"> BMW </option>  
    <option value = "Mercedes"> Mercedes</option>  
    <option value = "Audi"> Audi </option>  
    </select>  
    </div>
    <div className="right">
    <select className='dropbtn'>  
    <option  disabled selected value = "DROP" > DROP </option> 
    <option value = "BMW"> BMW </option>  
    <option value = "Mercedes"> Mercedes</option>  
    <option value = "Audi"> Audi </option>  
    </select> 
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
