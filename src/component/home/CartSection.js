import React from 'react'
import SelectedTopping from '../toppings/SelectedTopping'
import Pizza from '../toppingsImages/pizza.jpg'

function CartSection({cart}) {
    return (
        <div className="col-md-8">
        <h5>Your Items</h5>
        <hr className="mt-0"></hr>
        <div className="row m-0 mt-2 p-0">
            <div className="col-md-4 p-2">

                <div className="slected-toppings"  style={{backgroundImage: `url('${Pizza}')`}}> 
                </div>
            </div>

            {cart.map(item=><SelectedTopping key={item.id} item={item}></SelectedTopping>)}
        </div>
        </div>
    )
}

export default CartSection;
