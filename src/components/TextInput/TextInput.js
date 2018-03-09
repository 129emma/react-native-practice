import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
  state ={
    placeName:''
  };
  // create a function
  placeNameChangedHandler = value => {
    // alert(event);
    this.setState({
      placeName: value
    });
  };

  // create a handler for save input content
  placeSubmitHandler =() => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
   };

  render(){
    return (
      <View style={styles.inputContainer}>

       <TextInput
         style={styles.placeInput}
         placeholder="type here"
         value={this.state.placeName}
         onChangeText={this.placeNameChangedHandler}
       />

       <Button
         style={styles.placeButton}
         title= "Click Me"
         onPress={this.placeSubmitHandler}
       />

     </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:25
  },
  placeInput: {
    width: '70%',
    borderBottomColor:'lightgrey',
    borderBottomWidth:0.3
  },
  placeButton: {
    width: '30%'
  }
});

export default PlaceInput;
