import React from 'react';
import '../styles/components/HeaderBox.css';

class HeaderBox extends React.Component {
    render () {
        return (
            <div className='header-box'>
                <div className='header-box-container'>
                    <div
                        className='header-box-items'
                    >
                        <div className='header-box-item'>
                            <span>
                                {this.props.value}
                            </span>
                        </div>
                        <div className='header-box-item'>
                            <span>
                                {this.props.title}
                            </span>
                        </div>
                        <div 
                            className='header-box-item'
                        >
                            <span className='subtext'>
                                {this.props.subText}
                            </span>
                        </div>
                    </div>
                    <div
                        className='header-box-icon'
                    >
                        {this.props.imgSrc ? 
                            <img src={this.props.imgSrc} alt='imgIcon'/>
                        : ''}
                    </div>
                </div>
            </div>
        );
    }
}

HeaderBox.defaultProps = {
    value: 'defaultValue',
    title: 'defaultTitle',
    subText: 'defaultSubText',
    imgSrc: ''
}

export default HeaderBox;