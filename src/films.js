// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(film => film.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let arrFilmsOfDirector =array.filter(film => (film.director == director));
  return arrFilmsOfDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let arrFilmsOfDirector =array.filter(film => (film.director == director));
  let total = arrFilmsOfDirector.reduce(((sum, film) => sum + film.score), 0);
  return +(total/arrFilmsOfDirector.length).toFixed(2);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let newArray = array.map(film => film.title);
  return newArray.sort().slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const newArray = [...array];
  return newArray.sort(orderYearTitle);
}

function orderYearTitle(a,b){ 
  if (a.year < b.year){
    return -1;
  } else if (a.year > b.year){
    return 1;
  } else if (a.title < b.title) {
    return -1;
  } else if (a.title > b.title) {
    return 1;
  }
  return 0;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
    let arrFilmsOfCategory =array.filter(film => (film.genre.includes(category)));
    let arrFilmsOfCategoryNoEmptySpaces = arrFilmsOfCategory.filter(film => film.score != (undefined || null || 0));
    let total = arrFilmsOfCategoryNoEmptySpaces.reduce(((sum, film) => sum + film.score), 0);

    return +(total/arrFilmsOfCategoryNoEmptySpaces.length).toFixed(2);
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const newArray = array.map(changeDuration);
  return newArray;
}

function changeDuration(film){
  const time = film.duration.toString();
  let hours = time.match(/\d+h/);
  let minutes = time.match(/\d+min/);
  let numHours = (hours !== null) ? hours[0].slice(0,1) : 0;
  let numMins = (minutes !== null) ? minutes[0].slice(0,-3) : 0;
  return {
    ...film,
    duration: (+(numHours) * 60) + +(numMins)
  };
  // Aplico solució amb object.assign perquè no supero el test de no modificació d'array original, 
  // cosa que no entenc si map retorna un nou array. Tampoc entenc massa bé object.assign.
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const moviesYear = array.filter((film) => film.year == year);
  const moviesYearBestFilm = moviesYear.sort((a,b) => {
    if (b.score > a.score){
      return 1;
    } else if (b.score < a.score){
      return -1;
    }
      return 0;
  });
  console.log(moviesYear);
  console.log(moviesYearBestFilm);
  return moviesYearBestFilm[0].title; 
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
