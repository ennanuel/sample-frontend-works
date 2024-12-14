"use strict";
(self["webpackChunk_20_day_challenge"] = self["webpackChunk_20_day_challenge"] || []).push([["3_index_js"],{

/***/ "./3/App.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/react-icons/fa6/index.mjs");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-icons/fi/index.mjs");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/react-icons/go/index.mjs");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/react-icons/hi/index.mjs");
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/react-icons/hi2/index.mjs");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/react-icons/io/index.mjs");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/react-icons/io5/index.mjs");
/* harmony import */ var react_icons_pi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-icons/pi/index.mjs");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/react-icons/md/index.mjs");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-icons/rx/index.mjs");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/react-icons/si/index.mjs");
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/react-icons/tb/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/framer-motion/dist/es/value/use-scroll.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/lenis/dist/lenis.mjs");
/* harmony import */ var _assets_images_crypto_page_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./assets/images/crypto-page/index.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
















var MENU = [{
  title: "Home"
}, {
  title: "Features"
}, {
  title: "Tokens"
}, {
  title: "Companies"
}];
var SOCIAL_LINKS = [{
  title: "Twitter",
  Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTwitter
}, {
  title: "Instagram",
  Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiInstagram
}, {
  title: "Facebook",
  Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiFacebook
}, {
  title: "LinkedIn",
  Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiLinkedin
}];
var TOKEN_STEPS = [{
  title: "Deposit",
  Icon: react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.PiHandDepositLight
}, {
  title: "Autocompound",
  Icon: react_icons_rx__WEBPACK_IMPORTED_MODULE_4__.RxTokens
}, {
  title: "Withdraw",
  Icon: react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.PiHandWithdraw
}, {
  title: "Earn rewards",
  Icon: react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.PiMoneyLight
}];
var WHY_CHOOSE_US = [{
  title: "Cross Chain & Multi-Chain",
  desc: "Allow your assets to seamlessly move within and between the Blockchains. Using Smart Contract security means that there is no itermediary between human or machine.",
  gradient: "#fd9d07 10px, #fd02d9 60px, #85258f 120px, transparent 210px",
  image: _assets_images_crypto_page_index_js__WEBPACK_IMPORTED_MODULE_1__.asset_17
}, {
  title: "Baskets",
  desc: "Our aggregated index baskets offer a simple and easy-to-earn rewards by offering liquidity to our pools.",
  gradient: "#bff27e 30px, #66aa91 60px, #415d92 120px, transparent 210px",
  image: _assets_images_crypto_page_index_js__WEBPACK_IMPORTED_MODULE_1__.asset_16
}, {
  title: "Simplicity",
  desc: "Our platform is easy to use and offers users many options to earn rewards on your assets. We have removed the complexities of DeFi.",
  gradient: "#d4cf95 30px, #11cfed 60px, #0f2eac 120px, transparent 210px",
  image: _assets_images_crypto_page_index_js__WEBPACK_IMPORTED_MODULE_1__.asset_15
}, {
  title: "Fiat On and Off Ramping",
  desc: "Getting started is easy. We accept deposits from your bank accounts, PayID, credit card or digital wallet. If you don't have a digital wallet, we can create one for you in two easy steps.",
  gradient: "#cffdff 10px, #0d59d1 60px, #083992 120px, transparent 210px",
  image: _assets_images_crypto_page_index_js__WEBPACK_IMPORTED_MODULE_1__.asset_18
}];
var EASE = [.16, 1, .3, 1];
function generateRadialBackground() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      steps: 10,
      spacing: 2,
      colors: {
        main: [255, 255, 255, 1],
        inBetween: "transparent"
      },
      position: {
        x: '0',
        y: '0'
      }
    },
    steps = _ref.steps,
    spacing = _ref.spacing,
    colors = _ref.colors,
    position = _ref.position;
  var backgrounds = [];
  var _loop = function _loop() {
    var colorPercentage = Math.max(0.2, (i / steps).toFixed(2));
    var start = (Math.pow(i, spacing) / Math.pow(steps, spacing) * 100).toFixed(2);
    var end = (Math.pow(i + 1, spacing) / Math.pow(steps, spacing) * 100).toFixed(2);
    var rgbaColors = colors.main.map(function (color, index) {
      return index < 3 ? Math.floor(Number(colorPercentage) * color) : color;
    }).slice(0, 4).join(", ");
    var background = "".concat(colors.inBetween, " ").concat(start, "%, ").concat(colors.inBetween, " calc(").concat(end, "% - 1px), rgba(").concat(rgbaColors, ") calc(").concat(end, "% - 1px), rgba(").concat(rgbaColors, ") ").concat(end, "%");
    backgrounds.push(background);
  };
  for (var i = 0; i < steps; i++) {
    _loop();
  }
  ;
  var result = "radial-gradient(circle at ".concat(position.x, " ").concat(position.y, ", ").concat(backgrounds.join(', '), ")");
  return result;
}
;
function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];
  var prevScrollY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    currentScrollY = _useState4[0],
    setCurrentScrollY = _useState4[1];
  var scrolledUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var newScrolledUp = currentScrollY < prevScrollY.current || prevScrollY.current === 0;
    prevScrollY.current = currentScrollY;
    return newScrolledUp;
  }, [currentScrollY]);
  var introRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var imageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useScroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll)({
      target: introRef,
      offset: ["start start", "start end"]
    }),
    introScrollYProgress = _useScroll.scrollYProgress;
  var blobImageTransform = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(introScrollYProgress, [1, 0], ['-60%', '0%'], {
    ease: (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.cubicBezier)(.16, 1, .3, 1)
  });
  var handleMouseMove = function handleMouseMove(event) {
    if (!imageRef.current) return;
    var rect = imageRef.current.getBoundingClientRect();
    var x = Math.min(event.clientX - rect.left - rect.width / 2, 160);
    var y = Math.min(event.clientY - rect.top - rect.height / 2, 160);
    setPosition({
      x: x,
      y: y
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var lenis = new lenis__WEBPACK_IMPORTED_MODULE_8__["default"]();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    window.scrollY = 0;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handleScroll() {
      var _this = this;
      setCurrentScrollY(function () {
        return _this.scrollY;
      });
    }
    ;
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      '--max-width': '1148px'
    },
    className: "min-h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "".concat(scrolledUp ? 'bg-black/5 backdrop-blur-md' : '', " transition-[background-color,_backdrop-filter] duration-300 sticky top-0 w-full z-[999999] flex items-center justify-center")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "min-w-[var(--max-width)] flex gap-4 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 2,
      ease: EASE,
      delay: .1
    },
    className: "".concat(scrolledUp ? 'translate-y-0' : 'translate-y-[-200%]', " transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_.3,_1)] flex items-center gap-2 flex-1")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_10__.FaStaylinked, {
    size: 30
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lg tracking-tighter font-bold"
  }, "NoxChange")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.ul, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 2,
      ease: EASE,
      delay: .2
    },
    className: "p-1 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/5 rounded-full"
  }, MENU.map(function (_ref2, index) {
    var title = _ref2.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.li, {
      key: index,
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 2,
        ease: EASE,
        delay: .4 + index / 10
      },
      className: "rounded-full flex items-center justify-center h-8 px-4 gap-2 border ".concat(index === 0 ? 'bg-white/10 border-white/5 text-white' : 'text-white/60 border-white/10 hover:text-white/80 hover:bg-white/5 transition-[background-color]')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-semibold text-xs"
    }, title));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(scrolledUp ? 'translate-y-0' : 'translate-y-[-200%]', " transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_.3,_1)] flex-1 flex justify-end items-center gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 2,
      ease: EASE,
      delay: .3
    },
    className: "flex items-center justify-center px-6 h-10 rounded-full hover:bg-white/10 text-white/60 border border-white/20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-poppins tracking-tight"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 2,
      ease: EASE,
      delay: .35
    },
    className: "p-[1px] h-10 flex rounded-full bg-gradient-to-b from-white/50 to-white/20 text-white/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative overflow-hidden flex h-full w-full items-center justify-center gap-2 px-6 rounded-full bg-black before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4/5 before:h-1/4 before:bg-gradient-to-t before:from-white/50 before:to-white before:rounded-[50%] before:blur-md after:absolute after:top-0 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-[10%] after:rounded-full after:bg-white/80 after:blur-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs relative font-poppins tracking-tight"
  }, "Create Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__.MdOutlineArrowOutward, {
    size: 16,
    className: "relative"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative z-[1] max-w-[var(--max-width)] m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    ref: introRef,
    className: "overflow-clip relative min-h-[calc(100vh_-_60px)] flex flex-col gap-20 py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
    style: {
      x: blobImageTransform
    },
    className: "fixed top-0 left-0 w-screen h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.img, {
    src: _assets_images_crypto_page_index_js__WEBPACK_IMPORTED_MODULE_1__.asset_19,
    initial: {
      scale: .5,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    transition: {
      duration: 2,
      ease: EASE
    },
    alt: "",
    className: "h-full w-full max-w-[var(--max-width)] m-auto blur-md"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex justify-between gap-4 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.span, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: .5,
      ease: EASE,
      delay: .1
    },
    className: "relative block w-[120px] h-0 border-none before:absolute before:top-0 before:left-0 before:w-full before:aspect-square before:bg-gradient-to-b before:from-white/50 before:to-transparent before:rounded-tl-[30px] after:absolute after:top-[1px] after:left-[1px] after:w-full after:aspect-square after:bg-black after:rounded-tl-[30px]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex items-center gap-2"
  }, SOCIAL_LINKS.map(function (_ref3, index) {
    var Icon = _ref3.Icon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.li, {
      key: index,
      initial: {
        x: '50%',
        opacity: 0
      },
      animate: {
        x: 0,
        opacity: 1
      },
      transition: {
        duration: 2,
        ease: EASE,
        delay: 0.3 + index / 10
      },
      className: "flex items-center justify-center w-10 aspect-square rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white/80"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      size: 18
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg font-light tracking-tight text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block overflow-clip text-white/50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.span, {
    initial: {
      y: '-100%'
    },
    animate: {
      y: 0
    },
    transition: {
      duration: 2,
      ease: EASE,
      delay: .4
    },
    className: "block"
  }, "Join the movement")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block overflow-clip text-white/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.span, {
    initial: {
      y: '-100%'
    },
    animate: {
      y: 0
    },
    transition: {
      duration: 2,
      ease: EASE,
      delay: .5
    },
    className: "block"
  }, "Towards decentralization")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "relative tracking-tight uppercase font-light text-[6rem] leading-[6.2rem] ml-4"
  }, "Dive into a new era of crypto currency".split(" ").map(function (word, index, words) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: index,
      className: "inline-block"
    }, word.split("").map(function (letter, subIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: subIndex,
        className: "inline-block overflow-clip"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.span, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        transition: {
          duration: 2,
          ease: [.3, 1, .16, 1],
          delay: index > 0 ? (words.slice(0, index).reduce(function (sum, prevWord) {
            return sum + prevWord.length;
          }, 0) + subIndex) / 50 : subIndex / 50
        },
        className: "block"
      }, letter));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\xA0"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex flex-col gap-20 pl-[240px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between gap-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "tracking-tight max-w-[60ch] leading-[1.3rem] text-sm"
  }, ["Embark on an unprescendented journey with the future of insurance with the new era of cyptocurrency.", "Discover innovative blockchain technologies during financial freedom and security."].map(function (words, index, arr) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: index,
      className: "".concat(index !== 0 ? 'text-white/80' : 'text-gray-400')
    }, words.split(" ").map(function (word, subIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: subIndex,
        className: "inline-block overflow-hidden"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.span, {
        className: "inline-block",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        transition: {
          duration: 2,
          ease: EASE,
          delay: .6 + (index > 0 ? (arr.slice(0, index).reduce(function (sum, prevWords) {
            return sum + prevWords.split(" ").length;
          }, 0) + subIndex) / 25 : subIndex / 25)
        }
      }, word), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\xA0"));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\xA0"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.ul, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: .5,
      ease: EASE,
      delay: .1
    },
    className: "relative flex justify-end items-center gap-2 pr-20 before:absolute before:bottom-1/2 before:right-0 before:w-full before:aspect-video before:rounded-br-[30px] before:bg-gradient-to-b before:from-transparent before:to-white/30 after:absolute after:bottom-[calc(50%_+_1px)] after:right-[1px] after:w-full after:aspect-video after:rounded-br-[30px] after:bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "bg-black relative z-10 flex items-center justify-end gap-2 px-4"
  }, ["1st", "2nd", "3rd"].map(function (item, index, items) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.li, {
      key: index,
      initial: {
        x: '-50%',
        opacity: 0
      },
      animate: {
        x: 0,
        opacity: 1
      },
      transition: {
        duration: 2,
        ease: EASE,
        delay: 0.6 + Math.abs(index - (items.length - 1)) / 10
      },
      className: "w-8 aspect-square rounded-full ".concat(item === "1st" ? 'bg-white/20 border-transparent text-white/80' : 'bg-white/10 text-white/50', " flex items-center justify-center")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs tracking-tight font-light font-poppins"
    }, item));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "group w-fit flex items-center justify-center gap-4 hover:translate-y-2 transition-transform duration-500 ease-[cubic-bezier(.16,_1,_.3,_1)]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.span, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 2,
      ease: EASE,
      delay: 1
    },
    className: "text-lg font-light font-poppins"
  }, "scroll down"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.span, {
    initial: {
      scale: .5,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    transition: {
      duration: 2,
      ease: EASE,
      delay: 1.05
    },
    className: "flex items-center justify-center w-12 aspect-square rounded-full border border-white/50 transition-[background-color] bg-white group-hover:bg-transparent group-hover:text-white text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_12__.HiOutlineArrowNarrowDown, {
    size: 20
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex items-center gap-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "relative flex-1 flex items-center justify-between before:absolute before:top-0 before:left-0 before:h-full before:w-20 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:top-0 after:right-0 after:h-full after:w-20 after:bg-gradient-to-l after:from-black after:to-transparent"
  }, ["private key", "sustainable return", "top 100 Crypto app", "1000B & no withdrawal limit"].map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index,
      className: "".concat(index === 1 ? 'text-white' : 'text-white/50', " text-center flex items-center justify-center gap-2 text-lg")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-sm"
    }, item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, "/"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "p-[1px] h-10 flex rounded-full bg-gradient-to-r from-white/50 to-white/20 text-white/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative overflow-hidden flex h-full w-full items-center justify-center gap-2 p-2 pr-6 rounded-full bg-black before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/50 before:to-white/20 before:rounded-[50%] before:blur-md after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-4/5 after:rounded-full after:bg-white/30 after:blur-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative flex items-center justify-center w-6 aspect-square rounded-full bg-white/20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiDownload, {
    size: 14
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs relative font-poppins tracking-tight"
  }, "Get started")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "relative py-20 min-h-[80vh] flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start justify-center w-full gap-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-6 py-2 rounded-full text-white/50 border border-white/20 lowercase text-sm"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center gap-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl text-center font-light tracking-tight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "Step\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "into\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "the\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "groundbreaking\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "future\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "of\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "finance\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative ml-2 mr-4 inline-block w-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute w-full h-full pb-2 flex items-end bottom-0 left-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative block w-full h-[2px] bg-gradient-to-l from-white to-white/50 rounded-full before:absolute before:top-1/2 before:origin-bottom-right before:-translate-y-1/2 before:right-0 before:w-4 before:h-[2px] before:rounded-full before:bg-white before:rotate-[30deg] after:absolute after:top-1/2 after:origin-bottom-right after:-translate-y-1/2 after:right-0 after:w-4 after:h-[2px] after:rounded-full after:bg-white after:rotate-[-30deg]"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "with\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "the\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block ml-2 mr-4 relative w-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute bottom-0 left-0 w-full h-8 rounded-full bg-white/20 flex items-center justify-center -mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_13__.TbBrandGoogleAnalytics, {
    size: 16
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "revolutionary\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "era\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "of\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "cryptocurrency.\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "Explore\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "cutting-edge\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "blockchain\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block ml-2 mr-4 relative w-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute bottom-0 left-0 w-full h-8 rounded-full bg-gradient-to-r from-white/20 to-white/10 flex items-center justify-center -mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_13__.TbCurrencyBitcoin, {
    size: 18
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "technologies\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "that\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "redefine\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "financial\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, "independence\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "p-[1px] h-10 w-fit flex rounded-full bg-gradient-to-r from-white/50 to-white/20 text-white/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative overflow-hidden flex h-full w-full items-center justify-center gap-2 p-2 pl-6 rounded-full bg-black before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/50 before:to-white/20 before:rounded-[50%] before:blur-md after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-4/5 after:rounded-full after:bg-white/30 after:blur-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs relative font-poppins tracking-tight"
  }, "Discover more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative flex items-center justify-center w-6 aspect-square rounded-full bg-white/20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__.MdOutlineArrowOutward, {
    size: 14
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-6 opacity-0 py-2 rounded-full text-white/50 border border-white/20 lowercase text-sm"
  }, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "relative min-h-screen flex flex-col py-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-[3.5rem] tracking-tight font-light"
  }, "Features & benefits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[4rem] font-light"
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-white/50 max-w-[50ch] mt-4 tracking-tight"
  }, "Experience the power of decentralized finance, offering global accessibility and finance autonomy."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-center gap-4 mt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex items-center gap-2"
  }, ["networking", "tokenization support", "training", "analysis"].map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "p-[1px] h-10 flex rounded-full ".concat(index === 0 ? 'bg-gradient-to-b from-white/50 to-white/20 text-white/80' : 'bg-white/20 text-white/50')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "relative overflow-hidden px-6 flex h-full w-full items-center justify-center gap-2 rounded-full bg-black"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-sm font-light relative whitespace-nowrap font-poppins tracking-tight"
    }, item), index === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_14__.IoIosTrendingUp, {
      size: 16
    }) : null)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "ml-6 py-1 border-b border-white flex items-center justify-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "See cases"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_12__.HiOutlineArrowNarrowRight, {
    size: 16
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex items-center justify-center w-8 aspect-square rounded-full bg-white text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_10__.FaArrowLeft, {
    size: 16
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex items-center justify-center w-8 aspect-square rounded-full bg-white/50 text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_10__.FaArrowRight, {
    size: 16
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 grid grid-cols-[2fr,_1fr,_1fr] gap-2 mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-6 py-4 flex flex-col rounded-[30px] border border-white/10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-light text-2xl tracking-tight"
  }, "01."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col relative before:absolute before:top-1/2 before:-translate-y-1/2 before:right-20 before:z-[10] before:w-40 before:h-[1px] before:bg-gradient-to-l before:from-white/10 before:via-white/20 before:to-white/10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative w-20 flex aspect-square rounded-full p-[1px] bg-gradient-to-br from-white/20 to-white/5 before:absolute before:top-[calc(50%_-_1px)] before:right-full before:w-1/2 before:h-[64px] before:rounded-tl-[30px] before:bg-gradient-to-b before:from-white/20 before:to-white/10 after:absolute after:top-1/2 after:right-full after:w-[calc(50%_-_1px)] after:h-[64px] after:rounded-tl-[30px] after:bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "rounded-full w-full h-full block p-4 bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "rounded-full bg-white/10 w-full h-full flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_go__WEBPACK_IMPORTED_MODULE_15__.GoPeople, {
    size: 20
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative ml-16 -mt-4 w-20 flex aspect-square rounded-full p-[1px] bg-gradient-to-br from-white/20 to-white/5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "rounded-full w-full h-full block p-4 bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "rounded-full bg-white/10 w-full h-full flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.PiMoneyLight, {
    size: 20
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative -mt-4 w-20 flex aspect-square rounded-full p-[1px] bg-gradient-to-br from-white/20 to-white/5 before:absolute before:bottom-[calc(50%_-_1px)] before:right-full before:w-1/2 before:h-[64px] before:rounded-bl-[30px] before:bg-gradient-to-t before:from-white/20 before:to-white/10 after:absolute after:bottom-1/2 after:right-full after:w-[calc(50%_-_1px)] after:h-[64px] after:rounded-bl-[30px] after:bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "rounded-full w-full h-full block p-4 bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "rounded-full bg-white/10 w-full h-full flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_16__.HiOutlineDocumentChartBar, {
    size: 20
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-end justify-between gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-4xl font-light tracking-tight"
  }, "Publish your Collective"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-light tracking-tight text-white/50 max-w-[50ch]"
  }, "showcase your collective expertise and insights in the dynamic world of cryptocurrency")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "p-[1px] h-8 w-fit flex rounded-full bg-gradient-to-r from-white/50 to-white/20 text-white/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative overflow-hidden flex h-full w-full items-center justify-center gap-2 p-1 pl-4 rounded-full bg-black before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/50 before:to-white/20 before:rounded-[50%] before:blur-md after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-4/5 after:rounded-full after:bg-white/30 after:blur-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs relative font-poppins tracking-tight"
  }, "Try now"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative flex items-center justify-center w-6 aspect-square rounded-full bg-white/20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__.MdOutlineArrowOutward, {
    size: 14
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundImage: generateRadialBackground({
        steps: 30,
        spacing: 3,
        colors: {
          inBetween: 'transparent',
          main: [50, 50, 50, 1]
        },
        position: {
          x: '0',
          y: '100%'
        }
      })
    },
    className: "flex flex-col p-4 rounded-[30px] border border-[#202020] bg-[#121212]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-2xl font-light tracking-tight"
  }, "02."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 flex flex-col items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative z-[1] flex w-24 aspect-square items-center justify-center before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:rounded-[10px] before:rotate-45 before:bg-gradient-to-br before:from-[#333333] before:to-[#999999] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[calc(100%_-_1px)] after:aspect-square after:rounded-[9px] after:rotate-45 after:bg-[#121212]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_17__.IoPeopleOutline, {
    size: 40,
    className: "relative z-[1] text-white/80"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative flex-1 max-h-20 block w-[1px] bg-[#999999] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:w-[6px] after:aspect-square after:rounded-full after:bg-[#999999]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-6 py-2 rounded-full border border-[#999999] flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-poppins tracking-tight"
  }, "community"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-3xl font-light tracking-tight"
  }, "community on-chain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs font-light trackng-light text-white/50"
  }, "connect with like-minded enthusiasts, collaborate on groundbreaking projects, and be part of the decentralized revolution shaping the future of finance."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col p-4 rounded-[30px] border border-white/10 bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-2xl font-light tracking-tight"
  }, "03."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 flex flex-col gap-4 items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "p-[1px] h-6 w-fit flex rounded-full bg-gradient-to-r from-white/50 to-white/20 text-white/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative overflow-hidden flex h-full w-full items-center justify-center gap-2 px-2 rounded-full bg-black before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/50 before:to-white/20 before:rounded-[50%] before:blur-md after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-4/5 after:rounded-full after:bg-white/30 after:blur-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[.6rem] relative font-poppins tracking-tight text-white/50"
  }, "Track your cap table and activity in one place"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4 w-full p-4 rounded-[16px] border border-white/50 font-poppins"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_10__.FaStaylinked, {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tracking-tight text-sm font-semibold"
  }, "NoxCoin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block px-3 py-1 border border-white/10 text-[.6rem] text-white/50 rounded-full"
  }, "0x4892...f302")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block h-3 rounded-lg border border-white/30 overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block h-full w-1/4 bg-white rounded-r-lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex justify-between items-center gap-4 font-light tracking-tight text-[.6rem] text-white/50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: ""
  }, "Minted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: ""
  }, "Remaining")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex justify-between items-center gap-4 tracking-tight text-[.6rem] text-white/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: ""
  }, "80,000 ABC of 100,000 allocated"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: ""
  }, "30,000 ABC"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-3xl font-light tracking-tight"
  }, "Launch a DAO to invest in anything, together"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs font-light trackng-light text-white/50"
  }, "harness the collective wisdom and power of the community to make impactful decisions and drive innovation in any field."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "relative min-h-screen py-10 flex flex-col items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex w-fit flex-col gap-8 float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-[3.5rem] tracking-tight font-light"
  }, "What makes us different?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between gap-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-6 py-2 block w-fit h-fit rounded-full text-white/50 border border-white/20 lowercase text-sm"
  }, "Companies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white/50 max-w-[80ch] tracking-tight text-sm"
  }, "Our mission is to make DeFi so simple that anyone can feel confident to participate. We have created a platform that removes the complexity and allows everyone to earn passive rewards on their digital assets."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "w-full flex-1 mt-20 grid grid-rows-2 grid-cols-5 gap-6"
  }, WHY_CHOOSE_US.map(function (_ref4, index) {
    var title = _ref4.title,
      desc = _ref4.desc,
      image = _ref4.image,
      gradient = _ref4.gradient;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "group relative overflow-hidden ".concat(index === 0 || index === 3 ? 'col-span-3' : 'col-span-2', " bg-black group p-6 border border-white/10 hover:border-white/20 rounded-2xl flex")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundImage: "radial-gradient(circle at 0 100%, ".concat(gradient, ")")
      },
      className: "absolute top-0 left-0 h-full w-full pointer-events-none blug-sm opacity-0 group-hover:opacity-100 -translate-x-1/2 translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-[transform,_opacity] duration-500 ease-[cubic-bezier(0.3,_1,_0.16,_1)]"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative flex flex-1 flex-col justify-between gap-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "w-8 aspect-square rounded-full bg-white/10 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_16__.HiArrowLongRight, {
      size: 16
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-white/80 group-hover:text-white font-light tracking-tight text-3xl"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-white/50 text-xs tracking-tight max-w-[60ch]"
    }, desc))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative h-full aspect-square transition-[filter] blur-md group-hover:blur-none duration-300 -mr-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: image,
      className: "absolute top-0 right-0 scale-100 h-full w-auto"
    })));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "relative min-h-screen flex flex-col gap-10 mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-[3.5rem] tracking-tight font-light"
  }, "We Currate Nox Tokens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[4rem] font-light"
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-white/50 max-w-[50ch] mt-4 tracking-tight"
  }, "NoxCoin is a revolutionary DEX unlike any other. We currate the highest perfoming and most robust liquidity pools to create a one-stop for astute investors."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-6 py-2 rounded-full text-white/50 border border-white/20 lowercase text-sm"
  }, "Tokens")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between gap-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex-1 h-fit flex flex-col p-[1px] rounded-[30px] bg-gradient-to-r from-[#202020] via-[#333333] to-[#202020] gap-[1px]"
  }, TOKEN_STEPS.map(function (_ref5, index, arr) {
    var title = _ref5.title,
      Icon = _ref5.Icon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index,
      className: "flex-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative flex gap-4 p-6 bg-black ".concat(index === 0 ? 'rounded-t-[29px] before:absolute before:top-0 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:w-1/2 before:h-1/4 before:rounded-[50%] before:bg-gradient-to-b before:from-white/30 before:to-white/10 before:blur-xl' : index === arr.length - 1 ? 'rounded-b-[29px] text-white/80' : ' text-white/80', " overflow-hidden")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex-1 flex flex-col gap-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "aspect-square w-12 flex items-center justify-center bg-white/10 rounded-xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      size: 24
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-3xl tracking-tight font-light font-poppins flex items-center"
    }, title)), index === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-white/50 tracking-tight text-sm max-w-[80ch] ml-16"
    }, "Insert your fund using our custodial or non-custodial wallet options into the NoxCoin pools.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Start earning some the highest rewards available simply by connecting your wallet and offering your assets as liquidity for our pools.") : null)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 flex flex-col gap-4 p-6"
  }, [1, 2, 3, 4, 5].map(function (item, index, arr) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      style: {
        opacity: 1 - index / arr.length
      },
      className: "font-poppins flex items-center gap-4 bg-white/10 p-4 rounded-2xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "flex items-center justify-center w-10 aspect-square rounded-full bg-[#eeeeee] text-black"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_si__WEBPACK_IMPORTED_MODULE_18__.SiEthereum, {
      size: 18
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "flex -ml-4 items-center justify-center w-10 aspect-square rounded-full bg-white/20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_13__.TbCurrencyBitcoin, {
      size: 18
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex-1 flex justify-between gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col gap-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs text-white/80 tracking-tight"
    }, "USDC / LEND"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-white/50 text-[.7rem] tracking-tight font-light"
    }, "PancakeSwap")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col items-end gap-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs text-white/80 tracking-tight"
    }, "32.17%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-white/50 text-[.7rem] tracking-tight font-light"
    }, "APY"))));
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "relative py-20 flex h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onMouseMove: handleMouseMove,
    onMouseOut: function onMouseOut() {
      return setPosition({
        x: 0,
        y: 0
      });
    },
    className: "flex-1 rounded-[30px] relative border border-white/20 bg-black overflow-clip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "z-10 absolute top-6 left-6 block px-6 py-2 rounded-full text-white/50 border border-white/20 lowercase text-sm"
  }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: imageRef,
    className: "absolute top-0 left-0 w-full h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.img, {
    src: _assets_images_crypto_page_index_js__WEBPACK_IMPORTED_MODULE_1__.asset_21,
    animate: {
      x: position.x,
      y: position.y
    },
    transition: {
      duration: .5,
      ease: [.16, 1, .3, 1]
    },
    className: "w-full h-full object-contain"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative bg-black/50 backdrop-blur-none hover:backdrop-blur-md transition-[backdrop-filter] duration-300 w-full h-full flex flex-col items-center justify-center gap-2 p-10 py-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 text-white/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_10__.FaStaylinked, {
    size: 32
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xl tracking-tighter font-bold"
  }, "NoxCoin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "uppercase text-[.6rem] font-poppins font-light text-center"
  }, "Crypto"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "mt-10 text-[3.5rem] font-light tracking-tighter"
  }, "Want to integrate with NoxCoin?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-white/60 tracking-tight"
  }, "Contact us to find out how we can create liquidity for your product."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mt-10 p-[1px] h-16 flex rounded-full bg-gradient-to-b from-white/50 to-white/20 text-white/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative overflow-hidden flex h-full w-full items-center justify-center gap-4 pl-6 p-2 rounded-full bg-black before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4/5 before:h-1/4 before:bg-gradient-to-t before:from-white/50 before:to-white before:rounded-[50%] before:blur-md after:absolute after:top-0 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-1/4 after:h-[10%] after:rounded-full after:bg-white/80 after:blur-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm relative font-poppins tracking-tight"
  }, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "h-12 w-12 flex items-center justify-center rounded-full bg-white/10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__.MdOutlineArrowOutward, {
    size: 18,
    className: "relative"
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "relative mt-[-100vh] overflow-y-clip overflow-x-clip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_crypto_page_index_js__WEBPACK_IMPORTED_MODULE_1__.asset_7,
    alt: "",
    className: "absolute bottom-0 left-0 h-full max-h-[400px] w-auto -translate-x-1/2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_crypto_page_index_js__WEBPACK_IMPORTED_MODULE_1__.asset_9,
    alt: "",
    className: "blur-sm absolute bottom-0 right-0 h-full max-h-[400px] w-auto translate-y-1/4 translate-x-1/3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-screen"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sticky bottom-0 pt-20 px-2 m-auto max-w-[var(--max-width)] flex flex-col gap-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex justify-between gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex items-center gap-2 flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_10__.FaStaylinked, {
    size: 30
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lg tracking-tighter font-bold"
  }, "NoxChange")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-6 text-sm text-white/60 max-w-[30ch] tracking-tight"
  }, "Join our mailing list list for updates on all aspects of NoxCoin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 border border-white/10 backdrop-blur-sm hover:border-white/20 rounded-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    placeholder: "Your email address",
    className: "flex-1 text-sm bg-transparent placeholder:text-white/50 focus:outline-none pl-4 h-10"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex items-center justify-center h-8 w-8 aspect-square rounded-full mr-1 bg-white/10 text-white/80 hover:bg-white/20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__.MdOutlineArrowOutward, {
    size: 16
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-8"
  }, [{
    title: "Menu",
    links: ["Home", "Features", "Token", "Companies"]
  }, {
    title: "Developers",
    links: ["Developer Resources", "Defi Solutions", "Documentation"]
  }, {
    title: "Company",
    links: ["About us", "Whitepaper"]
  }, {
    title: "Policies",
    links: ["Terms", "Privacy", "FAQ"]
  }].map(function (_ref6, index) {
    var title = _ref6.title,
      links = _ref6.links;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "flex flex-col gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-lg tracking-tighter font-light"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "flex flex-col gap-2"
    }, links.map(function (link, subIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: subIndex,
        className: "text-xs font-poppins font-light tracking-tighter text-white/50"
      }, link);
    })));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex justify-between items-center py-4 border-t border-white/10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "capitalize text-sm tracking-tighter text-white/50"
  }, new Date().getFullYear(), " NoxChange, All rights reserved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex items-center gap-2"
  }, [react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiGithub, react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTwitter, react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiInstagram, react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiLinkedin].map(function (Icon, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "h-10 w-10 aspect-square backdrop-blur-sm flex items-center justify-center rounded-full text-white/80 bg-white/10 hover:bg-white/20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      size: 16
    }));
  }))))));
}

