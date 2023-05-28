import React from 'react';
import './about.css'




const About = () => {

    return (
        <div>

               {/* container for the about tab        */}
    <div className="about-tab-container">
      {/* the about tab on the landing   */}
      <div className="about-tab">
         

        {/* left about tab  */}
        <div className="left-about-tab">

          <h6> Feugiat neque lacus odio eu ut lectus.</h6>

          <p>Feugiat neque lacus odio eu ut lectus.
          Feugiat neque lacus odio eu ut lectus.
           Feugiat neque lacus odio eu ut lectus.</p>


        </div>
        {/* end of left about tab */}

        {/* right about tab  */}
        <div className="right-about-tab">
          <div className="right-about-tab-image-container">
            <img className='about-img' src="UI-ASSETS/images/about/About us page-amico 1.png" alt="desktop-chart" /> 
          </div>
        </div>
        {/* end right about tab  */}


      </div> 
    </div>
    {/* end of about tab  */}






        <div className="teams">
         <h6>lorem ipsium</h6>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur. Ac suspendisse arcu ante elit mauris sem. Sit velit viverra ac fcu ante elit mauris sem. Sit
                    velit viverra ac felis at tincidunt vestibulum. Viverra convallis mi consectetur ornare pretium tellus adipiscing. Orci 
                    consequat facilisis aliquam at magnis nunc massa. Tempus purus diam fringilla pellentesque. Natoque penatibus nec erat tristique 
                    feugiat mi pretium ac. Sed ut commodo mauris a ut risus tristique etiam venenatis.</p>

                <div className="team-members">


                <div className="team-1">
                    <img src="UI-ASSETS/images/about/team-1.jpeg" alt="" />            
                     <div className='team-members-title'>
                          <h6> John Doe </h6>
                             <p>Ceo</p>            
                        </div>
                     </div>    


                    <div className="team-2">
                    <img src="UI-ASSETS/images/about/team-2.jpeg" alt="" />            
                     <div className='team-members-title'>
                          <h6> John Doe </h6>
                             <p>Ceo</p>            
                        </div>
                     </div>    


                    <div className="team-3">
                    <img src="UI-ASSETS/images/about/team-3.jpeg" alt="" />            
                     <div className='team-members-title'>
                          <h6> John Doe </h6>
                             <p>Ceo</p>            
                        </div>
                     </div>    


                    <div className="team-4">
                    <img src="UI-ASSETS/images/about/team-4.jpeg" alt="" />            
                     <div className='team-members-title'>
                          <h6> John Doe </h6>
                             <p>Ceo</p>            
                        </div>
                     </div>    

                </div>
            </div>



          <div className="bottom-about-us">

        <div className="bottom-about-us-paragraph">
            <h6>About Us</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, explicabo veniam nemo tempore dolor, 
                omnis vero non quod sint doloremque quam
                    consequatur cum, ducimus sapiente possimus cumque repellendus! Nihil, magnam! Quod natus necessitatibus fugiat 
                    deleniti! Maxime, magnam amet 
                nulla ipsa accusamus repudiandae provident impedit vel iste, libero laborLorem ipsum dolor, sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, explicabo veniam nemo tempore dolor, 
                omnis vero non quod sint doloremque quam
                    consequatur cum, ducimus sapiente possimus cumque repellendus! Nihil, magnam! Quod natus necessitatibus fugiat 
                    deleniti! Maxime, magnam amet 
                nulla ipsa accusamus repudiandae provident impedit vel iste, libero laboriosam molestias corrupti ex dolore!</p>


                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, explicabo veniam nemo tempore dolor, 
                omnis vero non quod sint doloremque quam
                    consequatur cum, ducimus sapiente possimus cumque repellendus! Nihil, magnam! Quod natus necessitatibus fugiat 
                    deleniti! Maxime, magnam amet 
                nulla ipsa accusamus repudiandae provident impedit vel iste, libero labor. Quaerat, explicabo veniam nemo tempore dolor, 
                omnis vero non quod sint doloremque quam
                    consequatur cum, ducimus sapiente possimus cumque repellendus! Nihil, magnam! Quod natus necessitatibus fugiat 
                    deleniti! Maxime, magnam amet 
                nulla ipsa accusamus repudiandae provident impedit vel iste, libero laboriosam molestias corrupti ex dolore!</p>


                    </div>






                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>


            </div>





        </div>
    );
}

export default About;
