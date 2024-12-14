"use strict";
(self["webpackChunk_20_day_challenge"] = self["webpackChunk_20_day_challenge"] || []).push([["2_index_js"],{

/***/ "./2/App.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-icons/bi/index.mjs");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react-icons/io5/index.mjs");
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/react-icons/fa6/index.mjs");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/react-icons/fi/index.mjs");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-icons/ri/index.mjs");
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-icons/tb/index.mjs");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _pages_Main_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./2/pages/Main.jsx");
/* harmony import */ var _pages_Security_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./2/pages/Security.jsx");
/* harmony import */ var _pages_Success_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./2/pages/Success.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }












var CHECKOUT_STEPS = [{
  Icon: react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbCreditCardPay,
  title: "Choose payment"
}, {
  Icon: react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbPaywall,
  title: "Authenticate"
}, {
  Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiThumbUpLine,
  title: "All done"
}];
var STEPS = [_pages_Main_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _pages_Security_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _pages_Success_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]];
function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      loading: false,
      step: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    _useState2$ = _useState2[0],
    loading = _useState2$.loading,
    step = _useState2$.step,
    setStep = _useState2[1];
  var CurrentStepElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return STEPS[step];
  });
  var changeStep = function changeStep(num) {
    setStep({
      step: Number(num) >= 0 ? num : step + 1,
      loading: true
    });
    setTimeout(function () {
      return setStep(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          loading: false
        });
      });
    }, 2000);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      '--max-width': '1128px'
    },
    className: "bg-gray-100 text-[#333333] min-h-screen w-full flex flex-col items-center gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "sticky top-0 z-[999] w-full bg-white border-b border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-[var(--max-width)] py-2 px-4 m-auto w-full flex justify-between gap-4 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex items-center tracking-tighter font-bold text-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-purple-400"
  }, "nox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-purple-400"
  }, ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex items-center border border-gray-200 w-full max-w-[480px] rounded-md overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "flex-1 text-sm h-10 bg-transparent px-4 py-1 focus:outline-none",
    placeholder: "Search product",
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex items-center justify-center aspect-sqare rounded-[4px] w-8 mr-1 aspect-square bg-purple-400 text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiSearch, {
    size: 18
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "relative bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center gap-2 p-1 pr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex w-8 rounded-md bg-gray-200 aspect-square items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoCartOutline, {
    size: 18
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex flex-col whitespace-nowrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold text-xs"
  }, "My cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: " rounded-full text-[.65rem] text-gray-400"
  }, "10 items"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex px-3 h-10 rounded-md bg-gray-100 hover:bg-gray-200 items-center justify-center gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiUser, {
    size: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaAngleDown, {
    size: 12
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full max-w-[var(--max-width)] px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-4 -ml-14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "w-10 hover:bg-gray-200 aspect-square rounded-full flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaArrowLeft, {
    size: 20
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-4xl font-bold"
  }, "Product Checkout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      '--scale-x': step === 1 ? '0.5' : step === 2 ? '1' : '0'
    },
    className: "relative mt-12 grid grid-cols-3 w-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-[1px] before:bg-gray-300 after:absolute after:top-1/2 after:left-0 after:origin-left after:transition-transform after:duration-1000 after:-translate-y-1/2 after:scale-x-[var(--scale-x)] after:w-full after:h-[2px] after:bg-purple-300 after:rounded-full"
  }, CHECKOUT_STEPS.map(function (_ref, index, arr) {
    var title = _ref.title,
      Icon = _ref.Icon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "flex ".concat(index >= 1 && index < arr.length - 1 ? 'justify-center' : index === arr.length - 1 ? 'justify-end' : 'justify-start')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return changeStep(index);
      },
      key: index,
      className: "relative z-[1] p-1 w-fit flex items-center gap-2 rounded-md border ".concat(index <= step ? 'border-purple-300 bg-white text-purple-400 transition-[border-color] duration-300' : 'border-gray-300 bg-white text-gray-400')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "w-6 aspect-square flex items-center justify-center rounded-[4px] text-sm font-bold ".concat(index <= step ? 'bg-purple-100 transition-[background-color] duration-300' : 'bg-gray-100 text-gray-400')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      size: 16
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-semibold whitespace-nowrap mr-3"
    }, index + 1, ". ", title)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.AnimatePresence, {
    mode: "wait"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.span, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    onExit: {
      opacity: 0
    },
    transition: {
      duration: .3,
      ease: "easeInOut"
    },
    key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    className: "flex flex-col gap-6 items-center justify-center mt-10 p-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex gap-3 justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "w-6 aspect-square rounded-full border border-purple-400 bg-purple-100 animate-[pulse_1s_ease_infinite]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "w-6 aspect-square rounded-full border border-purple-400 bg-purple-100 animate-[pulse_1s_ease_300ms_infinite]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "w-6 aspect-square rounded-full border border-purple-400 bg-purple-100 animate-[pulse_1s_ease_600ms_infinite]"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold text-sm text-gray-400"
  }, "Please wait...")) : CurrentStepElement ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
    key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    onExit: {
      opacity: 0
    },
    transition: {
      duration: .3,
      ease: "easeInOut"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CurrentStepElement, {
    next: changeStep
  })) : null))));
}

