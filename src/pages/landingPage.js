//make page to add new reminders and list current reminders 
import React from 'react';
import styled from 'styled-components';

import Reminder from '../components/reminder/reminder.js'

const ReminderContainer = styled(Reminder)`
    margin-top:5vh;
`

const PageContainer = styled.div`
    width: 80%;
    margin: auto;
`

const LandingPage = styled.div`
    margin: 0;
    position: relative;
    width: 100%;
    background-color: #aaa;
    height: 100vh;
    opacity: 1;
    text-align: center;
    font-size: 5vh;
    font-weight: 100;
    color: #fff;
    margin: auto;
    background: linear-gradient(#F2709C, #F5A7A4, #F5A7A4, #99e4ee);
`


const Title = styled.h2`
    margin: auto; 
    padding-top: 25vh;
    padding-bottom: 5vh;
    font-size: 10vh;
`
const Subtitle = styled.p`
    margin:auto;
    font-size: 4vh;
`

const Done = styled.button`
    

    display: inline-block;
    margin-right: auto;
    margin-left: auto;
    padding: 1.5vh 3vh;
    font-size: 3vh;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background: #FF9472;
    border: none;
    border-radius: 2.5vh;
    transition-duration: 0.4s;
    margin:auto;
    margin-top: 5vh;

    &:hover{
    background-color: #f2709c;
    }

    &:active {
    background-color: palevioletred;
    box-shadow: 0 1vh #666;
    transform: translateY(2px);
}
`

export default class landingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <LandingPage>
                    <PageContainer>
                        <Title>WELCOME</Title>
                        <Subtitle>This app will help you keep on top of sustainable habits by reminding you and incentivizing you by taking care of a cute animal</Subtitle>
                    </PageContainer>
                </LandingPage>
                <PageContainer>
                    <center>
                        <h1>Add New Reminders</h1>
                    </center>
                    {reminders.map(rem => (
                        <ReminderContainer
                            reminder={rem.r}>
                        </ReminderContainer>
                    ))}
                    <center>
                        <Done>Done</Done>
                    </center>
                </PageContainer>

            </div>


        );
    };

};


const reminders = [{ r: "Bring a canvas bag to the grocery" }, { r: "Pick up litter" }, { r: "Read for 5 minutes about a sustainability topic" }]

