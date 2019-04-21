import React from 'react';
import '../styles/components/RightBoxB.css';

const RightBoxB = props => (
    <div className='right-box right-box-b'>
        <div className='title'>
            <span>
                {props.title}
            </span>
        </div>
        <div className='count-items'>
            <div className='single-item'>
                <span
                    className='counter-span'
                >
                    {props.numFavorites}
                </span>
                <span>
                    Favorites
                </span>
            </div>
            <div className='single-item'>
                <span
                    className='counter-span'
                >
                    {props.numRelevant}
                </span>
                <span>
                    Relevant jobs
                </span>
            </div>
        </div>
    </div>
);

RightBoxB.defaultProps = {
    title: 'default title',
    numFavorites: '5',
    numRelevant: '23'
}

export default RightBoxB;