/***/ }),

/***/ "./2/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/client.js");
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./2/App.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./2/style.css");




var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./2/pages/CardsList.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardsList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-icons/fa6/index.mjs");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-icons/fc/index.mjs");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-icons/md/index.mjs");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-icons/si/index.mjs");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-icons/bi/index.mjs");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-icons/ri/index.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var CARDS = [{
  cardNumber: "1234 1234 1234 1234",
  expiryDate: "02/12",
  backgroundColor: "from-red-800 via-red-600 to-red-800",
  Cvv: 120,
  Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_1__.SiVisa,
  cardUserName: "Inoue Orihime"
}, {
  cardNumber: "4012 1233 3883 7654",
  expiryDate: "11/10",
  backgroundColor: "from-gray-600 via-gray-400 to-gray-600",
  Cvv: 746,
  Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_1__.SiVisa,
  cardUserName: "Kuchiki Rukia"
}, {
  cardNumber: "2038 1238 2389 2388",
  expiryDate: "08/22",
  backgroundColor: "from-blue-800 via-blue-600 to-blue-800",
  Cvv: 384,
  Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiMastercardFill,
  cardUserName: "Kurosaki Ichigo"
}, {
  cardNumber: "8393 8899 3758 7378",
  expiryDate: "02/08",
  backgroundColor: "from-gray-900 via-gray-700 to-gray-900",
  Cvv: 733,
  Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiMastercardFill,
  cardUserName: "Abarai Renji"
}];
function CardsList(_ref) {
  var showCards = _ref.showCards,
    setShowCards = _ref.setShowCards,
    setCardDetails = _ref.setCardDetails;
  var cardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    cardIndex = _useState2[0],
    setCardIndex = _useState2[1];
  var transform = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _cardRef$current;
    return "translateX(-".concat(cardIndex * ((cardRef === null || cardRef === void 0 || (_cardRef$current = cardRef.current) === null || _cardRef$current === void 0 ? void 0 : _cardRef$current.offsetWidth) + 16), "px)");
  }, [cardIndex]);
  var next = function next() {
    return setCardIndex(cardIndex + 1 < CARDS.length ? cardIndex + 1 : 0);
  };
  var prev = function prev() {
    return setCardIndex(cardIndex - 1 >= 0 ? cardIndex - 1 : CARDS.length - 1);
  };
  var chooseCard = function chooseCard(values) {
    setCardDetails(_objectSpread(_objectSpread({}, values), {}, {
      saved: true,
      choseSaved: true
    }));
    setShowCards(false);
  };
  if (!showCards) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative w-full pt-4 border-t border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-6 w-full animate-fadeIn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex flex-1 max-w-[360px] pr-2 rounded-md gap-2 text-gray-400 items-center bg-white border border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "h-10 focus:outline-none flex-1 px-4 bg-transparent text-sm",
    placeholder: "Search saved cards"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiSearch, {
    size: 18
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowCards(false);
    },
    className: "w-10 aspect-square rounded-md bg-white border border-white hover:border-red-200 hover:text-red-400 hover:bg-white flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdClose, {
    size: 18
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 overflow-hidden relative flex flex-col gap-4 before:absolute before:z-10 before:top-0 before:right-0 before:w-1/4 before:h-full before:bg-gradient-to-l before:from-gray-100 before:via-gray-100/50 before:to-transparent before:pointer-events-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: cardRef,
    className: "opacity-0 w-fit flex flex-col gap-2 p-4 pb-6 rounded-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "uppercase text-xs font-semibold font-mono whitespace-nowrap"
  }, "Credit card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex items-center justify-center h-[20px]"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "h-[60px]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold text-3xl font-mono whitespace-nowrap"
  }, "1234 1234 1234 1234"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-end items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[.5rem] uppercase"
  }, "Valid", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " until"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdArrowRight, {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-mono font-semibold text-lg"
  }, "01/33"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-mono text-lg font-semibold uppercase"
  }, "Ezema Emmanuel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-center gap-3 px-4"
  }, CARDS.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: index,
      className: "block ".concat(index === cardIndex ? 'w-10 bg-purple-400' : 'w-2', " transition-[background-color] h-2 rounded-full border border-purple-400")
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: {
      transform: transform
    },
    className: "transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_0.3,_1)] w-full flex justify-start items-center absolute top-0 left-0 overflow-x-visible px-12 overflow-y-clip gap-4"
  }, CARDS.map(function (_ref2, index) {
    var backgroundColor = _ref2.backgroundColor,
      cardNumber = _ref2.cardNumber,
      cardUserName = _ref2.cardUserName,
      expiryDate = _ref2.expiryDate,
      Cvv = _ref2.Cvv,
      Icon = _ref2.Icon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "p-1 rounded-lg border border-transparent hover:border-gray-400"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: index,
      onClick: function onClick() {
        return chooseCard({
          cardNumber: cardNumber,
          cardUserName: cardUserName,
          expiryDate: expiryDate,
          Cvv: Cvv
        });
      },
      className: "cursor-pointer flex flex-col gap-2 bg-gradient-to-br ".concat(backgroundColor ? backgroundColor : 'from-gray-600 via-gray-400 to-gray-600', " text-white p-4 rounded-md")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-full flex justify-between gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "uppercase text-xs font-semibold font-mono whitespace-nowrap"
    }, "Credit card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "flex items-center justify-center h-[20px]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      size: 30
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fc__WEBPACK_IMPORTED_MODULE_5__.FcSimCardChip, {
      size: 60
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col gap-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-semibold text-3xl font-mono whitespace-nowrap"
    }, cardNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex justify-end items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-[.5rem] uppercase"
    }, "Valid", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " until"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdArrowRight, {
      size: 16
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-mono font-semibold text-lg"
    }, expiryDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-mono text-lg font-semibold uppercase"
    }, cardUserName)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: prev,
    className: "z-10 absolute top-1/2 left-0 -translate-y-1/2 w-10 aspect-square rounded-full border border-gray-300 bg-gray-100 hover:border-gray-400 hover:bg-white text-gray-500 hover:text-[#333333] shadow-md hover:shadow-none flex items-center justify-center transition-transform active:scale-75"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaArrowLeft, {
    size: 16
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: next,
    className: "z-10 absolute top-1/2 right-0 -translate-y-1/2 w-10 aspect-square rounded-full border border-gray3200 bg-gray-100 hover:border-gray-400 hover:bg-white text-gray-500 hover:text-[#333333] shadow-md hover:shadow-none flex items-center justify-center transition-transform active:scale-75"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaArrowRight, {
    size: 16
  })))));
}

