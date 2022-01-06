/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-deprecated*/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddContractRequest, actEditContractRequest, actUpdateContractRequest } from 'src/actions';
import { isEmpty, isNumber } from 'validator';
const required = (value) => {
  if (isEmpty(value)) {
    return <small className="form-text text-danger">This field is required</small>;
  }
}
const number = (value) => {
  if (!isNumber(value)) {
    return <small className="form-text text-danger">Invalid number format</small>;
  }
}
export class ContractActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtDescription: '',
      flSquare: '',
      flCostPerSquare: '',
      txtStartDate: '',
      txtEndDate: '',
      longRoomId: '',
      longCompanyId: '',
      // flTotalCost:''
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      ...this.state,
      [name]: value
    })

  }
  onSave = (e) => {
    var dataContract = this.props.contract;
    console.log("dataContract", dataContract);
    console.log("state", this.state);
    var { room } = this.props;
    console.log("room", room);
    var { history } = this.props
    var { id, txtName, txtDescription, flCostPerSquare, txtStartDate, txtEndDate, flSquare, longRoomId, longCompanyId } = this.state;

    var contract = {
      id: id,
      name: txtName,
      description: txtDescription,
      square: flSquare,
      costPerSquare: flCostPerSquare,
      startDate: new Date(txtStartDate),
      endDate: new Date(txtEndDate),
      totalCost: flSquare * flCostPerSquare,
      roomId: longRoomId,
      companyId: longCompanyId,
      // totalCost:flTotalCost
    }
    var squareContract = contract[Object.keys(contract)[3]];
    var roomId = contract[Object.keys(contract)[8]];
    var roomSquare = this.getRoomSquare(room, roomId);
    console.log("roomId", roomId);
    console.log("square Contract", squareContract);
    console.log("roomSquare ", roomSquare)
    e.preventDefault();
    if (id) {
      this.props.onUpdateContract(contract);
    } else {
      if (roomSquare > squareContract) {
        console.log("Ok");
        for (let i = 0; i < dataContract.length; i++) {
          console.log("dataContract", dataContract[i])
          if (dataContract[i].company.id == contract.companyId&&dataContract[i].room.id==contract.roomId)
            alert("Đã ký hợp đồng với công ty", dataContract[i].company.name)
          break;
        }
        this.props.onAddContract(contract)
        history.goBack();
      } else {
        alert("Phòng không đủ diện tích");
      }
    }
  }
  //sua
  componentDidMount() {
    console.log("componetDidMount: ");
    var { contract, room, itemEditting } = this.props;
    console.log("dataContract", contract);
    console.log("dataRoom", room);
    console.log("dataEditting", itemEditting);
    var { match } = this.props;
    if (match) {
      var idParam = match.params.id;
      this.props.onEditProduct(idParam);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("itemEditting: " + nextProps.itemEditting);
    if (nextProps && nextProps.itemEditting) {
      var { itemEditting } = nextProps;
      console.log("id: " + itemEditting.id);
      console.log("start: " + itemEditting.startDate);
      console.log("end: " + itemEditting.endDate);
      this.setState({
        id: itemEditting.id,
        txtName: itemEditting.name,
        txtDescription: itemEditting.description,
        flSquare: itemEditting.square,
        flCostPerSquare: itemEditting.costPerSquare,
        txtStartDate: itemEditting.startDate,
        txtEndDate: itemEditting.endDate,
        longRoomId: itemEditting.roomId,
        longCompanyId: itemEditting.companyId
      })
    }
  }
  getRoomSquare(dataRoom, roomId) {
    var result = null;
    for (let i = 0; i < dataRoom.length; i++) {
      if (dataRoom[i].id == roomId) {
        console.log("idRoom: ",roomId);
        console.log("resquare: ",dataRoom[i].restSquare);
        console.log("resquare: ",dataRoom[i]);
        result = dataRoom[i].square;
      }
    }
    return result;
  }
  showOptionCompanyId = (company) => {
    var result = null;
    result = company.map((item, index) => {
      return <option required validations={[required, number]} index={index} value={item.id} key={index}>{item.id}</option>
    })
    return result;
  }
  showOptionRoomId = (room) => {
    var result = null;
    result = room.map((item, index) => {
      return <option required validations={[required]} index={index} value={item.id} key={index}>{item.id}</option>
    })
    return result;
  }
  render() {
    var { txtName, txtDescription, txtStartDate, txtEndDate, flCostPerSquare, flSquare, longRoomId, longCompanyId } = this.state; //sua
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Tên</label>
            <input type="text" required validations={[required]} className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Mô tả</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtDescription" value={txtDescription} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Ngày thuê</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtStartDate" value={txtStartDate} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Ngày thanh toán</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtEndDate" value={txtEndDate} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Diện tích</label>
            <input type="number" required validations={[required]} className="form-control" id="" placeholder="Input field" name="flSquare" value={flSquare} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Giá thành</label>
            <input type="number" required validations={[required]} className="form-control" id="" placeholder="Input field" name="flCostPerSquare" value={flCostPerSquare} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Room Id</label>
            <select required validations={[required]} className="custom-select" name="longRoomId" value={this.state.longRoomId} onChange={this.onChange}>
              <option>Select Id</option>
              {this.showOptionRoomId(this.props.room)}
            </select>
          </div>
          <div className="form-group">
            <label>Company Id</label>
            <select required validations={[required]} className="custom-select" name="longCompanyId" value={this.state.longCompanyId} onChange={this.onChange}>
              <option value="">Select Id</option>
              {this.showOptionCompanyId(this.props.company)}
            </select>
            {/* <input type="number" className="form-control" id="" placeholder="Input field" name="longCompanyId" value={longCompanyId} onChange={this.onChange} /> */}
          </div>
          <Link to='/contract/list' className='btn btn-success'>Tro lai</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditting: state.contractEditting,
    company: state.allCompany,
    contract: state.allContract,
    room: state.allRoom
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddContract: (contract) => {
      dispatch(actAddContractRequest(contract));
    },
    onEditProduct: (id) => {
      dispatch(actEditContractRequest(id));
    },
    onUpdateContract: (contract) => {
      dispatch(actUpdateContractRequest(contract));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContractActionPage);
