import React, {useState} from "react";
import "../styles/pages/comingsoon/ComingSoon.css"

const DisplayBubble = () => <a href=""><i className="fas fa-smile-wink"/></a>

const ComingSoon = () => {
    const [title, setTitle] = useState("");

    return (
        <div className="container text-light">
            <div className="row">
                <div className="wrapper">
                    <h1>coming soon<span className="dot">.</span></h1>
                    <p>{title}</p>
                    <p>keep checking back</p>
                    <div className="icons">
                        <DisplayBubble/><DisplayBubble/><DisplayBubble/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;