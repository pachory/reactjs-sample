import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import "minireset.css";
import Hero from "./hero";
import About from "./about";
import Works from "./works";
import styled from "styled-components";
import {colors} from "./styleHelper";
import {BrowserRouter, Route} from "react-router-dom";

const Base = styled.div`
    font-family: sans-serif;
    color: ${colors.black};
`;

const Home = () => {
    const worksObject = makeWorksObject();
    return (
        <div>
            <Hero title="タイトル" subTitle="サブタイトル" />
            <About title="About セクション タイトル" description="about セクション 紹介文" />
            <Works data={worksObject} />
        </div>
    );
};

const Contact = () => {
    return (
        <Hero title="コンタクト" subTitle="サブタイトル" />
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <Base>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Footer />
            </Base>
        </BrowserRouter>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function makeWorksObject() {
    return {
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
}
