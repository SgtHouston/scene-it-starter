
// data.js movieData = []
// title, year, imdbID, type, poster

function renderMovies (movieArray) {
    const movieHtmlArray = movieArray.map((currentMovie) => {
        return `<div class="card movies-container" style="width: 18rem;">
        <div class="card-body">
        <h4 class="card-title movie-title">${currentMovie.Title}</h4>
        <h6 class="card-subtitle movie-year mb-2 text-muted">${currentMovie.Year}</h6>
        <img class="movie-poster card-img-top" src="${currentMovie.Poster}" alt="">
        <p class="card-text movie-description"> Rate This Movie </p>
        <div class="txt-center">
        <form class="rating-stars">
            <div class="rating">
                <input id="star5-${currentMovie.imdbID}" data-imdbid="${currentMovie.imdbID}" name="star-${currentMovie.imdbID}" type="radio" value="5" class="radio-btn hide" />
                <label for="star5-${currentMovie.imdbID}">&#9734;</label>
                <input id="star4-${currentMovie.imdbID}" data-imdbid="${currentMovie.imdbID}" name="star-${currentMovie.imdbID}" type="radio" value="4" class="radio-btn hide" />
                <label for="star4-${currentMovie.imdbID}">&#9734;</label>
                <input id="star3-${currentMovie.imdbID}" data-imdbid="${currentMovie.imdbID}" name="star-${currentMovie.imdbID}" type="radio" value="3" class="radio-btn hide" />
                <label for="star3-${currentMovie.imdbID}">&#9734;</label>
                <input id="star2-${currentMovie.imdbID}" data-imdbid="${currentMovie.imdbID}" name="star-${currentMovie.imdbID}" type="radio" value="2" class="radio-btn hide" />
                <label for="star2-${currentMovie.imdbID}">&#9734;</label>
                <input id="star1-${currentMovie.imdbID}" data-imdbid="${currentMovie.imdbID}" name="star-${currentMovie.imdbID}" type="radio" value="1" class="radio-btn hide" />
                <label for="star1-${currentMovie.imdbID}">&#9734;</label>
                <div class="clear"></div>
            </div>
        </form>
            </div>
                <a href="#" class="btn add-button btn-primary" data-imdbid="${currentMovie.imdbID}">Add</a> 
            </div>
    </div>
    </div>`
    });
    return movieHtmlArray.join('')
}

function saveToWatchList (movieID) {
    const movie = movieData.find((currentMovie) => currentMovie.imdbID == movieID);
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = []
    }

    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    
    
    

}


document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.querySelector('#results');
    const searchForm = document.querySelector('#search-form')
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchString = document.getElementById('search-bar').value;
        const urlEncodedSearchString = encodeURIComponent(searchString);
        fetch('http://www.omdbapi.com/?apikey=59354c85&s=' + urlEncodedSearchString)
            .then(function(response) { return response.json(); })
            .then(function(data) {
                movieData = data.Search
                const movieHTML = renderMovies(data.Search);
                moviesContainer.innerHTML = movieHTML;
            })

    const addBtn = document.getElementsByClassName("add-button");
    moviesContainer.addEventListener("click", (event) => {
        event.preventDefault()
        if (event.target.classList.contains("add-button")) {
            const movieID = (event.target.dataset.imdbid);
            saveToWatchList(movieID)
            
        }
    }
    )
    
})
})
