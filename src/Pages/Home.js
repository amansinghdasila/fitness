import Product from './Product';
import Icons from '../Component/Icons';



const Home=()=>
{
        return (
           <>
          
        <div className="box box-bg sb12">lets go</div>
                        <div className="w3-container"> 
                                <div className="w3-conatiner w3-blue w3-padding w3-right">
                                <p>Are you planning to travel anytime soon and want to cut short your travel budget.
                                        Here we are, happy to help you out. <br/>Rent some expensive yet inescapable travel equipment 
                                        for camping, trekking, hiking, etc. from us,<br/> right before your trip, and make it well within 
                                        your budget.<br/> This will not only make your trip pocket friendly but will also assure<br/>
                                        you a safe travel experience.
                                ​</p>
                                </div> 
                        </div> 
                        
                        <div className="w3-container w3-grey">
                                <div className="w3-panel w3-center w3-text-black w3-green">
                                        <p>
                                                <b> Safety Tips Regrading Camp</b>
                                        </p>
                                </div>
                                
                                        
                                        <div className="w3-container w3-left w3-padding" >
                                                
                                                <b>1.Ask what you need to bring in advance<hr/></b>
                                                <p>It's a good idea to know exactly what you need to bring to camp that might not<br/> 
                                                otherwise be found there. For the most part, you should bring all the necessary<br/>  
                                                hygiene essentials like toothpaste, toothbrushes,
                                                deodorant, and other necessities.<br/></p> 
                                        </div> 
                                        <div className="w3-container w3-right w3-padding" >  
                                                <b>2.Have all your things ready and packed days before<hr/></b>
                                                
                                                <p>
                                                If you start packing days before you need to leave for camp, you're less likely to<br/> 
                                                forget or remember that you didn't pack something. The last thing you want to do<br/> is 
                                                to be in a rush packing 30 minutes before leaving for camp, which will only increase<br/> 
                                                your odds of forgetting something
                                                </p>
                                        </div>
                                        <div className="w3-container w3-left w3-padding" >
                                                <b>3.Bring some extra cash if possible<hr/></b>
                                                <p>
                                                Although it's not required, having some extra spending money might. <br/>come in handy. Sometimes
                                                there is unconditions suituations 
                                                occurs during the <br/>traveling and in camping , so thats why you should go with some extra cash .
                                
                                                </p>
                                        </div>
                                        <div className="w3-container w3-right w3-padding " >
                                                <b>4.Use the packing list you made, so you don't forget anything<hr/></b>
                                                <p>
                                                The most important thing regrading the camp and traveiling is the packing list .<br/>
                                                If you go without any prepration menas not making any list so it will dangerous for you.<br/>
                                                So make sure you make a perfect list for your camping , and recheck one day before going to camping.
                                                </p>
                                        </div>
                                
                                

                        </div>
                             
                                <div className="w3-panel w3-center w3-green">
                                        <p className="w3-text-black w3-wide"><b>famous location in uttrakhand</b></p>
                                </div>  
                                <div className="w3-row-padding w3-margin-top">
                                <div className="w3-third">
                                <div className="w3-card">
                                        <img src="\Images\tent6.jpg" style={{width:360, height:300}}/>
                                        <div className="w3-container">
                                        <h5>Rishikesh</h5>
                                        </div>
                                </div>
                                </div>
                                
                                <div className="w3-third">
                                <div className="w3-card">
                                        <img src="\Images\tent7.jfif" style={{width:360, height:300}}/>
                                        <div className="w3-container">
                                        <h5>Badrinath</h5>
                                        </div>
                                </div>
                                </div>
                                
                                <div className="w3-third">
                                <div className="w3-card">
                                        <img src="\Images\tent8.jpg" style={{width:360, height:300}}/>
                                        <div className="w3-container">
                                        <h5>Munsyari</h5>
                                        </div>
                                </div>
                                </div>
                                </div>  
                                  <div className="w3-row-padding w3-margin-top">
                                <div className="w3-third">
                                <div className="w3-card">
                                        <img src="\Images\tent10.jpg" style={{width:360, height:300}}/>
                                        <div className="w3-container">
                                        <h5>Nanital</h5>
                                        </div>
                                </div>
                                </div>
                                
                                <div className="w3-third">
                                <div className="w3-card">
                                        <img src="\Images\tent7.jfif" style={{width:360, height:300}}/>
                                        <div className="w3-container">
                                        <h5>Kedrnath</h5>
                                        </div>
                                </div>
                                </div>
                                
                                <div className="w3-third">
                                <div className="w3-card">
                                        <img src="\Images\tent9.jpg" style={{width:360, height:300}}/>
                                        <div className="w3-container">
                                        <h5>Muktheswar</h5>
                                        </div>
                                </div>
                                </div>
                                </div>
                               
                                <div className="w3-panel w3-center w3-blue">
                                        <p>Give your essential feedback</p>
                                </div>
                                <div className="container">
                                <form action="/action_page.php">
                                <div className="row">
                                        <div className="col-25">
                                        <label for="fname">Name</label>
                                        </div>
                                        <div className="col-75">
                                        <input type="text" id="fname" name="name" placeholder="Your name.."/>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-25">
                                        <label for="lname">Email</label>
                                        </div>
                                        <div className="col-75">
                                        <input type="email" id="email" name="email" placeholder="abc@gmail.com"/>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-25">
                                        <label for="subject">Feedback</label>
                                        </div>
                                        <div className="col-75">
                                        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:200}}></textarea>
                                        </div>
                                </div>
                                <div className="row">
                                        <input type="submit" value="Submit"/>
                                </div>
                                </form>
                                
                                
                        </div> 
                        <div className="w3-panel w3-green w3-center ">
                                <p className="w3-container w3-wide"><b>Esstinal Things To Carry</b></p>
                        </div>
                        <div className="w3-container w3-padding w3-grey">
                                
                                        <p>
                                        <b className="w3-text-black">1.Addhar Card</b><hr/><br/>
                                                The most important thing is that you have to carry your  addhar card for the<br/>
                                                verification , you have to submit your addhar card in our branch after the <br/>verification you can take any thing in rent
                                                .Don't worry you can collect your addhar card <br/>after returning the products you had taked.                  
                                        </p><hr/>
                                <p>
                                        <b className="w3-text-black">2.Any other Goverment Card</b><hr/><br/>
                                                Secondary thing you have to carry withyour self a goverment card or document 
                                                it may be driving licens , Voter id card.

                                </p><hr/>
                                <p>
                                        <b className="w3-text-black">3.A Passport Size Photo</b><hr/><br/>
                                                Carry a passport size photo ,just for the other proces.
                                </p>
                        </div>
                          
                              
                                <div className="w3-container w3-white">
                                        <div className="w3-panel w3-green w3-wide w3-center">
                                                <p><b>Why choose us</b></p>
                                        </div>
                               
                                        <div className="w3-row-padding w3-margin-top">
                                        <div className="w3-third">
                                        <div className="w3-card">
                                                <h5 className="w3-center">Customer Satisfaction</h5>
                                                <img src="\Images\tent12.png" style={{width:300 ,height:275}}/>
                                                <div className="w3-container">
                                                <h5 className="w3-text-blue">Having a great intraction with our customers. <br/>
                                                We provide a very helping environment , by which <br/>
                                                our customers always satisfiy with us. As we all <br/>
                                                know that customer is god ,so we give our 100%
                                                in our work .
                                                </h5>
                                                </div>
                                        </div>
                                        </div>
                                        
                                        <div className="w3-third">
                                        <div className="w3-card">
                                        <h5 className="w3-center">Always avialable</h5>
                                        <img src="\Images\tent13.jpg" style={{width:300 ,height:275}}/>
                                        <div className="w3-container">
                                                <h5 className="w3-text-blue">For our customers we are alwyas avialable.<br/>
                                                dont be hassitate for asking anything you
                                                can ask anytime .<br/>
                                                We are always Available for our valuable 
                                                customers.
                                                </h5>
                                        </div>
                                        </div>
                                        </div>
                                        
                                        <div className="w3-third">
                                        <div className="w3-card">
                                        <h5 className="w3-center">Experts leaders</h5>
                                        <img src="\Images\tent14.jpg" style={{width:300 ,height:275}}/>
                                        <div className="w3-container">
                                                <h5 className="w3-text-blue">Having experts leaders in camping
                                                related projects.,<br/>
                                                So dont't affraid of the products <br/>
                                                you will get always genuine products from our website. 

                                                </h5>
                                        </div>
                                        </div>
                                        </div>
                                </div>  
          </div>
           <Product/>
              <div className="w3-container">
                <p >
                   <h3 className="w3-center"><b className=" w3-text-black">
                    BANJARA LIFE
                 </b>   </h3> 
               <div className="w3-panel w3-yellow">
                Banjara life is basically drived from the word freely ,which  means you have all the freedom regrading the LIFE
                can travell any where . So our website just help for those people who can't afford the high costly 
                products like (portable camps , camping gears,) , whenever you want to travell or wish to doing camping with your 
                friends and family in 
                hilly areas please come to us we will suggest you very good areas and give products at very cheap price .
               </div>  
                <img src="\Images\tent9.jpg" style={{width:400 ,height:275}}/>

                 </p>
        
            </div>
            <Icons/>
           </> 
        )
}

export default Home;