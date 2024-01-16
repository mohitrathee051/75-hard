import React from 'react';
import styled from 'styled-components';

// Styled components
const NavbarWrapper = styled.nav`
width: 95%;
height: 10vh;
margin-left:1vw;
margin-top:2vh;
border-radius: 50px;  
background-color: #3652AD;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  img {
    padding:2vw;
    height: 10vh; /* Adjust the height of your logo as needed */
  }
`;

const NavLinks = styled.div`
  display: flex;
  
    
  a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    font-size: 1.5vw;
    margin: 0 10px;
  }

  a:hover {
    font-weight: bold;
  }
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Logo>
                <img src="assets/Logo.png" alt="Logo" />
            </Logo>
            <NavLinks>
                <a href="#">Home</a>
                <a href="#">Tasks</a>
                <a href="#">Tracker</a>
                <a href="#">Login</a>
            </NavLinks>
        </NavbarWrapper>
    );
};

export default Navbar;
