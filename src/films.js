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

  let averageScoreDirector = calculateAverageScore(filmsByDirector);

  return averageScoreDirector;
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
function orderByYear(array) {
  const filmsByYear = array.map(({title, year}) => ({title, year}));

  filmsByYear.sort((film1, film2) => {
    if (film1.year < film2.year) {
      return -1;
    } else if (film1.year > film2.year) {
      return 1;
    } else {
      let film1Title = film1.title.toLowerCase();
      let film2Title = film2.title.toLowerCase();
      if (film1Title < film2Title) {
        return -1;
      } else if (film1Title > film2Title) {
        return 1;
      } else {
        return 0;
      } 
    }
  });

  return filmsByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const filmsByGenre = array.filter(film => film.genre.includes(genre));

  let averageScoreGenre = calculateAverageScore(filmsByGenre);

  return averageScoreGenre;
}

function calculateAverageScore(array) {
  let arrayLenght = array.length;
  let total = 0;
  let sumOfScores = array.reduce((accumulator, film) => {
    if (film.score === '') {
      arrayLenght--;
    } else {
      total = accumulator + film.score;
    }
    return total;
  }, 0);

  let averageScore = sumOfScores / arrayLenght;
  averageScore = parseFloat(averageScore.toFixed(2));
  
  return averageScore;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const moviesInMinutes = array.map(({title, duration}) => ({title, duration}));
  
  for (let film of moviesInMinutes) {
    let obtainNumbers = film.duration.match(/\d/g);
    let hours = obtainNumbers[0] * 60;
    let minutes;

    if (obtainNumbers[1] != undefined && obtainNumbers[2] != undefined) {
      minutes = parseInt(obtainNumbers[1] + obtainNumbers[2]);
      film.duration = hours + minutes;
    } else {
      film.duration = hours;
    }
  }
  console.log(moviesInMinutes);
  return moviesInMinutes;
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
