import { useEffect } from "react"
import { scrollonLoad } from "../utils"
import { useLocation } from "react-router-dom"

export const useScroll = () => {
    const location = useLocation();

    useEffect(() => {
        scrollonLoad();
    }, [location.key])
}