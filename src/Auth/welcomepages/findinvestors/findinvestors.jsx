import React from 'react'
import './findinvestors.css'

const Findinvestors = () => {


    return (
        <div>

<div className="investor">

<label>Find Investors</label>


<input type="text" name=""  className='shadow-sm' placeholder='Search' Required/>
<h6>Copy trade world-class investors</h6>




<div className="investor-type">
       
       <div className="investor-type-each auth-politician">
           <p>Politician 
        </p>
   </div>


   <div className="investor-type-each auth-senator">
         <p>Senator
        </p>
   </div>


   <div className="investor-type-each auth-hedgefunds">
       <p>Hedgefunds 
        </p>
   </div> 

   <div className="investor-type-each auth-houseWardogs">
       <p>HouseWardogs
        </p>
   </div> 

   </div>
  

<p> Lorem ipsum dolor sit amet consectetur. Quam diam sed lorem enim. Sem nullam facilisis. </p>

</div>            


        </div>
    )
}

export default Findinvestors