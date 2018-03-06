import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


import PlaceInput from './src/components/TextInput/TextInput';
import PlaceList from './src/components/PlaceList/PlaceList';
// import placeImage from './src/components/assets/avatar.jpg';

export default class App extends React.Component {

  state ={
    places: []
  };

  // create a handler for save input content
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName,
          // image: placeImage
          image: {
            uri:"https://static1.squarespace.com/static/55f87b70e4b04ad8ee195f88/5746b6d48259b543b3ff6e2a/5746b70059827edb581deb2c/1464252176186/TOYSTORYICON.png"
          }
        })
      };
    });
   };

   placeDeletedHandler = key => {
     this.setState(prevState => {
       return{
         places:prevState.places.filter(place => {
           return place.key !== key;

         })
       }
     });
   };

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />

        <PlaceList
         places={this.state.places}
         onItemDeleted={this.placeDeletedHandler}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
