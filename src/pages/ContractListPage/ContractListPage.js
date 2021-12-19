/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { cilPlus } from '@coreui/icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ContractList from '../../components/Contract/ContractList/ContractList'
import ContractItem from 'src/components/Contract/ContractItem/ContractItem'
import { connect } from 'react-redux'
import { actDeleteContractRequest, actFetchAllContractRequest } from 'src/actions'
import TaskSearchControl from 'src/components/Search/TaskSearchControl'
import CIcon from '@coreui/icons-react'
export class ContractListPage extends Component {
  componentDidMount() {
    this.props.fetchAllContract()
  }
  onDelete = (id) => {
    this.props.onDeleteContract(id);
  }
  render() {
    var { contract, keyword} = this.props;
    contract = contract.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    console.log("contract contract: ", contract);
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className='row d-flex justify-content-between'>
          <Link to="/contract/add" className="btn btn-info col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
            <CIcon icon={cilPlus}/> Thêm hợp đồng
          </Link>
        <TaskSearchControl/>
        <ContractList>
          {this.showContractItem(contract)}
          {/* <ContractItem /> */}
        </ContractList>
      </div>
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
    contract: stateOfStore.allContract,
    keyword: stateOfStore.search
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
