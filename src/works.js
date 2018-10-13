import React from "react";
import styled from "styled-components";
import WorkItem from "./workItem";
import {sectionBlock, sectionTitle} from "./styleHelper";

const Base = styled.section`
    ${sectionBlock}
`;

const Title = styled.h1`
    ${sectionTitle}
`;

const Works = props => {
    return (
        <Base id="works">
            <Title>{props.title}</Title>
            <ul>
                {makeWorkItems(props.data)}
            </ul>
        </Base>
    );
};

export default Works;

function makeWorkItems(data) {
    const works = data.works;
    let result = [];
    Object.keys(works).forEach((work) => {
        result.push(<WorkItem key={work} title={works[work].title} category={works[work].category} />);
    });
    return result;
}
