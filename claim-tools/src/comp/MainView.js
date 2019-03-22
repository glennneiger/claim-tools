import React, { Component } from 'react';
import NewClaim from './NewClaim';
import ExistingClaim from './ExistingClaim';
import ViewWindow from './ViewWindow';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MainView extends Component {
    state ={

    }

    render() {
        return (
            <section className='main-view'>
            <Container>
                <Row>
                    <Col>
                        <section className='claim-window'>
                            <Tabs defaultActiveKey="newclaim" id="uncontrolled-tab-example">
                                <Tab eventKey="newclaim" title="New Claim">
                                    <NewClaim />
                                </Tab>
                                <Tab eventKey="existingclaim" title="Existing Claim">
                                    <ExistingClaim />
                                </Tab>
                            </Tabs>
                        </section>
                    </Col>
                    <Col>
                        <section className='view-window'>
                            <ViewWindow />
                        </section>
                    </Col>
                </Row>
            </Container>
            </section>
        );
    }
}

export default MainView;