import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';

const index = () => {
    return (
        <div style={{position:'relative'}}>
            
            <Carrousel />

            <div className="artist_name">
                <div className="wrapper">
                    <p style={{ margin: 0 }}>Locally Sourced</p>
                </div>
            </div>

            <Countdown />
        </div>
    );
};

export default index;