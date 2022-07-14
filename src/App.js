import React ,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList'
import './App.css';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddFavourites from './AddFavourites';


function App() {
  const[movies,setMovies]=useState([]);
  const[searchValue,setSearchValue]=useState('');
  const[favourites,setFavourites]=useState([]);
  const getMovieRequest=async(searchValue)=>{
    const url=`http://www.omdbapi.com/?s=${searchValue}&apiKey=5b6548ba`
    const response=await fetch(url);
    const responseJson=await response.json();
  
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  }
  useEffect(()=>{
    getMovieRequest(searchValue);

  },[searchValue]);

  const AddFavouriteMovie=(movie)=>{
    const newFavouriteList=[...AddFavourites,movie];
    setFavourites(newFavouriteList);
  }
  return (
    <div className="container-fluid-movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
         <MovieListHeading heading="Movies"/>
         <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
     <div className='row'>
      <MovieList 
      movies={movies}
      handleFavouritesClick={AddFavouriteMovie}
      favouriteComponent={AddFavourites}
      />
     </div>
     <div className='row d-flex align-items-center mt-4 mb-4'>
       <MovieListHeading heading="Favourites"/>
     </div>
     <div className="row">
       <MovieList
        movies={favourites}
        
       />
     </div>
      
    </div>
  );
}

export default App;
