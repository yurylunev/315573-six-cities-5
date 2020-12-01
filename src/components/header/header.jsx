import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getUserInfo, isAuthorizedUser} from "../../store/selectors";
import {Link} from "react-router-dom";

const Header = ({isAuth, userInfo}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to={`/`} className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81"
              height="41"/>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link to={`/favorites`} className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span
                  className="header__user-name user__name">{isAuth ? userInfo.userName : `Sign in`}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  userInfo: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.shape({
      userName: PropTypes.string.isRequired
    }).isRequired
  ]),
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  isAuth: isAuthorizedUser(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
