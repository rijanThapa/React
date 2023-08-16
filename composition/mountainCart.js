import React from 'react';
import { datas } from './dummy';
import Mountain from './mountain';
import './mountainCart.css'
function MountainCart() {
    return (
        <div className="moutiancpntainer">
            {datas.map((data) => (
                <div>
                    <Mountain>
                        <div className="cart">
                            <img src={data.imgsrc} />
                            <div className='textmovement'>
                                <p>Name: {data.name}</p>
                                <h5>Height: {data.height}</h5>
                            </div>
                            <h5>Location: {data.location}</h5>
                        </div>

                    </Mountain>
                </div>

            ))}
        </div>
    )
}
export default MountainCart;