import React from 'react';
import './Tooltip.css';

function Tooltip(props) {
  return (
    <span className="Tooltip">
      <span className="Tooltip-content">
        {props.children}
      </span>
      <div className="Tooltip-message">
        {props.children}
      </div>
    </span>
  );
}

export default Tooltip;