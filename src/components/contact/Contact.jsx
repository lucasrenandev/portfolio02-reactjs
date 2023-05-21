import { Contact, ContactText, H2, H3, Paragraph, 
ContactList, List, Icons, Icon, ContactForm, 
InputName, InputEmail, InputSubject, 
TextArea, InputSubmit } from "./styled";
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaBehance } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaDribbble } from "react-icons/fa"

export default function contact() {
    return(
        <Contact id="contact">
            <ContactText>
                <H2>Contact me</H2>
                <H3>Let's work together</H3>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero doloremque inventore!</Paragraph>

                <ContactList>
                    <List>Mansoura - Dakahlia - Egypt</List>
                    <List>admin@example.com</List>
                    <List>01646895741</List>
                </ContactList>

                <Icons>
                    <Icon>
                        <FaLinkedinIn/>
                    </Icon>
                    <Icon>
                        <FaFacebookF/>
                    </Icon>
                    <Icon>
                        <FaBehance/>
                    </Icon>
                    <Icon>
                        <FaInstagram/>
                    </Icon>
                    <Icon>
                        <FaDribbble/>
                    </Icon>
                </Icons>
            </ContactText>

            <ContactForm>
                <InputName type="text" 
                placeholder="Enter your name" 
                autoComplete="none" 
                required/>

                <InputEmail type="email" 
                placeholder="Enter your email" 
                autoComplete="none" 
                required/>

                <InputSubject type="text" 
                placeholder="Enter your subject" 
                required/>

                <TextArea 
                cols={30} 
                rows={10} 
                placeholder="Enter your message" 
                required/>

                <InputSubmit type="submit" 
                value={"Submit"} />
            </ContactForm>
        </Contact>
    )
}