import './movie-items.js';

class LatestMovie extends HTMLElement {
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
                .list-movie-horizontal {
                    display: flex;
                    flex-wrap: nowrap;
                    overflow-x: auto;
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
            </style>
            <div class="list-movie-horizontal"></div>
        `;
        this._movie.forEach(movies => {
            const movieItem = document.createElement("movie-item");
            movieItem.movie = movies;
            this.shadowDOM.querySelector('.list-movie-horizontal').appendChild(movieItem);            
        });        
        
    }
}

customElements.define("latest-movie", LatestMovie);