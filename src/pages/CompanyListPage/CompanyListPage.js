/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import {
  cilPlus
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CompanyList from '../../components/Company/CompanyList/CompanyList'
import CompanyItem from 'src/components/Company/CompanyItem/CompanyItem'
import { connect } from 'react-redux'
import { actDeleteCompanyRequest, actFetchAllCompanyRequest } from 'src/actions'
import Search from 'src/components/Search/Search'
export class CompanyListPage extends Component {
  componentDidMount() {
    //thay bang lay data cua dispatch
    this.props.fetchAllCompany()
  }
  onDelete = (id) => {
    this.props.onDeleteCompany(id);
  }
  render() {
    var { company, keyword } = this.props;
    company = company.filter((item) => {
      return item.taxCode.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    console.log("company company: ", company);
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className='row d-flex justify-content-between'>
          <Link to="/company/add" className="btn btn-info col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
            <CIcon icon={cilPlus}/> Thêm hợp đồng
          </Link>
          <Search />
        </div>
        <CompanyList>
          {this.showCompanyItem(company)}
        </CompanyList>
      </div>
    )
  }
  showCompanyItem = (company) => {
    var result = null;

    result = company.map((item, index) => {
      console.log(item.id);
      return <CompanyItem key={index} index={index} companyItem={item} onDelete={this.onDelete} />
    })
    return result;
  }
}
const mapStateToProps = (stateOfStore) => {
  return {
    company: stateOfStore.allCompany,
    keyword: stateOfStore.search
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllCompany: () => {
      dispatch(actFetchAllCompanyRequest());
    },
    onDeleteCompany: (id) => {
      dispatch(actDeleteCompanyRequest(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyListPage);
