import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Health Services`;
    }, [title])
};

export default useTitle;