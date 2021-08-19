import { Link } from 'react-router-dom';
import Icons from './Icons';
import Slideshow from './Slideshow';

const Navigation = () => {
    
     function calling()
     {
        var x = document.getElementById("demo");
        if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        } else { 
        x.className = x.className.replace(" w3-show", "");
        }
    
    }
      function home()
      {
        alert("yes");
      //  var x=document.getElementById("yes").innerHTML="green";
      var x = document.getElementById("yes");
      x.style.color = "green";
      }
    

     
    
    return (
                <>
                  
            <div class="w3-container w3-grey w3-text-black w3-padding-4">

                <div id="head">

                    <div >


                        <a href="tel:8279936818" target="_blank" > <i class="fa fa-envelope ">amandasila74@gmail.com</i></a>

                    </div>
                    <div >


                        <a href="tel:8279936818" target="_blank" > <i class="fa fa-phone ">8277936818</i></a>

                    </div>
                    <div >
                        <a href="https://wa.me/918279936818" target="_blank">
                            <i class="fa fa-whatsapp">Msg on whatsapp</i></a>

                    </div>
                </div>
            </div>
            <div className="w3-row w3-container w3-padding w3-row w3-panel w3-green">
        
            <div className="w3-col s4  w3-center w3-col w3-half" >
              <img  class="Logo" src="/Images/logos.png" />
            </div>
            <div className="w3-col s8  w3-right  w3-col w3-half">
            <h4 className="w3-wide w3-text-black " ><b>LOVE|PEACE|MOUNTAIN</b></h4><hr/> 
            </div>
      </div>
      <call/>
            
        <div className="w3-conatiner w3-padding w3-center" >
                <div className="w3-bar  w3-grey">
                    <Link to="/" className="w3-bar-item w3-button ">Home</Link>
                    <Link to="/About" className="w3-bar-item w3-button w3-hide-small" id="yes" onClick={home}>About</Link>
                    <Link to="/product" className="w3-bar-item w3-button w3-hide-small">Product</Link>
                    <Link to="/Feedback" className="w3-bar-item w3-button w3-hide-small">Feedback</Link>
                    <button class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"onClick={calling}>&#9776;</button>
              
                </div>
                <div id="demo" className="w3-bar-block w3-grey w3-hide w3-hide-large w3-hide-medium">
                    <Link to="/" className="w3-bar-item w3-button">Rent products</Link>

                    <Link to="/About" className="w3-bar-item w3-button">About</Link>
                    <Link to="/Product" className="w3-bar-item w3-button">Product</Link>
                </div>
            </div>
                 
            <Slideshow/>
      
          <Icons/>
           
          
       
      </>   )
}
export default Navigation;