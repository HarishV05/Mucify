import React from "react";
import "./home.css";

import {Link} from "react-router-dom"
import { FaBars } from 'react-icons/fa';
const Home = () => {
  return (
    <div >
     
     <div className="dropdown">
        <button className="dropbtn"><FaBars size={30}/>  </button>
        <div className="dropdown-content">
          <Link to="Signin">Home</Link>
          <Link to="Signin">Contact</Link>
          <Link to="Signin">Help</Link>
        </div>
        </div>
    
    {/* <nav>
        <ul className="menu">
        <li><button className="but"><Link to=""><FaPlus />  Post</Link></button></li>
        <li><button className="but"><Link to=""><FaSearch />  Get</Link></button></li>
        <li><button className="but"><Link to=""><FaEdit />  Put</Link></button></li>
        <li><button className="but"><Link to=""> <FaTrash />  Delete </Link></button></li>
        <li><button className="but"><Link to=""><FaSignOutAlt size={15} /></Link></button></li>
      </ul>
    
    </nav> */}
  
</div>
   
  );
};

export default Home;