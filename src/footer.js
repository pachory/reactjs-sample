import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
    font-size: 12px;
    text-align: center;
    padding: 16px 0;
    background-color: #1b1d28;
    color: white;
`;

const Footer = () => {
    return (
        <Foot>
            フッター
        </Foot>
    )
};

export default Footer;
