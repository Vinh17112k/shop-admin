// /* eslint-disable react/prop-types */
// /* eslint-disable prettier/prettier */
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { ContractItem } from 'src/components/Contract/ContractItem/ContractItem';
// import { RoomItem } from 'src/components/Room/RoomItem/RoomItem';
// import callAPI from 'src/utils/callAPI';
// import ProductContainRoom from './ProductContainRoom';

// export class ProductInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       errors: {},
//       id: '',
//       txtTaxCode: '',
//       txtName: '',
//       txtPhone: '',
//     };
//   }
//   // getRoomOfProduct = (contract, id) => {
//   //   var result = [];
//   //   console.log("id Product: ", id);
//   //   // eslint-disable-next-line array-callback-return
//   //   for (let i = 0; i < contract.length; i++) {
//   //     console.log("ProductId in contract: ", contract[i].Product.id);
//   //     if (contract[i].Product.id == id)
//   //       result.push(contract[i].room);
//   //   }
//   //   console.log("resultRoom: ", result);
//   //   return result;
//   // }
//   componentDidMount() {
//     console.log("componetDidMount: ");
//     var { match } = this.props;
//     // console.log("result: " + this.getRoomOfProduct(this.props.contract, match.params.id))
//     if (match) {
//       // lay tham so url
//       var idParam = match.params.id;
//       console.log("idParam: ", idParam);
//       callAPI("GET", `Product/${idParam}`, null).then(res => {
//         var data = res.data;
//         this.setState({
//           id: data.id,
//           txtTaxCode: data.taxCode,
//           txtName: data.name,
//           txtPhone: data.phone,
//         })
//         console.log(res.data);
//       })
//       //thay the bang redux
//       // this.props.onEditProduct(idParam);
//     }
//   }
//   showRoomProduct = (contract, id) => {
//     var result = null;
//     result = contract.map((item, index) => {
//       if (item.Product.id == id)
//         return <ProductContainRoom key={index} ProductContainRoom={item} index={index} />
//     })
//     return result;
//   }
//   getTotalCost = (contract) => {
//     var result = null;
//     contract.forEach((element, index) => {
//       result += element.totalCost;
//     });
//     return result;
//   }
//   render() {
//     var contract = this.props.contract;
//     return (
//       <div className='row'>
//         <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
//           <div className="panel panel-primary">
//             <div className="panel-heading">
//               <h3 className="panel-title">Thông tin công ty</h3>
//             </div>
//           </div>
//           <ul className="list-group">
//             <li className="list-group-item list-group-item-success"><label>Tên: {this.state.txtName}</label></li>
//             <li className="list-group-item list-group-item-primary"><label>Mã số thuế: {this.state.txtTaxCode}</label></li>
//             <li className="list-group-item list-group-item-danger"><label>Số điện thoại: {this.state.txtPhone}</label></li>
//           </ul>
//         </div>
//         <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
//           <div className="panel panel-primary">
//             <div className="panel-heading">
//               <h3 className="panel-title">Danh sách thuê phòng</h3>
//             </div>
//           </div>
//           <div className="panel-body">
//             <table className="table table-hover">
//               <thead>
//                 <tr>
//                   <th>STT</th>
//                   <th>Id</th>
//                   <th>Tên phòng</th>
//                   <th>Diện tích</th>
//                   <th>Giá thành</th>
//                   <th>Tổng tiền</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.showRoomProduct(contract, this.props.match.params.id)}
//               </tbody>
//             </table>
//           </div>
//           <span className='d-flex justify-content-between'><button className='btn btn-danger'>Tổng tiền</button>
//             <label>{this.getTotalCost(contract)}</label></span>
//         </div>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     contract: state.allContract,
//     room: state.allRoom,
//     Product: state.allProduct,
//   }
// }
// export default connect(mapStateToProps, null)(ProductInfo);
