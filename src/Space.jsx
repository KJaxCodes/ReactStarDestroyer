import { useState, useEffect, useRef, useId } from "react";
import "./Space.css"

// my components //
import Star from "./Star";

function getRandom(min = 10, max = 500) {
    return Math.random() * (max - min) + min;
}

function Space() {

    const nextId = useRef(1); //unique ID for each star
    const [stars, setStars] = useState([{ id: nextId.current++, x: getRandom(), y: getRandom() }]); // id, x, y
    //sets the random position of newly rendered star
    //each time a star is rendered, the ref increases by 1
    const [gameStarted, setGameStarted] = useState(false);
    //each time the page loads, the game has to be started

    function addStar() {
        //function to add a new star with a new id and random position
        const newStar = {
            id: nextId.current++,
            x: getRandom(),
            y: getRandom()
        };
        setStars((prevStars) => [...prevStars, newStar]);
    }

    useEffect(() => {
        if (!gameStarted) return;
        //prevents the interval from starting until the player has clicked "Start"
        //if gameStarted is false, then the rest of the logic won't run

        const interval = setInterval(() => {
            addStar();
        }, 2500); //2500 = 2.5 seconds


        return () => {
            clearInterval(interval); //cleanup when dismount
        };
    }, [gameStarted]); //only run when gameStarted is true

    function destroyStar(id) {
        //function to remove star by clicking, takes id
        console.log(id)
        setStars((prevStars) => prevStars.filter((star) => star.id !== id));
        //state is based on previous value, so need to use this function syntax
    }

    function handleStartGame() {
        setGameStarted(true); //now that setGameStarted is true, the game can start

    }



    return (
        <div className="Space">
            <h1>Star Destroyer</h1>

            {!gameStarted && (
                <button onClick={handleStartGame}>Start Game</button>
            )}

            <div className="starsContainer">
                {
                    stars.map((star) => {
                        return (
                            < Star
                                key={star.id}
                                id={star.id}
                                position={{ x: star.x, y: star.y }}
                                destroyStar={destroyStar}
                            />
                        )
                    })
                }
            </div>


        </div>

    )

}

export default Space;