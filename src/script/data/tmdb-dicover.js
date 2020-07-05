import {baseUrl, APIKey} from "../data/tmdb-var.js";

class TmdbDiscover extends HTMLElement {        
    static getGenres (){        
        return fetch(`${baseUrl}/genre/movie/list?api_key=${APIKey}&language=en-US`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`is not found`);
            }
        })                    
    }    
}

export default TmdbDiscover;