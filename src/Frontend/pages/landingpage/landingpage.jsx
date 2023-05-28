import React from 'react';
import './landingpage.css'




const Landingpage = () => (
  <div>

    {/* container for the welcome tab        */}
    <div className="welcome-tab-container">
      {/* the welcome tab on the landing   */}
      <div className="welcome-tab">



        {/* left welcome tab  */}
        <div className="left-welcome-tab">

          <p> Feugiat neque lacus odio eu ut lectus.</p>

          <a href="/auth/addphone"> Get Started</a>

        </div>
        {/* end of left welcome tab */}

        {/* right welcome tab  */}
        <div className="right-welcome-tab">
          <div className="right-welcome-tab-image-container">
            <img className='desktop-chart' src="UI-ASSETS/images/Landingpage/desktop-chart.png" alt="desktop-chart" />
            <img className='mobile-chart' src="UI-ASSETS/images/Landingpage/mobile-chart.png" alt="Mobile Chart" />

          </div>
        </div>
        {/* end right welcome tab  */}


      </div>

    </div>
    {/* end of welcome tab  */}





    {/* landing page steps  */}
    <div className="landing-page-steps">

      {/* step 1 */}
      <div className="step-1  ms-auto me-auto steps-card-number">
        <h2 className="step-number text-center">  01  </h2>
        <div className="step-card-container">
          <div className="step-card">
            <h6 className="text-end ms-auto fs-5">01</h6>
            <h5 className="step-card-header mt-2"> Feugiat neque lacus </h5>
            <p className="step-card-body mt-4">
              Ultrices feugiat nulla faucibus at nunc pellentesque facilisis.
              Egestas aliquet leo tincidunt et senectus arcu duis.
              Feugiat neque lacus mattis odio eu ut lectus et
            </p>
          </div>
        </div>
      </div>
      {/* end of step 1  */}


      {/* step 2  */}
      <div className="step-2  ms-auto me-auto steps-card-number mt-5">
        <h2 className="step-number text-center">  02  </h2>
        <div className="step-card-container">
          <div className="step-card">
            <h6 className="text-end ms-auto fs-5">02</h6>
            <h5 className="step-card-header mt-2"> Feugiat neque lacus </h5>
            <p className="step-card-body mt-4">
              Ultrices feugiat nulla faucibus at nunc pellentesque facilisis.
              Egestas aliquet leo tincidunt et senectus arcu duis.
              Feugiat neque lacus mattis odio eu ut lectus et
            </p>
          </div>
        </div>
      </div>
      {/* end of step 2 */}



      {/* step 3 */}
      <div className="step-3 ms-auto me-auto steps-card-number mt-3">
        <h2 className="step-number text-center">  03  </h2>
        <div className="step-card-container">
          <div className="step-card">
            <h6 className="text-end ms-auto fs-5">03</h6>
            <h5 className="step-card-header mt-2"> Feugiat neque lacus </h5>
            <p className="step-card-body mt-4">
              Ultrices feugiat nulla faucibus at nunc pellentesque facilisis.
              Egestas aliquet leo tincidunt et senectus arcu duis.
              Feugiat neque lacus mattis odio eu ut lectus et
            </p>
          </div>
        </div>
      </div>
      {/* end of step 3 */}




    </div>
    {/* end of landing page steps */}





    {/* how it works section  */}
    <div className="how-it-works">
      {/*how it works header  */}
      <div className="how-it-works-header">

        <h2> HOW IT WORKS ?</h2>
        <p>Lorem ipsum dolor sit amet consectetur, uibusdam itaque doloremque repellat placeat debitis
          recusandae adipisci dolores! Soluta, deleniti error!</p>
      </div>
      {/* end of how it works header  */}


      {/*how it works steps*/}
      <div className="how-it-works-steps">



        {/* step 1 */}
        <div className="rounded-pill ms-auto me-auto text-center how-it-works-step-1">
          <div className="rounded-pill ms-auto me-auto text-center how-it-works-step-card-container">
            <div className="rounded-pill ms-auto me-auto text-center  justify-contents-center how-it-works-step-card">
              <h2 className="rounded-5 how-it-works-step-number   text-center">  1  </h2>
                  </div>
          </div> 
          <h6 className='me-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam </h6> 
        </div>
        {/* end of how-it-works-step 1  */}


        {/* how-it-works-step 2  */}
        <div className="rounded-pill ms-auto me-auto text-center how-it-works-step-2 ">
          <div className="rounded-pill ms-auto me-auto text-center how-it-works-step-card-container">
            <div className="rounded-pill ms-auto me-auto text-center how-it-works-step-card">
              <h2 className="rounded-5 how-it-works-step-number text-center">  2  </h2>
            </div>
          </div>
           <h6> Lorem ipsum dolor sit amet consequuntur, libero autem. </h6>
        </div>
        {/* end of how-it-works-step 2 */}



        {/* how-it-works-step 3 */}
        <div className="rounded-pill ms-auto me-auto text-center how-it-works-step-3">
          <div className="rounded-pill ms-auto me-auto text-center how-it-works-step-card-container">
            <div className="rounded-pill ms-auto me-auto text-center how-it-works-step-card">
              <h2 className="rounded-5 how-it-works-step-number "> 3  </h2>
             </div>
          </div>   
          <h6> Lorem ipsum doloripsum dolor libero autem. </h6>
        </div>
        {/* end of how-it-works-step 3 */}


      </div>
      {/* end of how it works steps */}


    </div>
    {/* end of how it works section  */}








    {/* what people are sayinh  */}

    <div className="what-people-are-saying pt-5">
      <h2 className="what-people-are-saying-header">
        What people are saying
      </h2>

      <div className="what-people-are-saying-cards">


        <div className="what-people-are-saying-first-row">

          <div className="what-people-are-saying-card first-card">
            <p>Lorem, io! Asperiores in sunt quasi asso! Asperiores in sunt quasi assumenda ullam?</p>
            <div className='d-flex align-items-flex-center mt-5'> <img src="../../../../UI-ASSETS/images/Landingpage/6.jpg" alt="" />
              <h6> name</h6>
            </div>
          </div>

          <div className="what-people-are-saying-card second-card">
            <p>Lorem, io! Asperiores in sunt quasi asso! Asperiores in sunt quasi assumenda ullam?</p>
            <div className='d-flex align-items-flex-center mt-5'> <img src="../../../../UI-ASSETS/images/Landingpage/7.jpg" alt="" />
              <h6> name</h6>
            </div>
          </div>

          <div className="what-people-are-saying-card third-card">
            <p>Lorem, io! Asperiores in sunt quasi asso! Asperiores in sunt quasi assumenda ullam?</p>
            <div className='d-flex align-items-flex-center mt-5'> <img src="../../../../UI-ASSETS/images/Landingpage/5.jpg" alt="" />
              <h6> name</h6>
            </div>
          </div>

        </div>

        <div className="what-people-are-saying-second-row">



          <div className="what-people-are-saying-card fourt-card">
            <p>Lorem, io! Asperiores in sunt quasi asso! Asperiores in sunt quasi assumenda ullam?</p>
            <div className='d-flex align-items-flex-center mt-5'> <img src="../../../..//UI-ASSETS/images/Landingpage/8.jpg" alt="" />
              <h6> name</h6>
            </div>
          </div>

          <div className="what-people-are-saying-card fifth-card">
            <p>Lorem, io! Asperiores in sunt quasi asso! Asperiores in sunt quasi assumenda ullam?</p>
            <div className='d-flex align-items-flex-center mt-5'> <img src="../../../..//UI-ASSETS/images/Landingpage/pic1.jpg" alt="" />
              <h6> name</h6>
            </div>
          </div>

          <div className="what-people-are-saying-card sixth-card">
            <p>Lorem, io! Asperiores in sunt quasi asso! Asperiores in sunt quasi assumenda ullam?</p>
            <div className='d-flex align-items-flex-center mt-5'> <img src="../../../..//UI-ASSETS/images/Landingpage/5.jpg" alt="" />
              <h6> name</h6>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* faqs */}

  <div className="faqs mt-5 text-center mb-5">

          <h2> FAQ</h2>

          <div className="accordion col-lg-8 col-md-10 col-sm-12 ms-auto me-auto mt-5 accordion-flush" id="accordionFlushExample">
  <div className="faq-header-card">
    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
    <p>Molestias non, enim repellat consectetur vitae amet odio cupiditate a ea! Placeat nihil quo quaerat nemo natus dolorem unde magnam tenetur aliquam!</p>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What do we do at ARC <i className='bi bi-plus-lg '></i>  <i className='bi bi-dash-lg '></i> 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        What Do We Stand For  <i className='bi bi-plus-lg '></i>  <i className='bi bi-dash-lg '></i>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        How Do I Get Started  <i className='bi bi-plus-lg '></i>  <i className='bi bi-dash-lg '></i>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        WHen Was ARC Founded  <i className='bi bi-plus-lg '></i>  <i className='bi bi-dash-lg '></i>
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-transparent border-0 shadow-none" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        Is This Good Place To Trust In  <i className='bi bi-plus-lg '></i>  <i className='bi bi-dash-lg '></i>  
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>




  </div>






  </div>
)

export default Landingpage;
