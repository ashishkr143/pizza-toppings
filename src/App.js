import { Component, Fragment } from 'react';
import './App.css';
import CartSection from './component/home/CartSection';
import Checkout from './component/home/Checkout';
import SelctToppinsSection from './component/home/SelctToppinsSection';
import Navbar from './component/Navbar'
import toppingsJson from './data/toppings.json'

class App extends Component{

      state = {
          toppings: toppingsJson,
          cart: [],
          checkout: false,
          }

      // delete item from exicting in cart idf quantity is one
      deleteCart = (id)=>{
        let cart = this.state.cart;
        cart = cart.filter(item=>item.id!==id)
        this.setState({cart})
      }
      
      // add iten for the first time with quantity one
      addCart = (id)=>{
        let cart = this.state.cart;
        let topping = this.state.toppings.filter(item=>item.id === id)[0];
        cart.push({
          id: topping.id,
          name: topping.name,
          price: topping.price,
          image: topping.image,
          quantity :1,
        })
        this.setState(cart);
        console.log('done')
      }

      // update item in the exicting cart
      updateCart = (id,index)=>{

            let cart = this.state.cart;
            cart = cart.map(item=>{
              if(item.id !== id)
                return item
              else{
                  item.quantity = item.quantity + index;
                  return item
              }
            })
            this.setState({cart})
  
      }

      clearCart = ()=>{
        let cart = [];
        this.setState({cart});
      }

      checkout = ()=>{
        this.setState({checkout:true})
      }
      closeCheckOut= ()=>{
        this.setState({checkout:false})
      }


  render(){

    const {toppings,cart,checkout} = this.state;

    return (
      <Fragment>
        <Navbar></Navbar>
        <h2  className="text-center mt-5 pt-5">Pizza Builder</h2>
        <p className="lead text-center mt-2">Here you can build your pizza using the builder with the ingredients provided.</p>
        <div className="container bg-white p-5 mt-5">
          <div className="row m-0 p-0">
              <CartSection cart={cart}></CartSection>
              <SelctToppinsSection checkout={this.checkout} clearCart={this.clearCart} addCart={this.addCart} deleteCart={this.deleteCart} updateCart={this.updateCart} toppings={toppings} cart={cart}></SelctToppinsSection>
          </div>
        </div>
        {checkout && <Checkout closeCheckOut={this.closeCheckOut} cart={cart}></Checkout>}
      </Fragment>
    );
  }
  
}

export default App;
