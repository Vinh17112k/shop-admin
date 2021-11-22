/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddStaffBuildingRequest, actEditStaffBuildingRequest, actUpdateStaffBuildingRequest } from 'src/actions';
import staffsBuilding from 'src/reducers/staffBuilding/staffsBuilding';
export class StaffBuildingActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtCode: '',
      txtName: '',
      daDateOfBirth: '',
      txtAddress: '',
      txtPhone: '',
      txtLevel: '',
      txtPosition: ''
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value
    this.setState({
      [name]: value
    })
  }
  onSave = (e) => {
    var { id, txtCode, txtName, daDateOfBirth, txtAddress, txtPhone, txtLevel, txtPosition } = this.state;
    var { history } = this.props
    var staffBuilding = {
      id: id,
      code: txtCode,
      name: txtName,
      dateOfBirth: daDateOfBirth,
      address: txtAddress,
      phone: txtPhone,
      level: txtLevel,
      position: txtPosition
    }
    e.preventDefault();
    if (id) {
      //sua
      // callAPI("PUT",`products/${id}`,{
      //     name: txtName,
      //     price: txtPrice,
      //     status: chkbStatus
      // }).then(res=>{
      //     history.goBack();
      // })
      //thay the bang actUpdateProductRequest
      this.props.onUpdateStaffBuilding(staffBuilding);
    } else {
      // callAPI("POST", 'products',{
      //     name: txtName,
      //     price: txtPrice,
      //     status: chkbStatus
      // }).then(res=>{
      //     history.goBack();
      // })
      this.props.onAddStaffBuilding(staffBuilding)

    } history.goBack();
  }
  //sua
  componentDidMount() {
    var { match } = this.props;
    console.log(this.props)
    if (match) {
      //lay tham so url
      var idParam = match.params.id;
      // callAPI("GET",`products/${idParam}`,null).then(res=>{
      //     var data = res.data;
      //     this.setState({
      //         id:data.id,
      //         txtName:data.name,
      //         txtPrice: data.price,
      //         chkbStatus: data.status
      //     })
      //     console.log(res.data);
      // })
      //thay the bang redux
      this.props.onEditStaffBuilding(idParam);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditting) {
      var { itemEditting } = nextProps;
      this.setState({
        id: itemEditting.id,
        txtCode: itemEditting.code,
        txtName: itemEditting.name,
        daDateOfBirth:itemEditting.dateOfBirth ,
        txtAddress: itemEditting.address,
        txtPhone: itemEditting.phone,
        txtLevel: itemEditting.level,
        txtPosition:itemEditting.position
      })
    }
  }
  render() {
    var { txtCode, txtName, daDateOfBirth, txtAddress, txtPhone, txtLevel, txtPosition} = this.state; //sua
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label >Mã nhân viên</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtCode" value={txtCode} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Tên</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Ngày sinh</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="daDateOfBirth" value={daDateOfBirth} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Địa chỉ</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtAddress" value={txtAddress} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Điện thoại</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtPhone" value={txtPhone} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Cấp bậc</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtLevel" value={txtLevel} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label >Vị trí</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtPosition" value={txtPosition} onChange={this.onChange} />
          </div>
          <Link to='/staffsbuilding/list' className='btn btn-success'>Tro lai</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditting: state.itemStaffEditting
  }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        onAddStaffBuilding:(staffBuilding)=>{
            dispatch(actAddStaffBuildingRequest(staffBuilding));
        },
        onEditStaffBuilding:(id)=>{
            dispatch(actEditStaffBuildingRequest(id));
        },
        onUpdateStaffBuilding:(staffBuilding)=>{
            dispatch(actUpdateStaffBuildingRequest(staffBuilding));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (StaffBuildingActionPage);
