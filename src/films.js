// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  console.log(array);
  let result = array.map((movie) => movie.director)
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director)
  return result;
}

function moviesAverage(array) {
  const sum = array.reduce((total, movie) => total + movie.score, 0)
  return parseFloat(sum / array.length.toFixed(2));
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let totalFilmsByDirector = getMoviesFromDirector(array, director);
  return parseFloat(moviesAverage(totalFilmsByDirector).toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let newArray = array.map(movie => movie.title).sort((a,b) => a > b ? 1 : -1);
  return newArray.splice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {  
  let newArray = array.sort((a, b) => {
    if (a.year === b.year) {
      return a.title > b.title ? 1 : -1
    }
    return a.year > b.year ? 1 : -1
  });
  return newArray.map(movie => {
    return {title: movie.title, year: movie.year}
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let totalFilmsByCategory = array.filter((movie) => movie.score && movie.genre.includes(category));
  console.log('totalFilmsByCategory', totalFilmsByCategory)
  return moviesAverage(totalFilmsByCategory);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
