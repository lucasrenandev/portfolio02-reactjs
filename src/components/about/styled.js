import { styled } from "styled-components";

export const About = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;
    gap: 3rem;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`
export const AboutImage = styled.figure`
    @media (max-width: 960px) {
        text-align: center;
    }
`
export const Image = styled.img`
    width: 433px;
    max-width: 100%;
    height: auto;
`
export const AboutText = styled.main`

`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.2;
`
export const H3 = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    margin: 15px 0 10px;
    color: var(--main-color);

    @media (max-width: 700px) {
        font-size: 1.2rem;
    }
`
export const Paragraph = styled.p`
    color: var(--second-color);
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.8;
`
export const AboutList = styled.ul`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`
export const List = styled.li`
    font-size: var(--p-font);
    font-weight: 600;
    text-transform: capitalize;
`
export const Button = styled.a`

`