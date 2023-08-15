import React from 'react';
import './cart.css';

function Design(props) {
    return (
        <div className="box">
            <div className="move">
                <div className="image">
                    <img src={props.imgsrc} />
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
export default Design;