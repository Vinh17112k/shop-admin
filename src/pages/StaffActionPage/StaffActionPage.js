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
      txtCode: "",
      txtName: '',
      daDateOfBirth: '',
      txtPhone: '',
      txtCompanyId: '',
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
    var { id, txtCompanyId, txtCode, txtName, daDateOfBirth, txtPhone } = this.state;
    var { history } = this.props;
    var staff = {
      id: id,
      code: txtCode,
      name: txtName,
      dateOfBirth: daDateOfBirth,
      phone: txtPhone,
      companyId: txtCompanyId
    }
    e.preventDefault();
    if (id) {
      this.props.onUpdateStaff(staff);
    } else {
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
      console.log("idParam: ", idParam);
      console.log(this.props);
      this.props.onEditStaff(idParam);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.staffEditting) {
      var { staffEditting } = nextProps;
      this.setState({
        id: staffEditting.id,
        txtCode: staffEditting.code,
        txtName: staffEditting.name,
        daDateOfBirth: staffEditting.dateOfBirth,
        txtPhone: staffEditting.phone,
        txtCompanyId: staffEditting.companyId,
      })
    }
  }
  showOption = (company) => {
    var result = null;
    result = company.map((item, index) => {
      return <option name="txtCompanyName" value={this.state.txtCompanyName} index={index} key={index}>{item.name}</option>
    })
    return result;
  }
  showOptionId = (company) => {
    var result = null;
    result = company.map((item, index) => {
      return <option name="txtCompanyId" value={this.state.txtCompanyId} index={index} key={index}>{item.id}</option>
    })
    return result;
  }
  render() {
    var { txtCode, txtName, daDateOfBirth, txtPhone,  txtCompanyId} = this.state; //sua
    console.log("company staff", this.props.company);
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Company Id</label>
            {/* <select className="custom-select">
              {this.showOptionId(this.props.company)}
            </select> */}
            <input type="number" className="form-control" id="" placeholder="Input field" name="txtCompanyId" value={txtCompanyId} onChange={this.onChange} />
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
