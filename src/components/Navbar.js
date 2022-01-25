import React from "react"
// import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="contianer" >


  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav flex-column" >
   
      <li className="nav-item active">
        <a className="nav-link" href="#"> Agri-Purchase <br></br> Mnagement <span className="sr-only"></span></a>
      </li>


      <li className="nav-item">
        <a Link className="nav-link" href="#">Agri-Input Master <br></br>maintenance</a>
        </li>
        <li className="nav-item">
        <a Link className="nav-link" href="#">Supplier Master <br></br> maintenance</a>
        </li>
     
      <li className="nav-item dropdown">
        <a href="About" className="nav-link dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Agri-Inputs <br></br> Purchase Request</a>
        <span className="sr-only"></span>


      </li>

    

      <li className="nav-item">
        <a Link className="nav-link" href="#">Tax Master maintenance</a>
      </li>
   
    </ul>
  </div>
  </div>  
</nav>
  )
}

export default Navbar
