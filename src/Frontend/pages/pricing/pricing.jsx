import React from 'react';
import './pricing.css'





const Pricing = () => {
    return (

        <div>

            
            
            
    {/* container for the pricing tab        */}
    <div className="pricing-tab-container">
      {/* the pricing tab on the landing   */}
     

     <div className="pricing-tab">
            <h4> PRICING</h4>
        <div className="first-row">
        <div className="card">
            <h6>Sign up to get $30</h6>
            
        </div>


        <div className="card">
        <span>Monthly</span>
          <h6>$130</h6>
            <p>Activate 15 bots</p>

            <a href="#"> Get Started </a>
        </div>

        </div>


            <div className="second-row">
                        
        <div className="card">
          <span>Monthly</span>  <h6>$15</h6>
            <p>Activate 15 bots</p>

        <a href="#"> Get Started </a>    
        </div>


        <div className="card">
            <span>Monthly</span><h6>$300</h6>
                <p>Unlimited bots</p>
            <a href="#"> Get Started </a>
        </div>
      

            </div>



      </div>

    </div>
    {/* end of pricing tab  */}



            <div className='space'></div>

        </div>
    );
}

export default Pricing;
