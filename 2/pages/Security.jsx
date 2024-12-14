import React, { useEffect, useMemo, useState } from "react";


let interval;

function convertNumberToTime(num) {
    const min = Math.floor(num/60);
    const sec = num % 60;
    const timeFormat = `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;

    return timeFormat;
}

export default function Security({ next }) {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timeNumber, setTimeNumber] = useState(180);
    const timeFormat = useMemo(() => convertNumberToTime(timeNumber), [timeNumber]);

    const handleChange = (value, index) => setOtp((prev) => {
        if(!/\d/.test(value)) return prev;

        const newValues = [...prev];
        newValues[index] = value[value.length - 1] ? value[value.length - 1] : '';

        if(index < 3) document.getElementById(`otp-${index + 1}`)?.focus();
        return newValues;
    });

    useEffect(() => {
        clearInterval(interval);

        interval = setInterval(() => {
            setTimeNumber((prev) => {
                const newValue = prev - 1;
                if(newValue <= 0) clearInterval(interval);
                return newValue > 0 ? newValue : 0;
            })
        }, 1000);
    }, [])

    return (
        <div className="flex flex-col w-max m-auto items-center gap-12 mt-10 p-6 rounded-xl bg-white border border-gray-200">
            <span className="font-bold text-xl"><span className="text-purple-400">nox</span>Buy<span className="text-purple-400">.</span></span>
            <div className="flex flex-col gap-2 -mt-4">
                <span className="font-semibold text-2xl text-center">Payment Verification</span>
                <span className="text-sm text-gray-400 text-center">We've sent a 4-digit OTP to your device.</span>
            </div>
            <div className="flex items-center gap-4">
                {
                    otp.map((value, index) => (
                        <input 
                            key={index}
                            id={`otp-${index}`}
                            value={value}
                            onChange={(event) => handleChange(event.target.value, index)}
                            type="text"
                            name="otp" 
                            className="no-range-input outline outline-gray-200 focus:outline-2 focus:outline-purple-300 bg-white rounded-xl aspect-square w-16 text-center text-xl"
                         />
                    ))
                }
            </div>
            {
                timeNumber > 0 ?
                    <span className="text-sm text-gray-500">Code expires in <b>{timeFormat}</b></span> :
                    <span className="text-sm text-gray-500">Code has expired <b className="span hover:underline hover:text-purple-400">resend it</b></span>
            }
            <div className="flex w-full flex-col gap-4 -mt-4">
                <button onClick={next} className="flex items-center justify-center gap-2 h-12 px-4 rounded-md bg-purple-600 border border-purple-600 text-white">
                    <span className="font-semibold">Verify</span>
                </button>
                <button className="flex items-center justify-center gap-2 h-12 px-4 rounded-md bg-white border border-purple-600 text-purple-600">
                    <span className="font-semibold">Resend OTP</span>
                </button>
            </div>
        </div>
    )
}