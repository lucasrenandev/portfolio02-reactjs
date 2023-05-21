import { styled } from "styled-components";

export const Contact = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2rem;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`
export const ContactText = styled.main`

`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.1;
`
export const H3 = styled.h3`
    color: var(--main-color);
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: capitalize;
    margin: 1rem 0;

    @media (max-width: 700px) {
        font-size: 1.2rem;
    }
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    color: var(--second-color);
    line-height: 1.8;
`
export const ContactList = styled.ul`
    margin-top: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`
export const List = styled.li`
    color: var(--second-color);
    font-size: var(--p-font);
    font-weight: 600;
    transition: all 0.45s ease;

    &:hover {
        color: var(--main-color);
        transform: translateY(-6px);
    }
`
export const Icons = styled.div`
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
`
export const Icon = styled.i`
    background-color: var(--other-color);
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: var(--main-color);
    transition: all 0.45s ease;

    &:hover {
        background-color: var(--main-color);
        color: var(--text-color);
        transform: translateY(-6px) scale(1.01);
        cursor: pointer;
    }
`
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    input, textarea {
        background-color: var(--other-color);
        border: none;
        outline: none;
        border-radius: 8px;
        padding: 18px 16px;
        font-size: 15px;
        font-weight: 600;
        color: var(--text-color);

        &::placeholder {
            color: var(--second-color);
            font-size: 15px;
            font-weight: 500;
            text-transform: capitalize;
        }
    }
`
export const InputName = styled.input`
    margin-bottom: 8px;
`
export const InputEmail = styled.input`
    margin-bottom: 8px;
`
export const InputSubject = styled.input`
    margin-bottom: 8px;
`
export const TextArea = styled.textarea`
    height: 220px;
    resize: none;
`
export const InputSubmit = styled.input`
    max-width: 170px;
    margin-top: 12px;
    cursor: pointer;
`