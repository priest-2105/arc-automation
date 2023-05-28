import React from 'react';
import './profile.css'



const Profile = () => {


    return (
        <div>
     
                               
        <div className="top-profile-container ps-3 pe-3 pt-5 pb-4">

            <div className="top-profile">

            <a href="" type="button" className="" data-bs-toggle="modal" data-bs-target="#editprofilepicmodal">
            <img src="/UI-ASSETS/images/images/avatar/1.jpg" width="20" alt=""/>
            </a>

               <div className="profile-desc">
                <h4>John Doe</h4>
                <div className='profile-stat'>
                   <li> <span>N/A</span> <p> Copiers</p></li>
                <li><span>0</span> <p>Followers</p> </li> </div>
            </div>
           
            <div className="dropdown profile-dropdown ms-auto">
            <a  href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-three-dots-vertical"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
                <li className="dropdown-item">
                   <label className="form-check-label d-flex"  for="flexSwitchCheckChecked"> Public profile
             <div className="form-check form-switch ms-2">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/> 
                </div></label></li>
               <a href="" type="button" className="" data-bs-toggle="modal" data-bs-target="#sharelinkmodal">
                  <li className="dropdown-item">                 
                   <span>Share my Profile</span>  <i className="bi mt-2 bi-share"></i>
              </li>  </a>
                </ul>
            </div>

             </div>            

        
        <ul className="nav ms-auto">
         <li className="nav-item ms-auto"><a href="#overview" data-bs-toggle="tab" className="nav-link active show">Overview</a>
        </li>
       
         <li className="nav-item"><a href="#stats" data-bs-toggle="tab" className="nav-link ">Stats</a>
        </li>
        <li className="nav-item"><a href="#portfolio" data-bs-toggle="tab" className="nav-link">Portfolio</a>
        </li>       
         <li className="nav-item"><a href="#charts" data-bs-toggle="tab" className="nav-link">Charts</a>
        </li>
        <li className="nav-item"><a href="#strategies" data-bs-toggle="tab" className="nav-link">Strategies</a>
        </li>
       
    </ul>
    </div>

    
            <div className="tab-content pt-5">
               
            <div id="overview" className="tab-pane fade active show">
                   
                  <div className="profile-overview">
                    {/* perfomrasnce  */}
                   <div className="performance">

                        <h4>Performance</h4>

                      <p className="eye">
                      <i className="bi bi-eye-slash-fill"></i> </p>  

                      <div className="performance-info">
                        <li>Return YTD</li>
                        <li>Return 2Y</li>
                        <li>Risk Score</li>
                        <li>Profitable Weeks</li>
                      </div>


                   </div>
                   {/* end of performance  */}


                    {/* bots active  */}
                    <div className="bots-active">

                        <div className="bots-header">
                        <h6>3/10 Bots Active</h6>
                    <a href="#"> Get more Bots</a>
                        </div>

                        <div className="bot-strategy pt-4">
                            <h6>Strategy Name</h6>

                        {/* strategy list  */}
                    <div className="bot-strategy-list">
                    <img src="/UI-ASSETS/images/portfolios/6.jpg" alt="" />
                        <div className="bot-strategy-status">
                            <h3>Donald Thrump</h3>
                            <span>bot</span>                            
                            </div> 
                <div className="bot-strategy-info">
                    <li>
                    <div className="ico-sparkline"  style={{color:"blue"}}>
				 		<div id="sparkline9" style={{color:"blue"}}></div>
			 		</div>  
                    </li>
                  <li> <h6 className='text-success'>-$2000.00</h6>
                    </li>
                </div>
                </div>
                        {/*end strategy list  */}



                          {/* strategy list  */}
                    <div className="bot-strategy-list">
                    <img src="/UI-ASSETS/images/portfolios/2.jpg" alt="" />
                        <div className="bot-strategy-status">
                            <h3>Nancy Pelozi</h3>
                            <span>bot</span>                            
                            </div> 
                <div className="bot-strategy-info">
                    <li>
                    <div className="ico-sparkline">
				     	<div id="sparkline8"></div>
					</div>  
                    </li>
                  <li> <h6 className='text-danger'>-$2000.00</h6>
                    </li>
                </div>
                </div>
                        {/*end strategy list  */}



                        </div>

                    </div>
                    {/* end of active bots  */}



                    <div className="publish-strategy">

                        <h4>Public Strategy</h4>

                        <div className="publish-strategy-profile">

                        <img src="/UI-ASSETS/images/images/avatar/1.jpg" width="20" alt=""/>
                        <div className="publish-strategy-profile-desc">
                            <h4>John Doe</h4>
                        </div>
                            </div>

                        <h4 className='mt-5'>Investment Strategy</h4>

                        <div className="investment-strategy">

                            <p>Let your followers know your investment strategy</p>

                                
                            <select name="strategy" id="strategy">
                         <label htmlFor="strategy">Value</label>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select>
                        </div>


                    </div>



                    <div className="similar-traders">

                        <h4>Similar Traders</h4>


         <div className="similar-traders-list-container">
            
              {/* strategy list  */}
                    <div className="similar-traders-list">
                    <img src="/UI-ASSETS/images/portfolios/2.jpg" alt="" />
                        <div className="similar-traders-status">
                            <h3>Nancy Pelozi</h3>
                            <span>bot</span>                            
                            </div> 
                <div className="similar-traders-info">
                    <li>
                        70.5%
                    </li>
                  <li> <a to="/dashboard/portfolio">Portfolio</a>
                    </li>
                </div>
                </div>
                        {/*end strategy list  */}



                {/* strategy list  */}
                <div className="similar-traders-list">
                    <img src="/UI-ASSETS/images/portfolios/4.jpg" alt="" />
                        <div className="similar-traders-status">
                            <h3>Bruce Wayne</h3>
                            <span>bot</span>                            
                            </div> 
                <div className="similar-traders-info">
                    <li>
                        40.5%
                    </li>
                  <li> <a to="/dashboard/portfolio">Portfolio</a>
                    </li>
                </div>
                </div>
                        {/*end strategy list  */}





                                {/* strategy list  */}
                    <div className="similar-traders-list">
                    <img src="/UI-ASSETS/images/portfolios/7.jpg" alt="" />
                        <div className="similar-traders-status">
                            <h3>Tom Holland</h3>
                            <span>bot</span>                            
                            </div> 
                <div className="similar-traders-info">
                    <li>
                        90.5%
                    </li>
                  <li> <a to="/dashboard/portfolio">Portfolio</a>
                    </li>
                </div>
                </div>
                        {/*end strategy list  */}


                    {/* strategy list  */}
                    <div className="similar-traders-list">
                    <img src="/UI-ASSETS/images/portfolios/4.jpg" alt="" />
                        <div className="similar-traders-status">
                            <h3>Hal JOrdan</h3>
                            <span>bot</span>                            
                            </div> 
                <div className="similar-traders-info">
                    <li>
                        70.5%
                    </li>
                  <li> <a to="/dashboard/portfolio">Portfolio</a>
                    </li>
                </div>
                </div>
                        {/*end strategy list  */}




                                {/* strategy list  */}
                    <div className="similar-traders-list">
                    <img src="/UI-ASSETS/images/portfolios/5.jpg" alt="" />
                        <div className="similar-traders-status">
                            <h3>Hal JOrdan</h3>
                            <span>bot</span>                            
                            </div> 
                <div className="similar-traders-info">
                    <li>
                        70.5%
                    </li>
                  <li> <a to="/dashboard/portfolio">Portfolio</a>
                    </li>
                </div>
                </div>
                        {/*end strategy list  */}



                        </div>

                    </div>




                </div>
                 </div>
               {/* end of profile overview  */}
               

                <div id="stats" className="tab-pane fade">
                   stats
                </div>



                 <div id="portfolio" className="tab-pane fade">
                <div className="porfolio-container">


                <div className="portfolios-group">


                    <div className="portfolio-list portfolio-top-table">
                        <div className="portfolio-status">
                                <h3>Bots</h3>
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>P/L($)</span>
                        </li>

                            <li><span>P/L(%)</span></li>

                        <li> 
                        <a href="#">Value</a>
                        </li>
                    </div>
                    </div>


                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/2.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>John Doe</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$400</span>
                        </li>

                            <li><span>40%</span></li>

                        <li> 
                        <p>$2,670</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>



                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/1.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>Hannah Watson</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$400</span>
                        </li>

                            <li><span>40%</span></li>

                        <li> 
                        <p>$1,200</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>





                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/pic1.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>Jake paul</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$700</span>
                        </li>

                            <li className='text-danger'><span>-470%</span></li>

                        <li> 
                        <p>$56,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>







                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/4.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>Hannah Watson</h3>
                                <span>portfolio</span>                            
                                </div> 

                    <div className="portfolio-info">
                        <li>
                            <span>$1400</span>
                        </li>

                            <li className='text-danger'><span>27%</span></li>

                        <li> 
                        <p>$12,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>






                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/5.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>Mahar Zain</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$200</span>
                        </li>

                            <li><span>70%</span></li>

                        <li> 
                        <p>$26,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>




                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/6.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>ALmighty John</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li className='text-danger'>
                            <span>$-4000</span>
                        </li>

                            <li><span>80%</span></li>

                        <li> 
                        <p>$2,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>






                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/7.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>John Doe</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$800</span>
                        </li>

                            <li><span>40%</span></li>

                        <li> 
                        <p>$2,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>





                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/8.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>John Doe</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$400</span>
                        </li>

                            <li><span>40%</span></li>

                        <li> 
                        <p>$2,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>





                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/3.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>John Doe</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$230</span>
                        </li>

                            <li><span>78%</span></li>

                        <li> 
                        <p>$22,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>





                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/2.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>John Doe</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$560</span>
                        </li>

                            <li><span>35%</span></li>

                        <li> 
                        <p>$20,066</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>





                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/4.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>John Doe</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$700</span>
                        </li>

                            <li className='text-danger'><span>-20%</span></li>

                        <li className='text-danger'> 
                        <p>$-42,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>





                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/1.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>John Doe</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$400</span>
                        </li>

                            <li><span>40%</span></li>

                        <li> 
                        <p>$2,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>






                    <div className="portfolio-list">
                        <img src="/UI-ASSETS/images/portfolios/4.jpg" alt="" />
                            <div className="portfolio-status">
                                <h3>John Doe</h3>
                                <span>portfolio</span>                            
                                </div> 
                    <div className="portfolio-info">
                        <li>
                            <span>$400</span>
                        </li>

                            <li><span>40%</span></li>

                        <li> 
                        <p>$2,000</p>
                            <h6><i className="bi bi-three-dots-vertical"></i></h6>
                        </li>
                    </div>
                    </div>




                    </div>



                    <div className="bottom-portfolio-stat">

                    <div className="portfolio-value pt-2 mb-5 rounded">

<ul>
    <li className='text-blue'>$2000.00</li>
    <p>Cash Available</p>
</ul>

<span>+</span>

<ul>
    <li className='text-blue'>$2,400.00</li>
    <p>Total Invested</p>
</ul>

<span>+</span>


<ul>
    <li className='text-success'>$2,500.00</li>
    <p>Profit / Loss</p>
</ul>

<span>=</span>


<ul>
    <li className='text-blue'>$6,900</li>
    <p>Portfolio Value</p>
</ul>

</div>


                    </div>



                </div>
                </div>


                <div id="charts" className="tab-pane fade ">
                charts
                </div>
        


                <div id="strategies" className="tab-pane fade">

               <div className="strategy-container">


               <div className="overview-strategy-group">


                <div className="overview-strategy-list overview-strategy-list-header overview-strategy-top-table">
                    <div className="overview-strategy-status">
                                <h3>Strategy Name</h3>
                                </div> 
                    <div className="overview-strategy-info">

                        <li><span>Total Return</span>
                        <select className='ms-3' name="strategy" id="strategy">
                         <label htmlFor="strategy">All time</label>
                            <option value="Yes">All time</option>
                            <option value="No">Not All time</option>
                            </select>
                        </li>

                            <li>
                                <span>CAGR</span>
                            </li>

                            

                        <li>  <select name="strategy" id="strategy">
                         <label htmlFor="strategy">Sharp Ratio</label>
                            <option value="Yes">Sharp Ratio</option>
                            <option value="No">No Sharp Ratio</option>
                            </select></li>

                        <li>
                            <span>Backtest Start Date</span>
                        </li>


                            <li className='me-3'>
                    <span>Action</span> 
                     </li>
                    </div>
                    </div>


                    <div className="overview-strategy-list">
                        <p>Lorem ipsum dolorsit amet</p>  
                    <div className="overview-strategy-info">

                        <li><span>100.40%</span>
                           <div className="ico-sparkline">
				     	<div id="sparkline8"></div>
					</div> 
                            </li>

                            

                        <li><span>60%</span></li>

                        <li>
                            <span>$400</span>
                        </li>

                        <li><span>05-10-2023</span></li>

                        <li className='strategies-action-buttons'> 
                        <a href="#" className="watch" >Watch</a>                                        
                        <a href="#" className="copy"> Copy</a>
                        </li>
                    </div>
                    </div>

 




                    <div className="overview-strategy-list">
                        <p>Lorem ipsum dolorsit amet</p>  
                    <div className="overview-strategy-info">

                        <li><span>100.40%</span>
                           <div className="ico-sparkline">
				     	<div id="sparkline9"></div>
					</div> 
                            </li>

                            

                        <li><span>60%</span></li>

                        <li>
                            <span>$800</span>
                        </li>

                        <li><span>05-10-2023</span></li>

                        <li className='strategies-action-buttons'> 
                        <a href="#" className="watch" >Watch</a>                                        
                        <a href="#" className="copy"> Copy</a>
                        </li>
                    </div>
                    </div>





                    <div className="overview-strategy-list">
                        <p>Lorem ipsum dolorsit amet</p>  
                    <div className="overview-strategy-info">

                        <li><span>100.40%</span>
                           <div className="ico-sparkline">
				     	<div id="sparkline8"></div>
					</div> 
                            </li>

                            

                        <li><span>60%</span></li>

                        <li>
                            <span>$400</span>
                        </li>

                        <li><span>05-10-2023</span></li>

                        <li className='strategies-action-buttons'> 
                        <a href="#" className="watch" >Watch</a>         
                        <a href="#" className="copy">Copy</a>
                        </li>
                    </div>
                    </div>





                    <div className="overview-strategy-list">
                        <p>Lorem ipsum dolorsit amet</p>  
                    <div className="overview-strategy-info">

                        <li><span>100.40%</span>
                           <div className="ico-sparkline">
				     	<div id="sparkline8"></div>
					</div> 
                            </li>

                            

                        <li><span>60%</span></li>

                        <li>
                            <span>$230</span>
                        </li>

                        <li><span>14-09-2023</span></li>

                        <li className='strategies-action-buttons'> 
                        <a href="#" className="watch" >Watch</a>                        
                        <a href="#" className="copy" >Copy</a>                        
                        </li>
                    </div>
                    </div>





                    <div className="overview-strategy-list">
                        <p>Lorem ipsum dolorsit amet</p>  
                    <div className="overview-strategy-info">

                        <li><span>100.40%</span>
                           <div className="ico-sparkline">
				     	<div id="sparkline9"></div>
					</div> 
                            </li>

                            

                        <li><span>60%</span></li>

                        <li>
                            <span>$560</span>
                        </li>

                        <li><span>12-03-2023</span></li>

                        <li className='strategies-action-buttons'> 
                        <a href="#" className="watch" >Watch</a>                        
                        <a href="#" className="copy" >Copy</a>                        
                        </li>
                    </div>
                    </div>





                    <div className="overview-strategy-list">
                        <p>Lorem ipsum dolorsit amet</p>  
                    <div className="overview-strategy-info">

                        <li><span>100.40%</span>
                           <div className="ico-sparkline">
				     	<div id="sparkline9"></div>
					</div> 
                            </li>

                            

                        <li><span>60%</span></li>

                        <li>
                            <span>$700</span>
                        </li>

                        <li><span>20-10-2023</span></li>

                        <li className='strategies-action-buttons'> 
                    <a href="#" className="watch" >Watch</a>
                    <a href="#" className="copy" >copy</a>
                        </li>
                    </div>
                    </div>





                    <div className="overview-strategy-list">
                        <p>Lorem ipsum dolorsit amet</p>  
                    <div className="overview-strategy-info">

                        <li><span>100.40%</span>
                           <div className="ico-sparkline">
				     	<div id="sparkline8"></div>
					</div> 
                            </li>

                            

                        <li><span>60%</span></li>

                        <li>
                            <span>$400</span>
                        </li>

                        <li><span>05-10-2023</span></li>

                        <li className='strategies-action-buttons'> 
                        <a href="#" className="watch" >Watch</a>                        
                        <a href="#" className="copy" >Copy</a>                        
                        </li>
                    </div>
                    </div>






                    <div className="overview-strategy-list">
                        <p>Lorem ipsum dolorsit amet</p>  
                    <div className="overview-strategy-info">

                        <li><span>100.40%</span>
                           <div className="ico-sparkline">
				     	<div id="sparkline8"></div>
					</div> 
                            </li>

                            

                        <li><span>60%</span></li>

                        <li>
                            <span>$400</span>
                        </li>

                        <li><span>05-10-2023</span></li>

                        <li className='strategies-action-buttons'>  
                        <a href="#" className="watch" >watch</a>                                        
                        <a href="#" className="copy">copy</a>
                        </li>
                    </div>
                    </div>




                </div>





               </div>

                </div>





               
            </div>




           
{/* <!-- Modal --> */}



{/* share link modal  */}
<div className="modal fade" id="sharelinkmodal" tabindex="-1" aria-labelledby="sharelinkmodalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title text-center ms-auto me-auto ps-5 fs-3" style={{color:"#5D91F0"}} id="sharelinkmodalLabel">Share</h1>
        <button type="button" className="btn-close fs-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Egestas vitae accumsan mollis posuere curabitur. Id lobortis auctor nulla ipsum in. Ornare pellentesque vitae.
      </div>
      <div className="modal-footer">
      <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="https://storyset.com/illustration/helping-a-" aria-label="Recipient's username" aria-describedby="button-addon2"/>
    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-link-45deg"></i></button>
    </div>
        </div>
    </div>
  </div>
</div>
{/*end of share link modal  */}





{/* share link modal  */}
<div className="modal fade" id="editprofilepicmodal" tabindex="-1" aria-labelledby="editprofilepicmodalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title text-center ms-auto me-auto ps-5 fs-3" style={{color:"#5D91F0"}} id="editprofilepicmodalLabel">Edit User Profile</h1>
        <button type="button" className="btn-close fs-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body profile-picture-modal-body">

        <a href="#">
          <div className="profile-picture-modal">
        <img src="/UI-ASSETS/images/images/avatar/1.jpg" width="20" alt=""/>
        <i class="bi bi-camera-fill"></i>
        </div>  </a> 
   
   
      <div className="mt-5">
    <label for="exampleInputEmail1" className="form-label fw-3" style={{color:"#5D91F0"}}>User Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

      </div>
 
 
    </div>
  </div>
</div>
{/*end of share link modal  */}


        </div>
    );
}

export default Profile;
