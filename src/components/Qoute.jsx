import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .card-header {
        background-color: #222;
    }



`;
export const QouteCard = () => (
    <Styles>
        <Card>
            <Card.Header><font size="5" color="white">Favourite Quote </font></Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    A man who stands for nothing falls for anything
                    ...{' '}
                </p>
                <footer className="blockquote-footer">
                    Malcolm X <cite title="Source Title"></cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </Styles>
)