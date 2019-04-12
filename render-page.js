(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "crypto", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["crypto"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "gatsby-starter-default",
    "short_name": "starter",
    "start_url": "/",
    "background_color": "#663399",
    "theme_color": "#663399",
    "display": "minimal-ui"
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---src-pages-page-2-js","jsonName":"page-2-fbc","path":"/page-2/"}],"dataPaths":{"404-22d":"820/path---404-22-d-bce-0SUcWyAf8ecbYDsMhQkEfPzV8","404-html-516":"285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8","dev-404-page-5f9":"386/path---dev-404-page-5-f-9-fab-0SUcWyAf8ecbYDsMhQkEfPzV8","index":"140/path---index-6a9-0SUcWyAf8ecbYDsMhQkEfPzV8","page-2-fbc":"726/path---page-2-fbc-5a8-0SUcWyAf8ecbYDsMhQkEfPzV8","sq--src-components-image-js":3138347921,"sq--src-components-layout-js":755544856,"sq--src-components-seo-js":2417117884}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-pages-404-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/page-2.js */ "./src/pages/page-2.js")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var _crypto = _interopRequireDefault(__webpack_require__(/*! crypto */ "crypto"));

// default icons for generating icons
exports.defaultIcons = [{
  src: "icons/icon-48x48.png",
  sizes: "48x48",
  type: "image/png"
}, {
  src: "icons/icon-72x72.png",
  sizes: "72x72",
  type: "image/png"
}, {
  src: "icons/icon-96x96.png",
  sizes: "96x96",
  type: "image/png"
}, {
  src: "icons/icon-144x144.png",
  sizes: "144x144",
  type: "image/png"
}, {
  src: "icons/icon-192x192.png",
  sizes: "192x192",
  type: "image/png"
}, {
  src: "icons/icon-256x256.png",
  sizes: "256x256",
  type: "image/png"
}, {
  src: "icons/icon-384x384.png",
  sizes: "384x384",
  type: "image/png"
}, {
  src: "icons/icon-512x512.png",
  sizes: "512x512",
  type: "image/png"
}];
/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */

exports.doesIconExist = function doesIconExist(srcIcon) {
  try {
    return _fs.default.statSync(srcIcon).isFile();
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw e;
    }

    return false;
  }
};

exports.createContentDigest = function createContentDigest(content) {
  var digest = _crypto.default.createHash("sha1").update(content).digest("hex");

  return digest;
};
/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */


exports.addDigestToPath = function (path, digest, method) {
  if (method === "name") {
    var parsedPath = _path.default.parse(path);

    return parsedPath.dir + "/" + parsedPath.name + "-" + digest + parsedPath.ext;
  }

  if (method === "query") {
    return path + "?v=" + digest;
  }

  return path;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var iconDigest = null;

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
  var headComponents = [];
  var icons = pluginOptions.icons || _common.defaultIcons;
  var legacy = typeof pluginOptions.legacy !== "undefined" ? pluginOptions.legacy : true;
  var cacheBusting = typeof pluginOptions.cache_busting_mode !== "undefined" ? pluginOptions.cache_busting_mode : "query"; // If icons were generated, also add a favicon link.

  if (pluginOptions.icon) {
    var favicon = icons && icons.length ? icons[0].src : null;

    if (cacheBusting !== "none") {
      iconDigest = (0, _common.createContentDigest)(_fs.default.readFileSync(pluginOptions.icon));
    }

    var insertFaviconLinkTag = typeof pluginOptions.include_favicon !== "undefined" ? pluginOptions.include_favicon : true;

    if (favicon && insertFaviconLinkTag) {
      headComponents.push(_react.default.createElement("link", {
        key: "gatsby-plugin-manifest-icon-link",
        rel: "shortcut icon",
        href: (0, _gatsby.withPrefix)((0, _common.addDigestToPath)(favicon, iconDigest, cacheBusting))
      }));
    }
  } // Add manifest link tag.


  headComponents.push(_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: (0, _gatsby.withPrefix)("/manifest.webmanifest"),
    crossOrigin: pluginOptions.crossOrigin
  })); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (pluginOptions.theme_color) {
    var insertMetaTag = typeof pluginOptions.theme_color_in_head !== "undefined" ? pluginOptions.theme_color_in_head : true;

    if (insertMetaTag) {
      headComponents.push(_react.default.createElement("meta", {
        key: "gatsby-plugin-manifest-meta",
        name: "theme-color",
        content: pluginOptions.theme_color
      }));
    }
  }

  if (legacy) {
    var iconLinkTags = icons.map(function (icon) {
      return _react.default.createElement("link", {
        key: "gatsby-plugin-manifest-apple-touch-icon-" + icon.sizes,
        rel: "apple-touch-icon",
        sizes: icon.sizes,
        href: (0, _gatsby.withPrefix)((0, _common.addDigestToPath)(icon.src, iconDigest, cacheBusting))
      });
    });
    headComponents = headComponents.concat(iconLinkTags);
  }

  setHeadComponents(headComponents);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bin, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_from":"gatsby@2.3.14","_id":"gatsby@2.3.14","_inBundle":false,"_integrity":"sha512-5ELb1SpYYNt+5/38NwyaFrOSPtVwEjhxIKsaeglrD1jDhi8mycXezBrf+IFNE/I0r0K7BtER36W1oB+FH3fQ2g==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.3.4","bluebird":"3.5.3","common-tags":"1.8.0","convert-hrtime":"2.0.0","core-js":"2.6.5","cross-spawn":"5.1.0","decamelize":"1.2.0","envinfo":"5.12.1","fs-exists-cached":"1.0.0","gatsby-telemetry":"1.0.5","get-caller-file":"1.0.3","get-stream":"3.0.0","graceful-fs":"4.1.15","hosted-git-info":"2.7.1","is-stream":"1.1.0","jsonfile":"4.0.0","lodash":"4.17.11","map-age-cleaner":"0.1.3","meant":"1.0.1","nice-try":"1.0.5","npm-run-path":"2.0.2","opentracing":"0.14.3","p-finally":"1.0.0","p-is-promise":"2.1.0","path-exists":"3.0.0","path-key":"2.0.1","pretty-error":"2.1.1","pump":"3.0.0","require-directory":"2.1.1","require-main-filename":"1.0.1","resolve-cwd":"2.0.0","semver":"5.6.0","set-blocking":"2.0.0","shebang-command":"1.2.0","signal-exit":"3.0.2","source-map":"0.5.7","stack-trace":"0.0.10","string-width":"2.1.1","strip-eof":"1.0.0","universalify":"0.1.2","update-notifier":"2.5.0","uuid":"3.3.2","which":"1.3.1","which-module":"2.0.0","wrap-ansi":"2.1.0","y18n":"3.2.1","yurnalist":"1.0.5"},"_requested":{"type":"version","registry":true,"raw":"gatsby@2.3.14","name":"gatsby","escapedName":"gatsby","rawSpec":"2.3.14","saveSpec":null,"fetchSpec":"2.3.14"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.3.14.tgz","_shasum":"38df02cbb33407cf7cb48bbf5d53b25dd7aeb8cc","_spec":"gatsby@2.3.14","_where":"/Users/jakezien/Projects/wedding","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"bundleDependencies":false,"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.5","gatsby-link":"^2.0.16","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.5","glob":"^7.1.1","graphql":"^14.1.1","graphql-compose":"^6.0.3","graphql-playground-middleware-express":"^1.7.10","graphql-relay":"^0.6.0","graphql-tools":"^3.0.4","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"deprecated":false,"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"gitHead":"169c9640938864414189bfb744694678bf973a89","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.3.14","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/components/OutboundLink.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutboundLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink =
