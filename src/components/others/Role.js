import React from 'react';

const Role = () => {
    return(
        <section className="role py-3">
        <div className="container search-box py-3">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-grey-dark">Choose your role:</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <a href="index-employee.html" className="btn btn-carrot radius-5"> Employee</a>
                    <a href="index-manager.html" className="btn btn-carrot radius-5"> Manager</a>
                    <a href="index-merchant.html" className="btn btn-carrot radius-5"> Merchant</a>
                    <a href="index-farmer.html" className="btn btn-carrot radius-5"> Farmer / Stockist</a>
                    <a href="index-administrator.html" className="btn btn-carrot radius-5"> Administrator</a>
                </div>

        </div>
        </div>
    </section>
    )
}

export default Role;