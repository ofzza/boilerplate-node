"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_child_process=require("child_process"),_html=require("./server/html"),_html2=_interopRequireDefault(_html),Test=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"run",value:function(){var e=null;try{e=(""+(0,_child_process.execSync)("ver")).replace(/\r/g,"").replace(/\n/g,"")}catch(e){}var r=null;try{r=(""+(0,_child_process.execSync)("uname -mrs")).replace(/\r/g,"").replace(/\n/g,"")}catch(e){}console.log("OS version:   "+(e||r||"Detection failed!")),console.log("Node version: "+process.version),_html2.default.run()}}]),e}();exports.default=Test,Test.run();