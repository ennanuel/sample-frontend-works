import React, { useState, useMemo } from "react";


import { BiSearch } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleDown, FaArrowLeft } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { RiThumbUpLine } from "react-icons/ri";
import { TbCreditCardPay, TbPaywall } from "react-icons/tb";

import { v4 as generateId } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

import Main from "./pages/Main.jsx";
import Security from "./pages/Security.jsx";
import Success from "./pages/Success.jsx";


const CHECKOUT_STEPS = [
    {
        Icon: TbCreditCardPay, 
        title: "Choose payment"
    },
    {
        Icon: TbPaywall,
        title: "Authenticate"
    },
    {
        Icon: RiThumbUpLine,
        title: "All done"
    }
];

const STEPS = [
    Main,
    Security,
    Success
]

export default function App() {
    const [{ loading, step }, setStep] = useState({ loading: false, step: 0 });
    const CurrentStepElement = useMemo(() => STEPS[step]);

    const changeStep = (num) => {
        setStep({ 
            step: Number(num) >= 0 ? num : step + 1, 
            loading: true 
        });
        setTimeout(() => setStep((prev) => ({ ...prev, loading: false })), 2000);
    }

    return (
        <div style={{ '--max-width': '1128px' }} className="bg-gray-100 text-[#333333] min-h-screen w-full flex flex-col items-center gap-8">
            <header className="sticky top-0 z-[999] w-full bg-white border-b border-gray-200">
                <div className="max-w-[var(--max-width)] py-2 px-4 m-auto w-full flex justify-between gap-4 items-center">
                    <span className="flex items-center tracking-tighter font-bold text-lg">
                        <span className="text-purple-400">nox</span>
                        <span>Buy</span>
                        <span className="text-purple-400">.</span>
                    </span>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center border border-gray-200 w-full max-w-[480px] rounded-md overflow-hidden">
                            <input className="flex-1 text-sm h-10 bg-transparent px-4 py-1 focus:outline-none" placeholder="Search product" type="text" />
                            <button className="flex items-center justify-center aspect-sqare rounded-[4px] w-8 mr-1 aspect-square bg-purple-400 text-white">
                                <BiSearch size={18} />
                            </button>
                        </span>
                        <button className="relative bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center gap-2 p-1 pr-4">
                            <span className="flex w-8 rounded-md bg-gray-200 aspect-square items-center justify-center">
                                <IoCartOutline size={18} />
                            </span>
                            <span className="flex flex-col whitespace-nowrap">
                                <span className="font-semibold text-xs">My cart</span>
                                <span className=" rounded-full text-[.65rem] text-gray-400">10 items</span>
                            </span>
                        </button>
                        <button className="flex px-3 h-10 rounded-md bg-gray-100 hover:bg-gray-200 items-center justify-center gap-3">
                            <FiUser size={18} />
                            <FaAngleDown size={12} />
                        </button>
                    </div>
                </div>
            </header>
            <div className="w-full max-w-[var(--max-width)] px-4">
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 -ml-14">
                        <span className="w-10 hover:bg-gray-200 aspect-square rounded-full flex items-center justify-center">
                            <FaArrowLeft size={20} />
                        </span>
                        <h1 className="text-4xl font-bold">Product Checkout</h1>
                    </div>
                    <div 
                        style={{ '--scale-x': step === 1 ? '0.5' : step === 2 ? '1' : '0' }} 
                        className="relative mt-12 grid grid-cols-3 w-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-[1px] before:bg-gray-300 after:absolute after:top-1/2 after:left-0 after:origin-left after:transition-transform after:duration-1000 after:-translate-y-1/2 after:scale-x-[var(--scale-x)] after:w-full after:h-[2px] after:bg-purple-300 after:rounded-full"
                    >
                        {
                            CHECKOUT_STEPS.map(({title, Icon}, index, arr) => (
                                <span className={`flex ${index >= 1 && index < (arr.length - 1) ? 'justify-center' : index === (arr.length - 1) ? 'justify-end' : 'justify-start'}`}>
                                    <button onClick={() => changeStep(index)} key={index} className={`relative z-[1] p-1 w-fit flex items-center gap-2 rounded-md border ${index <= step ? 'border-purple-300 bg-white text-purple-400 transition-[border-color] duration-300' : 'border-gray-300 bg-white text-gray-400' }`}>
                                        <span className={`w-6 aspect-square flex items-center justify-center rounded-[4px] text-sm font-bold ${index <= step ? 'bg-purple-100 transition-[background-color] duration-300' : 'bg-gray-100 text-gray-400'}`}>
                                            <Icon size={16} />
                                        </span>
                                        <span className="text-xs font-semibold whitespace-nowrap mr-3">{index + 1}. {title}</span>
                                    </button>
                                </span>
                            ))
                        }
                    </div>
                    <AnimatePresence mode="wait">
                        {
                            loading ?
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} onExit={{ opacity: 0 }} transition={{ duration: .3, ease: "easeInOut" }} key={generateId()} className="flex flex-col gap-6 items-center justify-center mt-10 p-40">
                                    <span className="flex gap-3 justify-center items-center">
                                        <span className="w-6 aspect-square rounded-full border border-purple-400 bg-purple-100 animate-[pulse_1s_ease_infinite]"></span>
                                        <span className="w-6 aspect-square rounded-full border border-purple-400 bg-purple-100 animate-[pulse_1s_ease_300ms_infinite]"></span>
                                        <span className="w-6 aspect-square rounded-full border border-purple-400 bg-purple-100 animate-[pulse_1s_ease_600ms_infinite]"></span>
                                    </span>
                                    <span className="font-semibold text-sm text-gray-400">Please wait...</span>
                                </motion.span> :
                                CurrentStepElement ?
                                    <motion.div key={generateId()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} onExit={{ opacity: 0 }} transition={{ duration: .3, ease: "easeInOut" }}> 
                                        <CurrentStepElement next={changeStep} />
                                    </motion.div> : 
                                    null
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}