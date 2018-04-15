import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";

import characters from "./characters.json";
import "./App.css";

let topScore = 0;
let guessesCorrect = 0;
let message = "";

class App extends Component {
  state = {
    characters,
    topScore,
    guessesCorrect,
    message
  };
  setClicked = id => {
    const characters = this.state.characters;
    const cardClicked = characters.filter(character => character.id === id);

    if (cardClicked[0].clicked) {
      guessesCorrect = 0;
      message = "Bummer you already clicked that one, starting over";

      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }
      this.setState({ message });
      this.setState({ guessesCorrect });
      this.setState({ characters });
    } else {
      cardClicked[0].clicked = true;
      guessesCorrect = guessesCorrect + 1;
      message = "Well done keep clicky to get the high score!";

      if (guessesCorrect > topScore) {
        topScore = guessesCorrect;
        this.setState({ topScore });
      }
      characters.sort((a, b) => {
        return 0.5 - Math.random();
      });
      this.setState({ characters });
      this.setState({ guessesCorrect });
      this.setState({ topScore });
      this.setState({ message });
    }
  };
  render() {
    return (
      <Wrapper>
        <div className="main-container">
          <h1>Fleur-de-lis Memory Game!</h1>
          <h3>
            Fleur-de-lis, ( French: “lily flower”) is an ancient symbol that has
            long been associated with French royalty. Depicting a stylized lily
            or lotus flower seen in many places across the world. It has been
            used in different contexts and has represented peace, war, religion,
            politics, royalty and more.
          </h3>

          <h2>
            To play the game just click on an image to earn points, but don't
            click on any image more than once!
          </h2>
          <h1 className="message">{this.state.message}</h1>
          <h1 className=" guessesCorrect">
            {" "}
            Number Correct {this.state.guessesCorrect}
          </h1>
          <h1 className="topScore">Top Score {this.state.topScore}</h1>
          <main className="container">
            <div className="row">
              {this.state.characters.map(character => (
                <GameCard
                  setClicked={this.setClicked}
                  id={character.id}
                  key={character.id}
                  image={character.image}
                  className="col-sm-1"
                />
              ))}
            </div>
          </main>
        </div>
      </Wrapper>
    );
  }
}

export default App;
