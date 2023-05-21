import { About, AboutImage, Image,
AboutText, H2, H3, Paragraph, AboutList,
List, Button } from "./styled";
import aboutImg from "../../assets/about.png"

export default function about() {
    return(
        <About id="about">
            <AboutImage>
                <Image src={aboutImg} alt="About image"/>
            </AboutImage>

            <AboutText>
                <H2>About me</H2>
                <H3>Hi, i'm here to help your next project</H3>
                <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam modi eveniet aut numquam possimus nulla voluptates non sequi ad. Porro, ullam saepe? Itaque assumenda earum tempora eos autem error. Molestias!</Paragraph>

                <AboutList>
                    <List>1. Problem solving</List>
                    <List>2. Creative idea</List>
                    <List>3. Search a lot</List>
                    <List>4. High quality</List>
                </AboutList>

                <Button href="#" className="button">Contact me</Button>
            </AboutText>
        </About>
    )
}