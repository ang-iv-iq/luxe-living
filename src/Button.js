import React from "react";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
const MyButton = ({ color, label, appearance }) => {
  // handleChangeComplete = (color) => {
  //   this.setState({ background: color.hex });
  // };
  return (
    <Button color={color} appearance={appearance}>
      {label}
    </Button>
  );
};
export default MyButton;
