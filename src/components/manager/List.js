import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavDesign from '../others/Header';
import FooterDesign from '../others/Footer';
import MainDesign from '../others/Main';
import MainReward from './template/Main';
import CreateReward from './Create';
import moment from 'moment';

class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rewards : [],
      sort: {
        column: "id",
        direction: 'asc',
      }
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

  onSort = (column) => (e) => {
    const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    const sortedData = this.state.rewards.sort((a, b) => {
      if (column === 'typeName') {
        return a.typeName > b.typeName;
      } else if(column === 'expiredDate'){
        let date1 = new Date(a.expiredDate);
        let date2 = new Date(b.expiredDate);

        return a.date1 > b.date2;
      } else if(column === 'id'){
        return a.id > b.id;
      } else if(column === 'maxClaim'){
        return a.maxClaim > b.maxClaim;
      } else if(column === 'carrot'){
        return a.carrot > b.carrot;
      } else if(column === 'status'){
        return a.status > b.status;
      } else {
        return a.transactions.length < b.transactions.length;
      }
    });
      
    if (direction === 'desc') {
      sortedData.reverse();
    }
    
    this.setState({
      rewards: sortedData,
      sort: {
        column,
        direction,
      }
    });
  };

  setArrow = (column) => {
    let className = 'sort-direction';
    
    if (this.state.sort.column === column) {
      className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
    }
    
    console.log(className);
    
    return className;
  };



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
                      <th onClick={this.onSort('id')}>Id <span className={this.setArrow('id')}></span></th>
                      <th onClick={this.onSort('typeName')}>Type Name <span className={this.setArrow('typeName')}></span></th>
                      <th onClick={this.onSort('carrot')}>Carrot Count <span className={this.setArrow('carrot')}></span></th>
                      <th onClick={this.onSort('status')}>Status <span className={this.setArrow('status')}></span></th>
                      <th>Closed Reason</th>
                      <th onClick={this.onSort('maxClaim')}>Maximal Claim <span className={this.setArrow('maxClaim')}></span></th>
                      <th  onClick={this.onSort('expiredDate')}>Expired Date <span className={this.setArrow('expiredDate')}></span></th>
                      <th onClick={this.onSort('mostUsed')}>Most Used <span className={this.setArrow('mostUsed')}></span></th>
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
                        <td>{moment(t.expiredDate).format('YYYY-MM-DD')}</td>
                        <td>{t.transactions.length}</td>
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
