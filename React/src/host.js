import './home.css';


function Host() {
  return (
  <form>
  <div className="App">
   
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

export default Host;