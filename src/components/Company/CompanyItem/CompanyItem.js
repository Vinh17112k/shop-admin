/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react'
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
export class CompanyItem extends Component {
  onDelete = (id) => {
    if (confirm("Ban chac chan muon xoa?")) //eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  render() {
    var { index, companyItem } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{companyItem.id}</td>
        <td>{companyItem.taxCode}</td>
        <td>{companyItem.name}</td>
        <td>{companyItem.charterCapital}</td>
        <td>{companyItem.businessAreas}</td>
        <td>{companyItem.numberStaff}</td>
        <td>{companyItem.roomNumber}</td>
        <td>{companyItem.phone}</td>
        <td>{companyItem.area}</td>
        <td>
          <span>
            <button className="btn btn-danger" onClick={()=>this.onDelete(companyItem.id)}  style={{color: 'white'}}><CIcon icon={cilRecycle}  style={{color: '#000'}}/>Xóa</button>
          </span>
          <Link to={`/company/${companyItem.id}/edit`} className="btn btn-success"  style={{color: 'white'}}><CIcon icon={cilPencil}  style={{color: '#000'}}/>Sửa</Link>
        </td>
      </tr>
    )
  }
}

export default CompanyItem
