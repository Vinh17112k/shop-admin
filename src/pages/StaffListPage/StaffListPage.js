/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StaffList from 'src/components/Staff/StaffList/StaffList'
import StaffItem from 'src/components/Staff/StaffItem/StaffItem'
import { connect } from 'react-redux'
import { actDeleteStaffRequest, actFetchStaffsRequest } from 'src/actions'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import Search from 'src/components/Search/Search'
export class StaffListPage extends Component {
  componentDidMount (){
    this.props.fetchStaffs();
  }
  onDelete=(id)=>{
    this.props.onDeleteStaff(id);
  }
  render() {
    var { staffs,keyword } = this.props;
    staffs = staffs.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    console.log("staffs staffs: ", staffs);
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className='row d-flex justify-content-between'>
          <Link to="/staffs/add" className="btn btn-info col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
            <CIcon icon={cilPlus}/> Thêm nhan vien
          </Link>
          <Search />
        </div>
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
    company: stateOfStore.allCompany,
    keyword: stateOfStore.search
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
