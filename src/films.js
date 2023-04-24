// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  const directors = array.map( function(item) {
    return item.director;
  })
  
  console.log("EXERCICE 1 ->", directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const directorMovies = array.filter(function(item) {
          return director === item.director;
    });
 
  console.log("EXERCICE 2 ->", directorMovies);
  return directorMovies;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const directorMovies = array.filter(function(item) {
    return director === item.director;
  });

  const total = averageScore(directorMovies);

  console.log("EXERCICE 3 ->", total); 

  return total;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const movieTitle = array.map(function(movie){
    return movie.title;
  }).sort().slice(0, 20);

  console.log("EXERCICE 4 ->", movieTitle);

  return movieTitle;
}

// Exercise 5: Order by year, ascending
function orderByYear(arr) {
  
  const copyArr = [...arr];
  const moviesByYear = copyArr.sort(function(itemA, itemB){
    if (itemA.year === itemB.year ) {
        return itemA.title.localeCompare(itemB.title);
    } else {
        return itemA.year - itemB.year;
    }
  });

  console.log("EXERCISE 5 ->", moviesByYear);

  return moviesByYear;
}

//Average score of the movies
function averageScore (arr) {

  const moviesWithScore = arr.filter(movie => movie.score !== '');

  const averageScore = moviesWithScore.reduce(function(acc, movie) {
    return acc + movie.score;
  }, 0);

  const total = parseFloat((averageScore / moviesWithScore.length).toFixed(2));
  console.log("AVERAGE SCore", total);
  return total;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  const getGenres = array.filter((movie) => movie.genre.includes(genre)); 
  
  const average = averageScore(getGenres); 
  
    
  console.log("EXERCISE 6 ->", average);

  return average
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(arr) {

  const getDuration = arr.map((item) => {

      const hour = parseInt(item.duration.split("h")[0]) * 60;
      const min = parseInt(item.duration.split(" ")[1])
        // .replace("min", "");

      if (parseInt(item.duration.split(" ")[1])) {
        return min.replace("min", "");
      }else { return 0}
  });

  console.log("EXERCISE 7 ww->", getDuration);

  return item.duration = hour + min;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(arr, year) {
  // const copyArr = [...arr];
  const bestMovie = arr.filter((movie) => year === movie.year).sort((itemA, itemB) => itemB.score - itemA.score);
  
  console.log("EXERCISE 8 ->", [bestMovie[0]]);

  return [bestMovie[0]]
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
