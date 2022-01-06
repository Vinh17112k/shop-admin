/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
export class RoomItem extends Component {
  onDelete = (id) => {
    if (confirm("Ban chac chan muon xoa?")) //eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  totalSquare = (contract,roomId) =>{
    var result =0;
    for(let i =0 ; i < contract.length;i++)
    {
      if(contract[i].room.id ===roomId)
      result += contract[i].square;
    }
    return result;
  }
  render() {
    var { index, roomItem , contract, company} = this.props;
    console.log("roomItem= ", roomItem);
    console.log("contract= ", contract);
    console.log("company= ", company);
    var result = this.totalSquare(contract,roomItem.id);
    console.log("result ", result);
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{roomItem.id}</td>
        <td>{roomItem.roomName}</td>
        <td>{roomItem.square- result }</td>
        <td>{roomItem.description}</td>
        <td>{roomItem.level}</td>
        <td>
        <span>
            <button className="btn btn-danger" onClick={()=>this.onDelete(roomItem.id)}  style={{color: 'white'}}><CIcon icon={cilRecycle}  style={{color: '#000'}}/>Xóa</button>
            &nbsp;
          </span>
          <Link to={`/room/${roomItem.id}/edit`} className="btn btn-success"  style={{color: 'white'}}><CIcon icon={cilPencil}  style={{color: '#000'}}/>Sửa</Link>
        </td>
      </tr>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contract: state.allContract,
    company: state.allCompany
  }
}
export default  connect(mapStateToProps, null )(RoomItem);