/*#__PURE__*/
function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        });
      } else {
        OutboundLink.trackLink(eventMeta, function () {});
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OutboundLink, "trackLink", function () {
  Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('ga tracking not enabled');
});

_defineProperty(OutboundLink, "propTypes", {
  eventLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

_defineProperty(OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null
});



/***/ }),

/***/ "./node_modules/react-ga/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/index.js ***!
  \*************************************************/
/*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, OutboundLink, testModeAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundLink", function() { return OutboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format */ "./node_modules/react-ga/dist/esm/utils/format.js");
/* harmony import */ var _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/removeLeadingSlash */ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js");
/* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/* harmony import */ var _utils_loadGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loadGA */ "./node_modules/react-ga/dist/esm/utils/loadGA.js");
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _utils_console_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/console/log */ "./node_modules/react-ga/dist/esm/utils/console/log.js");
/* harmony import */ var _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/testModeAPI */ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js");
/* harmony import */ var _components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/OutboundLink */ "./node_modules/react-ga/dist/esm/components/OutboundLink.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"].ga.apply(_utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"], arguments);
  if (typeof window === 'undefined') return false;
  if (!window.ga) return Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return Object(_utils_format__WEBPACK_IMPORTED_MODULE_0__["default"])(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (typeof window === 'undefined') {
      return false;
    }

    if (!options || options.standardImplementation !== true) Object(_utils_loadGA__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (_typeof(config) !== 'object') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(void 0, args);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'arguments\');');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`fieldsObject` is required in .set()');
    return;
  }

  if (_typeof(fieldsObject) !== 'object') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'set\', fieldsObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', fieldObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path is required in .pageview()');
    return;
  }

  var path = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawPath);

  if (path === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = Object(_utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawModalName));

  if (modalName === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   */
  require: function require(rawName, options) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` is required in .require()');
        return;
      }

      var name = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawName);

      if (name === '') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` cannot be an empty string in .require()');
        return;
      } // Optional Fields


      if (options) {
        if (_typeof(options) !== 'object') {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Empty `options` given to .require()');
        }

        ga('require', name, options);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga('require', name);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"].origTrackLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"].trackLink;
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"].trackLink = outboundLink;
var OutboundLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"];
var testModeAPI = _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  OutboundLink: OutboundLink,
  testModeAPI: _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/log.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/warn.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warn; });
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/format.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var _mightBeEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mightBeEmail */ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js");
/* harmony import */ var _toTitleCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toTitleCase */ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js");
/* harmony import */ var _console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (Object(_mightBeEmail__WEBPACK_IMPORTED_MODULE_0__["default"])(s)) {
    Object(_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return Object(_toTitleCase__WEBPACK_IMPORTED_MODULE_1__["default"])(s);
  }

  return s;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/loadGA.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */


  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mightBeEmail; });
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return /[^@]+@[^@]+/.test(s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeLeadingSlash; });
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/testModeAPI.js ***!
  \*************************************************************/
/*! exports provided: gaCalls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaCalls", function() { return gaCalls; });
var gaCalls = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push(args.concat());
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/toTitleCase.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toTitleCase; });
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return Object(_trim__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
/*!******************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/trim.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trim; });
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}

/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./public/static/d/2417117884.json":
/*!*****************************************!*\
  !*** ./public/static/d/2417117884.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"Anna & Jake's Wedding","description":"Anna Ewing and Jake Zien's wedding in Brooklyn, NYC, on October 19, 2019.","author":"@gatsbyjs"}}}};

/***/ }),

/***/ "./public/static/d/755544856.json":
/*!****************************************!*\
  !*** ./public/static/d/755544856.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"Anna & Jake's Wedding"}}}};

/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_module_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.module.styl */ "./src/components/Container.module.styl");
/* harmony import */ var _Container_module_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container_module_styl__WEBPACK_IMPORTED_MODULE_1__);



var Container = function Container(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: props.id,
    class: _Container_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.container + (props.className ? " " + props.className : '')
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/Container.module.styl":
/*!**********************************************!*\
  !*** ./src/components/Container.module.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "Container-module--container--WUkSQ"
};

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.js");
/* harmony import */ var _Footer_module_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.styl */ "./src/components/Footer.module.styl");
/* harmony import */ var _Footer_module_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_styl__WEBPACK_IMPORTED_MODULE_2__);




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: _Footer_module_styl__WEBPACK_IMPORTED_MODULE_2___default.a.siteFooter
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Footer!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer.module.styl":
/*!*******************************************!*\
  !*** ./src/components/Footer.module.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"siteFooter": "Footer-module--siteFooter---XNFF"
};

/***/ }),

/***/ "./src/components/Zoetrope.js":
/*!************************************!*\
  !*** ./src/components/Zoetrope.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Zoetrope.module.styl */ "./src/components/Zoetrope.module.styl");
