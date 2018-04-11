import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonwithBack from '../../components/UI/Button/Button';

import backgroundImage from '../../assets/background.jpg';


class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
           <View style={styles.container}>
            
            <MainText>
                <HeadingText>Login here</HeadingText>
            </MainText>    
                <Button title="Switch to Signup" />
                <ButtonwithBack color="#def8f3">
                   custom button
                </ButtonwithBack>    
                <View style={styles.inputContainer}>
                <DefaultInput placeholder="Email" style={styles.input}/>
                <DefaultInput placeholder="Password" style={styles.input}/>
                <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                </View>
                <Button title="Login" onPress = {this.loginHandler} />
                
            </View>
            </ImageBackground>
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
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    }

})

export default AuthScreen;