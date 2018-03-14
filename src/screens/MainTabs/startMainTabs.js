// this file is not for holding a react componet, so it doesn't have to start with upper case

// run code from react native navigation

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const startTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-map-outline", 30),
        Icon.getImageSource("ios-share-alt-outline", 30)
    
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    // assign screen
                    screen: "yes-i-made-it.FindPlaceScreen",
                    label: "Find Place",
                    title: "It's find place page!",
                    icon: sources[0]
                },
                {
                    screen: "yes-i-made-it.SharePlaceScreen",
                    label: "Share Place",
                    title: "It's share place page!",
                    icon: sources[1]
                }
            ]
        });
    });
   
  
};


export default startTabs;