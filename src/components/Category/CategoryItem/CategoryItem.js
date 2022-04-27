/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class CategoryItem extends Component {
  onDelete =(id)=>{
    if (confirm("Ban chac chan muon xoa?")) //eslint-disable-line
    {
      this.props.onDelete(id);
    }
  }
  // checkStaff=(company,staff)=>{
  //     var result = null;
  //     result = company.map((item, index) => {
  //       if(item.id === staff.item.id)
  //       result = item;
  //     })
  //     return result;
  // }
  render() {
    var {index, category} =this.props;
    console.log("staff is", category);
    return (
      <tr>
        <td>{index+1}</td>
        <td>{category.id}</td>
        <td>{category.name}</td>
        <td>
          <span>
            <button className="btn btn-danger" onClick={()=>this.onDelete(category.id)}>Xoa</button>
          </span>
          <Link to={`/category/${category.id}/edit`} className="btn btn-info">Sua</Link>
        </td>
      </tr>
    )
  }
}

export default CategoryItem
