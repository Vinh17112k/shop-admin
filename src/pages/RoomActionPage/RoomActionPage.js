/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-deprecated*/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddRoomRequest, actEditRoomRequest, actUpdateRoomRequest } from 'src/actions';
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
export class RoomActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtRoomName: '',
      txtDescription: '',
      flSquare: '',
      intLevel: '',
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    console.log("value", value);
    this.setState({
      ...this.state,
      [name]: value
    })
  }
  onSave = (e) => {
    var { id, txtRoomName, txtDescription, flSquare, intLevel } = this.state;
    var { history } = this.props
    var room = {
      id: id,
      roomName: txtRoomName,
      description: txtDescription,
      square: flSquare,
      level: intLevel,
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
      this.props.onUpdateRoom(room);
    } else {
      this.props.onAddRoom(room)

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
      this.props.onEditRoom(idParam);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("itemEditting: ");
    if (nextProps && nextProps.itemEditting) {
      var { itemEditting } = nextProps;

      this.setState({
        id: itemEditting.id,
        txtRoomName: itemEditting.roomName,
        txtDescription: itemEditting.description,
        flSquare: itemEditting.square,
        intLevel: itemEditting.level
      })
    }
  }
  render() {
    var {id, txtRoomName, txtDescription, flSquare, intLevel } = this.state; //sua
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label >Tên phòng</label>
            <input type="text" required validations={[required]} className="form-control" id="" placeholder="Input field" name="txtRoomName" value={txtRoomName} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Mô tả</label>
            <input type="text" required validations={[required]} className="form-control" id="" placeholder="Input field" name="txtDescription" value={txtDescription} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Diện tích</label>
            <input type="number" required validations={[required,number]} className="form-control" id="" placeholder="Input field" name="flSquare" value={flSquare} onChange={this.onChange} />
          </div>
          <div className="form-group">
            {/* value de do du lieu thanh cong */}
            <label >Tầng</label>
            <input type="number" required validations={[required,number]} className="form-control" id="" placeholder="Input field" name="intLevel" value={intLevel} onChange={this.onChange} />
          </div>
          <Link to='/room/list' className='btn btn-success'>Tro lai</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditting: state.roomEditting
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddRoom: (room) => {
      dispatch(actAddRoomRequest(room));
    },
    onEditRoom: (id) => {
      dispatch(actEditRoomRequest(id));
    },
    onUpdateRoom: (room) => {
      dispatch(actUpdateRoomRequest(room));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RoomActionPage);
