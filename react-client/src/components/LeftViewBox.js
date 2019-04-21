import React from 'react';
import '../styles/components/LeftViewBox.css';
import X_LOGO from '../images/x_logo.svg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ANSWERS, ANSWERS_TEXT, INTERVIEWS, INTERVIEWS_TEXT_A, INTERVIEWS_TEXT_B} from '../consts/consts';

const SHORT_VERSION = 'short_version', FULL_VERSION = 'full_version';

//todo: continue - consider two types of leftBox or accepting right squere as a component

class LeftViewBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            detailsSVersion: SHORT_VERSION,
            datepicker: {
                isShow: false
            }
        }
        this.toggleDetailsVersion = this.toggleDetailsVersion.bind(this);
        this.getTextByType = this.getTextByType.bind(this);
    }
    toggleDetailsVersion () {
        switch (this.state.detailsSVersion) {
            case SHORT_VERSION:
                this.setState({detailsSVersion: FULL_VERSION});
                break;
            case FULL_VERSION:
                this.setState({detailsSVersion: SHORT_VERSION});
                break;
            default:
                console.error('toggleDetailsVersion had no effect');
        }
    }
    getShortVersion (details) {
        return details.length > 90 ? details.slice(0,90) + '...' : details;
    }
    getTextByType () {
        switch (this.props.type) {
            case INTERVIEWS:
                return INTERVIEWS_TEXT_B;
            default:
                return ANSWERS_TEXT;
        }
    }
    render () {
        return (
            <div className='left-view-box'>
                <div
                    className='square'
                >
                    <img src={X_LOGO} alt='img'/>
                </div>
                <div
                    className='center-zone'
                >
                    <div
                        className='title'
                    >
                        {this.props.companyName ? 
                            <span className='prefix'>
                                {this.props.companyName} - 
                            </span>
                        : ''}
                        
                        {this.props.title}
                    </div>

                    <div
                        className='message'
                    >
                        <p>
                            {this.props.message}
                        </p>
                    </div>

                    {this.props.type === INTERVIEWS ? 
                        <div
                            className='details'
                        >
                            <p>
                                {this.state.detailsSVersion === SHORT_VERSION ?
                                    this.getShortVersion(INTERVIEWS_TEXT_A)
                                : INTERVIEWS_TEXT_A}
                            </p>
                            <div className='more-details'>
                                <span
                                    onClick={e => this.toggleDetailsVersion()}
                                >
                                    {this.state.detailsSVersion === SHORT_VERSION ? 'more...' : 'less...'}
                                </span>
                            </div>
                        </div>
                    : ''}
                    
                </div>
                <div
                    className='right-zone'
                >
                    <div
                        className='top-content'
                    >
                        {this.getTextByType()}
                    </div>
                    {this.props.type === INTERVIEWS ? 
                        <div
                            className='bottom-content'
                        >
                            {this.state.datepicker.isShow ?
                                <DatePicker
                                    className='custom-datepicker'
                                    selected={this.state.datepicker.value}
                                    onChange={date => this.setState(prevState => {
                                        prevState.datepicker.value = date;
                                        return prevState;
                                    })}
                            />
                        : 
                            <input
                                placeholder='Scheduled date?'
                                className='custom-datepicker' 
                                onClick={e => this.setState({datepicker: {value: new Date(), isShow: true}})}
                            />}
                            
                        </div>
                    : ''}
                </div>
            </div>
        );
    }
}

LeftViewBox.defaultProps = {
    companyName: '',
    title: '',
    message: '',
    when: null,
    type: ANSWERS
}

export default LeftViewBox;