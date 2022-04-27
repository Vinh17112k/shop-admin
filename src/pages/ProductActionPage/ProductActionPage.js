/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-deprecated*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from 'src/actions';
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
export class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      id: '',
      // txtTaxCode: '',
      txtName: '',
      txtPrice: '',
      // txtAddedOn: '',
      txtDescription: ''
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
    var { id, txtName, txtPrice, txtDescription} = this.state;
    var { history } = this.props

    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      // added_on: txtAddedOn,
      description: txtDescription,
    }
    e.preventDefault();
    if (id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product)

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
      this.props.onEditProduct(idParam);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("itemEditting: ");
    if (nextProps && nextProps.itemEditting) {
      var { itemEditting } = nextProps;
      console.log("itemEditting: ", itemEditting);
      this.setState({
        id: itemEditting.id,
          txtName: itemEditting.name,
          txtPrice: itemEditting.price,
          // txtAddedOn: itemEditting.added_on,
          txtDescription:itemEditting.description
      })
    }
  }
  render() {
    // const {errors} = this.state;
    var { txtName, txtPrice, txtDescription} = this.state; //sua
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form  onSubmit={this.onSave} ref={c => { this.form = c }}>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Tên</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} validations={[required, email]} onChange={this.onChange} />
            {/* {errors.txtName && <div className="validation" style={{display: 'block'}}>{errors.txtName}</div>} */}
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Giá</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtPrice" value={txtPrice} validations={[required, number]} onChange={this.onChange} />
          </div>
          {/* <div className="form-group"> */}
            {/* value de do du lieu thanh cong */}
            {/* <label >Ngày thêm</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtAddOn" value={txtAddedOn}  onChange={this.onChange} />
          </div> */}
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Mô tả</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtDescription" value={txtDescription} validations={[required, number]} onChange={this.onChange} />
          </div>
          {/* <div className="form-group">
            <label >Phòng</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtRoomNumber" value={txtRoomNumber} validations={[required]} onChange={this.onChange} />
          </div> */}
          {/* <div className="form-group"> */}
            {/* value de do du lieu thanh cong */}
            {/* <label >Điện thoại</label>
            <input type="text" required className="form-control" id="" placeholder="Input field" name="txtPhone" value={txtPhone} validations={[required]} onChange={this.onChange} />
          </div> */}
          {/* <div className="form-group">
            <label >Diện tích</label>
            <input type="number" required className="form-control" id="" placeholder="Input field" name="flArea" value={flArea} validations={[required, number]} onChange={this.onChange} />
          </div> */}
          <Link to='/product/list' className='btn btn-success'>Tro lai</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form >

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditting: state.itemProduct
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actEditProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
