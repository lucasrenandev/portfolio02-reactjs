import { styled } from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 16%;
    transition: all 0.4s ease;

    &.sticky {
        background-color: var(--bg-color);
        padding: 14px 16%;
        border-bottom: 1px solid #0e1630;

        @media (max-width: 1340px) {
            padding: 12px 2%;
        }
    }

    @media (max-width: 1340px) {
        padding: 16px 2%;
    }    
`
export const Logo = styled.a`
    img {
        width: 134px;
        height: auto;
    }
`
export const NavBar = styled.nav`
    @media (max-width: 960px) {
        position: absolute;
        top: -500px;
        left: 0;
        right: 0;
        width: 100%;
        height: auto;
        background-color: #111;
        transition: top 0.40s ease;

        &.active {
            top: 100%;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media (max-width: 960px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const List = styled.li`
    margin: 0 3px;

    .nav-link {
        color: var(--second-color);
        padding: 10px 23px;
        font-size: var(--p-font);
        font-weight: 600;
        text-transform: capitalize;
        background-color: transparent;
        border-radius: 8px;
        transition: all 0.4s ease;

        &:hover {
            background-color: var(--main-color);
            color: var(--text-color);
            border-radius: 8px;
        }

        @media (max-width: 960px) {
            display: block;
            padding: 1rem;
            
            &:hover {
                background-color: transparent;
            }
        }
    }

    @media (max-width: 960px) {
        width: 100%;
        margin: 1rem 0;
        padding: 0;
    }
`
export const MenuIcon = styled.i`
    font-size: 36px;
    z-index: 1001;
    cursor: pointer;
    display: none;

    @media (max-width: 960px) {
        display: inline-flex;
        align-items: center;
    }
`