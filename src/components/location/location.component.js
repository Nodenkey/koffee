import React from 'react';
import {LocationWrapper} from "./location.style";
import {HeaderTwo} from "../../utils/elements";

const Location = () => {
    return (
        <LocationWrapper id='location'>
            <HeaderTwo style={{textAlign: 'center', marginBottom: '50px'}}>Where you can find us</HeaderTwo>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="100%" height="500" id="gmap_canvas"
                            src="https://maps.google.com/maps?ll=5.603716800000001,-0.1869644&q=Accra&t=&z=12&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="Location to koffee shop">
                    </iframe>
                </div>
            </div>
        </LocationWrapper>
    );
};

export default Location;

