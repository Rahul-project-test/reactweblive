import React from 'react';
import { Link } from 'react-router-dom';
import './whyus.css';

class Whyus extends React.Component {
   
    render() {
      return (
      <>
        <section className="position-relative p-t-b-75 why-us-section">
                <div className="container-fluid">
                    <div className="row align-items-center d-flex align-items-center">
                            <div className="col-lg-4 col-md-4 d-fle flex-column">
                                <h2>Find Our <br/>Digital Marketing <br/>Services Difference</h2>
                                <p>Find out more about our elite solutions by dropping us a line at +91-9876543210 or by emailing us at enquiry@demo.com</p>
                            </div>
                            <div className="col-lg-8 col-md-8 d-flex">
                                <div className="right-box-flex">
                                    <div>
                                        <h3>10+</h3>
                                        <p>Organic Leads Guaranteed.</p>
                                    </div>
                                    <div>
                                    <   h3>60%</h3>
                                        <p>Lowest CPC & CPL Cost Guaranteed.</p>
                                    </div>
                                    <div>
                                        <h3>2X</h3>
                                        <p>User Engagement Guaranteed.</p>
                                    </div>
                                    <div>
                                        <h3>95%</h3>
                                        <p>Qualified Leads Ratio.</p>
                                    </div>
                                    <div>
                                        <h3>10000+</h3>
                                        <p>Real Followers Guaranteed.</p>
                                    </div>
                                    <div>
                                        <h3>No.1</h3>
                                        <span>Keywords</span>
                                        <p>Positions Across Industries.</p>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
        </section>
      </>
      );
    }
  }
  
  export default Whyus;