/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'

export class RoomList extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Danh sách phòng</h3>
          </div>
        </div>
        <div className="panel-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Id</th>
                <th>Tên phòng</th>
                <th>Diện tích</th>
                <th>Mô tả</th>
                <th>Tầng</th>
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

export default RoomList
