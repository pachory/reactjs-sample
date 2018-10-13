import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import "minireset.css";
import "./styles.css";
import WorkItem from "./workItem";

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
                    <WorkItem title="タイトル1" category="カテゴリー1"/>
                    <WorkItem title="タイトル2" category="カテゴリー2"/>
                </ul>
            </section>

            <Footer/>
        </div>
    )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
