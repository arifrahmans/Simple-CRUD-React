import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      typeName: "",
      carrot: 5,
      status: "Active",
      rewardTypeName: "Manager Reward",
      maxClaim: 0,
      expiredDate: moment(),
      createdBy: "Admin",
      lastModifiedBy: "Admin",
      deleted: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      expiredDate: date
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmitNew = (e) => {
    e.preventDefault();

    const { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
      createdBy, lastModifiedBy,deleted } = this.state;

    axios.post('http://localhost:8080/mitraiscarrot/reward/managerreward', { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
    createdBy, lastModifiedBy,deleted })
      .then((result) => {
        window.location.reload();
      });
  }

  render() {
    const { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
      createdBy, lastModifiedBy,deleted } = this.state;
    return (
      <div className="modal fade" id="managerReward" tabindex="-1" role="dialog" aria-labelledby="managerReward" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create New Reward</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form onSubmit={this.onSubmitNew}>
                  <div className="form-group">
                    <label for="typeName">Type Name:</label>
                    <input type="text" className="form-control" name="typeName" value={typeName} onChange={this.onChange} placeholder="Type Name" />
                  </div>
                  <div className="form-group">
                    <label for="carrot">Carrot Count:</label>
                    <input type="text" className="form-control" name="carrot" value={carrot} onChange={this.onChange} placeholder="Carrot Count" />
                  </div>
                  <div className="form-group">
                    <label for="status">Status:</label>
                    <select className="custom-select custom-select-sm" name="status" onChange={this.onChange}>
                      <option value="Active" selected>Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="expiredDate">Expired Date:</label>
                    <DatePicker type="text" className="form-control" name="expiredDate" value={expiredDate} selected={this.state.expiredDate} onChange={this.handleChange} placeholder="Expired Date" />
                  </div>
                  <div className="form-group">
                    <label for="maxClaim">Maximal Claim:</label>
                    <input type="text" className="form-control" name="maxClaim" value={maxClaim} onChange={this.onChange} placeholder="Maximal Claim" />
                  </div>
                  
                  <div className="modal-footer">
                  <button type="button" className="btn  " data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-info">Submit</button>
                  </div>
                  
                </form>
            </div>
          </div>
        </div>
      </div>   
    );
  }
}

export default Create;