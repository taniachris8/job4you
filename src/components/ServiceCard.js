import React from 'react';
import "./components-css/ServiceCard.css";

function ServiceCard(props) {
  return (
   <div className='service-card-cntr'>
    <div className='service-card-img-cntr'><img alt='Service-card' src={props.image} className='service-card-img'/></div>
    <div className='service-card-info'>
    <h className="service-card-title">{props.title}</h>
    <p className='service-card-description'>{props.description}</p>
    </div>
   </div>
  )
}

export default ServiceCard
