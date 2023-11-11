import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    /* padding-left: 5px; */
    height: 100%;
`
const DayTitle = styled.h1`
    font-size: 25px;
    font-weight: 550;
    text-align: center;
    `
const Date = styled.h1`
    font-size: 15px;
    font-weight: 500;
    padding-top: 5px;
    text-align: center;
`
const BlockContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    flex-direction: column;
    /* padding: 20px 10px; */
    padding-bottom: 20px;
    height: 100%;
`
const Block = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${props => (props.status === "absent")?("#9f0000"):("#09a218")};
`

const Day = ({name, data}) => {
    const str1 = name.charAt(0).toUpperCase();
    const str2 = name.substring(1);
    const title = str1 + str2;
  return (
    <Container>
        <DayTitle>{title}</DayTitle>
        <Date>{data.date}</Date>
        <BlockContainer>
            <Block status = {data.fn}/>
            <Block status = {data.an}/>
        </BlockContainer>
    </Container>

    )
}

export default Day