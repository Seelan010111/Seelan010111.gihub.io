import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .card-header {
        background-color: #222;
    }
    .card-footer {
        background-color: #222;
    }
    .container {
        margin-left: auto;
        margin-right: auto;
    }
`;
export const CareerCard = () =>  (
<Styles>
    <Container>
        <Card className="text-center">
            <Card.Header><font  size="5" color="white">Current Adventure</font></Card.Header>
                <Card.Img variant="top" src="/assets/@Work.jpg" />
                <Card.Body>
                    <Card.Title>Graduate Mobile Engineer @ Prodigy Finance</Card.Title>
                    <Card.Text>
                        <font  size="5" color="black">
                            Probably the best place to start your career. I came here as a graduate straight out of university.
                            After an intense bootcamp of learning the tech stack at Prodigy which comprises of Ruby on Rails , Amazon Web Services,
                            Terraform, Docker and more...<br/>
                            I then decided to join the mobile team which at the time had only two Engineers working on the payments app. It seemed
                            pretty bold for me to join at the time but I was determined given the growth that I had to go before I could make an
                            impact in the team. So I went on a journey to learn the entire Mobile stack(JavaScript for React Native Framework, Java for Android, Swift and Objective C for IOS)
                             Although it took alot from me personally. I had a great team behind me.
                            This company has certainly raised the bar for my next venture.
                        </font>
                    </Card.Text>
                    <Button variant="primary"  href="https://prodigyfinance.com/">Go to Prodigy Finance</Button>
                </Card.Body>
            <Card.Footer className="text-muted"><font  size="5" color="white">January 2019</font></Card.Footer>
         </Card>
    </Container>

</Styles>
)