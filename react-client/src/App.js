import React from 'react';
import './styles/App.css';
import HeaderView from './views/Header';
import LeftView from './views/Left';
import RightView from './views/Right';

const App = props => (
    <div className='App'>
        <div 
            id='header-container'
        >
            <HeaderView/>
        </div>
        <div
            id='main-container'
        >
            <div
                id='left-view-container'
            >
                <LeftView/>
            </div>
            <div
                id='right-view-container'
            >
                <RightView/>   
            </div>
        </div>
    </div>
);

export default App