import React, { useEffect, useMemo, useState } from "react";

import { BsCheck2, BsDot, BsMailboxFlag, BsPatchCheck, BsPatchCheckFill } from "react-icons/bs";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaFacebook, FaMailBulk, FaTiktok } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiInstagram, FiUser } from "react-icons/fi";
import { GoKey } from "react-icons/go";
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io";
import { LuFormInput } from "react-icons/lu";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

import { AnimatePresence, motion } from "framer-motion";

import { v4 as uuid_v4 } from "uuid";

import eng_flag from "../assets/images/eng-flag.png";
import curve_arrow_icon from "../assets/icons/up-arrow.png";

const EASE = [0.16, 1, 0.3, 1];

export default function App () {
    const [showMainScreen, setShowMainScreen] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState(null);

    const [submitted, setSubmitted] = useState(false);
    const [{ loading, submitSuccess }, setSubmitting] = useState({ loading: false, submitSuccess: false });
    const [{ name, email, password, confirmPassword }, setValues] = useState({ 
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const passwordChecks = useMemo(() => ({
        charLength: {
            text: "At least 8 characters",
            passed: password.length > 8 
        },
        symbols: {
            text: "At least one number (0-9) or a symbol",
            passed: /(\d|\W)/.test(password)
        },
        alphabet: {
            text: "Lowercase (A-Z) and uppercase (a-z)",
            passed: /[A-Z]/.test(password) && /[a-z]/.test(password)
        }
    }), [password]);


    const handleChange = (event) => {
        if(!event.target) return;
        setValues(prev => ({ ...prev, [event.target.id]: event.target.value }));
        setErrors(prev => {
            if(!prev) return null;
            const newValues = {...prev};
            delete newValues[event.target.id];
            return Object.values(newValues).length < 1 ? null : newValues;
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setSubmitting(prev => ({ ...prev, loading: true }));

        try {
            const validationErrors = {};
            if(Object.values(passwordChecks).some(({ passed }) => !passed)) validationErrors.password = "Invalid password";

            for(let [key, value] of Object.entries({ name, email, confirmPassword })) {
                if(key === 'name' && !value) validationErrors.name = "Name field cannot be left empty";
                else if(key === 'email' && (/ /.test(value) || !/.\w+$/.test(value))) validationErrors.email =  "Invalid email address";
                else if(key === 'confirmPassword' && value !== password) validationErrors.confirmPassword = "Passwords don't match";
            }

            if(Object.values(validationErrors).length >= 1) {
                throw validationErrors;
            } else {
                setSubmitting(prev => ({ ...prev, submitSuccess: true }));
            }
        } catch (error) {
            setErrors(error);
        } finally {
            setTimeout(() => setSubmitting(prev => ({ ...prev, loading: false })), 2000);
        }
    };

    useEffect(() => {
        setShowMainScreen(false);
    }, []);

    return (
        <div className="relative">
            <AnimatePresence>
                {
                    showMainScreen && 
                        <motion.div 
                            key={uuid_v4()}
                            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%' }} 
                            exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0' }} 
                            transition={{ duration: 2, ease: EASE, delay: 4 }} 
                            className="h-screen w-screen absolute z-10 font-poppins"
                        >
                            <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--purple-light)] via-[var(--purple)] to-[var(--blue)] overflow-hidden">
                                <div className="relative rounded-2xl p-4 aspect-square flex flex-col gap-2 items-center justify-center">
                                    <motion.div initial={{ clipPath: 'circle(0 at 0 0)' }} animate={{ clipPath: 'circle(150% at 0 0)' }} transition={{ duration: 1, ease: EASE }} className="relative overflow-hidden flex items-center justify-center text-white p-4 rounded-2xl bg-orange-300 aspect-square">
                                        <motion.div initial={{ clipPath: 'circle(0 at 0 0)' }} animate={{ clipPath: 'circle(100% at 0 0)' }} transition={{ duration: 1, delay: .2, ease: EASE }} className="absolute top-0 left-0 w-full h-full rounded-br-full bg-orange-400" />         
                                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6, duration: 1, ease: EASE }} className="flex items-center justify-center">
                                            <FaMailBulk size={30} className="relative" />
                                        </motion.span>               
                                    </motion.div>
                                    <span className="block overflow-hidden">
                                        <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: .6, duration: 1, ease: EASE }} className="block font-semibold tracking-tight text-white text-lg">
                                            <span className="text-orange-300">Neon</span>
                                            <span>Mail</span>
                                        </motion.span> 
                                    </span>
                                </div>
                                <motion.div initial={{ opacity: 0, rotate: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: '45deg' }} transition={{ duration: 3, ease: EASE }} className="absolute h-1/4 aspect-square rounded-2xl left-[10%] top-[20%] rotate-45 bg-gradient-to-br from-white/20 to-white/5"></motion.div>
                                <motion.div initial={{ opacity: 0, rotate: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: '45deg' }} transition={{ duration: 3, ease: EASE }} className="absolute h-1/4 aspect-square rounded-2xl -left-[10%] -top-[8%] rotate-[-18deg] bg-gradient-to-br from-white/20 to-white/5"></motion.div>
                                <motion.div initial={{ opacity: 0, rotate: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: '12deg' }} transition={{ duration: 3, ease: EASE }} className="absolute h-1/2 aspect-square -bottom-[10%] -right-[5%] rounded-[20px] rotate-12 bg-gradient-to-br from-white/20 to-white/5"></motion.div>
                                <motion.div initial={{ opacity: 0, rotate: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: '30deg' }} transition={{ duration: 3, ease: EASE }} className="absolute h-1/3 aspect-square top-10 left-[30%] rounded-[20px] rotate-[30deg] bg-gradient-to-br from-white/20 to-white/5"></motion.div>
                                <motion.div initial={{ opacity: 0, rotate: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: '-6deg' }} transition={{ duration: 3, ease: EASE }} className="absolute -bottom-1/2 left-0 w-1/2 h-4/5 -rotate-6 rounded-[30px] bg-gradient-to-br from-white/20 to-white/5"></motion.div>
                                <motion.div initial={{ opacity: 0, rotate: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: '6deg' }} transition={{ duration: 3, ease: EASE }} className="absolute -top-[60%] -right-[20%] w-1/2 h-4/5 rotate-6 rounded-[30px] bg-gradient-to-br from-white/20 to-white/5"></motion.div>
                            </div>
                        </motion.div>
                }
            </AnimatePresence>

            <div className="relative font-poppins m-0 p-0 w-full max-w-[100vw] text-[#333333] container flex items-stretch justify-stretch min-h-acreen">
                <div className="w-full max-w-[640px] flex flex-col gap-8 px-20 py-10">
                    <div className="flex items-center justify-between">
                        <span className="flex items-center justify-center w-[40px] aspect-square rounded-full border border-gray-200 hover:bg-gray-200">
                            <HiOutlineArrowLongLeft size={20} />
                        </span>
                        <p className={`tracking-tight transition-opacity duration-300 ${loading || submitSuccess ? 'opacity-0' : ''}`}>
                            <span className="text-xs inline-block">Already a member?&nbsp;&nbsp;</span>
                            <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[var(--blue-primary)] after:opacity-20">
                                <span className="text-xs text-[var(--blue-primary)] font-semibold">Sign in</span>
                            </span>
                        </p>
                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 4.5, ease: EASE }} className="flex-1 flex">
                        {
                            loading ?
                                <div className="flex-1 flex flex-col gap-6 items-center justify-center">
                                    <div className="animate-loading w-[160px] aspect-square rounded-full border-2 border-[var(--blue-primary)] border-l-white"></div>
                                    <span className="text-sm text-gray-500">Submitting...</span>
                                </div> :
                                submitSuccess ?
                                <motion.div initial={{ scale: .5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 2, ease: EASE }} className="flex-1 flex flex-col justify-center items-center gap-8">
                                    <span className="flex items-center justify-center text-green-400 p-4 aspect-square rounded-full bg-green-100">
                                        <BsPatchCheckFill size={60} />
                                    </span>
                                    <div className="flex flex-col gap-4 text-center">
                                        <span className="font-semibold text-2xl text-green-400 tracking-tight">Sign up Successful!</span>
                                        <span className="text-sm text-gray-400 tracking-tight">Your account has been successfully created.<br /> Welcome to NeonMail John Doe!</span>
                                    </div>
                                    <button className="group p-2 mt-4 rounded-full flex items-center w-full max-w-[280px] border border-[var(--blue-primary)] bg-[var(--blue-primary)] transition-[background-color] hover:text-[var(--blue-primary)] hover:bg-white text-white">
                                        <span className="flex-1 text-center -mr-10 font-semibold text-sm">Get started</span>
                                        <span className="flex items-center justify-center w-10 aspect-square rounded-full bg-white/10 group-hover:bg-[var(--blue-hover)]">
                                            <HiOutlineArrowLongRight size={20} />
                                        </span>
                                    </button>
                                </motion.div> :
                                <div className="flex-1 flex flex-col gap-8">
                                    <div action="" className="flex flex-col gap-10">
                                        <div className="flex items-center">
                                            <div className="flex-1 flex flex-col gap-2">
                                                <h1 className="text-[4rem] font-semibold tracking-tight">Sign Up</h1>
                                                <p className="text-sm text-gray-400">Secure your connections with nMail</p>
                                            </div>
                                            <span className="relative block">
                                                <img src={curve_arrow_icon} alt="curved arrow" className="w-[64px] opacity-80 rotate-[80deg] h-auto top-0 right-0" />
                                            </span>
                                        </div>

                                        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-6">
                                            <div className="flex flex-col gap-2">
                                                <div className="group flex border-b border-gray-200 text-gray-400 has-[input:focus]:text-inherit has-[input:focus]:border-[#333333]">
                                                    <span className="flex items-center justify-center">
                                                        <FiUser size={20} />
                                                    </span>
                                                    <input type="text" placeholder="Your full name" name="name" id="name" onChange={handleChange} className="bg-transparent text-sm tracking-tight h-[40px] px-4 flex-1 focus:outline-none focus:border-none" />
                                                    {
                                                        submitted ?
                                                            <span className={`flex items-center justify-center ${errors?.name ? 'text-red-400' : 'text-green-300'}`}>
                                                                {errors?.name ? <IoMdClose size={16} /> : <IoMdCheckmarkCircleOutline size={16} />}
                                                            </span> :
                                                            null
                                                    }
                                                </div>
                                                {
                                                    errors?.name ? <span className="text-xs text-red-400 tracking-tight px-9">{errors.name}</span> : null
                                                }
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="group flex border-b border-gray-200 text-gray-400 has-[input:focus]:text-inherit has-[input:focus]:border-[#333333]">
                                                    <span className="flex items-center justify-center">
                                                        <BsMailboxFlag size={20} />
                                                    </span>
                                                    <input type="email" placeholder="Your email address" name="email" id="email" onChange={handleChange} className="bg-transparent text-sm tracking-tight h-[40px] px-4 flex-1 focus:outline-none focus:border-none" />
                                                    {
                                                        submitted ?
                                                            <span className={`flex items-center justify-center ${errors?.email ? 'text-red-400' : 'text-green-300'}`}>
                                                                {errors?.email ? <IoMdClose size={16} /> : <IoMdCheckmarkCircleOutline size={16} />}
                                                            </span> :
                                                            null
                                                    }
                                                </div>
                                                {
                                                    errors?.email ? <span className="text-xs text-red-400 tracking-tight px-9">{errors.email}</span> : null
                                                }
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="group flex border-b border-gray-200 text-gray-400 has-[input:focus]:text-inherit has-[input:focus]:border-[#333333]">
                                                    <span className="flex items-center justify-center">
                                                        <LuFormInput size={20} />
                                                    </span>
                                                    <input type={showPassword ? "text" : "password"} placeholder="Your password" name="password" id="password" onChange={handleChange} className="bg-transparent text-sm tracking-tight h-[40px] px-4 flex-1 focus:outline-none focus:border-none" />
                                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="flex items-center justify-center text-gray-600">
                                                        {showPassword ? <VscEyeClosed size={16} /> : <VscEye size={16} />}
                                                    </button>
                                                </div>
                                                {
                                                    password || submitted ?
                                                        <ul className="flex flex-col gap-2">
                                                            {
                                                                Object.entries(passwordChecks).map(([key, value], index) => (
                                                                    <div key={key} className={`flex items-center gap-2 px-4 ${value.passed ? 'text-green-400' : 'text-red-400'}`}>
                                                                        <span className="flex item-center justify-center">
                                                                            {value.passed ? <BsCheck2 size={16} /> : <BsDot size={16} />}
                                                                        </span>
                                                                        <span className="text-xs">{value.text}</span>
                                                                    </div>
                                                                ))
                                                            }
                                                        </ul> :
                                                        null
                                                }
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="group flex border-b border-gray-200 text-gray-400 has-[input:focus]:text-inherit has-[input:focus]:border-[#333333]">
                                                    <span className="flex items-center justify-center">
                                                        <LuFormInput size={20} />
                                                    </span>
                                                    <input type={showPassword ? "text" : "password"} placeholder="Confirm password" id="confirmPassword" name="confirmPassword" onChange={handleChange} className="bg-transparent text-sm tracking-tight h-[40px] px-4 flex-1 focus:outline-none focus:border-none" />
                                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="flex items-center justify-center text-gray-600">
                                                        {showPassword ? <VscEyeClosed size={16} /> : <VscEye size={16} />}
                                                    </button>
                                                </div>
                                                {
                                                    errors?.confirmPassword ? <span className="text-xs px-8 text-red-400 tracking-tight">{errors.confirmPassword}</span> : null
                                                }
                                            </div>
                                            <div className="flex items-center justify-between gap-8 mt-4">
                                                <button className="group transition-[background-color] flex-1 flex items-center p-2 rounded-full bg-[var(--blue-primary)] border border-[var(--blue-primary)] hover:bg-white hover:text-[var(--blue-primary)] text-white">
                                                    <span className="flex-1 text-center tracking-tight text-sm font-semibold">Sign Up</span>
                                                    <span className="flex items-center justify-center w-[30px] aspect-square rounded-full bg-white/10 group-hover:bg-[var(--blue-hover)]">
                                                        <HiOutlineArrowLongRight size={18} />
                                                    </span>
                                                </button>
                                                <span className="text-sm text-gray-300">Or</span>
                                                <div className="flex items-center gap-2">
                                                    <button className="flex items-center justify-center aspect-square rounded-full border border-gray-200 w-[40px]">
                                                        <FaFacebook size={20} className="text-blue-500" />
                                                    </button>
                                                    <button className="flex items-center justify-center aspect-square rounded-full border border-gray-200 w-[40px]">
                                                        <FcGoogle size={20} className="text-blue-500" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <button className="flex items-center justify-center gap-2 p-2 rounded-full hover:bg-gray-100 w-fit">
                                        <img src={eng_flag} alt="English language flag" className="w-5 aspect-square rounded-full" />
                                        <span className="uppercase text-sm font-semibold tracking-tight mr-2">eng</span>
                                        <FaAngleUp size={10} className="text-gray-400" />
                                    </button>
                                </div>
                        }
                    </motion.div>
                </div>
                <div className="flex-1">
                    <div className="w-full h-screen sticky top-0">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <motion.div initial={{ rotate: '0' }} animate={{ rotate: '3deg' }} transition={{ delay: 4, duration: 3, ease: EASE }} className="absolute -right-6 -top-6 h-full w-4/5 bg-[var(--purple)] rotate-3 rounded-l-[40px] overflow-clip">
                                <div className="absolute top-0 right-0 w-4/5 h-1/4 bg-white/10 rounded-[20px] translate-y-[-10%] translate-x-[20%] rotate-6"></div>
                                <div className="absolute bottom-0 left-0 h-[60%] aspect-square bg-white/10 translate-y-[10%] translate-x-[-10%] rounded-[20px] rotate-[70deg]"></div>
                            </motion.div>
                            <motion.div initial={{ rotate: '60deg' }} animate={{ rotate: '80deg' }} transition={{ delay: 4, duration: 3, ease: EASE }} className="absolute right-0 -top-[75%] w-full h-4/5 bg-[var(--purple-dark)] rounded-[40px] overflow-clip"></motion.div>
                            <motion.div initial={{ rotate: '15deg' }} animate={{ rotate: '45deg' }} transition={{ delay: 4, duration: 3, ease: EASE }} className="absolute -bottom-1/2 left-[25%] w-full aspect-square rounded-[40px] bg-[var(--blue)]">
                                <div className="absolute bottom-0 right-0 h-4/5 aspect-square bg-black/5 rounded-[20px] -rotate-12"></div>
                            </motion.div>
                        </div>
                        <div className="relative w-full h-full flex items-center justify-end pr-32">
                            <div className="flex flex-col gap-10">
                                <div className="flex items-center gap-4 md:gap-10">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4.1, duration: 2, ease: EASE }} className="flex flex-col justify-between min-w-[160px] md:min-w-[200px] gap-12 md:gap-20 p-4 md:p-6 lg:p-8 rounded-3xl bg-white">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-xs tracking-tight text-orange-400 font-semibold">Inbox</span>
                                            <span className="text-3xl tracking-tight font-semibold">102,221</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-1 flex-col gap-2">
                                                <div className="w-1/2 h-2 rounded-full bg-orange-400"></div>
                                                <div className="w-full h-2 rounded-full bg-[var(--purple)]"></div>
                                                <div className="w-4/5 h-2 rounded-full bg-orange-300"></div>
                                            </div>
                                            <span className="items-center justify-center flex w-10 aspect-square rounded-full bg-black text-white text-sm tracking-tight">45</span>
                                        </div>
                                    </motion.div>
                                    <motion.div className="flex flex-col justify-between gap-20">
                                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4.2, duration: 2, ease: EASE }} className="w-[60px] aspect-square rounded-full flex items-center justify-center bg-white">
                                            <FiInstagram size={30} />
                                        </motion.span>
                                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4.3, duration: 2, ease: EASE }} className="ml-8 w-[60px] aspect-square rounded-full flex items-center justify-center bg-white">
                                            <FaTiktok size={30} className="tiktok-shadow" />
                                        </motion.span>
                                    </motion.div>
                                </div>
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4.4, duration: 2, ease: EASE }} className="flex w-full max-w-[360px] rounded-3xl p-4 md:p-6 lg:p-8 bg-white gap-4 md:gap-6 shadow-sm">
                                    <div className="flex flex-1 max-w-[100px] flex-col gap-4">
                                        <div className="rounded-full shadow-xl p-2">
                                            <div className="h-2 w-full rounded-full bg-[var(--purple)]"></div>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-gray-400"></div>
                                        <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
                                        <div className="h-2 w-4/5 rounded-full bg-gray-200"></div>
                                        <div className="h-2 w-[60%] rounded-full bg-gray-100"></div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-2">
                                        <GoKey size={30} className="text-orange-400" />
                                        <span className="mt-4 tracking-tight font-semibold">Your data, your rules</span>
                                        <p className="text-xs text-gray-300 tracking-tight">Your data belongs to you, and our encryption ensures that.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}