// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(movie => movie.director);

}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
   return movies.filter(movie => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  

  const movieDirector = movies.filter(movie => {
   return movie.director === director;
  });
  
  let sum = 0;

  sum = movieDirector.reduce((accumulator, movie) => {
    return accumulator + movie.score;
  }, 0);

  return Number((sum / movieDirector.length).toFixed(2));
}



// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const newMoviesArray = [...movies];
  return newMoviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const newMoviesArray = [...movies]
  return newMoviesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const moviesByGenre = movies.filter(movie => {
    return movie.genre.includes(category) && movie.score;
  });
  let totalRating = moviesByGenre.reduce((acc, movie) => acc + movie.score, 0);
  return Number((totalRating / moviesByGenre.length).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  
  const newMoviesArray = [...movies]

  return newMoviesArray.map(movie => {
    let durationInMinutes;
    if (movie.duration && movie.duration.includes('h')) {
      const parts = movie.duration.split('h ');
      const hours = parseInt(parts[0]);
      let minutes;
      if (parts[1]) {
        if (parts[1].includes('min')) {
          minutes = parseInt(parts[1].replace('min', ''));
        } else {
          minutes = 0;
        }
      } else {
        minutes = 0;
      }
      durationInMinutes = hours * 60 + minutes;
    } else {
      durationInMinutes = 0;
    }
    return {
      ...movie,
      duration: durationInMinutes
    };
  })
 
  
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear (movies, year) {
  const newMoviesArray = [...movies];

  const moviesByYear = newMoviesArray.filter(movie => movie.year === year);
  const sortedMovies = moviesByYear.sort((a, b) => b.score - a.score)[0];
  return [sortedMovies];
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
