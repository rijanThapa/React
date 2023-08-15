import React from 'react';
import './card.css'
function Cart(props) {
    return (
        
            <div className="boxes">
                <div className="move">
                    <div className="image">
                        <img src={props.image} />
                    </div>
                    <button className="button">{props.button}</button>
                </div>
                <div>
                    <p className="local">{props.local}</p>
                    <h1 className='google'>{props.google}</h1>
                </div>
                <div className="slide">
                    <div>
                        <h6>{props.rating}</h6>
                        <h4>{props.datarating}</h4>
                    </div>
                    <div>
                        <h6>{props.size}</h6>
                        <h4>{props.sizerate}</h4>

                    </div>
                    <div>
                        <h6>{props.download}</h6>
                        <h4>{props.downloaddata}</h4>
                    </div>
                </div>
                <img className='icon' src='img/download.jpg'></img>
            </div>
    
    );
}

export default Cart;
