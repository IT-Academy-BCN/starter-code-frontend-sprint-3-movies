// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(a => a.director);
  console.log('Exercise 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(a => a.director === director);
  let moviesArray = [];
  result.forEach(function(movie) {moviesArray.push(movie)});
  console.log('Exercise 2 ->', moviesArray);
  return moviesArray;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesArray = getMoviesFromDirector(array, director);
  let average = averageOfMovies(moviesArray);
  console.log('Exercise 3 ->', average);
  return Number(average);
}

function averageOfMovies(array){
  let total = 0, scoredMovies = 0, average;
  array.forEach(function(movie) {
    if (movie.score !== ''){
      total += movie.score;
      scoredMovies++;
    }
  });
  average = (total/scoredMovies).toFixed(2);
  return Number(average);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let slicedArray;
  let titlesList = array.map(a => a.title);
  titlesList.sort((a, b) => {
    const titleA = a.toUpperCase();
    const titleB = b.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  slicedArray = titlesList.slice(0, 20);

  console.log('Exercise 4 ->', slicedArray);
  return slicedArray;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  array.sort(function(a,b){
    if (a.year - b.year) {
      return a.year - b.year
    } else {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    }
  });
  console.log('Exercise 5 ->', array);
  return array;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let genreMovies = array.filter(movie => movie.genre.includes(category));
  let average = averageOfMovies(genreMovies);
  console.log('Exercise 6 ->', average);
  return average;
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
