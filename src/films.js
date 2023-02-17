// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let allDirectors =  array.map((film) => film.director);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesFromDirector = array.filter((film) => film.director === director);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter((film) => film.director === director);
  const averageScore = moviesFromDirector.reduce((acc, cur) => acc + cur.score, 0)
  return averageScore / moviesFromDirector.length.toFixed(2)
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  var firstTwenty = [...array].sort((a,b) => {
    if (a.title < b.title) return -1;
    return 1;
  });
  firstTwenty = firstTwenty.map((film) => film.title);
  if (firstTwenty.length > 20) {
  //console.log(firstTwenty.slice(0,20));
    return firstTwenty.slice(0,20);
  } else {
    return firstTwenty;
  }
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let byYear = [...array].sort((a,b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      return 1;
    } else {
      return a.year - b.year;
    }
  });
  return byYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let categories = array.filter((film) => film.genre == category);
  const catAvg = categories.reduce((acc, cur) => acc + cur.score, 0);
  let count = 0; 
    for (let category of categories) {
      if (category.score !== null && category.score !== '') {
        count++;
      }
    }
    return catAvg / count.toFixed(2);
  }
  
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let moviesInMinutes = array.map((film) => {
    const durationParts = film.duration.split(' ');
    const hoursToMinutes = parseInt(durationParts[0]) * 60;
    const minutes = parseInt(durationParts[1]);
    let totalMinutes;
    if (hoursToMinutes === 0) 
      totalMinutes = minutes;
    else if (isNaN(minutes)) 
      totalMinutes = hoursToMinutes;
    else 
      totalMinutes = hoursToMinutes + minutes;
    return {...film, duration: totalMinutes};
  });
  return moviesInMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filmYear = array.filter((film) => film.year === year);
   const highScore = filmYear.sort((a, b) => { a.score - b.score});
   let bestFilm = [];
   bestFilm.push(highScore[0]);
  return bestFilm;
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
