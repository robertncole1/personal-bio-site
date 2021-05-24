import React from 'react';
import { Button } from 'reactstrap';
import { signInUser } from '../../helpers/auth';

export default function Footer() {
  return (
    <>
      <footer className="page-footer">
        <img className= "navbar-logo" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://robcolecreative.com/wp-content/uploads/2020/01/Artboard-36-e1578094220699.png"/>
        <br></br>
        <Button color="link" href="https://www.instagram.com/robcolecreative/">Instagram</Button>
        <Button color="link" href="https://www.linkedin.com/in/robertncole/">LinkedIn</Button>
        <Button color="link" onClick={signInUser}>Admin</Button>
    </footer>
  </>
  );
}
