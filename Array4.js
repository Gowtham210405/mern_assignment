const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//filter()
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi movies:", sciFiMovies);

//map()
const movieLabels = movies.map(
  movie => `${movie.title} (${movie.rating})`
);
console.log("Movie labels:", movieLabels);

//reduce()
const totalRating = movies.reduce(
  (sum, movie) => sum + movie.rating,
  0
);
const averageRating = totalRating / movies.length;
console.log("Average rating:", averageRating);

//find()
const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log("Joker movie:", jokerMovie);

//findIndex()
const avengersIndex = movies.findIndex(
  movie => movie.title === "Avengers"
);
console.log("Index of Avengers:", avengersIndex);
