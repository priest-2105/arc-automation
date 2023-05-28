import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Authnavbar from '../../layout/Auth/navbar/authnavbar';
import Login from '../../Auth/login/login';
import Register from '../../Auth/register/register';
import Addphone from '../../Auth/adphonenumber/addphone';
import Otp from '../../Auth/otp/otp';
import Fullname from '../../Auth/fullname/fullname';
import Mission from '../../Auth/welcomepages/misson/mission';
import Findinvestors from '../../Auth/welcomepages/findinvestors/findinvestors';
 

const Auth = () => {
    return (
        <div>

    <div>
    
        {/* <Authnavbar /> */}

        <div className="navbar-container">

         
            
<nav className="navbar pt-5 bg-transparent navbar-expand-lg">
<a className="navbar-brand fs-1 ms-3" href="/">ARC</a>
    
</nav>

</div>



     <div className="pt-5">
        <Routes> 
 
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/addphone" element={<Addphone/>} />
        <Route exact path="/otp" element={<Otp/>} />
        <Route exact path="/fullname" element={<Fullname/>} />
        <Route exact path="/mission" element={<Mission/>} />
        <Route exact path="/findinvestors" element={<Findinvestors/>} />
 </Routes></div> 
    

</div>
 


        </div>
    );
}

export default Auth;
