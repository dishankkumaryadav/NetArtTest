import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
        <img src="/asserts/logo.png" alt="Company's Logo" />
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: center;
    img{
        height: 100px;
    }
`;