/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ContractList from '../../components/Contract/ContractList/ContractList'
import ContractItem from 'src/components/Contract/ContractItem/ContractItem'
import { connect } from 'react-redux'
import { actDeleteContractRequest, actFetchAllContractRequest } from 'src/actions'
export class ContractListPage extends Component {
  componentDidMount() {
    //thay bang lay data cua dispatch
    this.props.fetchAllContract()
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
    this.props.onDeleteContract(id);
  }
  render() {
    var { contract } = this.props;
    console.log("contract contract: ", contract);
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/contract/add" className="btn btn-info">
          Thêm công ty
        </Link>
        <ContractList>
          {this.showContractItem(contract)}
          {/* <ContractItem /> */}
        </ContractList>
      </div>
    )
  }
  showContractItem = (contract) => {
    var result = null;
    result = contract.map((item, index) => {
      console.log(item.id);
      return <ContractItem key={index} index={index} contractItem={item} onDelete ={this.onDelete}/>
    })
    return result;
  }
}
const mapStateToProps = (stateOfStore) => {
  return {
    contract: stateOfStore.allContract
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllContract: () => {
      dispatch(actFetchAllContractRequest());
    },
    onDeleteContract: (id) => {
      dispatch(actDeleteContractRequest(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContractListPage);
