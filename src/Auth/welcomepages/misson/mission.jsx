import React from 'react';
import './mission.css';



const Mission = () => {


    return (
        <div className='mission-container'>

        <div className="mission">

        <label>The Mission At ARC AUTOMATION</label>


        <div className="mission-steps">
               
               <div className="mission-steps-each">
                   <div className="mission-steps-each-icon"><i class="bi bi-person-fill-check"></i> </div>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit
                   is ullam illo ipsam unde cum expedita minus distinctio dicta.</p>
           </div>


           <div className="mission-steps-each">
                   <div className="mission-steps-each-icon"> <i class="bi bi-link-45deg"></i></div>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit
                   is ullam illo ipsam unde cum expedita minus distinctio dicta.</p>
           </div>



           <div className="mission-steps-each">
                   <div className="mission-steps-each-icon"><i class="bi bi-people-fill"></i> </div>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit
                   is ullam illo ipsam unde cum expedita minus distinctio dicta.</p>
           </div>



           </div>
          


    
    
    
    
         <a href="/dashboard/findinvestors"> Find a Pilot </a>


        </div>            





        </div>
    );
}

export default Mission;
