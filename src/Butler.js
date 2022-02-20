import React from "react";
import Iframe from "react-iframe";
import "./Butler.css";

export default function Butler() {
  return (
    <Iframe
      url="https://my.spline.design/untitled-984231c523effd7e6ecdbb6a57447818/"
      width="100%"
      height="100px"
      className="butler"
      styles={{ margin: "0 auto" }}
    />
  );
}
