import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Airline = (props) => {
  return (
    <div className="card">
      <div className="airlLine-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </div>
      <div className="airlLine-name">{props.attributes.name}</div>
      <div className="airlLine-score">{props.attributes.avg_score}</div>
      <div className="airlLine-link">
        <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
      </div>
    </div>
  )
};

export default Airline