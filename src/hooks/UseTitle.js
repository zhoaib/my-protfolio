import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Zhoaib Hassan`;
    }, [title])
};
export default useTitle;