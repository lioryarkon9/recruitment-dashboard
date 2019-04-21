import React from 'react';
import '../styles/components/RightBoxC.css';

const RightBoxC = props => (
    <div
        className='right-box right-box-c'
    >
        <div className='top'>
            <div
                className='title'
            >
                {props.title}
            </div>
        </div>
        <div
            className='middle'
        >
            <div
                className='message'
            >
                {props.message}
            </div>
            <div
                className='details'
            >
                {props.details}
            </div>
        </div>
        <div
            className='bottom'
        >
            <span>
                {props.score}
            </span>
        </div>
    </div>
);

RightBoxC.defaultProps = {
    title: 'default title',
    message: 'default message right here',
    details: 'some farther default details regarding this and that',
    score: '4.5'
}

export default RightBoxC