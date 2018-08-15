import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavDesign from '../others/Header';
import FooterDesign from '../others/Footer';
import MainDesign from '../others/Main';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reward: {}
    };
    this.handleExpiredChange = this.handleExpiredChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8080/mitraiscarrot/reward/managerreward/'+this.props.match.params.id)
      .then(res => {
        res.data.expiredDate = moment(res.data.expiredDate,'YYYY-MM-DD');
        this.setState({ reward: res.data });
        console.log(this.state.reward);
      });
  }

  handleExpiredChange(date) {
    const state = this.state.reward
    state["expiredDate"] = date;
    this.setState({reward:state});
  }

  onChange = (e) => {
    const state = this.state.reward
    state[e.target.name] = e.target.value;
    this.setState({reward:state});
  }

  onSubmitEdit = (e) => {
    e.preventDefault();

    const { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
      createdBy, lastModifiedBy,deleted } = this.state.reward;

    axios.put('http://localhost:8080/mitraiscarrot/reward/managerreward/'+this.props.match.params.id, { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
    createdBy, lastModifiedBy,deleted })
      .then((result) => {
        this.props.history.push("/managerreward/show/"+this.props.match.params.id)
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
              <h2 className="mt-4 pl-0 text-grey ml-0"> Edit Reward - {this.state.reward.id}</h2>
            </div>
            </div>

        </main>

        <section className="transaction-history my-4">
          <div className="container search-box">

            <div className="row">
              <div className="col-md-12">
              <form onSubmit={this.onSubmitEdit}>
                <div className="form-group">
                  <label for="typeName">Type Name:</label>
                  <input type="text" className="form-control" name="typeName" value={this.state.reward.typeName} onChange={this.onChange} placeholder="Type Name" />
                </div>
                <div className="form-group">
                  <label for="carrot">Carrot Count:</label>
                  <input type="text" className="form-control" name="carrot" value={this.state.reward.carrot} onChange={this.onChange} placeholder="Carrot Count" />
                </div>
                <div className="form-group">
                  <label for="status">Status:</label>
                  <select className="custom-select custom-select-sm" name="status" value={this.state.reward.status} onChange={this.onChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="form-group">
                    <label for="expiredDate">Expired Date:</label>
                    <DatePicker type="text" className="form-control" name="expiredDate" value={this.state.reward.expiredDate} selected={this.state.reward.expiredDate} onChange={this.handleExpiredChange} placeholder="Expired Date" />
                  </div>
                  <div className="form-group">
                    <label for="maxClaim">Maximal Claim:</label>
                    <input type="text" className="form-control" name="maxClaim" value={this.state.reward.maxClaim} onChange={this.onChange} placeholder="Maximal Claim" />
                  </div>
                <div className="form-group">
                  <input type="hidden" name="rewardTypeName" value={this.state.reward.rewardTypeName} />
                  <input type="hidden" name="createdBy" value={this.state.reward.createdBy} />
                  <input type="hidden" name="lastModifiedBy" value={this.state.reward.lastModifiedBy} />
                  <input type="hidden" name="deleted" value={this.state.reward.deleted} />
                </div>
                <button type="submit" className="btn btn-default">Update</button>&nbsp;
                <Link to={`/managerreward/list`} className="btn btn-info">Back to Reward List</Link>
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

export default Edit;