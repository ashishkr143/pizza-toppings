import React from 'react'

const Checkout = ({cart,closeCheckOut}) => {
    function onClick(){
        alert('check Out')
    }
    return (
        <div className="checkout">
            <div className="items">
                <h5>Your order</h5>
                <hr className="mt-3 mb-2"></hr>
                <small className="mb-2 d-block">Your pizza incldes following toppings</small>
                {cart.length == 0 ? <p className="alert alert-info">No toppings choosen.</p> : cart.map(item=><li className="mb-2">{item.name} <small className="text-muted">x {item.quantity}</small></li>)}
            <button className="btn btn-warning mt-2" onClick={closeCheckOut}>Close</button>
            <button className="btn btn-primary ml-2 mt-2" onClick={onClick}>Continue</button>
            </div>
        </div>
    )
}

export default Checkout;
