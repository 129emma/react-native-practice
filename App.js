import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


import PlaceInput from './src/components/TextInput/TextInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import placeImage from './src/components/assets/avatar.jpg';





export default class App extends React.Component {

  state ={
    places: [],
    // store select information, initially is null
    selectedPlace:null
  };

  // create a handler for save input content
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          // image: placeImage
          image: {
            uri:"https://static1.squarespace.com/static/55f87b70e4b04ad8ee195f88/5746b6d48259b543b3ff6e2a/5746b70059827edb581deb2c/1464252176186/TOYSTORYICON.png"
          }
        })
      };
    });
   };

    // 8 March, 2018
    // create a modal to popup a window when item is selected
    // change item delete function to select function
    // placeDeletedHandler => placeSelectedHandler

   placeSelectedHandler = key => {

    //following code is store select item information

    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          // in there, it will look each object and check if object it's true, otherwise it's false
          return place.key === key;
        })
      };
    });

    // following code is item delete 
    //  this.setState(prevState => {
    //    return{
    //      places:prevState.places.filter(place => {
    //        return place.key !== key;

    //      })
    //    }
    //  });

   };

  render() {

    return (

      <View style={styles.container}>
        {/* pass information to placedetail */}
        <PlaceDetail selectedPlace={this.state.selectedPlace}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        {/* change onItemDeleted to onItemSelected, which means when click item, it will show a popup window */}
        <PlaceList
         places={this.state.places}
         onItemSelected={this.placeSelectedHandler}
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
