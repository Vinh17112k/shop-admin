import React, { Component } from 'react'
import importImage from '../../image/logo192.png'
export class Typography extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h2>Học viện Công nghệ Bưu chính Viễn thông</h2>
            <div>Description</div>
            <div>Liên hệ: vinhtq.B18CN693@stu.ptit.edu.vn</div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img src={importImage} className="img-fluid" alt="Responsive" />
          </div>
        </div>
      </div>
    )
  }
}

export default Typography
