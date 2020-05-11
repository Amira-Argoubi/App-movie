import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Carous from "./caroussel";
//import Signup from "./signup";
import Pic1 from "./film1.jpg";
import Pic2 from "./film2.jpg";
import Pic3 from "./film3.jpg";
import "./home.css";

const tabMovies = [
  { title: "Gladiator", tof: Pic1, rate: "***" },
  { title: "Pearl Harbor", tof: Pic2, rate: "****" },
  { title: "Pirates of the caribbean", tof: Pic3, rate: "*****" },
];

/*fonction de filtration*/
function testFilter(word) {
  return function (x) {
    return x.title.toLowerCase().includes(word.toLowerCase()) || !word;
  };
}
class Home extends Component {
  state = {
    word: "",
    tabMovies: tabMovies,
  };

  barSearch = (e) => {
    this.setState({ word: e.target.value });
  };

  render() {
    const { word, tabMovies } = this.state;
    return (
      <div className="home">
        <input
          className="bar"
          type="text"
          placeholder="Search..."
          value={word}
          onChange={this.barSearch}
        />

        <div className="cards">
          {tabMovies.filter(testFilter(word)).map((el) => (
            <div className="card">
              <img src={el.tof} alt="totlapic"></img>
              <h3>{el.title}</h3>
              <h2>{el.rate}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
