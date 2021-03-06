import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, stage, city, address} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={stage}  alt={city} />
            <div className="details">
               {/* <span className="index">{index+1}</span>*/}
                <p className="location">
                    {stage}<br />
                    {city}<br />
                    {address}
                </p>
               {/* <ul className="features">
                    
    </ul>*/}
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
