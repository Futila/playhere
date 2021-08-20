import TRACKS_DATA from "./tracks.data";

const INITIAL_STATE = {
    track_list: TRACKS_DATA
}

const tracksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
            return state
    }
}

export default tracksReducer;