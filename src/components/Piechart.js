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
    }
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
    </Container>
    )
}

export default Piechart