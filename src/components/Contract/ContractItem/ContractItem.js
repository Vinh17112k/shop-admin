/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchAllContractRequest, actFetchContractPay } from 'src/actions';
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilDrop,
  cilNotes,
  cilPencil,
  cilRecycle,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
export class ContractItem extends Component {
  onDelete = (id) => {
    if (confirm("Ban chac chan muon xoa hop dong?")) //eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  payContract = (id) => {
    var { contract, company } = this.props;
    console.log("contract is: ", contract);
    console.log("company is: ", company);
    this.props.payContract(id);
    this.props.fetchAllContract(contract)
  }
  componentDidMount() {
    var { index, contractItem } = this.props;
    console.log("status", contractItem.status)
  }
  render() {
    var { index, contractItem } = this.props;
    console.log("contractItem.square", contractItem.square);
    console.log("contractItem.costPerSquare", contractItem.costPerSquare);
    console.log("contractItem.total", contractItem.square * contractItem.costPerSquare);
    // alert("status: ", contractItem.status)
    console.log("status", typeof (contractItem.status))
    console.log("status", contractItem.status)
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{contractItem.id}</td>
        <td>{contractItem.name}</td>
        <td>{contractItem.company.name}</td>
        <td>{contractItem.room.roomName}</td>
        {/* <td>{contractItem.description}</td> */}
        <td>{contractItem.square}</td>
        <td>{contractItem.costPerSquare}</td>
        <td>{contractItem.startDate}</td>
        <td>{contractItem.endDate}</td>
        <td>{contractItem.square * contractItem.costPerSquare}</td>
        <td><span
          className={contractItem.status === false ? 'btn btn-danger' : 'btn btn-info'}
          onClick={() => this.payContract(contractItem.id)}
        >{contractItem.status === true ? 'Đã thanh toán' : 'Thanh toán'}</span></td>
        <td>
          <span>
            <button className="btn btn-danger" onClick={() => this.onDelete(contractItem.id)} style={{ color: 'white' }}><CIcon icon={cilRecycle} style={{ color: '#000' }} />Xóa</button>
            &nbsp;
          </span>
          <Link to={`/contract/${contractItem.id}/edit`} className="btn btn-success" style={{ color: 'white' }}><CIcon icon={cilPencil} style={{ color: '#000' }} />Sửa</Link>
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
    },
    fetchAllContract: () => {
      dispatch(actFetchAllContractRequest());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContractItem);
