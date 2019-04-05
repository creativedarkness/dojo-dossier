import React, { Component } from 'react';
import PropTypes from 'prop-types';


//This component is responsible for displaying title onthe tabs,
//add the calss if the tab is active
//lets Tabs know which tab should be active.


class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        // console.log(this.state);
        const { onClick, props: { activeTab, label } } = this;

        let className = 'nav-item nav-link';

        if (activeTab === label) {
            className += ' active';
        }

        return (
            <a
                className={className}
                onClick={onClick}
            >
                {label}
            </a>
        );
    }
}

export default Tab