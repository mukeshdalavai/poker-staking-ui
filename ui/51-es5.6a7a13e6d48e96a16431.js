function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function _createClass(i,t,e){return t&&_defineProperties(i.prototype,t),e&&_defineProperties(i,e),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{wHD8:function(i,t,e){"use strict";e.r(t),e.d(t,"ion_img",(function(){return r}));var n=e("QX1p"),o=e("u799"),r=function(){function i(t){var e=this;_classCallCheck(this,i),Object(n.l)(this,t),this.onLoad=function(){e.ionImgDidLoad.emit()},this.onError=function(){e.ionError.emit()},this.ionImgWillLoad=Object(n.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(n.e)(this,"ionImgDidLoad",7),this.ionError=Object(n.e)(this,"ionError",7)}return _createClass(i,[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var i=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(t){t[0].isIntersecting&&(i.load(),i.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return i.load()}),200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return Object(n.j)(n.b,{class:Object(o.b)(this)},Object(n.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}},{key:"el",get:function(){return Object(n.g)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}}]),i}();r.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);