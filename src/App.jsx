import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Frontend from './Routes/frontend/frontend';
import Auth from './Routes/Auth/auth';
import Dashboard from './Routes/Dashboard/Dashboard'; 



function App() {
 

  return (
    <div className="App">
      <BrowserRouter> 

        <Routes>

           {/* Frontend ROUTE  */}
        <Route exact path="/*" element={<Frontend/>}/>


          {/* AUTH ROuTE  */}
        <Route exact path="/auth/*" element={<Auth/>}/>


            {/* Dashboard ROUTE */}
        <Route exact path="/dashboard/*" element={<Dashboard/>}/>





        </Routes>
            {/*End Of DASHBOARD Route  */}


      </BrowserRouter>
    </div>
  );
}

export default App;
