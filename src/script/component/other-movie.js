import $ from 'jquery';
import './movie-items.js';


class OtherMovie extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode : "open"});        
    }

    set movie(movie){
        this._movie = movie;        
        this.render();        
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .list-other {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 0px 50px 30px 59px;
                }

                ::-webkit-scrollbar {
                    width: 2px;
                  }
                                    
                ::-webkit-scrollbar-track {    
                background: #525151; 
                }
                
                /* Handle */
                ::-webkit-scrollbar-thumb {
                background: #474747; 
                }
                
                /* Handle on hover */
                ::-webkit-scrollbar-thumb:hover {
                background: #555; 
                }
                
                .btn {
                width: 100%;
                font-size: 1.2rem;
                padding: 5px;
                background-color: #353434;
                border: none;    
                color: white;
                cursor: pointer;
                font-weight: lighter;
                }
                @media screen and (max-width: 768px){
                    .list-other {
                        padding: 0px 0px 30px 0px;
                    }
                }                
            </style>            
            <div class="list-other"></div>
            <button id="more-movies" class="btn">More Movies</button>
        `;        
        this._movie.forEach(movies => {
            const movieItem = document.createElement("movie-item");
            movieItem.movie = movies;
            this.shadowDOM.querySelector('.list-other').appendChild(movieItem);            
        });        
    }
    
    //more movie click make new element of movie-item
    moreMovies(result){
        $(this.shadowDOM.querySelector('#more-movies')).remove();
        result.forEach(movies => {
            const movieItem = document.createElement("movie-item");
            movieItem.movie = movies;
            this.shadowDOM.querySelector('.list-other').appendChild(movieItem);
        });
        const newButton = document.createElement(`button`);
        newButton.id = 'more-movies';
        newButton.className = 'btn';
        newButton.textContent = 'More Movies';
        this.shadowDOM.querySelector('.list-other').appendChild(newButton);
    }
}

customElements.define("other-movie", OtherMovie);