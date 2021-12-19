/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-deprecated*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddCompanyRequest, actEditCompanyRequest, actUpdateCompanyRequest } from 'src/actions';
import Validator from 'src/utils/validator';
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
export class CompanyActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      id: '',
      txtTaxCode: '',
      txtName: '',
      flCharterCapital: '',
      txtBusinessAreas: '',
      numStaff: '',
      txtRoomNumber: '',
      txtPhone: '',
      flArea: ''
    };
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
    var { id, txtTaxCode, txtName, flCharterCapital, txtBusinessAreas, numStaff, txtRoomNumber, txtPhone, flArea } = this.state;
    var { history } = this.props

    var company = {
      id: id,
      taxCode: txtTaxCode,
      name: txtName,
      charterCapital: flCharterCapital,
      businessAreas: txtBusinessAreas,
      numberStaff: numStaff,
      roomNumber: txtRoomNumber,
      phone: txtPhone,
      area: flArea
    }
    e.preventDefault();
    if (id) {
      // callAPI("PUT", `company/${id}`, {
      //   taxCode: txtTaxCode,
      //   name: txtName,
      //   charterCapital: flCharterCapital,
      //   businessAreas: txtBusinessAreas,
      //   numberStaff: numStaff,
      //   roomNumber: txtRoomNumber,
      //   phone: txtPhone,
      //   area: flArea
      // }).then(res => {
      //   history.goBack();
      // })
      this.props.onUpdateCompany(company);
    } else {
      this.props.onAddCompany(company)

    }
    history.goBack();
  }
  //sua
  componentDidMount() {
    console.log("componetDidMount: ");
    var { match } = this.props;
    if (match) {
      // lay tham so url
      var idParam = match.params.id;
      // callAPI("GET", `company/${idParam}`, null).then(res => {
      //   var data = res.data;
      //   this.setState({
      //     id: data.id,
      //     txtTaxCode: data.taxCode,
      //     txtName: data.name,
      //     flCharterCapital: data.charterCapital,
      //     txtBusinessAreas: data.businessAreas,
      //     numStaff: data.numberStaff,
      //     txtRoomNumber: data.roomNumber,
      //     txtPhone: data.phone,
      //     flArea: data.area
      //   })
      //   console.log(res.data);
      // })
      //thay the bang redux
      this.props.onEditProduct(idParam);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("itemEditting: ");
    if (nextProps && nextProps.itemEditting) {
      var { itemEditting } = nextProps;

      this.setState({
        id: itemEditting.id,
          txtTaxCode:itemEditting.taxCode ,
          txtName: itemEditting.name,
          flCharterCapital: itemEditting.charterCapital,
          txtBusinessAreas: itemEditting.businessAreas,
          numStaff:itemEditting.numberStaff,
          txtRoomNumber: itemEditting.roomNumber,
          txtPhone: itemEditting.phone,
          flArea: itemEditting.area
      })
    }
  }
  render() {
    // const {errors} = this.state;
    var { txtTaxCode, txtName, flCharterCapital, txtBusinessAreas, numStaff, txtRoomNumber, txtPhone, flArea } = this.state; //sua
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form  onSubmit={this.onSave} ref={c => { this.form = c }}>
          <div className="form-group">
            <label >Mã số thuế</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtTaxCode" value={txtTaxCode} validations={[required, email]} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Tên</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} validations={[required, email]} onChange={this.onChange} />
            {/* {errors.txtName && <div className="validation" style={{display: 'block'}}>{errors.txtName}</div>} */}
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Vốn điều lệ</label>
            <input type="number" required className="form-control" id="" placeholder="Input field" name="flCharterCapital" value={flCharterCapital} validations={[required, number]} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Lĩnh vực</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtBusinessAreas" value={txtBusinessAreas} validations={[required, number]} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Nhân viên</label>
            <input type="number" required className="form-control" id="" placeholder="Input field" name="numStaff" value={numStaff} validations={[required, number]} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Phòng</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtRoomNumber" value={txtRoomNumber} validations={[required]} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Điện thoại</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtPhone" value={txtPhone} validations={[required]} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label >Diện tích</label>
            <input type="number" required className="form-control" id="" placeholder="Input field" name="flArea" value={flArea} validations={[required, number]} onChange={this.onChange} />
          </div>
          <Link to='/company/list' className='btn btn-success'>Tro lai</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form >

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditting: state.itemEditting
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddCompany: (company) => {
      dispatch(actAddCompanyRequest(company));
    },
    onEditProduct: (id) => {
      dispatch(actEditCompanyRequest(id));
    },
    onUpdateCompany: (company) => {
      dispatch(actUpdateCompanyRequest(company));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyActionPage);
