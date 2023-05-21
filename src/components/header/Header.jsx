import { Header, Logo, NavBar, 
NavList, List, MenuIcon } from "./styled";
import logo from "../../assets/logo.png"
import { HashLink as Link } from "react-router-hash-link";
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { useEffect, useRef, useState } from "react";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>)
    const headerRef = useRef(null)
    const navRef = useRef(null)

    function toggleMenu() {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(<IoClose/>)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            headerRef.current.classList.toggle("sticky", window.scrollY > 0)
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        })
    }, [])

    return(
        <Header ref={headerRef}>
            <Logo href="/">
                <img src={logo} alt="Logo" />
            </Logo>

            <NavBar ref={navRef}>
                <NavList>
                    <List>
                        <Link className="nav-link" smooth to={"#home"}>Home</Link>
                    </List>
                    <List>
                        <Link className="nav-link" smooth to={"#about"}>About me</Link>
                    </List>
                    <List>
                        <Link className="nav-link" smooth to={"#services"}>Services</Link>
                    </List>
                    <List>
                        <Link className="nav-link" smooth to={"#portfolio"}>My portfolio</Link>
                    </List>
                    <List>
                        <Link className="nav-link" smooth to={"#contact"}>Contact</Link>
                    </List>
                </NavList>
            </NavBar>

            <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>
        </Header>
    )
}