import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Navigation from './Component/Navigation';
import Footer from './Component/Footer';
import Feedback from './Pages/Feedback';

function App()
{
    return (
    
       <>
            <Router>
                
                <Navigation/>
                
                <switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/About" component={About}></Route>
                        <Route path="/Product" component={Product}></Route>
                        <Route path="/Feedback" component={Feedback}></Route>
                       
                </switch>
                <Footer/>
            </Router>
        
        </>
    )
}

export default App;
