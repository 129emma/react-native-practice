import React from 'react';
import { TouchableHightlight, Text, View } from 'react-native';

const buttonWithBackground = props => (
    <TouchableHightlight onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text>
                {props.children}
            </Text>    
        </View>    
    </TouchableHightlight>    
);

const styles = StyleSheet.creat({
    button: {
        padding: 10,
        margin:5
    }
})

export default buttonWithBackground;