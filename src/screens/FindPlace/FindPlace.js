import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';




class FindPlaceScreen extends Component {

    //add drawer at this page
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

    itemSelectedHandler = key => {
        const selecPlaceName = this.props.places.find(place => {
            return place.key === key;
        })

        this.props.navigator.push({
            screen: "yes-i-made-it.PlaceDetailScreen",
            title: selecPlaceName.name,
            passProps: {
                selectedPlace: selecPlaceName
            }
        });
    }

    render () {
        return (
            <View>
                <PlaceList 
                places={this.props.places} 
                onItemSelected={this.itemSelectedHandler} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        // first palces reach to configureSotore's rootReducer, and second one reach
        // to inside rootReducer, and places array
        places: state.places.places
    };
}
export default connect(mapStateToProps)(FindPlaceScreen);