import { Services, CenterText, H2, H3,
ServicesContent, Box, Image, Paragraph } from "./styled";
import serviceImg1 from "../../assets/serv1.png"
import serviceImg2 from "../../assets/serv2.png"
import serviceImg3 from "../../assets/serv3.png"
import { useEffect } from "react";

export default function services() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "25px",
            duration: 2500,
            reset: true
        })

        sr.reveal(".services", {delay: 200, origin: "bottom"})
    }, [])

    return(
        <Services className="services" id="services">
            <CenterText>
                <H2>My services</H2>
                <H3>Better design, better experiences</H3>
            </CenterText>

            <ServicesContent>
                <Box>
                    <Image src={serviceImg1} alt="Service image 1"/>
                    <h4>Mobile app design</h4>
                    <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam consectetur asperiores sunt molestias saepe ipsa totam veritatis animi repellendus nulla?</Paragraph>
                </Box>

                <Box>
                    <Image src={serviceImg2} alt="Service image 2"/>
                    <h4>Website design</h4>
                    <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam consectetur asperiores sunt molestias saepe ipsa totam veritatis animi repellendus nulla?</Paragraph>
                </Box>

                <Box>
                    <Image src={serviceImg3} alt="Service image 3"/>
                    <h4>Video editing</h4>
                    <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam consectetur asperiores sunt molestias saepe ipsa totam veritatis animi repellendus nulla?</Paragraph>
                </Box>
            </ServicesContent>
        </Services>
    )
}