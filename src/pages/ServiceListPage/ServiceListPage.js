/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actDeleteServiceRequest, actFetchServicesRequest } from 'src/actions'
//src ko on
import ServiceItem from 'src/components/ServiceBuilding/ServiceItem/ServiceItem'
import ServiceList from '../../components/ServiceBuilding/ServiceList/ServiceList'
export class ServiceListPage extends Component {
  componentDidMount(){
    console.log(this.props);
    this.props.fetchService();
  }
  onDelete=(id)=>{
    this.props.onDelete(id);
  }
  render() {
    var {services} =this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/services/add" className="btn btn-info mb-10">
          Thêm dịch vụ
        </Link>
        <ServiceList>
          {this.showService(services)}
        </ServiceList>
      </div>
    )
  }
  showService=(services)=>{
    var result = null;
    result = services.map((service, index)=>{
      return <ServiceItem key= {index} index={index} service ={service} onDelete={this.onDelete}/>
    })
    return result;
  }
}
const mapStateToProps =(stateOfProps)=>{
  return {
    services: stateOfProps.services
  }
}
const mapDispatchToProps =(dispatch, props)=>{
  return {
    fetchService :()=>{
      dispatch(actFetchServicesRequest())
    },
    onDelete :(id)=>{
      dispatch(actDeleteServiceRequest(id))
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (ServiceListPage);
