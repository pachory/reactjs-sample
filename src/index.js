import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import "minireset.css";
import Hero from "./hero";
import About from "./about";
import Works from "./works";

const App = () => {
    const worksObject = {
        title: "Works セクション タイトル",
        works: {
            work1: {
                title: "タイトル1",
                category: "カテゴリー1"
            },
            work2: {
                title: "タイトル2",
                category: "カテゴリー2"
            }
        }
    };

    return (
        <div className="App">
            <Header/>

            <Hero title="タイトル" subTitle="サブタイトル" />

            <About title="About セクション タイトル" description="about セクション 紹介文" />

            <Works data={worksObject} />

            <Footer />
        </div>
    )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
