# Movies

Given two files `index.js` and a database file `movies.db` consisting of a tables `movie` .

Given file index.http for testing the APIs.

Write APIs to perform CRUD operations on the table `movie` containing the following columns,

**Movie Table**

| Columns  | Type         |
| -------- | ------------ |
| movie_id | INTEGER      |
| name     | VARCHAR(50)  |
| img      | VARCHAR(200) |
| summary  | TEXT         |

### API 1

#### Path: `/movie/`

#### Method: `GET`

#### Description:

Returns a list of all movie names in the movie table

#### Response

```
[
  {
    movie_id:101,
    name: "Harry Potter and the Order of the Phoenix",
    img: "https://bit.ly/2IcnSwz",
    summary: "Harry Potter and Dumbledore's warning about the return of
        Lord Voldemort is not heeded by the wizard authorities who, in turn, look to
        undermine Dumbledore's authority at Hogwarts and discredit Harry."
  },

  ...
]
```

### API 2

#### Path: `/movie/:movieId`

#### Method: `GET`

#### Description:

Returns a movie according to movieId in the movie table

#### Response

```
[
  {
    movie_id:101,
    name: "Harry Potter and the Order of the Phoenix",
    img: "https://bit.ly/2IcnSwz",
    summary: "Harry Potter and Dumbledore's warning about the return of
        Lord Voldemort is not heeded by the wizard authorities who, in turn, look to
        undermine Dumbledore's authority at Hogwarts and discredit Harry."
  }
]


### API 3

#### Path: `/movie/:movieId`

#### Method: `POST`

#### Description:

Creates a new movie in the movie table. `movie_id` is auto-incremented

#### Request

```

{
"movie_id": 601,
"name": "Jurassic Park",
"img": "https://bit.ly/2IcnSwz"
"summary":"In Steven Spielberg's massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA."
}

```

#### Response

```

Movie Successfully Added

```


### API 4

#### Path: `/movies/:movieId/`

#### Method: `PUT`

#### Description:

Updates the details of a movie in the movie table based on the movie ID

#### Request

```

{
"name": Harry Potter,
"img": "https://bit.ly/2IcnSwz",
"summary": "Harry Potter and Dumbledore's warning about the return of
Lord Voldemort is not heeded by the wizard authorities who, in turn, look to
undermine Dumbledore's authority at Hogwarts and discredit Harry."

}

```

#### Response

```

Movie Details Updated

```

### API 5

#### Path: `/movies/:movieId/`

#### Method: `DELETE`

#### Description:

Deletes a movie from the movie table based on the movie ID

#### Response

```

Movie Removed

```



Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
```
