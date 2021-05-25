import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
import { signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
            <NavItem>
              <Link className="nav-link" to="/add-project">Add Project</Link>
            </NavItem>
    </>
  );

  return (
    <div>
      <Navbar className="sticky-nav" light expand="md">
      <NavbarBrand href="/">
        <img className="navbar-logo" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://robcolecreative.com/wp-content/uploads/2020/01/Artboard-36-e1578094220699.png"/>
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          { admin && authenticated()}
            <NavItem>
              <Link className="nav-link" to="/#projects-section">Projects</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/#technologiesPage">Technologies</Link>
            </NavItem>
            {
              admin !== null
              && <NavItem>
                {
                  admin
                    ? <Button color='danger' onClick={signOutUser}>Log Out</Button>
                    : ''
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
