import { useEffect, useState } from "react";
import { ScrollArrow, Arrow } from "./styled";
import { FaArrowUp } from "react-icons/fa"

export default function scrollArrow() {
    const [arrow, setArrow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400) {
                setArrow(true)
            }
            else {
                setArrow(false)
            }
        })
    }, [])

    function scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <>
            {arrow && (
                <ScrollArrow onClick={scrollUp}>
                    <Arrow>
                        <FaArrowUp/>
                    </Arrow>
                </ScrollArrow>
            )}
        </>
    )
}   