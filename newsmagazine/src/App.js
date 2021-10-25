
import './App.css';
import Navbar from "./components/Navbar/Navbar"

import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Banner/>
      <Category/>
       
    </div>
  );
}

export default App;


/*
GET https://newsapi.org/v2/everything?q=Apple&from=2021-10-23&sortBy=popularity&apiKey=API_KEY
602e440998c64b46b70a5c06593ffb8e


*/