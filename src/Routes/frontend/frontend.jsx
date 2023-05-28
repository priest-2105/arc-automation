import React, { useEffect, useState } from "react";
import { Route ,Routes } from 'react-router-dom';
import Landingpage from '../../Frontend/pages/landingpage/landingpage';
import About from '../../Frontend/pages/about/about';
import Affiliate from '../../Frontend/pages/affiliate/affiliate';
import Contact from '../../Frontend/pages/contact/contact';
import Pricing from '../../Frontend/pages/pricing/pricing';
import Footer from '../../layout/frontend/footer/footer';
import Navbar from '../../layout/frontend/navbar/navbar';


const Frontend = () => {



  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;

    setWidth(scroll * 90);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });




    return (
        <div>

    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landingpage/>} />
        <Route exact path="about" element={<About/>} />
        <Route exact path="affiliate" element={<Affiliate/>} />
        <Route exact path="contact" element={<Contact/>} />
        <Route exact path="pricing" element={<Pricing/>} />
      </Routes>
      <Footer />
    </div> 


          

 
    <div
       className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            id="scroll-indicator"
            // style={{ width: `${width}%` }}
            onClick={scrollToTop}
          >
            <i className="bi bi-arrow-up"></i>
          </div>
        <div className="scroll-progress-bar-container">

        </div>

        </div>
    );
}

export default Frontend;
