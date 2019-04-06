import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Tab from './Tab';
import {setPersonalTab} from '../redux';

// this component is responsible for displaying the tab items. 
// when we click any of the tab items, we will show the information 
// related to that item

class TabList extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab, id) => {
        // console.log("clcik tab",id);
        this.setState({ activeTab: tab });
        this.props.setPersonalTab(tab, id)
    }

    render() {
        const { onClickTabItem, props: { children }, state: { activeTab } } = this;
        return (
            <div>
                <nav>
                    <div className="nav nav-pills">
                        {children.map((child) => {
                            // console.log("child",child);
                            const { label, id } = child.props;

                            return (
                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    id={id}
                                    onClick={onClickTabItem}
                                />
                            );
                        })}
                    </div>
                </nav>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setPersonalTab: (title, id) => dispatch(setPersonalTab(title, id)),
})

export default  connect(
    null,
    mapDispatchToProps,
)(TabList)
