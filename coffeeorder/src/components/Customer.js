import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'

class Customer extends Component {
  constructor(props){
    super(props)
    this.state={
      email: '',
      coffeetype: '',
      flavor: '',
      size: '',
      strength: 0
    }
  }
  sendCoffeeInfo = ()=>{
    axios.post('http://localhost:3002/add-order',{
      email: this.state.email,
      coffeetype: this.state.coffeetype,
      flavor: this.state.flavor,
      size: this.state.size,
      strength: this.state.strength
    }).then((response)=>{
      this.props.history.push('/')
      console.log(response.data)
    })
  }
  getEmail = (e) => {
    this.setState({
      ...this.state,
      email: e.target.value
    })
  }
  getCoffeeSize = (e)=>{
    this.setState({
      ...this.state,
      size: e.target.value
    })
  }
  getCoffeeType = (e) => {
    this.setState({
      ...this.state,
      coffeetype: e.target.value
    })
  }
  getCoffeeFlavor = (e) =>{
    this.setState({
      ...this.state,
      flavor: e.target.value
    })
  }
  getCoffeeStrength = (e) => {
    this.setState({
      ...this.state,
      strength: e.target.value
    })
  }
  render() {
    return (
      <div class="order">
    <h1>Make an order</h1>
    <label>Email: <input onChange={this.getEmail} id="emailTextBox" type="email" placeholder="Enter your email"/></label>
    <label id="coffee-types"> Choose coffee:
    <select onChange={this.getCoffeeType} id="coffeeTypes" class="dropdown">
         <option selected disabled value>Select an option </option>
         <option value="Latte"> Cafe Latte</option>
         <option value="Expresso"> Expresso</option>
         <option value="Regular"> Regular</option>
         <option value="Regular with milk"> Regular with milk</option>
         <option value="Cappuccino"> Cappuccino</option>
         <option value="Macchiato"> Macchiato</option>
         <option value="Mochaccino"> Mochaccino</option>

       </select></label>
       <label id="flavor-types"> Choose flavor you would like to add to your coffee:
       <select onChange={this.getCoffeeFlavor} id ="flavorTypes" class="dropdown">
            <option selected disabled value>Select an option </option>
            <option value="Caramel"> Caramel</option>
            <option value="Cinnoman"> Cinnoman</option>
            <option value="Vanilla"> Vanilla</option>
            <option value="Chocolate"> Chocolate</option>
            <option value="Banana"> Banana</option>
            <option value="Blueberry"> Blueberry</option>
            <option value="No flavor">No flavor</option>

          </select></label>
          <label id="size"> Choose the size of the coffee:
          <select onChange={this.getCoffeeSize} id="coffeeSize" class="dropdown">
               <option selected disabled value>Select an option </option>
               <option value="Extra Large"> Extra Large</option>
               <option value="Large"> Large</option>
               <option value="Medium"> Medium</option>
               <option value="Small"> Small</option>

             </select></label>
             <label id="strength-levels"> Choose the strength level of the coffee:
             <select onChange={this.getCoffeeStrength} id="coffeeStrength" class="dropdown">
                  <option selected disabled value>Select an option </option>
                  <option value='80'> 80</option>
                  <option value='74'>74</option>
                  <option value='9'> 9</option>
                  <option value='60'> 60</option>
                  <option value='79'> 79</option>

                </select></label>
                <button onClick={this.sendCoffeeInfo} id="submit">Submit</button>
                <a href="/"><button className="back">Back</button></a>
  </div>
    );
  }
}

export default Customer;
