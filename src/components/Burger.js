import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar';

const BurgerContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    width: 2rem;
    height: 2.5rem;
    position: absolute;
    gap: 5px;
    z-index: 20;
    top: 25px;
    left: 30px;

    @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    }

    div {
        height: 0.5rem;
        background-color: ${({ open }) => open ? 'black' : '#ad8888'};
        transform-origin: 1px;
        transition: all 0.3s linear;
        
        &:nth-child(1) {
            width: 3rem;
        }
        &:nth-child(2) {
            width: 2.25rem;
        }
        &:nth-child(3) {
            width: 1.5rem;
        }
    }
`

const Burger = () => {
    const [open,setOpen] = useState(false);
  return (
    <>
    <BurgerContainer open = {open} onClick = {()=>{
        setOpen(!open);
    }}>
        <div/>
        <div/>
        <div/>
    </BurgerContainer>
    <Sidebar open = {open} />
    </>
  )
}

export default Burger