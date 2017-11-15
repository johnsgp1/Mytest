/**
 * oclazyload - Load modules on demand (lazy load) with angularJS
 * @version v1.0.1
 * @link https://github.com/ocombe/ocLazyLoad
 * @license MIT
 * @author Olivier Combe <olivier.combe@gmail.com>
 */
!function(e,n){"use strict";var r=["ng","oc.lazyLoad"],o={},t=[],i=[],a=[],s=e.noop,u={},c=[],l=e.module("oc.lazyLoad",["ng"]);l.provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(l,d,g,p,m,v){function y(n,o,t){if(o){var i,a,l,d=[];for(i=o.length-1;i>=0;i--)if(a=o[i],e.isString(a)||(a=j(a)),a&&-1===c.indexOf(a)){var f=-1===r.indexOf(a);if(l=h(a),f&&(r.push(a),y(n,l.requires,t)),l._runBlocks.length>0)for(u[a]=[];l._runBlocks.length>0;)u[a].push(l._runBlocks.shift());e.isDefined(u[a])&&(f||t.rerun)&&(d=d.concat(u[a])),$(n,l._invokeQueue,a,t.reconfig),$(n,l._configBlocks,a,t.reconfig),s(f?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",a),o.pop(),c.push(a)}var g=n.getInstanceInjector();e.forEach(d,function(e){g.invoke(e)})}}function L(n,r){function t(n){return e.isArray(n)?D(n.toString()):e.isObject(n)?D(z(n)):e.isDefined(n)&&null!==n?D(n.toString()):n}var i=n[2][0],a=n[1],u=!1;e.isUndefined(o[r])&&(o[r]={}),e.isUndefined(o[r][a])&&(o[r][a]={});var c=function(e,n){o[r][a].hasOwnProperty(e)||(o[r][a][e]=[]),-1===o[r][a][e].indexOf(n)&&(u=!0,o[r][a][e].push(n),s("ocLazyLoad.componentLoaded",[r,a,e]))};if(e.isString(i))c(i,t(n[2][1]));else{if(!e.isObject(i))return!1;e.forEach(i,function(n,r){e.isString(n)?c(n,t(i[1])):c(r,t(n))})}return u}function $(n,r,o,i){if(r){var a,s,u,c;for(a=0,s=r.length;s>a;a++)if(u=r[a],e.isArray(u)){if(null!==n){if(!n.hasOwnProperty(u[0]))throw new Error("unsupported provider "+u[0]);c=n[u[0]]}var l=L(u,o);if("invoke"!==u[1])l&&e.isDefined(c)&&c[u[1]].apply(c,u[2]);else{var d=function(n){var r=t.indexOf(""+o+"-"+n);(-1===r||i)&&(-1===r&&t.push(""+o+"-"+n),e.isDefined(c)&&c[u[1]].apply(c,u[2]))};if(e.isFunction(u[2][0]))d(u[2][0]);else if(e.isArray(u[2][0]))for(var f=0,h=u[2][0].length;h>f;f++)e.isFunction(u[2][0][f])&&d(u[2][0][f])}}}}function j(n){var r=null;return e.isString(n)?r=n:e.isObject(n)&&n.hasOwnProperty("name")&&e.isString(n.name)&&(r=n.name),r}function E(n){if(!e.isString(n))return!1;try{return h(n)}catch(r){if(/No module/.test(r)||r.message.indexOf("$injector:nomod")>-1)return!1}}var _={},w={$controllerProvider:l,$compileProvider:g,$filterProvider:p,$provide:d,$injector:m,$animateProvider:v},O=!1,b=!1,x=[];x.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},this.config=function(n){e.isDefined(n.modules)&&(e.isArray(n.modules)?e.forEach(n.modules,function(e){_[e.name]=e}):_[n.modules.name]=n.modules),e.isDefined(n.debug)&&(O=n.debug),e.isDefined(n.events)&&(b=n.events)},this._init=function(o){if(0===i.length){var t=[o],s=["ng:app","ng-app","x-ng-app","data-ng-app"],u=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,c=function(e){return e&&t.push(e)};e.forEach(s,function(n){s[n]=!0,c(document.getElementById(n)),n=n.replace(":","\\:"),o[0].querySelectorAll&&(e.forEach(o[0].querySelectorAll("."+n),c),e.forEach(o[0].querySelectorAll("."+n+"\\:"),c),e.forEach(o[0].querySelectorAll("["+n+"]"),c))}),e.forEach(t,function(n){if(0===i.length){var r=" "+o.className+" ",t=u.exec(r);t?i.push((t[2]||"").replace(/\s+/g,",")):e.forEach(n.attributes,function(e){0===i.length&&s[e.name]&&i.push(e.value)})}})}0!==i.length||(n.jasmine||n.mocha)&&e.isDefined(e.mock)||console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");var l=function d(n){if(-1===r.indexOf(n)){r.push(n);var o=e.module(n);$(null,o._invokeQueue,n),$(null,o._configBlocks,n),e.forEach(o.requires,d)}};e.forEach(i,function(e){l(e)}),i=[],a.pop()};var z=function(n){var r=[];return JSON.stringify(n,function(n,o){if(e.isObject(o)&&null!==o){if(-1!==r.indexOf(o))return;r.push(o)}return o})},D=function(e){var n,r,o,t=0;if(0==e.length)return t;for(n=0,o=e.length;o>n;n++)r=e.charCodeAt(n),t=(t<<5)-t+r,t|=0;return t};this.$get=["$log","$rootElement","$rootScope","$cacheFactory","$q",function(n,o,t,u,l){function d(e){var r=l.defer();return n.error(e.message),r.reject(e),r.promise}var g,p=u("ocLazyLoad");return O||(n={},n.error=e.noop,n.warn=e.noop,n.info=e.noop),w.getInstanceInjector=function(){return g?g:g=o.data("$injector")||e.injector()},s=function(e,r){b&&t.$broadcast(e,r),O&&n.info(e,r)},{_broadcast:s,_$log:n,_getFilesCache:function(){return p},toggleWatch:function(e){e?a.push(!0):a.pop()},getModuleConfig:function(n){if(!e.isString(n))throw new Error("You need to give the name of the module to get");return _[n]?e.copy(_[n]):null},setModuleConfig:function(n){if(!e.isObject(n))throw new Error("You need to give the module config object to set");return _[n.name]=n,n},getModules:function(){return r},isLoaded:function(n){var o=function(e){var n=r.indexOf(e)>-1;return n||(n=!!E(e)),n};if(e.isString(n)&&(n=[n]),e.isArray(n)){var t,i;for(t=0,i=n.length;i>t;t++)if(!o(n[t]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},_getModuleName:j,_getModule:function(e){try{return h(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)&&(n.message='The module "'+z(e)+'" that you are trying to load does not exist. '+n.message),n}},moduleExists:E,_loadDependencies:function(n,r){var o,t,i,a=[],s=this;if(n=s._getModuleName(n),null===n)return l.when();try{o=s._getModule(n)}catch(u){return d(u)}return t=s.getRequires(o),e.forEach(t,function(o){if(e.isString(o)){var t=s.getModuleConfig(o);if(null===t)return void x.push(o);o=t}if(s.moduleExists(o.name))return i=o.files.filter(function(e){return s.getModuleConfig(o.name).files.indexOf(e)<0}),0!==i.length&&s._$log.warn('Module "',n,'" attempted to redefine configuration for dependency. "',o.name,'"\n Additional Files Loaded:',i),e.isDefined(s.filesLoader)?void a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)})):d(new Error("Error: New dependencies need to be loaded from external files ("+o.files+"), but no loader has been defined."));if(e.isArray(o)?o={files:o}:e.isObject(o)&&o.hasOwnProperty("name")&&o.name&&(s.setModuleConfig(o),x.push(o.name)),e.isDefined(o.files)&&0!==o.files.length){if(!e.isDefined(s.filesLoader))return d(new Error('Error: the module "'+o.name+'" is defined in external files ('+o.files+"), but no loader has been defined."));a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)}))}}),l.all(a)},inject:function(n){var r=void 0===arguments[1]?{}:arguments[1],o=this,t=l.defer();if(e.isDefined(n)&&null!==n){if(e.isArray(n)){var a=[];return e.forEach(n,function(e){a.push(o.inject(e))}),l.all(a)}o._addToLoadList(o._getModuleName(n),!0)}if(i.length>0){var s=i.slice(),u=function d(e){x.push(e),o._loadDependencies(e,r).then(function(){try{c=[],y(w,x,r)}catch(e){return o._$log.error(e.message),void t.reject(e)}i.length>0?d(i.shift()):t.resolve(s)},function(e){t.reject(e)})};u(i.shift())}else t.resolve();return t.promise},getRequires:function(n){var o=[];return e.forEach(n.requires,function(e){-1===r.indexOf(e)&&o.push(e)}),o},_invokeQueue:$,_registerInvokeList:L,_register:y,_addToLoadList:f}}],this._init(e.element(n.document))}]);var d=e.bootstrap;e.bootstrap=function(n,r,o){return e.forEach(r.slice(),function(e){f(e,!0)}),d(n,r,o)};var f=function(n,r){(a.length>0||r)&&e.isString(n)&&-1===i.indexOf(n)&&i.push(n)},h=e.module;e.module=function(e,n,r){return f(e),h(e,n,r)}}(angular,window),function(e){"use strict";e.module("oc.lazyLoad").directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse",function(n,r,o,t){return{restrict:"A",terminal:!0,priority:1e3,compile:function(i){var a=i[0].innerHTML;return i.html(""),function(s,u,c){var l=t(c.ocLazyLoad);s.$watch(function(){return l(s)||c.ocLazyLoad},function(t){e.isDefined(t)&&n.load(t).then(function(){o.enter(a,u);var n=i.contents();e.forEach(n,function(e){3!==e.nodeType&&r(e)(s)})})},!0)}}}}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q","$window","$interval",function(n,r,o,t){var i=!1,a=!1,s=o.document.getElementsByTagName("head")[0]||o.document.getElementsByTagName("body")[0];return n.buildElement=function(u,c,l){var d,f,h=r.defer(),g=n._getFilesCache(),p=function(e){var n=(new Date).getTime();return e.indexOf("?")>=0?"&"===e.substring(0,e.length-1)?""+e+"_dc="+n:""+e+"&_dc="+n:""+e+"?_dc="+n};switch(e.isUndefined(g.get(c))&&g.put(c,h.promise),u){case"css":d=o.document.createElement("link"),d.type="text/css",d.rel="stylesheet",d.href=l.cache===!1?p(c):c;break;case"js":d=o.document.createElement("script"),d.src=l.cache===!1?p(c):c;break;default:g.remove(c),h.reject(new Error('Requested type "'+u+'" is not known. Could not inject "'+c+'"'))}d.onload=d.onreadystatechange=function(){d.readyState&&!/^c|loade/.test(d.readyState)||f||(d.onload=d.onreadystatechange=null,f=1,n._broadcast("ocLazyLoad.fileLoaded",c),h.resolve())},d.onerror=function(){g.remove(c),h.reject(new Error("Unable to load "+c))},d.async=l.serie?0:1;var m=s.lastChild;if(l.insertBefore){var v=e.element(e.isDefined(window.jQuery)?l.insertBefore:document.querySelector(l.insertBefore));v&&v.length>0&&(m=v[0])}if(m.parentNode.insertBefore(d,m),"css"==u){if(!i){var y=o.navigator.userAgent.toLowerCase();if(/iP(hone|od|ad)/.test(o.navigator.platform)){var L=o.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),$=parseFloat([parseInt(L[1],10),parseInt(L[2],10),parseInt(L[3]||0,10)].join("."));a=6>$}else if(y.indexOf("android")>-1){var j=parseFloat(y.slice(y.indexOf("android")+8));a=4.4>j}else if(y.indexOf("safari")>-1){var E=y.match(/version\/([\.\d]+)/i);a=E&&E[1]&&parseFloat(E[1])<6}}if(a)var _=1e3,w=t(function(){try{d.sheet.cssRules,t.cancel(w),d.onload()}catch(e){--_<=0&&d.onerror()}},20)}return h.promise},n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,r){return n.filesLoader=function(o){var t=void 0===arguments[1]?{}:arguments[1],i=[],a=[],s=[],u=[],c=null,l=n._getFilesCache();n.toggleWatch(!0),e.extend(t,o);var d=function(r){var o,d=null;if(e.isObject(r)&&(d=r.type,r=r.path),c=l.get(r),e.isUndefined(c)||t.cache===!1){if(null!==(o=/^(css|less|html|htm|js)?(?=!)/.exec(r))&&(d=o[1],r=r.substr(o[1].length+1,r.length)),!d)if(null!==(o=/[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(r)))d=o[1];else{if(n.jsLoader.hasOwnProperty("ocLazyLoadLoader")||!n.jsLoader.hasOwnProperty("load"))return void n._$log.error("File type could not be determined. "+r);d="js"}"css"!==d&&"less"!==d||-1!==i.indexOf(r)?"html"!==d&&"htm"!==d||-1!==a.indexOf(r)?"js"===d||-1===s.indexOf(r)?s.push(r):n._$log.error("File type is not valid. "+r):a.push(r):i.push(r)}else c&&u.push(c)};if(t.serie?d(t.files.shift()):e.forEach(t.files,function(e){d(e)}),i.length>0){var f=r.defer();n.cssLoader(i,function(r){e.isDefined(r)&&n.cssLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(r),f.reject(r)):f.resolve()},t),u.push(f.promise)}if(a.length>0){var h=r.defer();n.templatesLoader(a,function(r){e.isDefined(r)&&n.templatesLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(r),h.reject(r)):h.resolve()},t),u.push(h.promise)}if(s.length>0){var g=r.defer();n.jsLoader(s,function(r){e.isDefined(r)&&n.jsLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(r),g.reject(r)):g.resolve()},t),u.push(g.promise)}if(0===u.length){var p=r.defer(),m="Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";return n._$log.error(m),p.reject(m),p.promise}return t.serie&&t.files.length>0?r.all(u).then(function(){return n.filesLoader(o,t)}):r.all(u)["finally"](function(e){return n.toggleWatch(!1),e})},n.load=function(o){var t,i=void 0===arguments[1]?{}:arguments[1],a=this,s=null,u=[],c=r.defer(),l=e.copy(o),d=e.copy(i);if(e.isArray(l))return e.forEach(l,function(e){u.push(a.load(e,d))}),r.all(u).then(function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise;if(e.isString(l)?(s=a.getModuleConfig(l),s||(s={files:[l]})):e.isObject(l)&&(s=e.isDefined(l.path)&&e.isDefined(l.type)?{files:[l]}:a.setModuleConfig(l)),null===s){var f=a._getModuleName(l);return t='Module "'+(f||"unknown")+'" is not configured, cannot load.',n._$log.error(t),c.reject(new Error(t)),c.promise}e.isDefined(s.template)&&(e.isUndefined(s.files)&&(s.files=[]),e.isString(s.template)?s.files.push(s.template):e.isArray(s.template)&&s.files.concat(s.template));var h=e.extend({},d,s);return e.isUndefined(s.files)&&e.isDefined(s.name)&&n.moduleExists(s.name)?n.inject(s.name,h):(n.filesLoader(s,h).then(function(){n.inject(null,h).then(function(e){c.resolve(e)},function(e){c.reject(e)})},function(e){c.reject(e)}),c.promise)},n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,r){return n.cssLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement("css",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.cssLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,r){return n.jsLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement("js",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.jsLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$templateCache","$q","$http",function(n,r,o,t){return n.templatesLoader=function(i,a,s){var u=[],c=n._getFilesCache();return e.forEach(i,function(n){var i=o.defer();u.push(i.promise),t.get(n,s).success(function(o){e.isString(o)&&o.length>0&&e.forEach(e.element(o),function(e){"SCRIPT"===e.nodeName&&"text/ng-template"===e.type&&r.put(e.id,e.innerHTML)}),e.isUndefined(c.get(n))&&c.put(n,!0),i.resolve()}).error(function(e){i.reject(new Error('Unable to load template file "'+n+'": '+e))})}),o.all(u).then(function(){a()},function(e){a(e)})},n.templatesLoader.ocLazyLoadLoader=!0,n}])}])}(angular),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,n){var r;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),t=o.length>>>0;if(0===t)return-1;var i=+n||0;if(1/0===Math.abs(i)&&(i=0),i>=t)return-1;for(r=Math.max(i>=0?i:t-Math.abs(i),0);t>r;){if(r in o&&o[r]===e)return r;r++}return-1});
//# sourceMappingURL=ocLazyLoad.min.js.map