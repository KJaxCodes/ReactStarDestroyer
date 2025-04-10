
function Star({ id, position, callbackFunc }) {
    return (
        <div className="Star">
            ⭐
        </div>
    )
}

export default Star;

// - Implement a `Star` component that positions the star and allows user interaction.
//     - Take its ID, position, and a callback function to destroy the star on the user click.
//Is the callback function in this component?
//     - Position the star. (Hint: you can use `style={{left: position.x, top: position.y}}` and don't forget to use absolute positioning.)
//     - Use `useRef` to manage focus on individual stars on the first render. Add some effect when it is focused, such as adding a shadow. 
//       (Hint: To make a `div` focusable, you need to add `tabIndex="0"` to it.)
//Where do you hadd `tabIndex="0" ???`
//     - Handle click events on stars to destroy them, removing them from the state in the `Space` component and thus from the viewport.
//Is the click function located in this component? If so, thent he callbackFunc will become destroyStar...


//style={{ left: position.x, top: position.y }}

//each Star needs a unique identifier/id

//each Star needs to be rendered in a random location, is that logic in the Space component?

//useRef logic for focused on newly rendered Star, is that logic in this component?