import React, {useState} from "react";

/* should the stars be star-shaped buttons, or can <div> have an onClick attribute
can there be a list of divs? I am not mapping on divs but on rating which is a number
useState function will add numbers to an empty list and .map() will fill in the stars
* */
function StarRating() {
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
        /*function that handles the click in UI and updates the rating state, takes the rate as a parameter*/
    }
    return (
        <>
            <div style={{display: "flex"}}>
            {[undefined, undefined, undefined, undefined, undefined].map((_, index) => (
                <span key={index} onClick={()=>handleRating(index)}
                      style={{cursor: "pointer", color: index <= rating ? "orange" : "grey"}}>
                    ★
                </span>
                )
            )}
            </div>
        </>
    )
}

export default StarRating