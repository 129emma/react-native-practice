import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
    render () {
        return (
            <View>
                <PlaceList places={this.props.places} />
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