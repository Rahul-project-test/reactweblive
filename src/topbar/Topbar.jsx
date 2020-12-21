import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelopeOpen, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import logo from "../images/logoNextra.png";

class Topbar extends React.Component {
   
    render() {
      return (
      <>
        <section className="position-relative">
            <div className="container-fluid">
                <div className="row align-items-center">
                        <div className="col-lg-3 col-md-1 overflow-hidden">
                            <NavLink className="navbar-brand" exact to="/"><img src={logo} alt="logo" /></NavLink>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          
                        </div>
                        <div className="col-lg-6">
                            <ul className="d-flex justify-content-between list-unstyled">
                                <li><span><FontAwesomeIcon icon={faPhoneAlt}/></span> +91-9878786789</li>
                                <li><span><FontAwesomeIcon icon={faEnvelopeOpen}/></span> demo-react-project@demo.com</li>
                                <li><span><FontAwesomeIcon icon={faUserAlt}/></span> Login</li>
                            </ul>       
                        </div>
                </div>
            </div>
        </section>
      </>
      );
    }
  }
  
  export default Topbar;