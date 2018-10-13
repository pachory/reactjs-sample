import React from "react";
import styled from "styled-components";
import {sectionBlock, sectionTitle} from "./styleHelper";

const Base = styled.section`
    ${sectionBlock}
`;

const Title = styled.h1`
    ${sectionTitle}
`;

const Description = styled.p`
    font-size: 14px;
    line-height: 1.8;
`;

const About = props => {
    return (
        <Base id="about">
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </Base>
    );
};

export default About;
