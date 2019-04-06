import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import TabList from "./TabList";
import { createNewItem, retreiveDossiers } from '../redux';
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
        this.props.retreiveDossiersFromServer();
    }

    handleChange = (event) => {
        // console.log("event:", event.target);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleItemSubmit = (event) => {
        event.preventDefault();
        // this.props.createNewItem(this.state.newItem);
        // this.props.addItemToDossierById(this.props.personalTabId, this.state.newItem);
        // console.log("personalTabId", this.props.personalTabId);
        // console.log("new item", this.state.newItem);
    }

    render() {
        console.log("TabContent", this.props.dossiers);

        return (
            <div className="container up">
                <TabList>
                    {
                        this.props.dossiers.map((person, index) => {
                            console.log("person", person);
                            return (
                                <div label={person.title} id={person.id} className="tab-content" key={index}>
                                    {person.items.map((item, idx) => {
                                        // console.log("person.items.map", item);
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
    personalTabId: state.personalTabId,
})

const mapDispatchToProps = (dispatch) => ({
    // createNewItem: (newItem) => dispatch(createNewItem(newItem)),
    retreiveDossiersFromServer: () => {
        axios
            .get("http://5ca799328e58df001460368c.mockapi.io/dossiers")
            .then((response) => {
                // after response from axios            
                console.log("response.data", response.data);
                dispatch(retreiveDossiers(response.data))
            })
            .catch((error) => {
                console.log("reterie error", error);
            })
    }

    //     addItemToDossierById: (id, item) => {
    //         // console.log(" axios.put id", id);
    //         // console.log("axios.put item", item);
    //         axios
    //             .put(`http://5ca799328e58df001460368c.mockapi.io/dossiers/${id}`, { items: item })
    //             .then((axiosPutResponse) => {
    //                 console.log("newItem posted to server:", axiosPutResponse.data)
    //                 retreiveDossiersPromise()
    //                     .then((putRetreiveResponse) => {
    //                         // after response from axios            
    //                         console.log("response.data", putRetreiveResponse.data);
    //                         dispatch(retreiveDossiers(putRetreiveResponse.data))
    //                     })
    //                     .catch((putRetreiveError) => {
    //                         console.log("putRetreiveError", putRetreiveError);
    //                     })
    //             })
    //             .catch((err) => console.log(err))
    //     }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabContent)