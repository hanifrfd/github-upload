import {baseUrl, APIKey} from "./tmdb-var.js";

class LatestMovieData extends HTMLElement {
    static getMovie (request_type){        
        return fetch(`${baseUrl}/movie/${request_type}?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`is not found`);
            }
        })
    }
}

export default LatestMovieData;