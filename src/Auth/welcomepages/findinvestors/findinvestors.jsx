import React from 'react'
import './findinvestors.css'

const Findinvestors = () => {


    return (
        <div className='investor-container'>

<div className="investor">

<label>Find Investors</label>


<input type="text" name=""  className='shadow-sm' placeholder='Search' Required/>
<h6>Copy trade world-class investors</h6>




<div className="investor-type">
       
          
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
  

<p> Lorem ipsum dolor sit amet consectetur. Quam diam sed lorem enim. Sem nullam facilisis. </p>

</div>            


        </div>
    )
}

export default Findinvestors