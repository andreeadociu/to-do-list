import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

const NavBar = props => {
    return (
        <div className="myNavBarContainer">
            <h2 style={style}>{props.title}</h2>
            <div style={routeStyles}>
                <Link to="/">
                  <p style={{color: 'white'}}>Home</p>
                </Link>
                <Link to="/about">
                  <p style={{color: 'white'}}>About</p>
                </Link>
                <Link to="/todo">
                  <p style={{color: 'white'}}>ToDO</p>
                </Link>
            </div>
        </div>
    )
}

const style = {
  textAlign: 'center',
};
const routeStyles= {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
};

export default NavBar
