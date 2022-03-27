import axios from "axios";
import { useState } from 'react';



const Search = () => {
    

    const [key, setKey] = useState('')

    const [laptops, setLaptops] = useState({})
    

    const handleSearch = () => {
        axios.post('http://localhost:4000/laptop/search', laptops)
        .then(res => {
            var keySearch = key 
            setLaptops(prevState => ({
                laptops: prevState.laptops.map(
                    elm => elm.ID_LAPTOP === key ? {
                        ...elm,
                        TEN_LAPTOP: this.state.TEN_LAPTOP,
                        MOTANGAN_LAPTOP: this.state.MOTANGAN_LAPTOP,
                        MOTA_LAPTOP: this.state.MOTA_LAPTOP,
                        GIA_LAPTOP: this.state.GIA_LAPTOP,
                        IMG: this.state.IMG,
                        ID_LOAI: this.state.ID_LOAI
                    }:elm
                )
            }))
            console.log(laptops);
        })
        .catch(error => console.log(error));
    }

    return ( 
        <div>
            <input type="text" name="key" id="key" onChange={e => setKey(e.target.value)}/>
            <button
            type="button" 
            onClick={handleSearch}
            className="btn btn-primary">Search</button>
        </div>
     );
}
 
export default Search;