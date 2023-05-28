import React from 'react';
import './otp.css';

const Otp = () => {


    return (
    <div>



        <form className="otp">

        <label>Enter the code we sent to </label><br/>
        <small>(000) 000 - 000</small>

        <h6>Verification Code</h6>
        <input type="tel" placeholder='1' maxLength={1} Required/>
        <input type="tel" placeholder='2' maxLength={1} Required/>
        <input type="tel" placeholder='3' maxLength={1} Required/>
        <input type="tel" placeholder='4' maxLength={1} Required/>
        <input type="tel" placeholder='5' maxLength={1} Required/>
        <input type="tel" placeholder='6' maxLength={1} Required/>

        <p>Lorem ipsum dolor sit amet consectetur. <strong> Quam diam sed .</strong></p>
        <a href="/auth/fullname"> Continue </a>


        </form>


         



        </div>
    );
}

export default Otp;
