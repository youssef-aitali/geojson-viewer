import React from 'react';
import './topnavbar.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => (
  <div className="mynavbar">
      <nav className="nav d-flex justify-content-between">
      <a className="nav-link active" href="#">
        <strong>Geoportal</strong>
      </a>
      <ul className="nav">

        <li className="nav-item">
          <a className="nav-link" href="#">
            <FontAwesomeIcon icon={faLayerGroup} />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>

      </ul>
    </nav>
  </div>
);

export default TopNavbar;
