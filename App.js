import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './Movies';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies></Movies>}></Route>
        <Route path='/movie/:id' element={<Movie></Movie>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
