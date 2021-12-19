/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchContractPay } from 'src/actions';
export class ContractItem extends Component {
  onDelete = (id) => {
    if (confirm("Ban chac chan muon xoa hop dong?")) //eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  payContract=(id)=>{
    var {contract,company} = this.props;
    console.log("contract is: ", contract);
    console.log("company is: ", company);
    this.props.payContract(id);
  }
  render() {
    var { index, contractItem } = this.props;
    console.log("contractItem.square",contractItem.square);
    console.log("contractItem.costPerSquare",contractItem.costPerSquare);
    console.log("contractItem.total",contractItem.square*contractItem.costPerSquare);
    // alert("status: ", contractItem.status)
    console.log("status", typeof(contractItem.status))
    console.log("status", contractItem.status)
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{contractItem.id}</td>
        <td>{contractItem.name}</td>
        <td>{contractItem.company.name}</td>
        <td>{contractItem.room.roomName}</td>
        <td>{contractItem.description}</td>
        <td>{contractItem.square}</td>
        <td>{contractItem.costPerSquare}</td>
        <td>{contractItem.startDate}</td>
        <td>{contractItem.endDate}</td>
        <td>{contractItem.square*contractItem.costPerSquare}</td>
        <td><span
                className={ contractItem.status ===false ? 'btn btn-danger' : 'btn btn-info' }
                onClick={()=> this.payContract(contractItem.id) }
            >{ contractItem.status === true ? 'Đã thanh toán' : 'Thanh toán' }</span></td>
        <td>
          <span>
            <button className="btn btn-danger" onClick={()=>this.onDelete(contractItem.id)}>Xoa</button>
          </span>
          <Link to={`/contract/${contractItem.id}/edit`} className="btn btn-success">Sua</Link>
        </td>
      </tr>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditting: state.itemEditting,
    company: state.allCompany,
    contract: state.allContract,
    room: state.allRoom
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    payContract: (id) => {
      dispatch(actFetchContractPay(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContractItem);
