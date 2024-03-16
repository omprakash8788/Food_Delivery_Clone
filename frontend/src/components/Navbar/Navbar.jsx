import { useContext, useState } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { StoreContext } from "../../context/StoreContext";


const Navbar = ({setShowLogin}) => {
    const [menu, setMenu]=useState('Home')

    const  {getTotalCartAmount} = useContext(StoreContext)


  return (
    <div className="navbar">
     <Link to="/"><img
        className="logo"
        src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105923/1_big8.png"
        alt="logo"
      /></Link> 
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==='Home' ? 'active':''}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==='Menu' ? 'active':''}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("Mobile-app")} className={menu==='Mobile-app' ? 'active':''}>Mobile-App</a>
        <a href="#footer" onClick={()=>setMenu("Contact-Us")} className={menu==='Contact-Us' ? 'active' :''}>Contact-Us</a>
      </ul>
      <div className="navbar-right">
        <CiSearch />
        <div className="navbar-search-icon">
         <Link to='/cart'><FaShoppingBasket /></Link> 
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
