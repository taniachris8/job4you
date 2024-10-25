// Tooltip.js
import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CustomTooltip({ message, placement = 'bottom', children }) {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Tooltip id={`tooltip-${placement}`}>{message}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}

export default CustomTooltip;
