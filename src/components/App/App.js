import { useState } from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";

import "./App.css";

function App() {

  const [businesses, setBusinesses] = useState([]);



  function searchYelp(term,location,sortBy){
    
    Yelp.search(term,location,sortBy).then(businesses => {
      console.log(businesses); 
      setBusinesses(businesses)
    })
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
