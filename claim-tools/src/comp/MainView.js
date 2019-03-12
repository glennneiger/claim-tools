import React, { Component } from 'react';
import NewClaim from './NewClaim';
import ViewWindow from './ViewWindow';

class MainView extends Component {
    state ={

    }

    render() {
        return (
            <section className='mainview'>
                <h1>Main Section</h1>
                <NewClaim />
                <ViewWindow />
            </section>
        );
    }
}

export default MainView;