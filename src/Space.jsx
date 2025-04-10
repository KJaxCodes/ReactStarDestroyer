import { useState, useEffect, useRef } from "react";

// my components //
import Star from "./Star";

function Space() {
    const [position, setPosition] = useState()
        //sets the random position of newly rendered < Star />
    const [stars, setStars] = useState([])
        //holds all rendered < Star /> in state, also how they will be destroyed/removed ---probably filter...


}