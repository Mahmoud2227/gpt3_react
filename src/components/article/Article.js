import React from "react";
import classes from "./article.module.scss";

const Article = ({ imgUrl, date, title }) => {
    return (
        <div className={classes["gpt3__blog-container-article"]}>
            <div className={classes["gpt3__blog-container-article-image"]}>
                <img src={imgUrl} alt="article cover" />
            </div>
            <div className={classes["gpt3__blog-container-article-content"]}>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};

export default Article;
