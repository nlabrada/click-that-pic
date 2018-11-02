import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import images from "../images.json";
import "../components/Game.css";

// array for images id
let storedIds = [];

class Game extends Component {
    //setting initial states
    state = {
        images,
        score: 0,
        data: images,
        stored: storedIds
    };

// when the app is mounted
    componentDidMount() {
        this.setState({data: this.shuffleImages(this.state.data)});
    };

// when an image is clicked ...
    checkClick = id => {
        // if the user chooses image that hasn't been chosen
        // shuffle the dang thing and let em try again
        if (!storedIds.includes(id) ) {
            storedIds.push(id);
            let newScore = this.state.score + 1;
            this.setState({
                score: newScore,
                data: this.shuffleImages(this.state.data)
            });
            // user is done with the game
             if (storedIds.length === images.length) {
            storedIds = []
            this.setState({
                score: 0,
                data: this.shuffleImages(this.state.data)
            });
            alert("you won!");
            }
            console.log(storedIds);
        // when user pics image already chosen
        } else {
            storedIds = []
            this.setState({
                score: 0,
                stored: storedIds,
                data: this.shuffleImages(this.state.data)
            });
                alert("lol, you lost");
        }
    }

// function to shuffle images
    shuffleImages = images => {
        for (let i = images.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = images[i];
            images[i] = images[j];
            images[j] = temp;
          }
          return images;
    };

    render() {
        return(
            <div>
                <Navbar
                    score={this.state.score}
                />
                <div className="container" id="gameContainer">
                    <div className="row">
                        {this.state.data.map(i => (
                            <div className="col-lg-3 col-sm-6">
                                <Cards
                                    key={i.id}
                                    id={i.id}
                                    image={i.image}
                                    checkClick= {this.checkClick}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Game;