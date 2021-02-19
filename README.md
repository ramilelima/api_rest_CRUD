# api_rest_nodejs_mysql


**Rest API for movie information, such as title, year of release, director, category and storyline.** 
________________________________________________________________________

**** API Documentation ****
________________________________________________________________________

**Lists all movies available in the API:** 

 - URL 
   
   "/movies” 
   
  - Method: 
   
	   GET 
   
   - URL Params 
   
	   No params 
   
   - Success Response: 
   
	   Code: 200  
	   Content:  
~~~
{ 
   "title": "Star Wars: Episode V - The Empire Strikes Back", 
   "year": 1980,
   "director": "Irvin Kershner", 
   "category": "Action, Adventure, Fantasy", 
   "storyline": "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi Master's help will Luke survive when the Dark Side of the Force beckons him into the ultimate duel with Darth Vader."  
} 

{
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "director": "Peter Jackson",
    "category": "Action, Adventure, Drama",
    "storyline": "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Frodo and Sam reach Mordor in their quest to destroy the One Ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith." 
}

~~~
  
  - Error Response: 
   
   Code: 500 INTERNAL SERVER ERROR 
   Content: 
~~~
{ 
    error : "API unavailable"
}
~~~

________________________________________________________________________

**Submit information a new movie to the API (CREATE):**

- URL 

	"/movie” 

- Method: 

	POST

- URL Params 

	No params

- JSON Params 

	Required:
~~~
          title=[string]
          year=[integer]
	  director=[string]
	  category=[string]
          storyline=[text]
~~~

- Success Response: 

	Code: 200 
	Content: 
~~~
        { 
	  "Sucessfully": "Movie added!" 
        }
~~~

- Error Response:  

	Code: 400 BAD REQUEST
	Content: 
~~~
	{ Error : "Title invalid" }
	{ Error : "Year invalid" }
	{ Error : "Director invalid" }
	{ Error : "Category invalid" }
	{ Error : "Storyline invalid" }
	{ Error : "One or more invalid parameters!" } 
~~~

________________________________________________________________________

**Returns information about a movie by its id (READ):**

- URL 

	"/movie/id” 

- Method: 

	GET 

- URL Params 

	Required:
~~~
	 id=[integer]
~~~

- Success Response: 

	Code: 200 
	Content:
	
~~~
	{ 
	    "title": "Interstellar", 
	    "year": 2014,
	    "director": "Christopher Nolan", 
	    "category": "Adventure, Drama, Sci-Fi", 
	    "storyline": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life." 
	} 
~~~

- Error Response:  

	Code: 400 BAD REQUEST
	Content:
~~~
        { 
          error : "ID is not a number" 
       	}	 
~~~ 

Code: 404 NOT FOUND
Content:
	
~~~ 
        { 
           error : "Movie not found" 
        }  
~~~

________________________________________________________________________

**Update information a movie to the API (UPDATE):**

- URL 

	"/movie/id” 

- Method: 

	PUT

- URL Params 

	Required:
~~~
	id=[integer]
~~~

- JSON Params

	Required:
~~~
	title=[string]
	year=[integer]
	director=[string]
	category=[string]
	storyline=[text]
~~~

- Success Response: 

	Code: 200 
	Content: 
~~~
	{ 
           "Sucessfully": "Movie update!" 
        }
~~~

- Error Response:  

	Code: 400 BAD REQUEST
	Content: 
~~~
	{ 
           Check invalid fields: + "Here will appear the parameters that are invalid" 
        } 
~~~

Code: 404 NOT FOUND
Content: 
~~~
	{
           Error: "Movie not found"
        }
~~~

________________________________________________________________________

**Delete a movie to the API (DELETE):**

- URL 

	"/movie/id” 

- Method: 

	DELETE

- URL Params 

	Required:
~~~
	id=[integer]
~~~

- Success Response: 

	Code: 200 
	Content: 
~~~
        {
          "Successfully deleted"
        }
~~~

- Error Response:  

	Code: 400 BAD REQUEST
	Content: 
~~~
	{ 
          Error: There was an error deleting 
        }
~~~

Code: 404 NOT FOUND
Content: 
~~~
	{
          Error: "Movie not found"
        }
~~~

## All the storylines and movie information presented here, were obtained from the website: ##

&nbsp;
[https://www.imdb.com/]
