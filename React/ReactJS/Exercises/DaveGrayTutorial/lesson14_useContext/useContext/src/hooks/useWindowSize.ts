import { useState, useEffect } from "react";

type WindowSize = {
    width: number,
    height: number
};

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;