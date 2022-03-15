import logo from './logo.svg';
import './App.css';
import SingleMovie from './Components/SingleMovie/SingleMovie';
import MovieList from './Components/MovieList/MovieList';
import SearchBar from './Components/SearchBar/SearchBar';
function App() {
  return (
    <div className="App">
      <h1>Fabolous Flix</h1>
      <SearchBar/> 
      <SingleMovie id='13'/>
      <MovieList list= 'trending/movie/week'/>
           
        
    </div>
  );
}

export default App;
