import React from 'react';
import HeaderBox from '../components/HeaderBox';
import '../styles/views/Header.css';

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            time: {
                value: '03:50:21 PM',
                intervalId: ''
            },
            ip: '77.126.38.252',
            language: 'en-US,en;q=0.5'
        }
        this.updateHeaderValues = this.updateHeaderValues.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateIp = this.updateIp.bind(this);
    }
    componentDidMount () {
        this.updateHeaderValues();
    }
    componentWillUnmount () {
        clearInterval(this.state.time.intervalId);
    }
    updateHeaderValues () {
        let intervalId = setInterval(() => {
            this.updateTime();
        }, 1000);
        this.setState(prevState => {
            prevState.time.intervalId = intervalId;
            return prevState;
        });

        this.updateIp();
        this.updateLanguage();
    }
    updateTime () {
        fetch('http://time.jsontest.com/')
        .then(httpRes => {
            httpRes.json()
            .then(jsonRes => {
                this.setState(prevState => {
                    prevState.time.value = jsonRes.time;
                    return prevState;
                });
            });
        });
    }
    updateIp () {
        fetch('http://ip.jsontest.com/')
        .then(httpRes => {
            httpRes.json()
            .then(jsonRes => {
                this.setState(prevState => {
                    prevState.ip = jsonRes.ip;
                    return prevState;
                });
            });
        });
    }
    updateLanguage () {
        fetch('http://headers.jsontest.com/')
        .then(httpRes => {
            httpRes.json()
            .then(jsonRes => {
                this.setState(prevState => {
                    prevState.language = jsonRes['Accept-Language'];
                    return prevState;
                });
            });
        });
    }
    render () {
        return (
            <div id='header-view'>
                <HeaderBox
                    value={this.state.time.value}
                    title='time'
                    subText='Lorem ipsum dolor sit amet'
                />
                <HeaderBox
                    value={this.state.ip}
                    title='Your IP'
                    subText='Lorem ipsum dolor sit amet'
                />
                <HeaderBox
                    value={this.state.language}
                    title='Language'
                    subText='Lorem ipsum dolor sit amet'
                />
            </div>
        );
    }
    
};

export default Header;