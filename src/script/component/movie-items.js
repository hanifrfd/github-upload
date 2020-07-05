import {imgUrl} from "../data/tmdb-var.js";

class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML =
        `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .movie-item {
                flex: 0 0 auto;
                margin: 15px;
                background-color: none;
                width: 160px;    
            }
            
            .movie-item > img{
                width: 100%;
                min-height: 222px;
                max-height: 222px;
                margin-bottom: 16px;
                border-radius: 5px;
                box-shadow: 0px 4px 15px rgba(30, 30, 30, 0.58);
                transition: 1s;
              }
            
            .movie-caption{
                display: flex;
                flex-direction: column;    
                max-width: 100%;
                justify-content: space-between;
            }

            .movie-item:hover img{    
                box-shadow: 4px 4px 25px rgba(46, 165, 232, 0.58);
            }
            
            .movie-rate{
                flex: 2 0;    
                box-sizing: border-box;
                padding: 3px;
                max-width: 40px;
                max-height: 25px;
                font-size: 12px;
                background-color: #353434;    
                text-align: center;
                margin: 0;
            }
            
            .movie-title{
                flex: 1 0;
                text-align: center;
                font-size: 16px;
            }
            
            .movie-info{
                margin-bottom: 15px;    
                font-size: 12px;
                color: #9f9f9f;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            @media screen and (max-width: 425px){
                .movie-item{
                    width: 150px;
                    font-size: 9px;                
                }
            
                .movie-item > img{
                    width: 100%;
                    height: 125px;
                }
            }
        </style>
        <div class="movie-item fade-in ">                    
                    ${this._movie.poster_path ? `<img src="${imgUrl}${this._movie.poster_path}" alt="poster">` : `<img src="./src/styles/img/no-image.jpg" alt="poster">`}
                    <div class="movie-caption">                                                                            
                        <div class="movie-info">
                            <p>${this._movie.release_date}</p>
                            <div class="movie-rate card">${this._movie.vote_average}</div>
                        </div>    
                        <div class="movie-title">
                            <p>${this._movie.title}</p>                            
                        </div>                                                                            
                    </div>
        </div>
        `;        
    }
    
}

customElements.define("movie-item", MovieItem);