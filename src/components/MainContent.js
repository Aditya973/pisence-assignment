import React from 'react'
import styled from 'styled-components'
import Day from './Day'
import Piechart from './Piechart'
import data from '../data.json';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 40px 40px;
    background-color: #f8f1f1;
`

const Greeting = styled.h1`
    font-size: 25px;
    padding: 10px 5px;
    font-weight: 500;
    `

const Title= styled.h1`
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-align: center;
`
const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin: 0px 5px;
`

const AttendenceContainer = styled.div`
    width : 100%;
    height: 250px;
    display: flex;
    justify-content: space-around;
    position: relative;
    background-color: #d9d9d9;
    `
const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 80px;
    height: 250px;
    `

const HomeworkContainer = styled.div`
    flex: 4;
    background-color: #d9d9d9;
    height: 100%;
    `

const BehaviourContainer = styled.div`
    flex: 5;
    background-color: #d9d9d9;
    height: 100%;
    position: relative;
    h1 {
        font-size: 25px;
        font-weight: 500;
        letter-spacing: 1px;
        text-align: center;
        padding: 20px 0px;
    }
`
const AnFnContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 20px;
    top: 20px;
    justify-content: center;
    height: 100%;
    /* padding: 10px 0px; */
    span {
        font-size: 25px;
        padding: 35px 0px;
    }
`
const HWTitle = styled.h1`
    padding: 20px 0px;
    font-size: 25px;
    text-align: center;
    letter-spacing: 1px;
`
const SubjectContainer = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: space-between;
    height: 75%;
    div {
        display: flex;
        justify-content: space-between;
    }
    `
const Subject = styled.h1`
    font-size: 25px;
    padding: 0px 40px;
`

const ChartLabel = styled.div`
    position: absolute;
    bottom: 0;
    right: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 70px;
`
const LabelContainer = styled.div`
    display: flex;
    padding: 10px 0;
    span {
        font-size: 18px;
        margin-left: 10px;
        font-weight: 550;
    }
`
const Color = styled.div`
    height: 20px;
    width: 22px;
    background-color: ${props=> props.bgcolor};
`
const MainContent = () => {
    // console.log(data);
    const attendanceData = data.ATTENDANCE;
    const days = Object.entries(attendanceData);
    const homeworkData = data.homework;
    const behaviorData = data['Behavioral Analytics']
    console.log(behaviorData);
  return (
    <Container>
        <Greeting>HELLO! {data.NAME}</Greeting>
        <Title>ATTENDENCE</Title>
        <OuterContainer>
            <AttendenceContainer>
                <AnFnContainer>
                    <span>FN</span>
                    <span>AN</span>
                </AnFnContainer>
                {
                    days.map((item)=>{
                        return <Day name = {item[0]} data = {item[1]}/>
                    })
                }
            </AttendenceContainer>
            <InnerContainer>
                <HomeworkContainer>
                    <HWTitle>Homeworks</HWTitle>
                    <SubjectContainer>
                        {
                            homeworkData.map((item)=>{
                                return <Subject>{item.toUpperCase()}</Subject>
                            })
                        }
                    </SubjectContainer>

                </HomeworkContainer>
                <BehaviourContainer>
                    <h1>Behavioral Analytics</h1>
                    <Piechart data = {behaviorData}/>
                    <ChartLabel>
                        <LabelContainer>
                            <Color bgcolor = "#17a525"/><span>GOOD</span>
                        </LabelContainer>
                        <LabelContainer>
                            <Color bgcolor = "#da2121"/><span>BAD</span>
                        </LabelContainer>
                    </ChartLabel>
                </BehaviourContainer>
            </InnerContainer>
        </OuterContainer>
        
    </Container>
  )
}

export default MainContent