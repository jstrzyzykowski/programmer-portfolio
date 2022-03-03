import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../redux/root.reducer';
import {hideMenu, toggleMenu} from '../../redux/menu/menu.actions';
import {MenuState} from '../../redux/menu/menu.reducer';

// @ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";

import './navbar.styles.scss';

export default function Navbar(): JSX.Element {
  const {isActive} = useSelector((state: RootState): MenuState => state.menu);
  const dispatch = useDispatch();

  const handleToggleMenu = (): void => { dispatch(toggleMenu()); }
  const handleCloseMenu = (): void => { dispatch(hideMenu());}
  const handleScrollToTop = (): void => {
    scroll.scrollToTop({ duration: 0 });
    dispatch(hideMenu());
  }

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
      <button className="navbar__brand" onClick={handleScrollToTop}>
        <i className="fas fa-code"/>
        <p className="navbar__brand-text">
          <span className="navbar__brand-text-name">Jakub</span>
          <span className="navbar__brand-text-surname">Strzyzykowski</span>
        </p>
      </button>
      <button className="navbar__burger" onClick={handleToggleMenu}>
        <div className="navbar__burger-bar"/>
        <div className="navbar__burger-bar"/>
        <div className="navbar__burger-bar"/>
      </button>
      <nav className="navbar__navigation">
        <ul className="navbar__navigation-list">
          <li className="navbar__navigation-list-item">
            <Link
              onClick={handleCloseMenu}
              activeClass="active"
              to="section-education"
              spy={true}
              smooth={false}
              offset={-120}
              duration={500}
            >
              Edukacja
            </Link>
          </li>
          <li className="navbar__navigation-list-item">
            <Link
              onClick={handleCloseMenu}
              activeClass="active"
              to="section-toolbox"
              spy={true}
              smooth={false}
              offset={80}
              duration={500}
            >
              Narzędzia
            </Link>
          </li>
          <li className="navbar__navigation-list-item">
            <Link
              onClick={handleCloseMenu}
              activeClass="active"
              to="section-projects"
              spy={true}
              smooth={false}
              offset={-60}
              duration={500}
            >
              Projekty
            </Link>
          </li>
          <li className="navbar__navigation-list-item">
            <Link
              onClick={handleCloseMenu}
              activeClass="active"
              to="section-contact"
              spy={true}
              smooth={false}
              offset={-60}
              duration={500}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}