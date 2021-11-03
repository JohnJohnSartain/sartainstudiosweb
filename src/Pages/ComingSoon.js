import React from "react";
import "./ComingSoon.css"

const Bubble = () => <a href=""><i className="fas fa-smile-wink"/></a>

export default () =>
    <div className="container text-light">
        <div className="row">
            <div className="wrapper">
                <h1>coming soon<span className="dot">.</span></h1>
                <p>{""}</p>
                <p>keep checking back</p>
                <div className="icons">
                    <Bubble/><Bubble/><Bubble/>
                </div>
            </div>
        </div>
    </div>