import React from 'react';
import Icon from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
       

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Species
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/species/Alien" style={{ textDecoration: 'none' }}>
                  Alien
                </Link></li>
                <li><Link className="dropdown-item" to="/species/Animal" style={{ textDecoration: 'none' }}>
                  Animal
                </Link></li>
                <li><Link className="dropdown-item" to="/species/Cronenberg" style={{ textDecoration: 'none' }}>
                  Cronenberg
                </Link></li>
                <li><Link className="dropdown-item" to="/species/Disease" style={{ textDecoration: 'none' }}>
                  Disease
                </Link></li>
                <li><Link className="dropdown-item" to="/species/Human" style={{ textDecoration: 'none' }}>
                  Human
                </Link></li>

                <li><Link className="dropdown-item" to="/species/Humanoid" style={{ textDecoration: 'none' }}>
                  Humanoid
                </Link></li>
                <li><Link className="dropdown-item" to="/species/Mythological Creature" style={{ textDecoration: 'none' }}>
                  Mythological Creature
                </Link></li>

                <li><Link className="dropdown-item" to="/species/Poopybutthole" style={{ textDecoration: 'none' }}>
                  Poopybutthole
                </Link></li>


                <li><Link className="dropdown-item" to="/species/Robot" style={{ textDecoration: 'none' }}>
                  Robot
                </Link></li>
                <li><Link className="dropdown-item" to="/species/unknown" style={{ textDecoration: 'none' }}>
                  Unknown
                </Link></li>



              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"><Icon /></a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default NavBar