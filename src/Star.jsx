import { useRef, useEffect } from "react";
import "./Star.css"

function Star({ id, position, destroyStar }) {
    const starRef = useRef(null);

    useEffect(() => {
        //on the first render of the star, focus on it
        if (starRef.current) {
            starRef.current.focus();
        }
    }, []);

    function handleClick(event) {
        destroyStar(id);
    }

    return (
        <>
            <div
                ref={starRef}
                className="Star"
                tabIndex="0"
                onClick={handleClick}
                style={{
                    left: position.x,
                    top: position.y,
                    position: "absolute"

                }}
            >
                ⭐
            </div>
        </>
    )
}


export default Star;

//useRef logic for focused on newly rendered Star, include in this component