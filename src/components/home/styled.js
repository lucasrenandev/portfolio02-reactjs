import { styled } from "styled-components";
import background from "../../assets/background.jpg"

export const Home = styled.section`
    height: 100vh;
    background: url(${background}) no-repeat center center / cover;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;

    @media (max-width: 1340px) {
        height: 80vh;
    }
`
export const HomeText = styled.main`

`
export const H4 = styled.h4`
    color: var(--main-color);
    font-size: 1.5rem;
    font-weight: 600;

    @media (max-width: 700px) {
        font-size: 1.3rem;
    }
`
export const H1 = styled.h1`
    font-size: var(--big-font);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 2px;
    margin: 1rem 0;

    span {
        color: var(--main-color);
    }
`
export const H3 = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;

    @media (max-width: 700px) {
        font-size: 1.3rem;
    }
`
export const Button = styled.a`

`