/* harmony import */ var _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_zoetrope_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/zoetrope.png */ "./src/images/zoetrope.png");
/* harmony import */ var _images_zoetrope_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_zoetrope_png__WEBPACK_IMPORTED_MODULE_2__);




var Zoetrope = function Zoetrope() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.imgWrap
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.zoetrope
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Zoetrope);

/***/ }),

/***/ "./src/components/Zoetrope.module.styl":
/*!*********************************************!*\
  !*** ./src/components/Zoetrope.module.styl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "Zoetrope-module--container--2SS7J",
	"imgWrap": "Zoetrope-module--imgWrap--2zbKw",
	"zoetrope": "Zoetrope-module--zoetrope--UnZft",
	"spin": "Zoetrope-module--spin--3K_h2"
};

/***/ }),

/***/ "./src/components/accomodations.js":
/*!*****************************************!*\
  !*** ./src/components/accomodations.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_beekman_b_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/beekman-b.png */ "./src/images/beekman-b.png");
/* harmony import */ var _images_beekman_b_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_beekman_b_png__WEBPACK_IMPORTED_MODULE_2__);




var Accomodations = function Accomodations(_ref) {
  var urls = _ref.urls;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "accomodations"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Accomodations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    class: "interstitial",
    src: _images_beekman_b_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Beekman hotel logo"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We recommend the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.hotel,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "The Beekman Hotel"), " in Manhattan, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.map,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "at the base of the Brooklyn Bridge."), " The hotel was built in 1881 on the site of the Chapel Street theater, which in 1761 staged America's first performace of Hamlet, and in 1766 was destroyed in riots over the Stamp Act."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We have reserved a room block with the Beekman, and will provide transportation from there to the wedding. To get the block rate, please ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.book,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "book your room"), " (online only) by Wednesday, September 18.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "right"
  }));
};

Accomodations.propTypes = {
  reservationURL: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
Accomodations.defaultProps = {
  urls: {
    hotel: "http://www.beekmanhotel.com/",
    map: "https://www.google.com/maps/place/The+Beekman+Hotel/@40.7110318,-74.0090716,17z/data=!4m8!1m2!3m1!2sThe+Beekman+Hotel!3m4!1s0x0:0xb5e727f9cc73002a!8m2!3d40.7110277!4d-74.0068828",
    book: "/book"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Accomodations);

/***/ }),

/***/ "./src/components/base.css":
/*!*********************************!*\
  !*** ./src/components/base.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/boathouse.js":
/*!*************************************!*\
  !*** ./src/components/boathouse.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_plant_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/plant.png */ "./src/images/plant.png");
/* harmony import */ var _images_plant_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_plant_png__WEBPACK_IMPORTED_MODULE_2__);




var Boathouse = function Boathouse(_ref) {
  var urls = _ref.urls;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "boathouse"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "The Boathouse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    class: "interstitial",
    src: _images_plant_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Illustration of a sapling against a starry sky"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Getting there"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Prospect Park is bigger than Central Park, so please take care to enter the park from the right place. You're looking for ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.parkEntranceMap,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "the entrance on the corner of Ocean Avenue and Lincoln Road,"), " in the middle of the east side of the park. Please leave extra time to find the location. Cars cannot enter the park, and the boathouse is a 5-minute walk from the road."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Transportation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We'll provide transportation from the Beekman hotel to the boathouse."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you're taking an Uber or Lyft, just search for the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.boathouseMap,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Prospect Park Boathouse & Audobon Center"), " in Brooklyn."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you're taking a cab, ask for the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.parkEntranceMap,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "entrance to Prospect Park"), " on the corner of Ocean Avenue and Lincoln Road."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "On the subway, take a B or Q train to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.subwayMap,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Prospect Park."), " You can also take an A or C train to Franklin Avenue, then transfer to an S shuttle to Prospect Park."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you are unfamiliar with the subway, we really recommend taking a cab. The trains are unpredictable, especially on weekends, and it's easy to wind up at the wrong stop.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "right"
  }));
};

Boathouse.propTypes = {
  urls: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
Boathouse.defaultProps = {
  urls: {
    boathouseMap: "https://www.google.com/maps/place/Prospect+Park+Boathouse+%2B+Audubon+Center/@40.6596447,-73.9638704,17z/data=!4m8!1m2!3m1!2sProspect+Park+Boathouse+%2B+Audubon+Center!3m4!1s0x0:0x4374a72cee20ff31!8m2!3d40.6608218!4d-73.9652442",
    parkEntranceMap: "https://www.google.com/maps/place/101+Ocean+Ave,+Brooklyn,+NY+11225/@40.660578,-73.9633683,19z/data=!3m1!4b1!4m5!3m4!1s0x89c25b13ac7477e9:0xc34df6c66f8da4ce!8m2!3d40.660577!4d-73.9628212",
    subwayMap: "https://www.google.com/maps/place/Prospect+Park+Subway+Station/@40.6605891,-73.9633964,18.96z/data=!4m5!3m4!1s0x89c25b128f2385e3:0x1c9d9e7f20f360f6!8m2!3d40.6608787!4d-73.9621111"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Boathouse);

/***/ }),

/***/ "./src/components/event.js":
/*!*********************************!*\
  !*** ./src/components/event.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.styl */ "./src/components/layout.styl");
/* harmony import */ var _layout_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_styl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_19_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/19.png */ "./src/images/19.png");
/* harmony import */ var _images_19_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_19_png__WEBPACK_IMPORTED_MODULE_2__);




var Event = function Event() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "event"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "The Event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    class: "interstitial",
    src: _images_19_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Illustration of the number 19 surrounded by snakes"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The ceremony will be at The Prospect Park Boathouse, at 5:30 PM on October 19, 2019. Drinks, dinner and dancing will follow."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dress code is formal. Two notes about what to wear:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Please choose your heels carefully, as the boathouse has cobbled floors."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Please bring a layer for the October weather, as we hope for an outdoor ceremony."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "right"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/components/fonts.css":
/*!**********************************!*\
  !*** ./src/components/fonts.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./src/components/Container.js");
/* harmony import */ var _header_module_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.module.styl */ "./src/components/header.module.styl");
/* harmony import */ var _header_module_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_module_styl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Zoetrope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Zoetrope */ "./src/components/Zoetrope.js");
// import { Link } from "gatsby"






var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    id: _header_module_styl__WEBPACK_IMPORTED_MODULE_3___default.a.siteHeader
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Zoetrope__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, props.siteTitle)));
};

Header.propTypes = {
  siteTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
Header.defaultProps = {
  siteTitle: "Anna & Jake's Wedding"
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header.module.styl":
/*!*******************************************!*\
  !*** ./src/components/header.module.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"siteHeader": "header-module--siteHeader--r0wXt"
};

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json");
var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json", 1);
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.css */ "./src/components/base.css");
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts.css */ "./src/components/fonts.css");
/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _typography_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography.styl */ "./src/components/typography.styl");
/* harmony import */ var _typography_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_typography_styl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.styl */ "./src/components/layout.styl");
/* harmony import */ var _layout_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_styl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Container */ "./src/components/Container.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");


/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */











react_ga__WEBPACK_IMPORTED_MODULE_11__["default"].initialize('UA-137874975-1'); // ReactGA.pageview(window.location.pathname + window.location.search);

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__["StaticQuery"], {
    query: "755544856",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        siteTitle: data.site.siteMetadata.title
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_9__["default"], null, children), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
    },
    data: _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/layout.styl":
/*!************************************!*\
  !*** ./src/components/layout.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/registry.js":
/*!************************************!*\
  !*** ./src/components/registry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_pomegranate_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pomegranate.png */ "./src/images/pomegranate.png");
/* harmony import */ var _images_pomegranate_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_pomegranate_png__WEBPACK_IMPORTED_MODULE_2__);




var Registry = function Registry(_ref) {
  var urls = _ref.urls;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "registry"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Registry"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    class: "interstitial",
    src: _images_pomegranate_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Illustration of a pomegranate"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Your presence is plenty \u2014 but if you insist, we\u2019ve registered via ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.zola,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Zola.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Our shipping address, if you need it, is 80 Douglass Street, Brooklyn, New York, 11231.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "right"
  }));
};

