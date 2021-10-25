import React from 'react'
import "./Navbar.scss"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";




function Navbar() {
    return (
        
        <div className="container container_navbar">
        
            <div className="logo">
                
            </div>

            <div className="ul_items">
                <ul>
                <Router>
                <li>  <Link to="/" className="link" style={{"textDecoration":"none", "color":"black"}}>Home</Link></li>
                    <li> <Link to="/Blog" className="link" style={{"textDecoration":"none", "color":"black"}}>Blog</Link></li>
                    <li> <Link to="/Contact" className="link" style={{"textDecoration":"none", "color":"black"}}>Contact</Link></li>
                </Router>
                   

                 
                    
                </ul>

            </div>
            <div className="call_to_action">
                <button>Become a Blogger</button>
            </div>
       
              
       
        </div>
         
    )
}

export default Navbar




