/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-deprecated*/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddContractRequest, actEditContractRequest, actUpdateContractRequest } from 'src/actions';
import callAPI from 'src/utils/callAPI';
export class ContractActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtTaxCode: '',
      txtName: '',
      flCharterCapital: '',
      txtBusinessAreas: '',
      numStaff: '',
      txtRoomNumber: '',
      txtPhone: '',
      flArea: ''
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
    var { id, txtTaxCode, txtName, flCharterCapital, txtBusinessAreas, numStaff, txtRoomNumber, txtPhone, flArea } = this.state;
    var { history } = this.props
    var contract = {
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
      // callAPI("PUT", `contract/${id}`, {
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
      this.props.onUpdateContract(contract);
    } else {
      this.props.onAddContract(contract)

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
      // callAPI("GET", `contract/${idParam}`, null).then(res => {
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
    var { txtTaxCode, txtName, flCharterCapital, txtBusinessAreas, numStaff, txtRoomNumber, txtPhone, flArea } = this.state; //sua
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label >Mã số thuế</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtTaxCode" value={txtTaxCode} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Tên</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Vốn điều lệ</label>
            <input type="number" className="form-control" id="" placeholder="Input field" name="flCharterCapital" value={flCharterCapital} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Lĩnh vực</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtBusinessAreas" value={txtBusinessAreas} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Nhân viên</label>
            <input type="number" className="form-control" id="" placeholder="Input field" name="numStaff" value={numStaff} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Phòng</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtRoomNumber" value={txtRoomNumber} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Điện thoại</label>
            <input type="text" className="form-control" id="" placeholder="Input field" name="txtPhone" value={txtPhone} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label >Diện tích</label>
            <input type="number" className="form-control" id="" placeholder="Input field" name="flArea" value={flArea} onChange={this.onChange} />
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
    itemEditting: state.itemEditting
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
