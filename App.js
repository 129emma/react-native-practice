import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state ={
    placeName:'',
    // create a default place to save input
    places:[]
  }
  // create a function
  placeNameChangedHandler = value => {
    // alert(event);
    this.setState({
      placeName: value
    })
  }

  // create a handler for save input content
  placeSubmitHandler =() => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }
  render() {
    // add a function before render text input
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}> {place} </Text>
    ));

    return (
      <View style={styles.container}>
      <Text>Something did change!</Text>
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

      <View>
      {placesOutput}
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }

});
