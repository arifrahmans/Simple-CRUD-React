import React from 'react';

const Main = () => {
    return(
    <main role="main" className="container mt-3">
       <div className="row d-flex">
         <div className="col-md-6">
            <h2 className="mt-4 pl-0 text-grey ml-0">MANAGER REWARD DASHBOARD</h2>
         </div>
         <div className="col-md-6">
            <div className="btn-group mt-4 pull-right " role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#managerReward">Create Reward</button>
            </div>
          </div>
       </div>
       
    </main>

    )
}

export default Main;