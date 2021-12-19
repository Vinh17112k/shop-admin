/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RoomList from '../../components/Room/RoomList/RoomList'
import RoomItem from '../../components/Room/RoomItem/RoomItem'
import { connect } from 'react-redux'
import { actDeleteRoomRequest, actFetchAllRoomRequest } from 'src/actions'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import Search from 'src/components/Search/Search'
export class RoomListPage extends Component {
  componentDidMount() {
    //thay bang lay data cua dispatch
    this.props.fetchAllRoom()
  }
  onDelete = (id) => {
    // var { products } = this.state;
    // callAPI("DELETE", `products/${id}`, null).then(res => {
    //     if (res.status === 200) {
    //         var index = this.findIndex(products, id);
    //         if (index !== -1) {
    //             products.splice(index, 1);
    //             this.setState({
    //                 products: products
    //             })
    //         }
    //     }
    // })
    //thay the bang actDeleteRequest
    this.props.onDeleteRoom(id);
  }
  render() {
    var { room,keyword } = this.props;
    room = room.filter((item) => {
      return item.roomName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    console.log("room room: ", room);
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className='row d-flex justify-content-between'>
          <Link to="/room/add" className="btn btn-info col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
            <CIcon icon={cilPlus}/> Thêm room
          </Link>
          <Search />
        </div>
        <RoomList>
          {this.showRoomItem(room)}
        </RoomList>
      </div>
    )
  }
  showRoomItem = (room) => {
    var result = null;
    result = room.map((item, index) => {
      console.log(item);
      return <RoomItem key={index} index={index} roomItem={item} onDelete ={this.onDelete}/>
    })
    return result;
  }
}
const mapStateToProps = (stateOfStore) => {
  return {
    room: stateOfStore.allRoom,
    keyword: stateOfStore.search
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllRoom: () => {
      dispatch(actFetchAllRoomRequest());
    },
    onDeleteRoom: (id) => {
      dispatch(actDeleteRoomRequest(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RoomListPage);
