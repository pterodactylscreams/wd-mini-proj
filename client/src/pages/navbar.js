import { Link } from 'react-router-dom';
// import logo from '../pictures/logo.png'
//to identufy that the user is logged in
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import basket from "../pictures/add-to-basket.png";
// import { useState } from 'react';

const Navbar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();
    // const {data} = useDataContext();
   

    const handleClick = () => {
        logout();
      }

    

    return ( 
        <nav className="navbar">

           <div className="logo">          
              <h1>UnLeash</h1>
           </div>
        
          
        {user && (
         
        <div className="links">  
            <Link to="/hairs">
              <p>Hair</p>
            </Link>
            <Link to="/nails">
             <p>Nails</p>
            </Link>
            <Link to="/face">
              <p>Face</p>
            </Link>
            <span>{user.username}</span> 
            <Link to = "/">
            <button onClick={handleClick}>Logout</button>
            </Link>
    
            
            
        </div>
        
        )}
   
     
        {!user && (
        <div className="links">            
            <a href = "/">Home</a>
          
            {/* <select id="dropdown" onChange={(e) => e.target.value && window.open(`/${e.target.value}`, '_self')}>
              <option value="">Category</option>
              <option value="hair">Hair</option>
              <option value="skin">Skin</option>
              <option value="nail">Nails</option>
            </select> */}

            <div className="onhover">
                <p>Category</p>
                <div className="hoverContents">
                    <div className="hairs">
                    <Link to="/hairs">
                        <p>Hair</p>
                      </Link>
                      <a href="/hserum">Hair Serum</a>
                      <br></br>
                      <a href="/hmask">Hair Mask</a>
                      <br></br>
                      <a href="/hoil">Hair Oil</a>
                      <br></br>
                      <a href="/shampoo">Shampoos & Conditioners</a>
                      <br></br>
                    </div>
                    
                    <div className="nails">
                      <Link to="/nails">
                        <p>Nails</p>
                      </Link>
                      <a href="/nailpaints">NailPaints</a>
                      <br></br>
                      <a href="/removers">Nail Paint Remover</a>
                      <br></br>
                    </div>

                    <div className="face">
                      <Link to="/face">
                        <p>Face</p>
                      </Link>
                      <a href="/compacts">Compact</a>
                      <br></br>
                      <a href="/foundation">Foundation</a>
                      <br></br>
                      <a href="/lipsticks">Lipsticks</a>
                      <br></br>
                      <a href="/eyeliners">Eye Liners</a>
                      <br></br>
                      <a href="/blush">Blush Ons</a>
                      <br></br>
                      <a href="/kajal">Eye Kajal</a>
                      <br></br>
                    </div>
                </div>
            </div>
            {/* <a href = "/tips">Makeup Tips</a> */}
            <a href = "/contactus">Contact Us</a>
            <a href = "/signup">My Account</a>
            
        </div>
        )}

            <div className="basket">
                <img src={basket}></img>
            </div>
    </nav>
  );
}
 
export default Navbar;