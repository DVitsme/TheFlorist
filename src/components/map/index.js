import React from 'react';

const Map = () => {
  return (
    <div className="location_wrapper">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12403.878811404751!2d-77.0378709636705!3d38.99318782289387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c8bf46f8b955%3A0x6cb1e791d072a5f4!2sBlair+Park+Shopping+Center!5e0!3m2!1sen!2sus!4v1543489283767" 
        width="100%"
        height="500px" 
        frameBorder="0" 
        allowFullScreen />
        <div className="location_tag">
          Location
        </div>

    </div>
  );
};

export default Map;