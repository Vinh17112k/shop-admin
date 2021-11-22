/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ProductItem extends Component {
  onDelete =(id)=>{
    if (confirm("Ban chac chan muon xoa?")) //eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  render() {
    var {index, staff} =this.props;
    return (
      <tr>
        <td>{index+1}</td>
        <td>{staff.id}</td>
        <td>{staff.code}</td>
        <td>{staff.name}</td>
        <td>{staff.dateOfBirth}</td>
        <td>{staff.phone}</td>
        <td>{staff.company.name}</td>
        <td>
          <span>
            <button className="btn btn-danger" onClick={()=>this.onDelete(staff.id)}>Xoa</button>
          </span>
          <Link to={`/staffs/${staff.id}/edit`} className="btn btn-info">Sua</Link>
        </td>
      </tr>
    )
  }
}

export default ProductItem
