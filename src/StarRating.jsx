import React, {useState} from "react";
/* should the stars be star-shaped buttons, or can <div> have an onClick attribute
can there be a list of divs? I am not mapping on divs but on rating which is a number
useState function will add numbers to an empty list and .map() will fill in the stars
* */
function StarRating() {
    const [rating, setRating]= useState([])

    const handleRating = () =>{
        setRating()
    }
    return(
        <>
            rating.map
            <div className="stars">
                <div className="star" onClick={()=> setRating(rating + 1)}></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>

        </>
    )


}