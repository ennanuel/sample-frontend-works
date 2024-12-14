import React, { useState } from "react";

import { BsCreditCard2Front } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { RiCoupon2Fill } from "react-icons/ri";

import { motion } from "framer-motion";

import CardsList from "./CardsList.jsx";

import paypal_image from "../../assets/images/paypal.png";
import visa_image from "../../assets/images/visa.png";
import mastercard_image from "../../assets/images/mastercard.png";
import verve_image from "../../assets/images/verve.png";
import google_pay_image from "../../assets/images/g-pay.webp";
import cash_image from "../../assets/images/money.png";
import payment_cancel_image from "../../assets/images/failed_payment.jpg";

const PAYMENT_OPTIONS = [
    {
        title: "Paypal",
        images: [
            paypal_image
        ]
    },
    {
        title: "Credit card",
        images: [
            visa_image,
            mastercard_image,
            verve_image
        ]
    },
    {
        title: "Google pay",
        images: [
            google_pay_image
        ]
    },
    {
        title: "Cash on delivery",
        images: [
            cash_image
        ]
    }
];

const ITEMS = [
    {
        name: "Used Nikon D3100 with 18-55mm Lens",
        quantity: 2,
        price: "$1,003.85"
    },
    {
        name: "108MP Rear Camera Amoled Display",
        quantity: 10,
        price: "$104.53"
    }
]


