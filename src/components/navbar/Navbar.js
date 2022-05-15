import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.svg";
import classes from "./navbar.module.scss";

const Menu = () => (
    <>
        <p>
            <a href="#home">Home</a>
        </p>
        <p>
            <a href="#wgpt3">What is GPT3?</a>
        </p>
        <p>
            <a href="#possibility">Open AI</a>
        </p>
        <p>
            <a href="#features">Case Studies</a>
        </p>
        <p>
            <a href="#blog">Library</a>
        </p>
    </>
);

const Navbar = () => {
    const [open, setIsOpen] = useState(false);

    return (
        <div className={classes.gpt3__navbar + " section__padding"}>
            <div className={classes["gpt3__navbar-links"]}>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className={classes["gpt3__navbar-links-container"]}>
                    <Menu />
                </div>
            </div>
            <div className={classes["gpt3__navbar-sign"]}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className={classes["gpt3__navbar-menu"]}>
                {open ? (
                    <RiCloseLine color="#fff" size={27} onClick={() => setIsOpen(false)} />
                ) : (
                    <RiMenu3Line color="#fff" size={27} onClick={() => setIsOpen(true)} />
                )}
                {open && (
                    <div className={classes["gpt3__navbar-menu-container"] + " scale-up-center"}>
                        <div className={classes["gpt3__navbar-menu-container-links"]}>
                            <Menu />
                        </div>
                        <div className={classes["gpt3__navbar-menu-container-sign"]}>
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
