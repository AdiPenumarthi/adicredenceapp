const express = require("express");
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "movies.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

// TO Get all movies details API
app.get("/movie/", async (request, response) => {
  const getAllMovieQuery = `
    SELECT
      *
    FROM
      movie;`;
  const movie = await db.get(getAllMovieQuery);
  response.send(movie);
});

//TO get a movie with movie_id
app.get("/movie/:movieId/", async (request, response) => {
  const { movieId } = request.params;
  //console.log(movieId);
  const getMovieQuery = `
    SELECT
      *
    FROM
      movie
    WHERE
      movie_id = ${movieId};`;
  const movie = await db.get(getMovieQuery);
  response.send(movie);
});

//Add movie to the db
app.post("/movie/", async (request, response) => {
  const movieDetails = request.body;
  //console.log(movieDetails);
  const { movieId, name, img, summary } = movieDetails;
  const getMovieQuery = `
    INSERT INTO
      movie (movie_id,name,img,summary)
    VALUES
      (
         ${movieId},
         '${name}',
         '${img}',
         '${summary}'
      );`;

  const dbResponse = await db.run(getMovieQuery);
  response.send("Added successfully");
});

//Update movie details
app.put("/movie/:movieId/", async (request, response) => {
  const { movieId } = request.params;
  const movieDetails = request.body;
  const { movie_id, name, img, summary } = movieDetails;
  const updateMovieQuery = `
    UPDATE
      movie
    SET
      name='${name}',
      img='${img}',
      summary='${summary}'
    WHERE
      movie_id = ${movieId};`;
  await db.run(updateMovieQuery);
  response.send("movie Updated Successfully");
});

app.delete("/movie/:movieId/", async (request, response) => {
  const { movieId } = request.params;
  const deleteMovieQuery = `
  DELETE FROM
    movie
  WHERE
    movie_id = ${movieId};`;
  await db.run(deleteMovieQuery);
  response.send("Movie Removed");
});

module.exports = app;
