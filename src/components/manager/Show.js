import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavDesign from '../others/Header';
import FooterDesign from '../others/Footer';
import MainDesign from '../others/Main';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reward: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/mitraiscarrot/reward/managerreward/'+this.props.match.params.id)
      .then(res => {
        this.setState({ reward: res.data });
        console.log(this.state.reward);
      });
  }

  delete(id){
    console.log(id);
    
    if (window.confirm('Are you sure you wish to delete this item?')){
      axios.delete('http://localhost:8080/mitraiscarrot/reward/managerreward/'+id)
      .then((result) => {
        window.location ="/managerreward/list";
      });
    }
    
  }

  render() {
    return (
      <div>
        <NavDesign />
        <MainDesign />
        <main role="main" className="container mt-3 ">
          <div className="row d-flex">
            <div className="col-md-12">
              <h2 className="mt-4 pl-0 text-grey ml-0"> Reward details - {this.state.reward.id}</h2>
            </div>
          </div>

        </main>

        <section className="transaction-history my-4">
          <div className="container search-box">

            <div className="row">
              <div className="col-md-12">
                <form>
                  <div className="form-group">
                    <label for="typeName">Type Name:</label>
                    <input type="text" className="form-control" name="typeName" value={this.state.reward.typeName} readOnly="true" />
                  </div>
                  <div className="form-group">
                    <label for="carrot">Carrot Count:</label>
                    <input type="text" className="form-control" name="carrot" value={this.state.reward.carrot} readOnly="true" />
                  </div>
                  <div className="form-group">
                    <label for="status">Status:</label>
                    <input type="text" className="form-control" name="status" value={this.state.reward.status === "Active" ? "Active" : "Inactive"} readOnly="true" />
                  </div>
                  <div className="form-group">
                    <label for="maxClaim">Maximal Claim:</label>
                    <input type="text" className="form-control" name="maxClaim" value={this.state.reward.maxClaim} readOnly="true"/>
                  </div>
                  <div className="form-group">
                    <label for="expiredDate">Expired Date:</label>
                    <input type="text" className="form-control" name="expiredDate" value={this.state.reward.expiredDate} />
                  </div>
                  <Link to={`/managerreward/edit/${this.state.reward.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.reward.id)} className="btn btn-danger">Delete</button>&nbsp;
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

export default Show;