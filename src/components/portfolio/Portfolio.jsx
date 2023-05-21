import { Portfolio, CenterText, H2, H3,
PortfolioContent, Box, Image, Div, H5,
Icon, H4 } from "./styled";
import pfolioImg1 from "../../assets/portfolio1.jpg"
import pfolioImg2 from "../../assets/portfolio2.jpg"
import pfolioImg3 from "../../assets/portfolio3.jpg"
import pfolioImg4 from "../../assets/portfolio4.jpg"
import pfolioImg5 from "../../assets/portfolio5.jpg"
import pfolioImg6 from "../../assets/portfolio6.jpg"
import { BiHeart } from "react-icons/bi"
import { useEffect } from "react";

export default function portfolio() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "25px",
            duration: 2500,
            reset: true
        })

        sr.reveal(".portfolio", {delay: 200, origin: "bottom"})
    }, [])

    return(
        <Portfolio className="portfolio" id="portfolio">
            <CenterText>
                <H2>My portfolio</H2>
                <H3>Some of my distinguished works</H3>
            </CenterText>

            <PortfolioContent>
                <Box>
                    <Image src={pfolioImg1} alt="Portfolio image 1"/>
                    <Div>
                        <H5>Development</H5>
                        <Icon>
                            <BiHeart/>
                        </Icon>
                    </Div>
                    <H4>Mobile app landing design & services</H4>
                </Box>

                <Box>
                    <Image src={pfolioImg2} alt="Portfolio image 2"/>
                    <Div>
                        <H5>Development</H5>
                        <Icon>
                            <BiHeart/>
                        </Icon>
                    </Div>
                    <H4>Mobile app landing design & services</H4>
                </Box>

                <Box>
                    <Image src={pfolioImg3} alt="Portfolio image 3"/>
                    <Div>
                        <H5>Development</H5>
                        <Icon>
                            <BiHeart/>
                        </Icon>
                    </Div>
                    <H4>Mobile app landing design & services</H4>
                </Box>

                <Box>
                    <Image src={pfolioImg4} alt="Portfolio image 4"/>
                    <Div>
                        <H5>Development</H5>
                        <Icon>
                            <BiHeart/>
                        </Icon>
                    </Div>
                    <H4>Mobile app landing design & services</H4>
                </Box>

                <Box>
                    <Image src={pfolioImg5} alt="Portfolio image 5"/>
                    <Div>
                        <H5>Development</H5>
                        <Icon>
                            <BiHeart/>
                        </Icon>
                    </Div>
                    <H4>Mobile app landing design & services</H4>
                </Box>

                <Box>
                    <Image src={pfolioImg6} alt="Portfolio image 6"/>
                    <Div>
                        <H5>Development</H5>
                        <Icon>
                            <BiHeart/>
                        </Icon>
                    </Div>
                    <H4>Mobile app landing design & services</H4>
                </Box>
            </PortfolioContent>
        </Portfolio>
    )
}