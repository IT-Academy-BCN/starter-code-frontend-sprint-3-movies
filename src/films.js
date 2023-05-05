// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result =  movies.map(movie => {
    return movie.director;
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
 const result2 = movies.filter(movie => movie.director == director);
 console.log("EXERCISE 2 ->", result2);
 return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const result3 = movies.filter(movie => movie.director == director);
  return moviesAverage(result3);}
  function moviesAverage(result3){
  const scores = result3.map(movie => {return movie.score});
  let sum = scores.reduce((a, b) => a + b);
  let average = sum / result3.length;
  return Math.round(average * 100) / 100;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const titles = movies.map(movie => movie.title);
  const alphabetical = titles.sort();
  if (alphabetical.length > 20) {
    alphabetical.length = 20;
  }
  return alphabetical;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const clonedMovies = [...movies];
  const years = clonedMovies.sort((a, b) => {
    const solution = a.year - b.year;
    if (solution!== 0) return solution;
    if (a.title < b.title) {return -1;}
    else if (a.title > b.title) {return 1;} 
      else {return 0;}});
return years;}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const result3 = movies.filter(movie => movie.genre == genre);
  result3.forEach(function (element, i) 
  {if (element.score == "") {result3.splice(i, 1)}});
  return moviesAverage(result3);
  }

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let copyMovies = [...movies];
  copyMovies.forEach(function (movie) {
  let durationPerMovie = movie.duration;
  let dividingString = durationPerMovie.toString().replace("h", "");
  let dividingString2 = dividingString.toString().replace("min", "");
  dividingString2 = dividingString2.split(' ');
  if (dividingString2[1] != undefined) {
  movie.duration = (parseInt(dividingString2[0]) * 60) + parseInt(dividingString2[1]);
  return parseInt(movie.duration);}
  else {
  movie.duration = (parseInt(dividingString2[0]) * 60);
  return parseInt(movie.duration)}});
  return copyMovies;}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const bestYear = movies.filter(movie => movie.year == year);
  const scores = bestYear.map((a) => a.score);
  const highestScore = Math.max(...scores);
  const highestMovie = movies.filter(movie => movie.score === highestScore);
  return highestMovie;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
