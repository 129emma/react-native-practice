import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
  <View style = {styles.listItem} >
    <Image source={props.placeImage} style={styles.imageStyle} />
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
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center"
  },
  itemStyle:{
    textAlign:'center',
    color:'white'
  },
  imageStyle:{
    marginRight:20,
    height:30,
    width:30
  }
});

export default listItem;
