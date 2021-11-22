/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StaffBuildingList from 'src/components/StaffBuilding/StaffBuildingList/StaffBuildingList'
import StaffBuildingItem from 'src/components/StaffBuilding/StaffBuildingItem/StaffBuildingItem'
import { connect } from 'react-redux'
import { actDeleteStaffBuildingRequest, actFetchStaffsBuildingRequest } from 'src/actions'
export class StaffBuildingListPage extends Component {
  componentDidMount(){
    this.props.fetchStaffBuidling();
    console.log(this.props);
  }
  onDelete=(id)=>{
    this.props.onDelete(id);
  }
  render() {
    var {staffs} =this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/staffsbuilding/add" className="btn btn-info mb-10">
          Thêm nhân viên tòa nhà
        </Link>
        <StaffBuildingList>
          {this.showStaffBuilding(staffs)}
        </StaffBuildingList>
      </div>
    )
  }
  showStaffBuilding=(staffs)=>{
    var result =null;
    result = staffs.map((staff, index)=>{
      return <StaffBuildingItem key={index} index={index} staffBuilding={staff} onDelete={this.onDelete}/>
    })
    return result;
  }
}
const mapStateToProps =(state)=>{
  return {
    staffs: state.staffsBuilding
  }
}
const mapDispatchToProps =(dispatch, props)=>{
  return{
    fetchStaffBuidling:()=>{
      dispatch(actFetchStaffsBuildingRequest())
    },
    onDelete:(id)=>{
      dispatch(actDeleteStaffBuildingRequest(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (StaffBuildingListPage);
