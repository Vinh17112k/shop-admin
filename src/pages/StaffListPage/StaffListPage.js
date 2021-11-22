/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StaffList from 'src/components/Staff/StaffList/StaffList'
import StaffItem from 'src/components/Staff/StaffItem/StaffItem'
import { connect } from 'react-redux'
import { actDeleteStaffRequest, actFetchStaffsRequest } from 'src/actions'
export class StaffListPage extends Component {
  componentDidMount (){
    this.props.fetchStaffs();
  }
  onDelete=(id)=>{
    this.props.onDeleteStaff(id);
  }
  render() {
    var {staffs} = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/staffs/add" className="btn btn-info mb-10">
          Them san pham
        </Link>
        <StaffList>
          {this.showStaffs(staffs)}
        </StaffList>
      </div>
    )
  }
  showStaffs=(staffs)=>{
    var result = null;
    result = staffs.map((staff, index)=>{
      return <StaffItem key={index} index={index} staff={staff} onDelete ={this.onDelete}/>
    })
    return result;
  }
}
const mapStateToProps = (stateOfStore)=>{
  return {
    staffs: stateOfStore.staffs,
    company: stateOfStore.allCompany
  }
}
const mapDispatchToProps =(dispatch, props)=>{
  return {
    fetchStaffs: ()=>{
      dispatch(actFetchStaffsRequest())
    },
    onDeleteStaff: (id)=>{
      dispatch(actDeleteStaffRequest(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (StaffListPage);
