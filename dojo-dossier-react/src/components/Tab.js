import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setPersonalTab} from '../redux';

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
        const { onClick, props: {activeTab, label}} = this;
        
        let className = 'nav-item nav-link';
        
        if (activeTab === label) {
            className += ' active';
            // console.log("activeTab",activeTab);
            // this.props.grabTabTitle(label);
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

const mapDispatchToProps = (dispatch) => ({
    grabTabTitle: (person) => dispatch(setPersonalTab(person)),
})


export default connect(
    null,
    mapDispatchToProps
)(Tab)