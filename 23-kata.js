const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];
var movieShort = [];
var movieMid = [];
var movieLong= [];

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  if (movie.durationInMinutes <= 100) {
    movieShort.push(movie);
    movies.splice(i, 1);
    i--;
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    movieMid.push(movie);
    movies.splice(i, 1);
    i--;
  } else {
    movieLong.push(movie);
    movies.splice(i, 1);
    i--;
  }
}
console.log(movieShort);
console.log(movieMid);
console.log(movieLong);