import {css} from "styled-components";

export const colors = {
    black: "#1b1d28",
    gray: "#b6b6ba",
    green: "#4caf50"
};

export const poppins = css`
    font-family: "Poppins", sans-serif;
`;

export const sectionBlock = css`
    max-width: 630px;
    padding: 0 15px;
    margin: 32px auto;
`;

export const sectionTitle = css`
    color: ${colors.gray};
    font-size: 24px;
    ${poppins}
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 8px;
`;