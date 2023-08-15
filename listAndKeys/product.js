import React from 'react'
import './product.css'
function Product(props) {
    return(
        <div className="box">
            <img src={props.img}/>
            <div className="desc"> {props.desc}<br />
                </div>
                <div className="date">
                    <p class="price">{props.price}</p>
                    <p>{props.exprie}</p>
                </div>
        </div>
    )
}
export default Product;