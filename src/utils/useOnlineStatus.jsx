import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatue, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(false);
        })

    }, [])
    return onlineStatue;
}

export default useOnlineStatus;