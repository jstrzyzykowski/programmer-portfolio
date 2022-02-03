import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../redux/root.reducer';
import {toggleMenu} from '../../redux/menu/menu.actions';

import {MenuState} from '../../redux/menu/menu.reducer';

import './navbar.styles.scss';

export default function Navbar(): JSX.Element {
  const {isActive} = useSelector((state: RootState): MenuState => state.menu);
  const dispatch = useDispatch();

  const handleToggleMenu = (): void => {
    dispatch(toggleMenu());
  }

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="navbar__brand">
        <p>Example Brand</p>
      </div>
      <button className="navbar__burger" onClick={handleToggleMenu}>
        <div className="navbar__burger-bar"/>
        <div className="navbar__burger-bar"/>
        <div className="navbar__burger-bar"/>
      </button>
      <nav className="navbar__navigation">
        <ul className="navbar__navigation-list">
          <li className="navbar__navigation-list-item">
            <a href="#">About</a>
          </li>
          <li className="navbar__navigation-list-item">
            <a href="#">Toolbox</a>
          </li>
          <li className="navbar__navigation-list-item">
            <a href="#">Works</a>
          </li>
          <li className="navbar__navigation-list-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}