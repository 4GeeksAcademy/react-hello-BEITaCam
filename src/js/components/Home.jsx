import React from "react";

const Home = (props) => {
    return (
        <div className="bigCounter">
            <div>⏰</div>
            <div>{props.digitFour}</div>
            <div>{props.digitThree}</div>
            <div>{props.digitTwo}</div>
            <div>{props.digitOne}</div>
        </div>
    );
};

export default Home;