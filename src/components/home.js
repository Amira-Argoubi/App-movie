import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Carous from "./caroussel";
//import Signup from "./signup";
import Add from "./addNew";
import Pic1 from "./film1.jpg";
import Pic2 from "./film2.jpg";
import Pic3 from "./film3.jpg";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./home.css";

const tabMovies = [
  {
    id: 1,
    title: "Gladiator",
    tof: Pic1,
    rate: "***",
    description: "waraaaaaay",
  },
  {
    id: 2,
    title: "Pearl Harbor",
    tof: Pic2,
    rate: "****",
    description: "kikikiki",
  },
  {
    id: 3,
    title: "Pirates of the caribbean",
    tof: Pic3,
    rate: "*****",
    description: "hahahaha",
  },
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
    addButton: false,
  };
  /********search for a movie*************/
  barSearch = (e) => {
    this.setState({ word: e.target.value });
  };
  /*********add film*******/
  handleChangeTitle = (value) => {
    this.setState({
      title: value,
    });
  };

  handleChangeRate = (value) => {
    this.setState({
      rate: value,
    });
  };
  handleChangeTof = (value) => {
    this.setState({
      tof: value,
    });
  };
  addMovie = (e) => {
    tabMovies.push({
      title: this.state.title,
      description: this.state.description,
      rate: this.state.rate,
      tof: this.state.tof,
    });
    console.log(tabMovies);
    this.setState({ description: "", title: "", rate: "" });
  };

  render() {
    const { word, tabMovies } = this.state;
    let addButtonClose = () => this.setState({ addButton: false });
    return (
      <div className="home">
        <input
          className="bar"
          type="text"
          placeholder="Search..."
          value={word}
          onChange={this.barSearch}
        />
        <ButtonToolbar>
          <Button
            className="butAd"
            onClick={() => this.setState({ addButton: true })}
          >
            Add New Movie
          </Button>
          <Add
            show={this.state.addButton}
            onHide={addButtonClose}
            addfilmTitle={this.handleChangeTitle}
            addfilmRate={this.handleChangeRate}
            addfilmTof={this.handleChangeTof}
            addObjectMovie={this.addMovie}
            state={this.state}
          />
        </ButtonToolbar>

        <div className="cards">
          {tabMovies.filter(testFilter(word)).map((el) => (
            <div className="card">
              <img src={el.tof} alt="ahhhh" />
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
