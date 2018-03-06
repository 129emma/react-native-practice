import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';


// react native doesn't have any press function, but it can import from react touchabal--function
const placeList = props =>{

  // add a function before render text input
  // bind placeName from listItem.js to place in this function
  const placesOutput = props.places.map((place, i) => (
    <ListItem
    key = {i}
    placeName={place}
    onItemPressed={
      ()=> props.onItemDeleted(i)
    }
    />
  ));
  return (
    <ScrollView style={styles.listContainer}>
    {placesOutput}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
