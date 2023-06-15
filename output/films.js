"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  var result = [];
  array.map(function (movie) {
    if (result.length === 0 || result.indexOf(movie.director) < 0) result.push(movie.director);
  });
  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  var result = array.filter(function (movie) {
    return movie.director === director;
  });
  console.log("EXERCISE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  var dirMovies = getMoviesFromDirector(array, director);
  return dirMovies.reduce(function (res, film) {
    return res + parseFloat(film.score);
  }, 0) / dirMovies.length;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  return array.map(function (el) {
    return el.title;
  }).sort().slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return _toConsumableArray(array).sort(function (a, b) {
    if (a.year < b.year) return -1;else if (a.year > b.year) return 1;else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  var result = array.filter(function (movie) {
    return movie.genre.indexOf(category) >= 0 && !isNaN(parseFloat(movie.score));
  });
  return Math.round(result.reduce(function (res, film) {
    return res + parseFloat(film.score);
  }, 0) / result.length * 100) / 100;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  function convertDurationToMinutes(duration) {
    var durationPattern = /((\d*)h)?\s?((\d*)min)?/;
    var matches = duration.match(durationPattern);
    if (!matches) {
      return;
    }
    console.log(matches);
    var hours = parseInt(matches[2], 10) || 0;
    var minutes = parseInt(matches[4], 10) || 0;
    return hours * 60 + minutes;
  }
  return movies.map(function (movie) {
    return _objectSpread(_objectSpread({}, movie), {}, {
      duration: convertDurationToMinutes(movie.duration)
    });
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(arr, year) {
  var retVal = arr.filter(function (movie) {
    return movie.year === year;
  }).sort(function (a, b) {
    return a.score > b.score;
  });
  return retVal.splice(1, retVal.length - 2);
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors: getAllDirectors,
    getMoviesFromDirector: getMoviesFromDirector,
    moviesAverageOfDirector: moviesAverageOfDirector,
    orderAlphabetically: orderAlphabetically,
    orderByYear: orderByYear,
    moviesAverageByCategory: moviesAverageByCategory,
    hoursToMinutes: hoursToMinutes,
    bestFilmOfYear: bestFilmOfYear
  };
}