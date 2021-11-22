/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ServiceItem extends Component {
  onDelete=(id)=>{
    if (confirm("Ban chac chan muon xoa?"))
    {
      this.props.onDelete(id);
    }
  }
  render() {
    var {index,service} =this.props;
    return (
      <tr>
        <td>{index+1}</td>
        <td>{service.id}</td>
        <td>{service.code}</td>
        <td>{service.name}</td>
        <td>{service.type}</td>
        <td>{service.cost}</td>
        <td>
          <span>
            <button className="btn btn-danger" onClick={()=>this.onDelete(service.id)}>Xoa</button>
          </span>
          <Link to={`/services/${service.id}/edit`} className="btn btn-success">Sua</Link>
        </td>
      </tr>
    )
  }
}

export default ServiceItem
