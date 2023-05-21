import { useEffect } from "react";
import { Home, HomeText, H4, H1, H3, Button } from "./styled";

export default function home() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "25px",
            duration: 2500,
            reset: true
        })

        sr.reveal(".home-text", {delay: 190, origin: "bottom"})
    }, [])

    return(
        <Home id="home">
            <HomeText className="home-text">
                <H4>Hello</H4>
                <H1>I'am Tahmid <br /> Ha<span>mim</span></H1>
                <H3>Front-End Developer</H3>
                <Button href="#" className="button">Hire me</Button>
            </HomeText>
        </Home>
    )
}