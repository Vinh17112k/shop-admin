/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-deprecated*/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddCategoryRequest, actEditCategoryRequest, actUpdateCategoryRequest } from 'src/actions';
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
export class CategoryActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      // txtCode: "",
      txtName: '',
      // daDateOfBirth: '',
      // txtPhone: '',
      // txtCompanyId: '',
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
    var { id, txtName } = this.state;
    console.log("txtName", txtName);
    var { history } = this.props;
    var category = {
      id: id,
      // code: txtCode,
      name: txtName,
      // dateOfBirth: daDateOfBirth,
      // phone: txtPhone,
      // companyId: txtCompanyId
    }
    e.preventDefault();
    if (id) {
      this.props.onUpdateCategory(category);
    } else {
      this.props.onAddCategory(category)

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
      this.props.onEditCategory(idParam);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditting) {
      var { itemEditting } = nextProps;
      console.log("itemCategory", itemEditting)
      this.setState({
        id: itemEditting.id,
        txtName: itemEditting.name,
      })
    }
  }
  // showOption = (company) => {
  //   var result = null;
  //   result = company.map((item, index) => {
  //     return <option name="txtCompanyName" value={this.state.txtCompanyName} index={index} key={index}>{item.name}</option>
  //   })
  //   return result;
  // }
  // showOptionId = (company) => {
  //   var result = null;
  //   result = company.map((item, index) => {
  //     return <option name="txtCompanyId" value={this.state.txtCompanyId} index={index} key={index}>{item.id}</option>
  //   })
  //   return result;
  // }
  render() {
    var { txtName} = this.state; //sua
    // console.log("company category", this.props.company);
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>
          {/* <div className="form-group"> */}
            {/* <label>Company Id</label> */}
            {/* <select className="custom-select">
              {this.showOptionId(this.props.company)}
            </select> */}
            {/* <input type="number" required validations={[required]} className="form-control" id="" placeholder="Input field" name="txtCompanyId" value={txtCompanyId} onChange={this.onChange} /> */}
          {/* </div> */}
          {/* <div className="form-group">
            <label >CMT</label>
            <input type="number" required validations={[required,number]} className="form-control" id="" placeholder="Input field" name="txtCode" value={txtCode} onChange={this.onChange} />
          </div> */}
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Tên</label>
            <input type="text" required validations={[required]} className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} onChange={this.onChange} />
          </div>
          {/* <div className="form-group">
            <label >Ngày sinh</label>
            <input type="text" required validations={[required]} className="form-control" id="" placeholder="Input field" name="daDateOfBirth" value={daDateOfBirth} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label >Điện thoại</label>
            <input type="number" required validations={[required,number]} className="form-control" id="" placeholder="Input field" name="txtPhone" value={txtPhone} onChange={this.onChange} />
          </div> */}

          <Link to='/category/list' className='btn btn-success'>Tro lai</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditting: state.itemCategory,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddCategory: (category) => {
      dispatch(actAddCategoryRequest(category));
    },
    onEditCategory: (id) => {
      dispatch(actEditCategoryRequest(id));
    },
    onUpdateCategory: (category) => {
      dispatch(actUpdateCategoryRequest(category));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryActionPage);
