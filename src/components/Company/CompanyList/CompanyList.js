/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'

export class CompanyList extends Component {
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
                <th>Ma</th>
                <th>Mã số thuế</th>
                <th>Tên</th>
                <th>vốn điều lệ</th>
                <th>Lĩnh vực</th>
                <th>Số nhân viên</th>
                <th>Phòng</th>
                <th>Diện tích</th>
                <th>Số điện thoại</th>
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

export default CompanyList
