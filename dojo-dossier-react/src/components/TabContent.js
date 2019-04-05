import React, { Component } from 'react';
import { connect } from 'react-redux';
import TabList from "./TabList";
import { createNewItem, retreiveDossiers } from '../redux';
import {retreiveDossiersPromise} from '../helper';
import '../App.css';

// this component is responsible to displaying the information after the user
// has clicked on a tab.
class TabContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
        }
    }

    componentDidMount() {
        // this.props.retreiveDossiersFromServer();
    }

    handleChange = (event) => {
        console.log("event:", event.target);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleItemSubmit = (event) => {
        event.preventDefault();
        this.props.createNewItem(this.state.newItem);
        // console.log("item submitted")
    }

    render() {
        console.log("TabContent", this.props);

        return (
            <div className="container up">
                <TabList>
                    {
                        this.props.dossiers.map((person, index) => {
                            return (
                                <div label={person.title} id={person.id} className="tab-content" key={index}>
                                    {person.items.map((item, idx) => {
                                        return (
                                            <li className="listItme" key={idx}>
                                                {item}
                                            </li>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </TabList>
                <div className="addItemForm">
                    <form onSubmit={this.handleItemSubmit}>
                        <input type="text" className="itemTitle" name="newItem" onChange={this.handleChange} value={this.state.newItem} />
                        <button type="submit" className="addItemButton">Add Item</button>
                    </form>
                </div>
            </div>
        );
    }
}

// look at the people search and create a selected profile to map thorugh the items.

const mapStateToProps = (state) => ({
    dossiers: state.dossiers,
    selectedTab: state.selectedTab,
})

const mapDispatchToProps = (dispatch) => ({
    createNewItem: (newItem) => dispatch(createNewItem(newItem)),
    retreiveDossiersFromServer: () => retreiveDossiersPromise().then((response) => dispatch(retreiveDossiers(response.data)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabContent)