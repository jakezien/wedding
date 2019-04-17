(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.search"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.search", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "crypto", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.search"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.search"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["crypto"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_search__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
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

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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

/***/ "./node_modules/react-countdown-now/dist/index.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-countdown-now/dist/index.es.js ***!
  \***********************************************************/
/*! exports provided: default, zeroPad, calcTimeDelta, formatTimeDelta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroPad", function() { return zeroPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTimeDelta", function() { return calcTimeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeDelta", function() { return formatTimeDelta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function zeroPad(value) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var strValue = String(value);
  if (length === 0) return strValue;
  var match = strValue.match(/(.*?)([0-9]+)(.*)/);
  var prefix = match ? match[1] : '';
  var suffix = match ? match[3] : '';
  var strNo = match ? match[2] : strValue;
  var paddedNo = strNo.length >= length ? strNo : ('0'.repeat(length) + strNo).slice(length * -1);
  return "".concat(prefix).concat(paddedNo).concat(suffix);
}
var timeDeltaFormatOptionsDefaults = {
  daysInHours: false,
  zeroPadTime: 2
};
function calcTimeDelta(date) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$now = _ref.now,
      now = _ref$now === void 0 ? Date.now : _ref$now,
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? 0 : _ref$precision,
      _ref$controlled = _ref.controlled,
      controlled = _ref$controlled === void 0 ? false : _ref$controlled,
      _ref$offsetTime = _ref.offsetTime,
      offsetTime = _ref$offsetTime === void 0 ? 0 : _ref$offsetTime;

  var startTimestamp;

  if (typeof date === 'string') {
    startTimestamp = new Date(date).getTime();
  } else if (date instanceof Date) {
    startTimestamp = date.getTime();
  } else {
    startTimestamp = date;
  }

  if (!controlled) {
    startTimestamp += offsetTime;
  }

  var total = Math.round(parseFloat((Math.max(0, controlled ? startTimestamp : startTimestamp - now()) / 1000).toFixed(Math.max(0, Math.min(20, precision)))) * 1000);
  var seconds = total / 1000;
  return {
    total: total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor(seconds / 3600 % 24),
    minutes: Math.floor(seconds / 60 % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number((seconds % 1 * 1000).toFixed()),
    completed: total <= 0
  };
}
function formatTimeDelta(delta, options) {
  var days = delta.days,
      hours = delta.hours,
      minutes = delta.minutes,
      seconds = delta.seconds;

  var _Object$assign = Object.assign({}, timeDeltaFormatOptionsDefaults, options),
      daysInHours = _Object$assign.daysInHours,
      zeroPadTime = _Object$assign.zeroPadTime,
      _Object$assign$zeroPa = _Object$assign.zeroPadDays,
      zeroPadDays = _Object$assign$zeroPa === void 0 ? zeroPadTime : _Object$assign$zeroPa;

  var formattedHours = daysInHours ? zeroPad(hours + days * 24, zeroPadTime) : zeroPad(hours, Math.min(2, zeroPadTime));
  return {
    days: daysInHours ? '' : zeroPad(days, zeroPadDays),
    hours: formattedHours,
    minutes: zeroPad(minutes, Math.min(2, zeroPadTime)),
    seconds: zeroPad(seconds, Math.min(2, zeroPadTime))
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var isEqual = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");

var Countdown = function (_React$Component) {
  _inherits(Countdown, _React$Component);

  function Countdown(props) {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Countdown).call(this, props));
    _this.mounted = false;

    _this.tick = function () {
      var onTick = _this.props.onTick;

      var delta = _this.calcTimeDelta();

      _this.setTimeDeltaState(Object.assign({}, delta));

      if (onTick && delta.total > 0) {
        onTick(delta);
      }
    };

    _this.start = function () {
      _this.setState(function (_ref) {
        var offsetStart = _ref.offsetStart,
            offsetTime = _ref.offsetTime;
        return {
          offsetStart: 0,
          offsetTime: offsetTime + (offsetStart ? Date.now() - offsetStart : 0)
        };
      }, function () {
        var timeDelta = _this.calcTimeDelta();

        _this.setTimeDeltaState(timeDelta);

        _this.props.onStart && _this.props.onStart(timeDelta);

        if (!_this.props.controlled) {
          _this.clearInterval();

          _this.interval = window.setInterval(_this.tick, _this.props.intervalDelay);
        }
      });
    };

    _this.pause = function () {
      _this.setState({
        offsetStart: _this.calcOffsetStart()
      }, function () {
        _this.clearInterval();

        _this.props.onPause && _this.props.onPause(_this.calcTimeDelta());
      });
    };

    _this.isPaused = function () {
      return _this.state.offsetStart > 0;
    };

    _this.isCompleted = function () {
      return _this.state.timeDelta.completed;
    };

    _this.state = {
      timeDelta: _this.calcTimeDelta(),
      offsetStart: props.autoStart ? 0 : _this.calcOffsetStart(),
      offsetTime: 0
    };
    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      this.props.autoStart && this.start();
      this.props.onMount && this.props.onMount(this.calcTimeDelta());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!isEqual(this.props, prevProps)) {
        this.setTimeDeltaState(this.calcTimeDelta());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      this.clearInterval();
    }
  }, {
    key: "calcTimeDelta",
    value: function calcTimeDelta$$1() {
      var _this$props = this.props,
          date = _this$props.date,
          now = _this$props.now,
          precision = _this$props.precision,
          controlled = _this$props.controlled;
      return calcTimeDelta(date, {
        now: now,
        precision: precision,
        controlled: controlled,
        offsetTime: this.state ? this.state.offsetTime : 0
      });
    }
  }, {
    key: "calcOffsetStart",
    value: function calcOffsetStart() {
      return Date.now();
    }
  }, {
    key: "clearInterval",
    value: function clearInterval() {
      window.clearInterval(this.interval);
    }
  }, {
    key: "setTimeDeltaState",
    value: function setTimeDeltaState(delta) {
      var _this2 = this;

      var callback;

      if (!this.state.timeDelta.completed && delta.completed) {
        this.clearInterval();

        callback = function callback() {
          return _this2.props.onComplete && _this2.props.onComplete(delta);
        };
      }

      if (this.mounted) {
        return this.setState({
          timeDelta: delta
        }, callback);
      }
    }
  }, {
    key: "getApi",
    value: function getApi() {
      return this.api = this.api || {
        start: this.start,
        pause: this.pause,
        isPaused: this.isPaused,
        isCompleted: this.isCompleted
      };
    }
  }, {
    key: "getRenderProps",
    value: function getRenderProps() {
      var _this$props2 = this.props,
          daysInHours = _this$props2.daysInHours,
          zeroPadTime = _this$props2.zeroPadTime,
          zeroPadDays = _this$props2.zeroPadDays;
      var timeDelta = this.state.timeDelta;
      return Object.assign({}, timeDelta, {
        api: this.getApi(),
        props: this.props,
        formatted: formatTimeDelta(timeDelta, {
          daysInHours: daysInHours,
          zeroPadTime: zeroPadTime,
          zeroPadDays: zeroPadDays
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          renderer = _this$props3.renderer;
      var renderProps = this.getRenderProps();

      if (renderer) {
        return renderer(renderProps);
      }

      if (children && this.state.timeDelta.completed) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
          countdown: renderProps
        });
      }

      var _renderProps$formatte = renderProps.formatted,
          days = _renderProps$formatte.days,
          hours = _renderProps$formatte.hours,
          minutes = _renderProps$formatte.minutes,
          seconds = _renderProps$formatte.seconds;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, days, days ? ':' : '', hours, ":", minutes, ":", seconds);
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
Countdown.defaultProps = Object.assign({}, timeDeltaFormatOptionsDefaults, {
  controlled: false,
  intervalDelay: 1000,
  precision: 0,
  autoStart: true
});
Countdown.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  daysInHours: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  zeroPadTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  zeroPadDays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  controlled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  precision: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  autoStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  renderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  now: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onPause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onTick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);



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

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


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
    className: _Container_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.container + (props.className ? " " + props.className : '')
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
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countdown-now */ "./node_modules/react-countdown-now/dist/index.es.js");





var renderCountdown = function renderCountdown(_ref) {
  var days = _ref.days;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _Footer_module_styl__WEBPACK_IMPORTED_MODULE_2___default.a.countdown
  }, days);
};

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: _Footer_module_styl__WEBPACK_IMPORTED_MODULE_2___default.a.siteFooter
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "See you in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countdown_now__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: "2019-10-20",
    renderer: renderCountdown
  }), " days!")));
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
	"siteFooter": "Footer-module--siteFooter---XNFF",
	"countdown": "Footer-module--countdown--2aU0i"
};

/***/ }),

/***/ "./src/components/Intro.js":
/*!*********************************!*\
  !*** ./src/components/Intro.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.js");



var Intro = function Intro() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "intro"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "center"
  }, "We\u2019re so excited you\u2019re here! We can\u2019t wait to celebrate with you as we start the next phase of our life together.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

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



var Zoetrope = function Zoetrope() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.imgWrap
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.stars
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.zoetrope
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.divider
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.stickerBorder
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.sticker
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.stickerBg
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Zoetrope_module_styl__WEBPACK_IMPORTED_MODULE_1___default.a.stickerImg
  }))));
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
	"divider": "Zoetrope-module--divider--1T_nw",
	"sticker": "Zoetrope-module--sticker--3KQ5C",
	"stickerBorder": "Zoetrope-module--stickerBorder--GBdq9",
	"stickerBg": "Zoetrope-module--stickerBg--YiZZu",
	"spin2": "Zoetrope-module--spin2--1Ziw_",
	"stickerImg": "Zoetrope-module--stickerImg--15nc7",
	"imgWrap": "Zoetrope-module--imgWrap--2zbKw",
	"spin": "Zoetrope-module--spin--3K_h2",
	"stars": "Zoetrope-module--stars--3a1yz",
	"zoetrope": "Zoetrope-module--zoetrope--UnZft"
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
    id: "accommodations"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "interstitial wide",
    src: _images_beekman_b_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Beekman Hotel logo"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Accommodations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We recommend the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.hotel,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "The Beekman Hotel"), " in Manhattan, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.map,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "located"), " at the base of the Brooklyn Bridge. The hotel was built in 1881 on the site of the Chapel Street Theatre, which staged America\u2019s first performance of ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "Hamlet"), " in 1761, and was destroyed in riots over the Stamp Act."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We have reserved a room block with The Beekman, and we\u2019ll provide transportation from there to the wedding. To get the block rate, please reserve your room by September 18. You can ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.book,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "book online"), " or by calling ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "tel:8555233562"
  }, "855 523 3562"), " and mentioning our wedding.")));
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "interstitial",
    src: _images_plant_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Illustration of a sapling against a starry sky"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "The Boathouse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Brooklyn\u2019s ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.boathouseMap,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Prospect Park Boathouse"), ", built in 1905, is a New York City landmark and on the National Register of Historic Places. It stopped renting boats decades ago and was almost demolished. But now, after several renovations, it houses New York\u2019s Audubon Center.  We like it for being a pretty place in nature that still feels like New York. And it\u2019s close enough to our home that we eat picnics there in the summer."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Getting There"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Prospect Park is bigger than Central Park, so please take care to enter from the correct place. You\u2019re looking for ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.parkEntranceMap,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "the entrance"), " on the corner of Ocean Avenue and Lincoln Road, on the east side of the park. Please leave extra time to find the location. Cars cannot enter the park, and the boathouse is a five-minute walk from the road."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Transportation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We\u2019ll provide a bus from The Beekman Hotel to the boathouse."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you\u2019re taking an Uber or Lyft, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.boathouseMap,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "search"), " for the Prospect Park Boathouse & Audubon Center in Brooklyn."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you\u2019re taking a cab, ask for ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.parkEntranceMap,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "the entrance"), " to Prospect Park on the corner of Ocean Avenue and Lincoln Road."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "On the subway, take a B or Q train to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.subwayMap,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Prospect Park Station."), " You can also take an A or C train to Franklin Avenue and then transfer to an S shuttle to Prospect Park."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you are unfamiliar with the subway, we really recommend taking a cab. The trains are unpredictable, especially on weekends, and it\u2019s easy to wind up at the wrong stop.")));
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "interstitial",
    src: _images_19_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Illustration of the number 19 surrounded by snakes"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "The Event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The ceremony will be at The Prospect Park Boathouse, at 5:30 p.m. on October 19, 2019. Drinks, dinner and dancing will follow."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kindly note that this is an adults-only evening."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The dress code is formal. Two notes about what to wear:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Please choose your heels carefully, as the boathouse has ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "noWrap"
  }, "cobbled floors.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Please bring a layer for the October weather, as we hope for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "noWrap"
  }, "an outdoor ceremony.")))));
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Zoetrope__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, props.siteTitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

Header.propTypes = {
  siteTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
Header.defaultProps = {
  siteTitle: "Anna &amp;&nbsp;Jake&rsquo;s Wedding"
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


/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */











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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "interstitial",
    src: _images_pomegranate_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Illustration of a pomegranate"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Registry"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Your presence is plenty \u2014 but if you insist, we\u2019ve registered via ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: urls.zola,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Zola.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Our shipping address, if you need it, is 275 7th Avenue, Suite 1705, New York, New York, 10001.")));
};

Registry.propTypes = {
  urls: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
Registry.defaultProps = {
  urls: {
    zola: 'https://www.zola.com/registry/ewingzienwedding'
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
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "core-js/modules/es6.regexp.search");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/static/d/2417117884.json */ "./public/static/d/2417117884.json");
var _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/2417117884.json */ "./public/static/d/2417117884.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_favicon_16_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/favicon/16.png */ "./src/images/favicon/16.png");
/* harmony import */ var _images_favicon_16_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_favicon_16_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_favicon_32_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/favicon/32.png */ "./src/images/favicon/32.png");
/* harmony import */ var _images_favicon_32_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_favicon_32_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_favicon_192_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/favicon/192.png */ "./src/images/favicon/192.png");
/* harmony import */ var _images_favicon_192_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_favicon_192_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");



/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */







react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].initialize('UA-137874975-1');

if (typeof window !== 'undefined') {
  react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].pageview(window.location.pathname + window.location.search);
}

function SEO(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta,
      keywords = _ref.keywords,
      title = _ref.title;
  var site = _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_1__.data.site;
  var metaDescription = description || site.siteMetadata.description;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a, {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    titleTemplate: "%s | " + site.siteMetadata.title,
    link: [{
      rel: 'icon',
      type: 'image/png',
      sizes: "16x16",
      href: "" + _images_favicon_16_png__WEBPACK_IMPORTED_MODULE_5___default.a
    }, {
      rel: 'icon',
      type: 'image/png',
      sizes: "32x32",
      href: "" + _images_favicon_32_png__WEBPACK_IMPORTED_MODULE_6___default.a
    }, {
      rel: 'shortcut icon',
      type: 'image/png',
      href: "" + _images_favicon_192_png__WEBPACK_IMPORTED_MODULE_7___default.a
    }],
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
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string),
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
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

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/favicon/16.png":
/*!***********************************!*\
  !*** ./src/images/favicon/16.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACMVBMVEUAAAABAwUBAQABAQECAwMDAgECAgISDwgxJQ9WPxZ5WB2WayGldiOkdiOWayB9WhtbQhU4KQ4XEQUdFQhGMxB6WBuvfibVmS3ppjHwqzPopjHWmS2ygCaAXBtJNA8eFQcVEAZINBCLZB7MkivwrDPvqzLLkSqLYx1INBAVEAgzJg19Whv1rzTzrjPLkSp9Whs1Jw5aQRWxfybwqzLvqzKyfyZcQhV+Wx3Xmi3Xmi2AXBuYbSHqpzHppzGbbyGmdyPwrDLwqzKreiSoeCTxrDKreiSbbyHrqDHrqDGecSF/WxzZmy7bnS6GYBxbQha2gifyrTO5hCdjRxU3KRCDXh3Rliz2sDPTlyyIYR08Kw4XEgpNOBGSaR/SlizTlyyXbCBUPBIbFAYhGAhOOBGEXx25hCfcni7tqTLyrTPdni66hSeHYRxSOxElGwgZEwk5KxFiRxeGYB2hcyKufSWwfiWhdCKGYR1jRxY8Kw0aEwb6szX7szX7tDX5sjT8tDX6szT2sDTvqzLuqjLtqTL0rzP4sTT0rjPNkyureiTMkiupeSOoeCPNkivzrjPioS+SaR9tThd5VxmfciF6VxpqTBaSaB7hoS+5hCeLYx2SaB+PZh6Uah+NZR68hyf1rzOwfiW8hie7hievfSXLkSrwrDKufCSbbyBzUxh2VRmccCGOZh6teyT6sjTXmi2/iCi6hSeDXhuIYR3BiijCiinYmi3xrDPPlCv3sDT4sjT2sDPdni59iJI4AAAAenRSTlMAAAAAAAAAAhNKksXe3sOMRxEBAh90yO/6/frtxW8eAgIgieT9/OKHHwIUdf7+43MTTMn9/chKmPDvlNH8+8vr/v7l6/7n0/z7z6Dy8ZlV0P3NURiA6v7ofBYCJpbq6ZMkAgMngdHz/P7z0oEmAwIZV6TY8fHYo1gZAmb2j/AAAAABYktHRGm8a8S0AAAAB3RJTUUH4wQQBQIEyg1WowAAARtJREFUGNMBEAHv/gAAAQcICQoLDA0ODxAREgIAAAMTFBUWFxgZGRobHB0eHwEAICEiIyR6e3x8e30lJicoKQAqKyMsfH58fHt7f30tLi8wADEyM3+AgYGAgIKDhH00NTYANziFhoeIiImJiouMjYU5OgA7PH2Oj5CRkouTlJWWfT0+AD9Af4OXmJmamZucnYJ9QUIAQ0R/noefoJuPoaKjnn1ARQBGR3+kpZymp6ipqquBrEhJAEpLfYCtrq+wsbKztIB9TE0ATk9Qf4WAtYm2jbe4f1BRUgBTVFVWf3+submsf39WV1hZAFpbXF1QfX9/f399UF5fYGEABGJjZGVmZ2hoZ2lqa2xtBQAABm5vcHFyc3R1dnd4eQUAC1Bi2snERD4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDQtMTZUMDU6MDI6MDQrMDI6MDCu0T38AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA0LTE2VDA1OjAyOjA0KzAyOjAw34yFQAAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/favicon/192.png":
/*!************************************!*\
  !*** ./src/images/favicon/192.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/192-b79340b9c00afcc38b9efb8c741d1af2.png";

/***/ }),

/***/ "./src/images/favicon/32.png":
/*!***********************************!*\
  !*** ./src/images/favicon/32.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/plant.png":
/*!******************************!*\
  !*** ./src/images/plant.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAG1BMVEUsZC4LDAz///+OABT8tDXuKykANIEAAAD///9mpcINAAAACXRSTlP//////////wBTT3gSAAAW9klEQVR42uzc0U4bMRSE4Y1VMu//xq26gSkyyPVZH8b2zn+BBAiQ+HRsx4EccLfL6EZ3d0H/5W6U0Y3ujO6M7ozujO6M7ozujO6M7ozujO6M7ozujO6M7ozujG50Z3R3R3S45TO60Y1u9K8/97ZT+OjxKTzw3ttW3Re9Um4GADD6khGbdeMbfZUq7av2Rl/UG2fPb8Kr77/a6DP2pRihO/pGH4DRpx5wYsf7yh4wuj4gyB2nB4w+kTi9B1f/IKPLwesBz5eH0ZXiDe88eMDoCnGCa+ABo+8tzvBggNEzQwNcNfAw+s+J231rdKAhrncHjD6ygLjG3ejjh7whXkpJ5gUa5zrA6EPIKd40T2XHC73lbvRrURwt8RM9kR1Eb7EbfQR5U6T8W7Z52x1GzySnOUszJ3qb3eghcq7renS86jjMw+hB8v9WSZ/zs65LWhg9hZzlz/lRobfZjR4j16OjQu9gN3qAXI4ORNDJDqNHyfXoB9F72Y0eIBce5IAKPcJu9C9Dm1xx805zoofYYfTAlCsCI3qU3ejfkM9ofpzmRO/t8QpGD1y4aszf0RFF5+UsjB5Y2WXmRL/EDqOTnOKToR9j0OkOo789VjEn+tVpvzs6SD6n+UB0suPW6BOT03wcOg/y86LLx7zwzkWLflTogmEXoAvGvPzpfKsjPzAWneyToqt388IU6JQ+zmguGPbV0WmO/OdQ+K1i5sPRyY6boXPMJ0QnNAed6IJhXx+dS/uTpaN/1GHegd5/4qT6/ug0RxuKXUZnfeZJ6Bz2W6DzBDclOs3rQR+LTvX90UHyJPT4N6vN+9DPetkxFbrInL1+h8PM2yqo0Y8sdKpvjs6lPXrojpuzwKA30ctZbGPfGJ1jLkAPmB/Ve4MvksiOTdFpPik6zePocfUt0WmeHWMVSId5KjrVt0TnhYyolgiag46k/7bgxr4ZOsd8VvTaPI4eGvbd0EFzPXrbnIPeiy5+BkaPXptrC5h3oguedxOgr2PO4ujPrKi+BTrNn3NXGTdW9/FRXYl+O/Pm6i5QF6CLju36xb3+ANHTAtUXRqe5Bz3w0G1VdJzmRg+oS9C1c64/ugvQqS5E39+cg65Hp7oO3eYBc6G6Hp3mRo+oq9Bt/h6ILlBfBZ3mHnSBugSd5iuiQ4pO9eXQcZp70AXqEnTOudEvqWMldM65j3ECdQE6zT3oAnUJOs3XQ6e5Gp3qKvT9zRvoNBeoL4FOcz9eS1fXo9P8sZx5fHXXq+vRT3MP+sC/oBKgp5j7GJegrkLH8ub6B+m1OgToGYc4D3psW9ejx819GzdAXY9Ocw96I76oymV1PfqS5vj5Hb2c9akL0AUHd82g55uXwi4e4fXo0JqXUhLQU8xZ4AifjS7c0EuJ/C4HmENgHtnW9eg0Xxy9fl+PTvXp0Eeal78loMsWdxYAp/pE6NzQZejl1bNneDoGPcM9fjOnR6c5lOhsxI5O84TCLzdHdTk6zWXo5VMX0LMXd55Xri7wevSgedswop5xitNHdT06B30kONOi66HrbV2PTnOkmJe85SHwukLqQHU5Os2F6IWNGHQQfTb1ZHTF9Wtlno5O5KnNucCr0WmeoB65nOkxx8EWMKd6Krrk+dQSVw/cxi2EzgV+MPpv9u5ot20lBsJw5AvN+7/xAU7R/jDoiBZXNMX1zlXhVHKqr0OtY8U6h455HToJoPcyR70OneEeqWDBbXWdojcwZ8AXovtFd/QKbqDduOhUvQwd86RPQV9Fd9QL0Bnut0bX3xj0huYM+DJ0iu6jV8FL5B103RqdqlegU3QPnFSbY2nN1cScqheh++a16Jj/xZRb9AbmqFeg+8O90px+mw7LLtbb9JwBn4seX8WVkWOO7wF63LxgflH1AvRzN76vM7ej2xY9aM6/rKLqBejC/HbqcBtfix4355VJibqi6D56fLhzXD59WGi4LfWr6Y75Ge+qOcaAX+gLPQG9z2+oClZJPwT0cfPn1J7V89Ep+q3NT6EL8wboVD0BvV/RMT9EfzYX5lH08gV8PjpF749OBq71KHvZpk+i39ec6e2gG/M4Oqmoej46Rddc6HsrdKqegN6w6Jj66EFy0Pcic9Zymeh+0Zug76/Q93boVD0f3RS9MzrmsZRw26rno/tF74e+twxVz0en6P3RO5tT9QT0kqLno/c3p+rp6BS9P3pvc6qegF5S9Hz0/kWn6qnoFL0zukBvbU7Vk9Hzi77QA1VPRKfojdH5entzqp6A3qroPvo8RafqqegUvT96f3OqnoDepOigy0GfpehUPQ+dovdHn8Kcql+HXlf0hR6s+jh605u0+OiYz4K+5aLvHdD1El1ToZME9KLpvtAj830cvWfRzUVwFn0ec6qegJ5Q9Lzf/0UadE7pE6JT9XH0mqI//s9CP1v1FHS1QhfQFn0mc6qeha49MaCPujvoPwv9XfTkogNOLqg6f5oUnfmegE7RM83H0VE/QJ/MnKqPo+cUvR59sqJT9f7omA+pL/QA+keXcaPm5LnqoGtGdOb7OHpu0X32UXR9BzpVvw6dondBR92gT7mOo+rfjr6LqtumR+8LMz961XTneF9V9RB65kcOJOyZ+T6EHi16/dFAfRj90QCdqhei1wf1O6I/GqAz3RuiC3X9S/xGkPXrFn++j6NT9K7qAfRHM3SqvtBRDzWdfBs60721eu54j6snrd/j6H2LTl6ix2AS1BOWcgsddRl0L4nojwboZrpPjQ5Mvnp004P5vtBRl0Loe9p83/cB9EcqOtO9byLoXImdIJ6x/mO+L3TUme+gF6QDev/pTtUnQvdetI2jdy86Ve/8ZrqPTtXH0dUMnRWSqXp/dJKFznTvd2wc9PnUme8F6I+7maPOJbFd8wF0pnv+xQHJq9tvQGe+56Pbb4q+FRwQMh26I34NemC6V96u7IPot+w5831+dGLRyUI/ia6bo5P50b0Tp0bRg6d0cqMugI56X3z37dVx9B4999fvoE+cUXRO6b2avn85+nYBuhrdbHihX4Au0HuMeGLRNTk6J/UE9I7qrOQWuo/OKX2ht8g4+nYaHeqFXoW+DaPrbNORLjU/t5KTbPaWUQG6SQd0HeTr0PUV6PISWcqWomsUvT83tKBb85/nDLAXL2FH0bdJ0X1zS9/AnJXcQj9cvkuQO/AFP5IsQtdNyExGqs4ehbnP3uOHFBpD1w3Q5SSILslXJwH1UnR1RdfbOYlOTrN/CXoVuKMSgTfo7ClBfS9LQ/RTHTzFLklWmQcuUafnTdG3T6M73B78GXS7C1+9D/rWAN0FH3cHnd2nqP/hbo2uAvGfSN5U58NiI+xPT0AI3HXmu0bQ9SF0C57A7qCjPlZ1uGvRdW/0YXHiqUsS6FH13ctCP44BT2UHXQdbu/ufHv0z5L6kTYAd9MMR377qo+jF5HJyQh30qDpVnxh9y0R3xfVmzqiDHlZvgr4VocfJfdh3vnqEvrPpy20X+mfJPXDisR+h72wYUJ8bXR82/8Xbd39PXRIfNfTbU/RH1+3QD0Ctd5xdsBPQB9UXesD8AM8RP9rSVZd41FNvjq77oKMzKu7X3UF3/wMu9ExzRzzMDrBBH6r6Qh8f7UFxEbMbq27R4+qStNCvqHkMnLxkN1UHPaw+P3puzXEKiVt3Rz2A3nO+V6L75nFy7CQCu1E36GNVX+ghc4DGr4uSiVW36L76Qh/INTUX4ja+ukXnsUF0+/QLHYbLyH33E+gBdbY8SD/0DfS00X7NFXDEUQd9TF3vpwp9G0SvN4c8cpXlAbqvfkL8t7/ynejWPFbz4JWWYlvecPHVqbrVPHvVz7ehB07nMXLyUt2i2y0O1V1ubyh0QW9pbtkNuqNu0R3wgPuk6JiPj/b9bKy6RffZRQx4zL0xOh+7m2weP1RH6M4GZBCchNwfjzuhP/4l0dyv+X/s3eFu20gMhVFbwOq+/xsvsEH2g8NUtDjDUhzr/kmNxkGbk0uNIlvj5Od++aAfq0thcBH79JPstKoeHXPU6819dR8ddr0LrnDeM69HJ/nm/mgP7K27y6D77D53PGujx81nXcT30IlIxPrkT0hH9Iuboy5J+Adeou0i+znhzrf3GujbS5LMNWpOUH8P3WI63IPmcr7HzdDrzVFECnSf3LWOe5PAfScz0Lm06qonmu/TIovumw9ykyNkHk5GV8EpmySp2pzIR+fzJKCM95h4cK/gyqbbtaVf9HpzNEGXc/j3uPN/AVvUdB+dRzHzfHLyDvqUeU7OgxMjXolO3JV7qbnNafRxcMRD6HH17Dc7+EVXqTlx0Y14zvlYProK0Cm6Zx6/w/ao+qG56+onLg460/Ti6Jgnjnau7J7LIfohuZLA/R/rTujzRzvg8dl3gA55WHsvST06fTprLiXeRt9H519KJruuiG7Ndd48fv4aR8fc/zXaje6YT13BkQR0Y17A3fmeM+yUEhvtueyg68Dc8V4e/Rm8jAl5wDyx6wbdmBdWvOnNA0USfx+zccY2hm7NX8Bv9AB62pXz+N4JHHuMuSH/THSNoBe8WCKAjnlX8vpbfwOecDAn89Clr8TIV0VX7Bfc1eQ+usyVt+biREXoPjvNKkIXP6D8/N3ooM9mlyEvQJet+Y0e3pfNWc0VngnbdbqWqTlRzQ6MIuYU2JCXojcgb7TtpkyKxUGHfbXJDnrZrsrl4P4bKhuYt9xKuxhbxKA3IK9B1945MlnfXB+NLkJg/ya/0V/Q/+mH7itL65pzxjaG/mwn7h/EVzQnz09Cl2eO9fcfvIv2BalHVx90WWVZc9Rd837qoGsUXXuHIA6vRUfdN/9S7+euj0HHnLjvVjkkJx+GzvK9H7l/t3aHPIBevSZg8T6K/mxnDm3spZjT0Dc+/r08h9E1CT3ffOJuS+PmfJESdI2iM987mJOhjTPD5vXrAq2Ojvn0jZHHuYx5E/QOKzln+5UgOmYx7hJz1nHj6M+W5nH0ePzlf36eE9AFegNzp+gkFb3GHHTNQNclvTG/0Yk+Eh3zGnRr3gydg3oD83J0Un1IXxr9yNxHX0sddI2hj8/3/05eStAfBeikCl3V6PzfM83D6PnmfJwWruRsmejM9zj6VlP0evR9zzD/inNIz0OvN78w+p6TbPTB+b59HjrZshcLznSfgX7B1YxjXoyeZk5y0JnvKeiFRV8Snek+ji7QT+dGn2vuo2seui6J/kfRx2c2XdPQx0/a9r3gkL4mOvAH19Kr0fGeHX3aOo44J2zD6Mz3Rui++YroTPdx9NmvmbrRh4M5YbpPRH/us3If0rPynIqugqonoq98M4KPRX/c6GPozPdl0LUeOtN9Inp+1W/0gVD09dEVQteN7qIz39dA14roTPdx9IKqJ6Jj/lj17nGt0eMHdd3og+i18307V3VQXfPl0Jnu4+iVVf9+S/9MdLOX9iqh6OPolVXfvnMO3TFfEZ2iL42O+hl03egn0JnvndG1MDrTfRy9sOrbe+hy0a35YugUPQE9q+rxG/146NZ8Xw+dovdGR9xHl49Ozfcb3Ucvmu9bXB10gvmy6Ez3cfSiqjvmREadx0SYg76KOkWfhl63lEPcVz9Gh3xFdIo+D73urA3zM+rOJlzLoVP0NPRA1XPRUcf4gNxBr909Lv5W9mcSOvNdV/oWIPUbOnwuukgRfPw97WK6Z6AL9JL46oKfWPSHJI+clI82H1056CzlrqsOunGz6EbcTAly1aKzjJuHHqp6mbr+RxfxFnIWnOS7A05CRU9Aj1Z9+zvk5NXJLub0A92IH8lfD52iJ6DHqs4tsNPNCbFuBt0hN8/PRCeBoqehU/ULocNmyS3bLoljuitOUL8SOkVPQA9WPXkLE9NUEatGeOybE9TL0W3RE9CjVU+/TaZhO3I06DwoUydjRU9Aj1Z9S1Y/6fYb+uNEstHjR/QE9GjVt2T002wW/UGK1TcSKHoCerDq21z1sLmRdsyLux4oei46VQ+gV5hLxKAHyEFPSqDo6ehU/RLoPpNRD6ML9NLYoqegxxfweJebQx9Cly6GzhE9AT1adcpeZC6M7Epfkvic90d7OboteiJ6fAFfUnSY7FNsfXveu4Ki56NT9ZoA6JMfP0kvKV3BxYuejk6eteqnzVE39fXUdUlzip6PXl919NDymCw65s4FVl3bXAnoF626TDwlnmfMDXsPcvvKuHx0sZYrR0dLjtJP9F+/ZgNyip6Afs2qv9CKEGctgHnCC2ILip6PXl/1nxZW6T1089dNyCn6jX6j56HXL+APR7P7zOPrZR3IOUfPQfeP6r0iCfOm4YhegM6Ab4fe3Zzhno/ev+qS1ip6Pnr/qktaq+j56P3VJWmBomOeit5/wIO+xnCvQKfqN3p+7HAvQG9YddCXK3o+en91Se3Nq9AZ8P+yY0erjcRQDIYxoej933hhy/an61LTJGNZqXRRxjGTi3zojDtF3xOGuwHdUPWiT0U3oIeqv4a5E50BX/QNYbi70Mm4Xr3THXOKbkJHXc2OYO5GV9U3msuKTlT0PcHci86AvwVEf3PLDMPdjo560Q3mJnQe60W/2lynoKMeYJ6LjvkGdO+AL/piuFvRFaCufwk1lwE9XB1zpZob0NMf68pVx/wMdDLOVlcuOq/cDejRhznFqgtzA3ryY12J6JjLgJ6sjjnyijM3oKera0q0+ePoS/T8w5woehI6hzgDerA65oz4FHXMDejp6gL9/e8tQh1zA3r4Yx3zLHQe6Ab0aPXZ/MZCIeYG9Gh1eEFnlWFuQI9WxxxlibUCzA3o4er6bM0FW/HmfnSO8EOnmQt0NhVgbkDP7fpMzRXqAeYG9Niu60vqSV2Hmo+3JHTUTzKfP4VdAeYG9Dx1aY0Oe7i5H92vju4KHfZ0cz866oeZ33S0OuaJ6KhbzWd0hCf3AHMHul99lcl5ic6nweZ+dL86iPPiXHXMo9FR9xedBcLTHenmfnTUQ9CVbO5HJ3KofwacFoeqD969BqOjPs5Cv514ghfm2eioH4Z+nDo9z0dHXW50dg5UF+Ze9ER1mL9Bn4XZlOQ3z0dH/RT0lbqM5vnoBPUD0Jfq/n/V8tEp+wHoXJ/yam5g/kroqMuAPu0s2W2j3Y8eqI7lYmc9zf3m+eioH4MOe4B5GjoZO9ilBfo56uJxHoruL/takZ0t6oaaH4eOuh3dr455MLp/xGO43vOra2Aej+4vO1mjox5Q81R01IcR3a9OzX8HOiPeZG4f8JzaA9BzRzy0i62A0Z6Hjjrs5qKjHnCCi0ZnxPuLzm7IaI9Fp+x2c7YDah6NTtnHHvOV6hb0Qc0D0OPLjrlNnZr/ZnTKrm3mvgGvj5r/dnTKvsXcV3VqXnTYhzaYu9A1PsiLjvqV7ALdMt81PsyLPrNfau6q+oC86HtmPOaeqgvyov8XXcQuzA1Vh1xvRd/Wdsy3os8tL/omdsgd6oK86JvYMbegC/Ki38G+xZw7nkxe9H3smO9XF+RF38aO+ZU3rcmLfg/7/QDobVWXIC/6vexD+9BR1+MvXIu+nx25DeozedEfZr/DALc97NKAvOhPYR+6A32DOiWHvOg29z0n/1m86M9m3+YO+iL6RF7050UG95+K6+2t6BfUHfdzxCl50S93r7gB3TXmiczijPWib3WXDRzxom9yt8ADjnjRN0ZjMzzgiBfdUfg98voSvOjuwuOh67w5qhfdHFieSQ83ef9Rin5IJISI7sGX+K4ZvOgB8uhL+s55sp69ix4g/3DwLnpA9Ki9Pn6AoodFP8aXUduP/qoZ+ow89Jop+ncpetF/C3rzmil6U/SiN0Vvit4UvSl6U/Sm6E3Rm6I3RW+K3hS9KXpT9KboTdGbov9pjw4EAAAAAAT5Ww9yKSRd+i+dF+nSmQjYpsqds9U0PwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/pomegranate.png":
/*!************************************!*\
  !*** ./src/images/pomegranate.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAFVBMVEULDAz8tDWOABTuKykANIEAAAD///8wnDwFAAAAB3RSTlP///////8AGksDRgAAHGZJREFUeNrs3dFu2zAQRFEX0vz/LxdNgl4EtGXJJLUkd+6jjLZuD4YRlBh9yKXL6EZ3WdD/uEQZ3ejO6M7ozujO6M7ozujO6M7ozujO6M7ozujO6M7ozujO6EZ3RncZ0eWmz+hGN7rRn7+2rZT+9/iV+LjHtlR50VE+m/5l9CkDmy7jG32WCu1ae6NP6q3v9hfpq6NfbfQReyoG9IWkV7+X0YceONif98xeMnp80jF3B3rJ6AOJ49248g8yejh4OfD+8jJ6pLjwvhdeMnqEOOAx8JLR1xYnPUgyes90AB45eBn9PnG7L40uFeKjuUtGb1kpPqi70TuMfB8z8Q5l9GbkiI/vbvS69PtYN/v66MXIp3GX0VuQmz0BuirP9fibeRn9Q/Kd5pu7jP4hudlvRTd5C3ajXyQ3++3oJm/FbvST5GZPgK6CfC12Gf39yr32EHQ/imnU4ycZPeCBa1T8BY2OOeSLs8vokCO+uruMvj2ymLP27Oi/Z+6xZ0CHPEuMfVD0tDOXpL1LjH1U9KwzF+gd2ROiM/Px0j3qSoeugclB78uuZOjMPCM6Y8+CztG+02DoG+i9Qj0DOkf7sOgb6N3HngKdO7jU6KgnQGfmo6Nrv4ldi6NjbnTUtTg6R/vQ6JzvAUf8WujM3OjF2EdBT2gOeoD6euiYL4EuSQHqs6HzQGZ+dP3U9EHNgujMfAL0Q3VR2yN+NXTNYI7pEbpao6OuhdAxnwxdB+bc4AeoB6CHmcef7/wPbqAHqA+OjvlO857vmIPeqhbq9egJzUFHvSQHPUB9CnSO9snRMQe9bUI9HD3ePP5WDvNO6Kg/pkcX5jNPHfN+6KjPjc7O55465j3RUZ8ZHfO5p455X3TU49DzmSPM1A/MtQeoj42O+dRTF+Yn0SU1VY9HX9wcdGQxP4XOC1XqQehpzVEXPflH7fGZKNRj0POaM3XMz6EL9AD1YHRhvgT6dgpdAj1EvR49386Jb6tg/hZdoDdR1zzo7HwZ9O0UumgPUq9Hz2dOUJ9Ch5wXAtSj0DFfB317jy7MW6CjHofe33xMdDpGZ+agh6jXoyc0pwvozBz0APUodH5OJhE65JgHqEeiY54DHfLG6PwEVQB6pfnS6JB3MEd9cHSV5uui09YDHXUFoCe4iatC3+jwIxLNv6zHo2OeC7241vDjjqgHoE9r3h39yTWYCfS26vHomGdBLy5RG3TUB0Tnxj0BOvVH5xZ+SHRhnhRdEj079qvUFYCe4gs66XP0F9fbPpmLR8fc6C/3v1erD4e+mvmH6OUlzNupx6Mz9AAYCh56WeN3xwEfgB54uOtMcUOnHu9JqAegx5jrUqFDby+O+kDomN8KzjsUUcjQW3uX6vHoDP0e8atPR+417+JNHPAd0eMP9yvgVOmur4ZZOAn1cPRe5gV4hUJzcxX1Jf/L3t0tp47EUBil3LXf/5WncjNfuRSru5FkGU721aFjCGHNln8SGNS70Sn6k8TJGxRL31IN5Az4WvQ+82txlgv6Lj3YHPVWdIZ7Ffns5c7cxUub5sc51eYM+FL0HvMl8UjhLf/eYyJ+rznqfegM98qSE4mGRQ7p/Sw+kEXHvGHAF6LXF31OfpA3wGLiPMbRYk7Vu9Axv5mc7KsR547PRke9Hr1+uDuvP+Rh9Xg6zRnwLegUvdRcIlfk3JK9Gv9d6FS9A52iF5Jrgdys2Nn9TehUvQG9xtySz2tu1e3Mr0evM3fUG9AZ7hU1F9wOuruPZ0Hfg86Ab0Cn6KXkB7G8F8t8jZVcdDWiU/UGdIpeN9mPPXOMzdL3oFP1BnRhXlRzZ5hfmLNhpXovOuoqQa8f7ovkxEe/GBBfhs6A/0j0pcmuUzBf6jnLqej659DZo5eZ2/aSCfphM25A75jvr/vQKXrVaLflPfnvovN+ozx0daJT9QL00qJDvmqOOksOOuajtOqgd1W9Hp2iF5vDzC2ybl6DrsadOuq6Ex3z7JPz2fn4LjoPPkrU+6tej07RVbQ79xlRX0O3V3WL1NVZ9Xr0eNGvaw4owEsn45yOXxWdfI06Va9Fp+gF5iK2un7VQR9XRSdZ6HpC1evRKXqdOaZOox103C0R7Onqaqp6PTpFLzM/+JehdavuaIqts9X7q16NTtFrzP1TM1/dwWTj71Gn6uXoFD1ubskJa4Q497g2J7n79f6q16JT9Cpz4jadmBUHvVpdTVWvRafoZeZkUnWcz1m+kjI+XZ2qV6JT9DRz71r6BN2q02CCeVD9eepUvRKdoiebg37KBP3MzoLDYtAz2XlCDVWvQqfoBeY6NtQnR3iDCJPvU6fqdegUPdc8Cd0ewwvyGnSrDntT1ePo+UW3rxaIy7reBTvZHA56nboaqp6PTtGzzQ+3uK65/bJvThLQ+9Wpeg06RU8399F1sXhpasyL0VFvYKfqFegUPdN8H339tzGjvOlETexUvQ79lYOOOeiO+o456BTQQS9Wn7Nnob9q0fPMtXo07ptbcfH3kDeho97BXoXOdE83B91F5KZ3XM/6cNWVjM4P1cDOfE9Fp+j55j460LP3uGCO+uGgV6k3sFP1OHpp0f1TM5ZFvAN+M/Kp+tGnXs9O1ZPQK4t+rKIfhnwHfXjo9er17FS9BF2gJ5n76CAK8hn6Qah6NTpRAztVL0JXEJ02zNVn11a8NdDDV2LjZYf989Dzi078tTh6hbok4qvDftN8D6HHi+6Y+7XWDF1L6KMEHXPiqcNeXPU4enbRMffRWfDR/aVRiS5CltRVV/VudH+H7qpzU451FB31+AHbojrsT0aPT3fH3FHHPIA+qtAhJ5vqKpvvcfSCovsCklzzw7skx0IZujUnK+qwV1U9jl5S9OMqy3/xwtYO+jDoSeo8vX11NlNN1dvRKbpvTnbQD/da7iCsxtFtzX1178d8Lnp8uvs7dL/s86pLVvBEPpSKjnlcXbXzPY5uix4qum9OHHS29n+FMj3zS5jtpEmdqrejB8xddZitumMeRxdZUJ9vp6eiM91jRZ9/aLvsHWYXW6dVVyK6TolVnbInz/c4enHRJfKLmY/OLc3e4OKaa9ecAfMgdapeiR4vus5Z7amriLrIEUS3g8d9ZIMeUO9AD0/3ufnJxwA46IHDAgd97y/bY1WHPXO+h9ELi35Ctub+PmHvBCCOjvlj1al6N7qDd0a+QrfEU0fDnYdu76sQOk/3eehM9/2i++bk/9uOOuh5kbRvbtH71Znvzeg7H/pi0Vk35i3ov3LNB8jqaHoQOtM9vejjnCV0zpluRz9sAlXPV2e+t6Fvm4POJz6CfjLfQ4+/d5VHqKg6z/FZ6PvTXQH0g4zzPl1voCuILpEtdCqzqp453+PomUUHnTaf0C9eWPhuRZcm6kek6iS56nF0xdG9F4vNXHN6vvNhVLFr72j/qh6/BG/V+9Ej031M0MkOOv9cRz/eRT9JG3UePK3qUsp870dfGIuDczbHcfZ+dreL2+iYXz4+Yz+t6lI/OtM9r+j4EdAvzf11DhSS0S0yN0XiVUc9Yb43oHtF99E1vO766voVfW6uJXP7fHTKvOrHPM9Az53uRJfqU3N3Bzsy0f3DQn5ZEKh6vjrzPY4eMtdCUe01ECo0U2dQF6Pzbe0HUyago96PnjfdffQBszF31KPoe5deJZHTL4Vs5ugV6spAVwG6VacynBUv/+L8bXStohNj/rM2r/q96MpAzzp2Jx46mG460SH3rhv0VD0D/RVFn7xbEfRFciKLPu5A504B9DL1H7AoesV0t+psDORyHPTARVjvbBHzmfpHomsb3Z3uxKAvW/uAV0fbTtFr0Xm0cnV26jejawNdjrnbVEfQ2fFvo6sD/XgAevIunZzRFUZ31ffRpYWd+uTgwUEvrHoc/VWKLv9KDOhx9U1z7xlZ9Pl/VbpP/Ycshl6ySz9LG5dA1aEwSUVXAL16wOt2dG2jy5hHqz7i6FdPSjLqa+jjg9CVj04MeQAd9Q103/zys+3sgL96lm+io/4uuqLo+dOdOOS8nJvq8aJL4Mq/8j7/W+i70EkU/QV6vOh+4k1HKQMdZBlz1Ol/AD1Z/QftK9Hj28/MYab3hD2J9IXoCl2DjaMH7hAoOpt5Gev/9zc2Kj9rUwxdoD+96CSK7uzJATZLKegkiq6PRVcb+tXBAl8z5F+FXnU5zit3l7nl8f760qjHd+oE9P3cjj5W0TX5+E+pD92/l1kqQlcy+iL6K4A+fTHkXpPFvBnd3sku6nHor9vQtYxuREHuNPd1BPry0eZb6Kg3oSsT3a866pA/DX18Aroi6Aqibx6Zs1RIDl8QnTwSXTeie6+dXxDfuh+dO9Wjo/5Z6HM/NrhbXbei6/PQt8yj6Md96ON99PFQdPJodLWg6230MYz6GBXoqN+O/tpFd4/jfGAWe8yJJPnosM9/1C70133opi9ePhad/KE3oktKMZ+/4bwenXSha8O8D31sog83m+h6Hrp60HXnPn3nFdUaumb3tOiS8tH1h/57+HZR87n69cZ6GLoC6GW7dH0kupyiZ6GT70LHPI7OK59gDuTavaU/9FV0zOPoOy8pam9XXdacZ56Pru9Bl/OyvmmuvKL76tb8q9CrTtPlmBeiY5Yx4DFvR7d5LLqzvpGdV9SaB96eDnkNOuqfgu7jeeTaJM8vul91YtH1h354STXn28XNZw9pzP9pdKWgvyE+FDefqxNDno9Obkd/hdCL38Ik9qxL6Aqiz/Mw9FcLem1EMs2JUt4x+/3oow09bh5X10/+Y++OltuGYSCKesTZ///lPt7RwARBgRTkVPtUxzSTyemSkmqrL/rWOOApc3Kl6nqX92dEmO+vul70B0SYb686edFLyTHfVXWyBV3vnp6o+Rb1M/OL/nzyPHrvFOJFrwgWLZEpdK1DJy96gnyT+vm2GS96XUTaTnT7PV/0WnDI96PznV/0KnLMC9R/HF2/hm64/2d01TS9fh+vV9efb7oq0EUgr0E/9qAr2/TfR5cXrJ6D3l50Q/dg8XmtZeikAF2X3xgZtsuLN1JQ9Qei67HoJHts/qJXomuMDl+bUxfiL/pT0eXyMTKmjvj9SaDrj6KTGfRzkfRM8wTX30LPb+rwBdUxf9EL0PObOpet4pum/DwcvRWht0eh81So6gqkiyVJL/pdd4zE0UEPqCsYCyVyB7pIZ3W/Ef2zHZ1E0XkwQBcZDTHihp1H69F1zovuoaOuyxfujKRIb6VYjK4/hK7r6M1HJ87oATkRkJBrsEEk0f3vnz14z6PrB9Hj5AzuXe05z4P6KnSdp/tp9KWH76dfeuQ2cHFy0Gc/n6AMun/doRRdVei9BTaIPiIXT/F4YE6m0RVBt+rC/D9DFwGSGKkouX0Ja/uEeh7d3P2fRe0H0RvosRj0k5+IRbciGpBZdMzD7GvQG+SPQM//D4ypTR2eXoMpepCcI6cLNykg2aqLMM3pYFWJLT2F/nkCukuDeYSOVrcO+hFOCl2nYE7Vmf+30JVD19HZrW37LXlkQY3fhrJb1ovoGqKfi343urajk85FEuf025C77qAb9b4rWVN1Ni3MDTpP/CK6kujfGA4R9G0ih05e7IR5dKblgVl4StFVhY7690tyrjmJbMYDc+/DxAl0Hjvo5vrOL6A30OdP2gb3dO+bmzb56G2Abh7No6Nuzam6PTWoQ28Z9MSm3jpo3rGwRQpdA3PQzTfJo5tZOuitCP3zfHTIqVBE/TDqwW90FV3f50XdMf8pdF1BR71LhjSBxFOPV10ddLnoAXX+5KG3SnRl0ZWoek/MpoMUW+BF/Bfn0OWgq4GuheiaRtfPoDtIPDDHefxKyTdfYtHn1b2/S/xov4veQJ9X99HNkwOkwClef+clXfTRO2s8dPNzWfTjVvSWRf/sQfc4LLqF/WZ9HV2EWHU56OalVQfvaXTl0X1z4iFBy8tFHN0YujoJ/q+qI/O70ZVH17x6Hx2kMLrMbm4KnUGH3DKqhy4z6fkspA5dD0NHbBK9f9HmynTnR73rxV/VQe9P+vvobSE65rPV/FZDr+hxdGLHRtUVQL8XvWXR2dTn1KffBqX4cd8VdHj9r1l1qzfYYRIH73n0zwJ0rUJHL4fOWGjH6JJI+O+hjy7GuOi6G10r0DWPzgHSwJy4i+yRQpfkqx9xdXfCenQVoNuqy1RqqupKoZ/NsTIDe7HoztKxAV33o7OpJ6puf9nxquPVIbW9tX8+TzGPrjO6VT+G6Mdd6GzpefRU1cnsDRchCqFbXJk5eOijS8TxC6DrbnTl0BPrO+qOuSPsmyNlu3d+yBydSSNXVbvoTtOLtvQidKoOe/D83OFx0HWWGp+E++hSDJ2Z6tB3oGfXd+LpSb0OTqJ/5zP3O7FvbFTnRQn0lDm5tKUXoKM+RofKqk/sCd/NQQMc9X7v7c8gB/34a+jZ9Z3EzPmV4zWB3h2AOBBGzvmB5tBVgs7qXoGOehDdvXvLOBF09z4D7lu2EuiY/xR6cn3XCP2L6yQ56IHPw3jn26A7iBA+Ep3VPY8u0CcSRT9MMIjHR1cfXSYJdIbXoWsdupJVj6OT+9DRHzSXETy1tehz6FqDzvo+nRj6sQ099P4lFBvozgbxfPS2AD2HrjJ0KYzO7Y7G6O4l3frVfSE663vqI053oofe4Qja8COXLVj1+tV9FXoDfVq9AB1z8OUWnSeuoOtJ6G0l+ucKulHfiq6vFl10hrXmq3tHJ53rdyXon6XoSlS9Ah0JHnrmxEX370rR+6fYRBKrey26Gh1KoY9vAd4xR52Nm2EWXYH1nchmWdHL0Fnf81VX4jxdCqubIWAwgUEPVt0OEKlf3fPoq9d36Sq6FEfX2IVh0+jNuSLAQCYrWN3L0K36Ccygh8xHZ9P9WUXMsOGHDeP3AcwXvR590fqeVsccdRfdv9XUFnSG1a/ueXSqvlY9ji4Os+0sjn5g1gl0MeC2omuy6E9DB2xWHR6LToV3oJMCdJWis76vV/dLa8fYMwFZ9En1s3kSnZlUtbrn0fNV9zc6xHoBEfVb0VEH/fmrex49X/XhxY0g+mHQEyeCV9HloFcWvRw9XnUSMKfqfeE4ulX3RX10W/QfRmd9X1l1sg79ArpO6Eqgm6LXHcbl0fNVHx7gLEEndvHwh0So5KuDXl/0PPr+qpNr6F85ycgcdcZPVp0pK4v+PHQtRVcfXSa+OewaozugWl/0YnTW9/3qPnoboAPJgw65oe9tPJGqyxS9ZnXPoyerTtJVj56xhS7+MKhDTtRD18OLnkevrzrkDjqcRs27wmfIe+hO1VV16E7RV6HvrPq8eveW+2Fi+wXMvVMHt+o8VVr0beirqq64Oky82Eg45gB9dYTQMzeyvOQRRd+EzvquJepxdntzdyvhmI/etBxE96teX/RP24Yu0Neoa0a98zIXHQPnDHAW3aoXFR10bUGn6ivQ4ZPi6qOXfDe36M4IO6PzUcZ6cw7jNqLnq05EptTdQc2at3byuYxuq/7ooufR81VHnWjCnXFx9DaDrjC6US+7LkPRd6FT9bz6vDvx0dtBLI9lZEgU3Va9ypyir0TfWnXrvgS94bkaHV/70dfaHX0l+t6qk0XsTA4nq7uH3ibR+aEz5st29J3oVH2xOu4r0Enw4D3edNQtOuaVRc+jr6+6UScj9fE20N89nOtxPvq46mWLO0Xfhb6/6r56+DxdfXPGQJ5AR73mKI6i70Wn6jera+LtMN6UoLdTvBn9jy2XLe4UfTc6Vb9VXeKJ4XrgTIh6c9ADVScVizv53IOer/q0Os6T6gwdbAJKobfiom9Hp+q3qVu64Lbuv1nKRScOOikwZ0ffj07V96nH3wZhg7Os+Zr7AUmqNveLvh6dqt+lzuNw1UXcMSfzHLqy6EoUfTc6Vd+u7qP76gMD4S5pAbqqir4dnXxuVOdBqOqA5v+FPo5eYE7R96Pnq466HHUN0ZPJo9eb6wZ08rlPfecNRifFQa83F0W/C10cy1Vdhz+KIqn4II6i34pO1fNld9T1UPRic4p+IzpVL1CvRpekWnOKfis66AXqpAy9wLwenQP4/4kdopXmkCfO0Tejk89+9QeyP8f80wrQWeA3qcO+UGxp0VVwIY7FvQCdqv9O2SW1lUWvMKfoBehU/ZayaxV6yxKp1pyi70evV9ci9JYRMuZHgbkwvxmdBf4+di1Bbxd51vc8s7iXoFP1Zer/2LujnchhIIiiFqb+/5f3AYkrhp1MmI5TdlL3Ea0E7FG3PdEAkvo4dk5k2LukPTKzmLPcXeiM+nh12A+6hvELCV67UDebM+g+dNTHs+N+2JOVl+gP4CS3uQ2dBT9Ynerqv/Fek3eymrPcjeiM+mnsZfT99+/nX8sB5JgXBt2AvrQ6dtr+l0eaU9Hcis6CP1pdY9WlLp+5MC8sdwM6NdRPu8bX1d8wtx7nmLfuRmfBj2Kvq2+wf6xlLszd6FpFnfb8KHyf01x2dNRVUC+8MX5Ir67tHnNJmJvRWfAD1OVQn/GlGsvdhu5XH8m+hrkfXSPULe+fe/pJNYO5/Oj1V+v1t9SgIJHBfAw5YW5Ery/4+rAjIarAb5AbzVnuk6EL9RNP9u3edNlJfhY55jKgm9T3s399oL/HLo0z1whzPzrH+snsmBTecyFRgfxoc8J8DnRqHnXay67n9cfs5DxyN6HXL3N+9p3g/s1Ownw+dKE+J7u2xGe8s2MuA/pa6iTcXxlPudkxN6Db1Emlad8Gt232urkfncucn50k6ieR613ywiXOgo76VOwgFm/++5PB3IWOuo29ngxTXjD3o3OsL8oOudzkHOh+dL867LoyOeZWdL867AV4w1FeMvei+9XpcHXNRY65Ad2gbtjyogI44gZzFzo11Kd3l0QFccjd5qBTGd0/6yQqeLvF6+Z+dGZ9XnbRXGsd89Yd6CPU/Xd5URkccYO5Cd2vDjttUde9AUfcYO5C96uT9oe3Q7xu7kf3q1Md3C+OuQt9GXU6wRtwq7kf3a9OVWQiEeJ2cz+6XZ10pLsK4AZzPzrqPneqaANuMF8MHXWrO+3CLXAbzf3oJNQ9aTM/ODWevS6Mjnr79DYvNgnz1dFR92fQNcy5Hx11fabnCXMvetQN5m70qBvM10enqBdeqq2JznUu/a5hPgV6VrxhtVvRo24wd6NH3Wa+Pjq1sP9IHOfzoGfYDWPuRY+6w9yPnhU/kBzzqdAz7OYxXx8d9TyoYcznQ8+KHxG39inRs+LHmavfBR31u7Jzg5sVPSvesNrN6Bl2w5hfEp3a7a7xjTGfFj3DfmSM+Z3RGXbdh7z1fnf072HPmN8HHfamS4t/kwcd9Suz8w32oP9mv6R5gzzo99jxgjzoDwn2S5KrB31z2jPlRvSwH0Ue9F3sITehh/0I8qD/iT3kBvSwV8mD/ha7VhMX5EG/xcNZNciDXmMPuQHdz64V9jrkQT+EvWn2IYc86Ee6R9yA7mfXlGsd8qAfl166+8XVe9APTm0md8QZ8qAPd4/45dFZ8ySzOGs96Ke6ywaOeNBPcrfAA4540E9M7WR4wBEPumvgx8vrv+BBdw88HhrnzVU96OZgOZIebvr6Twn6JCH0gKR3sNXoATzok8uTvtpyxvqpd9Dnl6+Hd9AXSFV7/vp+0BdLf8aXUduPftWafiI3XbOgbxX0oN8FPV2zoKegBz0FPQU9BT0FPQU9BT0FPQU9BT0FPQU9BT0F/V97dCAAAAAAIMjfepBLIaQjHenSpf/SeZEunYkAWx5LWBl/aXcAAAAASUVORK5CYII="

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
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Intro */ "./src/components/Intro.js");
/* harmony import */ var _components_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/event */ "./src/components/event.js");
/* harmony import */ var _components_boathouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/boathouse */ "./src/components/boathouse.js");
/* harmony import */ var _components_accomodations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/accomodations */ "./src/components/accomodations.js");
/* harmony import */ var _components_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/registry */ "./src/components/registry.js");









var IndexPage = function IndexPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Anna and Jake's Wedding",
    keywords: ["Anna", "Jake", "Ewing", "Zien", "wedding", "Brooklyn", "Boathouse"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Intro__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_event__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_boathouse__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_accomodations__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_registry__WEBPACK_IMPORTED_MODULE_7__["default"], null));
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

/***/ "core-js/modules/es6.regexp.search":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.regexp.search" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_search__;

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