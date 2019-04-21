import React from 'react';
import '../styles/views/Right.css';
import RightBoxA from '../components/RightBoxA';
import RightBoxB from '../components/RightBoxB';
import RightBoxC from '../components/RightBoxC';
import JobListings from '../resources/jobListings';

const RightView = props => (
    <div id='right-view'>
        <RightBoxA/>
        <RightBoxB/>
        <div id='share-listings-div'>
            Share job listings
        </div>
        {JobListings.map(item => (
            <RightBoxC
                key={'_job-listing-' + (Math.random(1000)).toString(36)}
                title={item.title}
                message={item.message}
                details={item.details}
                score={item.score}
            />
        ))}
    </div>
);

export default RightView;