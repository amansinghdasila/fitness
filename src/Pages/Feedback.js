import Icons from '../Component/Icons';
import { useState, useEffect } from 'react';

const Product = () => {

    

    return (
        <>

            <div className="w3-container w3-panel w3-brown w3-center">

                <p className="w3-wide"> Products Available In Rent</p>
            </div>

            <div className="w3-row-padding w3-margin-top">
                <div className="w3-quarter">
                    <div className="w3-card">
                        <img src="\Images\tent6.jpg" style={{ width: 360, height: 300 }} />
                        <div className="w3-container">
                            <h5>Rishikesh</h5>
                        </div>
                    </div>
                </div>

                <div className="w3-quarter">
                    <div className="w3-card">
                        <img src="\Images\tent7.jfif" style={{ width: 360, height: 300 }} />
                        <div className="w3-container">
                            <h5>Badrinath</h5>
                        </div>
                    </div>
                </div>

                <div className="w3-quarter">
                    <div className="w3-card">
                        <img src="\Images\tent8.jpg" style={{ width: 360, height: 300 }} />
                        <div className="w3-container">
                            <h5>Munsyari</h5>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter">
                    <div className="w3-card">
                        <img src="\Images\tent8.jpg" style={{ width: 360, height: 300 }} />
                        <div className="w3-container">
                            <h5>Munsyari</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w3-row-padding w3-margin-top">
                <div className="w3-quarter">
                    <div className="w3-card">
                        <img src="\Images\tent10.jpg" style={{ width: 360, height: 300 }} />
                        <div className="w3-container">
                            <h5>Nanital</h5>
                        </div>
                    </div>
                </div>

                <div className="w3-quarter">
                    <div className="w3-card">
                        <img src="\Images\tent7.jfif" style={{ width: 360, height: 300 }} />
                        <div className="w3-container">
                            <h5>Kedrnath</h5>
                        </div>
                    </div>
                </div>

                <div className="w3-quarter">
                    <div className="w3-card">
                        <img src="\Images\tent9.jpg" style={{ width: 360, height: 300 }} />
                        <div className="w3-container">
                            <h5>Muktheswar</h5>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter">
                    <div className="w3-card">
                        <img src="\Images\tent9.jpg" style={{ width: 360, height: 300 }} />
                        <div className="w3-container">
                            <h5>Muktheswar</h5>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <Icons />
        </>
    )
}

export default Product;