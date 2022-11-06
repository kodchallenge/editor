import { useEffect } from "react";

const useClickAway = (elementRef: React.RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        const handleClickAway = (e: Event) => {
            e.preventDefault();
            if(elementRef && elementRef.current && !elementRef.current.contains(e.target as Node)) {
                callback();
            }
        }

        document.addEventListener("click", handleClickAway, true);

        return () => document.removeEventListener("click", handleClickAway, true);
    }, [elementRef, callback]);
}

export default useClickAway