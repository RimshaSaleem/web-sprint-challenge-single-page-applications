import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <>
        <Link to="/" className="nav">Home</Link>
        <Link id="order-pizza" to="/pizza" className="nav">Order Pizza</Link>
        </>
    )
}


export default Nav;