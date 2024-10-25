import React from 'react';
import "./Button.css"

const Button = ({ variant, children, ...props }) => {
    const className = `button ${variant}`;
    
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  };

export default Button
