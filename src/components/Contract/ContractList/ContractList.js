/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'

export class ContractList extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Danh sách hợp đồng</h3>
          </div>
        </div>
        <div className="panel-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên người thuê</th>
                <th>Tên Công ty</th>
                <th>Tên phòng</th>
                {/* <th>Mô tả</th> */}
                <th>Diện tích</th>
                <th>Giá thành</th>
                <th>Ngày thuê</th>
                <th>Ngày thanh toán</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
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

export default ContractList;
