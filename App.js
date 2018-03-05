import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state ={
    placeName:''
  }
  // create function
  placeNameChangedHandler = value => {
    // alert(event);
    this.setState({
      placeName: value
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Something did change!</Text>
        <TextInput
        style={{width: 300}}
        placeholder="type here"
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
        />
        
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
  Input
});
