import React from 'react';
import '../styles/views/Left.css';
import LeftViewBox from '../components/LeftViewBox';
import Answers from '../resources/answers';
import Interviews from '../resources/interviews';

const LeftView = props => (
    <div id='left-view'>
        <div
            id='answers-container'
        >
            <div>Answers</div>
            {props.answers.map(item => (
                <LeftViewBox
                    key={'_ans-' + (Math.random() * 1000).toString(36)}
                    companyName={item.companyName} 
                    title={item.title}
                    message={item.message}
                />
            ))}
        </div>
        <div
            id='interviews-container'
        >
            <div>Interviews</div>
            {props.interviews.map(item => (
                <LeftViewBox
                    key={'_interv-' + (Math.random() * 1000).toString(36)}
                    title={item.title}
                    message={item.message}
                    type={item.type}
                />
            ))}
        </div>
    </div>
);

LeftView.defaultProps = {
    answers: Answers,
    interviews: Interviews
}

export default LeftView;