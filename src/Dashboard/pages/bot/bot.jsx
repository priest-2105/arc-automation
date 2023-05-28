import React from 'react';
import './bot.css'


const Bot = () => {
    return (
        <div>


        <select className='header-select' name="strategy" id="strategy" disabled>
                <label htmlFor="strategy">Create</label>
                <option value="Yes">Create</option>
                </select>



      <div className="savechanges mt-5">

        <h4>Save Changes</h4>

           <div className='d-flex savechanges-input-group rounded'>
            <div className="input-group savechanges-input col-lg-6 col-xl-6">
                <input type="text" className="form-control" placeholder="Save Changes" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-primary btn-primary" type="button" id="button-addon2"><i className="bi bi-caret-down-fill"></i></button>
                </div>   
               <button className="btn btn-outline-primary text-primary border-primary ms-2" type="button" id="button-addon2"><i className="bi bi-caret-down-fill"></i></button>
                <button className="btn btn-outline-primary border-dark text-dark ms-2" type="button" id="button-addon2"><i className="bi bi-caret-down-fill"></i></button>
                   </div>

      </div>


            <div className="symphony-details mt-5 pt-4">

                <h4>Symphony Details</h4>

        <div className='d-lg-flex d-xl-flex d-md-block mt-4 align-items-center symphony-details-input-group'>
            <div class="col-md-4 input-each rounded ">
                <label for="Name" class="form-label">Name</label>
                <input type="text" class="form-control" id="Name"/>
            </div>
            <div class="col-md-4 input-each rounded ms-2">
                <label for="Description" class="form-label">Description</label>
                <input type="text" placeholder='lorem ipsum dolor sit amet'  class="form-control" id="Description"/>
            </div>
         </div>

           <div className='d-lg-flex d-xl-flex d-md-block mt-4 align-items-center symphony-details-input-group'>
            <div class="col-md-4 input-each rounded ">
                <label for="Trade-settings" class="form-label">Trade Setting</label>
                <select id="inputState" class="form-select ">
                <option selected>Threshold:  10%</option>
                <option>Threshold:  20%</option>
                <option>Threshold:  30%</option>
                </select>
            </div>
            <div class="col-md-4 input-each investment-button rounded d-block ms-2">
                <label for="investment" class="form-label">Investment</label>
                <input type="text" class="form-control" id="Trade-settings"/>
                <button className="btn btn-primary" type="button" id="button-addon2">New Investment</button> 
            </div>
          
     </div>
     
 
     <div className="new-symphony mt-5">
            <div class="col-md-4 col-xl-8 col-lg-8 ms-2 mt-5"/>
                <select id="inputState" class="form-select ">
                <option selected>New Symphony</option>
                <option>...</option>
                </select>
            </div>


                <select id="inputState" class="form-select weight-select mt-3 ms-4 bg-secondary">
                <option selected><span>WEIGHT</span> Equals</option>
                <option>...</option>
                </select>


                <div className="input-group mt-4 ms-5 new-symphony-add-input col-lg-6 col-xl-6">
            <input type="text" className="form-control" placeholder="Lorem ipsum dolor sit amet" aria-label="Search" aria-describedby="button-addon2"/>
              <button className="btn btn-outline-primary " type="button" id="button-addon2"><i className="bi bi-plus"></i></button> 
                </div>

              <button className="btn btn-primary btn-sm ms-5 mt-4" type="button" id="button-addon2"><i className="bi fs-2 bi-plus"></i></button> 
 
         
         <select id="inputStat" class="form-select weight-select mt-5 text-dark">
                <option selected>Backtest Preview</option>
                <option>...</option>
                </select>
        
         
         
         </div> 






        </div>
    );
}

export default Bot;
