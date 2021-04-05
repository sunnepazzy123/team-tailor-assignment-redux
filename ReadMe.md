# Installation 

1. Download zip file or clone the repo

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

## Run
    # Run frontend (:3000) & backend (:9000)
    npm run dev

    # Run backend only
    npm run server



## Env Variables
You can also Edit the .env file in then root and add the following
```
NODE_ENV = development
MONGO_URI = your mongodb uri

```


# TEST API CALL
```
Development Mode: http://localhost:9000/api/movie/

```

| Route                            | Method | Desc                                 | Field (required)
| -----------                      | ------ |-----                                 |------
| http://localhost:9000/api/movie/  | GET    | Get all popular movies                        |None
| http://localhost:9000/api/movie/watched | POST    | Get Watched Movie                      |None
| http://localhost:9000/api/movie/  | POST   | Get Searched Movie                  | {search: "fury" }




## To View all Popular Movies from TMDB Open Api
    @Route: http://localhost:9000/api/movie/
    @Method: GET
    @Parameter: none 
    @Access: Public


## To View Watched Movie from our database
    @Route: http://localhost:9000/api/movie/watched
    @Method: POST
    @Parameter: None
    @Access: Public

# To Search movie from TMDB API 
```
@Route: http://localhost:9000/api/movie
@Method: POST
@Access: Public
@Payload: search
{
  "search": "Fury",
  
}
```

# API Tools for testing easily
    * Postman - For Windows/Linux/Mac Desktop Version


