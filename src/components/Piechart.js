import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background: radial-gradient(circle closest-side, transparent 100%, #d9d9d9 0),
    conic-gradient(
        from 90deg,
        #17a525 0,
        #17a525 ${props=>props.goodpercent}%,
        #da2121 0,
        #da2121 100%
    ); 
    min-width: 150px;
    min-height: 150px;
    align-items: center;
    justify-content: center;
    div {
        border-radius: 50%;
        height: 7px;
        width: 7px;
        background-color: white;
        border: 1px solid black;
        z-index: 10;
    }
    `
const Line = styled.section`
    width: 20px;
    z-index: 4;
    height: 1px;
    background-color: black;
    position: absolute;
    transform: translateX(${props=>props.x}px) translateY(${props=>props.y}px) rotate(-${props=>props.percent}deg);
`
const Text = styled.span`
    position: absolute;
    transform: translateX(${props=>props.x}px) translateY(${props=>props.y}px);
    font-size: 12px;
    color: green;
`
const Piechart = ({data}) => { 
    let goodct = 0;
    data.forEach((item)=>{
        if(item === "good"){
            goodct++;
        }
    })
    const goodpercent = (goodct/data.length)*100;
  return (
    <Container goodpercent = {goodpercent}>
        <div/>
        <Line percent = {goodpercent} x = {50} y = {-70}/>
        <Text x = {60} y = {-70}>{goodct}</Text>
        <Line percent = {goodpercent} x = {-50} y = {70}/>
        <Text x = {-60} y = {70}>{data.length - goodct}</Text>
    </Container>
    )
}

export default Piechart