import React from "react";
import { Article } from "../../components";

import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

import classes from "./blog.module.scss";

const Blog = () => {
    const articleClasses = {
        main: classes["gpt3__blog-container-article"],
        image: classes["gpt3__blog-container-article-image"],
    };

    return (
        <div className={classes["gpt3__blog"] + " section__padding"} id="blog">
            <div className={classes["gpt3__blog-header"]}>
                <h1 className="gradient__text">
                    A lot is happening,
                    <br /> We are blogging about it.
                </h1>
            </div>
            <div className={classes["gpt3__blog-container"]}>
                <div className={classes["group1"]}>
                    <Article
                        imgUrl={blog01}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        styleClasses={articleClasses}
                    />
                </div>
                <div className={classes["group2"]}>
                    <Article
                        imgUrl={blog02}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        styleClasses={articleClasses}
                    />
                    <Article
                        imgUrl={blog03}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        styleClasses={articleClasses}
                    />
                    <Article
                        imgUrl={blog04}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        styleClasses={articleClasses}
                    />
                    <Article
                        imgUrl={blog05}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        styleClasses={articleClasses}
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
