import React from 'react';
import './footer.css'




const Footer = () => {
    
    
    return (
        <div className='footer-container pt-5' style={{postiton:"relative"}}>


        <div className="footer">

          <div className="left-footer">
            <h2 className="brand-name"> ARC </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis laudantium officia nulla illum quas fuga, dicta
                , tenetur iusto impedit, reprehenderit esse. Dolorem adipisci nemo quaerat omnis inventore sapiente harum!
                </p>
            </div>


            <div className="right-footer">
                <div className="socials">
                    <li> <a href="#"> <i className="bi bi-facebook"></i>  </a> </li>
                    <li> <a href="#"> <i className="bi bi-instagram"></i> </a> </li>
                    <li> <a href="#"> <i className="bi bi-twitter"></i> </a> </li>
                    <li> <a href="#"> <i className="bi bi-linkedin"></i> </a> </li>
                    <li> <a href="#"> <i className="bi bi-youtube"></i> </a> </li>
                </div>
                <a href="#" className='footer-button'> Get Started </a>
            </div>

        </div>
            
            
        <div className="footer-bottom">
        Copyright © 2023 ARC Automation Company. All rights reserved.
            </div>


            

        </div>
    );
}

export default Footer;
