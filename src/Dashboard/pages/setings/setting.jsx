import React from 'react';
import './settings.css'



const Setting = () => {
    
    return (
            <div>
                <div class="pt-3">
                        <div class="settings-form">
                            <h4 class="text-primary fs-1">Settings</h4>
                            <p>Egestas vitae accumsan mollis posuere curabitur. Id lobortis 
                                auctor nulla ipsum in. Ornare pellentesque vitae.Egestas vitae accumsan mollis posuere curabitur.</p>

                            
                            <form>
                                <div class="row mt-5">                            
                                <div class="mb-3 col-md-6 settings-input-group-each">
                                <label class="form-label">Language</label>           
                            <select id="inputState" class="form-select ">
                                <option selected>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                </select>
                                </div>

                                <div class="mb-3 col-md-6 settings-input-group-each">
                                <label class="form-label">Currency</label>           
                            <select id="inputState" class="form-select ">
                                <option selected>Dollars <i className="text-primary bi bi-currency-dollar"></i></option>
                                <option>Pound <i className="text-primary bi bi-currency-pound"></i></option>
                                <option>Yen <i className="text-primary bi bi-currency-yen"></i></option>
                                </select> 
                                </div>
                                </div>
                            </form>
                            
                            
                            
                            
                            
                            
                            <form className='mt-5 settings-credential-form'>
                                <h2 class="text-primary">Credentials</h2>
                                <div class="row ">
                                    <div class="mb-3 settings-input-group-each">
                                        <label style={{width:"409px"}} class="form-label">Username</label>
                                        <input type="text" placeholder="username010" class="form-control"/>
                                    </div>
                       
                                    <div class="mb-3 settings-input-group-each">
                                        <label style={{width:"409px"}} class="form-label">Password</label>
                                        <div className="input-group">
                                    <input type="password" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Change</button>
                                   </div>  
                                    </div>


                                    <div class="mb-3 settings-input-group-each">
                                        <label style={{width:"409px"}} class="form-label">Email</label>
                                        <div className="input-group">
                                    <input type="email" className="form-control" placeholder="" aria-label="Email" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Change</button>
                                   </div>  
                                    </div>



                                    <div class="mb-3 settings-input-group-each">
                                        <label style={{width:"409px"}} class="form-label">Phone Number</label>
                                        <div className="input-group">
                                    <input type="text" className="form-control" placeholder="" aria-label="+123 2893 429" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Change</button>
                                   </div>  
                                    </div>
                        
                                </div></form>


                     
                                
                                <form className='mt-5 settings-notification-form'>
                                <h2 class="text-primary">Email Notfification </h2>
                                <p>Egestas vitae accumsan mollis posuere curabitur. Id lobortis auctor nulla ipsum in.
                                     Ornare pellentesque vitae.Egestas vitae accumsan mollis posuere curabitur.</p>  
                                <div class="row">
                                    <div class="mb-3 d-block col-md-6 settings-notification-group-each align-items-center">
                                        <label class="form-label me-5">lorem ipsum dolor</label> 
                                        <input type="checkbox" class="form-check-input ms-5 text-end" id="gridCheck"/>
                                    </div>

                                    <div class="mb-3 d-block col-md-6 settings-notification-group-each align-items-center">
                                        <label class="form-label me-5">lorem ipsum dolor</label> 
                                        <input type="checkbox" class="form-check-input ms-5 text-end" id="gridCheck"/>
                                    </div>


                                    <div class="mb-3 d-block col-md-6 settings-notification-group-each align-items-center">
                                        <label class="form-label me-5">lorem ipsum dolor</label> 
                                        <input type="checkbox" class="form-check-input ms-5 text-end" id="gridCheck"/>
                                    </div>



                                    <div class="mb-3 d-block col-md-6 settings-notification-group-each align-items-center">
                                        <label class="form-label me-5">lorem ipsum dolor</label> 
                                        <input type="checkbox" class="form-check-input ms-5 text-end" id="gridCheck"/>
                                    </div>




                                    <div class="mb-3 d-block col-md-6 settings-notification-group-each align-items-center">
                                        <label class="form-label me-5">lorem ipsum dolor</label> 
                                        <input type="checkbox" class="form-check-input ms-5 text-end" id="gridCheck"/>
                                    </div>



                                    <div class="mb-3 d-block col-md-6 settings-notification-group-each align-items-center">
                                        <label class="form-label me-5">lorem ipsum dolor</label> 
                                        <input type="checkbox" class="form-check-input ms-5 text-end" id="gridCheck"/>
                                    </div>




                                    <div class="mb-3 d-block col-md-6 settings-notification-group-each align-items-center">
                                        <label class="form-label me-5">lorem ipsum dolor</label> 
                                        <input type="checkbox" class="form-check-input ms-5 text-end" id="gridCheck"/>
                                    </div>




                                    <div class="mb-3 d-block col-md-6 settings-notification-group-each align-items-center">
                                        <label class="form-label me-5">lorem ipsum dolor</label> 
                                        <input type="checkbox" class="form-check-input ms-5 text-end" id="gridCheck"/>
                                    </div>


                                 </div>
                         
                        </form>
                        </div>

                    </div>


        </div>
    );
}

export default Setting;
