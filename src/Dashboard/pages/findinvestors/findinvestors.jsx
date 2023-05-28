import React from 'react';
import './findinvestors.css';
import { Link } from 'react-router-dom';

const Findinvestors = () => {
    return (
        <div>

            
<div className="dashboard-investor">

<label>Find Investors</label>


<input type="text" name=""  className='shadow-sm' placeholder='Search' Required/>
<h6>Copy trade world-class investors</h6>




<div className="dashboard-investor-type">
       
      <Link to="/dashboard/findinvestors/politicians"> <div className="dashboard-investor-type-each dashboard-politician">
           <p>Politician 
        </p>
   </div></Link>


   <Link to="/dashboard/findinvestors/politicians"><div className="dashboard-investor-type-each dashboard-senator">
         <p>Senator
        </p>
   </div></Link>


   <Link to="/dashboard/findinvestors/politicians">
   <div className="dashboard-investor-type-each dashboard-hedgefunds">
       <p>Hedgefunds 
        </p>
   </div> </Link>

   <Link to="/dashboard/findinvestors/politicians">
   <div className="dashboard-investor-type-each dashboard-houseWardogs">
       <p>HouseWardogs
        </p>
   </div> </Link>

   </div>
  

 
</div>            

            

            
        </div>
    );
}

export default Findinvestors;
