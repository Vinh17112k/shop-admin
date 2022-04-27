/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../../components/Product/ProductList/ProductList'
import ProductItem from 'src/components/Product/ProductItem/ProductItem'
import { connect } from 'react-redux'
import { actDeleteProductRequest, actFetchAllProductRequest } from 'src/actions'
import Search from 'src/components/Search/Search'
export class ProductListPage extends Component {
  componentDidMount() {
    //thay bang lay data cua dispatch
    this.props.fetchAllProduct()
  }
  onDelete = (id) => {
    console.log("this is delete")
    this.props.onDeleteProduct(id)
  }
  render() {
    var { product, keyword } = this.props
    //lỗi không load được
    product = product.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    console.log('product product: ', product)
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="row d-flex justify-content-between">
          <Link to="/product/add" className="btn btn-info col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
            <CIcon icon={cilPlus} /> Thêm sản phẩm
          </Link>
          <Search />
        </div>
        <ProductList>{this.showProductItem(product)}</ProductList>
      </div>
    )
  }
  showProductItem = (product) => {
    var result = null
      result = product.map((item, index) => {
        console.log(item.id)
        return <ProductItem key={index} index={index} productItem={item} onDelete={this.onDelete} />
      })
    return result
  }
}
const mapStateToProps = (stateOfStore) => {
  return {
    product: stateOfStore.allProduct,
    keyword: stateOfStore.search,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProduct: () => {
      dispatch(actFetchAllProductRequest())
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
