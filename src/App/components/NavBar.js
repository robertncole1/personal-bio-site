import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  NavbarBrand
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
            <NavItem>
              <Link className="nav-link" to="/">Projects</Link>
            </NavItem>
    </>
  );

  return (
    <div>
      <Navbar className="sticky-nav" color="light" light expand="md">
      <img className= "navbar-logo" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://robcolecreative.com/wp-content/uploads/2020/01/Artboard-36-e1578094220699.png"/>
      <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          { admin && authenticated()}
            {
              admin !== null
              && <NavItem>
                {
                  admin
                    ? <Button color='danger' onClick={signOutUser}>Log Out</Button>
                    : <Button color='info' onClick={signInUser}>Sign In</Button>
                }
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
