!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=React},function(e,t,n){"use strict";(function(e){var r;n.d(t,"a",(function(){return r})),r=e.themeRegistry}).call(this,n(3))},function(e,t,n){"use strict";(function(e){var r;n.d(t,"a",(function(){return r})),r=e.documentationNavigation}).call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=ReactDOM},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=(n(4),n(1)),c=(n(5),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.switchTheme=function(){var e="default"===i.a.currentTheme.name?"znai-dark":"default";i.a.selectTheme(e),t.forceUpdate()},t.switchToLabel=function(){return"default"===i.a.currentTheme.name?"dark":"light"},t}return c(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"znaiblog-theme-switch"},o.a.createElement("div",{className:"znaiblog-theme-switch-action",onClick:this.switchTheme},"switch to ",this.switchToLabel()))},t}(o.a.Component);n(6);function s(e){var t=e.docMeta,n=e.tocItem;return m(n)?null:a.createElement("div",{className:"blog-discuss"},a.createElement("div",{className:"blog-discuss-content"},a.createElement("div",{className:"blog-discuss-twitter"},a.createElement("a",{href:u(t,n),target:"_blank",rel:"noopener noreferrer"},"Discuss On Twitter")),a.createElement("div",{className:"blog-discuss-github"},a.createElement("a",{href:t.viewOn.link+"/"+n.viewOnRelativePath,target:"_blank",rel:"noopener noreferrer"},"Edit On GitHub"))))}function u(e,t){var n=window.location.protocol+"//"+window.location.hostname+"/"+e.id+"/"+t.dirName+"/"+t.fileName;return"https://mobile.twitter.com/search?q="+encodeURIComponent(n)}function m(e){return"index"===e.fileName}function d(e){return new Date(e).toDateString()}var f=n(2),p=(n(7),function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)}),v=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,a++)r[a]=o[i];return r};function g(e){return o.a.createElement("div",{className:"blog-list-entry"},o.a.createElement("a",{className:"blog-list-entry-link-wrapper",href:f.a.buildUrl(e),onClick:h(e)},o.a.createElement("div",{className:"blog-list-entry-title"},e.pageTitle),o.a.createElement("div",{className:"blog-list-entry-date"},d(e.pageMeta.date[0])),o.a.createElement("div",{className:"blog-list-entry-summary"},e.pageMeta.summary)))}function h(e){return function(t){t.preventDefault(),f.a.navigateToPage(e)}}n(8);n(9);i.a.overrideElement("DocumentationLayout",(function(e){e.previewTracker,e.searchPopup;var t=e.renderedPage,n=e.renderedNextPrevNavigation,r=e.renderedFooter,o=e.docMeta,i=e.selectedTocItem,c=(e.toc,e.onHeaderClick),u=(e.onTocItemClick,e.onTocItemPageSectionClick,e.onNextPage,e.onPrevPage,e.textSelection,e.pageGenError),d=u?a.createElement("div",{className:"page-gen-error"},u):null;return a.createElement("div",{className:"blog-layout"},a.createElement("div",{className:"main-panel"},a.createElement("div",{className:"blog-header"},a.createElement("div",{className:"blog-header-content"},a.createElement("div",{className:"blog-header-title",onClick:c},o.title),a.createElement("div",{className:"blog-header-search"}),a.createElement("div",{className:"blog-header-theme"},a.createElement(l,null)))),t,a.createElement("div",{className:"page-bottom"},a.createElement(s,{docMeta:o,tocItem:i}),!m(i)&&n,r),d))})),i.a.overrideElement("ListOfBlogEntries",(function(e){var t=e.tocItems,n=v(t).reverse();return o.a.createElement("div",{className:"list-of-blog-entries"},n.map((function(e){return o.a.createElement(g,p({key:e.pageTitle},e))})))})),i.a.overrideElement("PageTitle",(function(e){var t=e.tocItem,n=e.onPresentationOpen;return"index"===t.fileName?null:a.createElement("div",{className:"blog-page-title"},a.createElement("div",{className:"blog-page-title-title"},t.pageTitle),a.createElement("div",{className:"blog-page-title-meta"},a.createElement("div",{className:"blog-page-title-date"},d(t.pageMeta.date[0])),a.createElement("div",{className:"blog-page-title-presentation",onClick:n},"(Presentation Mode)")))})),i.a.selectThemeIfNeverSelected("znai-dark")}]);