/***/ }),

/***/ "./2/pages/Main.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/react-icons/bs/index.mjs");
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/react-icons/fa6/index.mjs");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/react-icons/ri/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _CardsList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./2/pages/CardsList.jsx");
/* harmony import */ var _assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./assets/images/paypal.png");
/* harmony import */ var _assets_images_visa_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./assets/images/visa.png");
/* harmony import */ var _assets_images_mastercard_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./assets/images/mastercard.png");
/* harmony import */ var _assets_images_verve_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./assets/images/verve.png");
/* harmony import */ var _assets_images_g_pay_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./assets/images/g-pay.webp");
/* harmony import */ var _assets_images_money_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./assets/images/money.png");
/* harmony import */ var _assets_images_failed_payment_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./assets/images/failed_payment.jpg");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }













var PAYMENT_OPTIONS = [{
  title: "Paypal",
  images: [_assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_2__]
}, {
  title: "Credit card",
  images: [_assets_images_visa_png__WEBPACK_IMPORTED_MODULE_3__, _assets_images_mastercard_png__WEBPACK_IMPORTED_MODULE_4__, _assets_images_verve_png__WEBPACK_IMPORTED_MODULE_5__]
}, {
  title: "Google pay",
  images: [_assets_images_g_pay_webp__WEBPACK_IMPORTED_MODULE_6__]
}, {
  title: "Cash on delivery",
  images: [_assets_images_money_png__WEBPACK_IMPORTED_MODULE_7__]
}];
var ITEMS = [{
  name: "Used Nikon D3100 with 18-55mm Lens",
  quantity: 2,
  price: "$1,003.85"
}, {
  name: "108MP Rear Camera Amoled Display",
  quantity: 10,
  price: "$104.53"
}];
function Main(_ref) {
  var next = _ref.next;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showCoupon = _useState2[0],
    setShowCoupon = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showCards = _useState4[0],
    setShowCards = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      cardUserName: "",
      cardNumber: "",
      expiryDate: "",
      Cvv: "",
      saved: false,
      choseSaved: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    _useState6$ = _useState6[0],
    cardUserName = _useState6$.cardUserName,
    cardNumber = _useState6$.cardNumber,
    expiryDate = _useState6$.expiryDate,
    Cvv = _useState6$.Cvv,
    saved = _useState6$.saved,
    setCardDetails = _useState6[1];
  function formatAndEditCardValue(_ref2) {
    var field = _ref2.field,
      fieldValue = _ref2.fieldValue,
      maxLength = _ref2.maxLength,
      seperatingNum = _ref2.seperatingNum,
      joiner = _ref2.joiner;
    var value = fieldValue.replace(/\D/g, '');
    var numberGroups = [];
    if (value.length > maxLength) return;
    for (var i = 0; i < maxLength && i < value.length; i += seperatingNum) {
      var numberGroup = [];
      for (var j = 0; j < seperatingNum; j++) numberGroup.push("");
      numberGroups.push(numberGroup);
    }
    ;
    for (var _i = 0; _i < value.length; _i++) {
      var index = Math.floor(_i / seperatingNum);
      var subIndex = _i % seperatingNum;
      numberGroups[index][subIndex] = value[_i];
    }
    ;
    var newValue = numberGroups.map(function (numberGroup) {
      return numberGroup.join("");
    }).join(joiner).replace(/\s+$/, '');
    setCardDetails(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty(_defineProperty({}, field, newValue), "saved", prev.choseSaved ? false : prev.saved));
    });
  }
  var handleChange = function handleChange(event) {
    if (!event.target) return;
    switch (event.target.id) {
      case "cardNumber":
        formatAndEditCardValue({
          field: "cardNumber",
          fieldValue: event.target.value,
          maxLength: 16,
          seperatingNum: 4,
          joiner: " "
        });
        break;
      case 'expiryDate':
        formatAndEditCardValue({
          field: "expiryDate",
          fieldValue: event.target.value,
          maxLength: 4,
          seperatingNum: 2,
          joiner: "/"
        });
        break;
      default:
        if (event.target.id === "Cvv" && event.target.value.length > 3) return;
        setCardDetails(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty(_defineProperty(_defineProperty({}, event.target.id, event.target.value), "choseSaved", false), "saved", prev.choseSaved ? false : prev.saved));
        });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-10 grid grid-cols-[2fr,_1fr] grid-rows-[1fr,_auto] gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-6 bg-white border border-gray-200 rounded-lg p-4 md:p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "capitalize text-xl font-semibold"
  }, "Select payment option"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm text-gray-400"
  }, "All transactions are secure and encrypted")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col gap-4 mt-2"
  }, PAYMENT_OPTIONS.map(function (_ref3, index) {
    var title = _ref3.title,
      images = _ref3.images;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index,
      className: "".concat(title === 'Credit card' ? 'bg-gray-100' : '', " p-4 flex flex-col rounded-md border border-gray-200 hover:border-gray-400")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex gap-4 items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "radio",
      checked: title === 'Credit card',
      className: "relative w-4 aspect-square appearance-none rounded-full bg-white before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:border before:rounded-full before:border-gray-300 checked:before:border-2 checked:before:border-purple-400 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1/2 after:h-1/2 after:rounded-full after:bg-purple-400 after:opacity-0 checked:after:opacity-100"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-semibold flex-1"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2"
    }, images.map(function (image, index2) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        key: index2,
        src: image,
        className: "".concat(index === 2 ? 'h-4' : index === 3 ? 'h-6' : 'h-3', " w-auto object-contain")
      });
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(title === 'Credit card' ? 'flex' : 'hidden', " mt-1 flex-col gap-4")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs px-8 text-gray-500"
    }, "Pay securely using your Visa, Mastercard, or Verve Card."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col gap-4 pt-6 border-t border-gray-300"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-semibold"
    }, "Card Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "flex items-center rounded-md bg-white border border-gray-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      id: "cardNumber",
      value: cardNumber,
      onChange: handleChange,
      placeholder: "1234 1234 1234 1234",
      className: "bg-transparent text-sm flex-1 px-4 min-h-10 focus:outline-none"
    }), !showCards ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setShowCards(true);
      },
      title: "Show saved cards",
      className: "flex items-center justify-center w-8 m-1 aspect-square rounded-full text-gray-400 hover:text-inherit hover:bg-gray-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsCreditCard2Front, {
      size: 18,
      className: ""
    })) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-[2fr,_1fr,_1fr] gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-semibold"
    }, "Name on card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      placeholder: "John Doe",
      id: "cardUserName",
      value: cardUserName,
      onChange: handleChange,
      className: "".concat(cardUserName.length > 0 && 'uppercase', " w-full block min-h-10 rounded-md border border-gray-200 bg-white text-sm flex-1 px-4")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-full flex flex-col gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-semibold"
    }, "Expiry date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      placeholder: "MM/YY",
      id: "expiryDate",
      value: expiryDate,
      onChange: handleChange,
      className: "w-full block min-h-10 rounded-md border border-gray-200 bg-white text-sm flex-1 px-4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-full flex flex-col gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-semibold"
    }, "CVV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "number",
      placeholder: "CVV",
      id: "Cvv",
      value: Cvv,
      onChange: handleChange,
      className: "w-full block min-h-10 rounded-md border border-gray-200 bg-white text-sm flex-1 px-4"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      id: "save_details",
      checked: saved,
      onChange: function onChange() {
        return setCardDetails(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            saved: !saved
          });
        });
      },
      className: "-mb-[2px] accent-purple-400"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: "save_details",
      className: "text-xs"
    }, "Save card details"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardsList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      showCards: showCards,
      setShowCards: setShowCards,
      setCardDetails: setCardDetails
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: next,
    className: "h-12 rounded-md bg-purple-600 text-purple-100 hover:bg-white hover:text-purple-600 border border-purple-600 flex items-center justify-center px-4 gap-2 text-sm font-semibold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Pay"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$1,202.24")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex -mt-2 items-center justify-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    id: "agree",
    className: "checked:accent-purple-400 text-white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "agree",
    className: "text-xs"
  }, "By clicking this, I agree to noxBuy's ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
    className: "text-purple-600"
  }, "Terms and Conditions"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
    className: "text-purple-600"
  }, "Privacy Policy")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-6 flex flex-col border border-gray-200 rounded-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "font-semibold text-lg"
  }, "Cancelation policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-center gap-4 -mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-gray-500 max-w-[80ch]"
  }, "At ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-purple-400 mt-4"
  }, "nox"), "Buy", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-purple-400"
  }, ".")), " we understand that plans can change unexpectedly, that's why we've crafted our cancelation policy to help you with flexibility and peace of mind. When you book a call with us, you have the freedom to modify your reservation without incurring any cancelation fees up to 12 hours/day before your schedule pick-up time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_failed_payment_jpg__WEBPACK_IMPORTED_MODULE_8__,
    className: "w-[120px] aspect-square object-cover",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "font-semibold text-purple-600 hover:underline text-sm"
  }, "See more details"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      delay: .3,
      duration: .3
    },
    className: "relative p-[1px] rounded-[12px] bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative z-10 w-full h-full rounded-[11px] flex flex-col gap-4 bg-white/80 p-6 backdrop-blur-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xl font-semibold"
  }, "Your cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "py-1 px-2 rounded-md bg-purple-100 text-purple-400 font-mono font-semibold"
  }, "10")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col gap-2 justify-start flex-1 py-4 border-y border-gray-200 overflow-x-auto"
  }, ITEMS.map(function (_ref4, index) {
    var name = _ref4.name,
      quantity = _ref4.quantity,
      price = _ref4.price;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index,
      className: "bg-white/80 rounded-md flex gap-3 p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: "block h-16 aspect-square rounded-md bg-black/10"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col justify-between gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs block font-semibold truncate max-w-[200px] text-gray-500"
    }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs text-gray-400"
    }, "Qty: ", quantity)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-sm font-semibold"
    }, price)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4 p-3 rounded-md bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold text-sm"
  }, "Order summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "flex justify-between items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-400"
  }, "Subtotal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-semibold text-gray-600"
  }, "$1,1200.00")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "flex justify-between items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-400"
  }, "Shipping"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-semibold text-gray-600"
  }, "Free")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "flex justify-between items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-gray-400"
  }, "Tax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-semibold text-gray-600"
  }, "$102.24"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm text-gray-500"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-semibold"
  }, "$1,202.24"))), showCoupon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Enter coupon code",
    className: "min-h-10 border border-black/10 block flex-1 bg-white px-3 rounded-md text-sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "min-h-10 px-6 items-center justify-center text-purple-600 bg-purple-100 border border-purple-100 hover:border-purple-400 rounded-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-semibold pb-2"
  }, "Apply"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowCoupon(true);
    },
    className: "w-full flex items-center gap-2 px-3 h-10 rounded-md bg-white text-purple-400 border border-white hover:border-purple-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_11__.RiCoupon2Fill, {
    size: 18,
    className: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex-1 text-sm text-left font-semibold"
  }, "Use coupon code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_12__.FaAngleDown, {
    size: 14
  })))))));
}

