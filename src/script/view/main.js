import $ from 'jquery';

import '../component/latest-movie.js';
import '../component/other-movie.js';

import LatestMovieData from '../data/latest-movie-data.js';
import OtherMovieData from '../data/other-movie-data.js';
import TmdbDiscover from '../data/tmdb-dicover.js';

const main = () => {    
    //var for other-movie filter
    let page = 1;
    let genres = "";
    let popularity = "desc";

    //call data from TMDB API

    //call latest-movie from tmdb and render latest-movie element
    const latestMovieElement = document.querySelector("latest-movie");        
    const latestMovie = (request_type) => {        
        LatestMovieData.getMovie(request_type)            
            .then(result => {
                latestMovieElement.movie = result;
            })
            .catch(error => {
                console.log(error);
            })
    };
    
    //call other-movie from tmdb and render other-movie element
    const OtherMovieElement = document.querySelector("other-movie");    
    const otherMovie = () => {        
        OtherMovieData.getMovie(genres,popularity,page)
            .then(result => {
                OtherMovieElement.movie = result;
            })
            .catch(error => {
                console.log(error);
            })
    };
    
    //call genre from tmdb and rendering
    const getGenres = () => {        
        TmdbDiscover.getGenres()
            .then(result => {
                result.genres.forEach(genres => {
                    document.querySelector('#genres').innerHTML += `
                    <option value="${genres.id}">${genres.name}</option>
                    `;                
                });
            })
            .catch(error => {
                console.log(error);
            })
    };                
                           
    // call element and filter
    latestMovie("now_playing");    
    otherMovie(genres,popularity,page);
    getGenres();
    
    
    //latest-movie Filter Click    
    // latest movie now-playing    
    const nowPlaying = document.querySelector("#now_playing");
    nowPlaying.addEventListener("click", function () {
        upcoming.classList.remove("white");
        nowPlaying.classList.add("white");
                                
        latestMovie(nowPlaying.id);
    });

    //latest movie upcoming
    const upcoming = document.querySelector("#upcoming");        
    upcoming.addEventListener("click", function () {
        nowPlaying.classList.remove("white");
        upcoming.classList.add("white");                                            
        latestMovie(upcoming.id);
    });

    //other-movie Filter Change
    
    //Filter Other-movie by Genre
    const genreChange = document.querySelector("#genres");
    $(document).on('change', '#genres', function() {
        genres = genreChange.value;
        page = 1;
        otherMovie(genres,popularity,page);
    });

    //Filter Other-movie by Popularity
    const popularityChange = document.querySelector("#popularity");
    $(document).on('change', '#popularity', function() {
        popularity = popularityChange.value;
        page = 1;
        otherMovie(genres,popularity,page);
    });

    //more button clicked for other-movie
    const moreBtn = document.querySelector("#more-movies");
    $(document).on('click', moreBtn, function(event){
        page++;
        const moreOtherMovie = () => {            
            OtherMovieData.getMovie(genres,popularity,page)
            .then(result => {
                OtherMovieElement.moreMovies(result);
            })
            .catch(error => {
                console.log(error);
            })
        };
        
        moreOtherMovie(genres,popularity,page);
    });
}

export default main;