import * as Types from '../constant/Actions'

var initState = [];

const laptops = (state = initState, action) => {
    switch(action.type){
        case Types.FETCH_LAPTOP:
          state = action.laptops;
          return [...state]
        default : return [...state];
    }
}

export default laptops;