import React from 'react';
import './topnavbar.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGlobe,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

const TopNavbar = ({ showSidebar }) => (
  <nav className="nav d-flex justify-content-between">
    <a className="nav-link active" href="#">
      Geoportal
    </a>
    <form className="w-25">
      <input
        type="search"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Search adresses, parcels, layers ..."
      />
    </form>
    <ul className="nav">
      <li className="nav-item" onClick={showSidebar}>
        <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faLayerGroup} />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faGlobe} />
        </a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" href="#">
            FR
          </a>
          <a class="dropdown-item" href="#">
            EN
          </a>
        </div>
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
              My account
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
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default TopNavbar;