/***/ }),

/***/ "./3/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/client.js");
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./3/App.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./3/style.css");




var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./assets/images/crypto-page/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asset_1: () => (/* reexport default export from named module */ _iridescent_asset_1_jpg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   asset_10: () => (/* reexport default export from named module */ _iridescent_asset_10_png__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   asset_11: () => (/* reexport default export from named module */ _iridescent_asset_11_jpeg__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   asset_12: () => (/* reexport default export from named module */ _iridescent_asset_12_png__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   asset_13: () => (/* reexport default export from named module */ _iridescent_asset_13_jpg__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   asset_14: () => (/* reexport default export from named module */ _iridescent_asset_14_png__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   asset_15: () => (/* reexport default export from named module */ _holographic_asset_gif__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   asset_16: () => (/* reexport default export from named module */ _holographic_asset_1_gif__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   asset_17: () => (/* reexport default export from named module */ _holographic_asset_2_gif__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   asset_18: () => (/* reexport default export from named module */ _holographic_asset_3_gif__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   asset_19: () => (/* reexport default export from named module */ _holographic_asset_4_gif__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   asset_2: () => (/* reexport default export from named module */ _iridescent_asset_2_jpg__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   asset_20: () => (/* reexport default export from named module */ _holographic_asset_5_jpg__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   asset_21: () => (/* reexport default export from named module */ _holographic_asset_6_gif__WEBPACK_IMPORTED_MODULE_20__),
/* harmony export */   asset_22: () => (/* reexport default export from named module */ _holographic_asset_7_gif__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   asset_3: () => (/* reexport default export from named module */ _iridescent_asset_3_jpg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   asset_4: () => (/* reexport default export from named module */ _iridescent_asset_4_jpg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   asset_5: () => (/* reexport default export from named module */ _iridescent_asset_5_jpg__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   asset_6: () => (/* reexport default export from named module */ _iridescent_asset_6_jpg__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   asset_7: () => (/* reexport default export from named module */ _iridescent_asset_7_jpg__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   asset_8: () => (/* reexport default export from named module */ _iridescent_asset_8_jpg__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   asset_9: () => (/* reexport default export from named module */ _iridescent_asset_9_jpeg__WEBPACK_IMPORTED_MODULE_8__)
/* harmony export */ });
/* harmony import */ var _iridescent_asset_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_1.jpg");
/* harmony import */ var _iridescent_asset_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_2.jpg");
/* harmony import */ var _iridescent_asset_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_3.jpg");
/* harmony import */ var _iridescent_asset_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_4.jpg");
/* harmony import */ var _iridescent_asset_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_5.jpg");
/* harmony import */ var _iridescent_asset_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_6.jpg");
/* harmony import */ var _iridescent_asset_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_7.jpg");
/* harmony import */ var _iridescent_asset_8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_8.jpg");
/* harmony import */ var _iridescent_asset_9_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_9.jpeg");
/* harmony import */ var _iridescent_asset_10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_10.png");
/* harmony import */ var _iridescent_asset_11_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_11.jpeg");
/* harmony import */ var _iridescent_asset_12_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_12.png");
/* harmony import */ var _iridescent_asset_13_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_13.jpg");
/* harmony import */ var _iridescent_asset_14_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./assets/images/crypto-page/iridescent_asset_14.png");
/* harmony import */ var _holographic_asset_gif__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./assets/images/crypto-page/holographic_asset.gif");
/* harmony import */ var _holographic_asset_1_gif__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./assets/images/crypto-page/holographic_asset_1.gif");
/* harmony import */ var _holographic_asset_2_gif__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./assets/images/crypto-page/holographic_asset_2.gif");
/* harmony import */ var _holographic_asset_3_gif__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./assets/images/crypto-page/holographic_asset_3.gif");
/* harmony import */ var _holographic_asset_4_gif__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./assets/images/crypto-page/holographic_asset_4.gif");
/* harmony import */ var _holographic_asset_5_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./assets/images/crypto-page/holographic_asset_5.jpg");
/* harmony import */ var _holographic_asset_6_gif__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./assets/images/crypto-page/holographic_asset_6.gif");
/* harmony import */ var _holographic_asset_7_gif__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./assets/images/crypto-page/holographic_asset_7.gif");
























/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./3/style.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.14 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.collapse {
  visibility: collapse;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.-bottom-0 {
  bottom: -0px;
}
.-bottom-1 {
  bottom: -0.25rem;
}
.-bottom-1\\/2 {
  bottom: -50%;
}
.-bottom-20 {
  bottom: -5rem;
}
.-bottom-\\[10\\%\\] {
  bottom: -10%;
}
.-left-\\[10\\%\\] {
  left: -10%;
}
.-right-6 {
  right: -1.5rem;
}
.-right-\\[20\\%\\] {
  right: -20%;
}
.-right-\\[5\\%\\] {
  right: -5%;
}
.-top-6 {
  top: -1.5rem;
}
.-top-\\[60\\%\\] {
  top: -60%;
}
.-top-\\[75\\%\\] {
  top: -75%;
}
.-top-\\[8\\%\\] {
  top: -8%;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-1 {
  bottom: 0.25rem;
}
.left-0 {
  left: 0px;
}
.left-1 {
  left: 0.25rem;
}
.left-6 {
  left: 1.5rem;
}
.left-\\[10\\%\\] {
  left: 10%;
}
.left-\\[25\\%\\] {
  left: 25%;
}
.left-\\[30\\%\\] {
  left: 30%;
}
.right-0 {
  right: 0px;
}
.top-0 {
  top: 0px;
}
.top-1 {
  top: 0.25rem;
}
.top-1\\/2 {
  top: 50%;
}
.top-10 {
  top: 2.5rem;
}
.top-6 {
  top: 1.5rem;
}
.top-\\[20\\%\\] {
  top: 20%;
}
.z-10 {
  z-index: 10;
}
.z-\\[1\\] {
  z-index: 1;
}
.z-\\[999999\\] {
  z-index: 999999;
}
.z-\\[999\\] {
  z-index: 999;
}
.col-span-2 {
  grid-column: span 2 / span 2;
}
.col-span-3 {
  grid-column: span 3 / span 3;
}
.float-right {
  float: right;
}
.m-0 {
  margin: 0px;
}
.m-1 {
  margin: 0.25rem;
}
.m-auto {
  margin: auto;
}
.my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.-mb-1 {
  margin-bottom: -0.25rem;
}
.-mb-\\[2px\\] {
  margin-bottom: -2px;
}
.-ml-14 {
  margin-left: -3.5rem;
}
.-ml-4 {
  margin-left: -1rem;
}
.-mr-10 {
  margin-right: -2.5rem;
}
.-mr-20 {
  margin-right: -5rem;
}
.-mr-6 {
  margin-right: -1.5rem;
}
.-mt-2 {
  margin-top: -0.5rem;
}
.-mt-4 {
  margin-top: -1rem;
}
.ml-16 {
  margin-left: 4rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-4 {
  margin-left: 1rem;
}
.ml-6 {
  margin-left: 1.5rem;
}
.ml-8 {
  margin-left: 2rem;
}
.mr-1 {
  margin-right: 0.25rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mr-3 {
  margin-right: 0.75rem;
}
.mr-4 {
  margin-right: 1rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-10 {
  margin-top: 2.5rem;
}
.mt-12 {
  margin-top: 3rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-20 {
  margin-top: 5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-8 {
  margin-top: 2rem;
}
.mt-\\[-100vh\\] {
  margin-top: -100vh;
}
.mt-\\[-2px\\] {
  margin-top: -2px;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.contents {
  display: contents;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-0 {
  height: 0px;
}
.h-1 {
  height: 0.25rem;
}
.h-1\\/2 {
  height: 50%;
}
.h-1\\/3 {
  height: 33.333333%;
}
.h-1\\/4 {
  height: 25%;
}
.h-10 {
  height: 2.5rem;
}
.h-12 {
  height: 3rem;
}
.h-16 {
  height: 4rem;
}
.h-2 {
  height: 0.5rem;
}
.h-20 {
  height: 5rem;
}
.h-3 {
  height: 0.75rem;
}
.h-4 {
  height: 1rem;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 1.5rem;
}
.h-8 {
  height: 2rem;
}
.h-\\[20px\\] {
  height: 20px;
}
.h-\\[2px\\] {
  height: 2px;
}
.h-\\[40px\\] {
  height: 40px;
}
.h-\\[60\\%\\] {
  height: 60%;
}
.h-\\[60px\\] {
  height: 60px;
}
.h-auto {
  height: auto;
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-20 {
  max-height: 5rem;
}
.max-h-\\[400px\\] {
  max-height: 400px;
}
.min-h-10 {
  min-height: 2.5rem;
}
.min-h-\\[80vh\\] {
  min-height: 80vh;
}
.min-h-\\[calc\\(100vh_-_60px\\)\\] {
  min-height: calc(100vh - 60px);
}
.min-h-screen {
  min-height: 100vh;
}
.w-1 {
  width: 0.25rem;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/4 {
  width: 25%;
}
.w-10 {
  width: 2.5rem;
}
.w-12 {
  width: 3rem;
}
.w-16 {
  width: 4rem;
}
.w-2 {
  width: 0.5rem;
}
.w-20 {
  width: 5rem;
}
.w-24 {
  width: 6rem;
}
.w-4 {
  width: 1rem;
}
.w-4\\/5 {
  width: 80%;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-8 {
  width: 2rem;
}
.w-\\[120px\\] {
  width: 120px;
}
.w-\\[160px\\] {
  width: 160px;
}
.w-\\[1px\\] {
  width: 1px;
}
.w-\\[30px\\] {
  width: 30px;
}
.w-\\[40px\\] {
  width: 40px;
}
.w-\\[60\\%\\] {
  width: 60%;
}
.w-\\[60px\\] {
  width: 60px;
}
.w-\\[64px\\] {
  width: 64px;
}
.w-auto {
  width: auto;
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-max {
  width: -moz-max-content;
  width: max-content;
}
.w-screen {
  width: 100vw;
}
.w-\\[6px\\] {
  width: 6px;
}
.min-w-\\[160px\\] {
  min-width: 160px;
}
.min-w-\\[var\\(--max-width\\)\\] {
  min-width: var(--max-width);
}
.max-w-\\[100px\\] {
  max-width: 100px;
}
.max-w-\\[100vw\\] {
  max-width: 100vw;
}
.max-w-\\[200px\\] {
  max-width: 200px;
}
.max-w-\\[280px\\] {
  max-width: 280px;
}
.max-w-\\[30ch\\] {
  max-width: 30ch;
}
.max-w-\\[360px\\] {
  max-width: 360px;
}
.max-w-\\[400px\\] {
  max-width: 400px;
}
.max-w-\\[480px\\] {
  max-width: 480px;
}
.max-w-\\[50ch\\] {
  max-width: 50ch;
}
.max-w-\\[600px\\] {
  max-width: 600px;
}
.max-w-\\[60ch\\] {
  max-width: 60ch;
}
.max-w-\\[640px\\] {
  max-width: 640px;
}
.max-w-\\[80ch\\] {
  max-width: 80ch;
}
.max-w-\\[var\\(--max-width\\)\\] {
  max-width: var(--max-width);
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-\\[2\\] {
  flex: 2;
}
.flex-shrink {
  flex-shrink: 1;
}
.shrink {
  flex-shrink: 1;
}
.flex-grow {
  flex-grow: 1;
}
.grow {
  flex-grow: 1;
}
.border-collapse {
  border-collapse: collapse;
}
.-translate-x-1 {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-1 {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-1\\/3 {
  --tw-translate-x: 33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-10\\%\\] {
  --tw-translate-x: -10%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[20\\%\\] {
  --tw-translate-x: 20%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1\\/4 {
  --tw-translate-y: 25%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-10\\%\\] {
  --tw-translate-y: -10%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[10\\%\\] {
  --tw-translate-y: 10%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-full {
  --tw-translate-y: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-12 {
  --tw-rotate: -12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-6 {
  --tw-rotate: -6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-12 {
  --tw-rotate: 12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-3 {
  --tw-rotate: 3deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-6 {
  --tw-rotate: 6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-\\[-18deg\\] {
  --tw-rotate: -18deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-\\[30deg\\] {
  --tw-rotate: 30deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-\\[70deg\\] {
  --tw-rotate: 70deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-\\[80deg\\] {
  --tw-rotate: 80deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-scale-100 {
  --tw-scale-x: -1;
  --tw-scale-y: -1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.\\!transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-\\[pulse_1s_ease_300ms_infinite\\] {
  animation: pulse 1s ease 300ms infinite;
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-\\[pulse_1s_ease_600ms_infinite\\] {
  animation: pulse 1s ease 600ms infinite;
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-\\[pulse_1s_ease_infinite\\] {
  animation: pulse 1s ease infinite;
}
@keyframes fade-in {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fade-in 300ms ease-in-out;
}
@keyframes full-rotate {

  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.animate-loading {
  animation: full-rotate 500ms linear infinite;
}
.cursor-pointer {
  cursor: pointer;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.grid-cols-\\[100px\\2c _1fr\\2c _auto\\] {
  grid-template-columns: 100px 1fr auto;
}
.grid-cols-\\[2fr\\2c _1fr\\2c _1fr\\] {
  grid-template-columns: 2fr 1fr 1fr;
}
.grid-cols-\\[2fr\\2c _1fr\\] {
  grid-template-columns: 2fr 1fr;
}
.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}
.grid-rows-\\[1fr\\2c _auto\\] {
  grid-template-rows: 1fr auto;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-stretch {
  justify-content: stretch;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-10 {
  gap: 2.5rem;
}
.gap-12 {
  gap: 3rem;
}
.gap-16 {
  gap: 4rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-20 {
  gap: 5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-8 {
  gap: 2rem;
}
.gap-\\[1px\\] {
  gap: 1px;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-clip {
  overflow: clip;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-x-clip {
  overflow-x: clip;
}
.overflow-y-clip {
  overflow-y: clip;
}
.overflow-x-visible {
  overflow-x: visible;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-2xl {
  border-radius: 1rem;
}
.rounded-3xl {
  border-radius: 1.5rem;
}
.rounded-\\[11px\\] {
  border-radius: 11px;
}
.rounded-\\[12px\\] {
  border-radius: 12px;
}
.rounded-\\[16px\\] {
  border-radius: 16px;
}
.rounded-\\[20px\\] {
  border-radius: 20px;
}
.rounded-\\[30px\\] {
  border-radius: 30px;
}
.rounded-\\[40px\\] {
  border-radius: 40px;
}
.rounded-\\[4px\\] {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-b-\\[29px\\] {
  border-bottom-right-radius: 29px;
  border-bottom-left-radius: 29px;
}
.rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.rounded-l-\\[40px\\] {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.rounded-t-\\[29px\\] {
  border-top-left-radius: 29px;
  border-top-right-radius: 29px;
}
.rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.rounded-br-full {
  border-bottom-right-radius: 9999px;
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-\\[0px\\] {
  border-width: 0px;
}
.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-t-\\[1px\\] {
  border-top-width: 1px;
}
.border-dashed {
  border-style: dashed;
}
.border-none {
  border-style: none;
}
.border-\\[\\#202020\\] {
  --tw-border-opacity: 1;
  border-color: rgb(32 32 32 / var(--tw-border-opacity));
}
.border-\\[\\#999999\\] {
  --tw-border-opacity: 1;
  border-color: rgb(153 153 153 / var(--tw-border-opacity));
}
.border-\\[var\\(--blue-primary\\)\\] {
  border-color: var(--blue-primary);
}
.border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}
.border-black\\/10 {
  border-color: rgb(0 0 0 / 0.1);
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.border-green-100 {
  --tw-border-opacity: 1;
  border-color: rgb(220 252 231 / var(--tw-border-opacity));
}
.border-purple-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 232 255 / var(--tw-border-opacity));
}
.border-purple-300 {
  --tw-border-opacity: 1;
  border-color: rgb(216 180 254 / var(--tw-border-opacity));
}
.border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(192 132 252 / var(--tw-border-opacity));
}
.border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(147 51 234 / var(--tw-border-opacity));
}
.border-transparent {
  border-color: transparent;
}
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.border-white\\/10 {
  border-color: rgb(255 255 255 / 0.1);
}
.border-white\\/20 {
  border-color: rgb(255 255 255 / 0.2);
}
.border-white\\/30 {
  border-color: rgb(255 255 255 / 0.3);
}
.border-white\\/5 {
  border-color: rgb(255 255 255 / 0.05);
}
.border-white\\/50 {
  border-color: rgb(255 255 255 / 0.5);
}
.border-l-white {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.border-t-white {
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.bg-\\[\\#121212\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(18 18 18 / var(--tw-bg-opacity));
}
.bg-\\[\\#999999\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
}
.bg-\\[\\#eeeeee\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(238 238 238 / var(--tw-bg-opacity));
}
.bg-\\[var\\(--blue\\)\\] {
  background-color: var(--blue);
}
.bg-\\[var\\(--blue-primary\\)\\] {
  background-color: var(--blue-primary);
}
.bg-\\[var\\(--purple\\)\\] {
  background-color: var(--purple);
}
.bg-\\[var\\(--purple-dark\\)\\] {
  background-color: var(--purple-dark);
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-black\\/10 {
  background-color: rgb(0 0 0 / 0.1);
}
.bg-black\\/5 {
  background-color: rgb(0 0 0 / 0.05);
}
.bg-black\\/50 {
  background-color: rgb(0 0 0 / 0.5);
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}
.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
}
.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(74 222 128 / var(--tw-bg-opacity));
}
.bg-orange-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 186 116 / var(--tw-bg-opacity));
}
.bg-orange-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 146 60 / var(--tw-bg-opacity));
}
.bg-pink-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(244 114 182 / var(--tw-bg-opacity));
}
.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 232 255 / var(--tw-bg-opacity));
}
.bg-purple-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(192 132 252 / var(--tw-bg-opacity));
}
.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(147 51 234 / var(--tw-bg-opacity));
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-white\\/10 {
  background-color: rgb(255 255 255 / 0.1);
}
.bg-white\\/20 {
  background-color: rgb(255 255 255 / 0.2);
}
.bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}
.bg-white\\/80 {
  background-color: rgb(255 255 255 / 0.8);
}
.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
.bg-gradient-to-l {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-\\[\\#202020\\] {
  --tw-gradient-from: #202020 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(32 32 32 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-\\[var\\(--purple-light\\)\\] {
  --tw-gradient-from: var(--purple-light) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-blue-200 {
  --tw-gradient-from: #bfdbfe var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(191 219 254 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-blue-800 {
  --tw-gradient-from: #1e40af var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(30 64 175 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-gray-600 {
  --tw-gradient-from: #4b5563 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(75 85 99 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-gray-900 {
  --tw-gradient-from: #111827 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-red-800 {
  --tw-gradient-from: #991b1b var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(153 27 27 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-white {
  --tw-gradient-from: #fff var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-white\\/20 {
  --tw-gradient-from: rgb(255 255 255 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-white\\/50 {
  --tw-gradient-from: rgb(255 255 255 / 0.5) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-\\[\\#333333\\] {
  --tw-gradient-to: rgb(51 51 51 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #333333 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-\\[var\\(--purple\\)\\] {
  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--purple) var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-blue-600 {
  --tw-gradient-to: rgb(37 99 235 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #2563eb var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-gray-100 {
  --tw-gradient-to: rgb(243 244 246 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #f3f4f6 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-gray-400 {
  --tw-gradient-to: rgb(156 163 175 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #9ca3af var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-gray-700 {
  --tw-gradient-to: rgb(55 65 81 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #374151 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-purple-200 {
  --tw-gradient-to: rgb(233 213 255 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #e9d5ff var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-red-600 {
  --tw-gradient-to: rgb(220 38 38 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #dc2626 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-white {
  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #fff var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-\\[\\#202020\\] {
  --tw-gradient-to: #202020 var(--tw-gradient-to-position);
}
.to-\\[var\\(--blue\\)\\] {
  --tw-gradient-to: var(--blue) var(--tw-gradient-to-position);
}
.to-blue-800 {
  --tw-gradient-to: #1e40af var(--tw-gradient-to-position);
}
.to-gray-600 {
  --tw-gradient-to: #4b5563 var(--tw-gradient-to-position);
}
.to-gray-900 {
  --tw-gradient-to: #111827 var(--tw-gradient-to-position);
}
.to-orange-200 {
  --tw-gradient-to: #fed7aa var(--tw-gradient-to-position);
}
.to-red-800 {
  --tw-gradient-to: #991b1b var(--tw-gradient-to-position);
}
.to-white {
  --tw-gradient-to: #fff var(--tw-gradient-to-position);
}
.to-white\\/10 {
  --tw-gradient-to: rgb(255 255 255 / 0.1) var(--tw-gradient-to-position);
}
.to-white\\/20 {
  --tw-gradient-to: rgb(255 255 255 / 0.2) var(--tw-gradient-to-position);
}
.to-white\\/5 {
  --tw-gradient-to: rgb(255 255 255 / 0.05) var(--tw-gradient-to-position);
}
.to-white\\/50 {
  --tw-gradient-to: rgb(255 255 255 / 0.5) var(--tw-gradient-to-position);
}
.object-contain {
  -o-object-fit: contain;
     object-fit: contain;
}
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 0.25rem;
}
.p-10 {
  padding: 2.5rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.p-40 {
  padding: 10rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-8 {
  padding: 2rem;
}
.p-\\[1px\\] {
  padding: 1px;
}
.px-12 {
  padding-left: 3rem;
  padding-right: 3rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-20 {
  padding-left: 5rem;
  padding-right: 5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.px-9 {
  padding-left: 2.25rem;
  padding-right: 2.25rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.pb-6 {
  padding-bottom: 1.5rem;
}
.pl-10 {
  padding-left: 2.5rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pl-6 {
  padding-left: 1.5rem;
}
.pl-\\[240px\\] {
  padding-left: 240px;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-20 {
  padding-right: 5rem;
}
.pr-32 {
  padding-right: 8rem;
}
.pr-4 {
  padding-right: 1rem;
}
.pr-6 {
  padding-right: 1.5rem;
}
.pt-20 {
  padding-top: 5rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.font-poppins {
  font-family: Poppins;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-\\[\\.5rem\\] {
  font-size: .5rem;
}
.text-\\[\\.65rem\\] {
  font-size: .65rem;
}
.text-\\[\\.6rem\\] {
  font-size: .6rem;
}
.text-\\[\\.7rem\\] {
  font-size: .7rem;
}
.text-\\[3\\.5rem\\] {
  font-size: 3.5rem;
}
.text-\\[4rem\\] {
  font-size: 4rem;
}
.text-\\[6rem\\] {
  font-size: 6rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.font-light {
  font-weight: 300;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-\\[1\\.3rem\\] {
  line-height: 1.3rem;
}
.leading-\\[6\\.2rem\\] {
  line-height: 6.2rem;
}
.tracking-tight {
  letter-spacing: -0.025em;
}
.tracking-tighter {
  letter-spacing: -0.05em;
}
.text-\\[\\#333333\\] {
  --tw-text-opacity: 1;
  color: rgb(51 51 51 / var(--tw-text-opacity));
}
.text-\\[var\\(--blue-primary\\)\\] {
  color: var(--blue-primary);
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
.text-green-100 {
  --tw-text-opacity: 1;
  color: rgb(220 252 231 / var(--tw-text-opacity));
}
.text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(134 239 172 / var(--tw-text-opacity));
}
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity));
}
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
}
.text-orange-300 {
  --tw-text-opacity: 1;
  color: rgb(253 186 116 / var(--tw-text-opacity));
}
.text-orange-400 {
  --tw-text-opacity: 1;
  color: rgb(251 146 60 / var(--tw-text-opacity));
}
.text-purple-100 {
  --tw-text-opacity: 1;
  color: rgb(243 232 255 / var(--tw-text-opacity));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity));
}
.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(147 51 234 / var(--tw-text-opacity));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-white\\/50 {
  color: rgb(255 255 255 / 0.5);
}
.text-white\\/60 {
  color: rgb(255 255 255 / 0.6);
}
.text-white\\/80 {
  color: rgb(255 255 255 / 0.8);
}
.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(250 204 21 / var(--tw-text-opacity));
}
.underline {
  text-decoration-line: underline;
}
.accent-purple-400 {
  accent-color: #c084fc;
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-90 {
  opacity: 0.9;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-white {
  --tw-shadow-color: #fff;
  --tw-shadow: var(--tw-shadow-colored);
}
.outline {
  outline-style: solid;
}
.outline-gray-200 {
  outline-color: #e5e7eb;
}
.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.blur-lg {
  --tw-blur: blur(16px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.blur-md {
  --tw-blur: blur(12px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.blur-none {
  --tw-blur:  ;
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.blur-sm {
  --tw-blur: blur(4px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-lg {
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-md {
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-none {
  --tw-backdrop-blur:  ;
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.\\!transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter !important;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter !important;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[backdrop-filter\\] {
  transition-property: -webkit-backdrop-filter;
  transition-property: backdrop-filter;
  transition-property: backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[background-color\\2c _backdrop-filter\\] {
  transition-property: background-color, -webkit-backdrop-filter;
  transition-property: background-color, backdrop-filter;
  transition-property: background-color, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[background-color\\] {
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-color\\] {
  transition-property: border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[filter\\] {
  transition-property: filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[transform\\2c _opacity\\] {
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.ease-\\[cubic-bezier\\(0\\.16\\2c _1\\2c _\\.3\\2c _1\\)\\] {
  transition-timing-function: cubic-bezier(0.16, 1, .3, 1);
}
.ease-\\[cubic-bezier\\(0\\.16\\2c _1\\2c _0\\.3\\2c _1\\)\\] {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.ease-\\[cubic-bezier\\(0\\.3\\2c _1\\2c _0\\.16\\2c _1\\)\\] {
  transition-timing-function: cubic-bezier(0.3, 1, 0.16, 1);
}
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.ease-\\[cubic-bezier\\(\\.16\\2c _1\\2c _\\.3\\2c _1\\)\\] {
  transition-timing-function: cubic-bezier(.16, 1, .3, 1);
}

.placeholder\\:text-white\\/50::-moz-placeholder {
  color: rgb(255 255 255 / 0.5);
}

.placeholder\\:text-white\\/50::placeholder {
  color: rgb(255 255 255 / 0.5);
}

.before\\:pointer-events-none::before {
  content: var(--tw-content);
  pointer-events: none;
}

.before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}

.before\\:bottom-1\\/2::before {
  content: var(--tw-content);
  bottom: 50%;
}

.before\\:bottom-\\[calc\\(50\\%_-_1px\\)\\]::before {
  content: var(--tw-content);
  bottom: calc(50% - 1px);
}

.before\\:left-0::before {
  content: var(--tw-content);
  left: 0px;
}

.before\\:left-1\\/2::before {
  content: var(--tw-content);
  left: 50%;
}

.before\\:right-0::before {
  content: var(--tw-content);
  right: 0px;
}

.before\\:right-20::before {
  content: var(--tw-content);
  right: 5rem;
}

.before\\:right-full::before {
  content: var(--tw-content);
  right: 100%;
}

.before\\:top-0::before {
  content: var(--tw-content);
  top: 0px;
}

.before\\:top-1\\/2::before {
  content: var(--tw-content);
  top: 50%;
}

.before\\:top-\\[calc\\(50\\%_-_1px\\)\\]::before {
  content: var(--tw-content);
  top: calc(50% - 1px);
}

.before\\:z-10::before {
  content: var(--tw-content);
  z-index: 10;
}

.before\\:z-\\[10\\]::before {
  content: var(--tw-content);
  z-index: 10;
}

.before\\:z-\\[1\\]::before {
  content: var(--tw-content);
  z-index: 1;
}

.before\\:aspect-square::before {
  content: var(--tw-content);
  aspect-ratio: 1 / 1;
}

.before\\:aspect-video::before {
  content: var(--tw-content);
  aspect-ratio: 16 / 9;
}

.before\\:h-1\\/4::before {
  content: var(--tw-content);
  height: 25%;
}

.before\\:h-\\[1px\\]::before {
  content: var(--tw-content);
  height: 1px;
}

.before\\:h-\\[2px\\]::before {
  content: var(--tw-content);
  height: 2px;
}

.before\\:h-\\[64px\\]::before {
  content: var(--tw-content);
  height: 64px;
}

.before\\:h-full::before {
  content: var(--tw-content);
  height: 100%;
}

.before\\:w-1\\/2::before {
  content: var(--tw-content);
  width: 50%;
}

.before\\:w-1\\/4::before {
  content: var(--tw-content);
  width: 25%;
}

.before\\:w-20::before {
  content: var(--tw-content);
  width: 5rem;
}

.before\\:w-4::before {
  content: var(--tw-content);
  width: 1rem;
}

.before\\:w-4\\/5::before {
  content: var(--tw-content);
  width: 80%;
}

.before\\:w-40::before {
  content: var(--tw-content);
  width: 10rem;
}

.before\\:w-8::before {
  content: var(--tw-content);
  width: 2rem;
}

.before\\:w-full::before {
  content: var(--tw-content);
  width: 100%;
}

.before\\:origin-bottom-right::before {
  content: var(--tw-content);
  transform-origin: bottom right;
}

.before\\:-translate-x-1\\/2::before {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.before\\:-translate-y-1\\/2::before {
  content: var(--tw-content);
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.before\\:rotate-45::before {
  content: var(--tw-content);
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.before\\:rotate-\\[30deg\\]::before {
  content: var(--tw-content);
  --tw-rotate: 30deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.before\\:rounded-\\[10px\\]::before {
  content: var(--tw-content);
  border-radius: 10px;
}

.before\\:rounded-\\[50\\%\\]::before {
  content: var(--tw-content);
  border-radius: 50%;
}

.before\\:rounded-full::before {
  content: var(--tw-content);
  border-radius: 9999px;
}

.before\\:rounded-bl-\\[30px\\]::before {
  content: var(--tw-content);
  border-bottom-left-radius: 30px;
}

.before\\:rounded-br-\\[30px\\]::before {
  content: var(--tw-content);
  border-bottom-right-radius: 30px;
}

.before\\:rounded-tl-\\[30px\\]::before {
  content: var(--tw-content);
  border-top-left-radius: 30px;
}

.before\\:border::before {
  content: var(--tw-content);
  border-width: 1px;
}

.before\\:border-gray-200::before {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.before\\:border-gray-300::before {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.before\\:bg-gray-100::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.before\\:bg-gray-300::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.before\\:bg-white::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.before\\:bg-gradient-to-b::before {
  content: var(--tw-content);
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}

.before\\:bg-gradient-to-br::before {
  content: var(--tw-content);
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.before\\:bg-gradient-to-l::before {
  content: var(--tw-content);
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}

.before\\:bg-gradient-to-r::before {
  content: var(--tw-content);
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.before\\:bg-gradient-to-t::before {
  content: var(--tw-content);
  background-image: linear-gradient(to top, var(--tw-gradient-stops));
}

.before\\:from-\\[\\#333333\\]::before {
  content: var(--tw-content);
  --tw-gradient-from: #333333 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(51 51 51 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.before\\:from-black::before {
  content: var(--tw-content);
  --tw-gradient-from: #000 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.before\\:from-gray-100::before {
  content: var(--tw-content);
  --tw-gradient-from: #f3f4f6 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(243 244 246 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.before\\:from-transparent::before {
  content: var(--tw-content);
  --tw-gradient-from: transparent var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.before\\:from-white\\/10::before {
  content: var(--tw-content);
  --tw-gradient-from: rgb(255 255 255 / 0.1) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.before\\:from-white\\/20::before {
  content: var(--tw-content);
  --tw-gradient-from: rgb(255 255 255 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.before\\:from-white\\/30::before {
  content: var(--tw-content);
  --tw-gradient-from: rgb(255 255 255 / 0.3) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.before\\:from-white\\/50::before {
  content: var(--tw-content);
  --tw-gradient-from: rgb(255 255 255 / 0.5) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.before\\:via-gray-100\\/50::before {
  content: var(--tw-content);
  --tw-gradient-to: rgb(243 244 246 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), rgb(243 244 246 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);
}

.before\\:via-white\\/20::before {
  content: var(--tw-content);
  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.2) var(--tw-gradient-via-position), var(--tw-gradient-to);
}

.before\\:to-\\[\\#999999\\]::before {
  content: var(--tw-content);
  --tw-gradient-to: #999999 var(--tw-gradient-to-position);
}

.before\\:to-transparent::before {
  content: var(--tw-content);
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
}

.before\\:to-white::before {
  content: var(--tw-content);
  --tw-gradient-to: #fff var(--tw-gradient-to-position);
}

.before\\:to-white\\/10::before {
  content: var(--tw-content);
  --tw-gradient-to: rgb(255 255 255 / 0.1) var(--tw-gradient-to-position);
}

.before\\:to-white\\/20::before {
  content: var(--tw-content);
  --tw-gradient-to: rgb(255 255 255 / 0.2) var(--tw-gradient-to-position);
}

.before\\:to-white\\/30::before {
  content: var(--tw-content);
  --tw-gradient-to: rgb(255 255 255 / 0.3) var(--tw-gradient-to-position);
}

.before\\:blur-md::before {
  content: var(--tw-content);
  --tw-blur: blur(12px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.before\\:blur-xl::before {
  content: var(--tw-content);
  --tw-blur: blur(24px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:-bottom-1::after {
  content: var(--tw-content);
  bottom: -0.25rem;
}

.after\\:bottom-0::after {
  content: var(--tw-content);
  bottom: 0px;
}

.after\\:bottom-1\\/2::after {
  content: var(--tw-content);
  bottom: 50%;
}

.after\\:bottom-\\[calc\\(50\\%_\\+_1px\\)\\]::after {
  content: var(--tw-content);
  bottom: calc(50% + 1px);
}

.after\\:left-0::after {
  content: var(--tw-content);
  left: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:left-\\[1px\\]::after {
  content: var(--tw-content);
  left: 1px;
}

.after\\:right-0::after {
  content: var(--tw-content);
  right: 0px;
}

.after\\:right-\\[1px\\]::after {
  content: var(--tw-content);
  right: 1px;
}

.after\\:right-full::after {
  content: var(--tw-content);
  right: 100%;
}

.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}

.after\\:top-1\\/2::after {
  content: var(--tw-content);
  top: 50%;
}

.after\\:top-\\[1px\\]::after {
  content: var(--tw-content);
  top: 1px;
}

.after\\:z-\\[1\\]::after {
  content: var(--tw-content);
  z-index: 1;
}

.after\\:aspect-square::after {
  content: var(--tw-content);
  aspect-ratio: 1 / 1;
}

.after\\:aspect-video::after {
  content: var(--tw-content);
  aspect-ratio: 16 / 9;
}

.after\\:h-1\\/2::after {
  content: var(--tw-content);
  height: 50%;
}

.after\\:h-4\\/5::after {
  content: var(--tw-content);
  height: 80%;
}

.after\\:h-\\[10\\%\\]::after {
  content: var(--tw-content);
  height: 10%;
}

.after\\:h-\\[2px\\]::after {
  content: var(--tw-content);
  height: 2px;
}

.after\\:h-\\[64px\\]::after {
  content: var(--tw-content);
  height: 64px;
}

.after\\:h-full::after {
  content: var(--tw-content);
  height: 100%;
}

.after\\:w-1\\/2::after {
  content: var(--tw-content);
  width: 50%;
}

.after\\:w-1\\/4::after {
  content: var(--tw-content);
  width: 25%;
}

.after\\:w-20::after {
  content: var(--tw-content);
  width: 5rem;
}

.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}

.after\\:w-8::after {
  content: var(--tw-content);
  width: 2rem;
}

.after\\:w-\\[6px\\]::after {
  content: var(--tw-content);
  width: 6px;
}

.after\\:w-\\[calc\\(100\\%_-_1px\\)\\]::after {
  content: var(--tw-content);
  width: calc(100% - 1px);
}

.after\\:w-\\[calc\\(50\\%_-_1px\\)\\]::after {
  content: var(--tw-content);
  width: calc(50% - 1px);
}

.after\\:w-full::after {
  content: var(--tw-content);
  width: 100%;
}

.after\\:origin-bottom-right::after {
  content: var(--tw-content);
  transform-origin: bottom right;
}

.after\\:origin-left::after {
  content: var(--tw-content);
  transform-origin: left;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\\:-translate-y-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\\:translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\\:translate-y-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\\:rotate-45::after {
  content: var(--tw-content);
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\\:rotate-\\[-30deg\\]::after {
  content: var(--tw-content);
  --tw-rotate: -30deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\\:scale-x-\\[var\\(--scale-x\\)\\]::after {
  content: var(--tw-content);
  --tw-scale-x: var(--scale-x);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\\:rounded-\\[9px\\]::after {
  content: var(--tw-content);
  border-radius: 9px;
}

.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}

.after\\:rounded-bl-\\[30px\\]::after {
  content: var(--tw-content);
  border-bottom-left-radius: 30px;
}

.after\\:rounded-br-\\[30px\\]::after {
  content: var(--tw-content);
  border-bottom-right-radius: 30px;
}

.after\\:rounded-tl-\\[30px\\]::after {
  content: var(--tw-content);
  border-top-left-radius: 30px;
}

.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}

.after\\:border-gray-200::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.after\\:bg-\\[\\#121212\\]::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(18 18 18 / var(--tw-bg-opacity));
}

.after\\:bg-\\[\\#999999\\]::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
}

.after\\:bg-\\[var\\(--blue-primary\\)\\]::after {
  content: var(--tw-content);
  background-color: var(--blue-primary);
}

.after\\:bg-black::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.after\\:bg-gray-100::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.after\\:bg-purple-300::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(216 180 254 / var(--tw-bg-opacity));
}

.after\\:bg-purple-400::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(192 132 252 / var(--tw-bg-opacity));
}

.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.after\\:bg-white\\/30::after {
  content: var(--tw-content);
  background-color: rgb(255 255 255 / 0.3);
}

.after\\:bg-white\\/80::after {
  content: var(--tw-content);
  background-color: rgb(255 255 255 / 0.8);
}

.after\\:bg-gradient-to-l::after {
  content: var(--tw-content);
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}

.after\\:from-black::after {
  content: var(--tw-content);
  --tw-gradient-from: #000 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.after\\:to-transparent::after {
  content: var(--tw-content);
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
}

.after\\:opacity-0::after {
  content: var(--tw-content);
  opacity: 0;
}

.after\\:opacity-20::after {
  content: var(--tw-content);
  opacity: 0.2;
}

.after\\:blur-md::after {
  content: var(--tw-content);
  --tw-blur: blur(12px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.after\\:transition-transform::after {
  content: var(--tw-content);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.after\\:duration-1000::after {
  content: var(--tw-content);
  transition-duration: 1000ms;
}

.checked\\:accent-purple-400:checked {
  accent-color: #c084fc;
}

.checked\\:before\\:border-2:checked::before {
  content: var(--tw-content);
  border-width: 2px;
}

.checked\\:before\\:border-purple-400:checked::before {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(192 132 252 / var(--tw-border-opacity));
}

.checked\\:after\\:opacity-100:checked::after {
  content: var(--tw-content);
  opacity: 1;
}

.hover\\:translate-y-2:hover {
  --tw-translate-y: 0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\\:border-gray-400:hover {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.hover\\:border-purple-100:hover {
  --tw-border-opacity: 1;
  border-color: rgb(243 232 255 / var(--tw-border-opacity));
}

.hover\\:border-purple-400:hover {
  --tw-border-opacity: 1;
  border-color: rgb(192 132 252 / var(--tw-border-opacity));
}

.hover\\:border-red-200:hover {
  --tw-border-opacity: 1;
  border-color: rgb(254 202 202 / var(--tw-border-opacity));
}

.hover\\:border-white\\/20:hover {
  border-color: rgb(255 255 255 / 0.2);
}

.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(187 247 208 / var(--tw-bg-opacity));
}

.hover\\:bg-purple-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 232 255 / var(--tw-bg-opacity));
}

.hover\\:bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.hover\\:bg-white\\/10:hover {
  background-color: rgb(255 255 255 / 0.1);
}

.hover\\:bg-white\\/20:hover {
  background-color: rgb(255 255 255 / 0.2);
}

.hover\\:bg-white\\/5:hover {
  background-color: rgb(255 255 255 / 0.05);
}

.hover\\:text-\\[\\#333333\\]:hover {
  --tw-text-opacity: 1;
  color: rgb(51 51 51 / var(--tw-text-opacity));
}

.hover\\:text-\\[var\\(--blue-primary\\)\\]:hover {
  color: var(--blue-primary);
}

.hover\\:text-inherit:hover {
  color: inherit;
}

.hover\\:text-purple-400:hover {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity));
}

.hover\\:text-purple-600:hover {
  --tw-text-opacity: 1;
  color: rgb(147 51 234 / var(--tw-text-opacity));
}

.hover\\:text-red-400:hover {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}

.hover\\:text-white\\/80:hover {
  color: rgb(255 255 255 / 0.8);
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.hover\\:shadow-none:hover {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\\:backdrop-blur-md:hover {
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.focus\\:border-none:focus {
  border-style: none;
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:outline-2:focus {
  outline-width: 2px;
}

.focus\\:outline-purple-300:focus {
  outline-color: #d8b4fe;
}

.active\\:scale-75:active {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:bg-\\[var\\(--blue-hover\\)\\] {
  background-color: var(--blue-hover);
}

.group:hover .group-hover\\:bg-transparent {
  background-color: transparent;
}

.group:hover .group-hover\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\\:blur-none {
  --tw-blur:  ;
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.has-\\[input\\:focus\\]\\:border-\\[\\#333333\\]:has(input:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity));
}

.has-\\[input\\:focus\\]\\:text-inherit:has(input:focus) {
  color: inherit;
}

@media (min-width: 768px) {

  .md\\:min-w-\\[200px\\] {
    min-width: 200px;
  }

  .md\\:gap-10 {
    gap: 2.5rem;
  }

  .md\\:gap-20 {
    gap: 5rem;
  }

  .md\\:gap-6 {
    gap: 1.5rem;
  }

  .md\\:p-6 {
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {

  .lg\\:p-8 {
    padding: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./3/style.css"],"names":[],"mappings":"AAAA;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc,CAAd;;CAAc,CAAd;;;CAAc;;AAAd;;;EAAA,sBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,mBAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,gBAAc;AAAA;;AAAd;;;;;;;;CAAc;;AAAd;;EAAA,gBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gBAAc,EAAd,MAAc;EAAd,cAAc;KAAd,WAAc,EAAd,MAAc;EAAd,+HAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,wCAAc,EAAd,MAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,yCAAc;UAAd,iCAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;EAAA,kBAAc;EAAd,oBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;EAAd,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,mBAAc;AAAA;;AAAd;;;;;CAAc;;AAAd;;;;EAAA,+GAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,cAAc;EAAd,cAAc;EAAd,kBAAc;EAAd,wBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,WAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;EAAd,yBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;EAAA,oBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gCAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,uBAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,SAAc,EAAd,MAAc;EAAd,UAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,oBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,0BAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,YAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,6BAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,0BAAc,EAAd,MAAc;EAAd,aAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,kBAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;;;;;;;;EAAA,SAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,UAAc;AAAA;;AAAd;;;EAAA,gBAAc;EAAd,SAAc;EAAd,UAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,eAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;;;;EAAA,cAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;EAAd,YAAc;AAAA;;AAAd,wEAAc;AAAd;EAAA,aAAc;AAAA;AACd;EAAA;AAAoB;AAApB;EAAA;AAAoB;AAApB;;EAAA;IAAA;EAAoB;;EAApB;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;;EAApB;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;;EAApB;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;;EAApB;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;;EAApB;IAAA;EAAoB;AAAA;AACpB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,wBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA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A;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,0EAAmB;EAAnB,8FAAmB;EAAnB;AAAmB;AAAnB;EAAA,gDAAmB;EAAnB,6DAAmB;EAAnB;AAAmB;AAAnB;EAAA,+EAAmB;EAAnB,mGAAmB;EAAnB;AAAmB;AAAnB;EAAA,6EAAmB;EAAnB,iGAAmB;EAAnB;AAAmB;AAAnB;EAAA,0CAAmB;EAAnB,uDAAmB;EAAnB;AAAmB;AAAnB;EAAA,gFAAmB;EAAnB,oGAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,2GAAmB;EAAnB,yGAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,YAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kGAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,8BAAmB;EAAnB,+QAAmB;EAAnB;AAAmB;AAAnB;EAAA,8BAAmB;EAAnB,+QAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB,+QAAmB;EAAnB;AAAmB;AAAnB;EAAA,6BAAmB;EAAnB,+QAAmB;EAAnB;AAAmB;AAAnB;EAAA,+QAAmB;EAAnB;AAAmB;AAAnB;EAAA,2KAAmB;EAAnB,mKAAmB;EAAnB,4LAAmB;EAAnB,mEAAmB;EAAnB;AAAmB;AAAnB;EAAA,gKAAmB;EAAnB,wJAAmB;EAAnB,iLAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,4CAAmB;EAAnB,oCAAmB;EAAnB,6DAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,8DAAmB;EAAnB,sDAAmB;EAAnB,+EAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,qCAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,iCAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,2BAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,uCAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,4BAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,8BAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;;AAFnB;EAAA;AAKA;;AALA;EAAA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,sBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,sBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,kBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,kBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,sBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,sBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,kBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,kBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,kBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,4DAKA;EALA,kEAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,yDAKA;EALA,+DAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,4DAKA;EALA,qEAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,gEAKA;EALA,+DAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,2EAKA;EALA,qEAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,2EAKA;EALA,qEAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,2EAKA;EALA,qEAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,2EAKA;EALA,qEAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,sEAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,sEAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,qBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA,qBAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;AAKA;;AALA;EAAA,0BAKA;EALA;A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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./3/style.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./3/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./3/style.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./3/style.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./assets/images/crypto-page/holographic_asset.gif":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "970897a59cd89e712bbf.gif";

/***/ }),

/***/ "./assets/images/crypto-page/holographic_asset_1.gif":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77b49ee971214ab1cfcd.gif";

/***/ }),

/***/ "./assets/images/crypto-page/holographic_asset_2.gif":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4af4deaed45598284d3b.gif";

/***/ }),

/***/ "./assets/images/crypto-page/holographic_asset_3.gif":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "979661ed223410792464.gif";

/***/ }),

/***/ "./assets/images/crypto-page/holographic_asset_4.gif":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35de7c1cb3d324e0c573.gif";

/***/ }),

/***/ "./assets/images/crypto-page/holographic_asset_5.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07ba1568395b6784fcc4.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/holographic_asset_6.gif":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04cd984bc40fca6b77e7.gif";

/***/ }),

/***/ "./assets/images/crypto-page/holographic_asset_7.gif":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f0497b4874893f488e1.gif";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_1.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59a15c917c1fe7440b05.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_10.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d5299ed9a2215d00dea.png";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_11.jpeg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5aa28bb230a105df64b5.jpeg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_12.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13e75ee624b615769768.png";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_13.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe44e40fcb37f66da465.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_14.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26956cb2c90d7a622d9c.png";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_2.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dccf8b847f5ed1b39a5d.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_3.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24acc2b13dc4627331dc.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_4.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "942fa1b6c158e63275b6.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_5.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f102a091fa33ed216d2.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_6.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86414ac183dabfcead38.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_7.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe3607122aa7e2588944.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_8.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9f2bc6dd7a8c5e1fd93.jpg";

/***/ }),

/***/ "./assets/images/crypto-page/iridescent_asset_9.jpeg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bf11df2aedb880d3d52.jpeg";

/***/ })

}]);
//# sourceMappingURL=3_index_js.js.map