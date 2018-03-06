import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';


// react native doesn't have any press function, but it can import from react touchabal--function
const placeList = props =>{

  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.value}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
          placeImage={info.item.image}
        />
      )}
    />
    // using flatlist instead of
    // {placesOutput}

  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
