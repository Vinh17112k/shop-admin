/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import {
  cilInfo, cilPencil,
  cilRecycle
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class ProductItem extends Component {
  onDelete = (id) => {
    if (confirm("Ban chac chan muon xoa?")) //eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  render() {
    var { index, productItem } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{productItem.id}</td>
        <td>{productItem.name}</td>
        <td>{productItem.price}</td>
        <td>{productItem.added_on}</td>
        {/* <td>{productItem.typeQuality}</td> */}
        {/* <td>{productItem.producer}</td>
        <td>{productItem.publicDate}</td>
        <td>{productItem.typeQuality}</td> */}
        {/* <td>{productItem.roomNumber}</td> */}
        <td>{productItem.description}</td>
        {/* <td>{productItem.status}</td> */}
        {/* <td>{productItem.area}</td> */}
        <td>
          <span>
            <button className="btn btn-danger" onClick={() => this.onDelete(productItem.id)} style={{ color: 'white' }}><CIcon icon={cilRecycle} style={{ color: '#000' }} />Xóa</button>
            &nbsp;
          </span>
          <Link to={`/product/${productItem.id}/edit`} className="btn btn-success" style={{ color: 'white' }}><CIcon icon={cilPencil} style={{ color: '#000' }} />Sửa</Link>&nbsp;
          <Link to={`/product/${productItem.id}/info`} className="btn btn-info" style={{ color: 'white' }}><CIcon icon={cilInfo} style={{ color: '#000' }} />Chi tiết</Link>
        </td>
      </tr>
    )
  }
}

export default ProductItem
