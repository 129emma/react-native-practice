import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
    places: [],
    // store select information, initially is null
    // selectedPlace:null
}
// set state argument in this function to a default value
// so in this function, if state havn't set, it will start with initialState value
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case ADD_PLACE:
        // in redux, it never directly manipulate the old one, so we always need to return a new state, and it will replace the old one
        return {
            // pulls out all the property's old state, and adds it into the new object
            // every new property in there will be overwritted, and old one which not overwrite will be kept
            ...state,
            // new state will update places
            places: state.places.concat({
                key: Math.random(),
                // referring to the ddPlace function in place.js 
                name: action.placeName,
                // image: placeImage
                image: {
                  uri:"https://static1.squarespace.com/static/55f87b70e4b04ad8ee195f88/5746b6d48259b543b3ff6e2a/5746b70059827edb581deb2c/1464252176186/TOYSTORYICON.png"
                }
              })
        };

        case DELETE_PLACE:
        return {
            ...state,
            places: state.places.filter(place => {
                return place.key !== state.selectedPlace.key;
              }),
            //   selectedPlace: null
        };
        
        // case SELECT_PLACE:
        // return {
        //     ...state,
        //     selectedPlace: state.places.find(place => {
        //         // in there, it will look each object and check if object it's true, otherwise it's false
        //         // // referring to the selectPlace function in place.js 
        //         return place.key === action.placeKey;
        //       })
        // };

        // case DESELECT_PLACE:
        // return {
        //     ...state,
        //     selectedPlace: null
        // }
        default:
            return state;
    }
};

export default reducer;