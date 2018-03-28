import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/TextInput/TextInput';
import { addPlace } from '../../store/actions/index'



class SharePlaceScreen extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        console.log(event);
        if (event.type === "NavBarButtonPress"){
            if (event.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }


    render () {
        return (
            <View>
                {/* onPlaceAdded is the property from textinput.js file  */}
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            </View>
        );
    }

}





const mapDispatchToProps = dispatch => {
    return {
        // allow function to dispatch name to new store
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);