Registry.propTypes = {
  urls: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
Registry.defaultProps = {
  urls: {
    zola: ''
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Registry);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/2417117884.json */ "./public/static/d/2417117884.json");
var _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/2417117884.json */ "./public/static/d/2417117884.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);


/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */




function SEO(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta,
      keywords = _ref.keywords,
      title = _ref.title;
  var site = _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_0__.data.site;
  var metaDescription = description || site.siteMetadata.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    titleTemplate: "%s | " + site.siteMetadata.title,
    meta: [{
      name: "description",
      content: metaDescription
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: metaDescription
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      name: "twitter:creator",
      content: site.siteMetadata.author
    }, {
      name: "twitter:title",
      content: title
    }, {
      name: "twitter:description",
      content: metaDescription
    }].concat(keywords.length > 0 ? {
      name: "keywords",
      content: keywords.join(", ")
    } : []).concat(meta)
  });
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};
SEO.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./src/components/typography.styl":
/*!****************************************!*\
  !*** ./src/components/typography.styl ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/images/19.png":
/*!***************************!*\
  !*** ./src/images/19.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/beekman-b.png":
/*!**********************************!*\
  !*** ./src/images/beekman-b.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoBAMAAAC/jcnXAAAAD1BMVEX////uKykYW7QAAAD8tDVHwNvuAAAAAXRSTlMAQObYZgAAIotJREFUeF7swAEBAAAAgqD+r26IsCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzh4dEAAAAQEQ0+k1oH8mPdxWYZMlPUV6kPR9k470GulB0oOkB0kPkh4kPUh6kPQg6UHSg6QHSQ+SHiQ9SHqQ9CDpQdJTpEuXPt+TLr1JuvTH3t0lSYojaxhOs1gBph2gDYTz9g767H9Nx6wTy28ID3DxEyRVuF9NVlXSF898LiGEGPozqjKp/rSqv4We6LzW8DejJ7pibt1/BQD8teiJLvNOVfarVzWMC6Inushf2Ifd5jBcDj3RZX6kuszhguiJPg7mvvaoA4zXGK6FnugyP1ZdvQO4AHqiR+Yq154be3bVeFEug57osbnUEWXjbTzoojBcCj3Rq3jeF/O1xIguWq6Enugyb2cPRns196uiJ/qSudQcudRbrnop9ESvqATVVgVoMu/gguiJrlqhPhd1d5mLoyc6tkq9aXWvXA490V9jv6bBD2/N7dLoiS41qdvmqFeZXwo90eNOHyZcUSeI+XXRE71CiC5ozKsr5h6d4Xroic60AnIwf7fufvXa6InuvAJzoZemqf/10BNd5EHxHeyKcIsj/yPR83l69JwVJqKusV8ePdFrq3kZx+/qgN0FLo6e6GvN+4D4hIlcop9oDsNfgp6bKLp2dBgqdH86eqI3yjU/k7n6ilyitxNiXbcNnUuhJ3pd+yC9AO3YXBA90VG1S7abw6XRE53WqNsadK63BTrRR5Eq9f1VYNxiAWCXQ090ty63vwAbb9SAS7/WlJso7LCgY+NIXrnwC4yJzmHoAPxM3y77qnKiV/aia2YPPbhluKuhJ3rlCPTxGgwHoSf69XNeAPgPvV4ZPdEPvF8rUH/QDfoLoyf67pjrYRrYQeiJfnFzPUyrIzpcGT3RAXZzM0XvgeGy6IlegaOW4Pq+hzKi9/vQE/3a5mWctSP0enH0PH7keHTVZvREv6z52NcHGDc6V6C/MHqiA9ghg3nF/gT0RK8AHLAEVxgqlEujJ7rIbbc59o2uVyGG66EnOgzAbnMAhvrziEXaF0RP9P3keptRq+0yvyx6ou8n5/tqeqB2WfRE30/eoW4OxmXRE121V92dDN2fi57o5y/KFEDZPhE90Su+Tlhyd4cGAsNn0BOdg2rYP66XqbLMr4+e31rFdqGrTkNPdE/G2tqKTqJ/oPDo1h1RjGVlu3oBEv3ogim6dR+pzQ0eINEPLTgJvQDb+8WQ6IcVnIbela1RLweqJ/qDcag9Bb3bM5eTe6IfQv5xdMHZzhlhou8rpNCIzqS2qe2ZEezMe6I/RN6CXvatthRa0ReuC7vynugSaEDfvchWRkqgLc0WxZ0h0TfHPEZHxfrP7shqVAtCHncENsEn+kNaAfpismqruhDjmNMw5WNSid5SslpGL+EYWps5Gyd6L8NB4N5Mn+giX0QvTU20Rb3dXNCN11WR6KF5hO7Et6sXsBa/oQpa6lGVRN9i7tFXrYARmQKNi+ur1VULDSnRH97Io4u8pSIcsNYHKoBtUy+JHpgH6CI/4vDHAu07H+Us9UTfWe/NwaH3KwrYdY6zzPsKtu0JfKKvNHforamR1A70AgKrMG0BmfQDmvt783373hdtyowbJvNeBebUE/3ooLMfva5HV88B3FixvsEX+kRvN9+Nrni2oxfAXND9WFFa1Un09uZegK/d6BXWoQOYC7r6u1NP9G01MYcf8+fjdHR80P21pM7GvfGJ/gBzq2TA8wtsO7ri2Y5eJujBtQAwj9wwj0t0v8Q5mj+g24teV6Gj9OK1qgOFKP0kejSLY0QvwNf56ED1QVeBeXW1hrEs6u6J/gBzDRP4rwXYqejAUDElNB4r8JXocQFuuwLw/A+9K3vRe2hFL0APC225QrQvU93AXybRfdB/clKA78ZfOBEdGHpQQhsvJnA/7oO3TXRAmeE5juh8N35jP3ptQdc9GiwlFCxYpmeCXhI9DPrzMY7oz290zkIXELaU0Bqh16C7J7qCrps0G2dx56ILCFtKaIWFRRjtsPGDRKL7oI/j+LjP+Dl2fniegy4gbDGhsLgtSnMSBT3Rl4L+n7OC/gU8v85BFxC2mFCwpaiDacmmK4keBf35NXZ3nj/oX2egyyxGr9hS1KfvwQBeNtEnQf9GLzBeAJ7noTNFH9ajFxA6c0FP9Jegf4Ep6F/wdSb6IHTYdNvPoAWa+aAnunI2/nw6umK6E13Ttgq6ZKK77q6gj+gFdIHT0AWGqbtv6O+a7RUSfbG7M0qru5+GLq8d6Iq6gg4MiR4E/VPotKCzAp0IHSw0T3TdmZu6+5noRULQdRBcL1qVs7ljBRMd7CfoQn/+Dnq/H12rchrQE30h6EL/OhVdWBqzCyzK2PKLDWAlaO6JrqB/YZyOrqALfdiMTt8DMk/0990dQYPQT5y9g4gqCH1Df+/7BfNEV3d/Cp3nr6BPTPXjpkE9T5dq6u5fn0QnRC/HoZeAO9FNQRf61/noTKQqENDYxpeYEh1MQT8E/S0WAbqHgiHRP1SgoCv9z13oXosYvcA6mq39PdEfH0D36jVA3+SU6Md0d9UedKcODeisRt/X3xMdnoeiwwu5lRh9rU2i7+3uXweiF62GMVYXoZdj0Uuih939SPSKFaZlXYCu7n7CoJ7oYy6eh6J35YU80a89d/f1ANahuw/xhOgF+kQ/pcDCIR0I0WOMGH04Yjlflejt6+4+5Oegczg6if620JC+aG5dtwa9YhvQ+0Q/9W0meAZfbFqJzlr0kugnBn1pSBf5OvR+PToMB6OXRJ8L+gL6Q+br0W01+iYcS/QNQV8Y0kF2K9ErJPplzRfQHzJ36KEQ2Br0rXfVib6yEAwEhwM79CHR/8zxXKgQ5NyhR0YVbA069Il+Bjm2gC7zt+gh0hXQh0R/JUccPKMDoWGCvi7qMbqAEv3T5kL35ojEo1tL1DkBvXXxPdFFPof+Yu7RS0vUaUbn0+iJ7jMYnBP7fH2ebl3MBNCO3if6GW83qGD2lIKR3KOX2AmAz6LXRN+w+mpv0fUPAL7eoTdEvQLoUiyhD59GT3Qdoil0H3Tl3KO3PRbjhx0S/QLqKIY83wddMQ/Qo7BDhN4n+qcLOQjdB13mDr19q0tN9KsUyKE4dHN7qDx6++IHAIOADkW3RF9ZQg8OKXDo66kS/SKFzaD7oHv07o9GT/S5Qwoi9OEg9O08ib62HkvoJUQvfxt6ogNfp6H356EnevcW3XV3h86Wb51dCD3RmaLj/9Sj22p0Lo+e6IVngL4Oq14LPdGf69FZi8Wl0RPdfPw9uq2byXE79ESvYOVPR090lKXGAf1s9PY+lOgP7GVIf+DfT4c103fA/hj0RJc5BOiB+Z+AnugLR1EwVKwZHaA7BT2+aqLzHv3bQeYjGTh0hSky/5PQEx20peKfLegVsN9AJ9Gb9lAIHdyrLoDQe6G3mCf6ZQprQRcN/whd92wN5h9Dr9jht+mJDooS4NADLmSe6FfdOCP0p0YA2SD0KvTI/HfQy2r0RMejd/CP0LEIvQLQfRIduuPRE90mOBP0gAvl/PLoiW4t6P0regVnLpLPoFc4bvKe6AWhqyboTLmAwcX84+h2JHqiP9+hs4j+415l/lvoJUZPdFUjemU6cPJaAojRKwDwC0N6rsjJGd6glyV0cx9zaEf/qV9CT3Q6oUMzOuITxlp0rjCkJ7otoXdTdNVq9FGK4dfRczfsA5rRbQf6SMUqK46axyX6A5ugWxt63YNushoOuUufv06i2yy6+jut6ITocQG/uzST6Ip6jN6D7UFX1E/o7vl+Ovj5nV5gBKwJvUI7+gF9uW67YUt05tGLog4Fa0G3/egFTh/SE10zOUUdGtB7oB19vxfbbtgSXQ9XFk4leIToivp+9NKOvrpdJLoy/fYcOUVdX3lgEb0H7AB0Tuvuia7CHUDShl4BDJrQ97ZmsETfVIvoBc3l0CYKv/Y+VT8Hve7q7oneIXT1d50NCwG66gj0wme7e6Ij9JkTgdHkHb9zRuhi7/aiDyeszCQ6M+iFsbQFeooOPoC2Gh0Ac+gnBr2iusH30+MvO8DrDmhtjIQg6DG6fwbPsC/oq9GZlkO/wfRdUXc4AbrMY3RvjrWj1wV0YA85DDdF93jq7tr37n3A1qKP3ADt6MBBQa+oxl9n+CvRVTD3XTabDbrQC0NgEaIXzRiEfk7QRW5dAdR57oDewVcUdVDQPbosVqPLGmtGPyjo2qoN6Arwd6N/M+GjPlWHF3TdsQUWEboyW9rRDwp6Ba1D6Yp/PfoDPLr/wO5o7tFDixjdZZ7h40GXufqN6i9FVwl96ducOmfIHTQUWAToBXP+DOcEXeYdaE55C3TTTM6pa7x9xuhgu9BLIzrz6MCwzlzoWpQofzv64xud5W+sl1d0MMezZbsUxEdIrFn0g5Xm6jeF+6Crv7tCt68v6ODncfUg9BKgAwc09ypzoetUFYd+j0FdYcca0e0E9IOae4XX2cS3+V3QfX/3PR7CU6Ch24BuIbrX2t3cZS70An0ftPc79Hexm0PXdoej0SHUioPebi70oa/3QFd/n+9ibegV+zw6gO2/RQd4vYXgGz24ZbtBf5f6BP1fsI+hF1gI6N7mLnOPPu4GugX6w63EumJ6nw74wZeD0OfzSpBzhtXm6kFFmz3LLdDpgqg/hK6gO/RuCzqtTZoPmHt0u8Paux6vwnNJ/UvogDL5trsXbCs6ME9Od7i5Ry/3QPf93ZfQFfSZIR1YgW7xDJyx7BBzfx0Ynx1V4AbP0yfvrsXoCrpfmhHbCvQCwWwMkX/EXOg6F+0O6Ho3OURX0DveotOM7qNekHn1B5Qd3NtV2BS9vwG63k1+xugKulua2XS6FEgBV0HI9VubzD16X4H+Dujq78ToevDG4NDLt9Aa9AIsi3fLxcaFOI+uugW6Yhqh//ujgH/awmgEFqKH8Tb9wufME70DWESXubq70PU4mk373qFbW6w3T3T/mupzEV1ZcXsiTVvHsUb0YO4XVQnM480XQudG6BrUnbpH/xfg/WoplAb0Qwtg25a4RPfvrs2hy9w/FlFapXsG+tCvQifRVcJkLuzTURePToVR4zx0YBU6s+jDDdFNmmJ36LOPRYChYuejt7NjBaSe6I+JJ8BCzhV0FdAzomMfRlcV2ps81s2oJ7oi9Lo/koXnn9pJ2pUI/eyhXehST3T1d9c5nyIPHov01aEXPo0u9iZ0qSe6btoE9FoW7kCs2BS3cAa61GN0qSe65u9z7i270XhBL6xGZ1q2amhvQR/VzaNDok/k255kwhQXhx7L+bJj1IWurCf6g+ZUzXX3KXpZic5s2RHqQvfqcFv09kz9MzukC7ewDh0/C6+obL86JmT8Cy6J7mr6onoDOmBYMzozZqhidYYYXVm3F/ThZuga1KHB/C06CHc8z6MdHYktuO9RF7pXL7dHX6IZzRvQga4E6JGX7/QWqgfoKgCh293RmZcZzYU+7e7CBWwFurQi9lg9Rpe6Cb2Dm6Fr+j4fKGQeohewborO7vP+ahx2YAjRvXqB26LbaIN3LyKfQecF/SXaBOh9SzWpx+he/Rt9uC368wvBy9udI+dBRNiBTdEJ0Nu3ucVb4EN0//9EsK7cCF01ousJi0oxb0IvMOqLgqEe8dH8dvUYXUuyBe6OriOGVM+vZfSKibBo25TM+93oCnswrEfoXh2sg3ujC17P1bejA/R9gP5xdaF79UR3tRodRkvNzWP0/epibETXs8ACdlv0shUdOo+OECL0z6tXhO7VgcJwQ3Q+gV6AYT96/K6Kqh1dKwgFgHuicwB6BzZBH/oY/WD14R36QmcwbbW7HXqBr43oNoMO9Iej9zVq8O3oqG6I/jgKXbdqWmw7GL2vq6NeCcjvmnR4HoDun1gej95HUW9CLyQ68LUNvc6h8yn0OOoxOgCYfuB+a+/A83j0/nj0OOpAjA7+QzU3Q1fQr48efwPORx3Cjb7AcD/053b0t5Ya0iP0z0cdfM7NZ/9e6DK/Pno8qpcIHcD/1p3QVddHV62bymGBuX5rJ3qi959Dr613bR59+pVN9BNcFj3R46gvomujFEzUd6MnuvFR9NrY3z26Nwf9VhN6onM2etzf/ZlnM6dUTs4JLvvQE73DGD6HHt+qz6FLWO2AUR32oSc6zegf7u/+PHqZ67ndOvREtxPQd/X3it/4LHPd9heGS6Mnet9+0wbTdxf9Ui2wHz3Rywnorf0dfNB5s8JX4NroiV7b0U2TONBfu2nhPvRE705Ab+3vmO7Wxu6Ov9jl0RNdXTuOOvZjXjRje3OxwnBR9ESP+7tc9e/Qe/N4dLDd6Ile4HfRmaIXQJ/In7nYH42e6B1CZzTXfnxmBgvYg57o3X70/YO60GHMu/4K+LvQE12DOozmQh/NYTgYPdGHD6PXZnSAbopekboGgX3oiV5OQG8Z1CsUoBM6wze6AQjdDkBPdC6CboC9vnkD1nUHoyd6dxl0mU/QNQYJnWEneqIPH0WPZ3JC7zw6L2PQGvREZ87zGuj+KFjUoDqYdKzd6InOh9FrI7p1J6Dnblj19xj9w4M60M2jlxd09qEneoFrog+fRE/04aPofSM65tHhE+iJ3gGfQ49nckKHCTrjfbpHL3vRE738MvrQi73zy7CfQE/0DoZfR9et+uQpWwXbjp7oFkT9c+g1Rpe6TZ+nH46e6Ir62eiqb3Spa+cMwy70RO+DXUu/iq4CbYxEZ0vxCfREHz6Kbi3oCnsZaQ9CT3SYeb3pAugKOy/vNw2Hoyd691H0PkT36nMz/FXoic7Ih71V5QroUrfj0BMdsJmoXwa9Aril2mZ0gBEg0W1EZ24udw10f1p8ETp0i+hM6nl39LqM3gG/hE50WjwMAbr3lnuiF6xg713hEuhuTwUIHXuL/kAFVhz7TdH7AL27CLrUZY5rV1N0lTuAUOz3RGdc1ZbtBKOchh5fWw2+yHwGHXn7Aibzugc3RMejq8qF0HtU6loIXTFHPSpif8DzVuhV6DYCwHXRq8z9fedQEbkyHrHD/dDtm7lcGl3qjlxbKkb0FnKN7XBrdM2R7JLoMh7cHYjQ/xX5Cvave6J356MToDcWmND/deRxky8874XeY98hlzXwh6GPfn1F5iuK+6Ezopc/FL0idAC6lVXg677o/KDbGej1EHQN6SN6t7a4L7r6O8AF0eMhvQfoMugxevXodgF0WN3dh03mHbdEN61t/qDb5dF9d6+bzAs8b4uuqGMFro7uuztbzQFI9O4C6MO67t62JAM2g87zTug9oLT8oNufhV7w5vyU0GF5VY7nrdAVBGzkvzS63++FE3cP1PFRB9HDDdELmJ65XRvdd/e38Z3GHafu2sI90CsMSgJ/FroGJpm/pvYh9YXZXrktegH0zO366FXd3eaenMnd4uneXdB7hN4BVvT45eroL/cdSrm2QIsdrPAE5s3LrdDd188K/AnoIzbInO/eJnSpU3g+lqLObdArQu+K0O3y6PUH29TaZ19rAoznF7Bg/rwhurSBy6P7vc3qax593Aw3H3WAWyzO+NAVTPiXRq9gU/PlFxgf30keo14wP31/3hJdBVwcHZAZhOhf36oPUEtz5ndCN08KdnV0kxkEZ8Nqgzs60sJELvNbokv90ugVpubxIf/fro/J0uv/7oFP9A7syuhgU/MV6CZqrd/dDL3H3qLyWxsjC8OaoH+bB+iqx4j+RCWA+6DzHt3+CHSAfhU6P8tvEk90qX8O3Xahg03N29HHqZyw74le3wsAv4XeHvQC9DG67+8l0d+zwkXRwWQ+rEJXf38m+psC+I3DA6F5NU7mIboq0RdmVeWq6IAG9D5Af+iuLEZP9K78EvoQmpsG9AAdeFV/oC0Tie4KsA+hd3vQZT4E6KgQuiX6Qu7KL6AXhrapu8xn0R+A6XH5b6InOjvQJ809QEetCmi8Z0t0zkcnMEeTuAD9AfZmC1yiLxuAfQC9wtbJewXTgB6gA+7MiRA90QsE6CffsQEa0GN0E3ppR090Ow89HtJR0Id+GV1rb6N9orciABagnzh5rwo6fYgO9m0Oa9ATvQCnosPQ2txj9NE80Vc+/wDszI/mQ1Nzp29Gfz4Sfb0Cdh56gdbmHqPb95xd6I336YleAA5Fr4vow6rmHqOPi+2J7hksULdD0S0Y0uPmHqKPuDxH9K40oSe61OVesL3oYBu6O4CWZTaj68dEp4vVgQIg9BOH9Oqa+0p0GAFIdDksFaqPosMQNHeAvhG9G9HH+/UJOolesS6ow9ArtinoGtBXo5PoQX+P4O0EdIa4ucfoo+1junVGi7I3R1fLjdVHnk929wrO3GS+Ev1L6Jq8k+g9WKv559ABHYAUDOit6GN/R9090V3PjcxN6EcvzWi8ZooOMJozrEAX7o+5hvREF0XjIk3h8CFdOa4AgXkzOv5dh3ytaSyIyGW+C515dA3pBuGqTIxuLtLq7okeD+q6WduKDkFLESoIvYbmMboPeuGZ6NGNlMw/hq7uXaEryBz1gfXoZarOZEhPdGbARb4HvYI/Q8JezPVPCt6cfgW6bshBwID9DOmJ3kOQ8qPQ3++/Kz/oVeiBeYTO69FR8NLdE92CKfsudIm63RkyH8Z/OW6gYWI+bEPvUCnoif4yqGPHo9cRHUzMTMwNhp9VduhrZB6jm9Rlrrl7oiuDINyCAbYbHWAUnZor9QW0PwYqgAXm8RboKbvee0h0jbZurMUKYAehA++aO0CnoI9MoXmMbtEHVhPd3mawk/pm9Aowis6YF9DjtKJcBubNb7j4Q74TXf19agx6orodHWxEV3OfmneAHq0E5jH6QtSBZ6L7j6K83kwzlo1e8+gwN19gmDYTm5qXb1r9N5rM41eVnXkBBT3R61t0KaiE7nVngl4Y1Eu8uYI+wlibeXwogTOfBj3R8Y9WygjVhF6BmQsXhqpWAjIAG4OuXc7qCJF5fPyILZgnunorKCHgludsBr3yHp1vdOA156BBfHyeppL5ZvSH1KOD3RO9SF1CmnYL3Zkzs6kRystbpPrfY9Ar0PmF2a3oUgeZw1ei+/5egMnHexDE0r53AArvzTsAphMGFEO0GOPMN6Gr/Cnfie6jXqhYB5hDF1nB0wL+z7XEpi/iCVXmyNxN4XagK+wo5onuol4A0520+ruYPHqdHetRVy+8TuHcXEGFaiO62JdjnujWFTFNptKdyBzujxk4DJCrYKcDiC59LHpcia559mis/q4/8Ogy8+iACBee2fu/+jx6oivqrx+fFjqdR68owR4dMAlasM3Wl8w/gJ7oCiZUSaFBvby2d5Hrj4eZ15HkGpQ3/yB6oguxalYNpv7+OpFD5EJ35ptr/+JMojcVAL2YX5q3qkfkDl3mtt0cmX8UPdErwABu5VU/qhwqHGZeZP459EQX1YC0ytSWSflwTs3ZR87exZlEby0N6oK2pgl3YTjEHBTzU9ATvULd5gXDTvMCiPw09ETvNZNbLaZLgHV70Pv+FPREV4HtQK8y3zyWn46e6BW2gA2Tlfg9I8T56Im+pb8Dk5X4TYXUz0dPdNsS9IrMt6LD76Anel2NjqrbUZq6V+BU9ERfS1f2kvsLnYCe6LsG9d3kUv899ES3lebWHVYyPxM90SusVFqn2pL34UT0RPdRj4VWd/DQnP509ERnTc5tNTq2TE5/NnqiVzjSPD60SoXMT0VP9B5st3mM7t2R+dnoiV6xVj/bstoKXr4g8l9BT3RiPbY+N9eqmy+G/mT0RG/v78Tm8R1ZQH4aeqIr6tDw6a69W9prAH42eqJzdMylHtSp6Imu/j4X5kOep10JPdE1f0e2E33gkAcrF0VPdJu8qu5/2LnV+ULoid5jYyDfhLscpH4+eqJXABbRK9jb07r3q3flVPREFzmwhN67F47108nm+9ETHdUSehU6TMDYb05/Fnqiy3zUnEd3x8auumkrzJqfP3tP9Co0gHl0nSA6AFMzi9Gx4P3z09ATvQLmx1aPPvQV7Bu9golzaIg6gGcvyPw89ER3c/FZdB0SNfSA4KixOv6xOSDzE9ET3R/FOsyj1x/0Cia8PlZntkR2DnqiS0tT8/fbKNDp+zCGXm8bAha+7lQD8nPQEx2wybOysoheYURX1NX5219sVFs/Hz3R/VGOsnDoeuI2hl7ocYMvQaxPQk903YRJvXh0vmV/Ul94/YqiesZ8AVwCPdFNd2qjGyyg9/qKh5C/MVuizv+zd0c5DQMxEEC5AtobxCfYHW4A9z8TQoslp2MrEXzUlaYfSA1pf54m8aZO/Gx0oTtcmF6NBB0b3d+EubcndItRxyzUG6ALPZ5tt+NI0eMuA+7vmrTiR6kOAOt56EI3R4/JH7TTrNBxQjcauUXqHdCFPr1e3xR2gb7z/Yjsn6ABTKzeBl3oPlerRA8bDdNTH9FdnZpk2yVd6H503xYbGIvquBzdgIAesh98gYz86ehC3/NPgUXndJeNJX1gc+OwAYTON640QBe6l2cwvjqzHUeObo/odlq8G4k3WacLHQhdzgn6/tfK0eHopA5sBgp5M3Shb+Ds6L7SmcmEHtdxbNwJXehe0fl7GscYt53Qp6c6RL09utD3+pwe4hwNUQEa4Ogh6q+GLnRgcRlXAsIH7XLU+6OrkHPzJOgDuJq7fXDUgd7oQo+j9uoyjl/m6Bz1/uhCB5lzGVcPW6eVfVt0ocfmZvCsQ5RB599duR2nObrQj6w91aoyjq/dpCf61RVdTRQjtqkuMuemaD5YUKmAzuhCj91OQHa/EwWdgflrZ2N0oc9KFb/m46IgK9Hf26KrGzZnNTenoN9BN6A1utD5NzQD3DwLOn0F8wKzK7rQj8dSzR7HY+MG+ng5dKHHSzIGGpW+rtDB6AY0Qxc6H98dyIJ4FXRK9eB92qMLfQCg3nUKeomODH12RRf6Ee9gZHX25Jdl6NYaXeiTHhQxKegX6CvbOPqiCx3um6Iff0M/GqML3UKhTui45ZaiG9AeXU+XCvIB/V68qjN9U3Shl/eX/vz5h1tzdD08EJPMN/p6NfRvdu7gBIEYCMOoLYiVSLaDbP81LagHCUoCc5rJ+1p4hxwy/D/Qof9rmIdJ2zI69PFd3wMd+vcocAV06LN6GzrO7EGfV44c+kq9Fjn0QkGHDh06dOg5gg4dOnTo0KFDhw4dOnTo0KFDhw4dOvSMP67QY7VPJdCh172ugB40f29FQc9UC/fMeRgNPWT+aid06Pes6Fc7d5DqIAyFYfRBVhDciHL3v7dnMVycdtBJ/iMHajvsxyXGFr8I4BjP04fW+TWPtaqfUd+C6J/qOaMj+kyNLnr1J4REP6viFnXRR12ib22si/U+T4suel1r0qfoO3uiV9/buWuLvruq2Tu0IXqGtS0/e9T/RlB0i/rtfo2JLnq9Zj8lukW9I4+qmRFd9Or3KXfkLOo96sNvqwHGGvW+QdN7ODaPfjzVq6ou0fe3Mvcx+2qezUd9vpoHLOmid/X+C7Tou1utW2/g2Nd4Vc8cdNWPuEFX/aiYQVe9d+hJg656EyDE0DzR+G1yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc/+psjmaa7g+1AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/plant.png":
/*!******************************!*\
  !*** ./src/images/plant.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/pomegranate.png":
/*!************************************!*\
  !*** ./src/images/pomegranate.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/zoetrope.png":
/*!*********************************!*\
  !*** ./src/images/zoetrope.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/zoetrope-8272980f37c26bfc7e2e3561593b920f.png";

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");




var NotFoundPage = function NotFoundPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "404: Not found"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/event */ "./src/components/event.js");
/* harmony import */ var _components_boathouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/boathouse */ "./src/components/boathouse.js");
/* harmony import */ var _components_accomodations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/accomodations */ "./src/components/accomodations.js");
/* harmony import */ var _components_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/registry */ "./src/components/registry.js");








var IndexPage = function IndexPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Anna and Jake's Wedding",
    keywords: ["Anna", "Jake", "Ewing", "Zien", "wedding", "Brooklyn", "Boathouse"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_event__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_boathouse__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_accomodations__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_registry__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/pages/page-2.js":
/*!*****************************!*\
  !*** ./src/pages/page-2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");





var SecondPage = function SecondPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Page two"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hi from the second page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome to page 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      maxWidth: "300px",
      marginBottom: "1.45rem"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Go back to the homepage"));
};

/* harmony default export */ __webpack_exports__["default"] = (SecondPage);

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_crypto__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map