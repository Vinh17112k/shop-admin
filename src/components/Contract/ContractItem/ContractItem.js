/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ContractItem extends Component {
  onDelete = (id) => {
    if (confirm("Ban chac chan muon xoa hop dong?")) //eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  render() {
    var { index, contractItem } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{contractItem.id}</td>
        <td>{contractItem.name}</td>
        <td>{contractItem.description}</td>
        <td>{contractItem.costPerSquare}</td>
        <td>{contractItem.startDate}</td>
        <td>{contractItem.endDate}</td>
        <td>{contractItem.totalCost}</td>
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

export default ContractItem
