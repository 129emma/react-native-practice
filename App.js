import { Navigation } from 'react-native-navigation';
import { Provider }  from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';

import configureStore from './src/store/configureStore'


// highlight: configureSotre is a function
const conStore = configureStore();




// register screen
// "appname.unique identifier of screen", function
Navigation.registerComponent("yes-i-made-it.AuthScreen", () => AuthScreen, conStore, Provider);
Navigation.registerComponent("yes-i-made-it.SharePlaceScreen", () => SharePlaceScreen, conStore, Provider);
Navigation.registerComponent("yes-i-made-it.FindPlaceScreen", () => FindPlaceScreen, conStore, Provider);
// move placedetail to screen folder and register it as the new screen
Navigation.registerComponent("yes-i-made-it.PlaceDetailScreen", () => PlaceDetail, conStore, Provider);

// Start app
Navigation.startSingleScreenApp({
  // basic setup
  screen: {
    screen:"yes-i-made-it.AuthScreen",
    title: "Login"

  }
});






// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// // connect is a higher component in react redux
// // it allows connect app componet to redux store
// import { connect } from 'react-redux';

// import PlaceInput from './src/components/TextInput/TextInput';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// // import placeImage from './src/components/assets/avatar.jpg';
// import { addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';



// // delete export default here
// class App extends Component {

//   // state ={
//   //   places: [],
//   //   // store select information, initially is null
//   //   selectedPlace:null
//   // };

//   // create a handler for save input content
//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//     // use console log to debug
//     console.log('item Added');
    

//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.concat({
//     //       key: Math.random(),
//     //       name: placeName,
//     //       // image: placeImage
//     //       image: {
//     //         uri:"https://static1.squarespace.com/static/55f87b70e4b04ad8ee195f88/5746b6d48259b543b3ff6e2a/5746b70059827edb581deb2c/1464252176186/TOYSTORYICON.png"
//     //       }
//     //     })
//     //   };
//     // });
//    };

//    //click delete button in modal window
//    placeDeletedHandler = () => {

//     this.props.onDeletePlace();


//     //  this.setState(prevState => {
//     //    return{
//     //      places:prevState.places.filter(place => {
//     //        return place.key !== prevState.selectedPlace.key;

//     //      }),
//     //      selectedPlace: null
//     //    }
//     //  });
//    }

//    //click close button in modal window to close the modal
//    // in PlaceDetails, it's already use visible property to check the selectedPlace
//    modalClosedHandler =() => {

//     this.props.onDeselectedPlace();

//     // this.setState({
//     //   selectedPlace:null
//     // });
//    }

//     // 8 March, 2018
//     // create a modal to popup a window when item is selected
//     // change item delete function to select function
//     // placeDeletedHandler => placeSelectedHandler

//    placeSelectedHandler = key => {

//     this.props.onSelectPlace(key);

//     // //following code is store select item information
//     // this.setState(prevState => {
//     //   return {
//     //     selectedPlace: prevState.places.find(place => {
//     //       // in there, it will look each object and check if object it's true, otherwise it's false
//     //       return place.key === key;
//     //     })
//     //   };
//     // });

//     // following code is item delete 
//     //  this.setState(prevState => {
//     //    return{
//     //      places:prevState.places.filter(place => {
//     //        return place.key !== key;

//     //      })
//     //    }
//     //  });

//    };

//   render() {

//     return (

//       <View style={styles.container}>
//         {/* pass information to placedetail */}
//         <PlaceDetail 
//         selectedPlace={this.props.selectedPlace} 
//         onItemDeleted={this.placeDeletedHandler} 
//         onModalClosed={this.modalClosedHandler}/>
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         {/* change onItemDeleted to onItemSelected, which means when click item, it will show a popup window */}
//         <PlaceList
//          places={this.props.places}
//          onItemSelected={this.placeSelectedHandler}
//         />

//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   }
// });


// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };


// const mapDispatchtoProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectedPlace: () => dispatch(deselectPlace())
//     };
// };

// // connect function is expecting two arguments
// export default connect(mapStateToProps, mapDispatchtoProps)(App);