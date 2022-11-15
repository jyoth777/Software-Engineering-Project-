//import {ReactComponent as Logo} from './logo.svg';
import './App.css';


function host() {
  return (
  <form>
  <div className="App">
    <div className="App-header">
    &nbsp;&nbsp;&nbsp;&nbsp;
    PROFILE&nbsp;&nbsp;
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>LOGOUT</button>
    </a>
    
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <div className="left" >
    <select className='dropbtn'>  
    <option  disabled selected value = "START POINT" > START POINT </option> 
    <option value = "BMW"> BMW </option>  
    <option value = "Mercedes"> Mercedes</option>  
    <option value = "Audi"> Audi </option>  
    </select>  
    </div>
    <div className="right">
    <select className='dropbtn'>  
    <option  disabled selected value = "END POINT" > END POINT </option> 
    <option value = "BMW"> BMW </option>  
    <option value = "Mercedes"> Mercedes</option>  
    <option value = "Audi"> Audi </option>  
    </select> 
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <a  href="https://react.school" >
           <button className="size" style={{backgroundColor:"blue",color:"white"}}>HOST</button>
    </a>
  </div>
  </form>
  );
}

export default host;
