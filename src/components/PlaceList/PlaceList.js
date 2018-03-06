import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props =>{

  // add a function before render text input
  // bind placeName from listItem.js to place in this function
  const placesOutput = props.places.map((place, i) => (
    <ListItem
    key = {i}
    placeName={place}
    onItemPressed={
      ()=> alert('Item pressed!' + i)
    }
    />
  ));
  return (
    <View style={styles.listContainer}>
    {placesOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
