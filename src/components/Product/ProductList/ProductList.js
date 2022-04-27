/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'

export class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Danh sách công ty</h3>
          </div>
        </div>
        <div className="panel-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sản phẩm</th>
                <th>Tên</th>
                <th>Nhà sản xuất</th>
                <th>Ngày sản xuất</th>
                <th>Chất lượng</th>
                <th>Mô tả</th>
                {/* <th>Phòng</th> */}
                {/* <th>Diện tích</th> */}
                <th>Tình trạng</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
                {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ProductList
