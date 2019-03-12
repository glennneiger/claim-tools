import React, { Component } from 'react';
import NewClaim from './NewClaim';

class MainView extends Component {
    state ={

    }

    render() {
        return (
            <section className='mainview'>
                <h1>Main Section</h1>
                <NewClaim />
            </section>
        );
    }
}

export default MainView;