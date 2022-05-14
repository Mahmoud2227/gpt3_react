import React from "react";
import classes from "./cta.module.scss";

const Cta = () => {
    return (
        <div className={classes["gpt3__cta"]}>
            <div className={classes["gpt3__cta-content"]}>
                <p>Request Early Access to Get Started</p>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </div>
            <div className={classes["gpt3__cta-btn"]}>
                <button type="button">Get Started</button>
            </div>
        </div>
    );
};

export default Cta;
