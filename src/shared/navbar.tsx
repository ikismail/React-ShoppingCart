import React, { useState } from "react";
import {
  Collapse,
  Navbar as ReactNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <ReactNavbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/'>
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink className='active' tag={Link} to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/products'>
                All Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/about'>
                About
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink tag={Link} to='/auth'>
            Login
          </NavLink>
        </Collapse>
      </ReactNavbar>
    </div>
  );
};

export default Navbar;
