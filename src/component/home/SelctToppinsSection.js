import React from 'react'
import Topping from '../toppings/Toppings';

function SelctToppinsSection({toppings,cart,updateCart,deleteCart,addCart,clearCart,checkout} ) {
    let total = 3;
    cart.forEach(item => {
        total+=item.price*item.quantity;
    });
    return (
        <div className="col-md-4">
            <h5>Select toppings</h5>
            <hr className="mt-0"></hr>
            <div className="d-flex justify-content-between align-items-center">
            <span className="badge badge-secondary"><h4 className="m-0">{total}<small><small>$</small></small></h4></span>
            <button onClick={clearCart} className="btn btn-warning">Reset</button>
            </div>
            <div className="list-group mt-2">
                <div className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <h6 className="m-0">Base Pizza</h6>
                    <span className="text-muted"><small>3$</small></span>
                </div>
            </div>
            {toppings.map(topping=> 
                <Topping addCart={addCart} deleteCart={deleteCart} updateCart={updateCart} key={topping.id} cart={cart} topping={topping}></Topping>
                )}
            <div className="list-group-item bg-light d-flex justify-content-between"><span>Total</span><span>${total}</span></div>
            <div className="list-group-item">
                <button className="btn btn-primary" onClick={checkout}>Checkout</button>
            </div>
            </div>
        </div>
    )
}
export default  SelctToppinsSection
