import { useEffect } from "react"
import { scrollonLoad } from "../utils/scroll"
import { useLocation } from "react-router-dom"

export const useScroll = () => {
    const location = useLocation();

    useEffect(() => {
        scrollonLoad();
    }, [location.key])
}