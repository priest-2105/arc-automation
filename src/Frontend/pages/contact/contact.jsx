import React from 'react';
import './contact.css'

const Contact = () => {


    return (
        <div>

        
    {/* container for the welcome tab        */}
    <div className="contact-welcome-tab-container">
      {/* the welcome tab on the landing   */}
      <div className="contact-welcome-tab">



        {/* left welcome tab  */}
        <div className="left-contact-welcome-tab">

          <h6> Feugiat neque lacus</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, placeat aliquid! Laudantium, 
                aspernatur accusamus dolorum labore perspiciatis id possimus d
                ebitis ad commodi natus magni delectus officiis at consequuntur voluptatem nostrum.</p>
            <ul>
                <li>Email : <br/> 
                 ARCAUTO@gmail.com</li>
                 
                <li>Phone : <br/> 
                 +44 829 8192</li>

                 
                <li>Location : <br/> 
                 lorem lawawa ipsium</li>

                </ul>            

        </div>
        {/* end of left welcome tab */}

        {/* right welcome tab  */}
        <div className="right-contact-welcome-tab">
          <div className="right-contact-welcome-tab-image-container">
                
          <div class="mb-3">
        <input type="text" class="form-control col-lg-4 col-sm-8" id="exampleFormControlInput1" placeholder="Name"/>
        </div>


        <div class="mb-3">
         <input type="tel" class="form-control col-lg-4 col-sm-8" id="exampleFormControlInput1" placeholder="Phone Number"/>
        </div>



        <div class="mb-3">
         <input type="email" class="form-control col-lg-4 col-sm-8" id="exampleFormControlInput1" placeholder="Email"/>
        </div>


        <div class="mb-3">
         <textarea class="form-control col-lg-4 col-sm-8" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
          </div>

          <a href="#" className="mt-4 submit-button form-control col-lg-4 col-sm-8">Submit</a>
        </div>
        {/* end right welcome tab  */}




      </div>

    </div>
    {/* end of welcome tab  */}



        


        </div>
    );
}

export default Contact;
