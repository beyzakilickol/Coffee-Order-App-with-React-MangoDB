import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class Admin extends Component {
  constructor(props){
    super(props)
    this.state={
      orders: []
    }
  }
  deleteOrder = (each) =>{
    axios.delete('http://localhost:3002/delete/'+ each).then((response)=>{
      let orderarr = this.state.orders
      let newOrderArr = orderarr.filter(function(order){
        return each !== order._id
      })
      this.setState({
        ...this.state,
        orders:newOrderArr
      })

    })
  }
  componentDidMount = () =>{
    axios.get('http://localhost:3002/get-orders').then((response)=>{
      console.log(response.data)
      this.setState({
        ...this.state,
        orders : response.data
      })
    })
  }
  render() {
    let orderItem = this.state.orders.map((each,index)=>{
      return <tr>
                <th scope="row">{index+1}<button onClick={()=>this.deleteOrder(each._id)}>Delete</button></th>
                <td>{each.email}</td>
                <td>{each.coffeetype}</td>
                <td>{each.size}</td>
                <td>{each.flavor}</td>
                <td>{each.strength}</td>
              </tr>
    })
    return (
      <div>
      <h1>Managing orders</h1>
<table class="table table-striped text-white">
<thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">Email <input id="filter-emails" type="text"/><button id="search-button">Search</button></th>
  <th scope="col">Coffee Type</th>
  <th scope="col">Size</th>
  <th scope="col">Flavor</th>
  <th scope="col">Strength</th>
</tr>
</thead>
<tbody id="order-container">
{orderItem}
</tbody>
</table>
<a href="/add-order"><button className="btn btn-warning">Add Order</button></a>
      </div>
    );
  }
}

export default Admin;
