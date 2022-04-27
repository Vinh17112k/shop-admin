/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CategoryList from 'src/components/Category/CategoryList/CategoryList'
import CategoryItem from 'src/components/Category/CategoryItem/CategoryItem'
import { connect } from 'react-redux'
import { actDeleteCategoryRequest, actFetchAllCategoryRequest } from 'src/actions'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import Search from 'src/components/Search/Search'
export class CategoryListPage extends Component {
  componentDidMount (){
    this.props.fetchAllCategory();
  }
  onDelete=(id)=>{
    this.props.onDeleteCategory(id);
  }
  render() {
    var { category,keyword } = this.props;
    category = category.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    console.log("category category: ", category);
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className='row d-flex justify-content-between'>
          <Link to="/category/add" className="btn btn-info col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
            <CIcon icon={cilPlus}/> Thêm danh mục
          </Link>
          <Search />
        </div>
        <CategoryList>
          {this.showCategory(category)}
        </CategoryList>
      </div>
    )
  }
  showCategory=(category)=>{
    var result = null;
    result = category.map((category, index)=>{
      return <CategoryItem key={index} index={index} category={category} onDelete ={this.onDelete}/>
    })
    return result;
  }
}
const mapStateToProps = (stateOfStore)=>{
  return {
    category: stateOfStore.allCategory,
    company: stateOfStore.allCompany,
    keyword: stateOfStore.search
  }
}
const mapDispatchToProps =(dispatch, props)=>{
  return {
    fetchAllCategory: ()=>{
      dispatch(actFetchAllCategoryRequest())
    },
    onDeleteCategory: (id)=>{
      dispatch(actDeleteCategoryRequest(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (CategoryListPage);
