import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import "minireset.css";
import "./styles.css";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="hero">
                <h1 className="hero-title">タイトル</h1>
                <p className="hero-description">サブタイトル</p>
            </div>

            <section className="section" id="about">
                <h1 className="section-title">About セクション タイトル</h1>
                <p className="aboutDescription">about セクション 紹介文</p>
            </section>

            <section className="section" id="works">
                <h1 className="section-title">Works セクション タイトル</h1>
                <ul>
                    <li className="workItem">
                        <img className="workItem-image" src="https://dummyimage.com/600x300/eee/ccc"/>
                        <h3 className="workItem-category">カテゴリー名</h3>
                        <h3 className="workItem-title">タイトル</h3>
                    </li>
                    <li className="workItem">
                        <img className="workItem-image" src="https://dummyimage.com/600x300/eee/ccc"/>
                        <h3 className="workItem-category">カテゴリー名</h3>
                        <h3 className="workItem-title">タイトル</h3>
                    </li>
                </ul>
            </section>

            <Footer/>
        </div>
    )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
