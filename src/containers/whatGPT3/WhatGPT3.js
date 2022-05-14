import React from "react";
import { Feature } from "../../components";

import classes from "./whatGPT3.module.scss";

const WhatGPT3 = () => {
    const FeatureClasses = {
        main: classes["gpt3-features-container__feature"],
        text: classes["gpt3-features-container__feature-text"],
    };

    const featureProps = [
        {
            title: "What is GPT3?",
            text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
        },
        {
            title: "Chatbots",
            text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
        },
        {
            title: "Knowledgebase",
            text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
        },
        {
            title: "Education",
            text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
        },
    ];

    return (
        <div className={classes["whatgpt3"] + " section__margin"} id="wgpt3">
            <div className={classes["whatgpt3-feature"]}>
                <Feature
                    title={featureProps[0].title}
                    text={featureProps[0].text}
                    classNames={FeatureClasses}
                />
            </div>
            <div className={classes["whatgpt3-header"]}>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className={classes["whatgpt3-container"]}>
                {featureProps.slice(1).map((feature, i) => (
                    <Feature
                        key={feature.text + i}
                        title={feature.title}
                        text={feature.text}
                        classNames={FeatureClasses}
                    />
                ))}
            </div>
        </div>
    );
};

export default WhatGPT3;
