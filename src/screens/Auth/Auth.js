import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet  } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Login here</Text>
                <Button title="Switch to Signup" />
                <View style={styles.inputContainer}>
                <DefaultInput placeholder="Email" style={styles.input}/>
                <DefaultInput placeholder="Password" style={styles.input}/>
                <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                </View>
                <Button title="Login" onPress = {this.loginHandler} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#F8F9FC"
    }
})

export default AuthScreen;