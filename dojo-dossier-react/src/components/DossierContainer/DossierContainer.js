import React, { Component } from 'react';
import axios from 'axios';
import TabContent from '../TabContent';
import { connect } from 'react-redux';
import { retreiveDossiers } from '../../redux';
import './DossierContainer.css';

class DossierContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleTabSubmit = (event) => {
        event.preventDefault();
        this.props.addNewTab(this.state.title)
        // console.log("added new tab")
    }

    render() {
        // console.log(this.props);
        return (
            <div className="DossierContainer">
                <h1>Dojo Dossier</h1>
                <div className="newTabForm">
                    <form onSubmit={this.handleTabSubmit}>
                        <input type="text" className="newTabTitle" name="title" onChange={this.handleChange} value={this.state.title} />
                        <br />
                        <button type="submit" className="addTabButton">Add New Tab</button>
                    </form>
                </div>
                <TabContent />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dossiers: state.dossiers,
})

const mapDispatchToProps = (dispatch) => ({
    // addNewTab: (title) => dispatch(createNewTab(title)),
    addNewTab: (title) => {
        axios
            .post(`http://5ca799328e58df001460368c.mockapi.io/dossiers`, { title, items: [] })
            .then((axiosPostresponse) => {
                console.log("post response", axiosPostresponse);
                axios
                    .get("http://5ca799328e58df001460368c.mockapi.io/dossiers")
                    .then((postRetrieveresponse) => {
                        // after response from axios            
                        console.log("response.data", postRetrieveresponse.data);
                        dispatch(retreiveDossiers(postRetrieveresponse.data))
                    })
                    .catch((postRetrieveError) => {
                        console.log("postRetereveError", postRetrieveError);
                    })
            .catch( (error) => {
                console.log(error);
            })
            })
    }
})

    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(DossierContainer)