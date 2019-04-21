import React from 'react';
import '../styles/components/RightBoxA.css';
import EMAIL_ICON from '../images/envelope.png';
import PHONE_ICON from '../images/phone.png';
import CONTACT from '../images/contact.png';

const RightBoxA = props => (
    <div
        className='right-box right-box-a'
    >
        <div className='left-part'>
            <img src={CONTACT} alt='img'/>
        </div>
        <div className='right-part'>
            <div
                className='title'
            >
                <span>
                    {props.title}
                </span>
            </div>
            <div>
                <span>
                    {props.text}
                </span>
            </div>
            <div
                className='contact'
            >
                <div
                    className='icons-area'
                >
                    <img src={PHONE_ICON} alt='email'/>
                    <span className='icon-text'>Phone</span>
                </div>
                <div
                    className='icons-area'
                >
                    <img src={EMAIL_ICON} alt='phone'/>
                    <span className='icon-text'>Email</span>
                </div>
            </div>
        </div>
    </div>
);

RightBoxA.defaultProps = {
    title: 'default title',
    text: 'default text here'
}

export default RightBoxA