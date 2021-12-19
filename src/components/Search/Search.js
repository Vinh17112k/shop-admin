/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import {
  cilSearch
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'

class Search extends Component {

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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.searchTask(keyword));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
