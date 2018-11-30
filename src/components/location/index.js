import React from 'react';
import Zoom from 'react-reveal/Zoom'

import Hours from '@material-ui/icons/AccessTime';
import Marker from '@material-ui/icons/LocationOn';



const LocationInfo = () => {
    return (
        <div className='bck_black'>
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={750}> 
                        <div className="vn_item">
                            <div className="vn_outer">

                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"> </div>
                                    <div className="vn_icon">
                                        <Hours style={{ width: '100%', height: '100%' }}></Hours>
                                    </div>
                                    <div className="vn_title">Our Hours</div>
                                    <div className="vn_desc">Monday - Friday <br /> 10am thru 6pm <br /><small style={{ marginTop: 'auto' }}>we deliver late*</small></div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom duration={1000}> 
                        <div className="vn_item">
                            <div className="vn_outer">

                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"> </div>
                                    <div className="vn_icon">
                                        <Marker style={{ width: '100%', height: '100%' }}></Marker>
                                    </div>
                                    <div className="vn_title">Find Us</div>
                                    <div className="vn_desc"> 445 North Street Boise, Idaho 83701</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default LocationInfo;