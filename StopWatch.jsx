import React, { useEffect, useState } from 'react'
import "./Style.css"

function StopWatch() {
    const [time, setTime] = useState({
        hours: "0",
        minutes: "0",
        seconds: "0",

    });
    const [timerId, setTimerId] = useState(null);

    const statrtStopWatch = () => {
        if (timerId) clearInterval(timerId);
        let tId = setInterval(() => {
            setTime(({ hours, minutes, seconds }) => {
                seconds = (seconds + 1) % 60;
                minutes = seconds === 0 ? (minutes + 1) % 60 : minutes;
                hours = seconds === 0 && minutes === 0 ? (hours + 1) % 60 : hours;
                return { hours, minutes, seconds };
            });
        }, 1000);
        setTimerId(tId);
    };
    const stopStopWatch = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(null);
        }

    };

    const resetStopWatch = () => {
        stopStopWatch();
        setTime({ hours: 0, minutes: 0, seconds: 0 });

    }

    useEffect(() => {
        return () => {
            if (timerId) clearInterval(timerId);
        }
    }, [timerId])

    return (
        <div className='stop-watch'>
            <h1> My StopWatch</h1>
            <p>{`${time.hours < 10 ? "0" : ""}${time.hours}:${time.minutes < 10 ? "0" : ""}${time.minutes}:${time.seconds < 10 ? "0" : ""}${time.seconds}`}</p>
            <button onClick={statrtStopWatch}>Start</button>
            <button onClick={stopStopWatch}>Stop</button>
            <button onClick={resetStopWatch}>Reset</button>
        </div>
    )
}

export default StopWatch