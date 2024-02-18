import React, {useState, useEffect} from "react";

/*API simulation with a function = will randomly return a true every 5000 ms
possible to substitute with mock data from Mirage to call an API for real
setUseState function will update the status whenever it changes
UI will be a gray or green dot*/
function OnlineStatusChecker(){
    const [isOnline, SetIsOnline] = useState(false)

    const fetchOnlineStatus = () => {
        return Math.random() < 0.5
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            /*we create an identifier interval, so we can remove it later, setInterval is a native function*/
            SetIsOnline(fetchOnlineStatus());
        }, 5000)
        return ()=> clearInterval(interval)
    }, []);
    return (
        <>
            <div className="status-container">
                <span>User is currently {isOnline ? "online. " : "offline. "}</span>
                <div className="status-dot" style={{"backgroundColor": isOnline ? "green" : "gray"}}></div>
            </div>
        </>

    )
}

export default OnlineStatusChecker