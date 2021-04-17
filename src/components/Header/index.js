// @flow

import React, { memo, useState } from 'react';
import { bindActionCreators } from 'redux';
import IMAGES from 'themes/images';
import { connect } from 'react-redux';
import { API } from '../../utils/Apis';
import { Creators } from '../../screens/account/redux';
// import { toDoBackKey, toDoAudioStop } from '../../utils/Helpers';

type Props = {
  logOut: Function,
};
const Header = ({ logOut }: Props) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  const handleLogOut = () => {
    logOut();
    API.setHeader('Authorization', '');
  };

  const handShowNav = () => {
    setIsShowNav(!isShowNav);
    if (document.body) {
      if (!isShowNav) {
        document.body.className = 'sidebar-icon-only';
      } else {
        document.body.className = '';
      }
    }
  };
  return (
    <div className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <div className="navbar-brand brand-logo mr-5">
          <img src={IMAGES.logo} className="mr-2" alt="logo" />
        </div>
        <div className="navbar-brand brand-logo-mini">
          <img src={IMAGES.logoMini} alt="logo" />
        </div>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <div
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
          onClick={() => {
            handShowNav();
          }}
          onKeyUp={() => {}}
          tabIndex={0}
          role="button"
        >
          <span className="ti-view-list" />
        </div>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                  <i className="ti-search" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="navbar-search-input"
                placeholder="Search now"
                aria-label="search"
                aria-describedby="search"
              />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown mr-1">
            <div
              className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
              id="messageDropdown"
              data-toggle="dropdown"
            >
              <i className="ti-email mx-0" />
            </div>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
              <div className="dropdown-item">
                <div className="item-thumbnail">
                  <img src={IMAGES.face4} alt="" />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">David Grey</h6>
                  <p className="font-weight-light small-text text-muted mb-0">The meeting is cancelled</p>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="item-thumbnail">
                  <img src={IMAGES.face2} alt="" />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                  <p className="font-weight-light small-text text-muted mb-0">New product launch</p>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="item-thumbnail">
                  <img src={IMAGES.face3} alt="" />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                  <p className="font-weight-light small-text text-muted mb-0">Upcoming board meeting</p>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i className="ti-bell mx-0" />
              <span className="count" />
            </div>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <span className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-success">
                    <i className="ti-info-alt mx-0" />
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Application Error</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">Just now</p>
                </div>
              </span>
              <span className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-warning">
                    <i className="ti-settings mx-0" />
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">Private message</p>
                </div>
              </span>
              <span className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-info">
                    <i className="ti-user mx-0" />
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">New user registration</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">2 days ago</p>
                </div>
              </span>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <span
              className="nav-link dropdown-toggle"
              href="#"
              data-toggle="dropdown"
              id="profileDropdown"
              onClick={() => {
                handleShowMenu();
              }}
              onKeyDown={() => {}}
              tabIndex={0}
              role="button"
            >
              <img src={IMAGES.faceImg} alt="profile" />
            </span>
            <div
              className={`${isShowMenu ? 'show' : ''} dropdown-menu dropdown-menu-right navbar-dropdown`}
              aria-labelledby="profileDropdown"
            >
              <span className="dropdown-item">
                <i className="ti-settings text-primary" />
                Settings
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  handleLogOut();
                }}
                onKeyDown={() => {}}
                tabIndex={0}
                role="button"
              >
                <i className="ti-power-off text-primary" />
                Logout
              </span>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="ti-view-list" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    type: state.accountReducer.type,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...Creators,
      logOut: Creators.logOut,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(memo<Props>(Header));
