function renderMovies (movieArray) {
    const movieHtmlArray = movieArray.map((currentMovie) => {
        return `<div class="card movies-container" style="width: 18rem;">
        <div class="card-body">
        <h4 class="card-title movie-title">${currentMovie.Title}</h4>
        <h6 class="card-subtitle movie-year mb-2 text-muted">${currentMovie.Year}</h6>
        <img class="movie-poster card-img-top" src="${currentMovie.Poster}" alt="">
        <div class="txt-center"> </div>
    </div>
    </div>`
    });
    return movieHtmlArray.join('')
}


document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.querySelector('#results');
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    moviesContainer.innerHTML = renderMovies(watchlist);
    

})
