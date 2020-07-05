class Navbar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode : "open"});
    }

    connectedCallback(){        
        this.render();
        this.onScroll();
    }        

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            #navbar{
                display: flex;    
                position: relative;
                top: 0;
                left: 0;
                right: 0;
                z-index: 99;
                justify-content: space-between;
                align-items: center;
                height: 100px;                
                transition: 0.3s;
                padding-left: 50px;
                padding-right: 50px;
            }

            #logo{
                font-size: 36px;
                color: #2EA5E8;
            }
            
            #logo > P > span {
                color: #fff;
            }
            
            .navigation {    
                display: flex;
                font-size: 18px;
                list-style: none;        
            }
            
            .nav-link{    
                padding: 15px;
            }
            
            .nav-link > a {        
                text-decoration: none;
                color: inherit;
                padding-bottom: 10px;    
                transition: 0.4s;
            }
            
            li > a:hover {    
                border-bottom: 3px solid #2EA5E8;
            }

            @media screen and (max-width: 768px){
                .nav-link{
                    padding: 10px;
                }
                #navbar{
                    max-height: 100px;
                    padding-left: 50px;
                    padding-right: 50px;
                }
            
                #logo{
                    font-size: 24px;
                }
            
                .navigation {        
                    font-size: 13px;
                }
            }
                @media screen and (max-width: 425px){
                    .nav-link{
                        padding: 5px;
                    }
                    #navbar{
                        max-height: 50px;
                        padding-left: 15px;
                        padding-right: 15px;
                    }
                
                    #logo{
                        font-size: 18px;
                    }
                
                    .navigation {        
                        font-size: 10px;
                    }
                }
            }
        </style>
        <div id="navbar">
            <div id="logo">
                <p>Movie<span class="bold">BOT</span></p>
            </div>                
            <nav id="nav">
                <ul class="navigation light">
                    <li class="nav-link"><a href="#home">Home</a></li>
                    <li class="nav-link"><a href="#latest-movie">Now Playing</a></li>
                    <li class="nav-link"><a href="#other-movies">Other Movie</a></li>
                    <li class="nav-link"><a href="#about">About</a><li>
                </ul>        
            </nav>
        </div>        
        `;
    }

    onScroll(){
        const navbar = this.shadowRoot.querySelector('#navbar');
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {                
                navbar.style.position = "fixed";
                navbar.style.height = "80px";
                navbar.style.backgroundColor = "#353434";
            } else {
                navbar.style.position = "relative";
                navbar.style.height = "100px";
                navbar.style.backgroundColor = "";
            }
        }
    }        
}

customElements.define("nav-bar", Navbar);