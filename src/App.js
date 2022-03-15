import logo from './logo.svg';
import './App.css';
import SingleMovie from './Components/SingleMovie/SingleMovie';
import MovieList from './Components/MovieList/MovieList';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <SingleMovie id='13'/>
      <MovieList list= 'trending/movie/week'/>
    </div>
  );
}

export default App;
