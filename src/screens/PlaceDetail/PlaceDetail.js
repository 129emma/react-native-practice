import React from 'react';
import { Modal, View, Image, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import icon library
import Icon from 'react-native-vector-icons/Ionicons';


const placeDetail = props => {

    // let modalContent = null;
    
    // if (props.selectedPlace){
    //     modalContent = (
           
    //     );
    // }
    return (
        // visible property can control the visibility of modal
        // in there, bind visible property to a boolean to check if the selectPlace is not null
        // if it's null, modal will invisible 
        // animationType will assing the animation type for shwoing modal
        // <Modal 
        // visible={props.selectedPlace !== null}
        // animationType="slide"
        // >
         <View style={styles.modalContainer}>
           {/* if select place is set, then render modalContent  */}
           {/* {modalContent} */}

            <View style={styles.imageContainer}>
            <Image source={props.selectedPlace.image} style={styles.palceImage} />
            <Text style={styles.textStyle}>
            {props.selectedPlace.name}    
            </Text>    
            </View>
            <View>
                {/* add icon button */}
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                    <Icon size={20} name="ios-trash-outline" color="#d6bcbc" onPress={props.onItemDeleted}  />
                    </View>
                </TouchableOpacity>    
                {/* <Button title="Delete" onPress={props.onItemDeleted} color="#d6bcbc"/> */}
                {/* <Button title="Close" onPress={props.onModalClosed} color="#bcd6d2"/>     */}
            </View>    

         </View>

    //    </Modal>    


    )



    // <Modal>
    //     <View>
    //         {/* First way */}
    //         {/* add an expression to check if the place is set, otherwise pass null */}
    //         {/* <Image source = {props.selectedPlace ? props.selectedPlace.placeImage : null} /> */}

    //         {/* Second way */}
    //         {/* render text and image conditionally, see above code */}
    //         <Text>
    //         {props.selectedPlace.placeName}
    //         </Text>
    //         <View>
    //             <Button>
    //             </Button>    
    //         </View>    

    //     </View>

    // </Modal>    

};


const styles = StyleSheet.create({
    modalContainer:{
        margin: 20,
        alignItems:"center",
        paddingTop:30,
        backgroundColor: '#f7f8f9'
    },
    palceImage: {
        height:100,
        width:100
    },
    textStyle: {
        textAlign:'center'
    },
    imageContainer:{
       
    },
    iconContainer: {
        alignItems:'center'
    }

});

export default placeDetail;