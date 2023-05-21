import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Quicksand", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    :root {
        --bg-color: #020312;
        --text-color: #fff;
        --main-color: #eb4a4a;
        --second-color: #808080;
        --other-color: #12141c;
        --big-font: 5.2rem;
        --h2-font: 3.5rem;
        --p-font: 1.1rem;

        @media (max-width: 960px) {
            --big-font: 4.2rem;
            --h2-font: 3rem;
        }

        @media (max-width: 700px) {
            --big-font: 3rem;
            --h2-font: 2.4rem;
        }
    }

    #root {
        min-height: 100vh;
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    section {
        width: 100%;
        padding: 100px 16% 90px;

        @media (max-width: 1340px) {
            padding: 90px 2% 80px;
        }
    }

    .button {
        display: inline-block;
        margin-top: 3rem;
        background-color: var(--main-color);
        border: 1px solid transparent;
        padding: 13px 38px;
        border-radius: 8px;
        color: var(--text-color);
        font-size: var(--p-font);
        font-weight: 500;
        text-transform: capitalize;
        transition: all 0.4s ease;

        &:hover {
            background-color: transparent;
            border: 1px solid var(--main-color);
            transform: translateY(-6px) scale(1.01);
        }
    }

`