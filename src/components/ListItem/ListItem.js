import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
  <View style = {styles.listItem} >
    <Text style = {styles.itemStyle}>
    {props.placeName}
    </Text>
  </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'lightblue',
    borderRadius:4,
    borderColor:'lightblue',
    padding:10,
    marginBottom:10

  },
  itemStyle:{
    textAlign:'center',
    color:'white'
  }
});

export default listItem;
