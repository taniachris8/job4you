import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");



    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="הקלד כדי לסנן ..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children)
            .filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )
            .map((child) =>
              React.cloneElement(child, {
              })
            )}
        </ul>
      </div>
    );
  }
);

export default CustomMenu;
