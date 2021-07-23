import React from 'react';
import Nav from './Nav';
import Home from './Home'
import styled from 'styled-components';
const Img = styled.img`{
    width:80%;
    height:10%;
    margin:7%;   
   }
   `

const Header = () => {
    return (
        <>
        <h1>Welcome Home! Of Lambda Eat</h1>
        
        
        <Nav/>
        <Img src ="https://www.pizzaguys.com/v/assets/images/page-headers/6@2x.jpg" />
        </>

        
   
        
        
    )
}

export default Header; 