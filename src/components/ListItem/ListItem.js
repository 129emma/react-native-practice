import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listItem = (props) => (
  <View style = {styles.listItem} onPress={props.onItemPressed}>
    <Text>
    {props.placeName}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'red',
    borderWidth: 0.5

  }
});

export default listItem;
