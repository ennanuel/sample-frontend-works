import React from "react";

import { BsCheck } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

import { motion } from "framer-motion";

import visa_image from "../../assets/images/visa.png";

const DETAILS = [
    {
        title: "Paid Using",
        desc: "Visa Credit Card",
        images: [
        ]
    },
    {
        title: "Paid For",
        desc: "2 Boots, 3 Phones... (20 items)",
        images: [
            visa_image
        ]
    },
    {
        title: "Amount",
        desc: "$1,202.24",
        images: [
        ]
    }
];

const PAYMENTS = [
    {
        productName: "iPhone 16 Pro Max",
        price: "$1,0233.23"
    },
    {
        productName: "Wedding Dress",
        price: "$204.88"
    },
    {
        productName: "M&M - Dark Chocolate",
        price: "$10.05"
    },
    {
        productName: "iMac M4",
        price: "$2,200.23"
    }
]

export default function Success() {
    return (
        <div className="flex gap-6 mt-10 justify-center">
            <div className="flex w-full max-w-[600px] flex-col p-6 gap-4 bg-white border border-gray-200 rounded-lg">
                <motion.span initial={{ scale: 0 }} animate={{ scale: [0.6, 1.4, 1] }} transition={{ type: 'spring', damping: 5, stiffness: 100 }} className="flex items-center justify-center w-20 aspect-square rounded-full bg-green-400 text-green-100">
                    <BsCheck size={56} />
                </motion.span>
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-3xl">Success</h2>
                    <div className="text-gray-400 text-sm">Your payment has been processed successfully</div>
                </div>
                <ul className="flex flex-col mt-6 border-b border-gray-200">
                    {
                        DETAILS.map(({ title, desc, images }, index) => (
                            <li key={index} className="py-4 border-t border-gray-200 grid grid-cols-[100px,_1fr,_auto] gap-2 items-center">
                                <span className="text-gray-400 text-sm">{title}</span>
                                <span className="text-gray-600 text-sm flex-1 font-semibold">{desc}</span>
                                <div className="flex gap-2 items-center">
                                    {
                                        images.map((image, index1) => <img key={index1} src={image} className="h-2 w-auto object-contain" />)
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-4 flex gap-4">
                    <button className="flex flex-1 items-center justify-center px-4 h-10 rounded-md border border-purple-600 bg-white text-purple-600 hover:bg-purple-100 hover:border-purple-100">
                        <span className="font-semibold text-sm">Track order</span>
                    </button>
                    <button className="flex flex-[2] items-center justify-center gap-2 px-4 h-10 rounded-md border border-green-100 bg-green-100 hover:bg-green-200 text-green-600">
                        <span className="font-semibold text-sm">Continue shopping</span>
                        <FaArrowRight size={16} />
                    </button>
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3, delay: .2, eaes: 'easeInOut' }} className="flex-1 max-w-[400px] flex flex-col overflow-hidden">
                <div className="flex max-w- flex-1 py-2 flex-col border border-gray-200 bg-white rounded-lg rounded-b-none overflow-hidden">
                    <div className="p-6 px-8 flex justify-between items-end border-b border-gray-200">
                        <span className="font-bold text-lg">
                            <span className="text-purple-400">nox</span>
                            <span>Buy</span>
                            <span className="text-purple-400">.</span>
                        </span>
                        <span className="font-mono text-gray-500 text-sm">01-01-2024</span>
                    </div>
                    <div className="px-8 mt-4 flex flex-col">
                        <div className="flex items-center justify-between gap-4 py-3 border-b border-gray-300 border-dashed">
                            <span className="font-mono text-gray-400 text-xs uppercase">Description</span>
                            <span className="font-mono text-gray-400 text-xs uppercase">Subtotal</span>
                        </div>
                        <ul className="flex flex-col gap-4 mt-4">
                            {
                                PAYMENTS.map(({ productName, price }, index) => (
                                    <li key={index} className="flex items-center justify-between gap-4">
                                        <span className="text-xs font-mono text-gray-400">{productName}</span>
                                        <span className="text-sm font-mono font-semibold text-gray-500">{price}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <span className="flex items-end justify-between mt-4">
                            <span className="text-xs font-mono text-gray-400">Total</span>
                            <div className="text-xl font-mono font-semibold text-gray-500"><span className="text-xs">$</span>1,202.44</div>
                        </span>
                    </div>
                </div>
                <div className="relative flex px-8 py-6 border mt-[-2px] border-t-white border-gray-200 bg-white rounded-lg rounded-t-none before:absolute before:z-[1] before:top-0 before:left-0 before:w-8 before:aspect-square before:rounded-full before:bg-gray-100 before:border before:border-gray-200 before:-translate-y-1/2 before:-translate-x-1/2 after:absolute after:z-[1] after:top-0 after:right-0 after:w-8 after:aspect-square after:rounded-full after:bg-gray-100 after:border after:border-gray-200 after:-translate-y-1/2 after:translate-x-1/2">
                    <hr className="absolute top-0 left-0 w-full h-0 border-dashed border-t-[1px] border-[0px] border-gray-300" />
                    <span 
                        style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 5px, black 5px, black 15px, transparent 15px, transparent 18px, black 18px, black 20px, transparent 20px, transparent 25px, black 25px, black 35px, transparent 35px, transparent 40px, black 40px, black 44px, transparent 44px, transparent 50px, black 50px, black 52px, transparent 52px, transparent 54px, black 54px, black 60px)'
                        }} 
                        className="block h-20 w-full opacity-80"
                    ></span>
                </div>
            </motion.div>
        </div>
    )
}