/***/ }),

/***/ "./2/pages/Security.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Security)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var interval;
function convertNumberToTime(num) {
  var min = Math.floor(num / 60);
  var sec = num % 60;
  var timeFormat = "".concat(min < 10 ? "0".concat(min) : min, ":").concat(sec < 10 ? "0".concat(sec) : sec);
  return timeFormat;
}
function Security(_ref) {
  var next = _ref.next;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['', '', '', '']),
    _useState2 = _slicedToArray(_useState, 2),
    otp = _useState2[0],
    setOtp = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(180),
    _useState4 = _slicedToArray(_useState3, 2),
    timeNumber = _useState4[0],
    setTimeNumber = _useState4[1];
  var timeFormat = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return convertNumberToTime(timeNumber);
  }, [timeNumber]);
  var handleChange = function handleChange(value, index) {
    return setOtp(function (prev) {
      var _document$getElementB;
      if (!/\d/.test(value)) return prev;
      var newValues = _toConsumableArray(prev);
      newValues[index] = value[value.length - 1] ? value[value.length - 1] : '';
      if (index < 3) (_document$getElementB = document.getElementById("otp-".concat(index + 1))) === null || _document$getElementB === void 0 || _document$getElementB.focus();
      return newValues;
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    clearInterval(interval);
    interval = setInterval(function () {
      setTimeNumber(function (prev) {
        var newValue = prev - 1;
        if (newValue <= 0) clearInterval(interval);
        return newValue > 0 ? newValue : 0;
      });
    }, 1000);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col w-max m-auto items-center gap-12 mt-10 p-6 rounded-xl bg-white border border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold text-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-purple-400"
  }, "nox"), "Buy", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-purple-400"
  }, ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-2 -mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold text-2xl text-center"
  }, "Payment Verification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm text-gray-400 text-center"
  }, "We've sent a 4-digit OTP to your device.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-4"
  }, otp.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      key: index,
      id: "otp-".concat(index),
      value: value,
      onChange: function onChange(event) {
        return handleChange(event.target.value, index);
      },
      type: "text",
      name: "otp",
      className: "no-range-input outline outline-gray-200 focus:outline-2 focus:outline-purple-300 bg-white rounded-xl aspect-square w-16 text-center text-xl"
    });
  })), timeNumber > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm text-gray-500"
  }, "Code expires in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, timeFormat)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm text-gray-500"
  }, "Code has expired ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
    className: "span hover:underline hover:text-purple-400"
  }, "resend it")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex w-full flex-col gap-4 -mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: next,
    className: "flex items-center justify-center gap-2 h-12 px-4 rounded-md bg-purple-600 border border-purple-600 text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold"
  }, "Verify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex items-center justify-center gap-2 h-12 px-4 rounded-md bg-white border border-purple-600 text-purple-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold"
  }, "Resend OTP"))));
}

