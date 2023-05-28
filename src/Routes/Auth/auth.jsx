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
      <Authnavbar />
    <Routes> 
 
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/addphone" element={<Addphone/>} />
        <Route exact path="/otp" element={<Otp/>} />
        <Route exact path="/fullname" element={<Fullname/>} />
        <Route exact path="/mission" element={<Mission/>} />
        <Route exact path="/findinvestors" element={<Findinvestors/>} />
 </Routes>
    </div>
 


        </div>
    );
}

export default Auth;