export default function Main({ next }) {
    const [showCoupon, setShowCoupon] = useState(false);
    const [showCards, setShowCards] = useState(false);
    const [{ cardUserName, cardNumber, expiryDate, Cvv, saved }, setCardDetails] = useState({ cardUserName: "", cardNumber: "", expiryDate: "", Cvv: "", saved: false, choseSaved: false });

    function formatAndEditCardValue({ field, fieldValue, maxLength, seperatingNum, joiner }) {
        const value = fieldValue.replace(/\D/g, '');
        const numberGroups = [];

        if (value.length > maxLength) return;

        for(let i = 0; i < maxLength && i < value.length; i+= seperatingNum) {
            const numberGroup = [];
            for(let j = 0; j < seperatingNum; j ++) numberGroup.push("");
            numberGroups.push(numberGroup);
        };

        for(let i = 0; i < value.length; i++) {
            const index = Math.floor(i / seperatingNum);
            const subIndex = i % seperatingNum;
            numberGroups[index][subIndex] = value[i];
        };

        const newValue = numberGroups.map(numberGroup => numberGroup.join("")).join(joiner).replace(/\s+$/, '');

        setCardDetails(prev => ({ ...prev, [field]: newValue, saved: prev.choseSaved ? false : prev.saved }));
    }

    const handleChange = (event) => {
        if (!event.target) return;
        
        switch(event.target.id) {
            case "cardNumber":
                formatAndEditCardValue({ field: "cardNumber", fieldValue: event.target.value, maxLength: 16, seperatingNum: 4, joiner: " " });
                break;
            case 'expiryDate':
                formatAndEditCardValue({ field: "expiryDate", fieldValue: event.target.value, maxLength: 4, seperatingNum: 2, joiner: "/" });
                break;
            default:
                if(event.target.id === "Cvv" && event.target.value.length > 3) return;
                setCardDetails(prev => ({ ...prev, [event.target.id]: event.target.value, choseSaved: false, saved: prev.choseSaved ? false : prev.saved }));
        }
    }

    return (
        <div className="my-10 grid grid-cols-[2fr,_1fr] grid-rows-[1fr,_auto] gap-6">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 bg-white border border-gray-200 rounded-lg p-4 md:p-6">
                    <div className="flex flex-col gap-1">
                        <h2 className="capitalize text-xl font-semibold">Select payment option</h2>
                        <div className="text-sm text-gray-400">All transactions are secure and encrypted</div>
                    </div>
                    <ul className="flex flex-col gap-4 mt-2">
                        {
                            PAYMENT_OPTIONS.map(({ title, images }, index) => (
                                <li key={index} className={`${title === 'Credit card' ? 'bg-gray-100' : '' } p-4 flex flex-col rounded-md border border-gray-200 hover:border-gray-400`}>
                                    <div className="flex gap-4 items-center">
                                        <input type="radio" checked={title === 'Credit card'} className="relative w-4 aspect-square appearance-none rounded-full bg-white before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:border before:rounded-full before:border-gray-300 checked:before:border-2 checked:before:border-purple-400 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1/2 after:h-1/2 after:rounded-full after:bg-purple-400 after:opacity-0 checked:after:opacity-100" />
                                        <span className="font-semibold flex-1">{title}</span>
                                        <div className="flex items-center gap-2">
                                            {
                                                images.map((image, index2) => (<img key={index2} src={image} className={`${index === 2 ? 'h-4' : index === 3 ? 'h-6' : 'h-3'} w-auto object-contain`} />))
                                            }
                                        </div>
                                    </div>
                                    <div className={`${title === 'Credit card' ? 'flex' : 'hidden'} mt-1 flex-col gap-4`}>
                                        <span className="text-xs px-8 text-gray-500">Pay securely using your Visa, Mastercard, or Verve Card.</span>
                                        <div className="flex flex-col gap-4 pt-6 border-t border-gray-300">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-xs font-semibold">Card Number</span>
                                                <span className="flex items-center rounded-md bg-white border border-gray-200">
                                                    <input 
                                                        type="text"
                                                        id="cardNumber" 
                                                        value={cardNumber} 
                                                        onChange={handleChange} 
                                                        placeholder="1234 1234 1234 1234" 
                                                        className="bg-transparent text-sm flex-1 px-4 min-h-10 focus:outline-none" 
                                                    />
                                                    {
                                                        !showCards ? 
                                                            <button onClick={() => setShowCards(true)} title="Show saved cards" className="flex items-center justify-center w-8 m-1 aspect-square rounded-full text-gray-400 hover:text-inherit hover:bg-gray-100">
                                                                <BsCreditCard2Front size={18} className="" />
                                                            </button> :
                                                            null
                                                    }
                                                    
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-[2fr,_1fr,_1fr] gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-xs font-semibold">Name on card</span>
                                                    <input type="text" placeholder="John Doe" id="cardUserName" value={cardUserName} onChange={handleChange} className={`${cardUserName.length > 0 && 'uppercase'} w-full block min-h-10 rounded-md border border-gray-200 bg-white text-sm flex-1 px-4`} />
                                                </div>
                                                <div className="w-full flex flex-col gap-2">
                                                    <span className="text-xs font-semibold">Expiry date</span>
                                                    <input type="text" placeholder="MM/YY" id="expiryDate" value={expiryDate} onChange={handleChange} className="w-full block min-h-10 rounded-md border border-gray-200 bg-white text-sm flex-1 px-4" />
                                                </div>
                                                <div className="w-full flex flex-col gap-2">
                                                    <span className="text-xs font-semibold">CVV</span>
                                                    <input type="number" placeholder="CVV" id="Cvv" value={Cvv} onChange={handleChange} className="w-full block min-h-10 rounded-md border border-gray-200 bg-white text-sm flex-1 px-4" />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <input type="checkbox" id="save_details" checked={saved} onChange={() => setCardDetails(prev => ({ ...prev, saved: !saved }))} className="-mb-[2px] accent-purple-400" />
                                                <label htmlFor="save_details" className="text-xs">Save card details</label>
                                            </div>
                                        </div>
                                        <CardsList showCards={showCards} setShowCards={setShowCards} setCardDetails={setCardDetails} />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <button onClick={next} className="h-12 rounded-md bg-purple-600 text-purple-100 hover:bg-white hover:text-purple-600 border border-purple-600 flex items-center justify-center px-4 gap-2 text-sm font-semibold">
                        <span>Pay</span>
                        <span>|</span>
                        <span>$1,202.24</span>
                    </button>
                    <span className="flex -mt-2 items-center justify-center gap-2">
                        <input type="checkbox" id="agree" className="checked:accent-purple-400 text-white" />
                        <label htmlFor="agree" className="text-xs">By clicking this, I agree to noxBuy's <b className="text-purple-600">Terms and Conditions</b> and <b className="text-purple-600">Privacy Policy</b></label>
                    </span>
                </div>
                <div className="bg-white p-6 flex flex-col border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-lg">Cancelation policy</h3>
                    <div className="flex justify-between items-center gap-4 -mt-4">
                        <p className="text-xs text-gray-500 max-w-[80ch]">At <b><span className="text-purple-400 mt-4">nox</span>Buy<span className="text-purple-400">.</span></b> we understand that plans can change unexpectedly, that's why we've crafted our cancelation policy to help you with flexibility and peace of mind. When you book a call with us, you have the freedom to modify your reservation without incurring any cancelation fees up to 12 hours/day before your schedule pick-up time.</p>
                        <img src={payment_cancel_image} className="w-[120px] aspect-square object-cover" alt="" />
                    </div>
                    <a href="#" className="font-semibold text-purple-600 hover:underline text-sm">See more details</a>
                </div>
            </div>

            <div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3, duration: .3 }} className="relative p-[1px] rounded-[12px] bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200">
                    <div className="relative z-10 w-full h-full rounded-[11px] flex flex-col gap-4 bg-white/80 p-6 backdrop-blur-lg">
                        <div className="flex items-center justify-between gap-4">
                            <span className="text-xl font-semibold">Your cart</span>
                            <span className="py-1 px-2 rounded-md bg-purple-100 text-purple-400 font-mono font-semibold">10</span>
                        </div>
                        <ul className="flex flex-col gap-2 justify-start flex-1 py-4 border-y border-gray-200 overflow-x-auto">
                            {
                                ITEMS.map(({ name, quantity, price }, index) => (
                                    <li key={index} className="bg-white/80 rounded-md flex gap-3 p-2">
                                        <img className="block h-16 aspect-square rounded-md bg-black/10" />
                                        <div className="flex flex-col justify-between gap-2">
                                            <div className="flex flex-col">
                                                <p>
                                                    <span className="text-xs block font-semibold truncate max-w-[200px] text-gray-500">{name}</span>
                                                </p>
                                                <span className="text-xs text-gray-400">Qty: {quantity}</span>
                                            </div>
                                            <span className="text-sm font-semibold">{price}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-4 p-3 rounded-md bg-white">
                                <span className="font-semibold text-sm">Order summary</span>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex justify-between items-center gap-4">
                                        <span className="text-xs text-gray-400">Subtotal</span>
                                        <span className="text-xs font-semibold text-gray-600">$1,1200.00</span>
                                    </li>
                                    <li className="flex justify-between items-center gap-4">
                                        <span className="text-xs text-gray-400">Shipping</span>
                                        <span className="text-xs font-semibold text-gray-600">Free</span>
                                    </li>
                                    <li className="flex justify-between items-center gap-4">
                                        <span className="text-xs text-gray-400">Tax</span>
                                        <span className="text-xs font-semibold text-gray-600">$102.24</span>
                                    </li>
                                </ul>
                                <span className="flex justify-between">
                                    <span className="text-sm text-gray-500">Total</span>
                                    <span className="text-sm font-semibold">$1,202.24</span>
                                </span>
                            </div>
                            {
                                showCoupon ?
                                    <div className="flex items-center justify-between gap-2">
                                        <input type="text" placeholder="Enter coupon code" className="min-h-10 border border-black/10 block flex-1 bg-white px-3 rounded-md text-sm" />
                                        <button className="min-h-10 px-6 items-center justify-center text-purple-600 bg-purple-100 border border-purple-100 hover:border-purple-400 rounded-md">
                                            <span className="text-sm font-semibold pb-2">Apply</span>
                                        </button>
                                    </div> :
                                    <button onClick={() => setShowCoupon(true)} className="w-full flex items-center gap-2 px-3 h-10 rounded-md bg-white text-purple-400 border border-white hover:border-purple-400">
                                        <RiCoupon2Fill size={18} className="" />
                                        <span className="flex-1 text-sm text-left font-semibold">Use coupon code</span>
                                        <FaAngleDown size={14} />
                                    </button>
                            }
                        </div>
                    </div>
                </motion.div> 
            </div>
        </div>
    )
}