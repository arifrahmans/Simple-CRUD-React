import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavDesign from '../others/Header';
import FooterDesign from '../others/Footer';
import MainDesign from '../others/Main';
import MainReward from './template/Main';
import CreateReward from './Create';

class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rewards : [],
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8080/mitraiscarrot/reward/managerreward')
      .then(res => {
        this.setState({ rewards : res.data});
        console.log(this.state.rewards);
      });
  }
  activate(id){
    console.log(id);

    if (window.confirm('Are you sure you wish to activate this reward?')){
      axios.patch('http://localhost:8080/mitraiscarrot/reward/managerreward/updatestatus/'+id, { status : "Active"})
      .then((result) => {
        window.location.reload();
      });
    }
  }

  render() {
    return (
      <div>
        <NavDesign />
        <MainDesign />
        <MainReward />
        <section className="transaction-history my-4">
          <div className="container search-box">

            <div className="row">
              <div className="col-md-12">
                <hr className="box-title-hr" />
                <h4 className="my-2 box-title">LIST OF REWARD</h4>
              </div>
              <div className="col-md-12">
                <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Type Name</th>
                      <th>Carrot Count</th>
                      <th>Status</th>
                      <th>Closed Reason</th>
                      <th>Maximal Claim</th>
                      <th>Expired Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rewards.map(t =>
                    {if(t.rewardTypeName === "Manager Reward")
                      return <tr>
                        <td><Link to={`/managerreward/show/${t.id}`}>{t.id}</Link></td>
                        <td>{t.typeName}</td>
                        <td>{t.carrot}</td>
                        <td>{t.status}</td>
                        <td>{t.statusCloseReason}</td>
                        <td>{t.maxClaim}</td>
                        <td>{t.expiredDate}</td>
                        <td><Link to={`/managerreward/show/${t.id}`} className="btn btn-warning">Detail</Link>
                        
                          {t.status === "Active" ?  <Link to={`/managerreward/inactive/${t.id}`} className="btn btn-danger">Inactive </Link> : <button onClick={this.activate.bind(this, t.id)} className="btn btn-info">Activate</button>}
                      </td>
                      </tr>}
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        &nbsp;
        <CreateReward />
        <FooterDesign />
      </div>
    );
  }
}

export default List;
