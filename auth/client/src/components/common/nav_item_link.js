import React from 'react'
import {Link} from 'react-router';

const NavItemLink = (props) => {
  return(
    <li role="presentation">
      <Link role="presentation" to={props.path}>{props.txt}</Link>
    </li>
  );
}

export default NavItemLink;
