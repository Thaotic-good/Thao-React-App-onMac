import {useState} from "react";

function RedPillBluePillChoice() {
    const [message, setMessage] = useState('I am tired.');

    return (
        <div>
            <div className="message-style">{message}</div>
            <button className="blue-pill" onClick={() => setMessage('Hello, world!')}>Expectations button</button>
            <button className="red-pill" onClick={() => setMessage('I am tired.')}>Reality button</button>
        </div>
    );
}

export default RedPillBluePillChoice