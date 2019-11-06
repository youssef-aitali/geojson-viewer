import React from 'react';
import './topnavbar.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGlobe,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => (
  <nav className="nav d-flex justify-content-between">
    <a className="nav-link active" href="#">
      Geoportal
    </a>
    <form>
      <input
        type="search"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </form>
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faLayerGroup} />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <FontAwesomeIcon icon={faUser} />
        </a>
      </li>
    </ul>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default TopNavbar;
