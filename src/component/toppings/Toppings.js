import React from 'react'

function Topping({topping,cart,updateCart,deleteCart,addCart}) {
    let item = cart.filter(item => item.id === topping.id)
    let quantity = item[0] ? item[0].quantity : false;

    function onClickInc(e,index){
            if(!quantity)
                addCart(topping.id)
            else
                updateCart(topping.id,1);
    }

    function onClickDsc(){
        if(quantity === 1){
            deleteCart(topping.id)
        }else
            updateCart(topping.id,-1);
    }

    return (
        <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h6 className="m-0">{topping.name}</h6>
                <span className="text-muted"><small>{topping.price}$</small></span>
            </div>
            <div>
                <button onClick={onClickDsc} data-dsc className="btn btn-danger btn-sm m-0" disabled={(quantity==0)? true : false } style={{borderRadius:'50%'}}><i className="fa fa-minus"></i></button>
                <button className="btn  btn-sm" style={{borderRadius:0,cursor:'initial'}}>{quantity ? quantity : 0}</button>
                <button onClick={onClickInc} data-inc className="btn btn-success btn-sm" style={{borderRadius:'50%'}}><i className="fa fa-plus"></i></button>
            </div>
        </div>
    )
}

export default Topping;

