/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import {
  cilSearch,
  cilSortDescending,
  cilFilter
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/index'

class TaskSearchControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  onHandleChange = (event) => {
    this.setState({
      keyword: event.target.value
    });
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword); // dispatch searchTask
  }
  onSort=()=>{
    this.props.onSort();
  }
  onStatus=()=>{
    this.props.onStatus();
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            name="keyword"
            value={this.state.keyword}
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
            onChange={this.onHandleChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-success" type="button" onClick={this.onSearch}>
              <CIcon icon={cilSearch} /> Tìm
            </button>
          </span>
        </div>
        <span className="input-group-btn">
            <button className="btn btn-success" type="button" onClick={this.onSort}> <CIcon icon={cilSortDescending} />
              Sắp xếp
            </button>
            <button className="btn btn-danger" type="button" onClick={this.onStatus}> <CIcon icon={cilFilter} />
              Lọc trạng thái
            </button>
          </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contract: state.allContract
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.searchTask(keyword));
    },
    onSort:()=>{
      dispatch(actions.actFetchAllContractCost())
    },
    onStatus:()=>{
      dispatch(actions.actFetchContractStatus())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSearchControl);
