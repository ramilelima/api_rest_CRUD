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

		title=[string]
		year=[integer]
		director=[string]
		category=[string]
		storyline=[text]

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
