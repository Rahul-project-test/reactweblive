import React from 'react';
import Banner from './banner/Banner'
import Whyus from './whyus/Whyus'
import web from "./images/hero-img.png";
function Home() {
  return (
    
      <div>
    <Banner 
    bannertitle="Get more sales, traffic with us!"
    subtitle="We offer flexible marketing strategies"
    imgsrc={web}
    btnname={"test"}
    />
    <Whyus/>
  </div>
  
   
  );
}

export default Home;