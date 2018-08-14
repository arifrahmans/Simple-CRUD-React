import React, { Component } from 'react';
import axios from 'axios';
import NavDesign from '../../others/Header';
import FooterDesign from '../../others/Footer';
import MainDesign from '../../others/Main';

class CloseReward extends Component {

  constructor() {
    super();
    this.state = {
      status: "Inactive",
      statusCloseReason: "",
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmitClosed = (e) => {
    e.preventDefault();

    const { status, statusCloseReason } = this.state;
    axios.patch('http://localhost:8080/mitraiscarrot/reward/managerreward/updatestatus/' + this.props.match.params.id, { status, statusCloseReason })
      .then((result) => {
        window.location = "/managerreward/list";
      });
  }

  render() {
    return (
      <div>
        <NavDesign />
        <MainDesign />

        <main role="main" className="container mt-3 ">
          <div className="row d-flex">
            <div className="col-md-12">
              <h2 className="mt-4 pl-0 text-grey ml-0"> Closed Reward - {this.props.match.params.id}</h2>
            </div>
          </div>

        </main>

        <section className="transaction-history my-4">
          <div className="container search-box">

            <div className="row">
              <div className="col-md-12">
                <form onSubmit={this.onSubmitClosed}>

                  <div className="form-group">
                    <label for="statusCloseReason">Closed Reason:</label>
                    <textarea type="text" className="form-control" name="statusCloseReason" onChange={this.onChange} placeholder="Closed Reason" />
                  </div>
                  <button type="button" className="btn  " data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-info">Submit</button>

                </form>
              </div>
            </div>
          </div>
        </section>
        &nbsp;
        <FooterDesign />
      </div>
    );
  }
}

export default CloseReward;