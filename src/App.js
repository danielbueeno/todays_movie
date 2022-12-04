import { useState } from "react";
import CategoryRow from "./components/category_row/category_row";
import Header from "./components/header/header";
import SelectedMovie from "./components/selected_movie/selected_movie";

function App() {
  const data = require("./categories.json");

  const [movieName, setMovieName] = useState("");
  const [coverSrc, setCoverSrc] = useState();

  const categorySelection=e=>{
    const movie = data[e][Math.floor(Math.random()*4)];
    setMovieName(movie.name);
    setCoverSrc(movie.cover);
  }
  return (
    <div className="App">
     <Header/>
     <CategoryRow onSelectCategory={categorySelection}/>
     <SelectedMovie movieName={movieName} imageScr={coverSrc} />
    </div>
  );
}

export default App;
