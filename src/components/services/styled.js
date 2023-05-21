import { styled } from "styled-components";

export const Services = styled.section`

`
export const CenterText = styled.header`
    text-align: center;
`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.2;
    margin-bottom: 10px;
`
export const H3 = styled.h3`
    color: var(--main-color);
    font-size: 1.4rem;
    font-weight: 600;

    @media (max-width: 700px) {
        font-size: 1.2rem;
    }
`
export const ServicesContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-top: 4.5rem;

    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    }
`
export const Box = styled.div`
    background-color: var(--other-color);   
    padding: 50px 30px;
    border-top: 4px solid transparent;
    transition: all 0.45s ease;

    h4 {
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: capitalize;
        margin: 1rem 0 1.4rem;
    }
    &:hover {
        transform: translateY(-6px) scale(1.01);
        border-top: 4px solid var(--main-color);
    }
    &:hover h4 {
        color: var(--main-color);
    }
`
export const Image = styled.img`
    width: 45px;
    height: auto;
`
export const Paragraph = styled.p`
    color: var(--second-color);
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.8;
`