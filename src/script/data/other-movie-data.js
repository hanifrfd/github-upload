import {baseUrl, APIKey} from "../data/tmdb-var.js";

class OtherMovieData extends HTMLElement {        
    static getMovie (genres, popularity, page){        
        return fetch(`${baseUrl}/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.${popularity}&include_adult=false&page=${page}&with_genres=${genres}`)
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

export default OtherMovieData;