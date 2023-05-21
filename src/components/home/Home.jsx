import { Home, HomeText, H4, H1, H3, Button } from "./styled";

export default function home() {
    return(
        <Home id="home">
            <HomeText>
                <H4>Hello</H4>
                <H1>I'am Tahmid <br /> Ha<span>mim</span></H1>
                <H3>Front-End Developer</H3>
                <Button href="#" className="button">Hire me</Button>
            </HomeText>
        </Home>
    )
}