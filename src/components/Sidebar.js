import React from 'react'
import styled from 'styled-components'
import {BiHome,BiCctv} from 'react-icons/bi'
import {PiNotebookFill} from 'react-icons/pi'
import { Icon } from '@iconify/react';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    z-index: 15;
    background-color: white;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    font-size: 25px;
    position: fixed;
    top: 80px;
    left: 0;
    height: 100vh;
    width: 400px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
`

const Li = styled.li`
    color: black;
    padding: 18px 10px;
    display: flex;
    align-items: center;
`
const Icons = styled.div`
    display: inline;
    margin-right: 20px;
    font-size: 40px;
`

const Sidebar = ({open}) => {
  return (
    <Ul open = {open}>
        <Li><Icons><BiHome/></Icons>Summary Dashboard</Li>
        <Li><Icons><Icon icon="mdi:bookshelf" /></Icons>Attendance Tracking</Li>
        <Li><Icons><BiCctv/></Icons>Behavioral Analytics</Li>
        <Li><Icons><PiNotebookFill/></Icons>Academic Performance Tracking</Li>
    </Ul>
    )
}

export default Sidebar