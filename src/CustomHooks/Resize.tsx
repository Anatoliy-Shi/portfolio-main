import {useEffect, useState} from "react";
import {Viewpoint} from "../variable/Viewpoint";

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [visibleLogo, setVisibleLogo] = useState(true)
    const [visibleSkills, setVisibleSkills] = useState(false)



    const HandleResize = (event:any) => {
        setWidth(event.target.innerWidth)
        if(window.innerWidth < Viewpoint.large) {
            setVisibleLogo(false)
        } if (window.innerWidth >= Viewpoint.large) {
            setVisibleLogo(true)
        } if(window.innerWidth >= Viewpoint.tablet) {
            setVisibleSkills(false)
        } if (window.innerWidth < Viewpoint.tablet) {
            setVisibleSkills(true)
        }
    }


    useEffect(() => {
        window.addEventListener('resize', HandleResize)
        return () => window.removeEventListener('resize', HandleResize)
    }, []);

    return {width, visibleLogo, visibleSkills}
}