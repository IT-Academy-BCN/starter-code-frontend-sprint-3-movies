// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(film => film.director);

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(film => film.director === director);

  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const filmsByDirector = getMoviesFromDirector(array, director);

  let sumOfScores = filmsByDirector.reduce((accumulator, film) => {
    return accumulator + film.score;
  }, 0);
  
  let averageScore = sumOfScores / filmsByDirector.length;
  return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const filmsByAlphabeticalOrder = array.map(film => film.title);
  let first20Films;

  filmsByAlphabeticalOrder.sort((film1, film2) => {
    let film1Title = film1.toLowerCase();
    let film2Title = film2.toLowerCase();
    if (film1Title < film2Title) {
      return -1;
    } else if (film1Title > film2Title) {
      return 1;
    } else {
      return 0;
    }
  });

  first20Films = filmsByAlphabeticalOrder.slice(0, 20);
  
  return first20Films;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

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
