import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { Cta, Brand, Navbar } from "./components";
import "./App.scss";

function App() {
    return (
        <>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </>
    );
}

export default App;
