import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className='container-fluid footer text-left mt-3'>
      <p className='mr-auto'>
        Developed by:
        <strong>Mohammed Ismail</strong>
      </p>
      <div style={{ float: "right" }}>
        <Link to='mailto:ikismail7@gmail.com' style={{ marginRight: "10px" }}>
          <i
            className='fa fa-envelope-open'
            aria-hidden='true'
            style={{ fontSize: "20px" }}></i>
        </Link>
        <Link
          to='https://github.com/ikismail'
          target='_blank'
          style={{ marginRight: "10px" }}>
          <i
            className='fa fa-github'
            aria-hidden='true'
            style={{ fontSize: "20px" }}></i>
        </Link>
        <Link
          to='https://www.linkedin.com/in/ikismail7/'
          target='_blank'
          style={{ marginRight: "10px" }}>
          <i
            className='fa fa-linkedin'
            aria-hidden='true'
            style={{ fontSize: "20px" }}></i>
        </Link>
      </div>
    </footer>
  );
}
