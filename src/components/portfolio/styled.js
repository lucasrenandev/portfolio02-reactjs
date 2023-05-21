import { styled } from "styled-components";

export const Portfolio = styled.section`

`
export const CenterText = styled.header`
    text-align: center;
`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.1;
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
export const PortfolioContent = styled.main`
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
export const Box = styled.main`
    background-color: var(--other-color);
    padding: 25px;
    border-radius: 8px;
    transition: all 0.45s ease;

    &:hover {
        transform: translateY(-6px) scale(1.01);
    }
`
export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem 0 1.5rem;
`
export const H5 = styled.h5`
    color: var(--main-color);
    font-size: 1rem;
    font-weight: 500;
`
export const Icon = styled.i`
    font-size: 20px;
`
export const H4 = styled.h4`
    font-size: 1.5rem;
    font-weight: 700;
`