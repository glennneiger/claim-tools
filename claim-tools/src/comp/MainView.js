import React, { Component } from 'react';
import NewClaim from './NewClaim';
import ExistingClaim from './ExistingClaim';
import ViewWindow from './ViewWindow';

class MainView extends Component {
    state ={

    }

    render() {
        return (
            <section className='main-view'>
                <h1>Main Section</h1>
                    <NewClaim />
                    <ExistingClaim />
                    <ViewWindow />
            </section>
        );
    }
}

export default MainView;