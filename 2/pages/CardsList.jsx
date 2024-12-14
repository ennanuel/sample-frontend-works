import React, { useMemo, useRef, useState } from "react";

import { FaAngleDown, FaArrowLeft, FaArrowRight, FaWallet } from "react-icons/fa6";
import { FcSimCardChip } from "react-icons/fc";
import { MdArrowRight, MdClose } from "react-icons/md";
import { SiVisa } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import { RiMastercardFill } from "react-icons/ri";

const CARDS = [
    {
        cardNumber: "1234 1234 1234 1234",
        expiryDate: "02/12",
        backgroundColor: "from-red-800 via-red-600 to-red-800",
        Cvv: 120,
        Icon: SiVisa,
        cardUserName: "Inoue Orihime"
    },
    {
        cardNumber: "4012 1233 3883 7654",
        expiryDate: "11/10",
        backgroundColor: "from-gray-600 via-gray-400 to-gray-600",
        Cvv: 746,
        Icon: SiVisa,
        cardUserName: "Kuchiki Rukia"
    },
    {
        cardNumber: "2038 1238 2389 2388",
        expiryDate: "08/22",
        backgroundColor: "from-blue-800 via-blue-600 to-blue-800",
        Cvv: 384,
        Icon: RiMastercardFill,
        cardUserName: "Kurosaki Ichigo"
    },
    {
        cardNumber: "8393 8899 3758 7378",
        expiryDate: "02/08",
        backgroundColor: "from-gray-900 via-gray-700 to-gray-900",
        Cvv: 733,
        Icon: RiMastercardFill,
        cardUserName: "Abarai Renji"
    }
]


export default function CardsList({ showCards, setShowCards, setCardDetails }) {
    const cardRef = useRef(null);

    const [cardIndex, setCardIndex] = useState(0);
    const transform = useMemo(() => `translateX(-${(cardIndex * (cardRef?.current?.offsetWidth + 16))}px)`, [cardIndex]);

    const next = () => setCardIndex(cardIndex + 1 < CARDS.length ? cardIndex + 1 : 0);
    const prev = () => setCardIndex(cardIndex - 1 >= 0 ? cardIndex - 1 : CARDS.length - 1);

    const chooseCard = (values) => {
        setCardDetails({ ...values, saved: true, choseSaved: true });
        setShowCards(false);
    }

    if(!showCards) return;

    return (
        <div className="relative w-full pt-4 border-t border-gray-200">
            <div className="flex flex-col gap-6 w-full animate-fadeIn">
                <div className="flex justify-between items-center gap-2">
                    <span className="flex flex-1 max-w-[360px] pr-2 rounded-md gap-2 text-gray-400 items-center bg-white border border-gray-200">
                        <input type="text" className="h-10 focus:outline-none flex-1 px-4 bg-transparent text-sm" placeholder="Search saved cards" />
                        <BiSearch size={18} />
                    </span>
                    <button onClick={() => setShowCards(false)} className="w-10 aspect-square rounded-md bg-white border border-white hover:border-red-200 hover:text-red-400 hover:bg-white flex items-center justify-center">
                        <MdClose size={18} />
                    </button>
                </div>
                <div className="flex-1 overflow-hidden relative flex flex-col gap-4 before:absolute before:z-10 before:top-0 before:right-0 before:w-1/4 before:h-full before:bg-gradient-to-l before:from-gray-100 before:via-gray-100/50 before:to-transparent before:pointer-events-none">
                    <li ref={cardRef} className="opacity-0 w-fit flex flex-col gap-2 p-4 pb-6 rounded-md">
                        <div className="flex justify-between gap-4">
                            <span className="uppercase text-xs font-semibold font-mono whitespace-nowrap">Credit card</span>
                            <span className="flex items-center justify-center h-[20px]">
                            </span>
                        </div>
                        <span className="h-[60px]"></span>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-3xl font-mono whitespace-nowrap">1234 1234 1234 1234</span>
                            <div className="flex justify-end items-center">
                                <span className="text-[.5rem] uppercase">Valid<br /> until</span>
                                <MdArrowRight size={16} />
                                <span className="font-mono font-semibold text-lg">01/33</span>
                            </div>
                        </div>
                        <span className="font-mono text-lg font-semibold uppercase">Ezema Emmanuel</span>
                    </li>
                    <div className="flex items-center justify-center gap-3 px-4">
                        {
                            CARDS.map((item, index) => (
                                <span key={index} className={`block ${index === cardIndex ? 'w-10 bg-purple-400' : 'w-2'} transition-[background-color] h-2 rounded-full border border-purple-400`}></span>
                            ))
                        }
                    </div>
                    <ul style={{ transform }} className="transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_0.3,_1)] w-full flex justify-start items-center absolute top-0 left-0 overflow-x-visible px-12 overflow-y-clip gap-4">
                        {
                            CARDS.map(({ backgroundColor, cardNumber, cardUserName, expiryDate, Cvv, Icon }, index) => (
                                <li className="p-1 rounded-lg border border-transparent hover:border-gray-400">
                                    <button key={index} onClick={() => chooseCard({ cardNumber, cardUserName, expiryDate, Cvv })} className={`cursor-pointer flex flex-col gap-2 bg-gradient-to-br ${backgroundColor ? backgroundColor : 'from-gray-600 via-gray-400 to-gray-600'} text-white p-4 rounded-md`}>
                                        <div className="w-full flex justify-between gap-4">
                                            <span className="uppercase text-xs font-semibold font-mono whitespace-nowrap">Credit card</span>
                                            <span className="flex items-center justify-center h-[20px]">
                                                <Icon size={30} />
                                            </span>
                                        </div>
                                        <FcSimCardChip size={60} />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-3xl font-mono whitespace-nowrap">{cardNumber}</span>
                                            <div className="flex justify-end items-center">
                                                <span className="text-[.5rem] uppercase">Valid<br /> until</span>
                                                <MdArrowRight size={16} />
                                                <span className="font-mono font-semibold text-lg">{expiryDate}</span>
                                            </div>
                                        </div>
                                        <span className="font-mono text-lg font-semibold uppercase">{cardUserName}</span>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <button onClick={prev} className="z-10 absolute top-1/2 left-0 -translate-y-1/2 w-10 aspect-square rounded-full border border-gray-300 bg-gray-100 hover:border-gray-400 hover:bg-white text-gray-500 hover:text-[#333333] shadow-md hover:shadow-none flex items-center justify-center transition-transform active:scale-75">
                        <FaArrowLeft size={16} />
                    </button>
                    <button onClick={next} className="z-10 absolute top-1/2 right-0 -translate-y-1/2 w-10 aspect-square rounded-full border border-gray3200 bg-gray-100 hover:border-gray-400 hover:bg-white text-gray-500 hover:text-[#333333] shadow-md hover:shadow-none flex items-center justify-center transition-transform active:scale-75">
                        <FaArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}