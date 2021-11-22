/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CompanyList from '../../components/Company/CompanyList/CompanyList'
import CompanyItem from 'src/components/Company/CompanyItem/CompanyItem'
import { connect } from 'react-redux'
import { actDeleteCompanyRequest, actFetchAllCompanyRequest } from 'src/actions'
export class CompanyListPage extends Component {
  componentDidMount() {
    //thay bang lay data cua dispatch
    this.props.fetchAllCompany()
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
    this.props.onDeleteCompany(id);
  }
  render() {
    var { company } = this.props;
    console.log("company: ", company);
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/company/add" className="btn btn-info">
          Thêm công ty
        </Link>
        <CompanyList>
          {this.showCompanyItem(company)}
          {/* <CompanyItem /> */}
        </CompanyList>
      </div>
    )
  }
  showCompanyItem = (company) => {
    var result = null;
    result = company.map((item, index) => {
      console.log(item.id);
      return <CompanyItem key={index} index={index} companyItem={item} onDelete ={this.onDelete}/>
    })
    return result;
  }
}
const mapStateToProps = (stateOfStore) => {
  return {
    company: stateOfStore.allCompany
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
