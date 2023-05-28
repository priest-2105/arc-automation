import './navbar.css' 

const Navbar = () => {

  
 
  

    return (
        <div> 

          <div className="navbar-container">

         
            
            <nav className="navbar pt-5 pb-5 bg-transparent navbar-expand-lg">
  <div className="container-fluid" style={{alignItems:"flex-start"}}>
    <a className="navbar-brand ms-3" href="/landing/home">ARC</a>
    {/* <button className="fs-1 navbar-toggler border-0" type="button"> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <svg viewBox="0 0 800 600" ref={menuRef} onClick={morph} >
  <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top_bar" />
  <path d="M300,320 L540,320" className="middle_bar" />
  <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom_bar" transform="translate(480, 320) scale(1, -1) translate(-480, -318)" />
</svg> */}

    {/* </button> */}
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/pricing">Pricing</a>
        </li>
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/affiliate">Affiliate</a>
        </li>
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
       <a className='signup-button me-5' href="/auth/addphone"> Sign Up</a>
    </div>
  </div>
</nav>

</div>

      
 <div class="offcanvas navbar-offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fs-1" id="offcanvasNavbarLabel">Arc</h5>
        <button type="button" class="btn-close fs-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/pricing">Pricing</a>
        </li>
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/affiliate">Affiliate</a>
        </li>
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
       <a className='signup-button me-5' href="/auth/addphone"> Sign Up</a>   
        
      </div>
    </div> 


        </div>
    );
}

export default Navbar;
