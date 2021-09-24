import { Tab } from 'bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import { SignIn, SignUp } from '../../components/molecules';
import './Style.css';
import { Col, Container } from 'react-bootstrap';


export default function Home() {
    return (
        <div className="tabs-form">
            <Container>
                <Col sm="8" className="content-center">
                    <Tabs defaultActiveKey="signIn" id="uncontrolled-tab-example">
                        <Tab eventKey="signIn" title="Sign In" className="border-tab">
                            <SignIn />
                        </Tab>
                        <Tab eventKey="signup" title="Sign Up" className="border-tab">
                            <SignUp />
                        </Tab>
                    </Tabs>
                </Col>
            </Container>
        </div>
    )
}
