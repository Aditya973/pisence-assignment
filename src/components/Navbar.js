import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
    width: 100vw;
    height: 80px;
    background-color: #606c5d;
    display: flex;
    position: relative;
`

const Navbar = () => {
  return (
    <Nav>
        <Burger/>
    </Nav>
  )
}

export default Navbar