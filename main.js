
function renderMovie(movie) {
    const movieElement = document.createElement('div')
    movieElement.classList.add('movie')
    // document.getElementById("movies").appendChild(movieElement)
    const movies = document.getElementsByClassName("movies")
    movies[0].appendChild(movieElement)

    const movieInformation = document.createElement('div')
    movieInformation.classList.add('movie-informations')
    movieElement.appendChild(movieInformation)

    const movieImage = document.createElement('div')
    movieImage.classList.add('movie-image')
    movieInformation.appendChild(movieImage)

    const imgMovie = document.createElement('img')
    imgMovie.src = movie.image
    imgMovie.alt = "Batman (2022)"
    movieImage.appendChild(imgMovie)

    const movieText = document.createElement('div')
    movieText.classList.add('movie-text')
    movieInformation.appendChild(movieText)

    const movieTitle = document.createElement('h4')
    movieTitle.textContent = movie.title
    movieText.appendChild(movieTitle)

    const movieRat = document.createElement('div')
    movieRat.classList.add('rating-favorites')
    movieText.appendChild(movieRat)

    const rating = document.createElement('div')
    rating.classList.add('rating')
    movieRat.appendChild(rating)

    const imgStar = document.createElement('img')
    imgStar.src = "images/star.png"
    imgStar.alt = "Star Icon"
    rating.appendChild(imgStar)

    const notaSpan = document.createElement('span')
    notaSpan.textContent = movie.rating
    rating.appendChild(notaSpan)

    const movieFav = document.createElement('div')
    movieFav.classList.add('favorite')
    movieRat.appendChild(movieFav)

    const imgFav = document.createElement('img')
    imgFav.src = "images/heart.svg"
    imgFav.alt = "Heart Icon"
    movieFav.appendChild(imgFav)
    imgFav.src = movie.isFavorited ? 'images/heart-fill.svg' : 'images/heart.svg'
    imgFav.alt = 'Heart'
    imgFav.classList.add('favoriteImage')

    const favSpan = document.createElement('span')
    favSpan.textContent = "Favoritar"
    movieFav.appendChild(favSpan)

    const movieDescription = document.createElement('div')
    movieDescription.classList.add('movie-description')
    movieElement.appendChild(movieDescription)

    const desSpan = document.createElement('span')
    desSpan.textContent = movie.description
    movieDescription.appendChild(desSpan)
}

const moviesObj = [
  {
    image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman (2022)',
    rating: 9.2,
    year: 2022,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: true,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers Endgame (2019) ',
    rating: 9.1,
    year: 2019,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: false,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange in the Multiverse of Madness',
    rating: 9.0,
    year: 2022,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: false
  }
]

moviesObj.forEach(movie => renderMovie(movie))