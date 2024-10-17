# React + Vite
# Movie Search App

This is a simple web application for searching movies using the [OMDb API](https://www.omdbapi.com/). You can search for movies by title and see the results displayed in a responsive grid, including the movie title, release year, and poster.

## Features

- Search movies by title using the OMDb API.
- Display movie results in a responsive grid (in my case I use tailwind CSS).
- Show movie details such as title, year, and poster.
- Prevent repeated searches for the same query.
- Automatically fetch search results as you type (with debounce to avoid excessive API calls).

## Requirements

- Display a search input and a button to trigger the search.
- Fetch and display a list of movies, showing their title, year, and poster.
- Ensure the search form is functional.
- Implement responsive grid layout for movie results.

## API

To interact with the OMDb API, you will need to register and obtain an API key. Visit [OMDb API](https://www.omdbapi.com/) and sign up with your email to get the key.

### Example API Call

```bash
https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=SEARCH_QUERY
