import React from "react";
import "./feature.scss";

const Feature = ({ title, text, classNames }) => {
    if (classNames) {
        const { main: mainClass, text: textClass } = classNames;

        return (
            <div className={"gpt3-features-container__feature " + mainClass}>
                <div className="gpt3-features-container__feature-title">
                    <div />
                    <h1>{title}</h1>
                </div>
                <div className={"gpt3-features-container__feature-text " + textClass}>
                    <p>{text}</p>
                </div>
            </div>
        );
    }
};

export default Feature;
