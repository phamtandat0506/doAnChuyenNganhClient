import * as Types from '../constant/Actions';


export const actFetchLaptop = (laptop) => {


    return {
        type : Types.FETCH_LAPTOP,
        laptop
    }
}