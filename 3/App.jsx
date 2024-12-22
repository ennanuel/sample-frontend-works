import React, { useEffect, useMemo, useRef, useState } from "react";

import { FaArrowLeft, FaArrowRight, FaStaylinked } from "react-icons/fa6";
import { FiDownload, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { HiOutlineArrowNarrowDown, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiArrowLongRight, HiOutlineDocumentChartBar } from "react-icons/hi2";
import { IoIosTrendingUp } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { PiHandDepositLight, PiHandWithdraw, PiMoneyLight } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RxTokens } from "react-icons/rx";
import { SiEthereum } from "react-icons/si";
import { TbBrandGoogleAnalytics, TbCurrencyBitcoin } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";

import { cubicBezier, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

import { asset_15, asset_16, asset_18, asset_19, asset_7, asset_9, asset_17, asset_21 } from "../assets/images/crypto-page/index.js";


const MENU = [
    {
        title: "Home"
    },
    {
        title: "Features"
    },
    {
        title: "Tokens"
    },
    {
        title: "Companies"
    },
];

const SOCIAL_LINKS = [
    {
        title: "Twitter",
        Icon: FiTwitter
    },
    {
        title: "Instagram",
        Icon: FiInstagram
    },
    {
        title: "Facebook",
        Icon: FiFacebook
    },
    {
        title: "LinkedIn",
        Icon: FiLinkedin
    },
];

const ABOUT_TEXT = [
    "Step",
    "into",
    "the",
    "groundbreaking",
    "future",
    "of",
    "finance",
    "right_arrow",
    "with",
    "the",
    "analytics_icon",
    "revolutionary",
    "era",
    "of",
    "cryptocurrency.",
    "Explore",
    "cutting-edge",
    "currency_icon",
    "technologies",
    "that",
    "redefine",
    "financial",
    "independence",
]

const TOKEN_STEPS = [
    {
        title: "Deposit",
        Icon: PiHandDepositLight
    },
    {
        title: "Autocompound",
        Icon: RxTokens
    },
    {
        title: "Withdraw",
        Icon: PiHandWithdraw
    },
    {
        title: "Earn rewards",
        Icon: PiMoneyLight
    }
];

const WHY_CHOOSE_US = [
    {
        title: "Cross Chain & Multi-Chain",
        desc: "Allow your assets to seamlessly move within and between the Blockchains. Using Smart Contract security means that there is no itermediary between human or machine.",
        gradient: "#fd9d07 10px, #fd02d9 60px, #85258f 120px, transparent 210px",
        image: asset_17,
    },
    {
        title: "Baskets",
        desc: "Our aggregated index baskets offer a simple and easy-to-earn rewards by offering liquidity to our pools.",
        gradient: "#bff27e 30px, #66aa91 60px, #415d92 120px, transparent 210px",
        image: asset_16,
    },
    {
        title: "Simplicity",
        desc: "Our platform is easy to use and offers users many options to earn rewards on your assets. We have removed the complexities of DeFi.",
        gradient: "#d4cf95 30px, #11cfed 60px, #0f2eac 120px, transparent 210px",
        image: asset_15,
    },
    {
        title: "Fiat On and Off Ramping",
        desc: "Getting started is easy. We accept deposits from your bank accounts, PayID, credit card or digital wallet. If you don't have a digital wallet, we can create one for you in two easy steps.",
        gradient: "#cffdff 10px, #0d59d1 60px, #083992 120px, transparent 210px",
        image: asset_18,
    },
];

const EASE = [.16, 1, .3, 1];

function generateRadialBackground({ steps, spacing, colors, position } = { steps: 10, spacing: 2, colors: { main: [255, 255, 255, 1], inBetween: "transparent" } , position: { x: '0', y: '0' } }) {
    const backgrounds = [];

    for(let i = 0; i < steps; i++) {
        const colorPercentage = Math.max(0.2, (i / steps).toFixed(2));
        const start = ((Math.pow(i, spacing) / Math.pow(steps, spacing)) * 100).toFixed(2);
        const end = ((Math.pow(i + 1, spacing) / Math.pow(steps, spacing)) * 100).toFixed(2);

        const rgbaColors = colors.main.map((color, index) => index < 3 ? Math.floor(Number(colorPercentage) * color) : color).slice(0, 4).join(", ");
        const background = `${colors.inBetween} ${start}%, ${colors.inBetween} calc(${end}% - 1px), rgba(${rgbaColors}) calc(${end}% - 1px), rgba(${rgbaColors}) ${end}%`;
        backgrounds.push(background);
    };

    const result = `radial-gradient(circle at ${position.x} ${position.y}, ${backgrounds.join(', ')})`;
    return result;
};

function AboutTextComponent ({ item, index, itemsLength, progress }) {
    const start = index / itemsLength;
    const end = (index + 1) / itemsLength;
    const property = item === 'right_arrow' ?
        useTransform(progress, [start, end], ['-101%', '0%'], { ease: cubicBezier(.16, 1, .3, 1) }) :
        item === "analytics_icon" || item === "currency_icon" ?
            useTransform(progress, [start, end], [0, 1], { ease: cubicBezier(.16, 1, .3, 1) }) :
            useTransform(progress, [start, end], [0.5, 1], { ease: cubicBezier(.16, 1, .3, 1) });

    return item === "right_arrow" ?
        <span className="relative ml-2 mr-4 inline-block w-16">
            <span className="absolute bottom-0 left-0 w-full h-8 overflow-hidden flex justify-end items-end">
                <motion.span style={{ x: property }} className="w-full pb-2 flex items-end">
                    <span className="relative block w-full h-[2px] bg-gradient-to-l from-white to-white/50 rounded-full before:absolute before:top-1/2 before:origin-bottom-right before:-translate-y-1/2 before:right-0 before:w-4 before:h-[2px] before:rounded-full before:bg-white before:rotate-[30deg] after:absolute after:top-1/2 after:origin-bottom-right after:-translate-y-1/2 after:right-0 after:w-4 after:h-[2px] after:rounded-full after:bg-white after:rotate-[-30deg]" />
                </motion.span>
            </span>
        </span> :
        item === "analytics_icon" ?
            <span className="inline-block ml-2 mr-4 relative w-20">
                <motion.div style={{ scale: property }} className="absolute bottom-0 left-0 w-full h-8 rounded-full bg-white/20 flex items-center justify-center -mb-1">
                    <TbBrandGoogleAnalytics size={16} />
                </motion.div>
            </span> :
            item === "currency_icon" ?                                          
                <span className="inline-block ml-2 mr-4 relative w-20">
                    <motion.div style={{ scale: property }} className="absolute bottom-0 left-0 w-full h-8 rounded-full bg-gradient-to-r from-white/20 to-white/10 flex items-center justify-center -mb-1">
                        <TbCurrencyBitcoin size={18} />
                    </motion.div>
                </span> :
                <motion.span style={{ opacity: property }} className="inline-block">{item}&nbsp;</motion.span>
}

export default function App() {
    const imageXPosition = useMotionValue(0);
    const imageYPosition = useMotionValue(0);

    const [hideHeader, setHideHeader] = useState(false);

    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const imageRef = useRef(null);
    const footerRef = useRef(null);

    const { scrollYProgress: introScrollYProgress } = useScroll({ 
        target: introRef,
        offset: ["end start", "start end"]
    });
    const { scrollYProgress: aboutScrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["40vh end", "end 100vh"]
    });
    const { scrollYProgress: footerScrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start start", "end -30vh"]
    });

    const blobImageScale = useTransform(introScrollYProgress, [1, 0], [1, 0.3], { ease: cubicBezier(.16, 1, .3, 1 ) });
    const blobImageTransform1 = useTransform(introScrollYProgress, [1, 0], [0, -200], { ease: cubicBezier(.16, 1, .3, 1) });
    const blobImageOpacity = useTransform(introScrollYProgress, [1, 0], [1, 0], { ease: cubicBezier(.16, 1, .3, 1) });

    const buttonTransform = useTransform(introScrollYProgress, [1, .2], [0, -50], { ease: cubicBezier(.16, 1, .3, 1) });
    const buttonOpacity = useTransform(introScrollYProgress, [1, .2], [1, 0], { ease: cubicBezier(.16, 1, .3, 1) });

    const footerImageLeftTransform = useTransform(footerScrollYProgress, [1, 0], [0, -200], { ease: cubicBezier(.16, 1, .3, 1) });
    const footerImageRightTransform = useTransform(footerScrollYProgress, [1, 0], [0, 100], { ease: cubicBezier(.16, 1, .3, 1) });
    const footerOpacity = useTransform(footerScrollYProgress, [1, 0], [1, 0], { ease: cubicBezier(.16, 1, .3, 1) });
    const footerTransformY = useTransform(footerScrollYProgress, [.5, 0], [0, 200], { ease: cubicBezier(.16, 1, .3, 1) });
    const footerScale = useTransform(footerScrollYProgress, [1, 0], [1, .9], { ease: cubicBezier(.16, 1, .3, 1) });

    const handleMouseMove = (event) => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();

        const imageCenterX = rect.left + (rect.width / 2);
        const imageCenterY = rect.top + (rect.height / 2);

        const x = (event.clientX - imageCenterX) / 10;
        const y = (event.clientY - imageCenterY) / 10;

        imageXPosition.set(x);
        imageYPosition.set(y);
    };

    const resetImagePosition = () => {
        imageXPosition.set(0);
        imageYPosition.set(0);
    }

    useEffect(() => {
        const lenis = new Lenis();
        
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
        window.scrollY = 0;
    }, []);

    return (
        <div style={{ '--max-width': '1148px' }} className="min-h-screen">
            <header className={`${hideHeader ? '' : 'bg-black/5 backdrop-blur-md'} transition-[background-color,_backdrop-filter] duration-300 sticky top-0 w-full z-[999999] flex items-center justify-center`}>
                <div className="min-w-[var(--max-width)] flex gap-4 py-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: EASE, delay: .1 }}
                        className={`${hideHeader ? 'translate-y-[-200%]' : 'translate-y-[0%]'} transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_.3,_1)] flex items-center gap-2 flex-1`}
                    >
                        <FaStaylinked size={30} />
                        <span className="text-lg tracking-tighter font-bold">NoxChange</span>
                    </motion.div>
                    <div className="flex-1 flex items-center justify-center">
                        <motion.ul 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, ease: EASE, delay: .2 }}
                            className="p-1 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/5 rounded-full"
                        >
                            {
                                MENU.map(({ title }, index) => (
                                    <motion.li 
                                        key={index} 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 2, ease: EASE, delay: .4 + (index/10) }}
                                        className={`rounded-full flex items-center justify-center h-8 px-4 gap-2 border ${index === 0 ? 'bg-white/10 border-white/5 text-white' : 'text-white/60 border-white/10 hover:text-white/80 hover:bg-white/5 transition-[background-color]'}`}
                                    >
                                        <span className="font-semibold text-xs">{title}</span>
                                    </motion.li>
                                ))
                            }
                        </motion.ul>
                    </div>
                    <div className={`${hideHeader ? 'translate-y-[-200%]' : 'translate-y-[0%]'} transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_.3,_1)] flex-1 flex justify-end items-center gap-2`}>
                        <motion.button 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, ease: EASE, delay: .3 }}
                            className="flex items-center justify-center px-6 h-10 rounded-full hover:bg-white/10 text-white/60 border border-white/20">
                            <span className="text-xs font-poppins tracking-tight">Login</span>
                        </motion.button>
                        <motion.button 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, ease: EASE, delay: .35 }}
                            className="p-[1px] h-10 flex rounded-full bg-gradient-to-b from-white/50 to-white/20 text-white/80"
                        >
                            <span className="relative overflow-hidden flex h-full w-full items-center justify-center gap-2 px-6 rounded-full bg-black before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4/5 before:h-1/4 before:bg-gradient-to-t before:from-white/50 before:to-white before:rounded-[50%] before:blur-md after:absolute after:top-0 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-[10%] after:rounded-full after:bg-white/80 after:blur-md">
                                <span className="text-xs relative font-poppins tracking-tight">Create Account</span>
                                <MdOutlineArrowOutward size={16} className="relative" />
                            </span>
                        </motion.button>
                    </div>
                </div>
            </header>
            <div className="relative z-[1] max-w-[var(--max-width)] m-auto">
                <motion.section 
                    ref={introRef} 
                    onViewportEnter={() => setHideHeader(false)} 
                    onViewportLeave={() => setHideHeader(true)} 
                    className="overflow-clip relative min-h-[calc(100vh_-_60px)] flex flex-col gap-20 py-12"
                >
                    <motion.div 
                        style={{ 
                            y: blobImageTransform1, 
                            scale: blobImageScale, 
                            opacity: blobImageOpacity 
                        }} 
                        className="fixed top-0 left-0 w-screen h-screen"
                    >
                        <motion.img
                            src={asset_19} 
                            initial={{ scale: .5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: EASE }}
                            viewport={{ once: true }}
                            alt="" 
                            className="h-full w-full max-w-[var(--max-width)] m-auto blur-md" 
                        />
                    </motion.div>
                    <div className="relative flex justify-between gap-4 items-center">
                        <div className="flex items-center gap-4">
                            <motion.span 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: .5, ease: EASE, delay: .1 }} 
                                viewport={{ once: true }}
                                className="relative block w-[120px] h-0 border-none before:absolute before:top-0 before:left-0 before:w-full before:aspect-square before:bg-gradient-to-b before:from-white/50 before:to-transparent before:rounded-tl-[30px] after:absolute after:top-[1px] after:left-[1px] after:w-full after:aspect-square after:bg-black after:rounded-tl-[30px]" 
                            />
                            <ul className="flex items-center gap-2">
                                {
                                    SOCIAL_LINKS.map(({ Icon }, index) => (
                                        <motion.li 
                                            key={index} 
                                            initial={{ x: '50%', opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 2, ease: EASE, delay: 0.3 + (index/10) }}
                                            viewport={{ once: true }}
                                            className="flex items-center justify-center w-10 aspect-square rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white/80"
                                        >
                                            <Icon size={18} />
                                        </motion.li>
                                    ))
                                }
                            </ul>
                        </div>
                        <p className="text-lg font-light tracking-tight text-left">
                            <span className="inline-block overflow-clip text-white/50">
                                <motion.span
                                    initial={{ y: '-100%' }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 2, ease: EASE, delay: .4 }}
                                    viewport={{ once: true }}
                                    className="block"
                                >Join the movement</motion.span>
                            </span> <br />
                            <span className="inline-block overflow-clip text-white/80">
                                <motion.span
                                    initial={{ y: '-100%' }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 2, ease: EASE, delay: .5 }}
                                    viewport={{ once: true }}
                                    className="block"
                                >Towards decentralization</motion.span>
                            </span>
                        </p>
                    </div>
                    <h2 className="relative tracking-tight uppercase font-light text-[6rem] leading-[6.2rem] ml-4">
                        {
                            "Dive into a new era of crypto currency"
                                .split(" ")
                                .map((word, index, words) => (
                                    <span key={index} className="inline-block">
                                        {
                                            word.split("").map((letter, subIndex) => (
                                                <span key={subIndex}  className="inline-block overflow-clip">
                                                    <motion.span
                                                        initial={{ opacity: 0 }} 
                                                        animate={{ opacity: 1 }} 
                                                        transition={{ 
                                                            duration: 2, 
                                                            ease: [.3, 1, .16, 1], 
                                                            delay: index > 0 ? 
                                                                (words.slice(0, index).reduce((sum, prevWord) => sum + prevWord.length, 0) + subIndex) / 50 : 
                                                                subIndex / 50 
                                                        }}
                                                        viewport={{ once: true }}
                                                        className="block"
                                                    >
                                                        {letter}
                                                    </motion.span>
                                                </span>
                                            ))
                                        }
                                        <span>&nbsp;</span>
                                    </span>
                                ))
                        }
                    </h2>
                    <div className="relative flex flex-col gap-20 pl-[240px]">
                        <div className="flex justify-between gap-16">
                            <p className="tracking-tight max-w-[60ch] leading-[1.3rem] text-sm">
                                {
                                    [
                                        "Embark on an unprescendented journey with the future of insurance with the new era of cyptocurrency.",
                                        "Discover innovative blockchain technologies during financial freedom and security."
                                    ].map((words, index, arr) => (
                                        <span key={index} className={`${index !== 0 ? 'text-white/80' : 'text-gray-400'}`}>
                                            {
                                                words.split(" ").map((word, subIndex) => (
                                                    <span key={subIndex} className="inline-block overflow-hidden">
                                                        <motion.span 
                                                            className="inline-block" 
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ 
                                                                duration: 2, 
                                                                ease: EASE, 
                                                                delay: .6 + (
                                                                    index > 0 ?
                                                                        (arr.slice(0, index).reduce((sum, prevWords) => sum + prevWords.split(" ").length, 0) + subIndex) / 25 :
                                                                        (subIndex/25)
                                                                )
                                                            }}
                                                            viewport={{ once: true }}
                                                        >{word}</motion.span>
                                                        <span>&nbsp;</span>
                                                    </span>
                                                ))
                                            }
                                            <span>&nbsp;</span>
                                        </span>
                                    ))
                                }
                            </p>
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: .5, ease: EASE, delay: .1 }}
                                viewport={{ once: true }}
                                className="relative flex justify-end items-center gap-2 pr-20 before:absolute before:bottom-1/2 before:right-0 before:w-full before:aspect-video before:rounded-br-[30px] before:bg-gradient-to-b before:from-transparent before:to-white/30 after:absolute after:bottom-[calc(50%_+_1px)] after:right-[1px] after:w-full after:aspect-video after:rounded-br-[30px] after:bg-black"
                            >
                                <ul className="bg-black relative z-10 flex items-center justify-end gap-2 px-4">
                                    {
                                        ["1st", "2nd", "3rd"].map((item, index, items) => (
                                            <motion.li 
                                                key={index} 
                                                initial={{ x: '-50%', opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 2, ease: EASE, delay: 0.6 + ((Math.abs(index - (items.length - 1)))/10) }}
                                                viewport={{ once: true }}
                                                className={`w-8 aspect-square rounded-full ${item === "1st" ? 'bg-white/20 border-transparent text-white/80' : 'bg-white/10 text-white/50' } flex items-center justify-center`}
                                            >
                                                <span className="text-xs tracking-tight font-light font-poppins">{item}</span>
                                            </motion.li>
                                        ))
                                    }
                                </ul>
                            </motion.ul>
                        </div>
                        <motion.div style={{ opacity: buttonOpacity, y: buttonTransform }}>
                            <button className="group w-fit flex items-center justify-center gap-4 hover:translate-y-2 transition-[transform,_opacity] duration-500 ease-[cubic-bezier(.16,_1,_.3,_1)]">
                                <motion.span 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ duration: 2, ease: EASE, delay: 1 }}
                                    viewport={{ once: true }}
                                    className="text-lg font-light font-poppins"
                                >scroll down</motion.span>
                                <motion.span 
                                    initial={{ scale: .5, opacity: 0 }} 
                                    animate={{ scale: 1, opacity: 1 }} 
                                    transition={{ duration: 2, ease: EASE, delay: 1.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-center justify-center w-12 aspect-square rounded-full border border-white/50 transition-[background-color] bg-white group-hover:bg-transparent group-hover:text-white text-black"
                                >
                                    <HiOutlineArrowNarrowDown size={20} />
                                </motion.span>
                            </button>
                        </motion.div>
                    </div>
                </motion.section>
                <div className="relative flex items-center gap-20">
                    <div className="flex-1 h-10">
                        <ul className="relative w-full h-full overflow-clip flex items-center before:absolute before:z-10 before:top-0 before:left-0 before:h-full before:w-20 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:z-10 after:top-0 after:right-0 after:h-full after:w-20 after:bg-gradient-to-l after:from-black after:to-transparent">
                            {
                                ["private key", "sustainable return", "top 100 Crypto app", "1000B & no withdrawal limit"].map((item, index, items) => (
                                    <li 
                                        key={index} 
                                        style={{ 
                                            animationDuration: '20s',
                                            animationDelay: `-${((index / items.length) * 20).toFixed(2)}s`,
                                            width: `${Math.round(100 + ((1 / items.length) * 100))}%`
                                        }} 
                                        className="animation-drag-left absolute left-full top-0 text-white/60 block h-full w-full gap-2 text-lg"
                                    >
                                        <span 
                                            style={{ 
                                                width: `${(1 / items.length) * 100}%`
                                            }}
                                            className="h-full border border-white/20 rounded-full flex items-center justify-center"
                                        >
                                            <span className="text-sm whitespace-nowrap tracking-tight font-inter font-light">{item}</span>
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <button className="p-[1px] h-10 flex rounded-full bg-gradient-to-r from-white/50 to-white/20 text-white/80">
                        <span className="relative overflow-hidden flex h-full w-full items-center justify-center gap-2 p-2 pr-6 rounded-full bg-black before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/50 before:to-white/20 before:rounded-[50%] before:blur-md after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-4/5 after:rounded-full after:bg-white/30 after:blur-md">
                            <span className="relative flex items-center justify-center w-6 aspect-square rounded-full bg-white/20">
                                <FiDownload size={14} />
                            </span>
                            <span className="text-xs relative font-poppins tracking-tight">Get started</span>
                        </span>
                    </button>
                </div>
                <section ref={aboutRef} className="relative py-20 h-[200vh]">
                    <div className="sticky top-0 py-20 flex items-center justify-center min-h-screen">
                        <div className="flex items-start justify-center w-full gap-20">
                            <span className="px-6 h-10 flex items-center justify-center w-fit rounded-full text-white/50 border border-white/20 lowercase text-sm">
                                <span className="flex items-center justify-center overflow-hidden">
                                    <motion.span 
                                        initial={{ y: '100%' }} 
                                        whileInView={{ y: 0 }} 
                                        transition={{ duration: 1, ease: EASE, delay: .2 }} 
                                        className="block"
                                    >About</motion.span>
                                </span>
                            </span>
                            <div className="flex flex-col items-center gap-20">
                                <h2 className="text-4xl text-center font-light tracking-tight">
                                    {
                                        ABOUT_TEXT.map((item, index, items) => (
                                            <AboutTextComponent 
                                                key={index} 
                                                progress={aboutScrollYProgress} 
                                                item={item} 
                                                index={index} 
                                                itemsLength={items.length} 
                                            />
                                        ))
                                    }
                                </h2>
                                <motion.button 
                                    initial={{ y: '100%' }} 
                                    whileInView={{ y: 0 }} 
                                    transition={{ duration: 1, ease: EASE }} 
                                    viewport={{ once: true }} 
                                    className="p-[1px] h-10 w-fit flex rounded-full bg-gradient-to-r from-white/50 to-white/20 text-white/80"
                                >
                                    <span className="relative overflow-hidden flex h-full w-full items-center justify-center gap-2 p-2 pl-6 rounded-full bg-black before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/50 before:to-white/20 before:rounded-[50%] before:blur-md after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-4/5 after:rounded-full after:bg-white/30 after:blur-md">
                                        <span className="text-xs relative font-poppins tracking-tight">Discover more</span>
                                        <span className="relative flex items-center justify-center w-6 aspect-square rounded-full bg-white/20">
                                            <MdOutlineArrowOutward size={14} />
                                        </span>
                                    </span>
                                </motion.button>
                            </div>
                            <span className="px-6 opacity-0 py-2 rounded-full text-white/50 border border-white/20 lowercase text-sm">About</span>
                        </div>
                    </div>
                </section>
                <section className="relative min-h-screen flex flex-col py-10 gap-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-[3.5rem] tracking-tight font-light">
                            {
                                "Features & benefits"
                                    .split(" ")
                                    .map((word, index, words) => (
                                        <span key={index} className="inline-block">
                                            {
                                                word.split("").map((letter, subIndex) => (
                                                    <motion.span 
                                                        key={subIndex}
                                                        initial={{ opacity: 0 }} 
                                                        whileInView={{ opacity: 1 }} 
                                                        transition={{
                                                            duration: 1, 
                                                            ease: EASE, 
                                                            delay: index > 0 ? 
                                                                ((words.slice(0, index).reduce((sum, prevWord) => sum + prevWord.length, 0)) + subIndex) / 40 :
                                                                subIndex / 40
                                                        }}
                                                        viewport={{ once: true }}
                                                        className="inline-block"
                                                    >{letter}</motion.span>
                                                ))
                                            }
                                            &nbsp;
                                        </span>
                                    ))
                            }
                        </h2>
                        <div className="flex items-center gap-4">
                            <span className="text-[4rem] font-light">{"/"}</span>
                            <p className="text-sm text-white/50 max-w-[50ch] mt-4 tracking-tight">
                                {
                                    "Experience the power of decentralized finance, offering global accessibility and finance autonomy."
                                        .split(" ")
                                        .map((word, index) => (
                                            <motion.span 
                                                key={index}
                                                initial={{ opacity: 0 }} 
                                                whileInView={{ opacity: 1 }} 
                                                transition={{ duration: 1, ease: EASE, delay: (3 + index) / 25 }}
                                                viewport={{ once: true }}
                                                className="inline-block"
                                            >{word}&nbsp;</motion.span>
                                        ))
                                }
                            </p>
                        </div>
                    </div>
                    <div className="sticky top-0 h-screen pt-[100px] mt-[-100px] mb-2">
                        <div className="flex justify-between items-center gap-4">
                            <ul className="flex items-center gap-2">
                                {
                                    ["networking", "tokenization support" ,"training", "analysis"].map((item, index) => (
                                        <li>
                                            <button className={`p-[1px] h-10 flex rounded-full ${index === 0 ? 'bg-gradient-to-b from-white/50 to-white/20 text-white/80' : 'bg-white/20 text-white/50'}`}>
                                                <span className="relative overflow-hidden px-6 flex h-full w-full items-center justify-center gap-2 rounded-full bg-black">
                                                    <span className="text-sm font-light relative whitespace-nowrap font-poppins tracking-tight">{item}</span>
                                                    {index === 0 ? <IoIosTrendingUp size={16} /> : null}
                                                </span>
                                            </button>
                                        </li>
                                    ))
                                }
                                <li>
                                    <button className="ml-6 py-1 border-b border-white flex items-center justify-center gap-2">
                                        <span className="text-sm">See cases</span>
                                        <HiOutlineArrowNarrowRight size={16} />
                                    </button>
                                </li>
                            </ul>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center justify-center w-8 aspect-square rounded-full bg-white text-black">
                                    <FaArrowLeft size={16} />
                                </button>
                                <button className="flex items-center justify-center w-8 aspect-square rounded-full bg-white/50 text-black">
                                    <FaArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-[2fr,_1fr,_1fr] gap-2 mt-[calc(-100vh_+_180px)]">
                        <div className="pt-0">
                            <div className="sticky top-[180px] min-h-[calc(100vh_-200px)] px-6 py-4 flex flex-col rounded-[30px] border border-white/10 bg-black">
                                <span className="font-light text-2xl tracking-tight">01.</span>
                                <div className="flex-1 flex items-center justify-between">
                                    <span className="flex-1"></span>
                                    <div className="flex flex-col relative before:absolute before:top-1/2 before:-translate-y-1/2 before:right-20 before:z-[10] before:w-40 before:h-[1px] before:bg-gradient-to-l before:from-white/10 before:via-white/20 before:to-white/10">
                                        <span className="relative w-20 flex aspect-square rounded-full p-[1px] bg-gradient-to-br from-white/20 to-white/5 before:absolute before:top-[calc(50%_-_1px)] before:right-full before:w-1/2 before:h-[64px] before:rounded-tl-[30px] before:bg-gradient-to-b before:from-white/20 before:to-white/10 after:absolute after:top-1/2 after:right-full after:w-[calc(50%_-_1px)] after:h-[64px] after:rounded-tl-[30px] after:bg-black">
                                            <span className="rounded-full w-full min-h-full block p-4 bg-black">
                                                <span className="rounded-full bg-white/10 w-full h-full flex items-center justify-center">
                                                    <GoPeople size={20} />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="relative ml-16 -mt-4 w-20 flex aspect-square rounded-full p-[1px] bg-gradient-to-br from-white/20 to-white/5">
                                            <span className="rounded-full w-full min-h-full block p-4 bg-black">
                                                <span className="rounded-full bg-white/10 w-full h-full flex items-center justify-center">
                                                    <PiMoneyLight size={20} />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="relative -mt-4 w-20 flex aspect-square rounded-full p-[1px] bg-gradient-to-br from-white/20 to-white/5 before:absolute before:bottom-[calc(50%_-_1px)] before:right-full before:w-1/2 before:h-[64px] before:rounded-bl-[30px] before:bg-gradient-to-t before:from-white/20 before:to-white/10 after:absolute after:bottom-1/2 after:right-full after:w-[calc(50%_-_1px)] after:h-[64px] after:rounded-bl-[30px] after:bg-black">
                                            <span className="rounded-full w-full min-h-full block p-4 bg-black">
                                                <span className="rounded-full bg-white/10 w-full h-full flex items-center justify-center">
                                                    <HiOutlineDocumentChartBar size={20} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-4xl font-light tracking-tight">Publish your Collective</h3>
                                        <p className="text-sm font-light tracking-tight text-white/50 max-w-[50ch]">showcase your collective expertise and insights in the dynamic world of cryptocurrency</p>
                                    </div>
                                    <button className="p-[1px] h-8 w-fit flex rounded-full bg-gradient-to-r from-white/50 to-white/20 text-white/80">
                                        <span className="relative overflow-hidden flex h-full w-full items-center justify-center gap-2 p-1 pl-4 rounded-full bg-black before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/50 before:to-white/20 before:rounded-[50%] before:blur-md after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-4/5 after:rounded-full after:bg-white/30 after:blur-md">
                                            <span className="text-xs relative font-poppins tracking-tight">Try now</span>
                                            <span className="relative flex items-center justify-center w-6 aspect-square rounded-full bg-white/20">
                                                <MdOutlineArrowOutward size={14} />
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[calc(100vh_-_160px)]">
                            <div 
                                style={{ 
                                    backgroundImage: generateRadialBackground({ 
                                        steps: 30, 
                                        spacing: 3, 
                                        colors: { inBetween: 'transparent', main: [50, 50, 50, 1] }, 
                                        position: { x: '0', y: '100%' }
                                    }) 
                                }} 
                                className="min-h-[calc(100vh_-_200px)] sticky top-[180px] flex flex-col p-4 rounded-[30px] border border-[#202020] bg-[#121212]"
                            >
                                <span className="text-2xl font-light tracking-tight">02.</span>
                                <div className="flex-1 flex flex-col items-center justify-center">
                                    <span className="relative z-[1] flex w-24 aspect-square items-center justify-center before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:rounded-[10px] before:rotate-45 before:bg-gradient-to-br before:from-[#333333] before:to-[#999999] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[calc(100%_-_1px)] after:aspect-square after:rounded-[9px] after:rotate-45 after:bg-[#121212]">
                                        <IoPeopleOutline size={40} className="relative z-[1] text-white/80" />
                                    </span>
                                    <span className="relative flex-1 max-h-20 block w-[1px] bg-[#999999] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:w-[6px] after:aspect-square after:rounded-full after:bg-[#999999]" />
                                    <span className="px-6 py-2 rounded-full border border-[#999999] flex items-center justify-center">
                                        <span className="font-poppins tracking-tight">community</span>
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-3xl font-light tracking-tight">community on-chain</h3>
                                    <p className="text-xs font-light trackng-light text-white/50">connect with like-minded enthusiasts, collaborate on groundbreaking projects, and be part of the decentralized revolution shaping the future of finance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[calc(calc(100vh_-_160px)_*_2)]">
                            <div className="sticky top-[180px] min-h-[calc(100vh_-_200px)] flex flex-col p-4 rounded-[30px] border border-white/10 bg-black">
                                <span className="text-2xl font-light tracking-tight">03.</span>
                                <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                                    <span className="p-[1px] h-6 w-fit flex rounded-full bg-gradient-to-r from-white/50 to-white/20 text-white/80">
                                        <span className="relative overflow-hidden flex h-full w-full items-center justify-center gap-2 px-2 rounded-full bg-black before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/50 before:to-white/20 before:rounded-[50%] before:blur-md after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-4/5 after:rounded-full after:bg-white/30 after:blur-md">
                                            <span className="text-[.6rem] relative font-poppins tracking-tight text-white/50">Track your cap table and activity in one place</span>
                                        </span>
                                    </span>
                                    <div className="flex flex-col gap-4 w-full p-4 rounded-[16px] border border-white/50 font-poppins">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-2">
                                                <FaStaylinked size={16} />
                                                <span className="tracking-tight text-sm font-semibold">NoxCoin</span>
                                            </div>
                                            <span className="block px-3 py-1 border border-white/10 text-[.6rem] text-white/50 rounded-full">0x4892...f302</span>
                                        </div>
                                        <span className="block h-3 rounded-lg border border-white/30 overflow-hidden">
                                            <span className="block h-full w-1/4 bg-white rounded-r-lg"></span>
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="flex justify-between items-center gap-4 font-light tracking-tight text-[.6rem] text-white/50">
                                                <span className="">Minted</span>
                                                <span className="">Remaining</span>
                                            </span>
                                            <span className="flex justify-between items-center gap-4 tracking-tight text-[.6rem] text-white/80">
                                                <span className="">80,000 ABC of 100,000 allocated</span>
                                                <span className="">30,000 ABC</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-3xl font-light tracking-tight">Launch a DAO to invest in anything, together</h3>
                                    <p className="text-xs font-light trackng-light text-white/50">harness the collective wisdom and power of the community to make impactful decisions and drive innovation in any field.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative min-h-screen py-10 flex flex-col items-end">
                    <div className="flex w-fit flex-col gap-8 float-right">
                        <h2 className="text-[3.5rem] tracking-tight font-light">
                            {
                                "What makes us different?"
                                    .split(" ")
                                    .map((word, index, words) => (
                                        <span key={index} className="inline-block">
                                            {
                                                word.split("").map((letter, subIndex) => (
                                                    <motion.span 
                                                        key={subIndex}
                                                        initial={{ opacity: 0 }} 
                                                        whileInView={{ opacity: 1 }} 
                                                        transition={{
                                                            duration: 1, 
                                                            ease: EASE, 
                                                            delay: index > 0 ? 
                                                                ((words.slice(0, index).reduce((sum, prevWord) => sum + prevWord.length, 0)) + subIndex) / 40 :
                                                                subIndex / 40
                                                        }} 
                                                        viewport={{ once: true }}
                                                        className="inline-block"
                                                    >{letter}</motion.span>
                                                ))
                                            }
                                            &nbsp;
                                        </span>
                                    ))
                            }
                        </h2>
                        <div className="flex justify-between gap-12">
                            <span className="px-6 flex items-center justify-center w-fit h-10 rounded-full text-white/50 border border-white/20 lowercase text-sm">
                                <span className="flex items-center justify-center overflow-hidden -mt-1">
                                    <motion.span 
                                        initial={{ y: '100%' }} 
                                        whileInView={{ y: '0%' }} 
                                        transition={{ duration: 1, ease: EASE, delay: .2 }} 
                                        className="block"
                                    >Companies</motion.span>
                                </span>
                            </span>
                            <p className="text-white/50 max-w-[80ch] tracking-tight text-sm">
                                {
                                    "Our mission is to make DeFi so simple that anyone can feel confident to participate. We have created a platform that removes the complexity and allows everyone to earn passive rewards on their digital assets."
                                        .split(" ")
                                        .map((word, index) => (
                                            <motion.span 
                                                key={index}
                                                initial={{ opacity: 0 }} 
                                                whileInView={{ opacity: 1 }} 
                                                transition={{ duration: 1, ease: EASE, delay: (3 + index) / 25 }}
                                                viewport={{ once: true }}
                                                className="inline-block"
                                            >{word}&nbsp;</motion.span>
                                        ))
                                }
                            </p>
                        </div> 
                    </div>           
                    <ul className="w-full flex-1 mt-20 grid grid-rows-2 grid-cols-5 gap-6">
                        {
                            WHY_CHOOSE_US.map(({ title, desc, image, gradient }, index) => (
                                <motion.li 
                                    initial={{ y: '15%', opacity: 0 }} 
                                    whileInView={{ y: '0%', opacity: 1 }}  
                                    transition={{ duration: 1, ease: EASE, delay: index/10 }}
                                    viewport={{ once: true }}
                                    className={`group relative overflow-hidden ${index === 0 || index === 3 ? 'col-span-3' : 'col-span-2'} bg-black group p-6 border border-white/10 hover:border-white/20 rounded-2xl flex`}
                                >
                                    <div  style={{ backgroundImage: `radial-gradient(circle at 0 100%, ${gradient})` }} className="absolute top-0 left-0 h-full w-full pointer-events-none blug-sm opacity-0 group-hover:opacity-100 -translate-x-1/2 translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-[transform,_opacity] duration-500 ease-[cubic-bezier(0.3,_1,_0.16,_1)]"></div>
                                    <div className="relative flex flex-1 flex-col justify-between gap-8">
                                        <span className="w-8 aspect-square rounded-full bg-white/10 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <HiArrowLongRight size={16} />
                                        </span>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-white/80 group-hover:text-white font-light tracking-tight text-3xl">{title}</h3>
                                            <p className="text-white/50 text-xs tracking-tight max-w-[60ch]">{desc}</p>
                                        </div>
                                    </div>
                                    <div className="relative h-full aspect-square transition-[filter] blur-md group-hover:blur-none duration-300 -mr-6">
                                        <img src={image} className="absolute top-0 right-0 scale-100 h-full w-auto" />
                                    </div>
                                </motion.li>
                            ))
                        }
                    </ul>
                </section>
                <section className="relative min-h-screen flex flex-col gap-10 mt-10">
                    <div className="flex items-center gap-8">
                        <h2 className="text-[3.5rem] tracking-tight font-light">
                            {
                                "We Currate Nox Tokens"
                                    .split(" ")
                                    .map((word, index, words) => (
                                        <span key={index} className="inline-block">
                                            {
                                                word.split("").map((letter, subIndex) => (
                                                    <motion.span 
                                                        key={subIndex}
                                                        initial={{ opacity: 0 }} 
                                                        whileInView={{ opacity: 1 }} 
                                                        transition={{
                                                            duration: 1, 
                                                            ease: EASE, 
                                                            delay: index > 0 ? 
                                                                ((words.slice(0, index).reduce((sum, prevWord) => sum + prevWord.length, 0)) + subIndex) / 40 :
                                                                subIndex / 40
                                                        }}
                                                        viewport={{ once: true }}
                                                        className="inline-block"
                                                    >{letter}</motion.span>
                                                ))
                                            }
                                            &nbsp;
                                        </span>
                                    ))
                            }
                        </h2>
                        <div className="flex items-center gap-4">
                            <span className="text-[4rem] font-light">{"/"}</span>
                            <p className="text-sm text-white/50 max-w-[50ch] mt-4 tracking-tight">
                                {
                                    "NoxCoin is a revolutionary DEX unlike any other. We currate the highest perfoming and most robust liquidity pools to create a one-stop for astute investors."
                                        .split(" ")
                                        .map((word, index) => (
                                            <motion.span 
                                                key={index}
                                                initial={{ opacity: 0 }} 
                                                whileInView={{ opacity: 1 }} 
                                                transition={{ duration: 1, ease: EASE, delay: (3 + index) / 25 }}
                                                viewport={{ once: true }}
                                                className="inline-block"
                                            >{word}&nbsp;</motion.span>
                                        ))
                                }
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex justify-end">
                            <span className="px-6 flex items-center justify-center w-fit h-10 rounded-full text-white/50 border border-white/20 lowercase text-sm">
                                <span className="flex items-center justify-center overflow-hidden -mt-1">
                                    <motion.span initial={{ y: '100%' }} whileInView={{ y: '0%' }} transition={{ duration: 1, ease: EASE, delay: .2 }} className="block">Tokens</motion.span>
                                </span>
                            </span>
                        </div>
                        <div className="flex justify-between gap-10">
                            <motion.ul 
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }} 
                                transition={{ duration: 1, ease: EASE }}
                                viewport={{ once: true }}
                                className="flex-1 h-fit flex flex-col p-[1px] rounded-[30px] bg-gradient-to-r from-[#202020] via-[#333333] to-[#202020] gap-[1px]"
                            >
                                {
                                    TOKEN_STEPS.map(({ title, Icon }, index, arr) => (
                                        <li key={index} className="flex-1">
                                            <div className={`relative flex gap-4 p-6 bg-black ${index === 0 ? 'rounded-t-[29px] before:absolute before:top-0 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:w-1/2 before:h-1/4 before:rounded-[50%] before:bg-gradient-to-b before:from-white/30 before:to-white/10 before:blur-xl' : index === arr.length - 1 ? 'rounded-b-[29px] text-white/80' : ' text-white/80'} overflow-hidden`}>
                                                <div className="flex-1 flex flex-col gap-8">
                                                    <div className="flex items-center gap-4">
                                                        <motion.span
                                                            initial={{ opacity: 0 }} 
                                                            whileInView={{ opacity: 1 }} 
                                                            transition={{ duration: 2, ease: EASE, delay: (index + 2) / 10 }}
                                                            viewport={{ once: true }}
                                                            className="aspect-square w-12 flex items-center justify-center bg-white/10 rounded-xl"
                                                        >
                                                            <Icon size={24} />
                                                        </motion.span>
                                                        <motion.span 
                                                            initial={{ opacity: 0 }} 
                                                            whileInView={{ opacity: 1 }} 
                                                            transition={{ duration: 2, ease: EASE, delay: (index + 3) / 10 }} 
                                                            viewport={{ once: true }}
                                                            className="text-3xl tracking-tight font-light font-poppins flex items-center"
                                                        >{title}</motion.span>
                                                    </div>
                                                    {
                                                        index === 0 ?
                                                            <motion.p
                                                                initial={{ opacity: 0 }} 
                                                                whileInView={{ opacity: 1 }} 
                                                                transition={{ duration: 2, ease: EASE, delay: (index + 4.5) / 10 }} 
                                                                viewport={{ once: true }}
                                                                className="text-white/50 tracking-tight text-sm max-w-[80ch] ml-16"
                                                            >Insert your fund using our custodial or non-custodial wallet options into the NoxCoin pools.<br /> Start earning some the highest rewards available simply by connecting your wallet and offering your assets as liquidity for our pools.</motion.p> :
                                                            null
                                                    }
                                                    
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </motion.ul>
                                <div className="flex-1">
                                <ul className="flex-1 flex flex-col gap-4 p-6">
                                    {
                                        [1, 2, 3, 4, 5].map((item, index, arr) => (
                                            <motion.li
                                                key={index}
                                                initial={{ scale: .8, y: '100%' }}
                                                whileInView={{ scale: 1, y: '0%' }}
                                                transition={{ duration: 2, ease: EASE, delay: (index / 20) }}
                                                viewport={{ once: true }}
                                            >
                                                <div style={{ opacity: 1 - (index / arr.length) }} className="font-poppins flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                                                    <div className="flex items-center">
                                                        <span className="flex items-center justify-center w-10 aspect-square rounded-full bg-[#eeeeee] text-black">
                                                            <SiEthereum size={18} />
                                                        </span>
                                                        <span className="flex -ml-4 items-center justify-center w-10 aspect-square rounded-full bg-white/20">
                                                            <TbCurrencyBitcoin size={18} />
                                                        </span>
                                                    </div>
                                                    <div className="flex-1 flex justify-between gap-4">
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-xs text-white/80 tracking-tight">USDC / LEND</span>
                                                            <span className="text-white/50 text-[.7rem] tracking-tight font-light">PancakeSwap</span>
                                                        </div>    
                                                        <div className="flex flex-col items-end gap-1">
                                                            <span className="text-xs text-white/80 tracking-tight">32.17%</span>
                                                            <span className="text-white/50 text-[.7rem] tracking-tight font-light">APY</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-20 flex h-screen">
                    <div onMouseMove={handleMouseMove} onMouseOut={resetImagePosition} className="flex-1 rounded-[30px] relative border border-white/20 bg-black overflow-clip">
                        <span className="absolute z-[2] top-6 left-6 px-6 flex items-center justify-center w-fit h-10 rounded-full text-white/50 border border-white/20 lowercase text-sm">
                            <span className="flex items-center justify-center overflow-hidden -mt-1">
                                <motion.span 
                                    initial={{ y: '100%' }} 
                                    whileInView={{ y: '0%' }} 
                                    transition={{ duration: 1, ease: EASE, delay: .2 }} 
                                    className="block"
                                >contact</motion.span>
                            </span>
                        </span>                        
                        <motion.div 
                            ref={imageRef} 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            transition={{ duration: 2, ease: EASE, delay: .3 }} 
                            viewport={{ once: true }}
                            className="absolute top-0 left-0 w-full h-full"
                        >
                            <motion.img 
                                src={asset_21} 
                                style={{ x: imageXPosition, y: imageYPosition }}
                                className="w-full h-full object-contain duration-500 ease-[cubic-bezier(.3,_1,_.16,_1)]"
                            />
                        </motion.div>
                        <div className="relative bg-black/50 backdrop-blur-none hover:backdrop-blur-md transition-[backdrop-filter] duration-300 w-full h-full flex flex-col items-center justify-center gap-2 p-10 py-20">
                            <div className="flex items-center gap-2 text-white/80">
                                <FaStaylinked size={32} />
                                <div className="flex flex-col">
                                    <span className="text-xl tracking-tighter font-bold">NoxCoin</span>
                                    <span className="uppercase text-[.6rem] font-poppins font-light text-center">Crypto</span>
                                </div>
                            </div>
                            <h2 className="mt-10 text-[3.5rem] font-light tracking-tighter">
                                {
                                    "Want to integrate with NoxCoin?"
                                        .split(" ")
                                        .map((word, index, words) => (
                                            <span className="inline-block">
                                                {
                                                    word.split("").map((letter, subIndex) => (
                                                        <motion.span 
                                                            initial={{ opacity: 0 }} 
                                                            whileInView={{ opacity: 1 }} 
                                                            transition={{ 
                                                                duration: 1, 
                                                                ease: EASE, 
                                                                delay: index > 0 ?
                                                                    ((words.slice(0, index).reduce((sum, prevWord) => sum + prevWord.length, 0)) + subIndex) / 25 :
                                                                    subIndex / 25
                                                            }} 
                                                            viewport={{ once: true }}
                                                            className="inline-block"
                                                        >
                                                            {letter}
                                                        </motion.span>
                                                    ))
                                                }
                                                &nbsp;
                                            </span>
                                        ))
                                }
                            </h2>
                            <p className="text-sm text-white/60 tracking-tight">
                                {
                                    "Contact us to find out how we can create liquidity for your product."
                                        .split(" ")
                                        .map((word, index) => (
                                            <motion.span 
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 1, ease: EASE, delay: (3 + index) / 25 }} 
                                                viewport={{ once: true }}
                                                className="inline-block"
                                            >{word}&nbsp;</motion.span>
                                        ))
                                }
                            </p>
                            <motion.div
                                initial={{ y: '100%', opacity: 0 }}
                                whileInView={{ y: '0%', opacity: 1 }}
                                transition={{ duration: 1, ease: EASE }}
                                viewport={{ once: true }}
                            >
                                <button className="mt-10 p-[1px] flex rounded-full bg-gradient-to-r from-white/50 to-white/20 text-white/80">
                                    <span className="relative overflow-hidden flex h-full w-full items-center justify-center gap-4 pl-6 p-1 rounded-full bg-black before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:h-full before:aspect-square before:bg-gradient-to-l before:from-white/20 before:to-white/50 before:rounded-full before:blur-md after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-1/2 after:h-1/2 after:w-1/4 after:rounded-full after:bg-white/30 after:blur-md">
                                        <span className="text-sm relative font-poppins tracking-tight">Contact us</span>
                                        <span className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10">
                                            <VscSend size={18} className="relative" />
                                        </span>
                                    </span>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
            <footer ref={footerRef} className="relative mt-[-100vh] overflow-y-clip overflow-x-clip">
                <motion.div style={{ x: footerImageLeftTransform }} className="absolute bottom-0 left-0 h-full max-h-[400px]">
                    <img src={asset_7} alt="" className="h-full w-auto -translate-x-1/2" />
                </motion.div>
                <motion.div style={{ x: footerImageRightTransform }} className="absolute bottom-0 right-0 h-full max-h-[400px]">
                    <img src={asset_9} alt="" className="blur-sm h-full w-auto translate-y-1/4 translate-x-1/3" />
                </motion.div>
                <div className="h-screen"></div>
                <motion.div style={{ y: footerTransformY, opacity: footerOpacity, scale: footerScale }} className="sticky bottom-0 pt-20 px-2 m-auto max-w-[var(--max-width)] flex flex-col gap-20">
                    <div className="relative flex justify-between gap-6">
                        <div className="flex flex-col gap-4">
                            <span className="flex items-center gap-2 flex-1">
                                <FaStaylinked size={30} />
                                <span className="text-lg tracking-tighter font-bold">NoxChange</span>
                            </span>
                            <p className="mt-6 text-sm text-white/60 max-w-[30ch] tracking-tight">Join our mailing list list for updates on all aspects of NoxCoin</p>
                            <div className="flex items-center gap-2 border border-white/20 backdrop-blur-sm hover:border-white/30 rounded-full">
                                <input type="email" placeholder="Your email address" className="flex-1 text-sm bg-transparent placeholder:text-white/50 focus:outline-none pl-4 h-10" />
                                <span className="flex items-center justify-center h-8 w-8 aspect-square rounded-full mr-1 bg-white/10 text-white/80 hover:bg-white/20">
                                    <MdOutlineArrowOutward size={16} />
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            {
                                [
                                    {
                                        title: "Menu",
                                        links: [
                                            "Home",
                                            "Features",
                                            "Token",
                                            "Companies"
                                        ]
                                    },
                                    {
                                        title: "Developers",
                                        links: [
                                            "Developer Resources",
                                            "Defi Solutions",
                                            "Documentation"
                                        ]
                                    },
                                    {
                                        title: "Company",
                                        links: [
                                            "About us",
                                            "Whitepaper",
                                        ]
                                    },
                                    {
                                        title: "Policies",
                                        links: [
                                            "Terms",
                                            "Privacy",
                                            "FAQ"
                                        ]
                                    },
                                ].map(({ title, links }, index) => (
                                    <div key={index} className="flex flex-col gap-4">
                                        <h3 className="text-lg tracking-tighter font-light">{title}</h3>
                                        <ul className="flex flex-col gap-2">
                                            {
                                                links.map((link, subIndex) => (
                                                    <li key={subIndex} className="text-xs font-poppins font-light tracking-tighter text-white/50">{link}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="relative flex justify-between items-center py-4 border-t border-white/10">
                        <p className="capitalize text-sm tracking-tighter text-white/50">{(new Date()).getFullYear()} NoxChange, All rights reserved.</p>
                        <ul className="flex items-center gap-2">
                            {
                                [FiGithub, FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
                                    <li className="h-10 w-10 aspect-square backdrop-blur-sm flex items-center justify-center rounded-full text-white/80 bg-white/10 hover:bg-white/20">
                                        <Icon size={16} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </motion.div>
            </footer>
        </div>
    )
}