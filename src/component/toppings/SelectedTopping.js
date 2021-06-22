import React from 'react'
import pepperoni from '../toppingsImages/pepperoni.jpg'
import feta from '../toppingsImages/feta.jpg'
import coldCuts from '../toppingsImages/cold-cuts.jpg'
import mozzarella from '../toppingsImages/mozzarella.jpg'
import spices from '../toppingsImages/spices.jpg'
import swizzCheese from '../toppingsImages/swizz-cheese.jpg'

function Topping({item}) {
    //select image from import usinf cart item id
    const image = (item.id === 1) ? pepperoni : 
    (item.id === 2) ? feta  : 
    (item.id === 3) ? spices :
    (item.id === 4) ? swizzCheese :
    (item.id === 5)? coldCuts:
    (item.id === 6)? mozzarella: 
    false;

    return (
        <div className="col-md-4 p-2">

            <div className="slected-toppings"  style={{backgroundImage: `url('${image}')`}}> 
                    <div className="mt-2 ml-2">
                    <span className="badge badge-primary"><h6 className="m-0">{item.quantity}</h6></span>
                </div>
            </div>
        
       
           
        </div>
    )
}

export default Topping;

