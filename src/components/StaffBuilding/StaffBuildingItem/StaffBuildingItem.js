/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class StaffBuildingItem extends Component {
  onDelete =(id)=>{
    if(confirm("Bạn có chắc muốn xóa?"))//eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  render() {
    var {index, staffBuilding} =this.props;
    return (
      <tr>
        <td>{index+1}</td>
        <td>{staffBuilding.id}</td>
        <td>{staffBuilding.code}</td>
        <td>{staffBuilding.name}</td>
        <td>{staffBuilding.dateOfBirth}</td>
        <td>{staffBuilding.address}</td>
        <td>{staffBuilding.phone}</td>
        <td>{staffBuilding.level}</td>
        <td>{staffBuilding.position}</td>
        <td>
          <span>
            <button className="btn btn-danger" onClick={()=>this.onDelete(staffBuilding.id)}>Xoa</button>
          </span>
          <Link to={`/staffsbuilding/${staffBuilding.id}/edit`} className="btn btn-info">Sua</Link>
        </td>
      </tr>
    )
  }
}

export default StaffBuildingItem
