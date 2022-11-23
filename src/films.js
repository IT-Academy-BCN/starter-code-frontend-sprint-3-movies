// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = []
  result = array.map(x => x.director)
  //console.log("EXERCICE 1 ->", result);//
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = []
  result = array.filter(x => x.director === director)
  //console.log("EXERCICE 2 ->", result);//
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const directorFilms = array.filter(x => x.director === director);
  const scores = directorFilms.map(film => film.score);
  const scoresMovies = scores.length

  const scoreTotal = scores.reduce((a, b) => (a + b))
  let result = Number((scoreTotal / scoresMovies).toFixed(2));
  return result

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  titles = array.map(x => x.title)
  orderedTitles = titles.sort()
  firstTwentyTitles = orderedTitles.slice(0, 20)
  return firstTwentyTitles

}

// Exercise 5: Order by year, ascending // he afegit jo l'array.
function orderByYear(array) {

  let movies = array.map(x => x); //creo nova array perque no vull modificar l'original.
  let orderedMovies = movies.sort((a, b) => { //ordeno l'array a amb sort a partir dels dos elements que vull anar comparant (a, b) 
    if (a.year === b.year) {                   //Imposo condicions per a aconseguir l'ordre desitjat.
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return a.year - b.year;
    }
  });
  //console.log(orderedMovies)
  return orderedMovies;

}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, string) {
  const genreFilms = array.filter(x => x.genre.includes(string) && x.score != 0);
  const scores = genreFilms.map(film => film.score);

  const scoresMovies = scores.length
  const scoreTotal = scores.reduce((a, b) => (a + b))
  let result = parseFloat((scoreTotal / scoresMovies).toFixed(2));
  return result
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let moviesThatYear = array.filter(x => x.year === year)
    let sortedYears = moviesThatYear.sort()
    moviesThatYear.sort(function (a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  })
      
const bestRated = moviesThatYear.splice(0,1)
return bestRated;
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
