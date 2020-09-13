// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        if (rating === void 0) { rating = 'PG'; }
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.prototype.getPG = function (movies) {
        var pgMovies = [];
        movies.forEach(function (movie) {
            if (movie.rating == 'PG')
                pgMovies.push(movie);
        });
        return pgMovies;
    };
    return Movie;
}());
var movie = new Movie('Casino Royale', 'Eon Productions', 'PG13');
var movieAbc = new Movie('ABC', 'Eon Productions', 'PG');
var movieList = [];
movieList[0] = movie;
movieList[1] = movieAbc;
console.log(movie.getPG(movieList));