/***/ }),

/***/ "./2/pages/Success.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Success)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-icons/bs/index.mjs");
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-icons/fa6/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _assets_images_visa_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./assets/images/visa.png");





var DETAILS = [{
  title: "Paid Using",
  desc: "Visa Credit Card",
  images: []
}, {
  title: "Paid For",
  desc: "2 Boots, 3 Phones... (20 items)",
  images: [_assets_images_visa_png__WEBPACK_IMPORTED_MODULE_1__]
}, {
  title: "Amount",
  desc: "$1,202.24",
  images: []
}];
var PAYMENTS = [{
  productName: "iPhone 16 Pro Max",
  price: "$1,0233.23"
}, {
  productName: "Wedding Dress",
  price: "$204.88"
}, {
  productName: "M&M - Dark Chocolate",
  price: "$10.05"
}, {
  productName: "iMac M4",
  price: "$2,200.23"
}];
function Success() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-6 mt-10 justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex w-full max-w-[600px] flex-col p-6 gap-4 bg-white border border-gray-200 rounded-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
    initial: {
      scale: 0
    },
    animate: {
      scale: [0.6, 1.4, 1]
    },
    transition: {
      type: 'spring',
      damping: 5,
      stiffness: 100
    },
    className: "flex items-center justify-center w-20 aspect-square rounded-full bg-green-400 text-green-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsCheck, {
    size: 56
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-semibold text-3xl"
  }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-gray-400 text-sm"
  }, "Your payment has been processed successfully")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col mt-6 border-b border-gray-200"
  }, DETAILS.map(function (_ref, index) {
    var title = _ref.title,
      desc = _ref.desc,
      images = _ref.images;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index,
      className: "py-4 border-t border-gray-200 grid grid-cols-[100px,_1fr,_auto] gap-2 items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-gray-400 text-sm"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-gray-600 text-sm flex-1 font-semibold"
    }, desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex gap-2 items-center"
    }, images.map(function (image, index1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        key: index1,
        src: image,
        className: "h-2 w-auto object-contain"
      });
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-4 flex gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex flex-1 items-center justify-center px-4 h-10 rounded-md border border-purple-600 bg-white text-purple-600 hover:bg-purple-100 hover:border-purple-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold text-sm"
  }, "Track order")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex flex-[2] items-center justify-center gap-2 px-4 h-10 rounded-md border border-green-100 bg-green-100 hover:bg-green-200 text-green-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold text-sm"
  }, "Continue shopping"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__.FaArrowRight, {
    size: 16
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: .3,
      delay: .2,
      eaes: 'easeInOut'
    },
    className: "flex-1 max-w-[400px] flex flex-col overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex max-w- flex-1 py-2 flex-col border border-gray-200 bg-white rounded-lg rounded-b-none overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-6 px-8 flex justify-between items-end border-b border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold text-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-purple-400"
  }, "nox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-purple-400"
  }, ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-mono text-gray-500 text-sm"
  }, "01-01-2024")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-8 mt-4 flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between gap-4 py-3 border-b border-gray-300 border-dashed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-mono text-gray-400 text-xs uppercase"
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-mono text-gray-400 text-xs uppercase"
  }, "Subtotal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col gap-4 mt-4"
  }, PAYMENTS.map(function (_ref2, index) {
    var productName = _ref2.productName,
      price = _ref2.price;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index,
      className: "flex items-center justify-between gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-mono text-gray-400"
    }, productName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-sm font-mono font-semibold text-gray-500"
    }, price));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex items-end justify-between mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-mono text-gray-400"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xl font-mono font-semibold text-gray-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs"
  }, "$"), "1,202.44")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex px-8 py-6 border mt-[-2px] border-t-white border-gray-200 bg-white rounded-lg rounded-t-none before:absolute before:z-[1] before:top-0 before:left-0 before:w-8 before:aspect-square before:rounded-full before:bg-gray-100 before:border before:border-gray-200 before:-translate-y-1/2 before:-translate-x-1/2 after:absolute after:z-[1] after:top-0 after:right-0 after:w-8 after:aspect-square after:rounded-full after:bg-gray-100 after:border after:border-gray-200 after:-translate-y-1/2 after:translate-x-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "absolute top-0 left-0 w-full h-0 border-dashed border-t-[1px] border-[0px] border-gray-300"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 5px, black 5px, black 15px, transparent 15px, transparent 18px, black 18px, black 20px, transparent 20px, transparent 25px, black 25px, black 35px, transparent 35px, transparent 40px, black 40px, black 44px, transparent 44px, transparent 50px, black 50px, black 52px, transparent 52px, transparent 54px, black 54px, black 60px)'
    },
    className: "block h-20 w-full opacity-80"
  }))));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./2/style.css":
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
.-bottom-1 {
  bottom: -0.25rem;
}
.-bottom-1\\/2 {
  bottom: -50%;
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
.max-w-\\[60\\%\\] {
  max-width: 60%;
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
.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
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
.translate-y-1 {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-10\\%\\] {
  --tw-translate-y: -10%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[10\\%\\] {
  --tw-translate-y: 10%;
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
.bg-\\[\\#010101\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(1 1 1 / var(--tw-bg-opacity));
}
.bg-\\[\\#050311\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(5 3 17 / var(--tw-bg-opacity));
}
.bg-\\[\\#0f1126\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(15 17 38 / var(--tw-bg-opacity));
}
.bg-\\[\\#121212\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(18 18 18 / var(--tw-bg-opacity));
}
.bg-\\[\\#202020\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(32 32 32 / var(--tw-bg-opacity));
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
.text-\\[\\#aaaaaa\\] {
  --tw-text-opacity: 1;
  color: rgb(170 170 170 / var(--tw-text-opacity));
}
.text-\\[\\#eeeeee\\] {
  --tw-text-opacity: 1;
  color: rgb(238 238 238 / var(--tw-text-opacity));
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
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
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
.ease-\\[cubic-bezier\\(0\\.16\\2c _1\\2c _0\\.3\\2c _1\\)\\] {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
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

.hover\\:bg-white\\/50:hover {
  background-color: rgb(255 255 255 / 0.5);
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
}`, "",{"version":3,"sources":["webpack://./2/style.css"],"names":[],"mappings":"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B;IAAA;EAAoB;AAAA;AACpB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,wBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,0BAAmB;EAAnB;AAAmB;AAAnB;EAAA,0BAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,yBAAmB;EAAnB;AAAmB;AAAnB;EAAA,4BAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,yBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA;EAAmB;;EAAnB;IAAA;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA;EAAmB;;EAAnB;IAAA;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,wBAAmB;KAAnB,qBAAmB;UAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,gCAAmB;EAAnB;AAAmB;AAAnB;EAAA,+BAAmB;EAAnB;AAAmB;AAAnB;EAAA,4BAAmB;EAAnB;AAAmB;AAAnB;EAAA,+BAAmB;EAAnB;AAAmB;AAAnB;EAAA,4BAAmB;EAAnB;AAAmB;AAAnB;EAAA,2BAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,4DAAmB;EAAnB,kEAAmB;EAAnB;AAAmB;AAAnB;EAAA,wEAAmB;EAAnB,qEAAmB;EAAnB;AAAmB;AAAnB;EAAA,4DAAmB;EAAnB,qEAAmB;EAAnB;AAAmB;AAAnB;EAAA,4DAAmB;EAAnB,mEAAmB;EAAnB;AAAmB;AAAnB;EAAA,4DAAmB;EAAnB,kEAAmB;EAAnB;AAAmB;AAAnB;EAAA,4DAAmB;EAAnB,kEAAmB;EAAnB;AAAmB;AAAnB;EAAA,4DAAmB;EAAnB,mEAAmB;EAAnB;AAAmB;AAAnB;EAAA,yDAAmB;EAAnB,qEAAmB;EAAnB;AAAmB;AAAnB;EAAA,2EAAmB;EAAnB,qEAAmB;EAAnB;AAAmB;AAAnB;EAAA,2EAAmB;EAAnB,qEAAmB;EAAnB;AAAmB;AAAnB;EAAA,mEAAmB;EAAnB;AAAmB;AAAnB;EAAA,sEAAmB;EAAnB;AAAmB;AAAnB;EAAA,oEAAmB;EAAnB;AAAmB;AAAnB;EAAA,sEAAmB;EAAnB;AAAmB;AAAnB;EAAA,sEAAmB;EAAnB;AAAmB;AAAnB;EAAA,mEAAmB;EAAnB;AAAmB;AAAnB;EAAA,sEAAmB;EAAnB;AAAmB;AAAnB;EAAA,oEAAmB;EAAnB;AAAmB;AAAnB;EAAA,sEAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;KAAnB;AAAmB;AAAnB;EAAA,oBAAmB;KAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,0EAAmB;EAAnB,8FAAmB;EAAnB;AAAmB;AAAnB;EAAA,+EAAmB;EAAnB,mGAAmB;EAAnB;AAAmB;AAAnB;EAAA,6EAAmB;EAAnB,iGAAmB;EAAnB;AAAmB;AAAnB;EAAA,0CAAmB;EAAnB,uDAAmB;EAAnB;AAAmB;AAAnB;EAAA,gFAAmB;EAAnB,oGAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,2GAAmB;EAAnB,yGAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kGAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,8BAAmB;EAAnB,+QAAmB;EAAnB;AAAmB;AAAnB;EAAA,8BAAmB;EAAnB,+QAAmB;EAAnB;AAAmB;AAAnB;EAAA,+QAAmB;EAAnB;AAAmB;AAAnB;EAAA,2KAAmB;EAAnB,mKAAmB;EAAnB,4LAAmB;EAAnB,mEAAmB;EAAnB;AAAmB;AAAnB;EAAA,gKAAmB;EAAnB,wJAAmB;EAAnB,iLAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,qCAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,iCAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,4BAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,8BAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;;AAFnB;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM,sBAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM,sBAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM,kBAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM,kBAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM,sBAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM,sBAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM,kBAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM,kBAImM;EAJnM;AAImM;;AAJnM;EAAA,0BAImM;EAJnM,kBAImM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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./2/style.css":
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./2/style.css");

      
      
      
      
      
      
      
      
      

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
      "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./2/style.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./2/style.css");
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

/***/ "./assets/images/failed_payment.jpg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6aa4818d58dba0441a6.jpg";

/***/ }),

/***/ "./assets/images/g-pay.webp":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "204f990d6f7a660135eb.webp";

/***/ }),

/***/ "./assets/images/mastercard.png":
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./assets/images/money.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf6ae1ca8cc010451110.png";

/***/ }),

/***/ "./assets/images/paypal.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52faa05e7f51a7e2a863.png";

/***/ }),

/***/ "./assets/images/verve.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "939567f1d8772ea6cef5.png";

/***/ }),

/***/ "./assets/images/visa.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4aa3f67eb60664010910.png";

/***/ })

}]);
//# sourceMappingURL=2_index_js.js.map