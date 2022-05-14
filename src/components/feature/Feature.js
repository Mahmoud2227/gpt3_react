import React from "react";
import "./feature.scss";

const Feature = ({ title, text, classNames }) => {
    return (
        <div
            className={`gpt3-features-container__feature${classNames ? " " + classNames.main : ""}`}
        >
            <div className="gpt3-features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div
                className={`gpt3-features-container__feature-text ${
                    classNames ? " " + classNames.text : ""
                }`}
            >
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Feature;
