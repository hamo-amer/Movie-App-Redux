import "./App.css";
import AddMovie from "./components/AddMovie";
import ListMovies from "./components/ListMovies";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <AddMovie />
      <ListMovies />
    </div>
  );
}

export default App;
