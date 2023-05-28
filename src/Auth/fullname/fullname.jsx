import React from 'react';
import './fullname.css'



const Fullname = () => {


    return (
        <div>
            
            <form className="fullname">

            <label>Enter Your Full Name</label>

            <input type="text" name=""  placeholder='Full Name' Required/>

            <p>Lorem ipsum dolor sit amet consectetur. Quam diam sed lorem enim. Sem nullam facilisis.</p>
                <a href="/auth/mission"> Continue </a>


            </form>

        </div>
    );
}

export default Fullname;
