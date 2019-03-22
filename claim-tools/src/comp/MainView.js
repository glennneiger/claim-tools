import React, { Component } from 'react';
import NewClaim from './NewClaim';
import ExistingClaim from './ExistingClaim';
import ViewWindow from './ViewWindow';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


class MainView extends Component {
    state ={

    }

    render() {
        return (
            <section className='main-view'>
                <Tabs defaultActiveKey="newclaim" id="uncontrolled-tab-example">
                    <Tab eventKey="newclaim" title="New Claim">
                        <NewClaim />
                    </Tab>
                    <Tab eventKey="existingclaim" title="Existing Claim">
                        <ExistingClaim />
                    </Tab>
                </Tabs>;
                <section className='view-window'>
                    <ViewWindow />
                </section>
            </section>
        );
    }
}

export default MainView;