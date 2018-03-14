import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

//function
export const addPlace = (placeName) => { 
    return {
        type: ADD_PLACE,
        // property name: argument
        placeName: placeName
    };
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    };
};

// export const selectPlace = (key) => {
//     return {
//         type:SELECT_PLACE,
//         placeKey: key
//     };
// };

// export const deselectPlace = () => {
//     return {
//         type: DESELECT_PLACE
//     };
// };

