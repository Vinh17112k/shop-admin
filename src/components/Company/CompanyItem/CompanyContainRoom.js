/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux';

export class CompanyContainRoom extends Component {
  render() {
    var { index, companyContainRoom,contract} = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{companyContainRoom.room.id}</td>
        <td>{companyContainRoom.room.roomName}</td>
        <td>{companyContainRoom.square}</td>
        <td>{companyContainRoom.costPerSquare}</td> 
        <td>{companyContainRoom.totalCost}</td>
      </tr>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contract: state.allContract
  }
}
export default  connect(mapStateToProps, null ) (CompanyContainRoom)
