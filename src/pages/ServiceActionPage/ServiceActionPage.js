/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-deprecated*/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddServiceRequest, actEditServiceRequest, actUpdateServiceRequest } from '../../actions/index';
import callAPI from 'src/utils/callAPI';
import { isEmail, isEmpty, isNumber } from 'validator';
const required = (value) => {
  if (isEmpty(value)) {
      return <small className="form-text text-danger">This field is required</small>;
  }
}

const email = (value) => {
  if (!isEmail(value)) {
      return <small className="form-text text-danger">Invalid email format</small>;
  }
}
const number = (value) => {
  if (!isNumber(value)) {
      return <small className="form-text text-danger">Invalid number format</small>;
  }
}
export class ServiceActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtCode: '',
      txtName: '',
      txtType: '',
      txtCost: ''
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSave = (e) => {
    var { id, txtCode, txtName, txtType, txtCost } = this.state;
    var { history } = this.props
    var service = {
      id: id,
      code: txtCode,
      name: txtName,
      type: txtType,
      cost: txtCost
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
      this.props.onUpdateService(service);
    } else {
      // callAPI("POST", 'products',{
      //     name: txtName,
      //     price: txtPrice,
      //     status: chkbStatus
      // }).then(res=>{
      //     history.goBack();
      // })
      this.props.onAddService(service);

    } history.goBack();
  }
  //sua
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      //lay tham so url
      var idParam = match.params.id;
      // callAPI("GET", `services/${idParam}`, null).then(res => {
      //   var data = res.data;
      //   this.setState({
      //     id: data.id,
      //     txtCode: data.code,
      //     txtName: data.name,
      //     txtType: data.type,
      //     txtCost: data.cost
      //   })
      //   console.log(res.data);
      // })
      // thay the bang redux
      this.props.onEditService(idParam);
      console.log(this.props);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.serviceEditting) {
      var { serviceEditting } = nextProps;
      this.setState({
        id: serviceEditting.id,
        txtCode: serviceEditting.code,
        txtName: serviceEditting.name,
        txtType: serviceEditting.type,
        txtCost: serviceEditting.cost
      })
    }
  }
  render() {
    var { txtCode, txtName, txtType, txtCost } = this.state; //sua
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label >Mã dịch vụ</label>
            <input type="text" required validations={[required]} className="form-control" id="" placeholder="Input field" name="txtCode" value={txtCode} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Tên</label>
            <input type="text" required validations={[required]} className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Loại</label>
            <input type="text" required validations={[required]} className="form-control" id="" placeholder="Input field" name="txtType" value={txtType} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Giá</label>
            <input type="number" required validations={[required,number]} className="form-control" id="" placeholder="Input field" name="txtCost" value={txtCost} onChange={this.onChange} />
          </div>
          <Link to='/services/list' className='btn btn-success'>Tro lai</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    serviceEditting: state.serviceEditting
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddService: (staff) => {
      dispatch(actAddServiceRequest(staff));
    },
    onEditService: (id) => {
      dispatch(actEditServiceRequest(id));
    },
    onUpdateService: (staff) => {
      dispatch(actUpdateServiceRequest(staff));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (ServiceActionPage)
