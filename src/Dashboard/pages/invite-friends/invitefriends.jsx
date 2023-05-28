import React from 'react';
import './invitefriends.css'



const Invitefriends = () => {

    return (
        <div>

            <div className="invitefriends-container">

            <h2>James Clark, invite your friends to Unlock 5 free Bots</h2>

            <p>Share your passion for investing by bringing friends to trade along with <br/> you
                and unlock 10 free Bot for 4 person you refer to ARC Automations</p>


                <label htmlFor="" className="pt-4 mt-5">Your Invite Link</label>
                <div className="input-group invite-link-input col-lg-6 col-xl-6">
                <input type="text" className="form-control" placeholder="https://storyset.com/illustration/helping-a-" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-primary" type="button" id="button-addon2"><i className="bi bi-link-45deg"></i></button>
                </div>

            </div>




        </div>
    );
}

export default Invitefriends;
