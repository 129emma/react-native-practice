import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const defaultInput = props => (
    <TextInput 
    underlineColorAndroid="transparent"
    // dynamic props, so it can be used in every props
    {...props}
    // use string to avoid duplicate style cover each other
    // stylesheet shows up in order
    // can get default styling and custom styling at the same time 
    // ORDER IS IMPORTANT
    style={[styles.input, props.style]}
   
    
    />

);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        padding: 5,
        margin: 8
    }
})


export default defaultInput;