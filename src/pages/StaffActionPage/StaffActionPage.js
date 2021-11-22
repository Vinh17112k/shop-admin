/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-deprecated*/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddStaffRequest, actEditStaffRequest, actUpdateStaffRequest } from 'src/actions';
export class StaffActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      // txtCompanyName:'',
      txtCode: "",
      txtName: '',
      daDateOfBirth: '',
      txtPhone: ''
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
    var { id, txtCode, txtName, daDateOfBirth, txtPhone } = this.state;
    var { history } = this.props;
    var staff = {
      id: id,
      code: txtCode,
      name: txtName,
      dateOfBirth: daDateOfBirth,
      phone: txtPhone
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
      this.props.onUpdateStaff(staff);
    } else {
      // callAPI("POST", 'products',{
      //     name: txtName,
      //     price: txtPrice,
      //     status: chkbStatus
      // }).then(res=>{
      //     history.goBack();
      // })
      this.props.onAddStaff(staff)

    } history.goBack();
  }
  // //sua
  componentDidMount() {
    console.log("props: ", this.props)
    var { match } = this.props;
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
      console.log(this.props);
      this.props.onEditStaff(idParam);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.staffEditting) {
      var { staffEditting } = nextProps;
      var {company} = this.props;
      this.setState({
        id: staffEditting.id,
        txtCompanyName: company.name,
        txtCode: staffEditting.code,
        txtName: staffEditting.name,
        daDateOfBirth: staffEditting.dateOfBirth,
        txtPhone: staffEditting.phone
      })
    }
  }
  render() {
    var { txtCompanyName, txtCode, txtName, daDateOfBirth, txtPhone } = this.state; //sua
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Company Name</label>
            <select className="custom-select" name="categoryId" id="categoryId">
              <option selected>Select Category</option>
              <option value={txtCompanyName}
                name="txtCompanyName"></option>
            </select>
          </div>
          <div className="form-group">
            <label >CMT</label>
            <input type="number" className="form-control" id="" placeholder="Input field" name="txtCode" value={txtCode} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Tên</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label >Ngày sinh</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="daDateOfBirth" value={daDateOfBirth} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label >Điện thoại</label>
            <input type="number" className="form-control" id="" placeholder="Input field" name="txtPhone" value={txtPhone} onChange={this.onChange} />
          </div>

          <Link to='/staffs/list' className='btn btn-success'>Tro lai</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    staffEditting: state.staffEditting,
    company: state.allCompany
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddStaff: (staff) => {
      dispatch(actAddStaffRequest(staff));
    },
    onEditStaff: (id) => {
      dispatch(actEditStaffRequest(id));
    },
    onUpdateStaff: (staff) => {
      dispatch(actUpdateStaffRequest(staff));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StaffActionPage);
