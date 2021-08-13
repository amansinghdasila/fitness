import Icons from './Icons';
import { Link} from 'react-router-dom';
const Footer = () => {
           return (
                         <>
                          <Icons/>
                        <div className="w3-container w3-green w3-text-black">

                            <div id="first">

                                <div>

                                    <h2>Contact</h2>
                                    <b>Address:</b>mukhani haldwani<br /> uttrakhand
                                    263139<br />
                                    <b>email:</b>amandasila@gmail.com
                                    <b> site:</b>www.banjaralife.com

                                </div>
                                <div>

                                    <h2>Social media</h2>
                                    <Link to href="tel:8279936818" target="_blank" className="float"> <i className="fa fa-phone  size"></i></Link>
                                    <Link to="https://www.facebook.com/golu.thapa.12" target="_blank" className="float"><i className="fa fa-envelope  size "></i></Link>
                                    <Link to ="https://instagram.com/100rb_thapa?utm_medium=copy_link" target="_blank" className="float"><i className="fa fa-instagram size"></i></Link>
                                    <Link to ="https://wa.me/918279936818" target="_blank" className="float"><i className="fa fa-whatsapp  size"></i></Link>
                                </div>
                                <div >

                                    <h2>More to know</h2>
                                    <Link to="file:///D:/thapa_project/boutus.html" target="_blank">About us in detail</Link><br/>
                                        <Link to="" target="_blank">Products in rent</Link><br/>
                                            <Link to="" target="_blank">Famous places</Link><br/>
                                </div>  
                            </div>
                        </div> 
                            <br/>
                            <div className="w3-white w3-center upper">
                                        <a href="#head"><img src="/Images/f.png" style={{width:50,height:50}}></img></a> 
                            </div>
                          
                                
                                        
             
    </>
    )
}

export default Footer;