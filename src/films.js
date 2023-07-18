// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movies) => movies.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result2 = array.filter(
    (movies) => movies.director === director && movies.title
  );
  console.log('EXERCICE 2 ->', result2);
  return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const filteredArray = array.filter((movies) => movies.director === director);
  const result3 = filteredArray.reduce(
    (accumulator, director) => accumulator + director.score,
    0
  );
  const averageScore = result3 / filteredArray.length;
  console.log('EXERCICE 3 ->', averageScore);
  return Number(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let orderMovies = array.map((movies) => movies.title);
  orderMovies = orderMovies.sort();
  const result4 = orderMovies.slice(0, 20);
  console.log('EXERCICE 4 ->', result4);
  return result4;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result5 = [...array];
  result5.sort((a, b) => {
    if (a.year !== b.year){
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  console.log("EXERCICE 5 ->", result5);
  return result5;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const filteredArray = movies.filter(movies => movies.genre.includes(genre));
  const scoreGenre = filteredArray.filter(movie => typeof movie.score === 'number');
  if (scoreGenre.lenght === 0){
    return 0;
  }
  const result6 = scoreGenre.reduce(
  (accumulator, genre) => accumulator + genre.score,
  0
);
const averageScore = result6 / scoreGenre.length;
console.log('EXERCICE 6 ->', averageScore);
return Number(averageScore.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const minutsDuration = movies.map(movie => {
    const durationParts = movie.duration.split(" ");
    let totalMinuts = 0;

    for (const part of durationParts) {
      if (part.includes("h")) {
        totalMinuts += parseInt(part) * 60;
      } else if (part.includes("min")) {
        totalMinuts += parseInt(part);
      }
    }
    return {
      ...movie, 
      duration: totalMinuts
    };
  });
  console.log('EXERCICE 7 ->', minutsDuration);
  return minutsDuration;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const movieOfYear = [movies.filter(movie => movie.year === year).sort((a, b) => b.score - a.score)[0]];
  
  console.log('EXERCICE 8 ->', movieOfYear);
  return movieOfYear;
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
    bestFilmOfYear
  };
}
