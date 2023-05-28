import './navbar.css'
import React, {useRef} from "react";


const Navbar = () => {

  

  const menuRef = useRef(null);

  function morph() {
    menuRef.current.classList.toggle("open");
  }
  

    return (
        <div> 

          <div className="navbar-container">

         
            
            <nav className="navbar pt-5 pb-5 bg-transparent navbar-expand-lg">
  <div className="container-fluid" style={{alignItems:"flex-start"}}>
    <a className="navbar-brand ms-3" href="/landing/home">ARC</a>
    {/* <button className="fs-1 navbar-toggler border-0" type="button"> */}
    <svg viewBox="0 0 800 600" ref={menuRef} onClick={morph} className="ms-5"  data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
  <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top_bar" />
  <path d="M300,320 L540,320" className="middle_bar" />
  <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom_bar" transform="translate(480, 320) scale(1, -1) translate(-480, -318)" />
</svg>

    {/* </button> */}
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ms-auto me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/landing/pricing">Pricing</a>
        </li>
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/landing/affiliate">Affiliate</a>
        </li>
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/landing/about">About</a>
        </li>
        <li className="nav-item ms-4 me-4">
          <a className="nav-link" href="/landing/contact">Contact</a>
        </li>
      </ul>
       <a className='signup-button me-5' href="/auth/signup"> Sign Up</a>
    </div>
  </div>
</nav>

</div>

      
        </div>
    );
}

export default Navbar;
