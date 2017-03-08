/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* =========================================================
 * bootstrap-datetimepicker.js
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Improvements by Andrew Rowls
 * Improvements by Sébastien Malot
 * Improvements by Yun Lai
 * Improvements by Kenneth Henderick
 * Improvements by CuGBabyBeaR
 * Improvements by Christian Vaas <auspex@auspex.eu>
 *
 * Project URL : http://www.malot.fr/bootstrap-datetimepicker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


(function(factory){
    if (typeof define === 'function' && define.amd)
      define(['jquery'], factory);
    else if (typeof exports === 'object')
      factory(require('jquery'));
    else
      factory(jQuery);

}(function($, undefined){

  // Add ECMA262-5 Array methods if not supported natively (IE8)
  if (!('indexOf' in Array.prototype)) {
    Array.prototype.indexOf = function (find, i) {
      if (i === undefined) i = 0;
      if (i < 0) i += this.length;
      if (i < 0) i = 0;
      for (var n = this.length; i < n; i++) {
        if (i in this && this[i] === find) {
          return i;
        }
      }
      return -1;
    }
  }

  function elementOrParentIsFixed (element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
      if ($(this).css('position') === 'fixed') {
        isFixed = true;
        return false;
      }
    });
    return isFixed;
  }

  // Add timezone abbreviation support for ie6+, Chrome, Firefox
  function timeZoneAbbreviation() {
    var abbreviation, date, formattedStr, i, len, matchedStrings, ref, str;
    date = (new Date).toString();
    formattedStr = ((ref = date.split('(')[1]) != null ? ref.slice(0, -1) : void 0) || date.split(' ');
    if (formattedStr instanceof Array) {
      matchedStrings = [];
      for (i = 0, len = formattedStr.length; i < len; i++) {
        str = formattedStr[i];
        if (abbreviation = (ref = str.match(/\b[A-Z]+\b/)) != null ? ref[0] : void 0) {
          matchedStrings.push(abbreviation);
        }
      }
      formattedStr = matchedStrings.pop();
    }
    return formattedStr;
  };

  function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function UTCToday() {
    var today = new Date();
    return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds(), 0);
  }

  // Picker object
  var Datetimepicker = function (element, options) {
    var that = this;

    this.element = $(element);

    // add container for single page application
    // when page switch the datetimepicker div will be removed also.
    this.container = options.container || 'body';

    this.language = options.language || this.element.data('date-language') || 'en';
    this.language = this.language in dates ? this.language : this.language.split('-')[0]; // fr-CA fallback to fr
    this.language = this.language in dates ? this.language : 'en';
    this.isRTL = dates[this.language].rtl || false;
    this.formatType = options.formatType || this.element.data('format-type') || 'standard';
    this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, 'input'), this.formatType);
    this.isInline = false;
    this.isVisible = false;
    this.isInput = this.element.is('input');
    this.fontAwesome = options.fontAwesome || this.element.data('font-awesome') || false;

    this.bootcssVer = options.bootcssVer || (this.isInput ? (this.element.is('.form-control') ? 3 : 2) : ( this.bootcssVer = this.element.is('.input-group') ? 3 : 2 ));

    this.component = this.element.is('.date') ? ( this.bootcssVer == 3 ? this.element.find('.input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o').parent() : this.element.find('.add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o').parent()) : false;
    this.componentReset = this.element.is('.date') ? ( this.bootcssVer == 3 ? this.element.find('.input-group-addon .glyphicon-remove, .input-group-addon .fa-times').parent():this.element.find('.add-on .icon-remove, .add-on .fa-times').parent()) : false;
    this.hasInput = this.component && this.element.find('input').length;
    if (this.component && this.component.length === 0) {
      this.component = false;
    }
    this.linkField = options.linkField || this.element.data('link-field') || false;
    this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || DPGlobal.getDefaultFormat(this.formatType, 'link'), this.formatType);
    this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
    this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
    this.showMeridian = options.showMeridian || this.element.data('show-meridian') || false;
    this.initialDate = options.initialDate || new Date();
    this.zIndex = options.zIndex || this.element.data('z-index') || undefined;
    this.title = typeof options.title === 'undefined' ? false : options.title;
    this.timezone = options.timezone || timeZoneAbbreviation();

    this.icons = {
      leftArrow: this.fontAwesome ? 'fa-arrow-left' : (this.bootcssVer === 3 ? 'glyphicon-arrow-left' : 'icon-arrow-left'),
      rightArrow: this.fontAwesome ? 'fa-arrow-right' : (this.bootcssVer === 3 ? 'glyphicon-arrow-right' : 'icon-arrow-right')
    }
    this.icontype = this.fontAwesome ? 'fa' : 'glyphicon';

    this._attachEvents();

    this.clickedOutside = function (e) {
        // Clicked outside the datetimepicker, hide it
        if ($(e.target).closest('.datetimepicker').length === 0) {
            that.hide();
        }
    }

    this.formatViewType = 'datetime';
    if ('formatViewType' in options) {
      this.formatViewType = options.formatViewType;
    } else if ('formatViewType' in this.element.data()) {
      this.formatViewType = this.element.data('formatViewType');
    }

    this.minView = 0;
    if ('minView' in options) {
      this.minView = options.minView;
    } else if ('minView' in this.element.data()) {
      this.minView = this.element.data('min-view');
    }
    this.minView = DPGlobal.convertViewMode(this.minView);

    this.maxView = DPGlobal.modes.length - 1;
    if ('maxView' in options) {
      this.maxView = options.maxView;
    } else if ('maxView' in this.element.data()) {
      this.maxView = this.element.data('max-view');
    }
    this.maxView = DPGlobal.convertViewMode(this.maxView);

    this.wheelViewModeNavigation = false;
    if ('wheelViewModeNavigation' in options) {
      this.wheelViewModeNavigation = options.wheelViewModeNavigation;
    } else if ('wheelViewModeNavigation' in this.element.data()) {
      this.wheelViewModeNavigation = this.element.data('view-mode-wheel-navigation');
    }

    this.wheelViewModeNavigationInverseDirection = false;

    if ('wheelViewModeNavigationInverseDirection' in options) {
      this.wheelViewModeNavigationInverseDirection = options.wheelViewModeNavigationInverseDirection;
    } else if ('wheelViewModeNavigationInverseDirection' in this.element.data()) {
      this.wheelViewModeNavigationInverseDirection = this.element.data('view-mode-wheel-navigation-inverse-dir');
    }

    this.wheelViewModeNavigationDelay = 100;
    if ('wheelViewModeNavigationDelay' in options) {
      this.wheelViewModeNavigationDelay = options.wheelViewModeNavigationDelay;
    } else if ('wheelViewModeNavigationDelay' in this.element.data()) {
      this.wheelViewModeNavigationDelay = this.element.data('view-mode-wheel-navigation-delay');
    }

    this.startViewMode = 2;
    if ('startView' in options) {
      this.startViewMode = options.startView;
    } else if ('startView' in this.element.data()) {
      this.startViewMode = this.element.data('start-view');
    }
    this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
    this.viewMode = this.startViewMode;

    this.viewSelect = this.minView;
    if ('viewSelect' in options) {
      this.viewSelect = options.viewSelect;
    } else if ('viewSelect' in this.element.data()) {
      this.viewSelect = this.element.data('view-select');
    }
    this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);

    this.forceParse = true;
    if ('forceParse' in options) {
      this.forceParse = options.forceParse;
    } else if ('dateForceParse' in this.element.data()) {
      this.forceParse = this.element.data('date-force-parse');
    }
    var template = this.bootcssVer === 3 ? DPGlobal.templateV3 : DPGlobal.template;
    while (template.indexOf('{iconType}') !== -1) {
      template = template.replace('{iconType}', this.icontype);
    }
    while (template.indexOf('{leftArrow}') !== -1) {
      template = template.replace('{leftArrow}', this.icons.leftArrow);
    }
    while (template.indexOf('{rightArrow}') !== -1) {
      template = template.replace('{rightArrow}', this.icons.rightArrow);
    }
    this.picker = $(template)
      .appendTo(this.isInline ? this.element : this.container) // 'body')
      .on({
        click:     $.proxy(this.click, this),
        mousedown: $.proxy(this.mousedown, this)
      });

    if (this.wheelViewModeNavigation) {
      if ($.fn.mousewheel) {
        this.picker.on({mousewheel: $.proxy(this.mousewheel, this)});
      } else {
        console.log('Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option');
      }
    }

    if (this.isInline) {
      this.picker.addClass('datetimepicker-inline');
    } else {
      this.picker.addClass('datetimepicker-dropdown-' + this.pickerPosition + ' dropdown-menu');
    }
    if (this.isRTL) {
      this.picker.addClass('datetimepicker-rtl');
      var selector = this.bootcssVer === 3 ? '.prev span, .next span' : '.prev i, .next i';
      this.picker.find(selector).toggleClass(this.icons.leftArrow + ' ' + this.icons.rightArrow);
    }

    $(document).on('mousedown', this.clickedOutside);

    this.autoclose = false;
    if ('autoclose' in options) {
      this.autoclose = options.autoclose;
    } else if ('dateAutoclose' in this.element.data()) {
      this.autoclose = this.element.data('date-autoclose');
    }

    this.keyboardNavigation = true;
    if ('keyboardNavigation' in options) {
      this.keyboardNavigation = options.keyboardNavigation;
    } else if ('dateKeyboardNavigation' in this.element.data()) {
      this.keyboardNavigation = this.element.data('date-keyboard-navigation');
    }

    this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
    this.clearBtn = (options.clearBtn || this.element.data('date-clear-btn') || false);
    this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);

    this.weekStart = 0;
    if (typeof options.weekStart !== 'undefined') {
      this.weekStart = options.weekStart;
    } else if (typeof this.element.data('date-weekstart') !== 'undefined') {
      this.weekStart = this.element.data('date-weekstart');
    } else if (typeof dates[this.language].weekStart !== 'undefined') {
      this.weekStart = dates[this.language].weekStart;
    }
    this.weekStart = this.weekStart % 7;
    this.weekEnd = ((this.weekStart + 6) % 7);
    this.onRenderDay = function (date) {
      var render = (options.onRenderDay || function () { return []; })(date);
      if (typeof render == 'string') {
        render = [render];
      }
      var res = ['day'];
      return res.concat((render ? render : []));
    };
    this.onRenderHour = function (date) {
      var render = (options.onRenderHour || function () { return []; })(date);
      var res = ['hour'];
      if (typeof render == 'string') {
        render = [render];
      }
      return res.concat((render ? render : []));
    };
    this.onRenderMinute = function (date) {
      var render = (options.onRenderMinute || function () { return []; })(date);
      var res = ['minute'];
      if (typeof render == 'string') {
        render = [render];
      }
      return res.concat((render ? render : []));
    };
    this.onRenderYear = function (date) {
      var render = (options.onRenderYear || function () { return []; })(date);
      var res = ['year'];
      if (typeof render == 'string') {
        render = [render];
      }
      if (this.date.getUTCFullYear() === date.getUTCFullYear()) {
        render.push('active');
      }
      if (this.startDate.getUTCFullYear() < date.getUTCFullYear() || date.getUTCFullYear() > this.endDate.getUTCFullYear()) {
        render.push('disabled');
      }
      return res.concat((render ? render : []));
    }
    this.onRenderMonth = function (date) {
      var render = (options.onRenderMonth || function () { return []; })(date);
      var res = ['month'];
      if (typeof render == 'string') {
        render = [render];
      }
      return res.concat((render ? render : []));
    }
    this.startDate = new Date(-8639968443048000);
    this.endDate = new Date(8639968443048000);
    this.datesDisabled = [];
    this.daysOfWeekDisabled = [];
    this.setStartDate(options.startDate || this.element.data('date-startdate'));
    this.setEndDate(options.endDate || this.element.data('date-enddate'));
    this.setDatesDisabled(options.datesDisabled || this.element.data('date-dates-disabled'));
    this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
    this.setMinutesDisabled(options.minutesDisabled || this.element.data('date-minute-disabled'));
    this.setHoursDisabled(options.hoursDisabled || this.element.data('date-hour-disabled'));
    this.fillDow();
    this.fillMonths();
    this.update();
    this.showMode();

    if (this.isInline) {
      this.show();
    }
  };

  Datetimepicker.prototype = {
    constructor: Datetimepicker,

    _events:       [],
    _attachEvents: function () {
      this._detachEvents();
      if (this.isInput) { // single input
        this._events = [
          [this.element, {
            focus:   $.proxy(this.show, this),
            keyup:   $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
          }]
        ];
      }
      else if (this.component && this.hasInput) { // component: input + button
        this._events = [
          // For components that are not readonly, allow keyboard nav
          [this.element.find('input'), {
            focus:   $.proxy(this.show, this),
            keyup:   $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
          }],
          [this.component, {
            click: $.proxy(this.show, this)
          }]
        ];
        if (this.componentReset) {
          this._events.push([
            this.componentReset,
            {click: $.proxy(this.reset, this)}
          ]);
        }
      }
      else if (this.element.is('div')) {  // inline datetimepicker
        this.isInline = true;
      }
      else {
        this._events = [
          [this.element, {
            click: $.proxy(this.show, this)
          }]
        ];
      }
      for (var i = 0, el, ev; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.on(ev);
      }
    },

    _detachEvents: function () {
      for (var i = 0, el, ev; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.off(ev);
      }
      this._events = [];
    },

    show: function (e) {
      this.picker.show();
      this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
      if (this.forceParse) {
        this.update();
      }
      this.place();
      $(window).on('resize', $.proxy(this.place, this));
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.isVisible = true;
      this.element.trigger({
        type: 'show',
        date: this.date
      });
    },

    hide: function (e) {
      if (!this.isVisible) return;
      if (this.isInline) return;
      this.picker.hide();
      $(window).off('resize', this.place);
      this.viewMode = this.startViewMode;
      this.showMode();
      if (!this.isInput) {
        $(document).off('mousedown', this.hide);
      }

      if (
        this.forceParse &&
          (
            this.isInput && this.element.val() ||
              this.hasInput && this.element.find('input').val()
            )
        )
        this.setValue();
      this.isVisible = false;
      this.element.trigger({
        type: 'hide',
        date: this.date
      });
    },

    remove: function () {
      this._detachEvents();
      $(document).off('mousedown', this.clickedOutside);
      this.picker.remove();
      delete this.picker;
      delete this.element.data().datetimepicker;
    },

    getDate: function () {
      var d = this.getUTCDate();
      if (d === null) {
        return null;
      }
      return new Date(d.getTime() + (d.getTimezoneOffset() * 60000));
    },

    getUTCDate: function () {
      return this.date;
    },

    getInitialDate: function () {
      return this.initialDate
    },

    setInitialDate: function (initialDate) {
      this.initialDate = initialDate;
    },

    setDate: function (d) {
      this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)));
    },

    setUTCDate: function (d) {
      if (d >= this.startDate && d <= this.endDate) {
        this.date = d;
        this.setValue();
        this.viewDate = this.date;
        this.fill();
      } else {
        this.element.trigger({
          type:      'outOfRange',
          date:      d,
          startDate: this.startDate,
          endDate:   this.endDate
        });
      }
    },

    setFormat: function (format) {
      this.format = DPGlobal.parseFormat(format, this.formatType);
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }
      if (element && element.val()) {
        this.setValue();
      }
    },

    setValue: function () {
      var formatted = this.getFormattedDate();
      if (!this.isInput) {
        if (this.component) {
          this.element.find('input').val(formatted);
        }
        this.element.data('date', formatted);
      } else {
        this.element.val(formatted);
      }
      if (this.linkField) {
        $('#' + this.linkField).val(this.getFormattedDate(this.linkFormat));
      }
    },

    getFormattedDate: function (format) {
      if (format == undefined) format = this.format;
      return DPGlobal.formatDate(this.date, format, this.language, this.formatType, this.timezone);
    },

    setStartDate: function (startDate) {
      this.startDate = startDate || this.startDate;
      this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone);
      this.update();
      this.updateNavArrows();
    },

    setEndDate: function (endDate) {
      this.endDate = endDate || this.endDate;
      this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone);
      this.update();
      this.updateNavArrows();
    },

    setDatesDisabled: function (datesDisabled) {
      this.datesDisabled = datesDisabled || [];
      if (!$.isArray(this.datesDisabled)) {
        this.datesDisabled = this.datesDisabled.split(/,\s*/);
      }
      var mThis = this;
      this.datesDisabled = $.map(this.datesDisabled, function (d) {
        return DPGlobal.parseDate(d, mThis.format, mThis.language, mThis.formatType, mThis.timezone).toDateString();
      });
      this.update();
      this.updateNavArrows();
    },

    setTitle: function (selector, value) {
      return this.picker.find(selector)
        .find('th:eq(1)')
        .text(this.title === false ? value : this.title);
    },

    setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
      this.daysOfWeekDisabled = daysOfWeekDisabled || [];
      if (!$.isArray(this.daysOfWeekDisabled)) {
        this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
      }
      this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    setMinutesDisabled: function (minutesDisabled) {
      this.minutesDisabled = minutesDisabled || [];
      if (!$.isArray(this.minutesDisabled)) {
        this.minutesDisabled = this.minutesDisabled.split(/,\s*/);
      }
      this.minutesDisabled = $.map(this.minutesDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    setHoursDisabled: function (hoursDisabled) {
      this.hoursDisabled = hoursDisabled || [];
      if (!$.isArray(this.hoursDisabled)) {
        this.hoursDisabled = this.hoursDisabled.split(/,\s*/);
      }
      this.hoursDisabled = $.map(this.hoursDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    place: function () {
      if (this.isInline) return;

      if (!this.zIndex) {
        var index_highest = 0;
        $('div').each(function () {
          var index_current = parseInt($(this).css('zIndex'), 10);
          if (index_current > index_highest) {
            index_highest = index_current;
          }
        });
        this.zIndex = index_highest + 10;
      }

      var offset, top, left, containerOffset;
      if (this.container instanceof $) {
        containerOffset = this.container.offset();
      } else {
        containerOffset = $(this.container).offset();
      }

      if (this.component) {
        offset = this.component.offset();
        left = offset.left;
        if (this.pickerPosition == 'bottom-left' || this.pickerPosition == 'top-left') {
          left += this.component.outerWidth() - this.picker.outerWidth();
        }
      } else {
        offset = this.element.offset();
        left = offset.left;
        if (this.pickerPosition == 'bottom-left' || this.pickerPosition == 'top-left') {
          left += this.element.outerWidth() - this.picker.outerWidth();
        }
      }

      var bodyWidth = document.body.clientWidth || window.innerWidth;
      if (left + 220 > bodyWidth) {
        left = bodyWidth - 220;
      }

      if (this.pickerPosition == 'top-left' || this.pickerPosition == 'top-right') {
        top = offset.top - this.picker.outerHeight();
      } else {
        top = offset.top + this.height;
      }

      top = top - containerOffset.top;
      left = left - containerOffset.left;

      this.picker.css({
        top:    top,
        left:   left,
        zIndex: this.zIndex
      });
    },

    update: function () {
      var date, fromArgs = false;
      if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
        date = arguments[0];
        fromArgs = true;
      } else {
        date = (this.isInput ? this.element.val() : this.element.find('input').val()) || this.element.data('date') || this.initialDate;
        if (typeof date == 'string' || date instanceof String) {
          date = date.replace(/^\s+|\s+$/g,'');
        }
      }

      if (!date) {
        date = new Date();
        fromArgs = false;
      }

      this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType, this.timezone);

      if (fromArgs) this.setValue();

      if (this.date < this.startDate) {
        this.viewDate = new Date(this.startDate);
      } else if (this.date > this.endDate) {
        this.viewDate = new Date(this.endDate);
      } else {
        this.viewDate = new Date(this.date);
      }
      this.fill();
    },

    fillDow: function () {
      var dowCnt = this.weekStart,
        html = '<tr>';
      while (dowCnt < this.weekStart + 7) {
        html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>';
      }
      html += '</tr>';
      this.picker.find('.datetimepicker-days thead').append(html);
    },

    fillMonths: function () {
      var html = '';
      var d = new Date(this.viewDate);
      for (var i = 0; i < 12; i++) {
        d.setUTCMonth(i);
        var classes = this.onRenderMonth(d);
        html += '<span class="' + classes.join(' ') + '">' + dates[this.language].monthsShort[i] + '</span>';
      }
      this.picker.find('.datetimepicker-months td').html(html);
    },

    fill: function () {
      if (this.date == null || this.viewDate == null) {
        return;
      }
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        dayMonth = d.getUTCDate(),
        hours = d.getUTCHours(),
        minutes = d.getUTCMinutes(),
        startYear = this.startDate.getUTCFullYear(),
        startMonth = this.startDate.getUTCMonth(),
        endYear = this.endDate.getUTCFullYear(),
        endMonth = this.endDate.getUTCMonth() + 1,
        currentDate = (new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(),
        today = new Date();
      this.setTitle('.datetimepicker-days', dates[this.language].months[month] + ' ' + year)
      if (this.formatViewType == 'time') {
        var formatted = this.getFormattedDate();
        this.setTitle('.datetimepicker-hours', formatted);
        this.setTitle('.datetimepicker-minutes', formatted);
      } else {
        this.setTitle('.datetimepicker-hours', dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
        this.setTitle('.datetimepicker-minutes', dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
      }
      this.picker.find('tfoot th.today')
        .text(dates[this.language].today || dates['en'].today)
        .toggle(this.todayBtn !== false);
      this.picker.find('tfoot th.clear')
        .text(dates[this.language].clear || dates['en'].clear)
        .toggle(this.clearBtn !== false);
      this.updateNavArrows();
      this.fillMonths();
      var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
        day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
      var nextMonth = new Date(prevMonth);
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var classes;
      while (prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() == this.weekStart) {
          html.push('<tr>');
        }
        classes = this.onRenderDay(prevMonth);
        if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
          classes.push('old');
        } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
          classes.push('new');
        }
        // Compare internal UTC date with local today, not UTC today
        if (this.todayHighlight &&
          prevMonth.getUTCFullYear() == today.getFullYear() &&
          prevMonth.getUTCMonth() == today.getMonth() &&
          prevMonth.getUTCDate() == today.getDate()) {
          classes.push('today');
        }
        if (prevMonth.valueOf() == currentDate) {
          classes.push('active');
        }
        if ((prevMonth.valueOf() + 86400000) <= this.startDate || prevMonth.valueOf() > this.endDate ||
          $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1 ||
          $.inArray(prevMonth.toDateString(), this.datesDisabled) !== -1) {
          classes.push('disabled');
        }
        html.push('<td class="' + classes.join(' ') + '">' + prevMonth.getUTCDate() + '</td>');
        if (prevMonth.getUTCDay() == this.weekEnd) {
          html.push('</tr>');
        }
        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }
      this.picker.find('.datetimepicker-days tbody').empty().append(html.join(''));

      html = [];
      var txt = '', meridian = '', meridianOld = '';
      var hoursDisabled = this.hoursDisabled || [];
      var d = new Date(this.viewDate)
      for (var i = 0; i < 24; i++) {
        d.setUTCHours(i);
        classes = this.onRenderHour(d);
        if (hoursDisabled.indexOf(i) !== -1) {
          classes.push('disabled');
        }
        var actual = UTCDate(year, month, dayMonth, i);
        // We want the previous hour for the startDate
        if ((actual.valueOf() + 3600000) <= this.startDate || actual.valueOf() > this.endDate) {
          classes.push('disabled');
        } else if (hours == i) {
          classes.push('active');
        }
        if (this.showMeridian && dates[this.language].meridiem.length == 2) {
          meridian = (i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
          if (meridian != meridianOld) {
            if (meridianOld != '') {
              html.push('</fieldset>');
            }
            html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + '</legend>');
          }
          meridianOld = meridian;
          txt = (i % 12 ? i % 12 : 12);
          if (i < 12) {
            classes.push('hour_am');
          } else {
            classes.push('hour_pm');
          }
          html.push('<span class="' + classes.join(' ') + '">' + txt + '</span>');
          if (i == 23) {
            html.push('</fieldset>');
          }
        } else {
          txt = i + ':00';
          html.push('<span class="' + classes.join(' ') + '">' + txt + '</span>');
        }
      }
      this.picker.find('.datetimepicker-hours td').html(html.join(''));

      html = [];
      txt = '', meridian = '', meridianOld = '';
      var minutesDisabled = this.minutesDisabled || [];
      var d = new Date(this.viewDate);
      for (var i = 0; i < 60; i += this.minuteStep) {
        if (minutesDisabled.indexOf(i) !== -1) continue;
        var actual = UTCDate(year, month, dayMonth, hours, i, 0);
        d.setUTCMinutes(i + this.minuteStep);
        classes = this.onRenderMinute(d);
        if (actual.valueOf() < this.startDate || actual.valueOf() > this.endDate) {
          classes.push('disabled');
        } else if (Math.floor(minutes / this.minuteStep) == Math.floor(i / this.minuteStep)) {
          classes.push('active');
        }
        if (this.showMeridian && dates[this.language].meridiem.length == 2) {
          meridian = (hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
          if (meridian != meridianOld) {
            if (meridianOld != '') {
              html.push('</fieldset>');
            }
            html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + '</legend>');
          }
          meridianOld = meridian;
          txt = (hours % 12 ? hours % 12 : 12);
          html.push('<span class="' + classes.join(' ') + '">' + txt + ':' + (i < 10 ? '0' + i : i) + '</span>');
          if (i == 59) {
            html.push('</fieldset>');
          }
        } else {
          txt = i + ':00';
          html.push('<span class="' + classes.join(' ') + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>');
        }
      }
      this.picker.find('.datetimepicker-minutes td').html(html.join(''));

      var currentYear = this.date.getUTCFullYear();
      var months = this.setTitle('.datetimepicker-months', year)
        .end()
        .find('.month').removeClass('active');
      if (currentYear == year) {
        // getUTCMonths() returns 0 based, and we need to select the next one
        // To cater bootstrap 2 we don't need to select the next one
        months.eq(this.date.getUTCMonth()).addClass('active');
      }
      if (year < startYear || year > endYear) {
        months.addClass('disabled');
      }
      if (year == startYear) {
        months.slice(0, startMonth).addClass('disabled');
      }
      if (year == endYear) {
        months.slice(endMonth).addClass('disabled');
      }

      html = '';
      year = parseInt(year / 10, 10) * 10;
      var yearCont = this.setTitle('.datetimepicker-years', year + '-' + (year + 9))
        .end()
        .find('td');
      year -= 1;
      var d = new Date(this.viewDate);
      for (var i = -1; i < 11; i++) {
        d.setUTCFullYear(year);
        classes = this.onRenderYear(d);
        if (i == -1 || i == 10) {
          classes.push(old);
        }
        html += '<span class="' + classes.join(' ') + '">' + year + '</span>';
        year += 1;
      }
      yearCont.html(html);
      this.place();
    },

    updateNavArrows: function () {
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        day = d.getUTCDate(),
        hour = d.getUTCHours();
      switch (this.viewMode) {
        case 0:
          if (year <= this.startDate.getUTCFullYear()
            && month <= this.startDate.getUTCMonth()
            && day <= this.startDate.getUTCDate()
            && hour <= this.startDate.getUTCHours()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (year >= this.endDate.getUTCFullYear()
            && month >= this.endDate.getUTCMonth()
            && day >= this.endDate.getUTCDate()
            && hour >= this.endDate.getUTCHours()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 1:
          if (year <= this.startDate.getUTCFullYear()
            && month <= this.startDate.getUTCMonth()
            && day <= this.startDate.getUTCDate()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (year >= this.endDate.getUTCFullYear()
            && month >= this.endDate.getUTCMonth()
            && day >= this.endDate.getUTCDate()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 2:
          if (year <= this.startDate.getUTCFullYear()
            && month <= this.startDate.getUTCMonth()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (year >= this.endDate.getUTCFullYear()
            && month >= this.endDate.getUTCMonth()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 3:
        case 4:
          if (year <= this.startDate.getUTCFullYear()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (year >= this.endDate.getUTCFullYear()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
      }
    },

    mousewheel: function (e) {

      e.preventDefault();
      e.stopPropagation();

      if (this.wheelPause) {
        return;
      }

      this.wheelPause = true;

      var originalEvent = e.originalEvent;

      var delta = originalEvent.wheelDelta;

      var mode = delta > 0 ? 1 : (delta === 0) ? 0 : -1;

      if (this.wheelViewModeNavigationInverseDirection) {
        mode = -mode;
      }

      this.showMode(mode);

      setTimeout($.proxy(function () {

        this.wheelPause = false

      }, this), this.wheelViewModeNavigationDelay);

    },

    click: function (e) {
      e.stopPropagation();
      e.preventDefault();
      var target = $(e.target).closest('span, td, th, legend');
      if (target.is('.' + this.icontype)) {
        target = $(target).parent().closest('span, td, th, legend');
      }
      if (target.length == 1) {
        if (target.is('.disabled')) {
          this.element.trigger({
            type:      'outOfRange',
            date:      this.viewDate,
            startDate: this.startDate,
            endDate:   this.endDate
          });
          return;
        }
        switch (target[0].nodeName.toLowerCase()) {
          case 'th':
            switch (target[0].className) {
              case 'switch':
                this.showMode(1);
                break;
              case 'prev':
              case 'next':
                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                switch (this.viewMode) {
                  case 0:
                    this.viewDate = this.moveHour(this.viewDate, dir);
                    break;
                  case 1:
                    this.viewDate = this.moveDate(this.viewDate, dir);
                    break;
                  case 2:
                    this.viewDate = this.moveMonth(this.viewDate, dir);
                    break;
                  case 3:
                  case 4:
                    this.viewDate = this.moveYear(this.viewDate, dir);
                    break;
                }
                this.fill();
                this.element.trigger({
                  type:      target[0].className + ':' + this.convertViewModeText(this.viewMode),
                  date:      this.viewDate,
                  startDate: this.startDate,
                  endDate:   this.endDate
                });
                break;
              case 'clear':
                this.reset();
                if (this.autoclose) {
                  this.hide();
                }
                break;
              case 'today':
                var date = new Date();
                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);

                // Respect startDate and endDate.
                if (date < this.startDate) date = this.startDate;
                else if (date > this.endDate) date = this.endDate;

                this.viewMode = this.startViewMode;
                this.showMode(0);
                this._setDate(date);
                this.fill();
                if (this.autoclose) {
                  this.hide();
                }
                break;
            }
            break;
          case 'span':
            if (!target.is('.disabled')) {
              var year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                day = this.viewDate.getUTCDate(),
                hours = this.viewDate.getUTCHours(),
                minutes = this.viewDate.getUTCMinutes(),
                seconds = this.viewDate.getUTCSeconds();

              if (target.is('.month')) {
                this.viewDate.setUTCDate(1);
                month = target.parent().find('span').index(target);
                day = this.viewDate.getUTCDate();
                this.viewDate.setUTCMonth(month);
                this.element.trigger({
                  type: 'changeMonth',
                  date: this.viewDate
                });
                if (this.viewSelect >= 3) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.year')) {
                this.viewDate.setUTCDate(1);
                year = parseInt(target.text(), 10) || 0;
                this.viewDate.setUTCFullYear(year);
                this.element.trigger({
                  type: 'changeYear',
                  date: this.viewDate
                });
                if (this.viewSelect >= 4) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.hour')) {
                hours = parseInt(target.text(), 10) || 0;
                if (target.hasClass('hour_am') || target.hasClass('hour_pm')) {
                  if (hours == 12 && target.hasClass('hour_am')) {
                    hours = 0;
                  } else if (hours != 12 && target.hasClass('hour_pm')) {
                    hours += 12;
                  }
                }
                this.viewDate.setUTCHours(hours);
                this.element.trigger({
                  type: 'changeHour',
                  date: this.viewDate
                });
                if (this.viewSelect >= 1) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.minute')) {
                minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
                this.viewDate.setUTCMinutes(minutes);
                this.element.trigger({
                  type: 'changeMinute',
                  date: this.viewDate
                });
                if (this.viewSelect >= 0) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              }
              if (this.viewMode != 0) {
                var oldViewMode = this.viewMode;
                this.showMode(-1);
                this.fill();
                if (oldViewMode == this.viewMode && this.autoclose) {
                  this.hide();
                }
              } else {
                this.fill();
                if (this.autoclose) {
                  this.hide();
                }
              }
            }
            break;
          case 'td':
            if (target.is('.day') && !target.is('.disabled')) {
              var day = parseInt(target.text(), 10) || 1;
              var year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                hours = this.viewDate.getUTCHours(),
                minutes = this.viewDate.getUTCMinutes(),
                seconds = this.viewDate.getUTCSeconds();
              if (target.is('.old')) {
                if (month === 0) {
                  month = 11;
                  year -= 1;
                } else {
                  month -= 1;
                }
              } else if (target.is('.new')) {
                if (month == 11) {
                  month = 0;
                  year += 1;
                } else {
                  month += 1;
                }
              }
              this.viewDate.setUTCFullYear(year);
              this.viewDate.setUTCMonth(month, day);
              this.element.trigger({
                type: 'changeDay',
                date: this.viewDate
              });
              if (this.viewSelect >= 2) {
                this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
              }
            }
            var oldViewMode = this.viewMode;
            this.showMode(-1);
            this.fill();
            if (oldViewMode == this.viewMode && this.autoclose) {
              this.hide();
            }
            break;
        }
      }
    },

    _setDate: function (date, which) {
      if (!which || which == 'date')
        this.date = date;
      if (!which || which == 'view')
        this.viewDate = date;
      this.fill();
      this.setValue();
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }
      if (element) {
        element.change();
        if (this.autoclose && (!which || which == 'date')) {
          //this.hide();
        }
      }
      this.element.trigger({
        type: 'changeDate',
        date: this.getDate()
      });
      if(date == null)
        this.date = this.viewDate;
    },

    moveMinute: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCMinutes(new_date.getUTCMinutes() + (dir * this.minuteStep));
      return new_date;
    },

    moveHour: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCHours(new_date.getUTCHours() + dir);
      return new_date;
    },

    moveDate: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCDate(new_date.getUTCDate() + dir);
      return new_date;
    },

    moveMonth: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf()),
        day = new_date.getUTCDate(),
        month = new_date.getUTCMonth(),
        mag = Math.abs(dir),
        new_month, test;
      dir = dir > 0 ? 1 : -1;
      if (mag == 1) {
        test = dir == -1
          // If going back one month, make sure month is not current month
          // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
          ? function () {
          return new_date.getUTCMonth() == month;
        }
          // If going forward one month, make sure month is as expected
          // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
          : function () {
          return new_date.getUTCMonth() != new_month;
        };
        new_month = month + dir;
        new_date.setUTCMonth(new_month);
        // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
        if (new_month < 0 || new_month > 11)
          new_month = (new_month + 12) % 12;
      } else {
        // For magnitudes >1, move one month at a time...
        for (var i = 0; i < mag; i++)
          // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
          new_date = this.moveMonth(new_date, dir);
        // ...then reset the day, keeping it in the new month
        new_month = new_date.getUTCMonth();
        new_date.setUTCDate(day);
        test = function () {
          return new_month != new_date.getUTCMonth();
        };
      }
      // Common date-resetting loop -- if date is beyond end of month, make it
      // end of month
      while (test()) {
        new_date.setUTCDate(--day);
        new_date.setUTCMonth(new_month);
      }
      return new_date;
    },

    moveYear: function (date, dir) {
      return this.moveMonth(date, dir * 12);
    },

    dateWithinRange: function (date) {
      return date >= this.startDate && date <= this.endDate;
    },

    keydown: function (e) {
      if (this.picker.is(':not(:visible)')) {
        if (e.keyCode == 27) // allow escape to hide and re-show picker
          this.show();
        return;
      }
      var dateChanged = false,
        dir, day, month,
        newDate, newViewDate;
      switch (e.keyCode) {
        case 27: // escape
          this.hide();
          e.preventDefault();
          break;
        case 37: // left
        case 39: // right
          if (!this.keyboardNavigation) break;
          dir = e.keyCode == 37 ? -1 : 1;
          viewMode = this.viewMode;
          if (e.ctrlKey) {
            viewMode += 2;
          } else if (e.shiftKey) {
            viewMode += 1;
          }
          if (viewMode == 4) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (viewMode == 3) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else if (viewMode == 2) {
            newDate = this.moveDate(this.date, dir);
            newViewDate = this.moveDate(this.viewDate, dir);
          } else if (viewMode == 1) {
            newDate = this.moveHour(this.date, dir);
            newViewDate = this.moveHour(this.viewDate, dir);
          } else if (viewMode == 0) {
            newDate = this.moveMinute(this.date, dir);
            newViewDate = this.moveMinute(this.viewDate, dir);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 38: // up
        case 40: // down
          if (!this.keyboardNavigation) break;
          dir = e.keyCode == 38 ? -1 : 1;
          viewMode = this.viewMode;
          if (e.ctrlKey) {
            viewMode += 2;
          } else if (e.shiftKey) {
            viewMode += 1;
          }
          if (viewMode == 4) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (viewMode == 3) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else if (viewMode == 2) {
            newDate = this.moveDate(this.date, dir * 7);
            newViewDate = this.moveDate(this.viewDate, dir * 7);
          } else if (viewMode == 1) {
            if (this.showMeridian) {
              newDate = this.moveHour(this.date, dir * 6);
              newViewDate = this.moveHour(this.viewDate, dir * 6);
            } else {
              newDate = this.moveHour(this.date, dir * 4);
              newViewDate = this.moveHour(this.viewDate, dir * 4);
            }
          } else if (viewMode == 0) {
            newDate = this.moveMinute(this.date, dir * 4);
            newViewDate = this.moveMinute(this.viewDate, dir * 4);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 13: // enter
          if (this.viewMode != 0) {
            var oldViewMode = this.viewMode;
            this.showMode(-1);
            this.fill();
            if (oldViewMode == this.viewMode && this.autoclose) {
              this.hide();
            }
          } else {
            this.fill();
            if (this.autoclose) {
              this.hide();
            }
          }
          e.preventDefault();
          break;
        case 9: // tab
          this.hide();
          break;
      }
      if (dateChanged) {
        var element;
        if (this.isInput) {
          element = this.element;
        } else if (this.component) {
          element = this.element.find('input');
        }
        if (element) {
          element.change();
        }
        this.element.trigger({
          type: 'changeDate',
          date: this.getDate()
        });
      }
    },

    showMode: function (dir) {
      if (dir) {
        var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
        if (newViewMode >= this.minView && newViewMode <= this.maxView) {
          this.element.trigger({
            type:        'changeMode',
            date:        this.viewDate,
            oldViewMode: this.viewMode,
            newViewMode: newViewMode
          });

          this.viewMode = newViewMode;
        }
      }
      /*
       vitalets: fixing bug of very special conditions:
       jquery 1.7.1 + webkit + show inline datetimepicker in bootstrap popover.
       Method show() does not set display css correctly and datetimepicker is not shown.
       Changed to .css('display', 'block') solve the problem.
       See https://github.com/vitalets/x-editable/issues/37

       In jquery 1.7.2+ everything works fine.
       */
      //this.picker.find('>div').hide().filter('.datetimepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
      this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
      this.updateNavArrows();
    },

    reset: function (e) {
      this._setDate(null, 'date');
    },

    convertViewModeText:  function (viewMode) {
      switch (viewMode) {
        case 4:
          return 'decade';
        case 3:
          return 'year';
        case 2:
          return 'month';
        case 1:
          return 'day';
        case 0:
          return 'hour';
      }
    }
  };

  var old = $.fn.datetimepicker;
  $.fn.datetimepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    var internal_return;
    this.each(function () {
      var $this = $(this),
        data = $this.data('datetimepicker'),
        options = typeof option == 'object' && option;
      if (!data) {
        $this.data('datetimepicker', (data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options))));
      }
      if (typeof option == 'string' && typeof data[option] == 'function') {
        internal_return = data[option].apply(data, args);
        if (internal_return !== undefined) {
          return false;
        }
      }
    });
    if (internal_return !== undefined)
      return internal_return;
    else
      return this;
  };

  $.fn.datetimepicker.defaults = {
  };
  $.fn.datetimepicker.Constructor = Datetimepicker;
  var dates = $.fn.datetimepicker.dates = {
    en: {
      days:        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      daysShort:   ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      daysMin:     ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      months:      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      meridiem:    ['am', 'pm'],
      suffix:      ['st', 'nd', 'rd', 'th'],
      today:       'Today',
      clear:       'Clear'
    }
  };

  var DPGlobal = {
    modes:            [
      {
        clsName: 'minutes',
        navFnc:  'Hours',
        navStep: 1
      },
      {
        clsName: 'hours',
        navFnc:  'Date',
        navStep: 1
      },
      {
        clsName: 'days',
        navFnc:  'Month',
        navStep: 1
      },
      {
        clsName: 'months',
        navFnc:  'FullYear',
        navStep: 1
      },
      {
        clsName: 'years',
        navFnc:  'FullYear',
        navStep: 10
      }
    ],
    isLeapYear:       function (year) {
      return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
    },
    getDaysInMonth:   function (year, month) {
      return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
    },
    getDefaultFormat: function (type, field) {
      if (type == 'standard') {
        if (field == 'input')
          return 'yyyy-mm-dd hh:ii';
        else
          return 'yyyy-mm-dd hh:ii:ss';
      } else if (type == 'php') {
        if (field == 'input')
          return 'Y-m-d H:i';
        else
          return 'Y-m-d H:i:s';
      } else {
        throw new Error('Invalid format type.');
      }
    },
    validParts: function (type) {
      if (type == 'standard') {
        return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
      } else if (type == 'php') {
        return /[dDjlNwzFmMnStyYaABgGhHis]/g;
      } else {
        throw new Error('Invalid format type.');
      }
    },
    nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
    parseFormat: function (format, type) {
      // IE treats \0 as a string end in inputs (truncating the value),
      // so it's a bad format delimiter, anyway
      var separators = format.replace(this.validParts(type), '\0').split('\0'),
        parts = format.match(this.validParts(type));
      if (!separators || !separators.length || !parts || parts.length == 0) {
        throw new Error('Invalid date format.');
      }
      return {separators: separators, parts: parts};
    },
    parseDate: function (date, format, language, type, timezone) {
      if (date instanceof Date) {
        var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
        dateUTC.setMilliseconds(0);
        return dateUTC;
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd', type);
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd hh:ii', type);
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd hh:ii:ss', type);
      }
      if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
        var part_re = /([-+]\d+)([dmwy])/,
          parts = date.match(/([-+]\d+)([dmwy])/g),
          part, dir;
        date = new Date();
        for (var i = 0; i < parts.length; i++) {
          part = part_re.exec(parts[i]);
          dir = parseInt(part[1]);
          switch (part[2]) {
            case 'd':
              date.setUTCDate(date.getUTCDate() + dir);
              break;
            case 'm':
              date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
              break;
            case 'w':
              date.setUTCDate(date.getUTCDate() + dir * 7);
              break;
            case 'y':
              date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
              break;
          }
        }
        return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0);
      }
      var parts = date && date.toString().match(this.nonpunctuation) || [],
        date = new Date(0, 0, 0, 0, 0, 0, 0),
        parsed = {},
        setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P', 'z', 'Z'],
        setters_map = {
          hh:   function (d, v) {
            return d.setUTCHours(v);
          },
          h:    function (d, v) {
            return d.setUTCHours(v);
          },
          HH:   function (d, v) {
            return d.setUTCHours(v == 12 ? 0 : v);
          },
          H:    function (d, v) {
            return d.setUTCHours(v == 12 ? 0 : v);
          },
          ii:   function (d, v) {
            return d.setUTCMinutes(v);
          },
          i:    function (d, v) {
            return d.setUTCMinutes(v);
          },
          ss:   function (d, v) {
            return d.setUTCSeconds(v);
          },
          s:    function (d, v) {
            return d.setUTCSeconds(v);
          },
          yyyy: function (d, v) {
            return d.setUTCFullYear(v);
          },
          yy:   function (d, v) {
            return d.setUTCFullYear(2000 + v);
          },
          m:    function (d, v) {
            v -= 1;
            while (v < 0) v += 12;
            v %= 12;
            d.setUTCMonth(v);
            while (d.getUTCMonth() != v)
              if (isNaN(d.getUTCMonth()))
                return d;
              else
                d.setUTCDate(d.getUTCDate() - 1);
            return d;
          },
          d:    function (d, v) {
            return d.setUTCDate(v);
          },
          p:    function (d, v) {
            return d.setUTCHours(v == 1 ? d.getUTCHours() + 12 : d.getUTCHours());
          },
          z:    function () {
            return timezone
          }
        },
        val, filtered, part;
      setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
      setters_map['dd'] = setters_map['d'];
      setters_map['P'] = setters_map['p'];
      setters_map['Z'] = setters_map['z'];
      date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      if (parts.length == format.parts.length) {
        for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
          val = parseInt(parts[i], 10);
          part = format.parts[i];
          if (isNaN(val)) {
            switch (part) {
              case 'MM':
                filtered = $(dates[language].months).filter(function () {
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m == p;
                });
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;
              case 'M':
                filtered = $(dates[language].monthsShort).filter(function () {
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m.toLowerCase() == p.toLowerCase();
                });
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
              case 'p':
              case 'P':
                val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
                break;
              case 'z':
              case 'Z':
                timezone;
                break;

            }
          }
          parsed[part] = val;
        }
        for (var i = 0, s; i < setters_order.length; i++) {
          s = setters_order[i];
          if (s in parsed && !isNaN(parsed[s]))
            setters_map[s](date, parsed[s])
        }
      }
      return date;
    },
    formatDate:       function (date, format, language, type, timezone) {
      if (date == null) {
        return '';
      }
      var val;
      if (type == 'standard') {
        val = {
          t:    date.getTime(),
          // year
          yy:   date.getUTCFullYear().toString().substring(2),
          yyyy: date.getUTCFullYear(),
          // month
          m:    date.getUTCMonth() + 1,
          M:    dates[language].monthsShort[date.getUTCMonth()],
          MM:   dates[language].months[date.getUTCMonth()],
          // day
          d:    date.getUTCDate(),
          D:    dates[language].daysShort[date.getUTCDay()],
          DD:   dates[language].days[date.getUTCDay()],
          p:    (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
          // hour
          h:    date.getUTCHours(),
          // minute
          i:    date.getUTCMinutes(),
          // second
          s:    date.getUTCSeconds(),
          // timezone
          z:    timezone
        };

        if (dates[language].meridiem.length == 2) {
          val.H = (val.h % 12 == 0 ? 12 : val.h % 12);
        }
        else {
          val.H = val.h;
        }
        val.HH = (val.H < 10 ? '0' : '') + val.H;
        val.P = val.p.toUpperCase();
        val.Z = val.z;
        val.hh = (val.h < 10 ? '0' : '') + val.h;
        val.ii = (val.i < 10 ? '0' : '') + val.i;
        val.ss = (val.s < 10 ? '0' : '') + val.s;
        val.dd = (val.d < 10 ? '0' : '') + val.d;
        val.mm = (val.m < 10 ? '0' : '') + val.m;
      } else if (type == 'php') {
        // php format
        val = {
          // year
          y: date.getUTCFullYear().toString().substring(2),
          Y: date.getUTCFullYear(),
          // month
          F: dates[language].months[date.getUTCMonth()],
          M: dates[language].monthsShort[date.getUTCMonth()],
          n: date.getUTCMonth() + 1,
          t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
          // day
          j: date.getUTCDate(),
          l: dates[language].days[date.getUTCDay()],
          D: dates[language].daysShort[date.getUTCDay()],
          w: date.getUTCDay(), // 0 -> 6
          N: (date.getUTCDay() == 0 ? 7 : date.getUTCDay()),       // 1 -> 7
          S: (date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : ''),
          // hour
          a: (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
          g: (date.getUTCHours() % 12 == 0 ? 12 : date.getUTCHours() % 12),
          G: date.getUTCHours(),
          // minute
          i: date.getUTCMinutes(),
          // second
          s: date.getUTCSeconds()
        };
        val.m = (val.n < 10 ? '0' : '') + val.n;
        val.d = (val.j < 10 ? '0' : '') + val.j;
        val.A = val.a.toString().toUpperCase();
        val.h = (val.g < 10 ? '0' : '') + val.g;
        val.H = (val.G < 10 ? '0' : '') + val.G;
        val.i = (val.i < 10 ? '0' : '') + val.i;
        val.s = (val.s < 10 ? '0' : '') + val.s;
      } else {
        throw new Error('Invalid format type.');
      }
      var date = [],
        seps = $.extend([], format.separators);
      for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
        if (seps.length) {
          date.push(seps.shift());
        }
        date.push(val[format.parts[i]]);
      }
      if (seps.length) {
        date.push(seps.shift());
      }
      return date.join('');
    },
    convertViewMode:  function (viewMode) {
      switch (viewMode) {
        case 4:
        case 'decade':
          viewMode = 4;
          break;
        case 3:
        case 'year':
          viewMode = 3;
          break;
        case 2:
        case 'month':
          viewMode = 2;
          break;
        case 1:
        case 'day':
          viewMode = 1;
          break;
        case 0:
        case 'hour':
          viewMode = 0;
          break;
      }

      return viewMode;
    },
    headTemplate: '<thead>' +
                '<tr>' +
                '<th class="prev"><i class="{iconType} {leftArrow}"/></th>' +
                '<th colspan="5" class="switch"></th>' +
                '<th class="next"><i class="{iconType} {rightArrow}"/></th>' +
                '</tr>' +
      '</thead>',
    headTemplateV3: '<thead>' +
                '<tr>' +
                '<th class="prev"><span class="{iconType} {leftArrow}"></span> </th>' +
                '<th colspan="5" class="switch"></th>' +
                '<th class="next"><span class="{iconType} {rightArrow}"></span> </th>' +
                '</tr>' +
      '</thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot>' + 
                    '<tr><th colspan="7" class="today"></th></tr>' +
                    '<tr><th colspan="7" class="clear"></th></tr>' +
                  '</tfoot>'
  };
  DPGlobal.template = '<div class="datetimepicker">' +
    '<div class="datetimepicker-minutes">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-hours">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-days">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplate +
    '<tbody></tbody>' +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-months">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-years">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '</div>';
  DPGlobal.templateV3 = '<div class="datetimepicker">' +
    '<div class="datetimepicker-minutes">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-hours">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-days">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplateV3 +
    '<tbody></tbody>' +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-months">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-years">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '</div>';
  $.fn.datetimepicker.DPGlobal = DPGlobal;

  /* DATETIMEPICKER NO CONFLICT
   * =================== */

  $.fn.datetimepicker.noConflict = function () {
    $.fn.datetimepicker = old;
    return this;
  };

  /* DATETIMEPICKER DATA-API
   * ================== */

  $(document).on(
    'focus.datetimepicker.data-api click.datetimepicker.data-api',
    '[data-provide="datetimepicker"]',
    function (e) {
      var $this = $(this);
      if ($this.data('datetimepicker')) return;
      e.preventDefault();
      // component click requires us to explicitly show it
      $this.datetimepicker('show');
    }
  );
  $(function () {
    $('[data-provide="datetimepicker-inline"]').datetimepicker();
  });

}));
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: false,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = 'hidden';
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);
            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.html(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide);

            if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {

                $('li', _.$dots)
                    .off('mouseenter.slick', $.proxy(_.setPaused, _, true))
                    .off('mouseleave.slick', $.proxy(_.setPaused, _, false));

            }

        }

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.html(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.setPaused, _, true))
                .on('mouseleave.slick', $.proxy(_.setPaused, _, false));
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {
                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                        });
                };

                imageToLoad.src = imageSource;

            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        _.$slider.trigger('afterChange', [_, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', null);
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();

                    if (_.options.adaptiveHeight === true) {
                        _.setPosition();
                    }
                })
                .error(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();
                });
        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, firstVisible;

        firstVisible = _.slideCount - _.options.slidesToShow;

        // check that the new breakpoint can actually accept the
        // "current slide" as the current slide, otherwise we need
        // to set it to the closest possible value.
        if ( !_.options.infinite ) {
            if ( _.slideCount <= _.options.slidesToShow ) {
                _.currentSlide = 0;
            } else if ( _.currentSlide > firstVisible ) {
                _.currentSlide = firstVisible;
            }
        }

         currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === "array" && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger('reInit', [_]);

        if (_.options.autoplay === true) {
            _.focusHandler();
        }

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this, l, item;

        if( option === "responsive" && $.type(value) === "array" ) {
            for ( item in value ) {
                if( $.type( _.options.responsive ) !== "array" ) {
                    _.options.responsive = [ value[item] ];
                } else {
                    l = _.options.responsive.length-1;
                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
                            _.options.responsive.splice(l,1);
                        }
                        l--;
                    }
                    _.options.responsive.push( value[item] );
                }
            }
        } else {
            _.options[option] = value;
        }

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.setPaused = function(paused) {

        var _ = this;

        if (_.options.autoplay === true && _.options.pauseOnHover === true) {
            _.paused = paused;
            if (!paused) {
                _.autoPlay();
            } else {
                _.autoPlayClear();
            }
        }
    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'left';
            } else {
                return 'right';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'left']);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'right']);
                    break;
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if (document[_.hidden]) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            if (_.options.autoplay === true) {
                _.paused = false;
                _.autoPlay();
            }
        }

    };
    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.on('focus.slick blur.slick', '*', function(event) {
            event.stopImmediatePropagation();
            var sf = $(this);
            setTimeout(function() {
                if (_.isPlay) {
                    if (sf.is(':focus')) {
                        _.autoPlayClear();
                        _.paused = true;
                    } else {
                        _.paused = false;
                        _.autoPlay();
                    }
                }
            }, 0);
        });
    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
;(function($, window, document) {

	var effect = {
		slideDown: {
			height: "show", 
			paddingTop: "show", 
			marginTop: "show", 
			paddingBottom: "show", 
			marginBottom: "show"
		},
		slideUp: {
			height: "hide", 
			paddingTop: "hide", 
			marginTop: "hide", 
			paddingBottom: "hide", 
			marginBottom: "hide"
		}
	};

	Accordion = {

		init: function(el, options) {
			var that = this;

			// add css style to link
			$('[data-acc-link]').css({ 'cursor': 'pointer' });

			// hide content by default except content has class "acc-open"
			$('[data-acc-content]').not('.acc-open').css({ 'display': 'none' });

			// bind click event
			el.on('click', '[data-acc-link]', function(e) {
				e.preventDefault();
				that.options = options;
				var linkName = $(this).data('acc-link');
				var contentObj = $('[data-acc-content='+linkName+']');
				that.toggle(contentObj, el);
			});
		},

		open: function(contentObj) {
			contentObj.animate(effect.slideDown, this.options.duration).addClass('acc-open');
		},

		close: function(contentObj) {
			contentObj.animate(effect.slideUp, this.options.duration).removeClass('acc-open');
		},


		toggle: function(contentObj, el) {
			var that = this;
			if(!this.options.multiOpen) {
				var contentName = contentObj.data('acc-content');
				var contentObjs = $(el).find('[data-acc-content]:not([data-acc-content='+contentName+'])');
				contentObjs.each(function(i, v) {
					that.close($(v));
				});
			}
			contentObj.hasClass('acc-open') ? this.close(contentObj) : this.open(contentObj);
		}

	};

	$.fn.accordion = function(options) {
		options = $.extend({
			multiOpen: true,
			duration: 200
		}, options);

		return this.each(function() {
			Accordion.init($(this), options);
		});
	}

})(jQuery, window, document);
/*
 CanvasJS HTML5 & JavaScript Charts - v1.9.6 GA - http://canvasjs.com/ 
 Copyright 2016 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     http://canvasjs.com/license-canvasjs/

*/

(function(){function U(a,d){a.prototype=Ra(d.prototype);a.prototype.constructor=a;a.base=d.prototype}function Ra(a){function d(){}d.prototype=a;return new d}function Ia(a,d,b){"millisecond"===b?a.setMilliseconds(a.getMilliseconds()+1*d):"second"===b?a.setSeconds(a.getSeconds()+1*d):"minute"===b?a.setMinutes(a.getMinutes()+1*d):"hour"===b?a.setHours(a.getHours()+1*d):"day"===b?a.setDate(a.getDate()+1*d):"week"===b?a.setDate(a.getDate()+7*d):"month"===b?a.setMonth(a.getMonth()+1*d):"year"===b&&a.setFullYear(a.getFullYear()+
1*d);return a}function N(a,d){var b=!1;0>a&&(b=!0,a*=-1);a=""+a;for(d=d?d:1;a.length<d;)a="0"+a;return b?"-"+a:a}function ma(a){if(!a)return a;a=a.replace(/^\s\s*/,"");for(var d=/\s/,b=a.length;d.test(a.charAt(--b)););return a.slice(0,b+1)}function Sa(a){a.roundRect=function(a,b,c,f,g,h,l,k){l&&(this.fillStyle=l);k&&(this.strokeStyle=k);"undefined"===typeof g&&(g=5);this.lineWidth=h;this.beginPath();this.moveTo(a+g,b);this.lineTo(a+c-g,b);this.quadraticCurveTo(a+c,b,a+c,b+g);this.lineTo(a+c,b+f-g);
this.quadraticCurveTo(a+c,b+f,a+c-g,b+f);this.lineTo(a+g,b+f);this.quadraticCurveTo(a,b+f,a,b+f-g);this.lineTo(a,b+g);this.quadraticCurveTo(a,b,a+g,b);this.closePath();l&&this.fill();k&&0<h&&this.stroke()}}function Aa(a,d){return a-d}function Ja(a,d){return a.x-d.x}function D(a){var d=((a&16711680)>>16).toString(16),b=((a&65280)>>8).toString(16);a=((a&255)>>0).toString(16);d=2>d.length?"0"+d:d;b=2>b.length?"0"+b:b;a=2>a.length?"0"+a:a;return"#"+d+b+a}function Ta(a,d){var b=this.length>>>0,c=Number(d)||
0,c=0>c?Math.ceil(c):Math.floor(c);for(0>c&&(c+=b);c<b;c++)if(c in this&&this[c]===a)return c;return-1}function x(a){return null===a||"undefined"===typeof a}function sa(a){a.indexOf||(a.indexOf=Ta);return a}function Ka(a,d,b){b=b||"normal";var c=a+"_"+d+"_"+b,f=La[c];if(isNaN(f)){try{a="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+a+"; font-size:"+d+"px; font-weight:"+b+";";if(!da){var g=document.body;da=document.createElement("span");
da.innerHTML="";var h=document.createTextNode("Mpgyi");da.appendChild(h);g.appendChild(da)}da.style.display="";da.setAttribute("style",a);f=Math.round(da.offsetHeight);da.style.display="none"}catch(l){f=Math.ceil(1.1*d)}f=Math.max(f,d);La[c]=f}return f}function F(a,d){var b=[];if(b={solid:[],shortDash:[3,1],shortDot:[1,1],shortDashDot:[3,1,1,1],shortDashDotDot:[3,1,1,1,1,1],dot:[1,2],dash:[4,2],dashDot:[4,2,1,2],longDash:[8,2],longDashDot:[8,2,1,2],longDashDotDot:[8,2,1,2,1,2]}[a||"solid"])for(var c=
0;c<b.length;c++)b[c]*=d;else b=[];return b}function L(a,d,b,c){if(a.addEventListener)a.addEventListener(d,b,c||!1);else if(a.attachEvent)a.attachEvent("on"+d,function(c){c=c||window.event;c.preventDefault=c.preventDefault||function(){c.returnValue=!1};c.stopPropagation=c.stopPropagation||function(){c.cancelBubble=!0};b.call(a,c)});else return!1}function Ma(a,d,b){a*=P;d*=P;a=b.getImageData(a,d,2,2).data;d=!0;for(b=0;4>b;b++)if(a[b]!==a[b+4]|a[b]!==a[b+8]|a[b]!==a[b+12]){d=!1;break}return d?a[0]<<
16|a[1]<<8|a[2]:0}function S(a,d,b){return a in d?d[a]:b[a]}function ta(a,d,b){if(v&&Na){var c=a.getContext("2d");ua=c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1;P=Ba/ua;a.width=d*P;a.height=b*P;Ba!==ua&&(a.style.width=d+"px",a.style.height=b+"px",c.scale(P,P))}else a.width=d,a.height=b}function Ua(a){if(!Oa){var d=!1,b=!1;"undefined"===typeof ea.Chart.creditHref?(a.creditHref="http://canvasjs.com/",
a.creditText=""):(d=a.updateOption("creditText"),b=a.updateOption("creditHref"));if(a.creditHref&&a.creditText){a._creditLink||(a._creditLink=document.createElement("a"),a._creditLink.setAttribute("class","canvasjs-chart-credit"),a._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:2px;top:"+(a.height-14)+"px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),a._creditLink.setAttribute("tabIndex",
-1),a._creditLink.setAttribute("target","_blank"));if(0===a.renderCount||d||b)a._creditLink.setAttribute("href",a.creditHref),a._creditLink.innerHTML=a.creditText;a._creditLink&&a.creditHref&&a.creditText?(a._creditLink.parentElement||a._canvasJSContainer.appendChild(a._creditLink),a._creditLink.style.top=a.height-14+"px"):a._creditLink.parentElement&&a._canvasJSContainer.removeChild(a._creditLink)}}}function ia(a,d){var b=document.createElement("canvas");b.setAttribute("class","canvasjs-chart-canvas");
ta(b,a,d);v||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(b);return b}function Ca(a,d,b){if(a&&d&&b){b=b+"."+d;var c="image/"+d;a=a.toDataURL(c);var f=!1,g=document.createElement("a");g.download=b;g.href=a;g.target="_blank";if("undefined"!==typeof Blob&&new Blob){for(var h=a.replace(/^data:[a-z/]*;base64,/,""),h=atob(h),l=new ArrayBuffer(h.length),l=new Uint8Array(l),k=0;k<h.length;k++)l[k]=h.charCodeAt(k);d=new Blob([l.buffer],{type:"image/"+d});try{window.navigator.msSaveBlob(d,
b),f=!0}catch(n){g.dataset.downloadurl=[c,g.download,g.href].join(":"),g.href=window.URL.createObjectURL(d)}}if(!f)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),g.dispatchEvent?g.dispatchEvent(event):g.fireEvent&&g.fireEvent("onclick")}catch(m){d=window.open(),d.document.write("<img src='"+a+"'></img><div>Please right click on the image and save it to your device</div>"),d.document.close()}}}function Z(a,d,b){d.getAttribute("state")!==
b&&(d.setAttribute("state",b),d.setAttribute("type","button"),d.style.position="relative",d.style.margin="0px 0px 0px 0px",d.style.padding="3px 4px 0px 4px",d.style.cssFloat="left",d.setAttribute("title",a._cultureInfo[b+"Text"]),d.innerHTML="<img style='height:16px;' src='"+Va[b].image+"' alt='"+a._cultureInfo[b+"Text"]+"' />")}function va(){for(var a=null,d=0;d<arguments.length;d++)a=arguments[d],a.style&&(a.style.display="inline")}function $(){for(var a=null,d=0;d<arguments.length;d++)(a=arguments[d])&&
a.style&&(a.style.display="none")}function M(a,d,b,c){this._defaultsKey=a;this.parent=c;this._eventListeners=[];c={};b&&(ka[b]&&ka[b][a])&&(c=ka[b][a]);this.options=d?d:{_isPlaceholder:!0};this.setOptions(this.options,c)}function z(a,d){d=d||{};z.base.constructor.call(this,"Chart",d,d.theme?d.theme:"theme1");var b=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this._lastTouchData=null;this.isAnimating=
!1;this.renderCount=0;this.panEnabled=this.disableToolTip=this.animatedRender=!1;this._defaultCursor="default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};this._dataInRenderedOrder=[];if(this.container="string"===typeof this._containerId?document.getElementById(this._containerId):this._containerId){this.container.innerHTML="";var c=0,f=0,c=this.options.width?this.width:0<this.container.clientWidth?this.container.clientWidth:this.width,f=this.options.height?this.height:
0<this.container.clientHeight?this.container.clientHeight:this.height;this.width=c;this.height=f;this.x1=this.y1=0;this.x2=this.width;this.y2=this.height;this._selectedColorSet="undefined"!==typeof ja[this.colorSet]?ja[this.colorSet]:ja.colorSet1;this._canvasJSContainer=document.createElement("div");this._canvasJSContainer.setAttribute("class","canvasjs-chart-container");this._canvasJSContainer.style.position="relative";this._canvasJSContainer.style.textAlign="left";this._canvasJSContainer.style.cursor=
"auto";v||(this._canvasJSContainer.style.height="0px");this.container.appendChild(this._canvasJSContainer);this.canvas=ia(c,f);this.canvas.style.position="absolute";this.canvas.getContext&&(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",Sa(this.ctx),v?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=ia(c,f),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),
this.plotArea.ctx=this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=ia(c,f),this.overlaidCanvas.style.position="absolute",this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",this._eventManager=new na(this),L(window,"resize",function(){b._updateSize()&&b.render()}),this._toolBar=document.createElement("div"),this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText=
"position: absolute; right: 1px; top: 1px;",this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},L(this.overlaidCanvas,"click",function(a){b._mouseEventHandler(a)}),L(this.overlaidCanvas,"mousemove",function(a){b._mouseEventHandler(a)}),L(this.overlaidCanvas,"mouseup",function(a){b._mouseEventHandler(a)}),L(this.overlaidCanvas,"mousedown",function(a){b._mouseEventHandler(a);$(b._dropdownMenu)}),L(this.overlaidCanvas,"mouseout",function(a){b._mouseEventHandler(a)}),
L(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(a){b._touchEventHandler(a)}),L(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){b._touchEventHandler(a)}),L(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(a){b._touchEventHandler(a)}),L(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){b._touchEventHandler(a)}),this.toolTip=
new V(this,this.options.toolTip),this.data=null,this.axisX=[],this.axisX2=[],this.axisY=[],this.axisY2=[],this.sessionVariables={axisX:[],axisX2:[],axisY:[],axisY2:[]})}else window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+this._containerId+'" was not found')}function wa(a,d){for(var b=[],c,f=0;f<a.length;f++)if(0==f)b.push(a[0]);else{var g,h,l;l=f-1;g=0===l?0:l-1;h=l===a.length-1?l:l+1;c=Math.abs((a[h].x-a[g].x)/(0===a[h].x-a[l].x?0.01:a[h].x-a[l].x))*(d-1)/2+1;var k=
(a[h].x-a[g].x)/c;c=(a[h].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<k||a[l].x<a[g].x&&0>k?{x:a[l].x+k/3,y:a[l].y+c/3}:{x:a[l].x,y:a[l].y+c/9};l=f;g=0===l?0:l-1;h=l===a.length-1?l:l+1;c=Math.abs((a[h].x-a[g].x)/(0===a[l].x-a[g].x?0.01:a[l].x-a[g].x))*(d-1)/2+1;k=(a[h].x-a[g].x)/c;c=(a[h].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<k||a[l].x<a[g].x&&0>k?{x:a[l].x-k/3,y:a[l].y-c/3}:{x:a[l].x,y:a[l].y-c/9};b[b.length]=a[f]}return b}function Pa(a,d){if(null===a||"undefined"===typeof a)return d;var b=parseFloat(a.toString())*
(0<=a.toString().indexOf("%")?d/100:1);return!isNaN(b)&&b<=d&&0<=b?b:d}function la(a,d,b,c,f){"undefined"===typeof f&&(f=0);this._padding=f;this._x1=a;this._y1=d;this._x2=b;this._y2=c;this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding}function X(a,d){X.base.constructor.call(this,"TextBlock",d);this.ctx=a;this._isDirty=!0;this._wrappedText=null}function oa(a,d){oa.base.constructor.call(this,"Title",d,a.theme,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;
this.optionsName="title";if(x(this.options.margin)&&a.options.subtitles)for(var b=a.options.subtitles,c=0;c<b.length;c++)if((x(b[c].horizontalAlign)&&"center"===this.horizontalAlign||b[c].horizontalAlign===this.horizontalAlign)&&(x(b[c].verticalAlign)&&"top"===this.verticalAlign||b[c].verticalAlign===this.verticalAlign)&&!b[c].dockInsidePlotArea===!this.dockInsidePlotArea){this.margin=0;break}"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=
this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function xa(a,d){xa.base.constructor.call(this,"Subtitle",d,a.theme,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.optionsName="subtitles";this.isOptionsInArray=!0;"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function ya(a,d){ya.base.constructor.call(this,"Legend",d,a.theme,a);this.chart=
a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.ghostCtx=this.chart._eventManager.ghostCtx;this.items=[];this.optionsName="legend";this.height=this.width=0;this.orientation=null;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.lineHeight=Ka(this.fontFamily,this.fontSize,this.fontWeight);this.horizontalSpacing=this.fontSize}function Da(a,d){Da.base.constructor.call(this,d);
this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx}function ba(a,d,b,c){ba.base.constructor.call(this,"DataSeries",d,a.theme,a);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=b;this.noDataPointsInPlotArea=0;this.id=c;this.chart._eventManager.objectMap[c]={id:c,objectType:"dataSeries",dataSeriesIndex:b};this.dataPointIds=[];this.plotUnit=[];this.axisY=this.axisX=null;this.optionsName="data";this.isOptionsInArray=!0;null===this.fillOpacity&&(this.type.match(/area/i)?this.fillOpacity=
0.7:this.fillOpacity=1);this.axisPlacement=this.getDefaultAxisPlacement();"undefined"===typeof this.options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function A(a,d,b,c,f){A.base.constructor.call(this,"Axis",d,a.theme,a);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this.dataSeries=[];this._stripLineLabels=this._ticks=this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,
viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};this.isOptionsInArray=!0;"axisX"===b?("left"===c||"bottom"===c?(this.optionsName="axisX",x(this.chart.sessionVariables.axisX[f])&&(this.chart.sessionVariables.axisX[f]={}),this.sessionVariables=this.chart.sessionVariables.axisX[f]):(this.optionsName="axisX2",x(this.chart.sessionVariables.axisX2[f])&&(this.chart.sessionVariables.axisX2[f]={}),this.sessionVariables=this.chart.sessionVariables.axisX2[f]),this.options.interval||(this.intervalType=
null),"theme2"===this.chart.theme&&x(this.options.lineThickness)&&(this.lineThickness=2)):"left"===c||"top"===c?(this.optionsName="axisY",x(this.chart.sessionVariables.axisY[f])&&(this.chart.sessionVariables.axisY[f]={}),this.sessionVariables=this.chart.sessionVariables.axisY[f]):(this.optionsName="axisY2",x(this.chart.sessionVariables.axisY2[f])&&(this.chart.sessionVariables.axisY2[f]={}),this.sessionVariables=this.chart.sessionVariables.axisY2[f]);"undefined"===typeof this.options.titleFontSize&&
(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this.options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=b;"axisX"!==b||d&&"undefined"!==typeof d.gridThickness||(this.gridThickness=0);this._position=c;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&
(this.labelAngle-=360);if(this.options.stripLines&&0<this.options.stripLines.length)for(this.stripLines=[],d=0;d<this.options.stripLines.length;d++)this.stripLines.push(new pa(this.chart,this.options.stripLines[d],a.theme,++this.chart._eventManager.lastObjectId,this));this._titleTextBlock=null;this.hasOptionChanged("viewportMinimum")&&null===this.viewportMinimum&&(this.options.viewportMinimum=void 0,this.sessionVariables.viewportMinimum=null);this.hasOptionChanged("viewportMinimum")||isNaN(this.sessionVariables.newViewportMinimum)||
null===this.sessionVariables.newViewportMinimum?this.sessionVariables.newViewportMinimum=null:this.viewportMinimum=this.sessionVariables.newViewportMinimum;this.hasOptionChanged("viewportMaximum")&&null===this.viewportMaximum&&(this.options.viewportMaximum=void 0,this.sessionVariables.viewportMaximum=null);this.hasOptionChanged("viewportMaximum")||isNaN(this.sessionVariables.newViewportMaximum)||null===this.sessionVariables.newViewportMaximum?this.sessionVariables.newViewportMaximum=null:this.viewportMaximum=
this.sessionVariables.newViewportMaximum;null!==this.minimum&&null!==this.viewportMinimum&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));null!==this.maximum&&null!==this.viewportMaximum&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.trackChanges("viewportMinimum");this.trackChanges("viewportMaximum")}function pa(a,d,b,c,f){pa.base.constructor.call(this,"StripLine",d,b,f);this.id=c;this.chart=a;this.ctx=this.chart.ctx;this.label=this.label;this.axis=f;
this.optionsName="stripLines";this.isOptionsInArray=!0;this._thicknessType="pixel";null!==this.startValue&&null!==this.endValue&&(this.value=f.logarithmic?Math.sqrt((this.startValue.getTime?this.startValue.getTime():this.startValue)*(this.endValue.getTime?this.endValue.getTime():this.endValue)):((this.startValue.getTime?this.startValue.getTime():this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this.thickness=f.logarithmic?Math.log(this.endValue/this.startValue)/Math.log(f.logarithmBase):
Math.max(this.endValue-this.startValue),this._thicknessType="value")}function V(a,d){V.base.constructor.call(this,"ToolTip",d,a.theme,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._timerId=0;this._prevY=this._prevX=NaN;this.optionsName="toolTip";this._initialize()}function na(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCanvas=
ia(this.chart.width,this.chart.height);this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function qa(a){var d;a&&ra[a]&&(d=ra[a]);qa.base.constructor.call(this,"CultureInfo",d)}function Ea(a){this.chart=a;this.ctx=this.chart.plotArea.ctx;this.animations=[];this.animationRequestId=null}var J={},v=!!document.createElement("canvas").getContext,ea={Chart:{width:500,height:400,zoomEnabled:!1,zoomType:"x",backgroundColor:"white",theme:"theme1",animationEnabled:!1,animationDuration:1200,
dataPointWidth:null,dataPointMinWidth:null,dataPointMaxWidth:null,colorSet:"colorSet1",culture:"en",creditHref:"",creditText:"CanvasJS",interactivityEnabled:!0,exportEnabled:!1,exportFileName:"Chart",rangeChanging:null,rangeChanged:null,publicProperties:{title:"readWrite",subtitles:"readWrite",toolTip:"readWrite",legend:"readWrite",axisX:"readWrite",axisY:"readWrite",data:"readWrite",options:"readWrite",bounds:"readOnly",container:"readOnly"}},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",
fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:v?"transparent":null,margin:5,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Subtitle:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",
cornerRadius:0,backgroundColor:null,margin:2,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,itemclick:null,dockInsidePlotArea:!1,reversed:!1,maxWidth:null,maxHeight:null,markerMargin:null,itemMaxWidth:null,
itemWidth:null,itemWrap:!0,itemTextFormatter:null,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},ToolTip:{enabled:!0,shared:!1,animationEnabled:!0,content:null,contentFormatter:null,reversed:!1,backgroundColor:v?"rgba(255,255,255,.9)":"rgb(255,255,255)",borderColor:null,borderThickness:2,cornerRadius:5,fontSize:14,fontColor:"black",fontFamily:"Calibri, Arial, Georgia, serif;",fontWeight:"normal",fontStyle:"italic",publicProperties:{options:"readWrite",chart:"readOnly"}},
Axis:{minimum:null,maximum:null,viewportMinimum:null,viewportMaximum:null,interval:null,intervalType:null,reversed:!1,logarithmic:!1,logarithmBase:10,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",titleWrap:!0,titleMaxWidth:null,labelAngle:0,labelBackgroundColor:v?"transparent":null,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!0,labelWrap:!0,
labelMaxWidth:null,labelFormatter:null,prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,lineDashType:"solid",gridColor:"A0A0A0",gridThickness:0,gridDashType:"solid",interlacedColor:v?"transparent":null,valueFormatString:null,margin:2,stripLines:[],publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},StripLine:{value:null,startValue:null,endValue:null,color:"orange",opacity:null,thickness:2,lineDashType:"solid",
label:"",labelPlacement:"inside",labelAlign:"far",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:v?"transparent":null,labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,showOnTop:!1,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",chart:"readOnly"}},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,highlightEnabled:!0,cursor:"default",indexLabel:"",indexLabelPlacement:"auto",
indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:"gray",indexLabelLineThickness:1,indexLabelLineDashType:"solid",indexLabelMaxWidth:null,indexLabelWrap:!0,indexLabelFormatter:null,lineThickness:2,lineDashType:"solid",connectNullData:!1,nullDataLineDashType:"dash",color:null,lineColor:null,risingColor:"white",fillOpacity:null,
startAngle:0,radius:null,innerRadius:null,type:"column",xValueType:"number",axisXType:"primary",axisYType:"primary",axisXIndex:0,axisYIndex:0,xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:v?"transparent":null,legendMarkerBorderThickness:0,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:v?"transparent":null,markerBorderThickness:0,
mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,visible:!0,publicProperties:{options:"readWrite",axisX:"readWrite",axisY:"readWrite",chart:"readOnly"}},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"},CultureInfo:{decimalSeparator:".",
digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",menuText:"More Options",saveJPGText:"Save as JPEG",savePNGText:"Save as PNG",printText:"Print",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},ra={en:{}},ja={colorSet1:"#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),
colorSet2:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},ka={theme1:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Subtitle:{fontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":
"calibri",fontSize:16,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,gridThickness:2,gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",
fontFamily:v?"monospace, sans-serif,arial black":"calibri"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineThickness:1}},theme2:{Chart:{colorSet:"colorSet2"},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",margin:5},Subtitle:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:14,fontColor:"#333333",verticalAlign:"top",
margin:5},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:v?"monospace, sans-serif,arial black":"arial",titleFontWeight:"bold",labelFontFamily:v?"monospace, Courier New, Courier":"arial",labelFontSize:16,labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:v?"monospace, sans-serif,arial black":"arial"},DataSeries:{indexLabelFontColor:"grey",
indexLabelFontFamily:v?"Courier New, Courier, monospace":"arial",indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineThickness:1}},theme3:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:v?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:32,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Subtitle:{fontFamily:v?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:16,fontColor:"#3A3A3A",
fontWeight:"bold",verticalAlign:"top",margin:5},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:v?"Verdana, Geneva, Calibri, sans-serif":"calibri",labelFontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:2,lineColor:"grey"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:v?"monospace, sans-serif,arial black":"calibri"},
DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:v?"Candara, Optima, Calibri, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}}},H={numberDuration:1,yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},La={},da=
null,Fa=function(){var a=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,d="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),b="Sun Mon Tue Wed Thu Fri Sat".split(" "),c="January February March April May June July August September October November December".split(" "),f="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),g=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
h=/[^-+\dA-Z]/g;return function(l,k,n){var m=n?n.days:d,p=n?n.months:c,e=n?n.shortDays:b,r=n?n.shortMonths:f;n="";var q=!1;l=l&&l.getTime?l:l?new Date(l):new Date;if(isNaN(l))throw SyntaxError("invalid date");"UTC:"===k.slice(0,4)&&(k=k.slice(4),q=!0);n=q?"getUTC":"get";var s=l[n+"Date"](),u=l[n+"Day"](),w=l[n+"Month"](),y=l[n+"FullYear"](),t=l[n+"Hours"](),v=l[n+"Minutes"](),aa=l[n+"Seconds"](),ca=l[n+"Milliseconds"](),x=q?0:l.getTimezoneOffset();return n=k.replace(a,function(a){switch(a){case "D":return s;
case "DD":return N(s,2);case "DDD":return e[u];case "DDDD":return m[u];case "M":return w+1;case "MM":return N(w+1,2);case "MMM":return r[w];case "MMMM":return p[w];case "Y":return parseInt(String(y).slice(-2));case "YY":return N(String(y).slice(-2),2);case "YYY":return N(String(y).slice(-3),3);case "YYYY":return N(y,4);case "h":return t%12||12;case "hh":return N(t%12||12,2);case "H":return t;case "HH":return N(t,2);case "m":return v;case "mm":return N(v,2);case "s":return aa;case "ss":return N(aa,
2);case "f":return String(ca).slice(0,1);case "ff":return N(String(ca).slice(0,2),2);case "fff":return N(String(ca).slice(0,3),3);case "t":return 12>t?"a":"p";case "tt":return 12>t?"am":"pm";case "T":return 12>t?"A":"P";case "TT":return 12>t?"AM":"PM";case "K":return q?"UTC":(String(l).match(g)||[""]).pop().replace(h,"");case "z":return(0<x?"-":"+")+Math.floor(Math.abs(x)/60);case "zz":return(0<x?"-":"+")+N(Math.floor(Math.abs(x)/60),2);case "zzz":return(0<x?"-":"+")+N(Math.floor(Math.abs(x)/60),
2)+N(Math.abs(x)%60,2);default:return a.slice(1,a.length-1)}})}}(),fa=function(a,d,b){if(null===a)return"";a=Number(a);var c=0>a?!0:!1;c&&(a*=-1);var f=b?b.decimalSeparator:".",g=b?b.digitGroupSeparator:",",h="";d=String(d);var h=1,l=b="",k=-1,n=[],m=[],p=0,e=0,r=0,q=!1,s=0,l=d.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);d=null;for(var u=0;l&&u<l.length;u++)if(d=l[u],"."===d&&0>k)k=u;else{if("%"===d)h*=100;else if("\u2030"===d){h*=1E3;continue}else if(","===d[0]&&"."===d[d.length-1]){h/=
Math.pow(1E3,d.length-1);k=u+d.length-1;continue}else"E"!==d[0]&&"e"!==d[0]||"0"!==d[d.length-1]||(q=!0);0>k?(n.push(d),"#"===d||"0"===d?p++:","===d&&r++):(m.push(d),"#"!==d&&"0"!==d||e++)}q&&(d=Math.floor(a),s=(0===d?"":String(d)).length-p,h/=Math.pow(10,s));0>k&&(k=u);h=(a*h).toFixed(e);d=h.split(".");h=(d[0]+"").split("");a=(d[1]+"").split("");h&&"0"===h[0]&&h.shift();for(u=q=l=e=k=0;0<n.length;)if(d=n.pop(),"#"===d||"0"===d)if(k++,k===p){var w=h,h=[];if("0"===d)for(d=p-e-(w?w.length:0);0<d;)w.unshift("0"),
d--;for(;0<w.length;)b=w.pop()+b,u++,0===u%q&&(l===r&&0<w.length)&&(b=g+b);c&&(b="-"+b)}else 0<h.length?(b=h.pop()+b,e++,u++):"0"===d&&(b="0"+b,e++,u++),0===u%q&&(l===r&&0<h.length)&&(b=g+b);else"E"!==d[0]&&"e"!==d[0]||"0"!==d[d.length-1]||!/[eE][+-]*[0]+/.test(d)?","===d?(l++,q=u,u=0,0<h.length&&(b=g+b)):b=1<d.length&&('"'===d[0]&&'"'===d[d.length-1]||"'"===d[0]&&"'"===d[d.length-1])?d.slice(1,d.length-1)+b:d+b:(d=0>s?d.replace("+","").replace("-",""):d.replace("-",""),b+=d.replace(/[0]+/,function(a){return N(s,
a.length)}));c="";for(g=!1;0<m.length;)d=m.shift(),"#"===d||"0"===d?0<a.length&&0!==Number(a.join(""))?(c+=a.shift(),g=!0):"0"===d&&(c+="0",g=!0):1<d.length&&('"'===d[0]&&'"'===d[d.length-1]||"'"===d[0]&&"'"===d[d.length-1])?c+=d.slice(1,d.length-1):"E"!==d[0]&&"e"!==d[0]||"0"!==d[d.length-1]||!/[eE][+-]*[0]+/.test(d)?c+=d:(d=0>s?d.replace("+","").replace("-",""):d.replace("-",""),c+=d.replace(/[0]+/,function(a){return N(s,a.length)}));return b+((g?f:"")+c)},za=function(a){var d=0,b=0;a=a||window.event;
a.offsetX||0===a.offsetX?(d=a.offsetX,b=a.offsetY):a.layerX||0==a.layerX?(d=a.layerX,b=a.layerY):(d=a.pageX-a.target.offsetLeft,b=a.pageY-a.target.offsetTop);return{x:d,y:b}},Na=!0,Ba=window.devicePixelRatio||1,ua=1,P=Na?Ba/ua:1,Oa=window&&window.location&&window.location.href&&window.location.href.indexOf&&-1!==window.location.href.indexOf(""),Va={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="},
pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="},
zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="},
menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"}};(function(){J.fSDec=function(a){for(var d="",b=0;b<a.length;b++)d+=String.fromCharCode(a[b]);return d};J.str={tv:[84,114,105,97,108,32,86,101,114,115,105,
111,110],fntStr:[112,120,32,67,97,108,105,98,114,105,44,32,76,117,99,105,100,97,32,71,114,97,110,100,101,44,32,76,117,99,105,100,97,32,83,97,110,115,32,85,110,105,99,111,100,101,44,32,65,114,105,97,108,44,32,115,97,110,115,45,115,101,114,105,102],tBl:[116,101,120,116,66,97,115,101,108,105,110,101],fnt:[102,111,110,116],fSy:[102,105,108,108,83,116,121,108,101],fTx:[102,105,108,108,84,101,120,116],gr:[103,114,101,121],ct:[99,116,120],tp:[116,111,112]};delete ea[J.fSDec([67,104,97,114,116])][J.fSDec([99,
114,101,100,105,116,72,114,101,102])];J.pro={sCH:ea[J.fSDec([67,104,97,114,116])][J.fSDec([99,114,101,100,105,116,72,114,101,102])]};J.fAWm=function(a){if("undefined"===typeof J.pro.sCH&&!Oa){var d=a[J.fSDec(J.str.ct)];d[J.fSDec(J.str.tBl)]=J.fSDec(J.str.tp);d[J.fSDec(J.str.fnt)]=11+J.fSDec(J.str.fntStr);d[J.fSDec(J.str.fSy)]=J.fSDec(J.str.gr);d[J.fSDec(J.str.fTx)](J.fSDec(J.str.tv),2,a.height-11-2)}}})();M.prototype.setOptions=function(a,d){if(ea[this._defaultsKey]){var b=ea[this._defaultsKey],c;
for(c in b)"publicProperties"!==c&&b.hasOwnProperty(c)&&(this[c]=a&&c in a?a[c]:d&&c in d?d[c]:b[c])}};M.prototype.get=function(a){var d=ea[this._defaultsKey];if("options"===a)return this.options&&this.options._isPlaceholder?null:this.options;if(d.hasOwnProperty(a)||d.publicProperties&&d.publicProperties.hasOwnProperty(a))return this[a];window.console&&window.console.log('Property "'+a+"\" doesn't exist. Please check for typo.")};M.prototype.set=function(a,d,b){b="undefined"===typeof b?!0:b;var c=
ea[this._defaultsKey];if("options"===a)this.createUserOptions(d);else if(c.hasOwnProperty(a)||c.publicProperties&&c.publicProperties.hasOwnProperty(a)&&"readWrite"===c.publicProperties[a])this.options._isPlaceholder&&this.createUserOptions(),this.options[a]=d;else{window.console&&(c.publicProperties&&c.publicProperties.hasOwnProperty(a)&&"readOnly"===c.publicProperties[a]?window.console.log('Property "'+a+'" is read-only.'):window.console.log('Property "'+a+"\" doesn't exist. Please check for typo."));
return}b&&(chart=this.chart||this,chart.render())};M.prototype.addTo=function(a,d,b,c){c="undefined"===typeof c?!0:c;var f=ea[this._defaultsKey];f.hasOwnProperty(a)||f.publicProperties&&f.publicProperties.hasOwnProperty(a)&&"readWrite"===f.publicProperties[a]?(this.options._isPlaceholder&&this.createUserOptions(),"undefined"===typeof this.options[a]&&(this.options[a]=[]),a=this.options[a],b="undefined"===typeof b||null===b?a.length:b,a.splice(b,0,d),c&&(chart=this.chart||this,chart.render())):window.console&&
(f.publicProperties&&f.publicProperties.hasOwnProperty(a)&&"readOnly"===f.publicProperties[a]?window.console.log('Property "'+a+'" is read-only.'):window.console.log('Property "'+a+"\" doesn't exist. Please check for typo."))};M.prototype.createUserOptions=function(a){if("undefined"!==typeof a||this.options._isPlaceholder)if(this.parent.options._isPlaceholder&&this.parent.createUserOptions(),this.isOptionsInArray){this.parent.options[this.optionsName]||(this.parent.options[this.optionsName]=[]);var d=
this.parent.options[this.optionsName],b=d.length;this.options._isPlaceholder||(sa(d),b=d.indexOf(this.options));this.options="undefined"===typeof a?{}:a;d[b]=this.options}else this.options="undefined"===typeof a?{}:a,a=this.parent.options,this.optionsName?d=this.optionsName:(d=this._defaultsKey)&&0!==d.length?(b=d.charAt(0).toLowerCase(),1<d.length&&(b=b.concat(d.slice(1))),d=b):d=void 0,a[d]=this.options};M.prototype.remove=function(a){a="undefined"===typeof a?!0:a;if(this.isOptionsInArray){var d=
this.parent.options[this.optionsName];sa(d);var b=d.indexOf(this.options);0<=b&&d.splice(b,1)}else delete this.parent.options[this.optionsName];a&&(chart=this.chart||this,chart.render())};M.prototype.updateOption=function(a){var d=ea[this._defaultsKey],b=this.options.theme?this.options.theme:this.chart&&this.chart.options.theme?this.chart.options.theme:"theme1",c={},f=this[a];b&&(ka[b]&&ka[b][this._defaultsKey])&&(c=ka[b][this._defaultsKey]);a in d&&(f=a in this.options?this.options[a]:c&&a in c?
c[a]:d[a]);if(f===this[a])return!1;this[a]=f;return!0};M.prototype.trackChanges=function(a){if(!this.sessionVariables)throw"Session Variable Store not set";this.sessionVariables[a]=this.options[a]};M.prototype.isBeingTracked=function(a){this.options._oldOptions||(this.options._oldOptions={});return this.options._oldOptions[a]?!0:!1};M.prototype.hasOptionChanged=function(a){if(!this.sessionVariables)throw"Session Variable Store not set";return this.sessionVariables[a]!==this.options[a]};M.prototype.addEventListener=
function(a,d,b){a&&d&&(this._eventListeners[a]=this._eventListeners[a]||[],this._eventListeners[a].push({context:b||this,eventHandler:d}))};M.prototype.removeEventListener=function(a,d){if(a&&d&&this._eventListeners[a])for(var b=this._eventListeners[a],c=0;c<b.length;c++)if(b[c].eventHandler===d){b[c].splice(c,1);break}};M.prototype.removeAllEventListeners=function(){this._eventListeners=[]};M.prototype.dispatchEvent=function(a,d,b){if(a&&this._eventListeners[a]){d=d||{};for(var c=this._eventListeners[a],
f=0;f<c.length;f++)c[f].eventHandler.call(c[f].context,d)}"function"===typeof this[a]&&this[a].call(b||this.chart,d)};U(z,M);z.prototype._updateOptions=function(){var a=this;this.updateOption("width");this.updateOption("height");this.updateOption("dataPointWidth");this.updateOption("dataPointMinWidth");this.updateOption("dataPointMaxWidth");this.updateOption("interactivityEnabled");this.updateOption("theme");this.updateOption("colorSet")&&(this._selectedColorSet="undefined"!==typeof ja[this.colorSet]?
ja[this.colorSet]:ja.colorSet1);this.updateOption("backgroundColor");this.backgroundColor||(this.backgroundColor="rgba(0,0,0,0)");this.updateOption("culture");this._cultureInfo=new qa(this.options.culture);this.updateOption("animationEnabled");this.animationEnabled=this.animationEnabled&&v;this.updateOption("animationDuration");this.updateOption("rangeChanging");this.updateOption("rangeChanged");this.updateOption("exportEnabled");this.updateOption("exportFileName");this.updateOption("zoomType");this.options.zoomEnabled?
(this._zoomButton||($(this._zoomButton=document.createElement("button")),Z(this,this._zoomButton,"pan"),this._toolBar.appendChild(this._zoomButton),L(this._zoomButton,"click",function(){a.zoomEnabled?(a.zoomEnabled=!1,a.panEnabled=!0,Z(a,a._zoomButton,"zoom")):(a.zoomEnabled=!0,a.panEnabled=!1,Z(a,a._zoomButton,"pan"));a.render()})),this._resetButton||($(this._resetButton=document.createElement("button")),Z(this,this._resetButton,"reset"),this._toolBar.appendChild(this._resetButton),L(this._resetButton,
"click",function(){a.toolTip.hide();a.zoomEnabled||a.panEnabled?(a.zoomEnabled=!0,a.panEnabled=!1,Z(a,a._zoomButton,"pan"),a._defaultCursor="default",a.overlaidCanvas.style.cursor=a._defaultCursor):(a.zoomEnabled=!1,a.panEnabled=!1);if(a.sessionVariables.axisX)for(var b=0;b<a.sessionVariables.axisX.length;b++)a.sessionVariables.axisX[b].newViewportMinimum=null,a.sessionVariables.axisX[b].newViewportMaximum=null;if(a.sessionVariables.axisX2)for(b=0;b<a.sessionVariables.axisX2.length;b++)a.sessionVariables.axisX2[b].newViewportMinimum=
null,a.sessionVariables.axisX2[b].newViewportMaximum=null;if(a.sessionVariables.axisY)for(b=0;b<a.sessionVariables.axisY.length;b++)a.sessionVariables.axisY[b].newViewportMinimum=null,a.sessionVariables.axisY[b].newViewportMaximum=null;if(a.sessionVariables.axisY2)for(b=0;b<a.sessionVariables.axisY2.length;b++)a.sessionVariables.axisY2[b].newViewportMinimum=null,a.sessionVariables.axisY2[b].newViewportMaximum=null;a.resetOverlayedCanvas();$(a._zoomButton,a._resetButton);a._dispatchRangeEvent("rangeChanging",
"reset");a.render();a._dispatchRangeEvent("rangeChanged","reset")}),this.overlaidCanvas.style.cursor=a._defaultCursor),this.zoomEnabled||this.panEnabled||(this._zoomButton?(a._zoomButton.getAttribute("state")===a._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=!1),va(a._zoomButton,a._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))):this.panEnabled=this.zoomEnabled=!1;this._menuButton?this.exportEnabled?va(this._menuButton):$(this._menuButton):
this.exportEnabled&&v&&(this._menuButton=document.createElement("button"),Z(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),L(this._menuButton,"click",function(){"none"!==a._dropdownMenu.style.display||a._dropDownCloseTime&&500>=(new Date).getTime()-a._dropDownCloseTime.getTime()||(a._dropdownMenu.style.display="block",a._menuButton.blur(),a._dropdownMenu.focus())},!0));if(!this._dropdownMenu&&this.exportEnabled&&v){this._dropdownMenu=document.createElement("div");this._dropdownMenu.setAttribute("tabindex",
-1);this._dropdownMenu.style.cssText="position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";a._dropdownMenu.style.display="none";this._toolBar.appendChild(this._dropdownMenu);L(this._dropdownMenu,
"blur",function(){$(a._dropdownMenu);a._dropDownCloseTime=new Date},!0);var d=document.createElement("div");d.style.cssText="padding: 2px 15px 2px 10px";d.innerHTML=this._cultureInfo.printText;this._dropdownMenu.appendChild(d);L(d,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);L(d,"mouseout",function(){this.style.backgroundColor="transparent"},!0);L(d,"click",function(){a.print();$(a._dropdownMenu)},!0);d=document.createElement("div");d.style.cssText="padding: 2px 15px 2px 10px";
d.innerHTML=this._cultureInfo.saveJPGText;this._dropdownMenu.appendChild(d);L(d,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);L(d,"mouseout",function(){this.style.backgroundColor="transparent"},!0);L(d,"click",function(){Ca(a.canvas,"jpeg",a.exportFileName);$(a._dropdownMenu)},!0);d=document.createElement("div");d.style.cssText="padding: 2px 15px 2px 10px";d.innerHTML=this._cultureInfo.savePNGText;this._dropdownMenu.appendChild(d);L(d,"mouseover",function(){this.style.backgroundColor=
"#EEEEEE"},!0);L(d,"mouseout",function(){this.style.backgroundColor="transparent"},!0);L(d,"click",function(){Ca(a.canvas,"png",a.exportFileName);$(a._dropdownMenu)},!0)}"none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?Z(a,a._zoomButton,"zoom"):Z(a,a._zoomButton,"pan"),a._resetButton.getAttribute("state")!==a._cultureInfo.resetText&&Z(a,a._resetButton,"reset"));this.options.toolTip&&this.toolTip.options!==this.options.toolTip&&(this.toolTip.options=this.options.toolTip);for(var b in this.toolTip.options)this.toolTip.options.hasOwnProperty(b)&&
this.toolTip.updateOption(b)};z.prototype._updateSize=function(){var a=0,d=0;this.options.width?a=this.width:this.width=a=0<this.container.clientWidth?this.container.clientWidth:this.width;this.options.height?d=this.height:this.height=d=0<this.container.clientHeight?this.container.clientHeight:this.height;return this.canvas.width!==a*P||this.canvas.height!==d*P?(ta(this.canvas,a,d),ta(this.overlaidCanvas,a,d),ta(this._eventManager.ghostCanvas,a,d),!0):!1};z.prototype._initialize=function(){this._animator?
this._animator.cancelAllAnimations():this._animator=new Ea(this);this.removeAllEventListeners();this.disableToolTip=!1;this._axes=[];this.pieDoughnutClickHandler=null;this.animationRequestId&&this.cancelRequestAnimFrame.call(window,this.animationRequestId);this._updateOptions();this.animatedRender=v&&this.animationEnabled&&0===this.renderCount;this._updateSize();this.clearCanvas();this.ctx.beginPath();this.axisX=[];this.axisX2=[];this.axisY=[];this.axisY2=[];this._indexLabels=[];this._dataInRenderedOrder=
[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]};this.layoutManager=new la(0,0,this.width,this.height,2);this.plotArea.layoutManager&&this.plotArea.layoutManager.reset();this.data=[];var a=0;if(this.options.data)for(var d=0;d<this.options.data.length;d++)if(a++,!this.options.data[d].type||0<=z._supportedChartTypes.indexOf(this.options.data[d].type)){var b=new ba(this,this.options.data[d],a-1,++this._eventManager.lastObjectId);
null===b.name&&(b.name="DataSeries "+a);null===b.color?1<this.options.data.length?(b._colorSet=[this._selectedColorSet[b.index%this._selectedColorSet.length]],b.color=this._selectedColorSet[b.index%this._selectedColorSet.length]):b._colorSet="line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"candlestick"===b.type||"ohlc"===b.type?
[this._selectedColorSet[0]]:this._selectedColorSet:b._colorSet=[b.color];null===b.markerSize&&(("line"===b.type||"stepLine"===b.type||"spline"===b.type||0<=b.type.toLowerCase().indexOf("area"))&&b.dataPoints&&b.dataPoints.length<this.width/16||"scatter"===b.type)&&(b.markerSize=8);"bubble"!==b.type&&"scatter"!==b.type||!b.dataPoints||(b.dataPoints.some?b.dataPoints.some(function(a){return a.x})&&b.dataPoints.sort(Ja):b.dataPoints.sort(Ja));this.data.push(b);var c=b.axisPlacement,f;"normal"===c?"xySwapped"===
this.plotInfo.axisPlacement?f='You cannot combine "'+b.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?f='You cannot combine "'+b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===c?"normal"===this.plotInfo.axisPlacement?f='You cannot combine "'+b.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?f='You cannot combine "'+b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement=
"xySwapped"):"none"==c&&("normal"===this.plotInfo.axisPlacement?f='You cannot combine "'+b.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?f='You cannot combine "'+b.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"));if(f&&window.console){window.console.log(f);return}}J.fAWm&&J.fAWm(this);Ua(this);this._objectsInitialized=!0};z._supportedChartTypes=sa("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));
z.prototype.render=function(a){a&&(this.options=a);this._initialize();var d=[];for(a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement){if(!this.data[a].axisYType||"primary"===this.data[a].axisYType)if(this.options.axisY&&0<this.options.axisY.length){if(!this.axisY.length)for(var b=0;b<this.options.axisY.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[b]=new A(this,this.options.axisY[b],"axisY","left",b)):"xySwapped"===
this.plotInfo.axisPlacement&&this._axes.push(this.axisY[b]=new A(this,this.options.axisY[b],"axisY","bottom",b));this.data[a].axisY=this.axisY[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY.length?this.data[a].axisYIndex:0];this.axisY[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY.length?this.data[a].axisYIndex:0].dataSeries.push(this.data[a])}else this.axisY.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[0]=new A(this,this.options.axisY,
"axisY","left",0)):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY[0]=new A(this,this.options.axisY,"axisY","bottom",0))),this.data[a].axisY=this.axisY[0],this.axisY[0].dataSeries.push(this.data[a]);if("secondary"===this.data[a].axisYType)if(this.options.axisY2&&0<this.options.axisY2.length){if(!this.axisY2.length)for(b=0;b<this.options.axisY2.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2[b]=new A(this,this.options.axisY2[b],"axisY","right",b)):
"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[b]=new A(this,this.options.axisY2[b],"axisY","top",b));this.data[a].axisY=this.axisY2[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY2.length?this.data[a].axisYIndex:0];this.axisY2[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY2.length?this.data[a].axisYIndex:0].dataSeries.push(this.data[a])}else this.axisY2.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2[0]=new A(this,
this.options.axisY2,"axisY","right",0)):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[0]=new A(this,this.options.axisY2,"axisY","top",0))),this.data[a].axisY=this.axisY2[0],this.axisY2[0].dataSeries.push(this.data[a]);if(!this.data[a].axisXType||"primary"===this.data[a].axisXType)if(this.options.axisX&&0<this.options.axisX.length){if(!this.axisX.length)for(b=0;b<this.options.axisX.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX[b]=new A(this,this.options.axisX[b],
"axisX","bottom",b)):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[b]=new A(this,this.options.axisX[b],"axisX","left",b));this.data[a].axisX=this.axisX[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX.length?this.data[a].axisXIndex:0];this.axisX[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX.length?this.data[a].axisXIndex:0].dataSeries.push(this.data[a])}else this.axisX.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX[0]=
new A(this,this.options.axisX,"axisX","bottom",0)):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[0]=new A(this,this.options.axisX,"axisX","left",0))),this.data[a].axisX=this.axisX[0],this.axisX[0].dataSeries.push(this.data[a]);if("secondary"===this.data[a].axisXType)if(this.options.axisX2&&0<this.options.axisX2.length){if(!this.axisX2.length)for(b=0;b<this.options.axisX2.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX2[b]=new A(this,this.options.axisX2[b],
"axisX","top",b)):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[b]=new A(this,this.options.axisX2[b],"axisX","right",b));this.data[a].axisX=this.axisX2[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX2.length?this.data[a].axisXIndex:0];this.axisX2[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX2.length?this.data[a].axisXIndex:0].dataSeries.push(this.data[a])}else this.axisX2.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX2[0]=
new A(this,this.options.axisX2,"axisX","top",0)):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[0]=new A(this,this.options.axisX2,"axisX","right",0))),this.data[a].axisX=this.axisX2[0],this.axisX2[0].dataSeries.push(this.data[a])}if(this.axisY){for(b=1;b<this.axisY.length;b++)"undefined"===typeof this.axisY[b].options.gridThickness&&(this.axisY[b].gridThickness=0);for(b=0;b<this.axisY.length-1;b++)"undefined"===typeof this.axisY[b].options.margin&&(this.axisY[b].margin=10)}if(this.axisY2){for(b=
1;b<this.axisY2.length;b++)"undefined"===typeof this.axisY2[b].options.gridThickness&&(this.axisY2[b].gridThickness=0);for(b=0;b<this.axisY2.length-1;b++)"undefined"===typeof this.axisY2[b].options.margin&&(this.axisY2[b].margin=10)}this.axisY&&0<this.axisY.length&&(this.axisY2&&0<this.axisY2.length)&&(0<this.axisY[0].gridThickness&&"undefined"===typeof this.axisY2[0].options.gridThickness?this.axisY2[0].gridThickness=0:0<this.axisY2[0].gridThickness&&"undefined"===typeof this.axisY[0].options.gridThickness&&
(this.axisY[0].gridThickness=0));if(this.axisX)for(b=0;b<this.axisX.length;b++)"undefined"===typeof this.axisX[b].options.gridThickness&&(this.axisX[b].gridThickness=0);if(this.axisX2)for(b=0;b<this.axisX2.length;b++)"undefined"===typeof this.axisX2[b].options.gridThickness&&(this.axisX2[b].gridThickness=0);this.axisX&&0<this.axisX.length&&(this.axisX2&&0<this.axisX2.length)&&(0<this.axisX[0].gridThickness&&"undefined"===typeof this.axisX2[0].options.gridThickness?this.axisX2[0].gridThickness=0:0<
this.axisX2[0].gridThickness&&"undefined"===typeof this.axisX[0].options.gridThickness&&(this.axisX[0].gridThickness=0));b=!1;if(0<this._axes.length&&(this.zoomEnabled||this.panEnabled))for(a=0;a<this._axes.length;a++)if(null!==this._axes[a].viewportMinimum||null!==this._axes[a].viewportMaximum){b=!0;break}b?va(this._zoomButton,this._resetButton):($(this._zoomButton,this._resetButton),this.options.zoomEnabled&&(this.zoomEnabled=!0,this.panEnabled=!1));this._processData();this.options.title&&(this.title=
new oa(this,this.options.title),this.title.dockInsidePlotArea?d.push(this.title):this.title.render());if(this.options.subtitles)for(this.subtitles=[],a=0;a<this.options.subtitles.length;a++)b=new xa(this,this.options.subtitles[a]),this.subtitles.push(b),b.dockInsidePlotArea?d.push(b):b.render();this.legend=new ya(this,this.options.legend);for(a=0;a<this.data.length;a++)(this.data[a].showInLegend||"pie"===this.data[a].type||"doughnut"===this.data[a].type)&&this.legend.dataSeries.push(this.data[a]);
this.legend.dockInsidePlotArea?d.push(this.legend):this.legend.render();if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)A.setLayoutAndRender(this.axisX,this.axisX2,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();else return;for(a=0;a<d.length;a++)d[a].render();var c=[];if(this.animatedRender){var f=ia(this.width,this.height);f.getContext("2d").drawImage(this.canvas,
0,0,this.width,this.height)}for(a=0;a<this.plotInfo.plotTypes.length;a++)for(var d=this.plotInfo.plotTypes[a],g=0;g<d.plotUnits.length;g++){var h=d.plotUnits[g],l=null;h.targetCanvas=null;this.animatedRender&&(h.targetCanvas=ia(this.width,this.height),h.targetCanvasCtx=h.targetCanvas.getContext("2d"));"line"===h.type?l=this.renderLine(h):"stepLine"===h.type?l=this.renderStepLine(h):"spline"===h.type?l=this.renderSpline(h):"column"===h.type?l=this.renderColumn(h):"bar"===h.type?l=this.renderBar(h):
"area"===h.type?l=this.renderArea(h):"stepArea"===h.type?l=this.renderStepArea(h):"splineArea"===h.type?l=this.renderSplineArea(h):"stackedColumn"===h.type?l=this.renderStackedColumn(h):"stackedColumn100"===h.type?l=this.renderStackedColumn100(h):"stackedBar"===h.type?l=this.renderStackedBar(h):"stackedBar100"===h.type?l=this.renderStackedBar100(h):"stackedArea"===h.type?l=this.renderStackedArea(h):"stackedArea100"===h.type?l=this.renderStackedArea100(h):"bubble"===h.type?l=l=this.renderBubble(h):
"scatter"===h.type?l=this.renderScatter(h):"pie"===h.type?this.renderPie(h):"doughnut"===h.type?this.renderPie(h):"candlestick"===h.type?l=this.renderCandlestick(h):"ohlc"===h.type?l=this.renderCandlestick(h):"rangeColumn"===h.type?l=this.renderRangeColumn(h):"rangeBar"===h.type?l=this.renderRangeBar(h):"rangeArea"===h.type?l=this.renderRangeArea(h):"rangeSplineArea"===h.type&&(l=this.renderRangeSplineArea(h));for(b=0;b<h.dataSeriesIndexes.length;b++)this._dataInRenderedOrder.push(this.data[h.dataSeriesIndexes[b]]);
this.animatedRender&&l&&c.push(l)}this.animatedRender&&0<this._indexLabels.length&&(a=ia(this.width,this.height).getContext("2d"),c.push(this.renderIndexLabels(a)));var k=this;0<c.length?(k.disableToolTip=!0,k._animator.animate(200,k.animationDuration,function(a){k.ctx.clearRect(0,0,k.width,k.height);k.ctx.drawImage(f,0,0,Math.floor(k.width*P),Math.floor(k.height*P),0,0,k.width,k.height);for(var b=0;b<c.length;b++)l=c[b],1>a&&"undefined"!==typeof l.startTimePercent?a>=l.startTimePercent&&l.animationCallback(l.easingFunction(a-
l.startTimePercent,0,1,1-l.startTimePercent),l):l.animationCallback(l.easingFunction(a,0,1,1),l);k.dispatchEvent("dataAnimationIterationEnd",{chart:k})},function(){c=[];for(var a=0;a<k.plotInfo.plotTypes.length;a++)for(var b=k.plotInfo.plotTypes[a],d=0;d<b.plotUnits.length;d++)b.plotUnits[d].targetCanvas=null;f=null;k.disableToolTip=!1})):(0<k._indexLabels.length&&k.renderIndexLabels(),k.dispatchEvent("dataAnimationIterationEnd",{chart:k}));this.attachPlotAreaEventHandlers();this.zoomEnabled||(this.panEnabled||
!this._zoomButton||"none"===this._zoomButton.style.display)||$(this._zoomButton,this._resetButton);this.toolTip._updateToolTip();this.renderCount++};z.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.zoomEnabled?"col-resize":"move",cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};z.prototype.categoriseDataSeries=function(){for(var a=
"",d=0;d<this.data.length;d++)if(a=this.data[d],a.dataPoints&&(0!==a.dataPoints.length&&a.visible)&&0<=z._supportedChartTypes.indexOf(a.type)){for(var b=null,c=!1,f=null,g=!1,h=0;h<this.plotInfo.plotTypes.length;h++)if(this.plotInfo.plotTypes[h].type===a.type){c=!0;b=this.plotInfo.plotTypes[h];break}c||(b={type:a.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(h=0;h<b.plotUnits.length;h++)if(b.plotUnits[h].axisYType===a.axisYType&&b.plotUnits[h].axisXType===a.axisXType&&
b.plotUnits[h].axisYIndex===a.axisYIndex&&b.plotUnits[h].axisXIndex===a.axisXIndex){g=!0;f=b.plotUnits[h];break}g||(f={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisXType:a.axisXType,axisYType:a.axisYType,axisYIndex:a.axisYIndex,axisXIndex:a.axisXIndex,axisY:"primary"===a.axisYType?this.axisY[0<=a.axisYIndex&&a.axisYIndex<this.axisY.length?a.axisYIndex:0]:this.axisY2[0<=a.axisYIndex&&a.axisYIndex<this.axisY2.length?a.axisYIndex:0],axisX:"primary"===a.axisXType?this.axisX[0<=
a.axisXIndex&&a.axisXIndex<this.axisX.length?a.axisXIndex:0]:this.axisX2[0<=a.axisXIndex&&a.axisXIndex<this.axisX2.length?a.axisXIndex:0],dataSeriesIndexes:[],yTotals:[]},b.plotUnits.push(f));b.totalDataSeries++;f.dataSeriesIndexes.push(d);a.plotUnit=f}for(d=0;d<this.plotInfo.plotTypes.length;d++)for(b=this.plotInfo.plotTypes[d],h=a=0;h<b.plotUnits.length;h++)b.plotUnits[h].previousDataSeriesCount=a,a+=b.plotUnits[h].dataSeriesIndexes.length};z.prototype.assignIdToDataPoints=function(){for(var a=
0;a<this.data.length;a++){var d=this.data[a];if(d.dataPoints)for(var b=d.dataPoints.length,c=0;c<b;c++)d.dataPointIds[c]=++this._eventManager.lastObjectId}};z.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var d=this.plotInfo.plotTypes[a],b=0;b<d.plotUnits.length;b++){var c=d.plotUnits[b];"line"===c.type||"stepLine"===c.type||"spline"===c.type||"column"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===
c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type?this._processMultiseriesPlotUnit(c):"stackedColumn"===c.type||"stackedBar"===c.type||"stackedArea"===c.type?this._processStackedPlotUnit(c):"stackedColumn100"===c.type||"stackedBar100"===c.type||"stackedArea100"===c.type?this._processStacked100PlotUnit(c):"candlestick"!==c.type&&"ohlc"!==c.type&&"rangeColumn"!==c.type&&"rangeBar"!==c.type&&"rangeArea"!==c.type&&"rangeSplineArea"!==c.type||this._processMultiYPlotUnit(c)}};z.prototype._processMultiseriesPlotUnit=
function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,f,g=!1,h=0;h<a.dataSeriesIndexes.length;h++){var l=this.data[a.dataSeriesIndexes[h]],k=0,n=!1,m=!1,p;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var e=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?
this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,r=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(l.dataPoints[k].x&&l.dataPoints[k].x.getTime||"dateTime"===l.xValueType)g=!0;for(k=0;k<l.dataPoints.length;k++){"undefined"===typeof l.dataPoints[k].x&&(l.dataPoints[k].x=k+(a.axisX.logarithmic?
1:0));l.dataPoints[k].x.getTime?(g=!0,c=l.dataPoints[k].x.getTime()):c=l.dataPoints[k].x;f=l.dataPoints[k].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);f<d.min&&(d.min=f);f>d.max&&(d.max=f);if(0<k){if(a.axisX.logarithmic){var q=c/l.dataPoints[k-1].x;1>q&&(q=1/q);b.minDiff>q&&1!==q&&(b.minDiff=q)}else q=c-l.dataPoints[k-1].x,0>q&&(q*=-1),b.minDiff>q&&0!==q&&(b.minDiff=q);null!==f&&null!==l.dataPoints[k-1].y&&(a.axisY.logarithmic?(q=f/l.dataPoints[k-1].y,1>q&&(q=1/q),d.minDiff>q&&1!==q&&(d.minDiff=q)):(q=
f-l.dataPoints[k-1].y,0>q&&(q*=-1),d.minDiff>q&&0!==q&&(d.minDiff=q)))}if(c<e&&!n)null!==f&&(p=c);else{if(!n&&(n=!0,0<k)){k-=2;continue}if(c>r&&!m)m=!0;else if(c>r&&m)continue;l.dataPoints[k].label&&(a.axisX.labels[c]=l.dataPoints[k].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===f?b.viewPortMin===c&&p<c&&(b.viewPortMin=p):(f<d.viewPortMin&&(d.viewPortMin=f),f>d.viewPortMax&&(d.viewPortMax=f))}}this.plotInfo.axisXValueType=l.xValueType=g?"dateTime":"number"}};
z.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,f,g=!1,h=[],l=[],k=Infinity,n=0;n<a.dataSeriesIndexes.length;n++){var m=this.data[a.dataSeriesIndexes[n]],p=0,e=!1,r=!1,q;if("normal"===m.axisPlacement||"xySwapped"===m.axisPlacement)var s=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:
this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,u=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(m.dataPoints[p].x&&m.dataPoints[p].x.getTime||"dateTime"===m.xValueType)g=!0;for(p=0;p<m.dataPoints.length;p++){"undefined"===typeof m.dataPoints[p].x&&
(m.dataPoints[p].x=p+(a.axisX.logarithmic?1:0));m.dataPoints[p].x.getTime?(g=!0,c=m.dataPoints[p].x.getTime()):c=m.dataPoints[p].x;x(m.dataPoints[p].y)?f=0:(f=m.dataPoints[p].y,0===n&&(k=Math.min(f,k)));c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<p){if(a.axisX.logarithmic){var w=c/m.dataPoints[p-1].x;1>w&&(w=1/w);b.minDiff>w&&1!==w&&(b.minDiff=w)}else w=c-m.dataPoints[p-1].x,0>w&&(w*=-1),b.minDiff>w&&0!==w&&(b.minDiff=w);null!==f&&null!==m.dataPoints[p-1].y&&(a.axisY.logarithmic?0<f&&(w=f/m.dataPoints[p-
1].y,1>w&&(w=1/w),d.minDiff>w&&1!==w&&(d.minDiff=w)):(w=f-m.dataPoints[p-1].y,0>w&&(w*=-1),d.minDiff>w&&0!==w&&(d.minDiff=w)))}if(c<s&&!e)null!==m.dataPoints[p].y&&(q=c);else{if(!e&&(e=!0,0<p)){p-=2;continue}if(c>u&&!r)r=!0;else if(c>u&&r)continue;m.dataPoints[p].label&&(a.axisX.labels[c]=m.dataPoints[p].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===m.dataPoints[p].y?b.viewPortMin===c&&q<c&&(b.viewPortMin=q):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+Math.abs(f),
0<=f?h[c]=h[c]?h[c]+f:f:l[c]=l[c]?l[c]+f:f)}}this.plotInfo.axisXValueType=m.xValueType=g?"dateTime":"number"}for(p in h)h.hasOwnProperty(p)&&!isNaN(p)&&(a=h[p],a<d.min&&(d.min=Math.min(a,k)),a>d.max&&(d.max=a),p<b.viewPortMin||p>b.viewPortMax||(a<d.viewPortMin&&(d.viewPortMin=Math.min(a,k)),a>d.viewPortMax&&(d.viewPortMax=a)));for(p in l)l.hasOwnProperty(p)&&!isNaN(p)&&(a=l[p],a<d.min&&(d.min=Math.min(a,k)),a>d.max&&(d.max=a),p<b.viewPortMin||p>b.viewPortMax||(a<d.viewPortMin&&(d.viewPortMin=Math.min(a,
k)),a>d.viewPortMax&&(d.viewPortMax=a)))}};z.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,f,g=!1,h=!1,l=!1,k=[],n=0;n<a.dataSeriesIndexes.length;n++){var m=this.data[a.dataSeriesIndexes[n]],p=0,e=!1,r=!1,q;if("normal"===m.axisPlacement||"xySwapped"===m.axisPlacement)var s=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?
this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,u=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(m.dataPoints[p].x&&m.dataPoints[p].x.getTime||"dateTime"===m.xValueType)g=!0;for(p=0;p<m.dataPoints.length;p++){"undefined"===
typeof m.dataPoints[p].x&&(m.dataPoints[p].x=p+(a.axisX.logarithmic?1:0));m.dataPoints[p].x.getTime?(g=!0,c=m.dataPoints[p].x.getTime()):c=m.dataPoints[p].x;f=x(m.dataPoints[p].y)?null:m.dataPoints[p].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<p){if(a.axisX.logarithmic){var w=c/m.dataPoints[p-1].x;1>w&&(w=1/w);b.minDiff>w&&1!==w&&(b.minDiff=w)}else w=c-m.dataPoints[p-1].x,0>w&&(w*=-1),b.minDiff>w&&0!==w&&(b.minDiff=w);x(f)||null===m.dataPoints[p-1].y||(a.axisY.logarithmic?0<f&&(w=f/m.dataPoints[p-
1].y,1>w&&(w=1/w),d.minDiff>w&&1!==w&&(d.minDiff=w)):(w=f-m.dataPoints[p-1].y,0>w&&(w*=-1),d.minDiff>w&&0!==w&&(d.minDiff=w)))}if(c<s&&!e)null!==f&&(q=c);else{if(!e&&(e=!0,0<p)){p-=2;continue}if(c>u&&!r)r=!0;else if(c>u&&r)continue;m.dataPoints[p].label&&(a.axisX.labels[c]=m.dataPoints[p].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===f?b.viewPortMin===c&&q<c&&(b.viewPortMin=q):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+Math.abs(f),0<=f?h=!0:0>f&&(l=!0),k[c]=
k[c]?k[c]+Math.abs(f):Math.abs(f))}}this.plotInfo.axisXValueType=m.xValueType=g?"dateTime":"number"}a.axisY.logarithmic?(d.max=x(d.viewPortMax)?99*Math.pow(a.axisY.logarithmBase,-0.05):Math.max(d.viewPortMax,99*Math.pow(a.axisY.logarithmBase,-0.05)),d.min=x(d.viewPortMin)?1:Math.min(d.viewPortMin,1)):h&&!l?(d.max=x(d.viewPortMax)?99:Math.max(d.viewPortMax,99),d.min=x(d.viewPortMin)?1:Math.min(d.viewPortMin,1)):h&&l?(d.max=x(d.viewPortMax)?99:Math.max(d.viewPortMax,99),d.min=x(d.viewPortMin)?-99:Math.min(d.viewPortMin,
-99)):!h&&l&&(d.max=x(d.viewPortMax)?-1:Math.max(d.viewPortMax,-1),d.min=x(d.viewPortMin)?-99:Math.min(d.viewPortMin,-99));d.viewPortMin=d.min;d.viewPortMax=d.max;a.dataPointYSums=k}};z.prototype._processMultiYPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,f,g,h,l=!1,k=0;k<a.dataSeriesIndexes.length;k++){var n=this.data[a.dataSeriesIndexes[k]],m=0,p=!1,e=!1,r,q,s;if("normal"===n.axisPlacement||"xySwapped"===n.axisPlacement)var u=
this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,w=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?
this.options.axisX.maximum:Infinity;if(n.dataPoints[m].x&&n.dataPoints[m].x.getTime||"dateTime"===n.xValueType)l=!0;for(m=0;m<n.dataPoints.length;m++){"undefined"===typeof n.dataPoints[m].x&&(n.dataPoints[m].x=m+(a.axisX.logarithmic?1:0));n.dataPoints[m].x.getTime?(l=!0,c=n.dataPoints[m].x.getTime()):c=n.dataPoints[m].x;if((f=n.dataPoints[m].y)&&f.length){g=Math.min.apply(null,f);h=Math.max.apply(null,f);q=!0;for(var y=0;y<f.length;y++)null===f.k&&(q=!1);q&&(p||(s=r),r=c)}c<b.min&&(b.min=c);c>b.max&&
(b.max=c);g<d.min&&(d.min=g);h>d.max&&(d.max=h);0<m&&(a.axisX.logarithmic?(q=c/n.dataPoints[m-1].x,1>q&&(q=1/q),b.minDiff>q&&1!==q&&(b.minDiff=q)):(q=c-n.dataPoints[m-1].x,0>q&&(q*=-1),b.minDiff>q&&0!==q&&(b.minDiff=q)),f&&(null!==f[0]&&n.dataPoints[m-1].y&&null!==n.dataPoints[m-1].y[0])&&(a.axisY.logarithmic?(q=f[0]/n.dataPoints[m-1].y[0],1>q&&(q=1/q),d.minDiff>q&&1!==q&&(d.minDiff=q)):(q=f[0]-n.dataPoints[m-1].y[0],0>q&&(q*=-1),d.minDiff>q&&0!==q&&(d.minDiff=q))));if(!(c<u)||p){if(!p&&(p=!0,0<m)){m-=
2;r=s;continue}if(c>w&&!e)e=!0;else if(c>w&&e)continue;n.dataPoints[m].label&&(a.axisX.labels[c]=n.dataPoints[m].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);if(b.viewPortMin===c&&f)for(y=0;y<f.length;y++)if(null===f[y]&&r<c){b.viewPortMin=r;break}null===f?b.viewPortMin===c&&r<c&&(b.viewPortMin=r):(g<d.viewPortMin&&(d.viewPortMin=g),h>d.viewPortMax&&(d.viewPortMax=h))}}this.plotInfo.axisXValueType=n.xValueType=l?"dateTime":"number"}};z.prototype.getDataPointAtXY=function(a,
d,b){b=b||!1;for(var c=[],f=this._dataInRenderedOrder.length-1;0<=f;f--){var g=null;(g=this._dataInRenderedOrder[f].getDataPointAtXY(a,d,b))&&c.push(g)}a=null;d=!1;for(b=0;b<c.length;b++)if("line"===c[b].dataSeries.type||"stepLine"===c[b].dataSeries.type||"area"===c[b].dataSeries.type||"stepArea"===c[b].dataSeries.type)if(f=S("markerSize",c[b].dataPoint,c[b].dataSeries)||8,c[b].distance<=f/2){d=!0;break}for(b=0;b<c.length;b++)d&&"line"!==c[b].dataSeries.type&&"stepLine"!==c[b].dataSeries.type&&"area"!==
c[b].dataSeries.type&&"stepArea"!==c[b].dataSeries.type||(a?c[b].distance<=a.distance&&(a=c[b]):a=c[b]);return a};z.prototype.getObjectAtXY=function(a,d,b){var c=null;if(b=this.getDataPointAtXY(a,d,b||!1))c=b.dataSeries.dataPointIds[b.dataPointIndex];else if(v)c=Ma(a,d,this._eventManager.ghostCtx);else for(b=0;b<this.legend.items.length;b++){var f=this.legend.items[b];a>=f.x1&&(a<=f.x2&&d>=f.y1&&d<=f.y2)&&(c=f.id)}return c};z.prototype.getAutoFontSize=function(a,d,b){a/=400;return Math.max(10,Math.round(Math.min(this.width,
this.height)*a))};z.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};z.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.width,this.height);this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))};z.prototype.attachEvent=function(a){this._events.push(a)};z.prototype._touchEventHandler=function(a){if(a.changedTouches&&this.interactivityEnabled){var d=[],b=a.changedTouches,c=b?b[0]:
a,f=null;switch(a.type){case "touchstart":case "MSPointerDown":d=["mousemove","mousedown"];this._lastTouchData=za(c);this._lastTouchData.time=new Date;break;case "touchmove":case "MSPointerMove":d=["mousemove"];break;case "touchend":case "MSPointerUp":d="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup","click"]:["mouseup"];break;default:return}if(!(b&&1<b.length)){f=za(c);f.time=new Date;try{var g=f.y-this._lastTouchData.y,h=f.time-this._lastTouchData.time;
if(15<Math.abs(g)&&(this._lastTouchData.scroll||200>h)){this._lastTouchData.scroll=!0;var l=window.parent||window;l&&l.scrollBy&&l.scrollBy(0,-g)}}catch(k){}this._lastTouchEventType=a.type;if(this._lastTouchData.scroll&&this.zoomEnabled)this.isDrag&&this.resetOverlayedCanvas(),this.isDrag=!1;else for(b=0;b<d.length;b++)f=d[b],g=document.createEvent("MouseEvent"),g.initMouseEvent(f,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),c.target.dispatchEvent(g),a.preventManipulation&&
a.preventManipulation(),a.preventDefault&&a.preventDefault()}}};z.prototype._dispatchRangeEvent=function(a,d){var b={chart:this};b.type=a;b.trigger=d;var c=[];this.axisX&&0<this.axisX.length&&c.push("axisX");this.axisX2&&0<this.axisX2.length&&c.push("axisX2");this.axisY&&0<this.axisY.length&&c.push("axisY");this.axisY2&&0<this.axisY2.length&&c.push("axisY2");for(var f=0;f<c.length;f++)if(x(b[c[f]])&&(b[c[f]]=[]),"axisY"===c[f])for(var g=0;g<this.axisY.length;g++)b[c[f]].push({viewportMinimum:this[c[f]][g].sessionVariables.newViewportMinimum,
viewportMaximum:this[c[f]][g].sessionVariables.newViewportMaximum});else if("axisY2"===c[f])for(g=0;g<this.axisY2.length;g++)b[c[f]].push({viewportMinimum:this[c[f]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[f]][g].sessionVariables.newViewportMaximum});else if("axisX"===c[f])for(g=0;g<this.axisX.length;g++)b[c[f]].push({viewportMinimum:this[c[f]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[f]][g].sessionVariables.newViewportMaximum});else if("axisX2"===c[f])for(g=
0;g<this.axisX2.length;g++)b[c[f]].push({viewportMinimum:this[c[f]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[f]][g].sessionVariables.newViewportMaximum});this.dispatchEvent(a,b,this)};z.prototype._mouseEventHandler=function(a){"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var d=za(a),b=a.type,c,f;a.which?f=3==a.which:a.button&&(f=2==a.button);z.capturedEventParam&&(c=z.capturedEventParam,"mouseup"===b&&(z.capturedEventParam=null,c.chart.overlaidCanvas.releaseCapture?
c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",c.chart._mouseEventHandler,!1)),c.hasOwnProperty(b)&&("mouseup"!==b||c.chart.overlaidCanvas.releaseCapture?a.target===c.chart.overlaidCanvas&&c[b].call(c.context,d.x,d.y):a.target!==c.chart.overlaidCanvas&&(c.chart.isDrag=!1)));if(this.interactivityEnabled)if(this._ignoreNextEvent)this._ignoreNextEvent=!1;else if(a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault(),!f){if(!z.capturedEventParam&&
this._events){for(var g=0;g<this._events.length;g++)if(this._events[g].hasOwnProperty(b))if(c=this._events[g],f=c.bounds,d.x>=f.x1&&d.x<=f.x2&&d.y>=f.y1&&d.y<=f.y2){c[b].call(c.context,d.x,d.y);"mousedown"===b&&!0===c.capture?(z.capturedEventParam=c,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.documentElement.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===b&&(c.chart.overlaidCanvas.releaseCapture?c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",
this._mouseEventHandler,!1));break}else c=null;a.target.style.cursor=c&&c.cursor?c.cursor:this._defaultCursor}b=this.plotArea;if(d.x<b.x1||d.x>b.x2||d.y<b.y1||d.y>b.y2)this.toolTip&&this.toolTip.enabled?this.toolTip.hide():this.resetOverlayedCanvas();this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}};z.prototype._plotAreaMouseDown=function(a,d){this.isDrag=!0;this.dragStartPoint={x:a,y:d}};z.prototype._plotAreaMouseUp=function(a,d){if(("normal"===this.plotInfo.axisPlacement||
"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var b=d-this.dragStartPoint.y,c=a-this.dragStartPoint.x,f=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),h=!1;this.resetOverlayedCanvas();if("xySwapped"===this.plotInfo.axisPlacement)var l=g,g=f,f=l;if(this.panEnabled||this.zoomEnabled){if(this.panEnabled)for(f=g=0;f<this._axes.length;f++)b=this._axes[f],b.logarithmic?b.viewportMinimum<b.minimum?(g=b.minimum/b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum*
g,b.sessionVariables.newViewportMaximum=b.viewportMaximum*g,h=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum/b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum/g,b.sessionVariables.newViewportMaximum=b.viewportMaximum/g,h=!0):b.viewportMinimum<b.minimum?(g=b.minimum-b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum+g,b.sessionVariables.newViewportMaximum=b.viewportMaximum+g,h=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum-b.maximum,b.sessionVariables.newViewportMinimum=
b.viewportMinimum-g,b.sessionVariables.newViewportMaximum=b.viewportMaximum-g,h=!0);else if((!f||2<Math.abs(c))&&(!g||2<Math.abs(b))&&this.zoomEnabled){if(!this.dragStartPoint)return;b=f?this.dragStartPoint.x:this.plotArea.x1;c=g?this.dragStartPoint.y:this.plotArea.y1;f=f?a:this.plotArea.x2;g=g?d:this.plotArea.y2;2<Math.abs(b-f)&&2<Math.abs(c-g)&&this._zoomPanToSelectedRegion(b,c,f,g)&&(h=!0)}h&&(this._ignoreNextEvent=!0,this._dispatchRangeEvent("rangeChanging","zoom"),this.render(),this._dispatchRangeEvent("rangeChanged",
"zoom"),h&&(this.zoomEnabled&&"none"===this._zoomButton.style.display)&&(va(this._zoomButton,this._resetButton),Z(this,this._zoomButton,"pan"),Z(this,this._resetButton,"reset")))}}this.isDrag=!1};z.prototype._plotAreaMouseMove=function(a,d){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var b=0,c=0,f=b=null,f=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),h=this;"xySwapped"===this.plotInfo.axisPlacement&&(b=g,g=f,f=b);b=this.dragStartPoint.x-a;c=this.dragStartPoint.y-d;2<Math.abs(b)&&
8>Math.abs(b)&&(this.panEnabled||this.zoomEnabled)?this.toolTip.hide():this.panEnabled||this.zoomEnabled||this.toolTip.mouseMoveHandler(a,d);if((!f||2<Math.abs(b)||!g||2<Math.abs(c))&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled)f={x1:f?this.plotArea.x1+b:this.plotArea.x1,y1:g?this.plotArea.y1+c:this.plotArea.y1,x2:f?this.plotArea.x2+b:this.plotArea.x2,y2:g?this.plotArea.y2+c:this.plotArea.y2},clearTimeout(h._panTimerId),h._panTimerId=setTimeout(function(b,c,e,f){return function(){h._zoomPanToSelectedRegion(b,
c,e,f,!0)&&(h._dispatchRangeEvent("rangeChanging","pan"),h.render(),h._dispatchRangeEvent("rangeChanged","pan"),h.dragStartPoint.x=a,h.dragStartPoint.y=d)}}(f.x1,f.y1,f.x2,f.y2),0);else if(this.zoomEnabled){this.resetOverlayedCanvas();b=this.overlaidCanvasCtx.globalAlpha;this.overlaidCanvasCtx.fillStyle="#A89896";var c=f?this.dragStartPoint.x:this.plotArea.x1,l=g?this.dragStartPoint.y:this.plotArea.y1,k=f?a-this.dragStartPoint.x:this.plotArea.x2-this.plotArea.x1,n=g?d-this.dragStartPoint.y:this.plotArea.y2-
this.plotArea.y1;this.validateRegion(c,l,f?a:this.plotArea.x2-this.plotArea.x1,g?d:this.plotArea.y2-this.plotArea.y1,"xy"!==this.zoomType).isValid&&(this.resetOverlayedCanvas(),this.overlaidCanvasCtx.fillStyle="#99B2B5");this.overlaidCanvasCtx.globalAlpha=0.7;this.overlaidCanvasCtx.fillRect(c,l,k,n);this.overlaidCanvasCtx.globalAlpha=b}}else this.toolTip.mouseMoveHandler(a,d)};z.prototype._zoomPanToSelectedRegion=function(a,d,b,c,f){a=this.validateRegion(a,d,b,c,f);d=a.axesWithValidRange;b=a.axesRanges;
if(a.isValid)for(c=0;c<d.length;c++)f=b[c],d[c].setViewPortRange(f.val1,f.val2);return a.isValid};z.prototype.validateRegion=function(a,d,b,c,f){f=f||!1;for(var g=0<=this.zoomType.indexOf("x"),h=0<=this.zoomType.indexOf("y"),l=!1,k=[],n=[],m=[],p=0;p<this.axisX.length;p++)this.axisX[p]&&g&&n.push(this.axisX[p]);for(p=0;p<this.axisX2.length;p++)this.axisX2[p]&&g&&n.push(this.axisX2[p]);for(p=0;p<this.axisY.length;p++)this.axisY[p]&&h&&n.push(this.axisY[p]);for(p=0;p<this.axisY2.length;p++)this.axisY2[p]&&
h&&n.push(this.axisY2[p]);for(g=0;g<n.length;g++){var h=n[g],p=h.convertPixelToValue({x:a,y:d}),e=h.convertPixelToValue({x:b,y:c});if(p>e)var r=e,e=p,p=r;if(isFinite(h.dataInfo.minDiff))if(!(h.logarithmic&&e/p<Math.pow(h.dataInfo.minDiff,3)||!h.logarithmic&&Math.abs(e-p)<3*Math.abs(h.dataInfo.minDiff)||p<h.minimum||e>h.maximum))k.push(h),m.push({val1:p,val2:e}),l=!0;else if(!f){l=!1;break}}return{isValid:l,axesWithValidRange:k,axesRanges:m}};z.prototype.preparePlotArea=function(){var a=this.plotArea;
!v&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);if((this.axisX[0]||this.axisX2[0])&&(this.axisY[0]||this.axisY2[0])){var d=this.axisX[0]?this.axisX[0].lineCoordinates:this.axisX2[0].lineCoordinates;if(this.axisY&&0<this.axisY.length&&this.axisY[0]){var b=this.axisY[0];a.x1=d.x1<d.x2?d.x1:b.lineCoordinates.x1;a.y1=d.y1<b.lineCoordinates.y1?d.y1:b.lineCoordinates.y1;a.x2=d.x2>b.lineCoordinates.x2?d.x2:b.lineCoordinates.x2;a.y2=d.y2>d.y1?d.y2:b.lineCoordinates.y2;a.width=a.x2-a.x1;a.height=a.y2-a.y1}this.axisY2&&
0<this.axisY2.length&&this.axisY2[0]&&(b=this.axisY2[0],a.x1=d.x1<d.x2?d.x1:b.lineCoordinates.x1,a.y1=d.y1<b.lineCoordinates.y1?d.y1:b.lineCoordinates.y1,a.x2=d.x2>b.lineCoordinates.x2?d.x2:b.lineCoordinates.x2,a.y2=d.y2>d.y1?d.y2:b.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1)}else d=this.layoutManager.getFreeSpace(),a.x1=d.x1,a.x2=d.x2,a.y1=d.y1,a.y2=d.y2,a.width=d.width,a.height=d.height;v||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=
a.y1+"px",(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1));a.layoutManager=new la(a.x1,a.y1,a.x2,a.y2,2)};z.prototype.renderIndexLabels=function(a){var d=a||this.plotArea.ctx,b=this.plotArea,c=0,f=0,g=0,h=0,l=c=h=f=g=0,k=0;for(a=0;a<this._indexLabels.length;a++){var n=this._indexLabels[a],m=n.chartType.toLowerCase(),p,e,l=S("indexLabelFontColor",n.dataPoint,n.dataSeries),k=S("indexLabelFontSize",n.dataPoint,n.dataSeries);p=S("indexLabelFontFamily",n.dataPoint,n.dataSeries);e=S("indexLabelFontStyle",
n.dataPoint,n.dataSeries);var h=S("indexLabelFontWeight",n.dataPoint,n.dataSeries),r=S("indexLabelBackgroundColor",n.dataPoint,n.dataSeries),f=S("indexLabelMaxWidth",n.dataPoint,n.dataSeries),g=S("indexLabelWrap",n.dataPoint,n.dataSeries),q=S("indexLabelLineDashType",n.dataPoint,n.dataSeries),s=S("indexLabelLineColor",n.dataPoint,n.dataSeries),u=x(n.dataPoint.indexLabelLineThickness)?x(n.dataSeries.options.indexLabelLineThickness)?0:n.dataSeries.options.indexLabelLineThickness:n.dataPoint.indexLabelLineThickness,
c=0<u?Math.min(10,("normal"===this.plotInfo.axisPlacement?this.plotArea.height:this.plotArea.width)<<0):0,w={percent:null,total:null},y=null;if(0<=n.dataSeries.type.indexOf("stacked")||"pie"===n.dataSeries.type||"doughnut"===n.dataSeries.type)w=this.getPercentAndTotal(n.dataSeries,n.dataPoint);if(n.dataSeries.indexLabelFormatter||n.dataPoint.indexLabelFormatter)y={chart:this,dataSeries:n.dataSeries,dataPoint:n.dataPoint,index:n.indexKeyword,total:w.total,percent:w.percent};var t=n.dataPoint.indexLabelFormatter?
n.dataPoint.indexLabelFormatter(y):n.dataPoint.indexLabel?this.replaceKeywordsWithValue(n.dataPoint.indexLabel,n.dataPoint,n.dataSeries,null,n.indexKeyword):n.dataSeries.indexLabelFormatter?n.dataSeries.indexLabelFormatter(y):n.dataSeries.indexLabel?this.replaceKeywordsWithValue(n.dataSeries.indexLabel,n.dataPoint,n.dataSeries,null,n.indexKeyword):null;if(null!==t&&""!==t){var w=S("indexLabelPlacement",n.dataPoint,n.dataSeries),y=S("indexLabelOrientation",n.dataPoint,n.dataSeries),C=n.direction,aa=
n.dataSeries.axisX,ca=n.dataSeries.axisY,z=!1,r=new X(d,{x:0,y:0,maxWidth:f?f:0.5*this.width,maxHeight:g?5*k:1.5*k,angle:"horizontal"===y?0:-90,text:t,padding:0,backgroundColor:r,horizontalAlign:"left",fontSize:k,fontFamily:p,fontWeight:h,fontColor:l,fontStyle:e,textBaseline:"top"});r.measureText();n.dataSeries.indexLabelMaxWidth=r.maxWidth;if(0<=m.indexOf("line")||0<=m.indexOf("area")||0<=m.indexOf("bubble")||0<=m.indexOf("scatter")){if(n.dataPoint.x<aa.viewportMinimum||n.dataPoint.x>aa.viewportMaximum||
n.dataPoint.y<ca.viewportMinimum||n.dataPoint.y>ca.viewportMaximum)continue}else if(0<=m.indexOf("column")){if(n.dataPoint.x<aa.viewportMinimum||n.dataPoint.x>aa.viewportMaximum||n.bounds.y1>b.y2||n.bounds.y2<b.y1)continue}else if(0<=m.indexOf("bar")){if(n.dataPoint.x<aa.viewportMinimum||n.dataPoint.x>aa.viewportMaximum||n.bounds.x1>b.x2||n.bounds.x2<b.x1)continue}else if(n.dataPoint.x<aa.viewportMinimum||n.dataPoint.x>aa.viewportMaximum)continue;f=h=2;"horizontal"===y?(l=r.width,k=r.height):(k=r.width,
l=r.height);if("normal"===this.plotInfo.axisPlacement){if(0<=m.indexOf("line")||0<=m.indexOf("area"))w="auto",h=4;else if(0<=m.indexOf("stacked"))"auto"===w&&(w="inside");else if("bubble"===m||"scatter"===m)w="inside";p=n.point.x-l/2;"inside"!==w?(f=b.y1,g=b.y2,0<C?(e=n.point.y-k-h-c,e<f&&(e="auto"===w?Math.max(n.point.y,f)+h+c:f+h+c,z=e+k>n.point.y)):(e=n.point.y+h+c,e>g-k-h-c&&(e="auto"===w?Math.min(n.point.y,g)-k-h-c:g-k-h-c,z=e<n.point.y))):(f=Math.max(n.bounds.y1,b.y1),g=Math.min(n.bounds.y2,
b.y2),c=0<=m.indexOf("range")?0<C?Math.max(n.bounds.y1,b.y1)+k/2+h:Math.min(n.bounds.y2,b.y2)-k/2-h:(Math.max(n.bounds.y1,b.y1)+Math.min(n.bounds.y2,b.y2))/2,0<C?(e=Math.max(n.point.y,c)-k/2,e<f&&("bubble"===m||"scatter"===m)&&(e=Math.max(n.point.y-k-h,b.y1+h))):(e=Math.min(n.point.y,c)-k/2,e>g-k-h&&("bubble"===m||"scatter"===m)&&(e=Math.min(n.point.y+h,b.y2-k-h))),e=Math.min(e,g-k))}else 0<=m.indexOf("line")||0<=m.indexOf("area")||0<=m.indexOf("scatter")?(w="auto",f=4):0<=m.indexOf("stacked")?"auto"===
w&&(w="inside"):"bubble"===m&&(w="inside"),e=n.point.y-k/2,"inside"!==w?(h=b.x1,g=b.x2,0>C?(p=n.point.x-l-f-c,p<h&&(p="auto"===w?Math.max(n.point.x,h)+f+c:h+f+c,z=p+l>n.point.x)):(p=n.point.x+f+c,p>g-l-f-c&&(p="auto"===w?Math.min(n.point.x,g)-l-f-c:g-l-f-c,z=p<n.point.x))):(h=Math.max(n.bounds.x1,b.x1),Math.min(n.bounds.x2,b.x2),c=0<=m.indexOf("range")?0>C?Math.max(n.bounds.x1,b.x1)+l/2+f:Math.min(n.bounds.x2,b.x2)-l/2-f:(Math.max(n.bounds.x1,b.x1)+Math.min(n.bounds.x2,b.x2))/2,p=0>C?Math.max(n.point.x,
c)-l/2:Math.min(n.point.x,c)-l/2,p=Math.max(p,h));"vertical"===y&&(e+=k);r.x=p;r.y=e;r.render(!0);u&&("inside"!==w&&(0>m.indexOf("bar")&&n.point.x>b.x1&&n.point.x<b.x2||!z)&&(0>m.indexOf("column")&&n.point.y>b.y1&&n.point.y<b.y2||!z))&&(d.lineWidth=u,d.strokeStyle=s?s:"gray",d.setLineDash&&d.setLineDash(F(q,u)),d.beginPath(),d.moveTo(n.point.x,n.point.y),0<=m.indexOf("bar")?d.lineTo(p+(0<n.direction?0:l),e+("horizontal"===y?k:-k)/2):0<=m.indexOf("column")?d.lineTo(p+l/2,e+((0<n.direction?k:-k)+("horizontal"===
y?k:-k))/2):d.lineTo(p+l/2,e+((e<n.point.y?k:-k)+("horizontal"===y?k:-k))/2),d.stroke())}}d={source:d,dest:this.plotArea.ctx,animationCallback:E.fadeInAnimation,easingFunction:E.easing.easeInQuad,animationBase:0,startTimePercent:0.7};for(a=0;a<this._indexLabels.length;a++)n=this._indexLabels[a],r=S("indexLabelBackgroundColor",n.dataPoint,n.dataSeries),n.dataSeries.indexLabelBackgroundColor=x(r)?v?"transparent":null:r;return d};z.prototype.renderLine=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;
if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;d.save();var c=this.plotArea;d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();for(var c=[],f=null,g=0;g<a.dataSeriesIndexes.length;g++){var h=a.dataSeriesIndexes[g],l=this.data[h];d.lineWidth=l.lineThickness;var k=l.dataPoints,n="solid";if(d.setLineDash){var m=F(l.nullDataLineDashType,l.lineThickness),n=l.lineDashType,p=F(n,l.lineThickness);d.setLineDash(p)}var e=l.id;this._eventManager.objectMap[e]={objectType:"dataSeries",
dataSeriesIndex:h};e=D(e);b.strokeStyle=e;b.lineWidth=0<l.lineThickness?Math.max(l.lineThickness,4):0;var e=l._colorSet,r=e=l.lineColor=l.options.lineColor?l.options.lineColor:e[0];d.strokeStyle=e;var q=!0,s=0,u,w;d.beginPath();if(0<k.length){for(var y=!1,s=0;s<k.length;s++)if(u=k[s].x.getTime?k[s].x.getTime():k[s].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&(!l.connectNullData||!y)))if("number"!==typeof k[s].y)0<s&&!(l.connectNullData||y||q)&&(d.stroke(),v&&b.stroke()),y=
!0;else{u=a.axisX.convertValueToPixel(u);w=a.axisY.convertValueToPixel(k[s].y);var t=l.dataPointIds[s];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:s,x1:u,y1:w};q||y?(!q&&l.connectNullData?(d.setLineDash&&(l.options.nullDataLineDashType||n===l.lineDashType&&l.lineDashType!==l.nullDataLineDashType)&&(d.stroke(),n=l.nullDataLineDashType,d.setLineDash(m)),d.lineTo(u,w),v&&b.lineTo(u,w)):(d.beginPath(),d.moveTo(u,w),v&&(b.beginPath(),b.moveTo(u,w))),y=
q=!1):(d.lineTo(u,w),v&&b.lineTo(u,w),0==s%500&&(d.stroke(),d.beginPath(),d.moveTo(u,w),v&&(b.stroke(),b.beginPath(),b.moveTo(u,w))));s<k.length-1&&(r!==(k[s].lineColor||e)||n!==(k[s].lineDashType||l.lineDashType))&&(d.stroke(),d.beginPath(),d.moveTo(u,w),r=k[s].lineColor||e,d.strokeStyle=r,d.setLineDash&&(k[s].lineDashType?(n=k[s].lineDashType,d.setLineDash(F(n,l.lineThickness))):(n=l.lineDashType,d.setLineDash(p))));if(0<k[s].markerSize||0<l.markerSize){var C=l.getMarkerProperties(s,u,w,d),f=C.color;
c.push(C);t=D(t);v&&c.push({x:u,y:w,ctx:b,type:C.type,size:C.size,color:t,borderColor:t,borderThickness:C.borderThickness})}(k[s].indexLabel||l.indexLabel||k[s].indexLabelFormatter||l.indexLabelFormatter)&&this._indexLabels.push({chartType:"line",dataPoint:k[s],dataSeries:l,point:{x:u,y:w},direction:0>k[s].y===a.axisY.reversed?1:-1,color:e})}d.stroke();v&&b.stroke()}}O.drawMarkers(c);l.markerColor=f;d.restore();d.beginPath();v&&b.beginPath();return{source:d,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,
easingFunction:E.easing.linear,animationBase:0}}};z.prototype.renderStepLine=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;d.save();var c=this.plotArea;d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();for(var c=[],f=null,g=0;g<a.dataSeriesIndexes.length;g++){var h=a.dataSeriesIndexes[g],l=this.data[h];d.lineWidth=l.lineThickness;var k=l.dataPoints,n="solid";if(d.setLineDash){var m=F(l.nullDataLineDashType,l.lineThickness),
n=l.lineDashType,p=F(n,l.lineThickness);d.setLineDash(p)}var e=l.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:h};e=D(e);b.strokeStyle=e;b.lineWidth=0<l.lineThickness?Math.max(l.lineThickness,4):0;var e=l._colorSet,r=e=l.lineColor=l.options.lineColor?l.options.lineColor:e[0];d.strokeStyle=e;var q=!0,s=0,u,w;d.beginPath();if(0<k.length){for(var y=!1,s=0;s<k.length;s++)if(u=k[s].getTime?k[s].x.getTime():k[s].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&
(!l.connectNullData||!y)))if("number"!==typeof k[s].y)0<s&&!(l.connectNullData||y||q)&&(d.stroke(),v&&b.stroke()),y=!0;else{var t=w;u=a.axisX.convertValueToPixel(u);w=a.axisY.convertValueToPixel(k[s].y);var C=l.dataPointIds[s];this._eventManager.objectMap[C]={id:C,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:s,x1:u,y1:w};q||y?(!q&&l.connectNullData?(d.setLineDash&&(l.options.nullDataLineDashType||n===l.lineDashType&&l.lineDashType!==l.nullDataLineDashType)&&(d.stroke(),n=l.nullDataLineDashType,
d.setLineDash(m)),d.lineTo(u,t),d.lineTo(u,w),v&&(b.lineTo(u,t),b.lineTo(u,w))):(d.beginPath(),d.moveTo(u,w),v&&(b.beginPath(),b.moveTo(u,w))),y=q=!1):(d.lineTo(u,t),v&&b.lineTo(u,t),d.lineTo(u,w),v&&b.lineTo(u,w),0==s%500&&(d.stroke(),d.beginPath(),d.moveTo(u,w),v&&(b.stroke(),b.beginPath(),b.moveTo(u,w))));s<k.length-1&&(r!==(k[s].lineColor||e)||n!==(k[s].lineDashType||l.lineDashType))&&(d.stroke(),d.beginPath(),d.moveTo(u,w),r=k[s].lineColor||e,d.strokeStyle=r,d.setLineDash&&(k[s].lineDashType?
(n=k[s].lineDashType,d.setLineDash(F(n,l.lineThickness))):(n=l.lineDashType,d.setLineDash(p))));if(0<k[s].markerSize||0<l.markerSize)t=l.getMarkerProperties(s,u,w,d),f=t.color,c.push(t),C=D(C),v&&c.push({x:u,y:w,ctx:b,type:t.type,size:t.size,color:C,borderColor:C,borderThickness:t.borderThickness});(k[s].indexLabel||l.indexLabel||k[s].indexLabelFormatter||l.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepLine",dataPoint:k[s],dataSeries:l,point:{x:u,y:w},direction:0>k[s].y===a.axisY.reversed?
1:-1,color:e})}d.stroke();v&&b.stroke()}}O.drawMarkers(c);l.markerColor=f;d.restore();d.beginPath();v&&b.beginPath();return{source:d,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,easingFunction:E.easing.linear,animationBase:0}}};z.prototype.renderSpline=function(a){function d(a){a=wa(a,2);if(0<a.length){b.beginPath();v&&c.beginPath();b.moveTo(a[0].x,a[0].y);a[0].newStrokeStyle&&(b.strokeStyle=a[0].newStrokeStyle);a[0].newLineDashArray&&b.setLineDash(a[0].newLineDashArray);v&&c.moveTo(a[0].x,
a[0].y);for(var d=0;d<a.length-3;d+=3)if(b.bezierCurveTo(a[d+1].x,a[d+1].y,a[d+2].x,a[d+2].y,a[d+3].x,a[d+3].y),v&&c.bezierCurveTo(a[d+1].x,a[d+1].y,a[d+2].x,a[d+2].y,a[d+3].x,a[d+3].y),0<d&&0===d%3E3||a[d+3].newStrokeStyle||a[d+3].newLineDashArray)b.stroke(),b.beginPath(),b.moveTo(a[d+3].x,a[d+3].y),a[d+3].newStrokeStyle&&(b.strokeStyle=a[d+3].newStrokeStyle),a[d+3].newLineDashArray&&b.setLineDash(a[d+3].newLineDashArray),v&&(c.stroke(),c.beginPath(),c.moveTo(a[d+3].x,a[d+3].y));b.stroke();v&&c.stroke()}}
var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();var f=this.plotArea;b.beginPath();b.rect(f.x1,f.y1,f.width,f.height);b.clip();for(var f=[],g=null,h=0;h<a.dataSeriesIndexes.length;h++){var l=a.dataSeriesIndexes[h],k=this.data[l];b.lineWidth=k.lineThickness;var n=k.dataPoints,m="solid";if(b.setLineDash){var p=F(k.nullDataLineDashType,k.lineThickness),m=k.lineDashType,e=F(m,k.lineThickness);b.setLineDash(e)}var r=k.id;this._eventManager.objectMap[r]=
{objectType:"dataSeries",dataSeriesIndex:l};r=D(r);c.strokeStyle=r;c.lineWidth=0<k.lineThickness?Math.max(k.lineThickness,4):0;var r=k._colorSet,q=r=k.lineColor=k.options.lineColor?k.options.lineColor:r[0];b.strokeStyle=r;var s=0,u,w,y=[];b.beginPath();if(0<n.length)for(w=!1,s=0;s<n.length;s++)if(u=n[s].getTime?n[s].x.getTime():n[s].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!w)))if("number"!==typeof n[s].y)0<s&&!w&&(k.connectNullData?b.setLineDash&&(0<
y.length&&(k.options.nullDataLineDashType||!n[s-1].lineDashType))&&(y[y.length-1].newLineDashArray=p,m=k.nullDataLineDashType):(d(y),y=[])),w=!0;else{u=a.axisX.convertValueToPixel(u);w=a.axisY.convertValueToPixel(n[s].y);var t=k.dataPointIds[s];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:s,x1:u,y1:w};y[y.length]={x:u,y:w};s<n.length-1&&(q!==(n[s].lineColor||r)||m!==(n[s].lineDashType||k.lineDashType))&&(q=n[s].lineColor||r,y[y.length-1].newStrokeStyle=
q,b.setLineDash&&(n[s].lineDashType?(m=n[s].lineDashType,y[y.length-1].newLineDashArray=F(m,k.lineThickness)):(m=k.lineDashType,y[y.length-1].newLineDashArray=e)));if(0<n[s].markerSize||0<k.markerSize){var C=k.getMarkerProperties(s,u,w,b),g=C.color;f.push(C);t=D(t);v&&f.push({x:u,y:w,ctx:c,type:C.type,size:C.size,color:t,borderColor:t,borderThickness:C.borderThickness})}(n[s].indexLabel||k.indexLabel||n[s].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"spline",dataPoint:n[s],
dataSeries:k,point:{x:u,y:w},direction:0>n[s].y===a.axisY.reversed?1:-1,color:r});w=!1}d(y)}O.drawMarkers(f);k.markerColor=g;b.restore();b.beginPath();v&&c.beginPath();return{source:b,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,easingFunction:E.easing.linear,animationBase:0}}};var R=function(a,d,b,c,f,g,h,l,k,n,m,p,e){"undefined"===typeof e&&(e=1);h=h||0;l=l||"black";var r=15<c-d&&15<f-b?8:0.35*Math.min(c-d,f-b);a.beginPath();a.moveTo(d,b);a.save();a.fillStyle=g;a.globalAlpha=e;a.fillRect(d,
b,c-d,f-b);a.globalAlpha=1;0<h&&(e=0===h%2?0:0.5,a.beginPath(),a.lineWidth=h,a.strokeStyle=l,a.moveTo(d,b),a.rect(d-e,b-e,c-d+2*e,f-b+2*e),a.stroke());a.restore();!0===k&&(a.save(),a.beginPath(),a.moveTo(d,b),a.lineTo(d+r,b+r),a.lineTo(c-r,b+r),a.lineTo(c,b),a.closePath(),h=a.createLinearGradient((c+d)/2,b+r,(c+d)/2,b),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=h,a.fill(),a.restore());!0===n&&(a.save(),a.beginPath(),a.moveTo(d,f),a.lineTo(d+r,f-r),a.lineTo(c-r,f-r),
a.lineTo(c,f),a.closePath(),h=a.createLinearGradient((c+d)/2,f-r,(c+d)/2,f),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=h,a.fill(),a.restore());!0===m&&(a.save(),a.beginPath(),a.moveTo(d,b),a.lineTo(d+r,b+r),a.lineTo(d+r,f-r),a.lineTo(d,f),a.closePath(),h=a.createLinearGradient(d+r,(f+b)/2,d,(f+b)/2),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=h,a.fill(),a.restore());!0===p&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c-r,b+r),a.lineTo(c-
r,f-r),a.lineTo(c,f),h=a.createLinearGradient(c-r,(f+b)/2,c,(f+b)/2),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=h,h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=h,a.fill(),a.closePath(),a.restore())};z.prototype.renderColumn=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,c=this.plotArea,f=0,g,h,l,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),f=this.dataPointMinWidth=
this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,n=this.dataPointMaxWidth=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0,m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.range));m=this.dataPointWidth=this.dataPointWidth?this.dataPointWidth:0.9*(c.width*(a.axisX.logarithmic?Math.log(m)/Math.log(a.axisX.range):Math.abs(m)/Math.abs(a.axisX.range))/
a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&f>n&&(f=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,n));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&n<f)&&(n=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,f));m<f&&(m=f);m>n&&(m=n);d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());
for(c=0;c<a.dataSeriesIndexes.length;c++){var n=a.dataSeriesIndexes[c],p=this.data[n],e=p.dataPoints;if(0<e.length)for(var r=5<m&&p.bevelEnabled?!0:!1,f=0;f<e.length;f++)if(e[f].getTime?l=e[f].x.getTime():l=e[f].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&"number"===typeof e[f].y){g=a.axisX.convertValueToPixel(l);h=a.axisY.convertValueToPixel(e[f].y);g=a.axisX.reversed?g+a.plotType.totalDataSeries*m/2-(a.previousDataSeriesCount+c)*m<<0:g-a.plotType.totalDataSeries*m/2+(a.previousDataSeriesCount+
c)*m<<0;var q=a.axisX.reversed?g-m<<0:g+m<<0,s;0<=e[f].y?s=k:(s=h,h=k);h>s&&(b=h,h=s,s=b);b=e[f].color?e[f].color:p._colorSet[f%p._colorSet.length];R(d,g,h,q,s,b,0,null,r&&0<=e[f].y,0>e[f].y&&r,!1,!1,p.fillOpacity);b=p.dataPointIds[f];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:f,x1:g,y1:h,x2:q,y2:s};b=D(b);v&&R(this._eventManager.ghostCtx,g,h,q,s,b,0,null,!1,!1,!1,!1);(e[f].indexLabel||p.indexLabel||e[f].indexLabelFormatter||p.indexLabelFormatter)&&
this._indexLabels.push({chartType:"column",dataPoint:e[f],dataSeries:p,point:{x:g+(q-g)/2,y:0>e[f].y===a.axisY.reversed?h:s},direction:0>e[f].y===a.axisY.reversed?1:-1,bounds:{x1:g,y1:Math.min(h,s),x2:q,y2:Math.max(h,s)},color:b})}}d.restore();v&&this._eventManager.ghostCtx.restore();a=Math.min(k,a.axisY.bounds.y2);return{source:d,dest:this.plotArea.ctx,animationCallback:E.yScaleAnimation,easingFunction:E.easing.easeOutQuart,animationBase:a}}};z.prototype.renderStackedColumn=function(a){var d=a.targetCanvasCtx||
this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,c=this.plotArea,f=[],g=[],h=[],l=0,k,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),l=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,m=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.width<<0,p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));p=this.dataPointWidth?this.dataPointWidth:0.9*(c.width*
(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&l>m&&(l=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&m<l)&&(m=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,l));p<l&&(p=l);p>m&&(p=m);d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),
this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(m=0;m<a.dataSeriesIndexes.length;m++){var e=a.dataSeriesIndexes[m],r=this.data[e],q=r.dataPoints;if(0<q.length){var s=5<p&&r.bevelEnabled?!0:!1;d.strokeStyle="#4572A7 ";for(l=0;l<q.length;l++)if(b=q[l].x.getTime?q[l].x.getTime():q[l].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof q[l].y){var c=a.axisX.convertValueToPixel(b),u=c-a.plotType.plotUnits.length*p/
2+a.index*p<<0,w=u+p<<0,y;if(a.axisY.logarithmic)h[b]=q[l].y+(h[b]?h[b]:0),0<h[b]&&(k=a.axisY.convertValueToPixel(h[b]),y=f[b]?f[b]:n,f[b]=k);else if(k=a.axisY.convertValueToPixel(q[l].y),0<=q[l].y){var t=f[b]?f[b]:0;k-=t;y=n-t;f[b]=t+(y-k)}else t=g[b]?g[b]:0,y=k+t,k=n+t,g[b]=t+(y-k);b=q[l].color?q[l].color:r._colorSet[l%r._colorSet.length];R(d,u,k,w,y,b,0,null,s&&0<=q[l].y,0>q[l].y&&s,!1,!1,r.fillOpacity);b=r.dataPointIds[l];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:e,
dataPointIndex:l,x1:u,y1:k,x2:w,y2:y};b=D(b);v&&R(this._eventManager.ghostCtx,u,k,w,y,b,0,null,!1,!1,!1,!1);(q[l].indexLabel||r.indexLabel||q[l].indexLabelFormatter||r.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:q[l],dataSeries:r,point:{x:c,y:0<=q[l].y?k:y},direction:0>q[l].y===a.axisY.reversed?1:-1,bounds:{x1:u,y1:Math.min(k,y),x2:w,y2:Math.max(k,y)},color:b})}}}d.restore();v&&this._eventManager.ghostCtx.restore();a=Math.min(n,a.axisY.bounds.y2);return{source:d,
dest:this.plotArea.ctx,animationCallback:E.yScaleAnimation,easingFunction:E.easing.easeOutQuart,animationBase:a}}};z.prototype.renderStackedColumn100=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,c=this.plotArea,f=[],g=[],h=[],l=0,k,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),l=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,m=this.dataPointMaxWidth?this.dataPointMaxWidth:
this.dataPointWidth?this.dataPointWidth:0.15*this.width<<0,p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));p=this.dataPointWidth?this.dataPointWidth:0.9*(c.width*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&l>m&&(l=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&m<l)&&(m=Math.max(this.dataPointWidth?this.dataPointWidth:
-Infinity,l));p<l&&(p=l);p>m&&(p=m);d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(m=0;m<a.dataSeriesIndexes.length;m++){var e=a.dataSeriesIndexes[m],r=this.data[e],q=r.dataPoints;if(0<q.length)for(var s=5<p&&r.bevelEnabled?!0:!1,l=0;l<q.length;l++)if(b=q[l].x.getTime?q[l].x.getTime():q[l].x,!(b<a.axisX.dataInfo.viewPortMin||
b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof q[l].y){c=a.axisX.convertValueToPixel(b);k=0!==a.dataPointYSums[b]?100*(q[l].y/a.dataPointYSums[b]):0;var u=c-a.plotType.plotUnits.length*p/2+a.index*p<<0,w=u+p<<0,y;if(a.axisY.logarithmic){h[b]=k+(h[b]?h[b]:0);if(0>=h[b])continue;k=a.axisY.convertValueToPixel(h[b]);y=f[b]?f[b]:n;f[b]=k}else if(k=a.axisY.convertValueToPixel(k),0<=q[l].y){var t=f[b]?f[b]:0;k-=t;y=n-t;f[b]=t+(y-k)}else t=g[b]?g[b]:0,y=k+t,k=n+t,g[b]=t+(y-k);b=q[l].color?q[l].color:
r._colorSet[l%r._colorSet.length];R(d,u,k,w,y,b,0,null,s&&0<=q[l].y,0>q[l].y&&s,!1,!1,r.fillOpacity);b=r.dataPointIds[l];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:e,dataPointIndex:l,x1:u,y1:k,x2:w,y2:y};b=D(b);v&&R(this._eventManager.ghostCtx,u,k,w,y,b,0,null,!1,!1,!1,!1);(q[l].indexLabel||r.indexLabel||q[l].indexLabelFormatter||r.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn100",dataPoint:q[l],dataSeries:r,point:{x:c,y:0<=q[l].y?k:y},direction:0>
q[l].y===a.axisY.reversed?1:-1,bounds:{x1:u,y1:Math.min(k,y),x2:w,y2:Math.max(k,y)},color:b})}}d.restore();v&&this._eventManager.ghostCtx.restore();a=Math.min(n,a.axisY.bounds.y2);return{source:d,dest:this.plotArea.ctx,animationCallback:E.yScaleAnimation,easingFunction:E.easing.easeOutQuart,animationBase:a}}};z.prototype.renderBar=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,c=this.plotArea,f=0,g,h,l,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?
a.axisY.viewportMinimum:0),f=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,n=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0,m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.range));m=this.dataPointWidth?this.dataPointWidth:0.9*(c.height*(a.axisX.logarithmic?Math.log(m)/Math.log(a.axisX.range):Math.abs(m)/Math.abs(a.axisX.range))/
a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&f>n&&(f=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,n));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&n<f)&&(n=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,f));m<f&&(m=f);m>n&&(m=n);d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());
for(c=0;c<a.dataSeriesIndexes.length;c++){var n=a.dataSeriesIndexes[c],p=this.data[n],e=p.dataPoints;if(0<e.length){var r=5<m&&p.bevelEnabled?!0:!1;d.strokeStyle="#4572A7 ";for(f=0;f<e.length;f++)if(e[f].getTime?l=e[f].x.getTime():l=e[f].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&"number"===typeof e[f].y){h=a.axisX.convertValueToPixel(l);g=a.axisY.convertValueToPixel(e[f].y);h=a.axisX.reversed?h+a.plotType.totalDataSeries*m/2-(a.previousDataSeriesCount+c)*m<<0:h-a.plotType.totalDataSeries*
m/2+(a.previousDataSeriesCount+c)*m<<0;var q=a.axisX.reversed?h-m<<0:h+m<<0,s;0<=e[f].y?s=k:(s=g,g=k);b=e[f].color?e[f].color:p._colorSet[f%p._colorSet.length];R(d,s,h,g,q,b,0,null,r,!1,!1,!1,p.fillOpacity);b=p.dataPointIds[f];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:f,x1:s,y1:h,x2:g,y2:q};b=D(b);v&&R(this._eventManager.ghostCtx,s,h,g,q,b,0,null,!1,!1,!1,!1);(e[f].indexLabel||p.indexLabel||e[f].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"bar",
dataPoint:e[f],dataSeries:p,point:{x:0<=e[f].y?g:s,y:h+(q-h)/2},direction:0>e[f].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(s,g),y1:h,x2:Math.max(s,g),y2:q},color:b})}}}d.restore();v&&this._eventManager.ghostCtx.restore();a=Math.max(k,a.axisX.bounds.x2);return{source:d,dest:this.plotArea.ctx,animationCallback:E.xScaleAnimation,easingFunction:E.easing.easeOutQuart,animationBase:a}}};z.prototype.renderStackedBar=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=
null,c=this.plotArea,f=[],g=[],h=[],l=0,k,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),l=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,m=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0,p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));p=this.dataPointWidth?this.dataPointWidth:0.9*(c.height*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):
Math.abs(p)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&l>m&&(l=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&m<l)&&(m=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,l));p<l&&(p=l);p>m&&(p=m);d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,
c.height),this._eventManager.ghostCtx.clip());for(m=0;m<a.dataSeriesIndexes.length;m++){var e=a.dataSeriesIndexes[m],r=this.data[e],q=r.dataPoints;if(0<q.length){var s=5<p&&r.bevelEnabled?!0:!1;d.strokeStyle="#4572A7 ";for(l=0;l<q.length;l++)if(b=q[l].x.getTime?q[l].x.getTime():q[l].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof q[l].y){var c=a.axisX.convertValueToPixel(b),u=c-a.plotType.plotUnits.length*p/2+a.index*p<<0,w=u+p<<0,y;if(a.axisY.logarithmic)h[b]=
q[l].y+(h[b]?h[b]:0),0<h[b]&&(y=f[b]?f[b]:n,f[b]=k=a.axisY.convertValueToPixel(h[b]));else if(k=a.axisY.convertValueToPixel(q[l].y),0<=q[l].y){var t=f[b]?f[b]:0;y=n+t;k+=t;f[b]=t+(k-y)}else t=g[b]?g[b]:0,y=k-t,k=n-t,g[b]=t+(k-y);b=q[l].color?q[l].color:r._colorSet[l%r._colorSet.length];R(d,y,u,k,w,b,0,null,s,!1,!1,!1,r.fillOpacity);b=r.dataPointIds[l];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:e,dataPointIndex:l,x1:y,y1:u,x2:k,y2:w};b=D(b);v&&R(this._eventManager.ghostCtx,
y,u,k,w,b,0,null,!1,!1,!1,!1);(q[l].indexLabel||r.indexLabel||q[l].indexLabelFormatter||r.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar",dataPoint:q[l],dataSeries:r,point:{x:0<=q[l].y?k:y,y:c},direction:0>q[l].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(y,k),y1:u,x2:Math.max(y,k),y2:w},color:b})}}}d.restore();v&&this._eventManager.ghostCtx.restore();a=Math.max(n,a.axisX.bounds.x2);return{source:d,dest:this.plotArea.ctx,animationCallback:E.xScaleAnimation,easingFunction:E.easing.easeOutQuart,
animationBase:a}}};z.prototype.renderStackedBar100=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,c=this.plotArea,f=[],g=[],h=[],l=0,k,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),l=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,m=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0,p=a.axisX.dataInfo.minDiff;isFinite(p)||
(p=0.3*Math.abs(a.axisX.range));p=this.dataPointWidth?this.dataPointWidth:0.9*(c.height*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&l>m&&(l=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&m<l)&&(m=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,l));p<l&&(p=l);p>m&&(p=m);d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();
d.rect(c.x1,c.y1,c.width,c.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(m=0;m<a.dataSeriesIndexes.length;m++){var e=a.dataSeriesIndexes[m],r=this.data[e],q=r.dataPoints;if(0<q.length){var s=5<p&&r.bevelEnabled?!0:!1;d.strokeStyle="#4572A7 ";for(l=0;l<q.length;l++)if(b=q[l].x.getTime?q[l].x.getTime():q[l].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===
typeof q[l].y){var c=a.axisX.convertValueToPixel(b),u;u=0!==a.dataPointYSums[b]?100*(q[l].y/a.dataPointYSums[b]):0;var w=c-a.plotType.plotUnits.length*p/2+a.index*p<<0,y=w+p<<0;if(a.axisY.logarithmic){h[b]=u+(h[b]?h[b]:0);if(0>=h[b])continue;u=f[b]?f[b]:n;f[b]=k=a.axisY.convertValueToPixel(h[b])}else if(k=a.axisY.convertValueToPixel(u),0<=q[l].y){var t=f[b]?f[b]:0;u=n+t;k+=t;f[b]=t+(k-u)}else t=g[b]?g[b]:0,u=k-t,k=n-t,g[b]=t+(k-u);b=q[l].color?q[l].color:r._colorSet[l%r._colorSet.length];R(d,u,w,
k,y,b,0,null,s,!1,!1,!1,r.fillOpacity);b=r.dataPointIds[l];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:e,dataPointIndex:l,x1:u,y1:w,x2:k,y2:y};b=D(b);v&&R(this._eventManager.ghostCtx,u,w,k,y,b,0,null,!1,!1,!1,!1);(q[l].indexLabel||r.indexLabel||q[l].indexLabelFormatter||r.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar100",dataPoint:q[l],dataSeries:r,point:{x:0<=q[l].y?k:u,y:c},direction:0>q[l].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(u,k),
y1:w,x2:Math.max(u,k),y2:y},color:b})}}}d.restore();v&&this._eventManager.ghostCtx.restore();a=Math.max(n,a.axisX.bounds.x2);return{source:d,dest:this.plotArea.ctx,animationCallback:E.xScaleAnimation,easingFunction:E.easing.easeOutQuart,animationBase:a}}};z.prototype.renderArea=function(a){function d(){t&&(0<m.lineThickness&&b.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?y=w:0>a.axisY.viewportMaximum?y=g.y1:0<a.axisY.viewportMinimum&&(y=f.y2),b.lineTo(q,y),
b.lineTo(t.x,y),b.closePath(),b.globalAlpha=m.fillOpacity,b.fill(),b.globalAlpha=1,v&&(c.lineTo(q,y),c.lineTo(t.x,y),c.closePath(),c.fill()),b.beginPath(),b.moveTo(q,s),c.beginPath(),c.moveTo(q,s),t={x:q,y:s})}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx,f=a.axisX.lineCoordinates,g=a.axisY.lineCoordinates,h=[],l=null,k=this.plotArea;b.save();v&&c.save();b.beginPath();b.rect(k.x1,k.y1,k.width,k.height);b.clip();v&&(c.beginPath(),
c.rect(k.x1,k.y1,k.width,k.height),c.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var n=a.dataSeriesIndexes[k],m=this.data[n],p=m.dataPoints,h=m.id;this._eventManager.objectMap[h]={objectType:"dataSeries",dataSeriesIndex:n};h=D(h);c.fillStyle=h;var h=[],e=!0,r=0,q,s,u,w=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),y,t=null;if(0<p.length){var C=m._colorSet[r%m._colorSet.length],x=m.lineColor=m.options.lineColor||C,ca=x;b.fillStyle=C;b.strokeStyle=x;b.lineWidth=m.lineThickness;
var z="solid";if(b.setLineDash){var A=F(m.nullDataLineDashType,m.lineThickness),z=m.lineDashType,K=F(z,m.lineThickness);b.setLineDash(K)}for(var I=!0;r<p.length;r++)if(u=p[r].x.getTime?p[r].x.getTime():p[r].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&(!m.connectNullData||!I)))if("number"!==typeof p[r].y)m.connectNullData||(I||e)||d(),I=!0;else{q=a.axisX.convertValueToPixel(u);s=a.axisY.convertValueToPixel(p[r].y);e||I?(!e&&m.connectNullData?(b.setLineDash&&(m.options.nullDataLineDashType||
z===m.lineDashType&&m.lineDashType!==m.nullDataLineDashType)&&(b.stroke(),z=m.nullDataLineDashType,b.setLineDash(A)),b.lineTo(q,s),v&&c.lineTo(q,s)):(b.beginPath(),b.moveTo(q,s),v&&(c.beginPath(),c.moveTo(q,s)),t={x:q,y:s}),I=e=!1):(b.lineTo(q,s),v&&c.lineTo(q,s),0==r%250&&d());r<p.length-1&&(ca!==(p[r].lineColor||x)||z!==(p[r].lineDashType||m.lineDashType))&&(d(),ca=p[r].lineColor||x,b.strokeStyle=ca,b.setLineDash&&(p[r].lineDashType?(z=p[r].lineDashType,b.setLineDash(F(z,m.lineThickness))):(z=m.lineDashType,
b.setLineDash(K))));var G=m.dataPointIds[r];this._eventManager.objectMap[G]={id:G,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:r,x1:q,y1:s};0!==p[r].markerSize&&(0<p[r].markerSize||0<m.markerSize)&&(u=m.getMarkerProperties(r,q,s,b),l=u.color,h.push(u),G=D(G),v&&h.push({x:q,y:s,ctx:c,type:u.type,size:u.size,color:G,borderColor:G,borderThickness:u.borderThickness}));(p[r].indexLabel||m.indexLabel||p[r].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"area",
dataPoint:p[r],dataSeries:m,point:{x:q,y:s},direction:0>p[r].y===a.axisY.reversed?1:-1,color:C})}d();O.drawMarkers(h);m.markerColor=l}}b.restore();v&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,easingFunction:E.easing.linear,animationBase:0}}};z.prototype.renderSplineArea=function(a){function d(){var d=wa(y,2);if(0<d.length){if(0<m.lineThickness){b.beginPath();b.moveTo(d[0].x,d[0].y);d[0].newStrokeStyle&&(b.strokeStyle=d[0].newStrokeStyle);
d[0].newLineDashArray&&b.setLineDash(d[0].newLineDashArray);for(var e=0;e<d.length-3;e+=3)if(b.bezierCurveTo(d[e+1].x,d[e+1].y,d[e+2].x,d[e+2].y,d[e+3].x,d[e+3].y),v&&c.bezierCurveTo(d[e+1].x,d[e+1].y,d[e+2].x,d[e+2].y,d[e+3].x,d[e+3].y),d[e+3].newStrokeStyle||d[e+3].newLineDashArray)b.stroke(),b.beginPath(),b.moveTo(d[e+3].x,d[e+3].y),d[e+3].newStrokeStyle&&(b.strokeStyle=d[e+3].newStrokeStyle),d[e+3].newLineDashArray&&b.setLineDash(d[e+3].newLineDashArray);b.stroke()}b.beginPath();b.moveTo(d[0].x,
d[0].y);v&&(c.beginPath(),c.moveTo(d[0].x,d[0].y));for(e=0;e<d.length-3;e+=3)b.bezierCurveTo(d[e+1].x,d[e+1].y,d[e+2].x,d[e+2].y,d[e+3].x,d[e+3].y),v&&c.bezierCurveTo(d[e+1].x,d[e+1].y,d[e+2].x,d[e+2].y,d[e+3].x,d[e+3].y);a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?u=s:0>a.axisY.viewportMaximum?u=g.y1:0<a.axisY.viewportMinimum&&(u=f.y2);w={x:d[0].x,y:d[0].y};b.lineTo(d[d.length-1].x,u);b.lineTo(w.x,u);b.closePath();b.globalAlpha=m.fillOpacity;b.fill();b.globalAlpha=
1;v&&(c.lineTo(d[d.length-1].x,u),c.lineTo(w.x,u),c.closePath(),c.fill())}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx,f=a.axisX.lineCoordinates,g=a.axisY.lineCoordinates,h=[],l=null,k=this.plotArea;b.save();v&&c.save();b.beginPath();b.rect(k.x1,k.y1,k.width,k.height);b.clip();v&&(c.beginPath(),c.rect(k.x1,k.y1,k.width,k.height),c.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var n=a.dataSeriesIndexes[k],m=this.data[n],p=m.dataPoints,
h=m.id;this._eventManager.objectMap[h]={objectType:"dataSeries",dataSeriesIndex:n};h=D(h);c.fillStyle=h;var h=[],e=0,r,q,s=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),u,w=null,y=[];if(0<p.length){var t=m._colorSet[e%m._colorSet.length],C=m.lineColor=m.options.lineColor||t,x=C;b.fillStyle=t;b.strokeStyle=C;b.lineWidth=m.lineThickness;var z="solid";if(b.setLineDash){var A=F(m.nullDataLineDashType,m.lineThickness),z=m.lineDashType,Q=F(z,m.lineThickness);b.setLineDash(Q)}for(q=
!1;e<p.length;e++)if(r=p[e].x.getTime?p[e].x.getTime():p[e].x,!(r<a.axisX.dataInfo.viewPortMin||r>a.axisX.dataInfo.viewPortMax&&(!m.connectNullData||!q)))if("number"!==typeof p[e].y)0<e&&!q&&(m.connectNullData?b.setLineDash&&(0<y.length&&(m.options.nullDataLineDashType||!p[e-1].lineDashType))&&(y[y.length-1].newLineDashArray=A,z=m.nullDataLineDashType):(d(),y=[])),q=!0;else{r=a.axisX.convertValueToPixel(r);q=a.axisY.convertValueToPixel(p[e].y);var K=m.dataPointIds[e];this._eventManager.objectMap[K]=
{id:K,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:e,x1:r,y1:q};y[y.length]={x:r,y:q};e<p.length-1&&(x!==(p[e].lineColor||C)||z!==(p[e].lineDashType||m.lineDashType))&&(x=p[e].lineColor||C,y[y.length-1].newStrokeStyle=x,b.setLineDash&&(p[e].lineDashType?(z=p[e].lineDashType,y[y.length-1].newLineDashArray=F(z,m.lineThickness)):(z=m.lineDashType,y[y.length-1].newLineDashArray=Q)));if(0!==p[e].markerSize&&(0<p[e].markerSize||0<m.markerSize)){var I=m.getMarkerProperties(e,r,q,b),l=I.color;
h.push(I);K=D(K);v&&h.push({x:r,y:q,ctx:c,type:I.type,size:I.size,color:K,borderColor:K,borderThickness:I.borderThickness})}(p[e].indexLabel||m.indexLabel||p[e].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"splineArea",dataPoint:p[e],dataSeries:m,point:{x:r,y:q},direction:0>p[e].y===a.axisY.reversed?1:-1,color:t});q=!1}d();O.drawMarkers(h);m.markerColor=l}}b.restore();v&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,
easingFunction:E.easing.linear,animationBase:0}}};z.prototype.renderStepArea=function(a){function d(){t&&(0<m.lineThickness&&b.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?y=w:0>a.axisY.viewportMaximum?y=g.y1:0<a.axisY.viewportMinimum&&(y=f.y2),b.lineTo(q,y),b.lineTo(t.x,y),b.closePath(),b.globalAlpha=m.fillOpacity,b.fill(),b.globalAlpha=1,v&&(c.lineTo(q,y),c.lineTo(t.x,y),c.closePath(),c.fill()),b.beginPath(),b.moveTo(q,s),c.beginPath(),c.moveTo(q,s),t={x:q,
y:s})}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx,f=a.axisX.lineCoordinates,g=a.axisY.lineCoordinates,h=[],l=null,k=this.plotArea;b.save();v&&c.save();b.beginPath();b.rect(k.x1,k.y1,k.width,k.height);b.clip();v&&(c.beginPath(),c.rect(k.x1,k.y1,k.width,k.height),c.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var n=a.dataSeriesIndexes[k],m=this.data[n],p=m.dataPoints,h=m.id;this._eventManager.objectMap[h]={objectType:"dataSeries",
dataSeriesIndex:n};h=D(h);c.fillStyle=h;var h=[],e=!0,r=0,q,s,u,w=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),y,t=null,C=!1;if(0<p.length){var x=m._colorSet[r%m._colorSet.length],z=m.lineColor=m.options.lineColor||x,A=z;b.fillStyle=x;b.strokeStyle=z;b.lineWidth=m.lineThickness;var Q="solid";if(b.setLineDash){var K=F(m.nullDataLineDashType,m.lineThickness),Q=m.lineDashType,I=F(Q,m.lineThickness);b.setLineDash(I)}for(;r<p.length;r++)if(u=p[r].x.getTime?p[r].x.getTime():
p[r].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&(!m.connectNullData||!C))){var G=s;"number"!==typeof p[r].y?(m.connectNullData||(C||e)||d(),C=!0):(q=a.axisX.convertValueToPixel(u),s=a.axisY.convertValueToPixel(p[r].y),e||C?(!e&&m.connectNullData?(b.setLineDash&&(m.options.nullDataLineDashType||Q===m.lineDashType&&m.lineDashType!==m.nullDataLineDashType)&&(b.stroke(),Q=m.nullDataLineDashType,b.setLineDash(K)),b.lineTo(q,G),b.lineTo(q,s),v&&(c.lineTo(q,G),c.lineTo(q,s))):(b.beginPath(),
b.moveTo(q,s),v&&(c.beginPath(),c.moveTo(q,s)),t={x:q,y:s}),C=e=!1):(b.lineTo(q,G),v&&c.lineTo(q,G),b.lineTo(q,s),v&&c.lineTo(q,s),0==r%250&&d()),r<p.length-1&&(A!==(p[r].lineColor||z)||Q!==(p[r].lineDashType||m.lineDashType))&&(d(),A=p[r].lineColor||z,b.strokeStyle=A,b.setLineDash&&(p[r].lineDashType?(Q=p[r].lineDashType,b.setLineDash(F(Q,m.lineThickness))):(Q=m.lineDashType,b.setLineDash(I)))),G=m.dataPointIds[r],this._eventManager.objectMap[G]={id:G,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:r,
x1:q,y1:s},0!==p[r].markerSize&&(0<p[r].markerSize||0<m.markerSize)&&(u=m.getMarkerProperties(r,q,s,b),l=u.color,h.push(u),G=D(G),v&&h.push({x:q,y:s,ctx:c,type:u.type,size:u.size,color:G,borderColor:G,borderThickness:u.borderThickness})),(p[r].indexLabel||m.indexLabel||p[r].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepArea",dataPoint:p[r],dataSeries:m,point:{x:q,y:s},direction:0>p[r].y===a.axisY.reversed?1:-1,color:x}))}d();O.drawMarkers(h);m.markerColor=l}}b.restore();
v&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,easingFunction:E.easing.linear,animationBase:0}}};z.prototype.renderStackedArea=function(a){function d(){if(!(1>k.length)){for(0<t.lineThickness&&b.stroke();0<k.length;){var a=k.pop();b.lineTo(a.x,a.y);v&&u.lineTo(a.x,a.y)}b.closePath();b.globalAlpha=t.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();v&&(u.closePath(),u.fill(),u.beginPath());k=[]}}var b=a.targetCanvasCtx||this.plotArea.ctx;
if(!(0>=a.dataSeriesIndexes.length)){var c=null,f=[],g=null,h=this.plotArea,l=[],k=[],n=[],m=[],p=0,e,r,q,s=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),u=this._eventManager.ghostCtx;v&&u.beginPath();b.save();v&&u.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();v&&(u.beginPath(),u.rect(h.x1,h.y1,h.width,h.height),u.clip());for(var w=[],h=0;h<a.dataSeriesIndexes.length;h++){var y=a.dataSeriesIndexes[h],t=this.data[y],C=t.dataPoints;t.dataPointIndexes=
[];for(p=0;p<C.length;p++)y=C[p].x.getTime?C[p].x.getTime():C[p].x,t.dataPointIndexes[y]=p,w[y]||(n.push(y),w[y]=!0);n.sort(Aa)}for(h=0;h<a.dataSeriesIndexes.length;h++){y=a.dataSeriesIndexes[h];t=this.data[y];C=t.dataPoints;w=!0;k=[];p=t.id;this._eventManager.objectMap[p]={objectType:"dataSeries",dataSeriesIndex:y};p=D(p);u.fillStyle=p;if(0<n.length){var c=t._colorSet[0],x=t.lineColor=t.options.lineColor||c,z=x;b.fillStyle=c;b.strokeStyle=x;b.lineWidth=t.lineThickness;var A="solid";if(b.setLineDash){var Q=
F(t.nullDataLineDashType,t.lineThickness),A=t.lineDashType,K=F(A,t.lineThickness);b.setLineDash(K)}for(var I=!0,p=0;p<n.length;p++){q=n[p];var G=null,G=0<=t.dataPointIndexes[q]?C[t.dataPointIndexes[q]]:{x:q,y:null};if(!(q<a.axisX.dataInfo.viewPortMin||q>a.axisX.dataInfo.viewPortMax&&(!t.connectNullData||!I)))if("number"!==typeof G.y)t.connectNullData||(I||w)||d(),I=!0;else{e=a.axisX.convertValueToPixel(q);var ga=l[q]?l[q]:0;if(a.axisY.logarithmic){m[q]=G.y+(m[q]?m[q]:0);if(0>=m[q])continue;r=a.axisY.convertValueToPixel(m[q])}else r=
a.axisY.convertValueToPixel(G.y),r-=ga;k.push({x:e,y:s-ga});l[q]=s-r;w||I?(!w&&t.connectNullData?(b.setLineDash&&(t.options.nullDataLineDashType||A===t.lineDashType&&t.lineDashType!==t.nullDataLineDashType)&&(b.stroke(),A=t.nullDataLineDashType,b.setLineDash(Q)),b.lineTo(e,r),v&&u.lineTo(e,r)):(b.beginPath(),b.moveTo(e,r),v&&(u.beginPath(),u.moveTo(e,r))),I=w=!1):(b.lineTo(e,r),v&&u.lineTo(e,r),0==p%250&&(d(),b.moveTo(e,r),v&&u.moveTo(e,r),k.push({x:e,y:s-ga})));p<C.length-1&&(z!==(C[p].lineColor||
x)||A!==(C[p].lineDashType||t.lineDashType))&&(d(),b.beginPath(),b.moveTo(e,r),k.push({x:e,y:s-ga}),z=C[p].lineColor||x,b.strokeStyle=z,b.setLineDash&&(C[p].lineDashType?(A=C[p].lineDashType,b.setLineDash(F(A,t.lineThickness))):(A=t.lineDashType,b.setLineDash(K))));if(0<=t.dataPointIndexes[q]){var ha=t.dataPointIds[t.dataPointIndexes[q]];this._eventManager.objectMap[ha]={id:ha,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:t.dataPointIndexes[q],x1:e,y1:r}}0<=t.dataPointIndexes[q]&&0!==G.markerSize&&
(0<G.markerSize||0<t.markerSize)&&(q=t.getMarkerProperties(p,e,r,b),g=q.color,f.push(q),markerColor=D(ha),v&&f.push({x:e,y:r,ctx:u,type:q.type,size:q.size,color:markerColor,borderColor:markerColor,borderThickness:q.borderThickness}));(G.indexLabel||t.indexLabel||G.indexLabelFormatter||t.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:G,dataSeries:t,point:{x:e,y:r},direction:0>C[p].y===a.axisY.reversed?1:-1,color:c})}}d();b.moveTo(e,r);v&&u.moveTo(e,r)}delete t.dataPointIndexes;
t.markerColor=g}O.drawMarkers(f);b.restore();v&&u.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,easingFunction:E.easing.linear,animationBase:0}}};z.prototype.renderStackedArea100=function(a){function d(){for(0<t.lineThickness&&b.stroke();0<k.length;){var a=k.pop();b.lineTo(a.x,a.y);v&&u.lineTo(a.x,a.y)}b.closePath();b.globalAlpha=t.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();v&&(u.closePath(),u.fill(),u.beginPath());k=[]}var b=a.targetCanvasCtx||this.plotArea.ctx;
if(!(0>=a.dataSeriesIndexes.length)){var c=null,f=this.plotArea,g=[],h=null,l=[],k=[],n=[],m=[],p=0,e,r,q,s=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),u=this._eventManager.ghostCtx;b.save();v&&u.save();b.beginPath();b.rect(f.x1,f.y1,f.width,f.height);b.clip();v&&(u.beginPath(),u.rect(f.x1,f.y1,f.width,f.height),u.clip());for(var w=[],f=0;f<a.dataSeriesIndexes.length;f++){var y=a.dataSeriesIndexes[f],t=this.data[y],x=t.dataPoints;t.dataPointIndexes=[];for(p=0;p<x.length;p++)y=
x[p].x.getTime?x[p].x.getTime():x[p].x,t.dataPointIndexes[y]=p,w[y]||(n.push(y),w[y]=!0);n.sort(Aa)}for(f=0;f<a.dataSeriesIndexes.length;f++){y=a.dataSeriesIndexes[f];t=this.data[y];x=t.dataPoints;w=!0;c=t.id;this._eventManager.objectMap[c]={objectType:"dataSeries",dataSeriesIndex:y};c=D(c);u.fillStyle=c;k=[];if(0<n.length){var c=t._colorSet[p%t._colorSet.length],z=t.lineColor=t.options.lineColor||c,A=z;b.fillStyle=c;b.strokeStyle=z;b.lineWidth=t.lineThickness;var T="solid";if(b.setLineDash){var Q=
F(t.nullDataLineDashType,t.lineThickness),T=t.lineDashType,K=F(T,t.lineThickness);b.setLineDash(K)}for(var I=!0,p=0;p<n.length;p++){q=n[p];var G=null,G=0<=t.dataPointIndexes[q]?x[t.dataPointIndexes[q]]:{x:q,y:null};if(!(q<a.axisX.dataInfo.viewPortMin||q>a.axisX.dataInfo.viewPortMax&&(!t.connectNullData||!I)))if("number"!==typeof G.y)t.connectNullData||(I||w)||d(),I=!0;else{var ga;ga=0!==a.dataPointYSums[q]?100*(G.y/a.dataPointYSums[q]):0;e=a.axisX.convertValueToPixel(q);var ha=l[q]?l[q]:0;if(a.axisY.logarithmic){m[q]=
ga+(m[q]?m[q]:0);if(0>=m[q])continue;r=a.axisY.convertValueToPixel(m[q])}else r=a.axisY.convertValueToPixel(ga),r-=ha;k.push({x:e,y:s-ha});l[q]=s-r;w||I?(!w&&t.connectNullData?(b.setLineDash&&(t.options.nullDataLineDashType||T===t.lineDashType&&t.lineDashType!==t.nullDataLineDashType)&&(b.stroke(),T=t.nullDataLineDashType,b.setLineDash(Q)),b.lineTo(e,r),v&&u.lineTo(e,r)):(b.beginPath(),b.moveTo(e,r),v&&(u.beginPath(),u.moveTo(e,r))),I=w=!1):(b.lineTo(e,r),v&&u.lineTo(e,r),0==p%250&&(d(),b.moveTo(e,
r),v&&u.moveTo(e,r),k.push({x:e,y:s-ha})));p<x.length-1&&(A!==(x[p].lineColor||z)||T!==(x[p].lineDashType||t.lineDashType))&&(d(),b.beginPath(),b.moveTo(e,r),k.push({x:e,y:s-ha}),A=x[p].lineColor||z,b.strokeStyle=A,b.setLineDash&&(x[p].lineDashType?(T=x[p].lineDashType,b.setLineDash(F(T,t.lineThickness))):(T=t.lineDashType,b.setLineDash(K))));if(0<=t.dataPointIndexes[q]){var Ga=t.dataPointIds[t.dataPointIndexes[q]];this._eventManager.objectMap[Ga]={id:Ga,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:t.dataPointIndexes[q],
x1:e,y1:r}}0<=t.dataPointIndexes[q]&&0!==G.markerSize&&(0<G.markerSize||0<t.markerSize)&&(q=t.getMarkerProperties(p,e,r,b),h=q.color,g.push(q),markerColor=D(Ga),v&&g.push({x:e,y:r,ctx:u,type:q.type,size:q.size,color:markerColor,borderColor:markerColor,borderThickness:q.borderThickness}));(G.indexLabel||t.indexLabel||G.indexLabelFormatter||t.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:G,dataSeries:t,point:{x:e,y:r},direction:0>x[p].y===a.axisY.reversed?1:-1,color:c})}}d();
b.moveTo(e,r);v&&u.moveTo(e,r)}delete t.dataPointIndexes;t.markerColor=h}O.drawMarkers(g);b.restore();v&&u.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,easingFunction:E.easing.linear,animationBase:0}}};z.prototype.renderBubble=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this.plotArea,c=0,f,g;d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();d.rect(b.x1,b.y1,b.width,b.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),
this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height),this._eventManager.ghostCtx.clip());for(var h=-Infinity,l=Infinity,k=0;k<a.dataSeriesIndexes.length;k++)for(var n=a.dataSeriesIndexes[k],m=this.data[n],p=m.dataPoints,e=0,c=0;c<p.length;c++)f=p[c].getTime?f=p[c].x.getTime():f=p[c].x,f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax||"undefined"===typeof p[c].z||(e=p[c].z,e>h&&(h=e),e<l&&(l=e));for(var r=25*Math.PI,b=Math.max(Math.pow(0.25*Math.min(b.height,b.width)/2,2)*Math.PI,
r),k=0;k<a.dataSeriesIndexes.length;k++)if(n=a.dataSeriesIndexes[k],m=this.data[n],p=m.dataPoints,0<p.length)for(d.strokeStyle="#4572A7 ",c=0;c<p.length;c++)if(f=p[c].getTime?f=p[c].x.getTime():f=p[c].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[c].y){f=a.axisX.convertValueToPixel(f);g=a.axisY.convertValueToPixel(p[c].y);var e=p[c].z,q=2*Math.max(Math.sqrt((h===l?b/2:r+(b-r)/(h-l)*(e-l))/Math.PI)<<0,1),e=m.getMarkerProperties(c,d);e.size=q;d.globalAlpha=
m.fillOpacity;O.drawMarker(f,g,d,e.type,e.size,e.color,e.borderColor,e.borderThickness);d.globalAlpha=1;var s=m.dataPointIds[c];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:c,x1:f,y1:g,size:q};q=D(s);v&&O.drawMarker(f,g,this._eventManager.ghostCtx,e.type,e.size,q,q,e.borderThickness);(p[c].indexLabel||m.indexLabel||p[c].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"bubble",dataPoint:p[c],dataSeries:m,point:{x:f,y:g},
direction:1,bounds:{x1:f-e.size/2,y1:g-e.size/2,x2:f+e.size/2,y2:g+e.size/2},color:null})}d.restore();v&&this._eventManager.ghostCtx.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:E.fadeInAnimation,easingFunction:E.easing.easeInQuad,animationBase:0}}};z.prototype.renderScatter=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this.plotArea,c=0,f,g;d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();d.rect(b.x1,b.y1,b.width,
b.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height),this._eventManager.ghostCtx.clip());for(var h=0;h<a.dataSeriesIndexes.length;h++){var l=a.dataSeriesIndexes[h],k=this.data[l],n=k.dataPoints;if(0<n.length){d.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(b.height,b.width)/2,2);for(var m=0,p=0,c=0;c<n.length;c++)if(f=n[c].getTime?f=n[c].x.getTime():f=n[c].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===
typeof n[c].y){f=a.axisX.convertValueToPixel(f);g=a.axisY.convertValueToPixel(n[c].y);var e=k.getMarkerProperties(c,f,g,d);d.globalAlpha=k.fillOpacity;O.drawMarker(e.x,e.y,e.ctx,e.type,e.size,e.color,e.borderColor,e.borderThickness);d.globalAlpha=1;Math.sqrt((m-f)*(m-f)+(p-g)*(p-g))<Math.min(e.size,5)&&n.length>Math.min(this.plotArea.width,this.plotArea.height)||(m=k.dataPointIds[c],this._eventManager.objectMap[m]={id:m,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:c,x1:f,y1:g},m=D(m),v&&
O.drawMarker(e.x,e.y,this._eventManager.ghostCtx,e.type,e.size,m,m,e.borderThickness),(n[c].indexLabel||k.indexLabel||n[c].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"scatter",dataPoint:n[c],dataSeries:k,point:{x:f,y:g},direction:1,bounds:{x1:f-e.size/2,y1:g-e.size/2,x2:f+e.size/2,y2:g+e.size/2},color:null}),m=f,p=g)}}}d.restore();v&&this._eventManager.ghostCtx.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:E.fadeInAnimation,easingFunction:E.easing.easeInQuad,
animationBase:0}}};z.prototype.renderCandlestick=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,c=this.plotArea,f=0,g,h,l,k,n,m,f=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;g=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.015*this.width;var p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));p=this.dataPointWidth?
this.dataPointWidth:0.7*c.width*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&f>g&&(f=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,g));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&g<f)&&(g=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,f));p<f&&(p=f);p>g&&(p=g);d.save();v&&b.save();d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();v&&(b.beginPath(),b.rect(c.x1,c.y1,c.width,c.height),b.clip());
for(var e=0;e<a.dataSeriesIndexes.length;e++){var r=a.dataSeriesIndexes[e],q=this.data[r],s=q.dataPoints;if(0<s.length)for(var u=5<p&&q.bevelEnabled?!0:!1,f=0;f<s.length;f++)if(s[f].getTime?m=s[f].x.getTime():m=s[f].x,!(m<a.axisX.dataInfo.viewPortMin||m>a.axisX.dataInfo.viewPortMax)&&null!==s[f].y&&s[f].y.length&&"number"===typeof s[f].y[0]&&"number"===typeof s[f].y[1]&&"number"===typeof s[f].y[2]&&"number"===typeof s[f].y[3]){g=a.axisX.convertValueToPixel(m);h=a.axisY.convertValueToPixel(s[f].y[0]);
l=a.axisY.convertValueToPixel(s[f].y[1]);k=a.axisY.convertValueToPixel(s[f].y[2]);n=a.axisY.convertValueToPixel(s[f].y[3]);var w=g-p/2<<0,y=w+p<<0,c=s[f].color?s[f].color:q._colorSet[0],t=Math.round(Math.max(1,0.15*p)),x=0===t%2?0:0.5,z=q.dataPointIds[f];this._eventManager.objectMap[z]={id:z,objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:f,x1:w,y1:h,x2:y,y2:l,x3:g,y3:k,x4:g,y4:n,borderThickness:t,color:c};d.strokeStyle=c;d.beginPath();d.lineWidth=t;b.lineWidth=Math.max(t,4);"candlestick"===
q.type?(d.moveTo(g-x,l),d.lineTo(g-x,Math.min(h,n)),d.stroke(),d.moveTo(g-x,Math.max(h,n)),d.lineTo(g-x,k),d.stroke(),R(d,w,Math.min(h,n),y,Math.max(h,n),s[f].y[0]<=s[f].y[3]?q.risingColor:c,t,c,u,u,!1,!1,q.fillOpacity),v&&(c=D(z),b.strokeStyle=c,b.moveTo(g-x,l),b.lineTo(g-x,Math.min(h,n)),b.stroke(),b.moveTo(g-x,Math.max(h,n)),b.lineTo(g-x,k),b.stroke(),R(b,w,Math.min(h,n),y,Math.max(h,n),c,0,null,!1,!1,!1,!1))):"ohlc"===q.type&&(d.moveTo(g-x,l),d.lineTo(g-x,k),d.stroke(),d.beginPath(),d.moveTo(g,
h),d.lineTo(w,h),d.stroke(),d.beginPath(),d.moveTo(g,n),d.lineTo(y,n),d.stroke(),v&&(c=D(z),b.strokeStyle=c,b.moveTo(g-x,l),b.lineTo(g-x,k),b.stroke(),b.beginPath(),b.moveTo(g,h),b.lineTo(w,h),b.stroke(),b.beginPath(),b.moveTo(g,n),b.lineTo(y,n),b.stroke()));(s[f].indexLabel||q.indexLabel||s[f].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:q.type,dataPoint:s[f],dataSeries:q,point:{x:w+(y-w)/2,y:a.axisY.reversed?k:l},direction:1,bounds:{x1:w,y1:Math.min(l,k),x2:y,y2:Math.max(l,
k)},color:c})}}d.restore();v&&b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:E.fadeInAnimation,easingFunction:E.easing.easeInQuad,animationBase:0}}};z.prototype.renderRangeColumn=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,c=this.plotArea,f=0,g,h,f=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;g=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:
0.03*this.width;var l=a.axisX.dataInfo.minDiff;isFinite(l)||(l=0.3*Math.abs(a.axisX.range));l=this.dataPointWidth?this.dataPointWidth:0.9*(c.width*(a.axisX.logarithmic?Math.log(l)/Math.log(a.axisX.range):Math.abs(l)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&f>g&&(f=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,g));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&g<f)&&(g=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,f));l<f&&(l=f);l>
g&&(l=g);d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(var k=0;k<a.dataSeriesIndexes.length;k++){var n=a.dataSeriesIndexes[k],m=this.data[n],p=m.dataPoints;if(0<p.length)for(var e=5<l&&m.bevelEnabled?!0:!1,f=0;f<p.length;f++)if(p[f].getTime?h=p[f].x.getTime():h=p[f].x,!(h<a.axisX.dataInfo.viewPortMin||
h>a.axisX.dataInfo.viewPortMax)&&null!==p[f].y&&p[f].y.length&&"number"===typeof p[f].y[0]&&"number"===typeof p[f].y[1]){b=a.axisX.convertValueToPixel(h);c=a.axisY.convertValueToPixel(p[f].y[0]);g=a.axisY.convertValueToPixel(p[f].y[1]);var r=a.axisX.reversed?b+a.plotType.totalDataSeries*l/2-(a.previousDataSeriesCount+k)*l<<0:b-a.plotType.totalDataSeries*l/2+(a.previousDataSeriesCount+k)*l<<0,q=a.axisX.reversed?r-l<<0:r+l<<0,b=p[f].color?p[f].color:m._colorSet[f%m._colorSet.length];if(c>g){var s=c,
c=g;g=s}s=m.dataPointIds[f];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:f,x1:r,y1:c,x2:q,y2:g};R(d,r,c,q,g,b,0,b,e,e,!1,!1,m.fillOpacity);b=D(s);v&&R(this._eventManager.ghostCtx,r,c,q,g,b,0,null,!1,!1,!1,!1);if(p[f].indexLabel||m.indexLabel||p[f].indexLabelFormatter||m.indexLabelFormatter)this._indexLabels.push({chartType:"rangeColumn",dataPoint:p[f],dataSeries:m,indexKeyword:0,point:{x:r+(q-r)/2,y:p[f].y[1]>=p[f].y[0]?g:c},direction:p[f].y[1]>=p[f].y[0]?
-1:1,bounds:{x1:r,y1:Math.min(c,g),x2:q,y2:Math.max(c,g)},color:b}),this._indexLabels.push({chartType:"rangeColumn",dataPoint:p[f],dataSeries:m,indexKeyword:1,point:{x:r+(q-r)/2,y:p[f].y[1]>=p[f].y[0]?c:g},direction:p[f].y[1]>=p[f].y[0]?1:-1,bounds:{x1:r,y1:Math.min(c,g),x2:q,y2:Math.max(c,g)},color:b})}}d.restore();v&&this._eventManager.ghostCtx.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:E.fadeInAnimation,easingFunction:E.easing.easeInQuad,animationBase:0}}};z.prototype.renderRangeBar=
function(a){var d=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,c=this.plotArea,f=0,g,h,l,f=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;g=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0;var k=a.axisX.dataInfo.minDiff;isFinite(k)||(k=0.3*Math.abs(a.axisX.range));k=this.dataPointWidth?this.dataPointWidth:
0.9*(c.height*(a.axisX.logarithmic?Math.log(k)/Math.log(a.axisX.range):Math.abs(k)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&f>g&&(f=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,g));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&g<f)&&(g=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,f));k<f&&(k=f);k>g&&(k=g);d.save();v&&this._eventManager.ghostCtx.save();d.beginPath();d.rect(c.x1,c.y1,c.width,c.height);d.clip();v&&(this._eventManager.ghostCtx.beginPath(),
this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var m=a.dataSeriesIndexes[n],p=this.data[m],e=p.dataPoints;if(0<e.length){var r=5<k&&p.bevelEnabled?!0:!1;d.strokeStyle="#4572A7 ";for(f=0;f<e.length;f++)if(e[f].getTime?l=e[f].x.getTime():l=e[f].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&null!==e[f].y&&e[f].y.length&&"number"===typeof e[f].y[0]&&"number"===typeof e[f].y[1]){c=a.axisY.convertValueToPixel(e[f].y[0]);
g=a.axisY.convertValueToPixel(e[f].y[1]);h=a.axisX.convertValueToPixel(l);h=a.axisX.reversed?h+a.plotType.totalDataSeries*k/2-(a.previousDataSeriesCount+n)*k<<0:h-a.plotType.totalDataSeries*k/2+(a.previousDataSeriesCount+n)*k<<0;var q=a.axisX.reversed?h-k<<0:h+k<<0;c>g&&(b=c,c=g,g=b);b=e[f].color?e[f].color:p._colorSet[f%p._colorSet.length];R(d,c,h,g,q,b,0,null,r,!1,!1,!1,p.fillOpacity);b=p.dataPointIds[f];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:f,
x1:c,y1:h,x2:g,y2:q};b=D(b);v&&R(this._eventManager.ghostCtx,c,h,g,q,b,0,null,!1,!1,!1,!1);if(e[f].indexLabel||p.indexLabel||e[f].indexLabelFormatter||p.indexLabelFormatter)this._indexLabels.push({chartType:"rangeBar",dataPoint:e[f],dataSeries:p,indexKeyword:0,point:{x:e[f].y[1]>=e[f].y[0]?c:g,y:h+(q-h)/2},direction:e[f].y[1]>=e[f].y[0]?-1:1,bounds:{x1:Math.min(c,g),y1:h,x2:Math.max(c,g),y2:q},color:b}),this._indexLabels.push({chartType:"rangeBar",dataPoint:e[f],dataSeries:p,indexKeyword:1,point:{x:e[f].y[1]>=
e[f].y[0]?g:c,y:h+(q-h)/2},direction:e[f].y[1]>=e[f].y[0]?1:-1,bounds:{x1:Math.min(c,g),y1:h,x2:Math.max(c,g),y2:q},color:b})}}}d.restore();v&&this._eventManager.ghostCtx.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:E.fadeInAnimation,easingFunction:E.easing.easeInQuad,animationBase:0}}};z.prototype.renderRangeArea=function(a){function d(){if(w){var a=null;0<n.lineThickness&&b.stroke();for(var d=l.length-1;0<=d;d--)a=l[d],b.lineTo(a.x,a.y),c.lineTo(a.x,a.y);b.closePath();b.globalAlpha=
n.fillOpacity;b.fill();b.globalAlpha=1;c.fill();if(0<n.lineThickness){b.beginPath();b.moveTo(a.x,a.y);for(d=0;d<l.length;d++)a=l[d],b.lineTo(a.x,a.y);b.stroke()}b.beginPath();b.moveTo(r,q);c.beginPath();c.moveTo(r,q);w={x:r,y:q};l=[];l.push({x:r,y:s})}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx,f=[],g=null,h=this.plotArea;b.save();v&&c.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();v&&(c.beginPath(),c.rect(h.x1,
h.y1,h.width,h.height),c.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var l=[],k=a.dataSeriesIndexes[h],n=this.data[k],m=n.dataPoints,f=n.id;this._eventManager.objectMap[f]={objectType:"dataSeries",dataSeriesIndex:k};f=D(f);c.fillStyle=f;var f=[],p=!0,e=0,r,q,s,u,w=null;if(0<m.length){var y=n._colorSet[e%n._colorSet.length],t=n.lineColor=n.options.lineColor||y,x=t;b.fillStyle=y;b.strokeStyle=t;b.lineWidth=n.lineThickness;var z="solid";if(b.setLineDash){var A=F(n.nullDataLineDashType,n.lineThickness),
z=n.lineDashType,T=F(z,n.lineThickness);b.setLineDash(T)}for(var Q=!0;e<m.length;e++)if(u=m[e].x.getTime?m[e].x.getTime():m[e].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&(!n.connectNullData||!Q)))if(null!==m[e].y&&m[e].y.length&&"number"===typeof m[e].y[0]&&"number"===typeof m[e].y[1]){r=a.axisX.convertValueToPixel(u);q=a.axisY.convertValueToPixel(m[e].y[0]);s=a.axisY.convertValueToPixel(m[e].y[1]);p||Q?(n.connectNullData&&!p?(b.setLineDash&&(n.options.nullDataLineDashType||
z===n.lineDashType&&n.lineDashType!==n.nullDataLineDashType)&&(l[l.length-1].newLineDashArray=T,z=n.nullDataLineDashType,b.setLineDash(A)),b.lineTo(r,q),v&&c.lineTo(r,q),l.push({x:r,y:s})):(b.beginPath(),b.moveTo(r,q),w={x:r,y:q},l=[],l.push({x:r,y:s}),v&&(c.beginPath(),c.moveTo(r,q))),Q=p=!1):(b.lineTo(r,q),l.push({x:r,y:s}),v&&c.lineTo(r,q),0==e%250&&d());u=n.dataPointIds[e];this._eventManager.objectMap[u]={id:u,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:e,x1:r,y1:q,y2:s};e<m.length-
1&&(x!==(m[e].lineColor||t)||z!==(m[e].lineDashType||n.lineDashType))&&(d(),x=m[e].lineColor||t,l[l.length-1].newStrokeStyle=x,b.strokeStyle=x,b.setLineDash&&(m[e].lineDashType?(z=m[e].lineDashType,l[l.length-1].newLineDashArray=F(z,n.lineThickness),b.setLineDash(l[l.length-1].newLineDashArray)):(z=n.lineDashType,l[l.length-1].newLineDashArray=T,b.setLineDash(T))));if(0!==m[e].markerSize&&(0<m[e].markerSize||0<n.markerSize)){var K=n.getMarkerProperties(e,r,s,b);f.push(K);var I=D(u);v&&f.push({x:r,
y:s,ctx:c,type:K.type,size:K.size,color:I,borderColor:I,borderThickness:K.borderThickness});K=n.getMarkerProperties(e,r,q,b);g=K.color;f.push(K);I=D(u);v&&f.push({x:r,y:q,ctx:c,type:K.type,size:K.size,color:I,borderColor:I,borderThickness:K.borderThickness})}if(m[e].indexLabel||n.indexLabel||m[e].indexLabelFormatter||n.indexLabelFormatter)this._indexLabels.push({chartType:"rangeArea",dataPoint:m[e],dataSeries:n,indexKeyword:0,point:{x:r,y:q},direction:m[e].y[0]>m[e].y[1]===a.axisY.reversed?-1:1,color:y}),
this._indexLabels.push({chartType:"rangeArea",dataPoint:m[e],dataSeries:n,indexKeyword:1,point:{x:r,y:s},direction:m[e].y[0]>m[e].y[1]===a.axisY.reversed?1:-1,color:y})}else Q||p||d(),Q=!0;d();O.drawMarkers(f);n.markerColor=g}}b.restore();v&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,easingFunction:E.easing.linear,animationBase:0}}};z.prototype.renderRangeSplineArea=function(a){function d(a,d){var e=wa(q,2);if(0<e.length){if(0<k.lineThickness){b.strokeStyle=
d;b.setLineDash&&b.setLineDash(a);b.beginPath();b.moveTo(e[0].x,e[0].y);for(var f=0;f<e.length-3;f+=3){if(e[f].newStrokeStyle||e[f].newLineDashArray)b.stroke(),b.beginPath(),b.moveTo(e[f].x,e[f].y),e[f].newStrokeStyle&&(b.strokeStyle=e[f].newStrokeStyle),e[f].newLineDashArray&&b.setLineDash(e[f].newLineDashArray);b.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y)}b.stroke()}b.beginPath();b.moveTo(e[0].x,e[0].y);v&&(c.beginPath(),c.moveTo(e[0].x,e[0].y));for(f=0;f<e.length-3;f+=
3)b.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y),v&&c.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y);e=wa(s,2);b.lineTo(s[s.length-1].x,s[s.length-1].y);for(f=e.length-1;2<f;f-=3)b.bezierCurveTo(e[f-1].x,e[f-1].y,e[f-2].x,e[f-2].y,e[f-3].x,e[f-3].y),v&&c.bezierCurveTo(e[f-1].x,e[f-1].y,e[f-2].x,e[f-2].y,e[f-3].x,e[f-3].y);b.closePath();b.globalAlpha=k.fillOpacity;b.fill();v&&(c.closePath(),c.fill());b.globalAlpha=1;if(0<k.lineThickness){b.strokeStyle=
d;b.setLineDash&&b.setLineDash(a);b.beginPath();b.moveTo(e[0].x,e[0].y);for(var g=f=0;f<e.length-3;f+=3,g++){if(q[g].newStrokeStyle||q[g].newLineDashArray)b.stroke(),b.beginPath(),b.moveTo(e[f].x,e[f].y),q[g].newStrokeStyle&&(b.strokeStyle=q[g].newStrokeStyle),q[g].newLineDashArray&&b.setLineDash(q[g].newLineDashArray);b.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y)}b.stroke()}b.beginPath()}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=
this._eventManager.ghostCtx,f=[],g=null,h=this.plotArea;b.save();v&&c.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();v&&(c.beginPath(),c.rect(h.x1,h.y1,h.width,h.height),c.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var l=a.dataSeriesIndexes[h],k=this.data[l],n=k.dataPoints,f=k.id;this._eventManager.objectMap[f]={objectType:"dataSeries",dataSeriesIndex:l};f=D(f);c.fillStyle=f;var f=[],m=0,p,e,r,q=[],s=[];if(0<n.length){var u=k._colorSet[m%k._colorSet.length],w=k.lineColor=
k.options.lineColor||u,y=w;b.fillStyle=u;b.lineWidth=k.lineThickness;var t="solid",x;if(b.setLineDash){var z=F(k.nullDataLineDashType,k.lineThickness),t=k.lineDashType;x=F(t,k.lineThickness)}for(e=!1;m<n.length;m++)if(p=n[m].x.getTime?n[m].x.getTime():n[m].x,!(p<a.axisX.dataInfo.viewPortMin||p>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!e)))if(null!==n[m].y&&n[m].y.length&&"number"===typeof n[m].y[0]&&"number"===typeof n[m].y[1]){p=a.axisX.convertValueToPixel(p);e=a.axisY.convertValueToPixel(n[m].y[0]);
r=a.axisY.convertValueToPixel(n[m].y[1]);var A=k.dataPointIds[m];this._eventManager.objectMap[A]={id:A,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:m,x1:p,y1:e,y2:r};q[q.length]={x:p,y:e};s[s.length]={x:p,y:r};m<n.length-1&&(y!==(n[m].lineColor||w)||t!==(n[m].lineDashType||k.lineDashType))&&(y=n[m].lineColor||w,q[q.length-1].newStrokeStyle=y,b.setLineDash&&(n[m].lineDashType?(t=n[m].lineDashType,q[q.length-1].newLineDashArray=F(t,k.lineThickness)):(t=k.lineDashType,q[q.length-1].newLineDashArray=
x)));if(0!==n[m].markerSize&&(0<n[m].markerSize||0<k.markerSize)){var T=k.getMarkerProperties(m,p,e,b),g=T.color;f.push(T);var Q=D(A);v&&f.push({x:p,y:e,ctx:c,type:T.type,size:T.size,color:Q,borderColor:Q,borderThickness:T.borderThickness});T=k.getMarkerProperties(m,p,r,b);f.push(T);Q=D(A);v&&f.push({x:p,y:r,ctx:c,type:T.type,size:T.size,color:Q,borderColor:Q,borderThickness:T.borderThickness})}if(n[m].indexLabel||k.indexLabel||n[m].indexLabelFormatter||k.indexLabelFormatter)this._indexLabels.push({chartType:"splineArea",
dataPoint:n[m],dataSeries:k,indexKeyword:0,point:{x:p,y:e},direction:n[m].y[0]<=n[m].y[1]?-1:1,color:u}),this._indexLabels.push({chartType:"splineArea",dataPoint:n[m],dataSeries:k,indexKeyword:1,point:{x:p,y:r},direction:n[m].y[0]<=n[m].y[1]?1:-1,color:u});e=!1}else 0<m&&!e&&(k.connectNullData?b.setLineDash&&(0<q.length&&(k.options.nullDataLineDashType||!n[m-1].lineDashType))&&(q[q.length-1].newLineDashArray=z,t=k.nullDataLineDashType):(d(x,w),q=[],s=[])),e=!0;d(x,w);O.drawMarkers(f);k.markerColor=
g}}b.restore();v&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:E.xClipAnimation,easingFunction:E.easing.linear,animationBase:0}}};var Ha=function(a,d,b,c,f,g,h,l,k){if(!(0>b)){"undefined"===typeof l&&(l=1);if(!v){var n=Number((h%(2*Math.PI)).toFixed(8));Number((g%(2*Math.PI)).toFixed(8))===n&&(h-=1E-4)}a.save();a.globalAlpha=l;"pie"===f?(a.beginPath(),a.moveTo(d.x,d.y),a.arc(d.x,d.y,b,g,h,!1),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=2,a.closePath(),
a.fill()):"doughnut"===f&&(a.beginPath(),a.arc(d.x,d.y,b,g,h,!1),0<=k&&a.arc(d.x,d.y,k*b,h,g,!0),a.closePath(),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=2,a.fill());a.globalAlpha=1;a.restore()}};z.prototype.renderPie=function(a){function d(){if(n&&m){for(var a=0,b=0,c=0,d=0,f=0;f<m.length;f++){var g=m[f],h=n.dataPointIds[f],l={id:h,objectType:"dataPoint",dataPointIndex:f,dataSeriesIndex:0};r.push(l);var p={percent:null,total:null},q=null,p=k.getPercentAndTotal(n,g);if(n.indexLabelFormatter||
g.indexLabelFormatter)q={chart:k.options,dataSeries:n,dataPoint:g,total:p.total,percent:p.percent};p=g.indexLabelFormatter?g.indexLabelFormatter(q):g.indexLabel?k.replaceKeywordsWithValue(g.indexLabel,g,n,f):n.indexLabelFormatter?n.indexLabelFormatter(q):n.indexLabel?k.replaceKeywordsWithValue(n.indexLabel,g,n,f):g.label?g.label:"";k._eventManager.objectMap[h]=l;l.center={x:t.x,y:t.y};l.y=g.y;l.radius=A;l.percentInnerRadius=Q;l.indexLabelText=p;l.indexLabelPlacement=n.indexLabelPlacement;l.indexLabelLineColor=
g.indexLabelLineColor?g.indexLabelLineColor:n.options.indexLabelLineColor?n.options.indexLabelLineColor:g.color?g.color:n._colorSet[f%n._colorSet.length];l.indexLabelLineThickness=x(g.indexLabelLineThickness)?n.indexLabelLineThickness:g.indexLabelLineThickness;l.indexLabelLineDashType=g.indexLabelLineDashType?g.indexLabelLineDashType:n.indexLabelLineDashType;l.indexLabelFontColor=g.indexLabelFontColor?g.indexLabelFontColor:n.indexLabelFontColor;l.indexLabelFontStyle=g.indexLabelFontStyle?g.indexLabelFontStyle:
n.indexLabelFontStyle;l.indexLabelFontWeight=g.indexLabelFontWeight?g.indexLabelFontWeight:n.indexLabelFontWeight;l.indexLabelFontSize=g.indexLabelFontSize?g.indexLabelFontSize:n.indexLabelFontSize;l.indexLabelFontFamily=g.indexLabelFontFamily?g.indexLabelFontFamily:n.indexLabelFontFamily;l.indexLabelBackgroundColor=g.indexLabelBackgroundColor?g.indexLabelBackgroundColor:n.options.indexLabelBackgroundColor?n.options.indexLabelBackgroundColor:n.indexLabelBackgroundColor;l.indexLabelMaxWidth=g.indexLabelMaxWidth?
g.indexLabelMaxWidth:n.indexLabelMaxWidth?n.indexLabelMaxWidth:0.33*e.width;l.indexLabelWrap="undefined"!==typeof g.indexLabelWrap?g.indexLabelWrap:n.indexLabelWrap;l.startAngle=0===f?n.startAngle?n.startAngle/180*Math.PI:0:r[f-1].endAngle;l.startAngle=(l.startAngle+2*Math.PI)%(2*Math.PI);l.endAngle=l.startAngle+2*Math.PI/v*Math.abs(g.y);g=(l.endAngle+l.startAngle)/2;g=(g+2*Math.PI)%(2*Math.PI);l.midAngle=g;if(l.midAngle>Math.PI/2-w&&l.midAngle<Math.PI/2+w){if(0===a||r[c].midAngle>l.midAngle)c=f;
a++}else if(l.midAngle>3*Math.PI/2-w&&l.midAngle<3*Math.PI/2+w){if(0===b||r[d].midAngle>l.midAngle)d=f;b++}l.hemisphere=g>Math.PI/2&&g<=3*Math.PI/2?"left":"right";l.indexLabelTextBlock=new X(k.plotArea.ctx,{fontSize:l.indexLabelFontSize,fontFamily:l.indexLabelFontFamily,fontColor:l.indexLabelFontColor,fontStyle:l.indexLabelFontStyle,fontWeight:l.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:l.indexLabelBackgroundColor,maxWidth:l.indexLabelMaxWidth,maxHeight:l.indexLabelWrap?5*l.indexLabelFontSize:
1.5*l.indexLabelFontSize,text:l.indexLabelText,padding:0,textBaseline:"top"});l.indexLabelTextBlock.measureText()}h=g=0;p=!1;for(f=0;f<m.length;f++)l=r[(c+f)%m.length],1<a&&(l.midAngle>Math.PI/2-w&&l.midAngle<Math.PI/2+w)&&(g<=a/2&&!p?(l.hemisphere="right",g++):(l.hemisphere="left",p=!0));p=!1;for(f=0;f<m.length;f++)l=r[(d+f)%m.length],1<b&&(l.midAngle>3*Math.PI/2-w&&l.midAngle<3*Math.PI/2+w)&&(h<=b/2&&!p?(l.hemisphere="left",h++):(l.hemisphere="right",p=!0))}}function b(a){var b=k.plotArea.ctx;b.clearRect(e.x1,
e.y1,e.width,e.height);b.fillStyle=k.backgroundColor;b.fillRect(e.x1,e.y1,e.width,e.height);for(b=0;b<m.length;b++){var c=r[b].startAngle,d=r[b].endAngle;if(d>c){var f=0.07*A*Math.cos(r[b].midAngle),g=0.07*A*Math.sin(r[b].midAngle),l=!1;if(m[b].exploded){if(1E-9<Math.abs(r[b].center.x-(t.x+f))||1E-9<Math.abs(r[b].center.y-(t.y+g)))r[b].center.x=t.x+f*a,r[b].center.y=t.y+g*a,l=!0}else if(0<Math.abs(r[b].center.x-t.x)||0<Math.abs(r[b].center.y-t.y))r[b].center.x=t.x+f*(1-a),r[b].center.y=t.y+g*(1-a),
l=!0;l&&(f={},f.dataSeries=n,f.dataPoint=n.dataPoints[b],f.index=b,k.toolTip.highlightObjects([f]));Ha(k.plotArea.ctx,r[b].center,r[b].radius,m[b].color?m[b].color:n._colorSet[b%n._colorSet.length],n.type,c,d,n.fillOpacity,r[b].percentInnerRadius)}}a=k.plotArea.ctx;a.save();a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<m.length;b++)c=r[b],c.indexLabelText&&(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/2,d=0,d="left"===c.hemisphere?"inside"!==
n.indexLabelPlacement?-(c.indexLabelTextBlock.width+p):-c.indexLabelTextBlock.width/2:"inside"!==n.indexLabelPlacement?p:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=d,c.indexLabelTextBlock.render(!0),c.indexLabelTextBlock.x-=d,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"inside"!==c.indexLabelPlacement&&0<c.indexLabelLineThickness&&(d=c.center.x+A*Math.cos(c.midAngle),f=c.center.y+A*Math.sin(c.midAngle),a.strokeStyle=c.indexLabelLineColor,a.lineWidth=c.indexLabelLineThickness,
a.setLineDash&&a.setLineDash(F(c.indexLabelLineDashType,c.indexLabelLineThickness)),a.beginPath(),a.moveTo(d,f),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===c.hemisphere?-p:p),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");a.save()}function c(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,d=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,e=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/2,f=b.indexLabelTextBlock.y+
b.indexLabelTextBlock.height/2;return c=b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?e-d:c-f}function f(a){for(var b=null,d=1;d<m.length;d++)if(b=(a+d+r.length)%r.length,r[b].hemisphere!==r[a].hemisphere){b=null;break}else if(r[b].indexLabelText&&b!==a&&(0>c(r[b],r[a])||("right"===r[a].hemisphere?r[b].indexLabelTextBlock.y>=r[a].indexLabelTextBlock.y:r[b].indexLabelTextBlock.y<=r[a].indexLabelTextBlock.y)))break;else b=null;return b}function g(a,b,d){d=(d||0)+1;if(1E3<d)return 0;b=b||0;var e=0,
k=t.y-1*s,l=t.y+1*s;if(0<=a&&a<m.length){var h=r[a];if(0>b&&h.indexLabelTextBlock.y<k||0<b&&h.indexLabelTextBlock.y>l)return 0;var n=0,p=0,p=n=n=0;0>b?h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2>k&&h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2+b<k&&(b=-(k-(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2+b))):h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2<k&&h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2+b>l&&(b=h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/
2+b-l);b=h.indexLabelTextBlock.y+b;k=0;k="right"===h.hemisphere?t.x+Math.sqrt(Math.pow(s,2)-Math.pow(b-t.y,2)):t.x-Math.sqrt(Math.pow(s,2)-Math.pow(b-t.y,2));p=t.x+A*Math.cos(h.midAngle);n=t.y+A*Math.sin(h.midAngle);n=Math.sqrt(Math.pow(k-p,2)+Math.pow(b-n,2));p=Math.acos(A/s);n=Math.acos((s*s+A*A-n*n)/(2*A*s));b=n<p?b-h.indexLabelTextBlock.y:0;k=null;for(l=1;l<m.length;l++)if(k=(a-l+r.length)%r.length,r[k].hemisphere!==r[a].hemisphere){k=null;break}else if(r[k].indexLabelText&&r[k].hemisphere===
r[a].hemisphere&&k!==a&&(0>c(r[k],r[a])||("right"===r[a].hemisphere?r[k].indexLabelTextBlock.y<=r[a].indexLabelTextBlock.y:r[k].indexLabelTextBlock.y>=r[a].indexLabelTextBlock.y)))break;else k=null;p=k;n=f(a);l=k=0;0>b?(l="right"===h.hemisphere?p:n,e=b,null!==l&&(p=-b,b=h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-(r[l].indexLabelTextBlock.y+r[l].indexLabelTextBlock.height/2),b-p<q&&(k=-p,l=g(l,k,d+1),+l.toFixed(y)>+k.toFixed(y)&&(e=b>q?-(b-q):-(p-(l-k)))))):0<b&&(l="right"===h.hemisphere?
n:p,e=b,null!==l&&(p=b,b=r[l].indexLabelTextBlock.y-r[l].indexLabelTextBlock.height/2-(h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2),b-p<q&&(k=p,l=g(l,k,d+1),+l.toFixed(y)<+k.toFixed(y)&&(e=b>q?b-q:p-(k-l)))));e&&(d=h.indexLabelTextBlock.y+e,b=0,b="right"===h.hemisphere?t.x+Math.sqrt(Math.pow(s,2)-Math.pow(d-t.y,2)):t.x-Math.sqrt(Math.pow(s,2)-Math.pow(d-t.y,2)),h.midAngle>Math.PI/2-w&&h.midAngle<Math.PI/2+w?(k=(a-1+r.length)%r.length,k=r[k],a=r[(a+1+r.length)%r.length],"left"===h.hemisphere&&
"right"===k.hemisphere&&b>k.indexLabelTextBlock.x?b=k.indexLabelTextBlock.x-15:"right"===h.hemisphere&&("left"===a.hemisphere&&b<a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x+15)):h.midAngle>3*Math.PI/2-w&&h.midAngle<3*Math.PI/2+w&&(k=(a-1+r.length)%r.length,k=r[k],a=r[(a+1+r.length)%r.length],"right"===h.hemisphere&&"left"===k.hemisphere&&b<k.indexLabelTextBlock.x?b=k.indexLabelTextBlock.x+15:"left"===h.hemisphere&&("right"===a.hemisphere&&b>a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x-
15)),h.indexLabelTextBlock.y=d,h.indexLabelTextBlock.x=b,h.indexLabelAngle=Math.atan2(h.indexLabelTextBlock.y-t.y,h.indexLabelTextBlock.x-t.x))}return e}function h(){var a=k.plotArea.ctx;a.fillStyle="grey";a.strokeStyle="grey";a.font="16px Arial";a.textBaseline="middle";for(var b=a=0,d=0,l=!0,b=0;10>b&&(1>b||0<d);b++){if(n.radius||!n.radius&&"undefined"!==typeof n.innerRadius&&null!==n.innerRadius&&A-d<=E)l=!1;l&&(A-=d);d=0;if("inside"!==n.indexLabelPlacement){s=A*u;for(a=0;a<m.length;a++){var h=
r[a];h.indexLabelTextBlock.x=t.x+s*Math.cos(h.midAngle);h.indexLabelTextBlock.y=t.y+s*Math.sin(h.midAngle);h.indexLabelAngle=h.midAngle;h.radius=A;h.percentInnerRadius=Q}for(var w,v,a=0;a<m.length;a++){var h=r[a],x=f(a);if(null!==x){w=r[a];v=r[x];var z=0,z=c(w,v)-q;if(0>z){for(var C=v=0,D=0;D<m.length;D++)D!==a&&r[D].hemisphere===h.hemisphere&&(r[D].indexLabelTextBlock.y<h.indexLabelTextBlock.y?v++:C++);v=z/(v+C||1)*C;var C=-1*(z-v),B=D=0;"right"===h.hemisphere?(D=g(a,v),C=-1*(z-D),B=g(x,C),+B.toFixed(y)<
+C.toFixed(y)&&+D.toFixed(y)<=+v.toFixed(y)&&g(a,-(C-B))):(D=g(x,v),C=-1*(z-D),B=g(a,C),+B.toFixed(y)<+C.toFixed(y)&&+D.toFixed(y)<=+v.toFixed(y)&&g(x,-(C-B)))}}}}else for(a=0;a<m.length;a++)h=r[a],s="pie"===n.type?0.7*A:0.8*A,x=t.x+s*Math.cos(h.midAngle),v=t.y+s*Math.sin(h.midAngle),h.indexLabelTextBlock.x=x,h.indexLabelTextBlock.y=v;for(a=0;a<m.length;a++)if(h=r[a],x=h.indexLabelTextBlock.measureText(),0!==x.height&&0!==x.width)x=x=0,"right"===h.hemisphere?(x=e.x2-(h.indexLabelTextBlock.x+h.indexLabelTextBlock.width+
p),x*=-1):x=e.x1-(h.indexLabelTextBlock.x-h.indexLabelTextBlock.width-p),0<x&&(!l&&h.indexLabelText&&(v="right"===h.hemisphere?e.x2-h.indexLabelTextBlock.x:h.indexLabelTextBlock.x-e.x1,0.3*h.indexLabelTextBlock.maxWidth>v?h.indexLabelText="":h.indexLabelTextBlock.maxWidth=0.85*v,0.3*h.indexLabelTextBlock.maxWidth<v&&(h.indexLabelTextBlock.x-="right"===h.hemisphere?2:-2)),Math.abs(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-t.y)<A||Math.abs(h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/
2-t.y)<A)&&(x/=Math.abs(Math.cos(h.indexLabelAngle)),9<x&&(x*=0.3),x>d&&(d=x)),x=x=0,0<h.indexLabelAngle&&h.indexLabelAngle<Math.PI?(x=e.y2-(h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2+5),x*=-1):x=e.y1-(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-5),0<x&&(!l&&h.indexLabelText&&(v=0<h.indexLabelAngle&&h.indexLabelAngle<Math.PI?-1:1,0===g(a,x*v)&&g(a,2*v)),Math.abs(h.indexLabelTextBlock.x-t.x)<A&&(x/=Math.abs(Math.sin(h.indexLabelAngle)),9<x&&(x*=0.3),x>d&&(d=x)));var F=function(a,
b,c){for(var d=[],e=0;d.push(r[b]),b!==c;b=(b+1+m.length)%m.length);d.sort(function(a,b){return a.y-b.y});for(b=0;b<d.length;b++)if(c=d[b],e<0.7*a)e+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text="",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};(function(){for(var a=-1,b=-1,d=0,e=!1,g=0;g<m.length;g++)if(e=!1,w=r[g],w.indexLabelText){var h=f(g);if(null!==h){var k=r[h];z=0;z=c(w,k);var l;if(l=0>z){l=w.indexLabelTextBlock.x;var n=w.indexLabelTextBlock.y-w.indexLabelTextBlock.height/
2,q=w.indexLabelTextBlock.y+w.indexLabelTextBlock.height/2,s=k.indexLabelTextBlock.y-k.indexLabelTextBlock.height/2,t=k.indexLabelTextBlock.x+k.indexLabelTextBlock.width,u=k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/2;l=w.indexLabelTextBlock.x+w.indexLabelTextBlock.width<k.indexLabelTextBlock.x-p||l>t+p||n>u+p||q<s-p?!1:!0}l?(0>a&&(a=g),h!==a&&(b=h,d+=-z),0===g%Math.max(m.length/10,3)&&(e=!0)):e=!0;e&&(0<d&&0<=a&&0<=b)&&(F(d,a,b),b=a=-1,d=0)}}0<d&&F(d,a,b)})()}}function l(){k.plotArea.layoutManager.reset();
k.title&&(k.title.dockInsidePlotArea||"center"===k.title.horizontalAlign&&"center"===k.title.verticalAlign)&&k.title.render();if(k.subtitles)for(var a=0;a<k.subtitles.length;a++){var b=k.subtitles[a];(b.dockInsidePlotArea||"center"===b.horizontalAlign&&"center"===b.verticalAlign)&&b.render()}k.legend&&(k.legend.dockInsidePlotArea||"center"===k.legend.horizontalAlign&&"center"===k.legend.verticalAlign)&&k.legend.render();J.fAWm&&J.fAWm(k)}var k=this;if(!(0>=a.dataSeriesIndexes.length)){var n=this.data[a.dataSeriesIndexes[0]],
m=n.dataPoints,p=10,e=this.plotArea,r=[],q=2,s,u=1.3,w=20/180*Math.PI,y=6,t={x:(e.x2+e.x1)/2,y:(e.y2+e.y1)/2},v=0;a=!1;for(var z=0;z<m.length;z++)v+=Math.abs(m[z].y),!a&&("undefined"!==typeof m[z].indexLabel&&null!==m[z].indexLabel&&0<m[z].indexLabel.toString().length)&&(a=!0),!a&&("undefined"!==typeof m[z].label&&null!==m[z].label&&0<m[z].label.toString().length)&&(a=!0);if(0!==v){a=a||"undefined"!==typeof n.indexLabel&&null!==n.indexLabel&&0<n.indexLabel.toString().length;var A="inside"!==n.indexLabelPlacement&&
a?0.75*Math.min(e.width,e.height)/2:0.92*Math.min(e.width,e.height)/2;n.radius&&(A=Pa(n.radius,A));var E="undefined"!==typeof n.innerRadius&&null!==n.innerRadius?Pa(n.innerRadius,A):0.7*A;n.radius=A;"doughnut"===n.type&&(n.innerRadius=E);var Q=Math.min(E/A,(A-1)/A);this.pieDoughnutClickHandler=function(a){k.isAnimating||!x(a.dataSeries.explodeOnClick)&&!a.dataSeries.explodeOnClick||(a=a.dataPoint,a.exploded=a.exploded?!1:!0,1<this.dataPoints.length&&k._animator.animate(0,500,function(a){b(a);l()}))};
d();h();h();h();h();this.disableToolTip=!0;this._animator.animate(0,this.animatedRender?this.animationDuration:0,function(a){var b=k.plotArea.ctx;b.clearRect(e.x1,e.y1,e.width,e.height);b.fillStyle=k.backgroundColor;b.fillRect(e.x1,e.y1,e.width,e.height);a=r[0].startAngle+2*Math.PI*a;for(b=0;b<m.length;b++){var c=0===b?r[b].startAngle:d,d=c+(r[b].endAngle-r[b].startAngle),f=!1;d>a&&(d=a,f=!0);var g=m[b].color?m[b].color:n._colorSet[b%n._colorSet.length];d>c&&Ha(k.plotArea.ctx,r[b].center,r[b].radius,
g,n.type,c,d,n.fillOpacity,r[b].percentInnerRadius);if(f)break}l()},function(){k.disableToolTip=!1;k._animator.animate(0,k.animatedRender?500:0,function(a){b(a);l()})})}}};z.prototype.animationRequestId=null;z.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();z.prototype.cancelRequestAnimFrame=window.cancelAnimationFrame||
window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;z.prototype.set=function(a,d,b){b="undefined"===typeof b?!0:b;"options"===a?(this.options=d,b&&this.render()):z.base.set.call(this,a,d,b)};z.prototype.exportChart=function(a){a="undefined"===typeof a?{}:a;var d=a.format?a.format:"png",b=a.fileName?a.fileName:this.exportFileName;if(a.toDataURL)return this.canvas.toDataURL("image/"+
d);Ca(this.canvas,d,b)};z.prototype.print=function(){var a=this.exportChart({toDataURL:!0}),d=document.createElement("iframe");d.setAttribute("class","canvasjs-chart-print-frame");d.setAttribute("style","position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");d.style.height=this.height+"px";this._canvasJSContainer.appendChild(d);var b=this,c=d.contentWindow||d.contentDocument.document||d.contentDocument;c.document.open();c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="'+
a+'"/><body/></html>');c.document.close();setTimeout(function(){c.focus();c.print();setTimeout(function(){b._canvasJSContainer.removeChild(d)},1E3)},500)};la.prototype.registerSpace=function(a,d){"top"===a?this._topOccupied+=d.height:"bottom"===a?this._bottomOccupied+=d.height:"left"===a?this._leftOccupied+=d.width:"right"===a&&(this._rightOccupied+=d.width)};la.prototype.unRegisterSpace=function(a,d){"top"===a?this._topOccupied-=d.height:"bottom"===a?this._bottomOccupied-=d.height:"left"===a?this._leftOccupied-=
d.width:"right"===a&&(this._rightOccupied-=d.width)};la.prototype.getFreeSpace=function(){return{x1:this._x1+this._leftOccupied,y1:this._y1+this._topOccupied,x2:this._x2-this._rightOccupied,y2:this._y2-this._bottomOccupied,width:this._x2-this._x1-this._rightOccupied-this._leftOccupied,height:this._y2-this._y1-this._bottomOccupied-this._topOccupied}};la.prototype.reset=function(){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding};U(X,M);X.prototype.render=
function(a){a&&this.ctx.save();var d=this.ctx.font;this.ctx.textBaseline=this.textBaseline;var b=0;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y+b);"middle"===this.textBaseline&&(b=-this._lineHeight/2);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var c=0,f=this.padding,g=null;(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,b,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,
this.borderColor);this.ctx.fillStyle=this.fontColor;for(b=0;b<this._wrappedText.lines.length;b++)g=this._wrappedText.lines[b],"right"===this.horizontalAlign?c=this.width-g.width-this.padding:"left"===this.horizontalAlign?c=this.padding:"center"===this.horizontalAlign&&(c=(this.width-2*this.padding)/2-g.width/2+this.padding),this.ctx.fillText(g.text,c,f),f+=g.height;this.ctx.font=d;a&&this.ctx.restore()};X.prototype.setText=function(a){this.text=a;this._isDirty=!0;this._wrappedText=null};X.prototype.measureText=
function(){this._lineHeight=Ka(this.fontFamily,this.fontSize,this.fontWeight);if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);this._isDirty=!1;return{width:this.width,height:this.height}};X.prototype._getLineWithWidth=function(a,d,b){a=String(a);if(!a)return{text:"",width:0};var c=b=0,f=a.length-1,g=Infinity;for(this.ctx.font=this._getFontString();c<=f;){var g=Math.floor((c+f)/2),h=a.substr(0,g+1);b=this.ctx.measureText(h).width;if(b<d)c=g+1;else if(b>
d)f=g-1;else break}b>d&&1<h.length&&(h=h.substr(0,h.length-1),b=this.ctx.measureText(h).width);d=!0;if(h.length===a.length||" "===a[h.length])d=!1;d&&(a=h.split(" "),1<a.length&&a.pop(),h=a.join(" "),b=this.ctx.measureText(h).width);return{text:h,width:b}};X.prototype._wrapText=function(){var a=new String(ma(String(this.text))),d=[],b=this.ctx.font,c=0,f=0;for(this.ctx.font=this._getFontString();0<a.length;){var g=this.maxHeight-2*this.padding,h=this._getLineWithWidth(a,this.maxWidth-2*this.padding,
!1);h.height=this._lineHeight;d.push(h);var l=f,f=Math.max(f,h.width),c=c+h.height,a=ma(a.slice(h.text.length,a.length));g&&c>g&&(h=d.pop(),c-=h.height,f=l)}this._wrappedText={lines:d,width:f,height:c};this.width=f+2*this.padding;this.height=c+2*this.padding;this.ctx.font=b};X.prototype._getFontString=function(){var a;a=""+(this.fontStyle?this.fontStyle+" ":"");a+=this.fontWeight?this.fontWeight+" ":"";a+=this.fontSize?this.fontSize+"px ":"";var d=this.fontFamily?this.fontFamily+"":"";!v&&d&&(d=d.split(",")[0],
"'"!==d[0]&&'"'!==d[0]&&(d="'"+d+"'"));return a+=d};U(oa,M);oa.prototype.render=function(){if(this.text){var a=this.dockInsidePlotArea?this.chart.plotArea:this.chart,d=a.layoutManager.getFreeSpace(),b=d.x1,c=d.y1,f=0,g=0,h=this.chart._menuButton&&this.chart.exportEnabled&&"top"===this.verticalAlign?22:0,l,k;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(null===this.maxWidth&&(this.maxWidth=d.width-4-h*("center"===this.horizontalAlign?2:1)),g=0.5*d.height-this.margin-2,f=0):"center"===
this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(null===this.maxWidth&&(this.maxWidth=d.height-4),g=0.5*d.width-this.margin-2):"center"===this.horizontalAlign&&(null===this.maxWidth&&(this.maxWidth=d.width-4),g=0.5*d.height-4));this.wrap||(g=Math.min(g,Math.max(1.5*this.fontSize,this.fontSize+2.5*this.padding)));var g=new X(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,
verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:this.maxWidth,maxHeight:g,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"}),n=g.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(c=d.y1+2,k="top"):"bottom"===this.verticalAlign&&(c=d.y2-2-n.height,k="bottom"),"left"===this.horizontalAlign?b=d.x1+2:"center"===this.horizontalAlign?
b=d.x1+d.width/2-n.width/2:"right"===this.horizontalAlign&&(b=d.x2-2-n.width-h),l=this.horizontalAlign,this.width=n.width,this.height=n.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(b=d.x1+2,c=d.y2-2-(this.maxWidth/2-n.width/2),f=-90,k="left",this.width=n.height,this.height=n.width):"right"===this.horizontalAlign?(b=d.x2-2,c=d.y1+2+(this.maxWidth/2-n.width/2),f=90,k="right",this.width=n.height,this.height=n.width):"center"===this.horizontalAlign&&(c=a.y1+(a.height/2-n.height/
2),b=a.x1+(a.width/2-n.width/2),k="center",this.width=n.width,this.height=n.height),l="center");g.x=b;g.y=c;g.angle=f;g.horizontalAlign=l;g.render(!0);a.layoutManager.registerSpace(k,{width:this.width+("left"===k||"right"===k?this.margin+2:0),height:this.height+("top"===k||"bottom"===k?this.margin+2:0)});this.bounds={x1:b,y1:c,x2:b+this.width,y2:c+this.height};this.ctx.textBaseline="top"}};U(xa,M);xa.prototype.render=oa.prototype.render;U(ya,M);ya.prototype.render=function(){var a=this.dockInsidePlotArea?
this.chart.plotArea:this.chart,d=a.layoutManager.getFreeSpace(),b=null,c=0,f=0,g=0,h=0,l=this.markerMargin=this.chart.options.legend&&!x(this.chart.options.legend.markerMargin)?this.chart.options.legend.markerMargin:0.3*this.fontSize;this.height=0;var k=[],n=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation="horizontal",b=this.verticalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:d.width,h=this.maxHeight=null!==this.maxHeight?this.maxHeight:0.5*d.height):"center"===
this.verticalAlign&&(this.orientation="vertical",b=this.horizontalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:0.5*d.width,h=this.maxHeight=null!==this.maxHeight?this.maxHeight:d.height);for(var m=0;m<this.dataSeries.length;m++){var p=this.dataSeries[m];if("pie"!==p.type&&"doughnut"!==p.type&&"funnel"!==p.type){var e=p.legendMarkerType=p.legendMarkerType?p.legendMarkerType:"line"!==p.type&&"stepLine"!==p.type&&"spline"!==p.type&&"scatter"!==p.type&&"bubble"!==p.type||!p.markerType?ba.getDefaultLegendMarker(p.type):
p.markerType,r=p.legendText?p.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart,legend:this.options,dataSeries:p,dataPoint:null}):p.name,q=p.legendMarkerColor=p.legendMarkerColor?p.legendMarkerColor:p.markerColor?p.markerColor:p._colorSet[0],s=p.markerSize||"line"!==p.type&&"stepLine"!==p.type&&"spline"!==p.type?0.75*this.lineHeight:0,u=p.legendMarkerBorderColor?p.legendMarkerBorderColor:p.markerBorderColor,w=p.legendMarkerBorderThickness?p.legendMarkerBorderThickness:p.markerBorderThickness?
Math.max(1,Math.round(0.2*s)):0,r=this.chart.replaceKeywordsWithValue(r,p.dataPoints[0],p,m),e={markerType:e,markerColor:q,text:r,textBlock:null,chartType:p.type,markerSize:s,lineColor:p._colorSet[0],dataSeriesIndex:p.index,dataPointIndex:null,markerBorderColor:u,markerBorderThickness:w};k.push(e)}else for(var v=0;v<p.dataPoints.length;v++){var t=p.dataPoints[v],e=t.legendMarkerType?t.legendMarkerType:p.legendMarkerType?p.legendMarkerType:ba.getDefaultLegendMarker(p.type),r=t.legendText?t.legendText:
p.legendText?p.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart,legend:this.options,dataSeries:p,dataPoint:t}):t.name?t.name:"DataPoint: "+(v+1),q=t.legendMarkerColor?t.legendMarkerColor:p.legendMarkerColor?p.legendMarkerColor:t.color?t.color:p.color?p.color:p._colorSet[v%p._colorSet.length],s=0.75*this.lineHeight,u=t.legendMarkerBorderColor?t.legendMarkerBorderColor:p.legendMarkerBorderColor?p.legendMarkerBorderColor:t.markerBorderColor?t.markerBorderColor:p.markerBorderColor,
w=t.legendMarkerBorderThickness?t.legendMarkerBorderThickness:p.legendMarkerBorderThickness?p.legendMarkerBorderThickness:t.markerBorderThickness||p.markerBorderThickness?Math.max(1,Math.round(0.2*s)):0,r=this.chart.replaceKeywordsWithValue(r,t,p,v),e={markerType:e,markerColor:q,text:r,textBlock:null,chartType:p.type,markerSize:s,dataSeriesIndex:m,dataPointIndex:v,markerBorderColor:u,markerBorderThickness:w};(t.showInLegend||p.showInLegend&&!1!==t.showInLegend)&&k.push(e)}}!0===this.reversed&&k.reverse();
if(0<k.length){p=null;q=v=r=t=0;r=null!==this.itemWidth?null!==this.itemMaxWidth?Math.min(this.itemWidth,this.itemMaxWidth,g):this.itemMaxWidth=Math.min(this.itemWidth,g):null!==this.itemMaxWidth?Math.min(this.itemMaxWidth,g):this.itemMaxWidth=g;s=0===s?0.75*this.lineHeight:s;r-=s+l;for(m=0;m<k.length;m++){e=k[m];if("line"===e.chartType||"spline"===e.chartType||"stepLine"===e.chartType)r-=2*0.1*this.lineHeight;if(!(0>=h||"undefined"===typeof h||0>=r||"undefined"===typeof r)){if("horizontal"===this.orientation){e.textBlock=
new X(this.ctx,{x:0,y:0,maxWidth:r,maxHeight:this.itemWrap?h:this.lineHeight,angle:0,text:e.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"});e.textBlock.measureText();null!==this.itemWidth&&(e.textBlock.width=this.itemWidth-(s+l+("line"===e.chartType||"spline"===e.chartType||"stepLine"===e.chartType?2*0.1*this.lineHeight:0)));if(!p||p.width+Math.round(e.textBlock.width+
s+l+(0===p.width?0:this.horizontalSpacing)+("line"===e.chartType||"spline"===e.chartType||"stepLine"===e.chartType?2*0.1*this.lineHeight:0))>g)p={items:[],width:0},n.push(p),this.height+=v,v=0;v=Math.max(v,e.textBlock.height)}else e.textBlock=new X(this.ctx,{x:0,y:0,maxWidth:r,maxHeight:!0===this.itemWrap?h:1.5*this.fontSize,angle:0,text:e.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"}),
e.textBlock.measureText(),null!==this.itemWidth&&(e.textBlock.width=this.itemWidth-(s+l+("line"===e.chartType||"spline"===e.chartType||"stepLine"===e.chartType?2*0.1*this.lineHeight:0))),this.height<h-this.lineHeight?(p={items:[],width:0},n.push(p)):(p=n[t],t=(t+1)%n.length),this.height+=e.textBlock.height;e.textBlock.x=p.width;e.textBlock.y=0;p.width+=Math.round(e.textBlock.width+s+l+(0===p.width?0:this.horizontalSpacing)+("line"===e.chartType||"spline"===e.chartType||"stepLine"===e.chartType?2*
0.1*this.lineHeight:0));p.items.push(e);this.width=Math.max(p.width,this.width);q=e.textBlock.width+(s+l+("line"===e.chartType||"spline"===e.chartType||"stepLine"===e.chartType?2*0.1*this.lineHeight:0))}}this.itemWidth=q;this.height=!1===this.itemWrap?n.length*this.lineHeight:this.height+v;this.height=Math.min(h,this.height);this.width=Math.min(g,this.width)}"top"===this.verticalAlign?(f="left"===this.horizontalAlign?d.x1:"right"===this.horizontalAlign?d.x2-this.width:d.x1+d.width/2-this.width/2,
c=d.y1):"center"===this.verticalAlign?(f="left"===this.horizontalAlign?d.x1:"right"===this.horizontalAlign?d.x2-this.width:d.x1+d.width/2-this.width/2,c=d.y1+d.height/2-this.height/2):"bottom"===this.verticalAlign&&(f="left"===this.horizontalAlign?d.x1:"right"===this.horizontalAlign?d.x2-this.width:d.x1+d.width/2-this.width/2,c=d.y2-this.height);this.items=k;for(m=0;m<this.items.length;m++)e=k[m],e.id=++this.chart._eventManager.lastObjectId,this.chart._eventManager.objectMap[e.id]={id:e.id,objectType:"legendItem",
legendItemIndex:m,dataSeriesIndex:e.dataSeriesIndex,dataPointIndex:e.dataPointIndex};for(m=d=0;m<n.length;m++){p=n[m];for(t=v=0;t<p.items.length;t++){e=p.items[t];q=e.textBlock.x+f+(0===t?0.2*s:this.horizontalSpacing);u=c+d;r=q;this.chart.data[e.dataSeriesIndex].visible||(this.ctx.globalAlpha=0.5);this.ctx.save();this.ctx.beginPath();this.ctx.rect(f,c,g,Math.max(h-h%this.lineHeight,0));this.ctx.clip();if("line"===e.chartType||"stepLine"===e.chartType||"spline"===e.chartType)this.ctx.strokeStyle=e.lineColor,
this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(q-0.1*this.lineHeight,u+this.lineHeight/2),this.ctx.lineTo(q+0.85*this.lineHeight,u+this.lineHeight/2),this.ctx.stroke(),r-=0.1*this.lineHeight;O.drawMarker(q+s/2,u+this.lineHeight/2,this.ctx,e.markerType,e.markerSize,e.markerColor,e.markerBorderColor,e.markerBorderThickness);e.textBlock.x=q+l+s;if("line"===e.chartType||"stepLine"===e.chartType||"spline"===e.chartType)e.textBlock.x+=0.1*this.lineHeight;e.textBlock.y=
Math.round(u+this.lineHeight/2);e.textBlock.render(!0);this.ctx.restore();v=0<t?Math.max(v,e.textBlock.height):e.textBlock.height;this.chart.data[e.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);q=D(e.id);this.ghostCtx.fillStyle=q;this.ghostCtx.beginPath();this.ghostCtx.fillRect(r,e.textBlock.y-this.lineHeight/2,e.textBlock.x+e.textBlock.width-r,e.textBlock.height);e.x1=this.chart._eventManager.objectMap[e.id].x1=r;e.y1=this.chart._eventManager.objectMap[e.id].y1=e.textBlock.y-this.lineHeight/
2;e.x2=this.chart._eventManager.objectMap[e.id].x2=e.textBlock.x+e.textBlock.width;e.y2=this.chart._eventManager.objectMap[e.id].y2=e.textBlock.y+e.textBlock.height-this.lineHeight/2}d+=v}0<k.length&&a.layoutManager.registerSpace(b,{width:this.width+2+2,height:this.height+5+5});this.bounds={x1:f,y1:c,x2:f+this.width,y2:c+this.height}};U(Da,M);Da.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace();this.ctx.fillStyle="red";this.ctx.fillRect(a.x1,a.y1,a.x2,a.y2)};U(ba,M);ba.prototype.getDefaultAxisPlacement=
function(){var a=this.type;if("column"===a||"line"===a||"stepLine"===a||"spline"===a||"area"===a||"stepArea"===a||"splineArea"===a||"stackedColumn"===a||"stackedLine"===a||"bubble"===a||"scatter"===a||"stackedArea"===a||"stackedColumn100"===a||"stackedLine100"===a||"stackedArea100"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeArea"===a||"rangeSplineArea"===a)return"normal";if("bar"===a||"stackedBar"===a||"stackedBar100"===a||"rangeBar"===a)return"xySwapped";if("pie"===a||"doughnut"===
a||"funnel"===a)return"none";window.console.log("Unknown Chart Type: "+a);return null};ba.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||"stackedColumn100"===a||"stackedLine100"===a||"stepArea"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeBar"===a||"rangeArea"===a||"rangeSplineArea"===a)return"square";if("line"===a||"stepLine"===a||"spline"===a||"pie"===a||"doughnut"===
a||"funnel"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a)return"triangle";window.console.log("Unknown Chart Type: "+a);return null};ba.prototype.getDataPointAtX=function(a,d){if(!this.dataPoints||0===this.dataPoints.length)return null;var b={dataPoint:null,distance:Infinity,index:NaN},c=null,f=0,g=0,h=1,l=Infinity,k=0,n=0,m=0;"none"!==this.chart.plotInfo.axisPlacement&&(this.axisX.logarithmic?(m=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),
m=1<m?Math.min(Math.max((this.dataPoints.length-1)/m*Math.log(a/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0):(m=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,m=0<m?Math.min(Math.max((this.dataPoints.length-1)/m*(a-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0));for(;;){g=0<h?m+f:m-f;if(0<=g&&g<this.dataPoints.length){var c=this.dataPoints[g],p=this.axisX.logarithmic?c.x>a?c.x/a:a/c.x:Math.abs(c.x-a);p<b.distance&&(b.dataPoint=c,b.distance=p,b.index=g);c=p;c<=l?
l=c:0<h?k++:n++;if(1E3<k&&1E3<n)break}else if(0>m-f&&m+f>=this.dataPoints.length)break;-1===h?(f++,h=1):h=-1}return d||b.dataPoint.x!==a?d&&null!==b.dataPoint?b:null:b};ba.prototype.getDataPointAtXY=function(a,d,b){if(!this.dataPoints||0===this.dataPoints.length||a<this.chart.plotArea.x1||a>this.chart.plotArea.x2||d<this.chart.plotArea.y1||d>this.chart.plotArea.y2)return null;b=b||!1;var c=[],f=0,g=0,h=1,l=!1,k=Infinity,n=0,m=0,p=0;"none"!==this.chart.plotInfo.axisPlacement&&(p=(this.chart.axisX[0]?
this.chart.axisX[0]:this.chart.axisX2[0]).getXValueAt({x:a,y:d}),this.axisX.logarithmic?(g=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),p=1<g?Math.min(Math.max((this.dataPoints.length-1)/g*Math.log(p/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0):(g=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,p=0<g?Math.min(Math.max((this.dataPoints.length-1)/g*(p-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0));for(;;){g=0<h?p+f:p-f;if(0<=g&&g<this.dataPoints.length){var e=
this.chart._eventManager.objectMap[this.dataPointIds[g]],r=this.dataPoints[g],q=null;if(e){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":case "rangeColumn":case "rangeBar":a>=e.x1&&(a<=e.x2&&d>=e.y1&&d<=e.y2)&&(c.push({dataPoint:r,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(e.x1-a),Math.abs(e.x2-a),Math.abs(e.y1-d),Math.abs(e.y2-d))}),l=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var s=
S("markerSize",r,this)||4,u=b?20:s,q=Math.sqrt(Math.pow(e.x1-a,2)+Math.pow(e.y1-d,2));q<=u&&c.push({dataPoint:r,dataPointIndex:g,dataSeries:this,distance:q});g=Math.abs(e.x1-a);g<=k?k=g:0<h?n++:m++;q<=s/2&&(l=!0);break;case "rangeArea":case "rangeSplineArea":s=S("markerSize",r,this)||4;u=b?20:s;q=Math.min(Math.sqrt(Math.pow(e.x1-a,2)+Math.pow(e.y1-d,2)),Math.sqrt(Math.pow(e.x1-a,2)+Math.pow(e.y2-d,2)));q<=u&&c.push({dataPoint:r,dataPointIndex:g,dataSeries:this,distance:q});g=Math.abs(e.x1-a);g<=k?
k=g:0<h?n++:m++;q<=s/2&&(l=!0);break;case "bubble":s=e.size;q=Math.sqrt(Math.pow(e.x1-a,2)+Math.pow(e.y1-d,2));q<=s/2&&(c.push({dataPoint:r,dataPointIndex:g,dataSeries:this,distance:q}),l=!0);break;case "pie":case "doughnut":s=e.center;u="doughnut"===this.type?e.percentInnerRadius*e.radius:0;q=Math.sqrt(Math.pow(s.x-a,2)+Math.pow(s.y-d,2));q<e.radius&&q>u&&(q=Math.atan2(d-s.y,a-s.x),0>q&&(q+=2*Math.PI),q=Number(((180*(q/Math.PI)%360+360)%360).toFixed(12)),s=Number(((180*(e.startAngle/Math.PI)%360+
360)%360).toFixed(12)),u=Number(((180*(e.endAngle/Math.PI)%360+360)%360).toFixed(12)),0===u&&1<e.endAngle&&(u=360),s>=u&&0!==r.y&&(u+=360,q<s&&(q+=360)),q>s&&q<u&&(c.push({dataPoint:r,dataPointIndex:g,dataSeries:this,distance:0}),l=!0));break;case "candlestick":if(a>=e.x1-e.borderThickness/2&&a<=e.x2+e.borderThickness/2&&d>=e.y2-e.borderThickness/2&&d<=e.y3+e.borderThickness/2||Math.abs(e.x2-a+e.x1-a)<e.borderThickness&&d>=e.y1&&d<=e.y4)c.push({dataPoint:r,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(e.x1-
a),Math.abs(e.x2-a),Math.abs(e.y2-d),Math.abs(e.y3-d))}),l=!0;break;case "ohlc":if(Math.abs(e.x2-a+e.x1-a)<e.borderThickness&&d>=e.y2&&d<=e.y3||a>=e.x1&&a<=(e.x2+e.x1)/2&&d>=e.y1-e.borderThickness/2&&d<=e.y1+e.borderThickness/2||a>=(e.x1+e.x2)/2&&a<=e.x2&&d>=e.y4-e.borderThickness/2&&d<=e.y4+e.borderThickness/2)c.push({dataPoint:r,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(e.x1-a),Math.abs(e.x2-a),Math.abs(e.y2-d),Math.abs(e.y3-d))}),l=!0}if(l||1E3<n&&1E3<m)break}}else if(0>p-f&&
p+f>=this.dataPoints.length)break;-1===h?(f++,h=1):h=-1}a=null;for(d=0;d<c.length;d++)a?c[d].distance<=a.distance&&(a=c[d]):a=c[d];return a};ba.prototype.getMarkerProperties=function(a,d,b,c){var f=this.dataPoints;return{x:d,y:b,ctx:c,type:f[a].markerType?f[a].markerType:this.markerType,size:f[a].markerSize?f[a].markerSize:this.markerSize,color:f[a].markerColor?f[a].markerColor:this.markerColor?this.markerColor:f[a].color?f[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:f[a].markerBorderColor?
f[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:f[a].markerBorderThickness?f[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};U(A,M);A.prototype.createExtraLabelsForLog=function(a){a=(a||0)+1;if(!(5<a)){var d=this.logLabelValues[0]||this.intervalStartPosition;if(Math.log(this.range)/Math.log(d/this.viewportMinimum)<this.noTicks-1){for(var b=A.getNiceNumber((d-this.viewportMinimum)/Math.min(Math.max(2,this.noTicks-this.logLabelValues.length),
3),!0),c=Math.ceil(this.viewportMinimum/b)*b;c<d;c+=b)c<this.viewportMinimum||this.logLabelValues.push(c);this.logLabelValues.sort(Aa);this.createExtraLabelsForLog(a)}}};A.prototype.createLabels=function(){var a,d,b=0,c=0,f,g=0,h=0,c=0,l=this.interval,k=0,n,m=0.6*this.chart.height,b=!1;if(this.dataSeries&&0<this.dataSeries.length)for(c=0;c<this.dataSeries.length;c++)"dateTime"===this.dataSeries[c].xValueType&&(b=!0);if("axisX"===this.type&&b&&!this.logarithmic)for(this.intervalStartPosition=this.getLabelStartPoint(new Date(this.viewportMinimum),
this.intervalType,this.interval),f=Ia(new Date(this.viewportMaximum),this.interval,this.intervalType),b=this.intervalStartPosition;b<f;Ia(b,l,this.intervalType))a=b.getTime(),a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[a]?this.labels[a]:Fa(b,this.valueFormatString,this.chart._cultureInfo),a=new X(this.ctx,{x:0,y:0,maxWidth:g,backgroundColor:this.labelBackgroundColor,maxHeight:h,angle:this.labelAngle,
text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:b.getTime(),textBlock:a,effectiveHeight:null});else{f=this.viewportMaximum;if(this.labels){a=Math.ceil(l);for(var l=Math.ceil(this.intervalStartPosition),p=!1,b=l;b<this.viewportMaximum;b+=a)if(this.labels[b])p=!0;else{p=!1;break}p&&(this.interval=
a,this.intervalStartPosition=l)}if(this.logarithmic&&!this.equidistantInterval){this.logLabelValues||(this.logLabelValues=[],this.createExtraLabelsForLog());for(var e=0;e<this.logLabelValues.length;e++)b=this.logLabelValues[e],b<this.viewportMinimum||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[b]?this.labels[b]:fa(b,this.valueFormatString,this.chart._cultureInfo),a=new X(this.ctx,
{x:0,y:0,maxWidth:g,maxHeight:h,angle:this.labelAngle,text:this.prefix+a+this.suffix,backgroundColor:this.labelBackgroundColor,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:b,textBlock:a,effectiveHeight:null}))}for(b=this.intervalStartPosition;b<=f;b=parseFloat((this.logarithmic&&this.equidistantInterval?
b*Math.pow(this.logarithmBase,this.interval):b+this.interval).toFixed(14)))a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[b]?this.labels[b]:fa(b,this.valueFormatString,this.chart._cultureInfo),a=new X(this.ctx,{x:0,y:0,maxWidth:g,maxHeight:h,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",backgroundColor:this.labelBackgroundColor,fontSize:this.labelFontSize,
fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:b,textBlock:a,effectiveHeight:null})}if("bottom"===this._position||"top"===this._position)k=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.width*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-2].position,this._labels[1].position/
this._labels[0].position))/Math.log(this.range):this.lineCoordinates.width/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*H[this.intervalType+"Duration"]*this.interval,g="undefined"===typeof this.options.labelMaxWidth?0.5*this.chart.width>>0:this.options.labelMaxWidth,this.chart.panEnabled||(h="undefined"===typeof this.options.labelWrap||this.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize);else if("left"===this._position||
"right"===this._position)k=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.height*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.height/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*H[this.intervalType+"Duration"]*this.interval,this.chart.panEnabled||
(g="undefined"===typeof this.options.labelMaxWidth?0.3*this.chart.width>>0:this.options.labelMaxWidth),h="undefined"===typeof this.options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize;for(c=0;c<this._labels.length;c++){a=this._labels[c].textBlock;a.maxWidth=g;a.maxHeight=h;var r=a.measureText();n=r.height}f=[];p=l=0;if(this.labelAutoFit||this.options.labelAutoFit)if(x(this.labelAngle)||(this.labelAngle=(this.labelAngle%360+360)%360,90<this.labelAngle&&270>this.labelAngle?
this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360)),"bottom"===this._position||"top"===this._position)if(g=0.9*k>>0,p=0,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=g;this.sessionVariables.labelMaxHeight=h;this.sessionVariables.labelAngle=this.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++){a=this._labels[b].textBlock;for(var q,
s=a.text.split(" "),c=0;c<s.length;c++)e=s[c],this.ctx.font=a.fontStyle+" "+a.fontWeight+" "+a.fontSize+"px "+a.fontFamily,e=this.ctx.measureText(e),e.width>p&&(q=b,p=e.width)}b=0;for(b=this.intervalStartPosition<this.viewportMinimum?1:0;b<this._labels.length;b++)if(a=this._labels[b].textBlock,r=a.measureText(),b<this._labels.length-1&&(e=b+1,d=this._labels[e].textBlock,d=d.measureText()),f.push(a.height),this.sessionVariables.labelMaxHeight=Math.max.apply(Math,f),Math.cos(Math.PI/180*Math.abs(this.labelAngle)),
Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c=g*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(h-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),x(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle)if(this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:Math.min((c-g*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),s=(m-(n+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(-25)))/Math.sin(Math.PI/
180*Math.abs(-25)),!x(this.options.labelWrap))this.labelWrap?x(this.options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,p),s),this.sessionVariables.labelWrap=this.labelWrap,r.width+d.width>>0>2*g&&(this.sessionVariables.labelAngle=-25)):(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle):x(this.options.labelMaxWidth)?
(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelMaxWidth=g,r.width+d.width>>0>2*g&&(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=s)):(this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelWrap=this.labelWrap);else{if(x(this.options.labelWrap))if(!x(this.options.labelMaxWidth))this.options.labelMaxWidth<
g?(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=h);else if(!x(d))if(c=r.width+d.width>>0,e=this.labelFontSize,p<g)c-2*g>l&&(l=c-2*g,c>=2*g&&c<2.2*g?(this.sessionVariables.labelMaxWidth=g,x(this.options.labelFontSize)&&12<e&&(e=Math.floor(12/13*e),a.measureText()),this.sessionVariables.labelFontSize=x(this.options.labelFontSize)?
e:this.options.labelFontSize,this.sessionVariables.labelAngle=this.labelAngle):c>=2.2*g&&c<2.8*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=s,this.sessionVariables.labelFontSize=e):c>=2.8*g&&c<3.2*g?(this.sessionVariables.labelMaxWidth=Math.max(g,p),this.sessionVariables.labelWrap=!0,x(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this.options.labelFontSize)?
e:this.options.labelFontSize,this.sessionVariables.labelAngle=this.labelAngle):c>=3.2*g&&c<3.6*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=s,this.sessionVariables.labelFontSize=this.labelFontSize):c>3.6*g&&c<5*g?(x(this.options.labelFontSize)&&12<e&&(e=Math.floor(12/13*e),a.measureText()),this.sessionVariables.labelFontSize=x(this.options.labelFontSize)?e:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=
-25,this.sessionVariables.labelMaxWidth=s):c>5*g&&(this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelFontSize=e,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelAngle=this.labelAngle));else if(q===b&&(0===q&&p+this._labels[q+1].textBlock.measureText().width-2*g>l||q===this._labels.length-1&&p+this._labels[q-1].textBlock.measureText().width-2*g>l||0<q&&q<this._labels.length-1&&p+this._labels[q+1].textBlock.measureText().width-2*g>l&&
p+this._labels[q-1].textBlock.measureText().width-2*g>l))l=0===q?p+this._labels[q+1].textBlock.measureText().width-2*g:p+this._labels[q-1].textBlock.measureText().width-2*g,this.sessionVariables.labelFontSize=x(this.options.labelFontSize)?e:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=s;else if(0===l)for(this.sessionVariables.labelFontSize=x(this.options.labelFontSize)?e:this.options.labelFontSize,this.sessionVariables.labelWrap=
!0,c=0;c<this._labels.length;c++)a=this._labels[c].textBlock,a.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,p),s),r=a.measureText(),c<this._labels.length-1&&(e=c+1,d=this._labels[e].textBlock,d.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,p),s),d=d.measureText(),r.width+d.width>>0>2*g&&(this.sessionVariables.labelAngle=-25))}else(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:Math.min((c-g*Math.cos(Math.PI/
180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),s=0!=this.labelAngle?(m-(n+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)):g,this.sessionVariables.labelMaxHeight=h=this.labelWrap?(m-s*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)):1.5*this.labelFontSize,x(this.options.labelWrap))?x(this.options.labelWrap)&&(this.labelWrap&&!x(this.options.labelMaxWidth)?
(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:s,this.sessionVariables.labelMaxHeight=h):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=s,this.sessionVariables.labelMaxHeight=c<0.9*k?0.9*k:c,this.sessionVariables.labelWrap=this.labelWrap)):(this.options.labelWrap?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?
this.options.labelMaxWidth:s):(x(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:s,this.sessionVariables.labelWrap=this.labelWrap),this.sessionVariables.labelMaxHeight=h);for(c=0;c<this._labels.length;c++)a=this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,
a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=x(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,a.fontSize=this.labelFontSize=x(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=x(this.options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=x(this.options.labelWrap)?
this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();else if("left"===this._position||"right"===this._position)if(g=x(this.options.labelMaxWidth)?0.3*this.chart.width>>0:this.options.labelMaxWidth,h="undefined"===typeof this.options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=
g;this.sessionVariables.labelMaxHeight=h;this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++)(a=this._labels[b].textBlock,r=a.measureText(),b<this._labels.length-1&&(e=b+1,d=this._labels[e].textBlock,d=d.measureText()),f.push(a.height),this.sessionVariables.labelMaxHeight=Math.max.apply(Math,f),c=g*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(h-a.fontSize/2)*Math.cos(Math.PI/
180*Math.abs(this.labelAngle)),Math.cos(Math.PI/180*Math.abs(this.labelAngle)),Math.sin(Math.PI/180*Math.abs(this.labelAngle)),x(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle)?x(this.options.labelWrap)?x(this.options.labelWrap)&&(x(this.options.labelMaxWidth)?x(d)||(k=r.height+d.height>>0,k-2*h>p&&(p=k-2*h,k>=2*h&&k<2.4*h?(x(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelMaxHeight=
h,this.sessionVariables.labelFontSize=x(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize):k>=2.4*h&&k<2.8*h?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelFontSize=this.labelFontSize,this.sessionVariables.labelWrap=!0):k>=2.8*h&&k<3.2*h?(this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelWrap=!0,x(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=
x(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):k>=3.2*h&&k<3.6*h?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelFontSize=this.labelFontSize):k>3.6*h&&k<10*h?(x(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=
x(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):k>10*h&&k<50*h&&(x(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,
this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle))):(this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth)):(this.sessionVariables.labelMaxWidth=this.labelWrap?this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:this.labelMaxWidth?
this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=h):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=0===this.labelAngle?g:Math.min((c-h*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)),h),x(this.options.labelWrap))?x(this.options.labelWrap)&&(this.labelWrap&&!x(this.options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?
this.options.labelMaxWidth>this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:c,x(this.options.labelMaxWidth)&&(this.sessionVariables.labelAngle=this.labelAngle))):this.options.labelWrap?(this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:c,this.sessionVariables.labelWrap=
this.labelWrap,this.sessionVariables.labelMaxWidth=g):(this.sessionVariables.labelMaxHeight=h,x(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap);for(c=0;c<this._labels.length;c++)a=this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.labelFontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=
this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=x(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,a.fontSize=this.labelFontSize=x(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=x(this.options.labelAngle)?
this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=x(this.options.labelWrap)?this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();for(b=0;b<this.stripLines.length;b++){var g=this.stripLines[b],u;if("outside"===g.labelPlacement){h=this.sessionVariables.labelMaxWidth;if("bottom"===this._position||"top"===this._position)u="undefined"===typeof g.options.labelWrap?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*
this.chart.height>>0:1.5*this.labelFontSize;if("left"===this._position||"right"===this._position)u="undefined"===typeof g.options.labelWrap?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*this.chart.width>>0:1.5*this.labelFontSize;d=x(g.options.labelBackgroundColor)?"#EEEEEE":g.options.labelBackgroundColor}else h="bottom"===this._position||"top"===this._position?0.9*this.chart.width>>0:0.9*this.chart.height>>0,u="undefined"===typeof g.options.labelWrap||g.labelWrap?"bottom"===this._position||
"top"===this._position?0.8*this.chart.width>>0:0.8*this.chart.height>>0:1.5*this.labelFontSize,d=x(g.options.labelBackgroundColor)?x(g.startValue)&&0!==g.startValue?v?"transparent":null:"#EEEEEE":g.options.labelBackgroundColor;a=new X(this.ctx,{x:0,y:0,backgroundColor:d,maxWidth:g.options.labelMaxWidth?g.options.labelMaxWidth:h,maxHeight:u,angle:this.labelAngle,text:g.labelFormatter?g.labelFormatter({chart:this.chart,axis:this,stripLine:g}):g.label,horizontalAlign:"left",fontSize:"outside"===g.labelPlacement?
g.options.labelFontSize?g.options.labelFontSize:this.labelFontSize:g.labelFontSize,fontFamily:"outside"===g.labelPlacement?g.options.labelFontFamily?g.options.labelFontFamily:this.labelFontFamily:g.labelFontFamily,fontWeight:"outside"===g.labelPlacement?g.options.fontWeight?g.options.fontWeight:this.fontWeight:g.fontWeight,fontColor:g.options.labelFontColor||g.color,fontStyle:"outside"===g.labelPlacement?g.options.fontStyle?g.options.fontStyle:this.fontWeight:g.fontStyle,textBaseline:"middle",borderThickness:0});
this._stripLineLabels.push({position:g.value,textBlock:a,effectiveHeight:null,stripLine:g})}};A.prototype.createLabelsAndCalculateWidth=function(){var a=0,d=0;this._labels=[];this._stripLineLabels=[];if("left"===this._position||"right"===this._position){this.createLabels();for(d=0;d<this._labels.length;d++){var b=this._labels[d].textBlock,c=b.measureText(),f=0,f=0===this.labelAngle?c.width:c.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(c.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle));
a<f&&(a=f);this._labels[d].effectiveWidth=f}for(d=0;d<this._stripLineLabels.length;d++)"outside"===this._stripLineLabels[d].stripLine.labelPlacement&&(this._stripLineLabels[d].stripLine.value>this.viewportMinimum&&this._stripLineLabels[d].stripLine.value<this.viewportMaximum)&&(b=this._stripLineLabels[d].textBlock,c=b.measureText(),f=0===this.labelAngle?c.width:c.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(c.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle)),a<f&&(a=f),
this._stripLineLabels[d].effectiveWidth=f)}return(this.title?this._titleTextBlock.measureText().height+2:0)+a+this.tickLength+5};A.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];this._stripLineLabels=[];var d,b=0;this.createLabels();if("bottom"===this._position||"top"===this._position){for(b=0;b<this._labels.length;b++){d=this._labels[b].textBlock;var c=d.measureText(),f=0,f=0===this.labelAngle?c.height:c.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(c.height-
d.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<f&&(a=f);this._labels[b].effectiveHeight=f}for(b=0;b<this._stripLineLabels.length;b++)"outside"===this._stripLineLabels[b].stripLine.labelPlacement&&(d=this._stripLineLabels[b].textBlock,c=d.measureText(),f=0===this.labelAngle?c.height:c.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(c.height-d.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),a<f&&(a=f),this._stripLineLabels[b].effectiveHeight=f)}return(this.title?
this._titleTextBlock.measureText().height+2:0)+a+this.tickLength+5};A.setLayoutAndRender=function(a,d,b,c,f,g){var h,l,k,n,m=a[0]?a[0].chart:d[0].chart,p=m.ctx;if(a&&0<a.length)for(var e=0;e<a.length;e++)a[e]&&a[e].calculateAxisParameters();if(d&&0<d.length)for(e=0;e<d.length;e++)d[e].calculateAxisParameters();if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].calculateAxisParameters();if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].calculateAxisParameters();var r=0,q=0,s=0,u=0,w=0,v=0,t=0,z,A,D=l=0,E,F,K,
I;E=F=K=I=!1;if(a&&0<a.length)for(e=0;e<a.length;e++)a[e]&&a[e].title&&(a[e]._titleTextBlock=new X(a[e].ctx,{text:a[e].title,horizontalAlign:"center",fontSize:a[e].titleFontSize,fontFamily:a[e].titleFontFamily,fontWeight:a[e].titleFontWeight,fontColor:a[e].titleFontColor,fontStyle:a[e].titleFontStyle,textBaseline:"top"}));if(d&&0<d.length)for(e=0;e<d.length;e++)d[e]&&d[e].title&&(d[e]._titleTextBlock=new X(d[e].ctx,{text:d[e].title,horizontalAlign:"center",fontSize:d[e].titleFontSize,fontFamily:d[e].titleFontFamily,
fontWeight:d[e].titleFontWeight,fontColor:d[e].titleFontColor,fontStyle:d[e].titleFontStyle,textBaseline:"top"}));if(b&&0<b.length)for(e=0;e<b.length;e++)b[e]&&b[e].title&&(b[e]._titleTextBlock=new X(b[e].ctx,{text:b[e].title,horizontalAlign:"center",fontSize:b[e].titleFontSize,fontFamily:b[e].titleFontFamily,fontWeight:b[e].titleFontWeight,fontColor:b[e].titleFontColor,fontStyle:b[e].titleFontStyle,textBaseline:"top"}));if(c&&0<c.length)for(e=0;e<c.length;e++)c[e]&&c[e].title&&(c[e]._titleTextBlock=
new X(c[e].ctx,{text:c[e].title,horizontalAlign:"center",fontSize:c[e].titleFontSize,fontFamily:c[e].titleFontFamily,fontWeight:c[e].titleFontWeight,fontColor:c[e].titleFontColor,fontStyle:c[e].titleFontStyle,textBaseline:"top"}));if("normal"===f){var u=[],w=[],v=[],t=[],G=[],H=[],J=[],M=[];if(a&&0<a.length)for(e=0;e<a.length;e++)a[e]&&a[e].title&&(a[e]._titleTextBlock.maxWidth=a[e].titleMaxWidth||g.width,a[e]._titleTextBlock.maxHeight=a[e].titleWrap?0.8*g.height:1.5*a[e].titleFontSize,a[e]._titleTextBlock.angle=
0);if(d&&0<d.length)for(e=0;e<d[e].length;e++)d[e]&&d[e].title&&(d[e]._titleTextBlock.maxWidth=d[e].titleMaxWidth||g.width,d[e]._titleTextBlock.maxHeight=d[e].titleWrap?0.8*g.height:1.5*d[e].titleFontSize,d[e]._titleTextBlock.angle=0);if(b&&0<b.length)for(e=0;e<b.length;e++)b[e]&&b[e].title&&(b[e]._titleTextBlock.maxWidth=b[e].titleMaxWidth||g.height,b[e]._titleTextBlock.maxHeight=b[e].titleWrap?0.8*g.width:1.5*b[e].titleFontSize,b[e]._titleTextBlock.angle=-90);if(c&&0<c.length)for(e=0;e<c.length;e++)c[e]&&
c[e].title&&(c[e]._titleTextBlock.maxWidth=c[e].titleMaxWidth||g.height,c[e]._titleTextBlock.maxHeight=c[e].titleWrap?0.8*g.width:1.5*c[e].titleFontSize,c[e]._titleTextBlock.angle=90);for(;4>r;){var L=0,R=0,P=0,O=0,N=f=0,B=0,S=0,Y=0,W=0,V=0,U=0;if(b&&0<b.length)for(v=[],e=V=0;e<b.length;e++)v.push(Math.ceil(b[e]?b[e].createLabelsAndCalculateWidth():0)),V+=v[e],B+=b[e]?b[e].margin:0;else v.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateWidth():0));J.push(v);if(c&&0<c.length)for(t=[],e=U=0;e<c.length;e++)t.push(Math.ceil(c[e]?
c[e].createLabelsAndCalculateWidth():0)),U+=t[e],S+=c[e]?c[e].margin:0;else t.push(Math.ceil(c[0]?c[0].createLabelsAndCalculateWidth():0));M.push(t);h=Math.round(g.x1+V+B);k=Math.round(g.x2-U-S>m.width-10?m.width-10:g.x2-U-S);if(a&&0<a.length)for(u=[],e=Y=0;e<a.length;e++)a[e]&&(a[e].lineCoordinates={}),a[e].lineCoordinates.width=Math.abs(k-h),a[e].title&&(a[e]._titleTextBlock.maxWidth=0<a[e].titleMaxWidth&&a[e].titleMaxWidth<a[e].lineCoordinates.width?a[e].titleMaxWidth:a[e].lineCoordinates.width),
u.push(Math.ceil(a[e]?a[e].createLabelsAndCalculateHeight():0)),Y+=u[e],f+=a[e]?a[e].margin:0;else u.push(Math.ceil(a[0]?a[0].createLabelsAndCalculateHeight():0));G.push(u);if(d&&0<d.length)for(w=[],e=W=0;e<d.length;e++)d[e]&&(d[e].lineCoordinates={}),d[e].lineCoordinates.width=Math.abs(k-h),d[e].title&&(d[e]._titleTextBlock.maxWidth=0<d[e].titleMaxWidth&&d[e].titleMaxWidth<d[e].lineCoordinates.width?d[e].titleMaxWidth:d[e].lineCoordinates.width),w.push(Math.ceil(d[e]?d[e].createLabelsAndCalculateHeight():
0)),W+=w[e],N+=d[e]?d[e].margin:0;else w.push(Math.ceil(d[0]?d[0].createLabelsAndCalculateHeight():0));H.push(w);if(a&&0<a.length)for(e=0;e<a.length;e++)a[e]&&(a[e].lineCoordinates.x1=h,a[e].lineCoordinates.x2=Math.round(g.x2-U-S>m.width-10?m.width-10:g.x2-U-S),a[e]._labels&&1<a[e]._labels.length&&(l=n=0,n=a[e]._labels[1],l="dateTime"===a[e].chart.plotInfo.axisXValueType?a[e]._labels[a[e]._labels.length-2]:a[e]._labels[a[e]._labels.length-1],q=n.textBlock.width*Math.cos(Math.PI/180*Math.abs(n.textBlock.angle))+
(n.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(n.textBlock.angle)),s=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle))),a[e]&&(a[e].labelAutoFit&&!x(z)&&!x(A))&&(l=0,0<a[e].labelAngle?A+s>k&&(l+=0<a[e].labelAngle?A+s-k-U:0):0>a[e].labelAngle?z-q<h&&z-q<a[e].viewportMinimum&&(D=h-(B+a[e].tickLength+v+z-q+a[e].labelFontSize/2)):0===a[e].labelAngle&&(A+s>k&&(l=A+
s/2-k-U),z-q<h&&z-q<a[e].viewportMinimum&&(D=h-B-a[e].tickLength-v-z+q/2)),a[e].viewportMaximum===a[e].maximum&&a[e].viewportMinimum===a[e].minimum&&0<a[e].labelAngle&&0<l?k-=l:a[e].viewportMaximum===a[e].maximum&&a[e].viewportMinimum===a[e].minimum&&0>a[e].labelAngle&&0<D?h+=D:a[e].viewportMaximum===a[e].maximum&&a[e].viewportMinimum===a[e].minimum&&0===a[e].labelAngle&&(0<D&&(h+=D),0<l&&(k-=l))),m.panEnabled?Y=m.sessionVariables.axisX.height:m.sessionVariables.axisX.height=Y,l=Math.round(g.y2-Y-
f+L),n=Math.round(g.y2),a[e].lineCoordinates.x2=k,a[e].lineCoordinates.width=k-h,a[e].lineCoordinates.y1=l,a[e].lineCoordinates.y2=l,a[e].bounds={x1:h,y1:l,x2:k,y2:n-(Y+f-u[e]-L),width:k-h,height:n-l}),L+=u[e]+a[e].margin;if(d&&0<d.length)for(e=0;e<d.length;e++)d[e].lineCoordinates.x1=Math.round(g.x1+V+B),d[e].lineCoordinates.x2=Math.round(g.x2-U-S>m.width-10?m.width-10:g.x2-U-S),d[e].lineCoordinates.width=Math.abs(k-h),d[e]._labels&&1<d[e]._labels.length&&(n=d[e]._labels[1],l="dateTime"===d[e].chart.plotInfo.axisXValueType?
d[e]._labels[d[e]._labels.length-2]:d[e]._labels[d[e]._labels.length-1],q=n.textBlock.width*Math.cos(Math.PI/180*Math.abs(n.textBlock.angle))+(n.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(n.textBlock.angle)),s=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle))),m.panEnabled?W=m.sessionVariables.axisX2.height:m.sessionVariables.axisX2.height=W,l=Math.round(g.y1),
n=Math.round(g.y2+d[e].margin),d[e].lineCoordinates.y1=l+W+N-R,d[e].lineCoordinates.y2=l,d[e].bounds={x1:h,y1:l+(W+N-w[e]-R),x2:k,y2:n,width:k-h,height:n-l},R+=w[e]+d[e].margin;if(b&&0<b.length)for(e=0;e<b.length;e++)B=10,b[e]&&(h=Math.round(a[0]?a[0].lineCoordinates.x1:d[0].lineCoordinates.x1),B=b[e]._labels&&0<b[e]._labels.length?b[e]._labels[b[e]._labels.length-1].textBlock.height/2:10,l=Math.round(g.y1+W+N<Math.max(B,10)?Math.max(B,10):g.y1+W+N),k=Math.round(a[0]?a[0].lineCoordinates.x1:d[0].lineCoordinates.x1),
B=0<a.length?0:b[e]._labels[0].textBlock.height/2,n=Math.round(g.y2-Y-f-B),b[e].lineCoordinates={x1:k-P,y1:l,x2:k-P,y2:n,height:Math.abs(n-l)},b[e].bounds={x1:h-(v[e]+P),y1:l,x2:k,y2:n,width:k-h,height:n-l},b[e].title&&(b[e]._titleTextBlock.maxWidth=0<b[e].titleMaxWidth&&b[e].titleMaxWidth<b[e].lineCoordinates.height?b[e].titleMaxWidth:b[e].lineCoordinates.height),P+=v[e]+b[e].margin);if(c&&0<c.length)for(e=0;e<c.length;e++)c[e]&&(h=Math.round(a[0]?a[0].lineCoordinates.x2:d[0].lineCoordinates.x2),
k=Math.round(h),B=c[e]._labels&&0<c[e]._labels.length?c[e]._labels[c[e]._labels.length-1].textBlock.height/2:0,l=Math.round(g.y1+W+N<Math.max(B,10)?Math.max(B,10):g.y1+W+N),B=0<a.length?0:c[e]._labels[0].textBlock.height/2,n=Math.round(g.y2-(Y+f+B)),c[e].lineCoordinates={x1:h+O,y1:l,x2:h+O,y2:n,height:Math.abs(n-l)},c[e].bounds={x1:h,y1:l,x2:k+(t[e]+O),y2:n,width:k-h,height:n-l},c[e].title&&(c[e]._titleTextBlock.maxWidth=0<c[e].titleMaxWidth&&c[e].titleMaxWidth<c[e].lineCoordinates.height?c[e].titleMaxWidth:
c[e].lineCoordinates.height),O+=t[e]+c[e].margin);if(a&&0<a.length)for(e=0;e<a.length;e++)a[e]&&(a[e].calculateValueToPixelConversionParameters(),a[e]._labels&&1<a[e]._labels.length&&(z=(a[e].logarithmic?Math.log(a[e]._labels[1].position/a[e].viewportMinimum)/a[e].conversionParameters.lnLogarithmBase:a[e]._labels[1].position-a[e].viewportMinimum)*Math.abs(a[e].conversionParameters.pixelPerUnit)+a[e].lineCoordinates.x1,A="dateTime"===a[e].chart.plotInfo.axisXValueType?(a[e].logarithmic?Math.log(a[e]._labels[a[e]._labels.length-
2].position/a[e].viewportMinimum)/a[e].conversionParameters.lnLogarithmBase:a[e]._labels[a[e]._labels.length-2].position-a[e].viewportMinimum)*Math.abs(a[e].conversionParameters.pixelPerUnit)+a[e].lineCoordinates.x1:(a[e].logarithmic?Math.log(a[e]._labels[a[e]._labels.length-1].position/a[e].viewportMinimum)/a[e].conversionParameters.lnLogarithmBase:a[e]._labels[a[e]._labels.length-1].position-a[e].viewportMinimum)*Math.abs(a[e].conversionParameters.pixelPerUnit)+a[e].lineCoordinates.x1));if(d&&0<
d.length)for(e=0;e<d.length;e++)d[e].calculateValueToPixelConversionParameters(),d[e]._labels&&1<d[e]._labels.length&&(z=(d[e].logarithmic?Math.log(d[e]._labels[1].position/d[e].viewportMinimum)/d[e].conversionParameters.lnLogarithmBase:d[e]._labels[1].position-d[e].viewportMinimum)*Math.abs(d[e].conversionParameters.pixelPerUnit)+d[e].lineCoordinates.x1,A="dateTime"===d[e].chart.plotInfo.axisXValueType?(d[e].logarithmic?Math.log(d[e]._labels[d[e]._labels.length-2].position/d[e].viewportMinimum)/
d[e].conversionParameters.lnLogarithmBase:d[e]._labels[d[e]._labels.length-2].position-d[e].viewportMinimum)*Math.abs(d[e].conversionParameters.pixelPerUnit)+d[e].lineCoordinates.x1:(d[e].logarithmic?Math.log(d[e]._labels[d[e]._labels.length-1].position/d[e].viewportMinimum)/d[e].conversionParameters.lnLogarithmBase:d[e]._labels[d[e]._labels.length-1].position-d[e].viewportMinimum)*Math.abs(d[e].conversionParameters.pixelPerUnit)+d[e].lineCoordinates.x1);if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].calculateValueToPixelConversionParameters();
if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].calculateValueToPixelConversionParameters();if(0<r){if(a&&0<a.length)for(e=0;e<a.length;e++)E=G[r-1][e]===G[r][e]?!0:!1;else E=!0;if(d&&0<d.length)for(e=0;e<d.length;e++)F=H[r-1][e]===H[r][e]?!0:!1;else F=!0;if(b&&0<b.length)for(e=0;e<b.length;e++)K=J[r-1][e]===J[r][e]?!0:!1;else K=!0;if(c&&0<c.length)for(e=0;e<c.length;e++)I=M[r-1][e]===M[r][e]?!0:!1;else I=!0}if(E&&F&&K&&I)break;r++}p.save();p.beginPath();a[0]&&p.rect(5,a[0].bounds.y1,a[0].chart.width-
10,a[0].bounds.height);d[0]&&p.rect(5,d[d.length-1].bounds.y1,d[0].chart.width-10,d[0].bounds.height);p.clip();if(a&&0<a.length)for(e=0;e<a.length;e++)a[e].renderLabelsTicksAndTitle();if(d&&0<d.length)for(e=0;e<d.length;e++)d[e].renderLabelsTicksAndTitle();p.restore();if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].renderLabelsTicksAndTitle();if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].renderLabelsTicksAndTitle()}else{z=[];A=[];D=[];q=[];s=[];G=[];H=[];J=[];if(a&&0<a.length)for(e=0;e<a.length;e++)a[e]&&
a[e].title&&(a[e]._titleTextBlock.maxWidth=a[e].titleMaxWidth||g.width,a[e]._titleTextBlock.maxHeight=a[e].titleWrap?0.8*g.height:1.5*a[e].titleFontSize,a[e]._titleTextBlock.angle=-90);if(d&&0<d.length)for(e=0;e<d.length;e++)d[e]&&d[e].title&&(d[e]._titleTextBlock.maxWidth=d[e].titleMaxWidth||g.width,d[e]._titleTextBlock.maxHeight=d[e].titleWrap?0.8*g.height:1.5*d[e].titleFontSize,d[e]._titleTextBlock.angle=90);if(b&&0<b.length)for(e=0;e<b.length;e++)b[e]&&b[e].title&&(b[e]._titleTextBlock.maxWidth=
b[e].titleMaxWidth||g.width,b[e]._titleTextBlock.maxHeight=b[e].titleWrap?0.8*g.height:1.5*b[e].titleFontSize,b[e]._titleTextBlock.angle=0);if(c&&0<c.length)for(e=0;e<c.length;e++)c[e]&&c[e].title&&(c[e]._titleTextBlock.maxWidth=c[e].titleMaxWidth||g.width,c[e]._titleTextBlock.maxHeight=c[e].titleWrap?0.8*g.height:1.5*c[e].titleFontSize,c[e]._titleTextBlock.angle=0);for(;4>r;){W=Y=V=O=S=B=N=f=P=M=R=L=0;if(a&&0<a.length)for(D=[],e=Y=0;e<a.length;e++)D.push(Math.ceil(a[e]?a[e].createLabelsAndCalculateWidth():
0)),Y+=D[e],f+=a[e]?a[e].margin:0;else D.push(Math.ceil(a[0]?a[0].createLabelsAndCalculateWidth():0));H.push(D);if(d&&0<d.length)for(q=[],e=W=0;e<d.length;e++)q.push(Math.ceil(d[e]?d[e].createLabelsAndCalculateWidth():0)),W+=q[e],N+=d[e]?d[e].margin:0;else q.push(Math.ceil(d[0]?d[0].createLabelsAndCalculateWidth():0));J.push(q);if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].lineCoordinates={},h=Math.round(g.x1+Y+f),k=Math.round(g.x2-W-N>m.width-10?m.width-10:g.x2-W-N),b[e].labelAutoFit&&!x(u)&&(0<!a.length&&
(h=0>b[e].labelAngle?Math.max(h,u):0===b[e].labelAngle?Math.max(h,u/2):h),0<!d.length&&(k=0<b[e].labelAngle?k-w/2:0===b[e].labelAngle?k-w/2:k)),b[e].lineCoordinates.x1=h,b[e].lineCoordinates.x2=k,b[e].lineCoordinates.width=Math.abs(k-h),b[e].title&&(b[e]._titleTextBlock.maxWidth=0<b[e].titleMaxWidth&&b[e].titleMaxWidth<b[e].lineCoordinates.width?b[e].titleMaxWidth:b[e].lineCoordinates.width);if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].lineCoordinates={},h=Math.round(g.x1+Y+f),k=Math.round(g.x2-W-
N>c[e].chart.width-10?c[e].chart.width-10:g.x2-W-N),c[e]&&c[e].labelAutoFit&&!x(v)&&(0<!a.length&&(h=0<c[e].labelAngle?Math.max(h,v):0===c[e].labelAngle?Math.max(h,v/2):h),0<!d.length&&(k-=t/2)),c[e].lineCoordinates.x1=h,c[e].lineCoordinates.x2=k,c[e].lineCoordinates.width=Math.abs(k-h),c[e].title&&(c[e]._titleTextBlock.maxWidth=0<c[e].titleMaxWidth&&c[e].titleMaxWidth<c[e].lineCoordinates.width?c[e].titleMaxWidth:c[e].lineCoordinates.width);if(b&&0<b.length)for(z=[],e=O=0;e<b.length;e++)z.push(Math.ceil(b[e]?
b[e].createLabelsAndCalculateHeight():0)),O+=z[e]+b[e].margin,B+=b[e].margin;else z.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateHeight():0));s.push(z);if(c&&0<c.length)for(A=[],e=V=0;e<c.length;e++)A.push(Math.ceil(c[e]?c[e].createLabelsAndCalculateHeight():0)),V+=A[e],S+=c[e].margin;else A.push(Math.ceil(c[0]?c[0].createLabelsAndCalculateHeight():0));G.push(A);if(b&&0<b.length)for(e=0;e<b.length;e++)0<b[e]._labels.length&&(n=b[e]._labels[0],l=b[e]._labels[b[e]._labels.length-1],u=n.textBlock.width*
Math.cos(Math.PI/180*Math.abs(n.textBlock.angle))+(n.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(n.textBlock.angle)),w=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));if(c&&0<c.length)for(e=0;e<c.length;e++)c[e]&&0<c[e]._labels.length&&(n=c[e]._labels[0],l=c[e]._labels[c[e]._labels.length-1],v=n.textBlock.width*Math.cos(Math.PI/180*Math.abs(n.textBlock.angle))+
(n.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(n.textBlock.angle)),t=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));if(m.panEnabled)for(e=0;e<b.length;e++)z[e]=m.sessionVariables.axisY.height;else for(e=0;e<b.length;e++)m.sessionVariables.axisY.height=z[e];if(b&&0<b.length)for(e=b.length-1;0<=e;e--)l=Math.round(g.y2),n=Math.round(g.y2>b[e].chart.height-10?
b[e].chart.height-10:g.y2),b[e].lineCoordinates.y1=l-(z[e]+b[e].margin+L),b[e].lineCoordinates.y2=l-(z[e]+b[e].margin+L),b[e].bounds={x1:h,y1:l-(z[e]+L+b[e].margin),x2:k,y2:n-(L+b[e].margin),width:k-h,height:z[e]},b[e].title&&(b[e]._titleTextBlock.maxWidth=0<b[e].titleMaxWidth&&b[e].titleMaxWidth<b[e].lineCoordinates.width?b[e].titleMaxWidth:b[e].lineCoordinates.width),L+=z[e]+b[e].margin;if(c&&0<c.length)for(e=c.length-1;0<=e;e--)c[e]&&(l=Math.round(g.y1),n=Math.round(g.y1+(A[e]+c[e].margin+R)),
c[e].lineCoordinates.y1=n,c[e].lineCoordinates.y2=n,c[e].bounds={x1:h,y1:l+(c[e].margin+R),x2:k,y2:n,width:k-h,height:V},c[e].title&&(c[e]._titleTextBlock.maxWidth=0<c[e].titleMaxWidth&&c[e].titleMaxWidth<c[e].lineCoordinates.width?c[e].titleMaxWidth:c[e].lineCoordinates.width),R+=A[e]+c[e].margin);if(a&&0<a.length)for(e=0;e<a.length;e++){B=a[e]._labels&&0<a[e]._labels.length?a[e]._labels[0].textBlock.fontSize/2:0;h=Math.round(g.x1+f);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(B,
10)?Math.max(B,10):g.y1):g.y1<Math.max(B,10)?Math.max(B,10):g.y1;k=Math.round(g.x1+Y+f);n=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-O>m.height-Math.max(B,10)?m.height-Math.max(B,10):g.y2-O):g.y2>m.height-Math.max(B,10)?m.height-Math.max(B,10):g.y2;if(b&&0<b.length)for(B=0;B<b.length;B++)b[B]&&b[B].labelAutoFit&&(k=0>b[B].labelAngle?Math.max(k,u):0===b[B].labelAngle?Math.max(k,u/2):k,h=0>b[B].labelAngle||0===b[B].labelAngle?k-Y:h);if(c&&0<c.length)for(B=0;B<c.length;B++)c[B]&&c[B].labelAutoFit&&
(k=c[B].lineCoordinates.x1,h=k-Y);a[e].lineCoordinates={x1:k-M,y1:l,x2:k-M,y2:n,height:Math.abs(n-l)};a[e].bounds={x1:k-(D[e]+M),y1:l,x2:k,y2:n,width:k-h,height:n-l};a[e].title&&(a[e]._titleTextBlock.maxWidth=0<a[e].titleMaxWidth&&a[e].titleMaxWidth<a[e].lineCoordinates.height?a[e].titleMaxWidth:a[e].lineCoordinates.height);a[e].calculateValueToPixelConversionParameters();M+=D[e]+a[e].margin}if(d&&0<d.length)for(e=0;e<d.length;e++){B=d[e]._labels&&0<d[e]._labels.length?d[e]._labels[0].textBlock.fontSize/
2:0;h=Math.round(g.x1-f);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(B,10)?Math.max(B,10):g.y1):g.y1<Math.max(B,10)?Math.max(B,10):g.y1;k=Math.round(g.x2-W-N);n=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-O>m.height-Math.max(B,10)?m.height-Math.max(B,10):g.y2-O):g.y2>m.height-Math.max(B,10)?m.height-Math.max(B,10):g.y2;if(b&&0<b.length)for(B=0;B<b.length;B++)b[B]&&b[B].labelAutoFit&&(k=0>b[e].labelAngle?Math.max(k,u):0===b[e].labelAngle?Math.max(k,u/2):k,h=
0>b[B].labelAngle||0===b[B].labelAngle?k-W:h);if(c&&0<c.length)for(B=0;B<c.length;B++)c[B]&&c[B].labelAutoFit&&(k=c[B].lineCoordinates.x2,h=k-W);d[e].lineCoordinates={x1:k+P,y1:l,x2:k+P,y2:n,height:Math.abs(n-l)};d[e].bounds={x1:h,y1:l,x2:k+q[e]+P,y2:n,width:k-h,height:n-l};d[e].title&&(d[e]._titleTextBlock.maxWidth=0<d[e].titleMaxWidth&&d[e].titleMaxWidth<d[e].lineCoordinates.height?d[e].titleMaxWidth:d[e].lineCoordinates.height);d[e].calculateValueToPixelConversionParameters();P+=q[e]+d[e].margin}if(b&&
0<b.length)for(e=0;e<b.length;e++)b[e].calculateValueToPixelConversionParameters();if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].calculateValueToPixelConversionParameters();if(0<r){if(a&&0<a.length)for(e=0;e<a.length;e++)E=H[r-1][e]===H[r][e]?!0:!1;else E=!0;if(d&&0<d.length)for(e=0;e<d.length;e++)F=J[r-1][e]===J[r][e]?!0:!1;else F=!0;if(b&&0<b.length)for(e=0;e<b.length;e++)K=s[r-1][e]===s[r][e]?!0:!1;else K=!0;if(c&&0<c.length)for(e=0;e<c.length;e++)I=G[r-1][e]===G[r][e]?!0:!1;else I=!0}if(E&&F&&
K&&I)break;r++}if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].renderLabelsTicksAndTitle();if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].renderLabelsTicksAndTitle();if(a&&0<a.length)for(e=0;e<a.length;e++)a[e].renderLabelsTicksAndTitle();if(d&&0<d.length)for(e=0;e<d.length;e++)d[e].renderLabelsTicksAndTitle()}m.preparePlotArea();g=m.plotArea;p.save();p.beginPath();p.rect(g.x1,g.y1,Math.abs(g.x2-g.x1),Math.abs(g.y2-g.y1));p.clip();if(a&&0<a.length)for(e=0;e<a.length;e++)a[e].renderStripLinesOfThicknessType("value");
if(d&&0<d.length)for(e=0;e<d.length;e++)d[e].renderStripLinesOfThicknessType("value");if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].renderStripLinesOfThicknessType("value");if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].renderStripLinesOfThicknessType("value");if(a&&0<a.length)for(e=0;e<a.length;e++)a[e].renderInterlacedColors();if(d&&0<d.length)for(e=0;e<d.length;e++)d[e].renderInterlacedColors();if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].renderInterlacedColors();if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].renderInterlacedColors();
p.restore();if(a&&0<a.length)for(e=0;e<a.length;e++)a[e].renderGrid();if(d&&0<d.length)for(e=0;e<d.length;e++)d[e].renderGrid();if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].renderGrid();if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].renderGrid();if(a&&0<a.length)for(e=0;e<a.length;e++)a[e].renderAxisLine();if(d&&0<d.length)for(e=0;e<d.length;e++)d[e].renderAxisLine();if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].renderAxisLine();if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].renderAxisLine();if(a&&0<a.length)for(e=
0;e<a.length;e++)a[e].renderStripLinesOfThicknessType("pixel");if(d&&0<d.length)for(e=0;e<d.length;e++)d[e].renderStripLinesOfThicknessType("pixel");if(b&&0<b.length)for(e=0;e<b.length;e++)b[e].renderStripLinesOfThicknessType("pixel");if(c&&0<c.length)for(e=0;e<c.length;e++)c[e].renderStripLinesOfThicknessType("pixel")};A.prototype.renderLabelsTicksAndTitle=function(){var a=!1,d=0,b=0,c=1,f=0;0!==this.labelAngle&&360!==this.labelAngle&&(c=1.2);if("undefined"===typeof this.options.interval){if("bottom"===
this._position||"top"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var d=[],c=0!==this.labelAngle&&360!==this.labelAngle?1:1.2,g,h=this.viewportMaximum,l=this.lineCoordinates.width/Math.log(this.range),k=this._labels.length-1;0<=k;k--){m=this._labels[k];if(m.position<this.viewportMinimum)break;m.position>this.viewportMaximum||!(k===this._labels.length-1||g<Math.log(h/m.position)*l/c)||(d.push(m),h=m.position,g=m.textBlock.width*Math.abs(Math.cos(Math.PI/
180*this.labelAngle))+m.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=d}else{for(k=0;k<this._labels.length;k++)m=this._labels[k],m.position<this.viewportMinimum||(m=m.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+m.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),d+=m);d>this.lineCoordinates.width*c&&this.labelAutoFit&&(a=!0)}if("left"===this._position||"right"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var d=
[],n,h=this.viewportMaximum,l=this.lineCoordinates.height/Math.log(this.range),k=this._labels.length-1;0<=k;k--){m=this._labels[k];if(m.position<this.viewportMinimum)break;m.position>this.viewportMaximum||!(k===this._labels.length-1||n<Math.log(h/m.position)*l)||(d.push(m),h=m.position,n=m.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+m.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=d}else{for(k=0;k<this._labels.length;k++)m=this._labels[k],m.position<
this.viewportMinimum||(m=m.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+m.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),b+=m);b>this.lineCoordinates.height*c&&this.labelAutoFit&&(a=!0)}}if("bottom"===this._position){for(var m,k=0;k<this._labels.length;k++)m=this._labels[k],m.position<this.viewportMinimum||m.position>this.viewportMaximum||(b=this.getPixelCoordinatesOnAxis(m.position),a&&0!==f++%2&&this.labelAutoFit||(this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,
this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(b.x<<0)+0.5:b.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,b.y<<0),this.ctx.lineTo(c,b.y+this.tickLength<<0),this.ctx.stroke()),0===m.textBlock.angle?(b.x-=m.textBlock.width/2,b.y+=this.tickLength+m.textBlock.fontSize/2):(b.x-=0>this.labelAngle?m.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,b.y+=this.tickLength+Math.abs(0>this.labelAngle?m.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5)),m.textBlock.x=b.x,m.textBlock.y=
b.y,m.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.bounds.y2-this._titleTextBlock.height-3,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("top"===this._position){for(k=0;k<this._labels.length;k++)m=this._labels[k],m.position<this.viewportMinimum||m.position>this.viewportMaximum||(b=this.getPixelCoordinatesOnAxis(m.position),
a&&0!==f++%2&&this.labelAutoFit||(this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(b.x<<0)+0.5:b.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,b.y<<0),this.ctx.lineTo(c,b.y-this.tickLength<<0),this.ctx.stroke()),0===m.textBlock.angle?(b.x-=m.textBlock.width/2,b.y-=this.tickLength+m.textBlock.height/2):(b.x+=(m.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?m.textBlock.width*
Math.cos(Math.PI/180*this.labelAngle):0),b.y-=this.tickLength+(m.textBlock.height/2*Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?m.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0))),m.textBlock.x=b.x,m.textBlock.y=b.y,m.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.bounds.y1+1,this.titleMaxWidth=this._titleTextBlock.maxWidth,
this._titleTextBlock.render(!0))}else if("left"===this._position){for(k=0;k<this._labels.length;k++)m=this._labels[k],m.position<this.viewportMinimum||m.position>this.viewportMaximum||(b=this.getPixelCoordinatesOnAxis(m.position),a&&0!==f++%2&&this.labelAutoFit||(this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(b.y<<0)+0.5:b.y<<0,this.ctx.beginPath(),this.ctx.moveTo(b.x<<0,c),this.ctx.lineTo(b.x-this.tickLength<<0,c),this.ctx.stroke()),
0===this.labelAngle?(m.textBlock.y=b.y,m.textBlock.x=b.x-m.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5):(m.textBlock.y=b.y-m.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),m.textBlock.x=0<this.labelAngle?b.x-m.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:b.x-m.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(m.textBlock.height-m.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength),m.textBlock.render(!0)));
this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x1+1,this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("right"===this._position){for(k=0;k<this._labels.length;k++)m=this._labels[k],m.position<this.viewportMinimum||m.position>this.viewportMaximum||(b=this.getPixelCoordinatesOnAxis(m.position),a&&0!==f++%2&&this.labelAutoFit||
(this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(b.y<<0)+0.5:b.y<<0,this.ctx.beginPath(),this.ctx.moveTo(b.x<<0,c),this.ctx.lineTo(b.x+this.tickLength<<0,c),this.ctx.stroke()),0===this.labelAngle?(m.textBlock.y=b.y,m.textBlock.x=b.x+this.tickLength+5):(m.textBlock.y=0>this.labelAngle?b.y:b.y-(m.textBlock.height-m.textBlock.fontSize/2-5)*Math.cos(Math.PI/180*this.labelAngle),m.textBlock.x=0<this.labelAngle?b.x+(m.textBlock.height-
m.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:b.x+this.tickLength+5),m.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x2-1,this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}};A.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,d,b,c=this.chart.plotArea,
f=0;d=!0;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,f=0;f<this._labels.length;f++)d?(d=this.getPixelCoordinatesOnAxis(this._labels[f].position),b=f+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[f+1].position),a.fillRect(Math.min(b.x,d.x),c.y1,Math.abs(b.x-d.x),Math.abs(c.y1-c.y2)),d=!1):d=!0;else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=
this.interlacedColor,f=0;f<this._labels.length;f++)d?(b=this.getPixelCoordinatesOnAxis(this._labels[f].position),d=f+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[f+1].position),a.fillRect(c.x1,Math.min(b.y,d.y),Math.abs(c.x1-c.x2),Math.abs(d.y-b.y)),d=!1):d=!0;a.beginPath()};A.prototype.renderStripLinesOfThicknessType=function(a){if(this.stripLines&&0<this.stripLines.length&&a){for(var d=this,b,c=0,f=0,g=!1,h=!1,l=[],k=[],
h=!1,c=0;c<this.stripLines.length;c++){var n=this.stripLines[c];n._thicknessType===a&&("pixel"===a&&(n.value<this.viewportMinimum||n.value>this.viewportMaximum||isNaN(this.range))||l.push(n))}for(c=0;c<this._stripLineLabels.length;c++)if(n=this.stripLines[c],b=this._stripLineLabels[c],!(b.position<this.viewportMinimum||b.position>this.viewportMaximum||isNaN(this.range))){a=this.getPixelCoordinatesOnAxis(b.position);if("outside"===b.stripLine.labelPlacement)if(n&&(this.ctx.strokeStyle=n.color,"pixel"===
n._thicknessType&&(this.ctx.lineWidth=n.thickness)),"bottom"===this._position){var m=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0;this.ctx.beginPath();this.ctx.moveTo(m,a.y<<0);this.ctx.lineTo(m,a.y+this.tickLength<<0);this.ctx.stroke();0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y+=this.tickLength+b.textBlock.fontSize/2):(a.x-=0>this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,a.y+=this.tickLength+Math.abs(0>this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-
5:5))}else"top"===this._position?(m=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,this.ctx.beginPath(),this.ctx.moveTo(m,a.y<<0),this.ctx.lineTo(m,a.y-this.tickLength<<0),this.ctx.stroke(),0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y-=this.tickLength+b.textBlock.height):(a.x+=(b.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),a.y-=this.tickLength+(b.textBlock.height*Math.cos(Math.PI/
180*this.labelAngle)+(0<this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))):"left"===this._position?(m=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,m),this.ctx.lineTo(a.x-this.tickLength<<0,m),this.ctx.stroke(),0===this.labelAngle?a.x=a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:(a.y-=b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x-b.textBlock.width*Math.cos(Math.PI/
180*this.labelAngle)-this.tickLength-5:a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength)):"right"===this._position&&(m=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,m),this.ctx.lineTo(a.x+this.tickLength<<0,m),this.ctx.stroke(),0===this.labelAngle?a.x=a.x+this.tickLength+5:(a.y=0>this.labelAngle?a.y:a.y-(b.textBlock.height-b.textBlock.fontSize/2-
5)*Math.cos(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:a.x+this.tickLength+5));else b.textBlock.angle=-90,"bottom"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?x(n.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/
2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,x(n.startValue)?a.x+=b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y1+b.textBlock.width+3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-b.textBlock.width-3:"center"===
b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y1+3):"top"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?x(n.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,x(n.startValue)?a.x+=
b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+b.textBlock.width+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y2-3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y2-
b.textBlock.width-3):"left"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-b.textBlock.height>this.chart.plotArea.y1?x(n.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:x(n.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/
2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x2-b.textBlock.width-3):"right"===this._position&&(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-+b.textBlock.height>this.chart.plotArea.y1?
x(n.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2-3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:x(n.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x2-b.textBlock.width-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x1+
3);b.textBlock.x=a.x;b.textBlock.y=a.y;k.push(b)}if(!h){h=!1;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();for(c=0;c<l.length;c++)n=l[c],n.showOnTop?g||(g=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();
for(f=0;f<l.length;f++)n=l[f],n.showOnTop&&n.render();this.ctx.restore()},n)):n.render();for(c=0;c<k.length;c++)b=k[c],b.stripLine.showOnTop?h||(h=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(f=0;f<k.length;f++)b=k[f],"inside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&(d.ctx.save(),d.ctx.beginPath(),d.ctx.rect(d.chart.plotArea.x1,d.chart.plotArea.y1,d.chart.plotArea.width,d.chart.plotArea.height),d.ctx.clip(),b.textBlock.render(!0),d.ctx.restore())},b.textBlock)):
"inside"===b.stripLine.labelPlacement&&b.textBlock.render(!0);this.ctx.restore();h=!0}if(h)for(h=!1,c=0;c<k.length;c++)b=k[c],b.stripLine.showOnTop?h||(h=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(f=0;f<k.length;f++)b=k[f],"outside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&b.textBlock.render(!0)},b.textBlock)):"outside"===b.stripLine.labelPlacement&&b.textBlock.render(!0)}};A.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var a=
this.chart.ctx;a.save();var d,b=this.chart.plotArea;a.lineWidth=this.gridThickness;a.strokeStyle=this.gridColor;a.setLineDash&&a.setLineDash(F(this.gridDashType,this.gridThickness));if("bottom"===this._position||"top"===this._position)for(c=0;c<this._labels.length;c++)this._labels[c].position<this.viewportMinimum||this._labels[c].position>this.viewportMaximum||(a.beginPath(),d=this.getPixelCoordinatesOnAxis(this._labels[c].position),d=1===a.lineWidth%2?(d.x<<0)+0.5:d.x<<0,a.moveTo(d,b.y1<<0),a.lineTo(d,
b.y2<<0),a.stroke());else if("left"===this._position||"right"===this._position)for(var c=0;c<this._labels.length;c++)this._labels[c].position<this.viewportMinimum||this._labels[c].position>this.viewportMaximum||(a.beginPath(),d=this.getPixelCoordinatesOnAxis(this._labels[c].position),d=1===a.lineWidth%2?(d.y<<0)+0.5:d.y<<0,a.moveTo(b.x1<<0,d),a.lineTo(b.x2<<0,d),a.stroke());a.restore()}};A.prototype.renderAxisLine=function(){var a=this.chart.ctx;a.save();if("bottom"===this._position||"top"===this._position){if(this.lineThickness){a.lineWidth=
this.lineThickness;a.strokeStyle=this.lineColor?this.lineColor:"black";a.setLineDash&&a.setLineDash(F(this.lineDashType,this.lineThickness));var d=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:this.lineCoordinates.y1<<0;a.beginPath();a.moveTo(this.lineCoordinates.x1,d);a.lineTo(this.lineCoordinates.x2,d);a.stroke()}}else"left"!==this._position&&"right"!==this._position||!this.lineThickness||(a.lineWidth=this.lineThickness,a.strokeStyle=this.lineColor,a.setLineDash&&a.setLineDash(F(this.lineDashType,
this.lineThickness)),d=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<0,a.beginPath(),a.moveTo(d,this.lineCoordinates.y1),a.lineTo(d,this.lineCoordinates.y2),a.stroke());a.restore()};A.prototype.getPixelCoordinatesOnAxis=function(a){var d={};if("bottom"===this._position||"top"===this._position)d.x=this.convertValueToPixel(a),d.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)d.y=this.convertValueToPixel(a),d.x=this.lineCoordinates.x2;
return d};A.prototype.convertPixelToValue=function(a){if("undefined"===typeof a)return null;var d=0,d=0,d="number"===typeof a?a:"left"===this._position||"right"===this._position?a.y:a.x;return d=this.logarithmic?Math.pow(this.logarithmBase,(d-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit)*this.viewportMinimum:this.conversionParameters.minimum+(d-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit};A.prototype.convertValueToPixel=function(a){return this.logarithmic?
this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*Math.log(a/this.conversionParameters.minimum)/this.conversionParameters.lnLogarithmBase+0.5<<0:this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*(a-this.conversionParameters.minimum)+0.5<<0};A.prototype.setViewPortRange=function(a,d){this.sessionVariables.newViewportMinimum=this.viewportMinimum=Math.min(a,d);this.sessionVariables.newViewportMaximum=this.viewportMaximum=Math.max(a,d)};A.prototype.getXValueAt=
function(a){if(!a)return null;var d=null;"left"===this._position?d=this.convertPixelToValue(a.y):"bottom"===this._position&&(d=this.convertPixelToValue(a.x));return d};A.prototype.calculateValueToPixelConversionParameters=function(a){a={pixelPerUnit:null,minimum:null,reference:null};var d=this.lineCoordinates.width,b=this.lineCoordinates.height;a.minimum=this.viewportMinimum;if("bottom"===this._position||"top"===this._position)this.logarithmic?(a.lnLogarithmBase=Math.log(this.logarithmBase),a.pixelPerUnit=
(this.reversed?-1:1)*d*a.lnLogarithmBase/Math.log(Math.abs(this.range))):a.pixelPerUnit=(this.reversed?-1:1)*d/Math.abs(this.range),a.reference=this.reversed?this.lineCoordinates.x2:this.lineCoordinates.x1;if("left"===this._position||"right"===this._position)this.logarithmic?(a.lnLogarithmBase=Math.log(this.logarithmBase),a.pixelPerUnit=(this.reversed?1:-1)*b*a.lnLogarithmBase/Math.log(Math.abs(this.range))):a.pixelPerUnit=(this.reversed?1:-1)*b/Math.abs(this.range),a.reference=this.reversed?this.lineCoordinates.y1:
this.lineCoordinates.y2;this.conversionParameters=a};A.prototype.calculateAxisParameters=function(){if(this.logarithmic)this.calculateLogarithamicAxisParameters();else{var a=this.chart.layoutManager.getFreeSpace(),d=!1,b=!1;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?"xySwapped"===this.chart.plotInfo.axisPlacement?62:70:"xySwapped"===this.chart.plotInfo.axisPlacement?50:
40,c=4;"axisX"===this.type&&(c=600>this.maxWidth?8:6);var a=Math.max(c,Math.floor(this.maxWidth/a)),f,g,h,c=0;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;if("axisX"===this.type){if(this.dataSeries&&0<this.dataSeries.length)for(f=0;f<this.dataSeries.length;f++)"dateTime"===this.dataSeries[f].xValueType&&(b=!0);f=null!==this.viewportMinimum?this.viewportMinimum:
this.dataInfo.viewPortMin;g=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax;0===g-f&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,f-=c);Infinity!==this.dataInfo.minDiff?h=this.dataInfo.minDiff:1<g-f?h=0.5*Math.abs(g-f):(h=1,b&&(d=!0))}else"axisY"===this.type&&(f=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,g=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,isFinite(f)||isFinite(g)?isFinite(f)?
isFinite(g)||(g=f):f=g:(g="undefined"===typeof this.options.interval?-Infinity:this.options.interval,f=0),0===f&&0===g?(g+=9,f=0):0===g-f?(c=Math.min(Math.abs(0.01*Math.abs(g)),5),g+=c,f-=c):f>g?(c=Math.min(Math.abs(0.01*Math.abs(g-f)),5),0<=g?f=g-c:g=f+c):(c=Math.min(Math.abs(0.01*Math.abs(g-f)),0.05),0!==g&&(g+=c),0!==f&&(f-=c)),h=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-f?0.5*Math.abs(g-f):1,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&0<f&&(f=
0),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&0>g&&(g=0));c=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?g:this.viewportMaximum)-(isNaN(this.viewportMinimum)||null===this.viewportMinimum?f:this.viewportMinimum);if("axisX"===this.type&&b){this.intervalType||(c/1<=a?(this.interval=1,this.intervalType="millisecond"):c/2<=a?(this.interval=2,this.intervalType="millisecond"):c/5<=a?(this.interval=5,this.intervalType="millisecond"):c/10<=a?(this.interval=10,
this.intervalType="millisecond"):c/20<=a?(this.interval=20,this.intervalType="millisecond"):c/50<=a?(this.interval=50,this.intervalType="millisecond"):c/100<=a?(this.interval=100,this.intervalType="millisecond"):c/200<=a?(this.interval=200,this.intervalType="millisecond"):c/250<=a?(this.interval=250,this.intervalType="millisecond"):c/300<=a?(this.interval=300,this.intervalType="millisecond"):c/400<=a?(this.interval=400,this.intervalType="millisecond"):c/500<=a?(this.interval=500,this.intervalType=
"millisecond"):c/(1*H.secondDuration)<=a?(this.interval=1,this.intervalType="second"):c/(2*H.secondDuration)<=a?(this.interval=2,this.intervalType="second"):c/(5*H.secondDuration)<=a?(this.interval=5,this.intervalType="second"):c/(10*H.secondDuration)<=a?(this.interval=10,this.intervalType="second"):c/(15*H.secondDuration)<=a?(this.interval=15,this.intervalType="second"):c/(20*H.secondDuration)<=a?(this.interval=20,this.intervalType="second"):c/(30*H.secondDuration)<=a?(this.interval=30,this.intervalType=
"second"):c/(1*H.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):c/(2*H.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):c/(5*H.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):c/(10*H.minuteDuration)<=a?(this.interval=10,this.intervalType="minute"):c/(15*H.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):c/(20*H.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):c/(30*H.minuteDuration)<=a?(this.interval=30,this.intervalType=
"minute"):c/(1*H.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):c/(2*H.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):c/(3*H.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):c/(6*H.hourDuration)<=a?(this.interval=6,this.intervalType="hour"):c/(1*H.dayDuration)<=a?(this.interval=1,this.intervalType="day"):c/(2*H.dayDuration)<=a?(this.interval=2,this.intervalType="day"):c/(4*H.dayDuration)<=a?(this.interval=4,this.intervalType="day"):c/(1*H.weekDuration)<=a?(this.interval=
1,this.intervalType="week"):c/(2*H.weekDuration)<=a?(this.interval=2,this.intervalType="week"):c/(3*H.weekDuration)<=a?(this.interval=3,this.intervalType="week"):c/(1*H.monthDuration)<=a?(this.interval=1,this.intervalType="month"):c/(2*H.monthDuration)<=a?(this.interval=2,this.intervalType="month"):c/(3*H.monthDuration)<=a?(this.interval=3,this.intervalType="month"):c/(6*H.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=c/(1*H.yearDuration)<=a?1:c/(2*H.yearDuration)<=
a?2:c/(4*H.yearDuration)<=a?4:Math.floor(A.getNiceNumber(c/(a-1),!0)/H.yearDuration),this.intervalType="year"));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=f-h/2;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=g+h/2;d?this.autoValueFormatString="MMM DD YYYY HH:mm":"year"===this.intervalType?this.autoValueFormatString="YYYY":"month"===this.intervalType?this.autoValueFormatString="MMM YYYY":"week"===this.intervalType?this.autoValueFormatString=
"MMM DD YYYY":"day"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.autoValueFormatString="hh:mm TT":"minute"===this.intervalType?this.autoValueFormatString="hh:mm TT":"second"===this.intervalType?this.autoValueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&(this.autoValueFormatString="fff'ms'");this.valueFormatString||(this.valueFormatString=this.autoValueFormatString)}else{this.intervalType="number";c=A.getNiceNumber(c,!1);this.interval=
this.options&&0<this.options.interval?this.options.interval:A.getNiceNumber(c/(a-1),!0);if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?f-h/2:Math.floor(f/this.interval)*this.interval;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?g+h/2:Math.ceil(g/this.interval)*this.interval;0===this.viewportMaximum&&0===this.viewportMinimum&&(0===this.options.viewportMinimum?this.viewportMaximum+=10:0===this.options.viewportMaximum&&
(this.viewportMinimum-=10),this.options&&"undefined"===typeof this.options.interval&&(this.interval=A.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)))}if(null===this.minimum||null===this.maximum)if("axisX"===this.type?(f=null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,0===g-f&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,f-=c),h=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-f?
0.5*Math.abs(g-f):1):"axisY"===this.type&&(f=null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(f)||isFinite(g)?0===f&&0===g?(g+=9,f=0):0===g-f?(c=Math.min(Math.abs(0.01*Math.abs(g)),5),g+=c,f-=c):f>g?(c=Math.min(Math.abs(0.01*Math.abs(g-f)),5),0<=g?f=g-c:g=f+c):(c=Math.min(Math.abs(0.01*Math.abs(g-f)),0.05),0!==g&&(g+=c),0!==f&&(f-=c)):(g="undefined"===typeof this.options.interval?-Infinity:this.options.interval,f=0),h=Infinity!==this.dataInfo.minDiff?
this.dataInfo.minDiff:1<g-f?0.5*Math.abs(g-f):1,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&0<f&&(f=0),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&0>g&&(g=0)),"axisX"===this.type&&b){if(null===this.minimum||isNaN(this.minimum))this.minimum=f-h/2;if(null===this.maximum||isNaN(this.maximum))this.maximum=g+h/2}else this.intervalType="number",null===this.minimum&&(this.minimum="axisX"===this.type?f-h/2:Math.floor(f/this.interval)*this.interval,this.minimum=Math.min(this.minimum,
null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?Infinity:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?g+h/2:Math.ceil(g/this.interval)*this.interval,this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?-Infinity:this.sessionVariables.viewportMaximum)),0===this.maximum&&0===this.minimum&&(0===this.options.minimum?this.maximum+=10:0===
this.options.maximum&&(this.minimum-=10));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum);this.range=this.viewportMaximum-this.viewportMinimum;this.intervalStartPosition="axisX"===this.type&&b?this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval):Math.floor((this.viewportMinimum+0.2*this.interval)/this.interval)*this.interval;if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",
1>this.range)){d=Math.floor(Math.abs(Math.log(this.range)/Math.LN10))+2;if(isNaN(d)||!isFinite(d))d=2;if(2<d)for(b=0;b<d-2;b++)this.valueFormatString+="#"}}};A.prototype.calculateLogarithamicAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace(),d=Math.log(this.logarithmBase),b;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?7:Math.max(7,Math.floor(this.maxWidth/
100)):Math.max(Math.floor(this.maxWidth/50),3),c,f,g,h;h=1;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;"axisX"===this.type?(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,f=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,1===f/c&&(h=Math.pow(this.logarithmBase,"undefined"===typeof this.options.interval?
0.4:this.options.interval),f*=h,c/=h),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:f/c>this.logarithmBase?f/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,f=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,0>=c&&!isFinite(f)?(f="undefined"===typeof this.options.interval?0:this.options.interval,c=1):0>=c?c=f:isFinite(f)||(f=c),1===c&&1===f?(f*=this.logarithmBase-
1/this.logarithmBase,c=1):1===f/c?(h=Math.min(f*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),f*=h,c/=h):c>f?(h=Math.min(c/f*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),1<=f?c=f/h:f=c*h):(h=Math.min(f/c*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,0.04)),1!==f&&(f*=h),1!==c&&(c/=h)),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:f/c>this.logarithmBase?f/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===
this.viewportMinimum||isNaN(this.viewportMinimum))&&1<c&&(c=1),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&1>f&&(f=1));h=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?f:this.viewportMaximum)/(isNaN(this.viewportMinimum)||null===this.viewportMinimum?c:this.viewportMinimum);linearRange=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?f:this.viewportMaximum)-(isNaN(this.viewportMinimum)||null===this.viewportMinimum?c:this.viewportMinimum);this.intervalType=
"number";h=Math.pow(this.logarithmBase,A.getNiceNumber(Math.abs(Math.log(h)/d),!1));this.options&&0<this.options.interval?this.interval=this.options.interval:(this.interval=A.getNiceExponent(Math.log(h)/d/(a-1),!0),b=A.getNiceNumber(linearRange/(a-1),!0));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/d/this.interval));if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=
"axisX"===this.type?f*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(f)/d/this.interval));1===this.viewportMaximum&&1===this.viewportMinimum&&(1===this.options.viewportMinimum?this.viewportMaximum*=this.logarithmBase-1/this.logarithmBase:1===this.options.viewportMaximum&&(this.viewportMinimum/=this.logarithmBase-1/this.logarithmBase),this.options&&"undefined"===typeof this.options.interval&&(this.interval=A.getNiceExponent(Math.ceil(Math.log(h)/d)/(a-1)),b=A.getNiceNumber((this.viewportMaximum-
this.viewportMinimum)/(a-1),!0)));if(null===this.minimum||null===this.maximum)"axisX"===this.type?(c=null!==this.minimum?this.minimum:this.dataInfo.min,f=null!==this.maximum?this.maximum:this.dataInfo.max,1===f/c&&(h=Math.pow(this.logarithmBase,"undefined"===typeof this.options.interval?0.4:this.options.interval),f*=h,c/=h),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:f/c>this.logarithmBase?f/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.minimum?
this.minimum:this.dataInfo.min,f=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(c)||isFinite(f)?1===c&&1===f?(f*=this.logarithmBase,c/=this.logarithmBase):1===f/c?(h=Math.pow(this.logarithmBase,this.interval),f*=h,c/=h):c>f?(h=Math.min(0.01*(c/f),5),1<=f?c=f/h:f=c*h):(h=Math.min(f/c*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,0.04)),1!==f&&(f*=h),1!==c&&(c/=h)):(f="undefined"===typeof this.options.interval?0:this.options.interval,c=1),g=Infinity!==this.dataInfo.minDiff?
this.dataInfo.minDiff:f/c>this.logarithmBase?f/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&1<c&&(c=1),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&1>f&&(f=1)),this.intervalType="number",null===this.minimum&&(this.minimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/d/this.interval)),this.minimum=Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||
isNaN(this.sessionVariables.viewportMinimum)?"undefined"===typeof this.sessionVariables.newViewportMinimum?Infinity:this.sessionVariables.newViewportMinimum:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?f*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(f)/d/this.interval)),this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?"undefined"===typeof this.sessionVariables.newViewportMaximum?
0:this.sessionVariables.newViewportMaximum:this.sessionVariables.viewportMaximum)),1===this.maximum&&1===this.minimum&&(1===this.options.minimum?this.maximum*=this.logarithmBase-1/this.logarithmBase:1===this.options.maximum&&(this.minimum/=this.logarithmBase-1/this.logarithmBase));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum);this.viewportMinimum>this.viewportMaximum&&(!this.options.viewportMinimum&&!this.options.minimum||
this.options.viewportMaximum||this.options.maximum?this.options.viewportMinimum||this.options.minimum||!this.options.viewportMaximum&&!this.options.maximum||(this.viewportMinimum=this.minimum=(this.options.viewportMaximum||this.options.maximum)/Math.pow(this.logarithmBase,2*Math.ceil(this.interval))):this.viewportMaximum=this.maximum=this.options.viewportMinimum||this.options.minimum);c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(d*this.interval)+0.2)*this.interval);this.range=
this.viewportMaximum/this.viewportMinimum;this.noTicks=a;if(!this.options.interval&&this.range<Math.pow(this.logarithmBase,8>this.viewportMaximum||3>a?2:3)){for(d=Math.floor(this.viewportMinimum/b+0.5)*b;d<this.viewportMinimum;)d+=b;this.equidistantInterval=!1;this.intervalStartPosition=d;this.interval=b}else this.options.interval||(b=Math.ceil(this.interval),this.range>this.interval&&(this.interval=b,c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(d*this.interval)+0.2)*this.interval))),
this.equidistantInterval=!0,this.intervalStartPosition=c;if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",1>this.viewportMinimum)){d=Math.floor(Math.abs(Math.log(this.viewportMinimum)/Math.LN10))+2;if(isNaN(d)||!isFinite(d))d=2;if(2<d)for(b=0;b<d-2;b++)this.valueFormatString+="#"}};A.getNiceExponent=function(a,d){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b),c=0>b?1>=c?1:5>=c?5:10:Math.max(Math.floor(c),1);return Number((c*Math.pow(10,b)).toFixed(20))};A.getNiceNumber=function(a,
d){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b);return Number(((d?1.5>c?1:3>c?2:7>c?5:10:1>=c?1:2>=c?2:5>=c?5:10)*Math.pow(10,b)).toFixed(20))};A.prototype.getLabelStartPoint=function(){var a=H[this.intervalType+"Duration"]*this.interval,a=new Date(Math.floor(this.viewportMinimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===this.intervalType){if(0<a.getSeconds()||
0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===this.intervalType){if(0<
a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<a.getDate()||0<a.getHours()||
0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};U(pa,M);pa.prototype.createUserOptions=function(a){if("undefined"!==typeof a||this.options._isPlaceholder){var d=0;this.parent.options._isPlaceholder&&this.parent.createUserOptions();this.options._isPlaceholder||(sa(this.parent.stripLines),d=this.parent.options.stripLines.indexOf(this.options));this.options=
"undefined"===typeof a?{}:a;this.parent.options.stripLines[d]=this.options}};pa.prototype.render=function(){this.ctx.save();var a=this.parent.getPixelCoordinatesOnAxis(this.value),d=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness);if(0<d){var b=null===this.opacity?1:this.opacity;this.ctx.strokeStyle=this.color;this.ctx.beginPath();var c=this.ctx.globalAlpha;this.ctx.globalAlpha=b;D(this.id);var f,g,h,l;this.ctx.lineWidth=d;this.ctx.setLineDash&&
this.ctx.setLineDash(F(this.lineDashType,d));if("bottom"===this.parent._position||"top"===this.parent._position)f=g=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,h=this.chart.plotArea.y1,l=this.chart.plotArea.y2,this.bounds={x1:f-d/2,y1:h,x2:g+d/2,y2:l};else if("left"===this.parent._position||"right"===this.parent._position)h=l=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,f=this.chart.plotArea.x1,g=this.chart.plotArea.x2,this.bounds={x1:f,y1:h-d/2,x2:g,y2:l+d/2};this.ctx.moveTo(f,h);this.ctx.lineTo(g,
l);this.ctx.stroke();this.ctx.globalAlpha=c}this.ctx.restore()};U(V,M);V.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position="absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';
a+="line-height: auto;";a+="margin: 0px 0px 0px 0px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: normal;";a+="font-style: "+(v?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+="text-align: left;";a+="border: 2px solid gray;";a+=v?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 5px;";a+="-moz-user-select:none;";
a+="-khtml-user-select: none;";a+="-webkit-user-select: none;";a+="-ms-user-select: none;";a+="user-select: none;";v||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};V.prototype.mouseMoveHandler=
function(a,d){this._lastUpdated&&40>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this._updateToolTip(a,d))};V.prototype._updateToolTip=function(a,d,b){b="undefined"===typeof b?!0:b;this.container||this._initialize();this.enabled||this.hide();if(!this.chart.disableToolTip){if("undefined"===typeof a||"undefined"===typeof d){if(isNaN(this._prevX)||isNaN(this._prevY))return;a=this._prevX;d=this._prevY}else this._prevX=a,this._prevY=d;var c=null,f=null,g=[],h=0;if(this.shared&&
this.enabled&&"none"!==this.chart.plotInfo.axisPlacement){if("xySwapped"===this.chart.plotInfo.axisPlacement){f=[];if(this.chart.axisX)for(var l=0;l<this.chart.axisX.length;l++){for(var h=this.chart.axisX[l].convertPixelToValue({y:d}),k=null,c=0;c<this.chart.axisX[l].dataSeries.length;c++)(k=this.chart.axisX[l].dataSeries[c].getDataPointAtX(h,b))&&0<=k.index&&(k.dataSeries=this.chart.axisX[l].dataSeries[c],null!==k.dataPoint.y&&f.push(k));k=null}if(this.chart.axisX2)for(l=0;l<this.chart.axisX2.length;l++){h=
this.chart.axisX2[l].convertPixelToValue({y:d});k=null;for(c=0;c<this.chart.axisX2[l].dataSeries.length;c++)(k=this.chart.axisX2[l].dataSeries[c].getDataPointAtX(h,b))&&0<=k.index&&(k.dataSeries=this.chart.axisX2[l].dataSeries[c],null!==k.dataPoint.y&&f.push(k));k=null}}else{f=[];if(this.chart.axisX)for(l=0;l<this.chart.axisX.length;l++)for(h=this.chart.axisX[l].convertPixelToValue({x:a}),k=null,c=0;c<this.chart.axisX[l].dataSeries.length;c++)(k=this.chart.axisX[l].dataSeries[c].getDataPointAtX(h,
b))&&0<=k.index&&(k.dataSeries=this.chart.axisX[l].dataSeries[c],null!==k.dataPoint.y&&f.push(k));if(this.chart.axisX2)for(l=0;l<this.chart.axisX2.length;l++)for(h=this.chart.axisX2[l].convertPixelToValue({x:a}),k=null,c=0;c<this.chart.axisX2[l].dataSeries.length;c++)(k=this.chart.axisX2[l].dataSeries[c].getDataPointAtX(h,b))&&0<=k.index&&(k.dataSeries=this.chart.axisX2[l].dataSeries[c],null!==k.dataPoint.y&&f.push(k))}if(0===f.length)return;f.sort(function(a,b){return a.distance-b.distance});b=f[0];
for(c=0;c<f.length;c++)f[c].dataPoint.x.valueOf()===b.dataPoint.x.valueOf()&&g.push(f[c]);f=null}else{if(k=this.chart.getDataPointAtXY(a,d,b))this.currentDataPointIndex=k.dataPointIndex,this.currentSeriesIndex=k.dataSeries.index;else if(v)if(k=Ma(a,d,this.chart._eventManager.ghostCtx),0<k&&"undefined"!==typeof this.chart._eventManager.objectMap[k]){k=this.chart._eventManager.objectMap[k];if("legendItem"===k.objectType)return;this.currentSeriesIndex=k.dataSeriesIndex;this.currentDataPointIndex=0<=
k.dataPointIndex?k.dataPointIndex:-1}else this.currentDataPointIndex=-1;else this.currentDataPointIndex=-1;if(0<=this.currentSeriesIndex){f=this.chart.data[this.currentSeriesIndex];k={};if(0<=this.currentDataPointIndex)c=f.dataPoints[this.currentDataPointIndex],k.dataSeries=f,k.dataPoint=c,k.index=this.currentDataPointIndex,k.distance=Math.abs(c.x-h);else{if(!this.enabled||"line"!==f.type&&"stepLine"!==f.type&&"spline"!==f.type&&"area"!==f.type&&"stepArea"!==f.type&&"splineArea"!==f.type&&"stackedArea"!==
f.type&&"stackedArea100"!==f.type&&"rangeArea"!==f.type&&"rangeSplineArea"!==f.type&&"candlestick"!==f.type&&"ohlc"!==f.type)return;h=f.axisX.convertPixelToValue({x:a});k=f.getDataPointAtX(h,b);k.dataSeries=f;this.currentDataPointIndex=k.index;c=k.dataPoint}if(!x(k.dataPoint.y))if(k.dataSeries.axisY)if(0<k.dataPoint.y.length){for(c=b=0;c<k.dataPoint.y.length;c++)k.dataPoint.y[c]<k.dataSeries.axisY.viewportMinimum?b--:k.dataPoint.y[c]>k.dataSeries.axisY.viewportMaximum&&b++;b<k.dataPoint.y.length&&
b>-k.dataPoint.y.length&&g.push(k)}else"column"===f.type||"bar"===f.type?0>k.dataPoint.y?0>k.dataSeries.axisY.viewportMinimum&&k.dataSeries.axisY.viewportMaximum>=k.dataPoint.y&&g.push(k):k.dataSeries.axisY.viewportMinimum<=k.dataPoint.y&&0<=k.dataSeries.axisY.viewportMaximum&&g.push(k):"bubble"===f.type?(b=this.chart._eventManager.objectMap[f.dataPointIds[k.index]].size/2,k.dataPoint.y>=k.dataSeries.axisY.viewportMinimum-b&&k.dataPoint.y<=k.dataSeries.axisY.viewportMaximum+b&&g.push(k)):(0<=k.dataSeries.type.indexOf("100")||
"stackedColumn"===f.type||"stackedBar"===f.type||k.dataPoint.y>=k.dataSeries.axisY.viewportMinimum&&k.dataPoint.y<=k.dataSeries.axisY.viewportMaximum)&&g.push(k);else g.push(k)}}if(0<g.length&&(this.highlightObjects(g),this.enabled))if(b="",b=this.getToolTipInnerHTML({entries:g}),null!==b){this.contentDiv.innerHTML=b;this.contentDiv.innerHTML=b;b=!1;"none"===this.container.style.display&&(b=!0,this.container.style.display="block");try{this.contentDiv.style.background=this.backgroundColor?this.backgroundColor:
v?"rgba(255,255,255,.9)":"rgb(255,255,255)",this.borderColor=this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataPoint.color?g[0].dataPoint.color:g[0].dataSeries.color?g[0].dataSeries.color:g[0].dataSeries._colorSet[g[0].index%g[0].dataSeries._colorSet.length],this.contentDiv.style.borderWidth=this.borderThickness||0===this.borderThickness?this.borderThickness+"px":"2px",this.contentDiv.style.borderRadius=
this.cornerRadius||0===this.cornerRadius?this.cornerRadius+"px":"5px",this.container.style.borderRadius=this.contentDiv.style.borderRadius,this.contentDiv.style.fontSize=this.fontSize||0===this.fontSize?this.fontSize+"px":"14px",this.contentDiv.style.color=this.fontColor?this.fontColor:"#000000",this.contentDiv.style.fontFamily=this.fontFamily?this.fontFamily:"Calibri, Arial, Georgia, serif;",this.contentDiv.style.fontWeight=this.fontWeight?this.fontWeight:"normal",this.contentDiv.style.fontStyle=
this.fontStyle?this.fontStyle:v?"italic":"normal"}catch(n){}"pie"===g[0].dataSeries.type||"doughnut"===g[0].dataSeries.type||"funnel"===g[0].dataSeries.type||"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===g[0].dataSeries.type||"stackedBar100"===g[0].dataSeries.type?a=a-10-this.container.clientWidth:(a=g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x)-this.container.clientWidth<<0,a-=10);0>a&&(a+=this.container.clientWidth+20);a+this.container.clientWidth>
Math.max(this.chart.container.clientWidth,this.chart.width)&&(a=Math.max(0,Math.max(this.chart.container.clientWidth,this.chart.width)-this.container.clientWidth));a+="px";d=1!==g.length||this.shared||"line"!==g[0].dataSeries.type&&"stepLine"!==g[0].dataSeries.type&&"spline"!==g[0].dataSeries.type&&"area"!==g[0].dataSeries.type&&"stepArea"!==g[0].dataSeries.type&&"splineArea"!==g[0].dataSeries.type?"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===g[0].dataSeries.type||
"stackedBar100"===g[0].dataSeries.type?g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x):d:g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);d=-d+10;0<d+this.container.clientHeight+5&&(d-=d+this.container.clientHeight+5-0);this.container.style.left=a;this.container.style.bottom=d+"px";!this.animationEnabled||b?this.disableAnimation():this.enableAnimation()}else this.hide(!1)}};V.prototype.highlightObjects=function(a){var d=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();
d.clearRect(0,0,this.chart.width,this.chart.height);d.save();var b=this.chart.plotArea,c=0;d.beginPath();d.rect(b.x1,b.y1,b.x2-b.x1,b.y2-b.y1);d.clip();for(b=0;b<a.length;b++){var f=a[b];if((f=this.chart._eventManager.objectMap[f.dataSeries.dataPointIds[f.index]])&&f.objectType&&"dataPoint"===f.objectType){var c=this.chart.data[f.dataSeriesIndex],g=c.dataPoints[f.dataPointIndex],h=f.dataPointIndex;!1===g.highlightEnabled||!0!==c.highlightEnabled&&!0!==g.highlightEnabled||("line"===c.type||"stepLine"===
c.type||"spline"===c.type||"scatter"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type?(g=c.getMarkerProperties(h,f.x1,f.y1,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size),O.drawMarkers([g]),"undefined"!==typeof f.y2&&(g=c.getMarkerProperties(h,f.x1,f.y2,this.chart.overlaidCanvasCtx),
g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size),O.drawMarkers([g]))):"bubble"===c.type?(g=c.getMarkerProperties(h,f.x1,f.y1,this.chart.overlaidCanvasCtx),g.size=f.size,g.color="white",g.borderColor="white",d.globalAlpha=0.3,O.drawMarkers([g]),d.globalAlpha=1):"column"===c.type||"stackedColumn"===c.type||"stackedColumn100"===c.type||"bar"===c.type||"rangeBar"===c.type||"stackedBar"===c.type||"stackedBar100"===c.type||
"rangeColumn"===c.type?R(d,f.x1,f.y1,f.x2,f.y2,"white",0,null,!1,!1,!1,!1,0.3):"pie"===c.type||"doughnut"===c.type?Ha(d,f.center,f.radius,"white",c.type,f.startAngle,f.endAngle,0.3,f.percentInnerRadius):"candlestick"===c.type?(d.globalAlpha=1,d.strokeStyle=f.color,d.lineWidth=2*f.borderThickness,c=0===d.lineWidth%2?0:0.5,d.beginPath(),d.moveTo(f.x3-c,Math.min(f.y2,f.y3)),d.lineTo(f.x3-c,Math.min(f.y1,f.y4)),d.stroke(),d.beginPath(),d.moveTo(f.x3-c,Math.max(f.y1,f.y4)),d.lineTo(f.x3-c,Math.max(f.y2,
f.y3)),d.stroke(),R(d,f.x1,Math.min(f.y1,f.y4),f.x2,Math.max(f.y1,f.y4),"transparent",2*f.borderThickness,f.color,!1,!1,!1,!1),d.globalAlpha=1):"ohlc"===c.type&&(d.globalAlpha=1,d.strokeStyle=f.color,d.lineWidth=2*f.borderThickness,c=0===d.lineWidth%2?0:0.5,d.beginPath(),d.moveTo(f.x3-c,f.y2),d.lineTo(f.x3-c,f.y3),d.stroke(),d.beginPath(),d.moveTo(f.x3,f.y1),d.lineTo(f.x1,f.y1),d.stroke(),d.beginPath(),d.moveTo(f.x3,f.y4),d.lineTo(f.x2,f.y4),d.stroke(),d.globalAlpha=1))}}d.restore();d.globalAlpha=
1;d.beginPath()};V.prototype.getToolTipInnerHTML=function(a){var d=a.entries,b=null,c=null,f=null,g=0;a="";for(var h=!0,l=0;l<d.length;l++)if(d[l].dataSeries.toolTipContent||d[l].dataPoint.toolTipContent){h=!1;break}if(h&&(this.content&&"function"===typeof this.content||this.contentFormatter))d={chart:this.chart,toolTip:this.options,entries:d},b=this.contentFormatter?this.contentFormatter(d):this.content(d);else if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){for(var k=null,n="",l=0;l<
d.length;l++)if(c=d[l].dataSeries,f=d[l].dataPoint,g=d[l].index,a="",0===l&&(h&&!this.content)&&(this.chart.axisX&&0<this.chart.axisX.length?n+="undefined"!==typeof this.chart.axisX[0].labels[f.x]?this.chart.axisX[0].labels[f.x]:"{x}":this.chart.axisX2&&0<this.chart.axisX2.length&&(n+="undefined"!==typeof this.chart.axisX2[0].labels[f.x]?this.chart.axisX2[0].labels[f.x]:"{x}"),n+="</br>",n=this.chart.replaceKeywordsWithValue(n,f,c,g)),null!==f.toolTipContent&&("undefined"!==typeof f.toolTipContent||
null!==c.options.toolTipContent)){if("line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"column"===c.type||"bar"===c.type||"scatter"===c.type||"stackedColumn"===c.type||"stackedColumn100"===c.type||"stackedBar"===c.type||"stackedBar100"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type)this.chart.axisX&&1<this.chart.axisX.length&&(a+=k!=c.axisXIndex?c.axisX.title?c.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),a+=f.toolTipContent?
f.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}",k=c.axisXIndex;else if("bubble"===c.type)this.chart.axisX&&1<this.chart.axisX.length&&(a+=k!=c.axisXIndex?c.axisX.title?c.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),a+=f.toolTipContent?f.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:
"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type)this.chart.axisX&&1<this.chart.axisX.length&&(a+=k!=c.axisXIndex?c.axisX.title?c.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),a+=f.toolTipContent?f.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?
"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";else if("candlestick"===c.type||"ohlc"===c.type)this.chart.axisX&&1<this.chart.axisX.length&&(a+=k!=c.axisXIndex?c.axisX.title?c.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),a+=f.toolTipContent?f.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
null===b&&(b="");!0===this.reversed?(b=this.chart.replaceKeywordsWithValue(a,f,c,g)+b,l<d.length-1&&(b="</br>"+b)):(b+=this.chart.replaceKeywordsWithValue(a,f,c,g),l<d.length-1&&(b+="</br>"))}null!==b&&(b=n+b)}else{c=d[0].dataSeries;f=d[0].dataPoint;g=d[0].index;if(null===f.toolTipContent||"undefined"===typeof f.toolTipContent&&null===c.options.toolTipContent)return null;if("line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"column"===
c.type||"bar"===c.type||"scatter"===c.type||"stackedColumn"===c.type||"stackedColumn100"===c.type||"stackedBar"===c.type||"stackedBar100"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type)a=f.toolTipContent?f.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(f.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}";else if("bubble"===c.type)a=f.toolTipContent?f.toolTipContent:
c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(f.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("pie"===c.type||"doughnut"===c.type||"funnel"===c.type)a=f.toolTipContent?f.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(f.name?
"{name}:</span>&nbsp;&nbsp;":f.label?"{label}:</span>&nbsp;&nbsp;":"</span>")+"{y}";else if("rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type)a=f.toolTipContent?f.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(f.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";else if("candlestick"===c.type||"ohlc"===c.type)a=
f.toolTipContent?f.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(f.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";null===b&&(b="");b+=this.chart.replaceKeywordsWithValue(a,f,c,g)}this.content=a;for(l=0;l<this.chart.data.length;l++)this.chart.data[l].toolTipContent=
this.content;return b};V.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")};V.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition=
"",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};V.prototype.hide=function(a){this.container&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,("undefined"===typeof a||a)&&this.chart.resetOverlayedCanvas())};V.prototype.show=function(a,d,b){this._updateToolTip(a,d,"undefined"===typeof b?!1:b)};z.prototype.getPercentAndTotal=function(a,d){var b=null,c=null,f=null;if(0<=a.type.indexOf("stacked"))c=
0,b=d.x.getTime?d.x.getTime():d.x,b in a.plotUnit.yTotals&&(c=a.plotUnit.yTotals[b],f=isNaN(d.y)?0:0===c?0:100*(d.y/c));else if("pie"===a.type||"doughnut"===a.type){for(i=c=0;i<a.dataPoints.length;i++)isNaN(a.dataPoints[i].y)||(c+=a.dataPoints[i].y);f=isNaN(d.y)?0:100*(d.y/c)}return{percent:f,total:c}};z.prototype.replaceKeywordsWithValue=function(a,d,b,c,f){var g=this;f="undefined"===typeof f?0:f;if((0<=b.type.indexOf("stacked")||"pie"===b.type||"doughnut"===b.type)&&(0<=a.indexOf("#percent")||0<=
a.indexOf("#total"))){var h="#percent",l="#total",k=this.getPercentAndTotal(b,d),l=isNaN(k.total)?l:k.total,h=isNaN(k.percent)?h:k.percent;do{k="";if(b.percentFormatString)k=b.percentFormatString;else{var k="#,##0.",n=Math.max(Math.ceil(Math.log(1/Math.abs(h))/Math.LN10),2);if(isNaN(n)||!isFinite(n))n=2;for(var m=0;m<n;m++)k+="#";b.percentFormatString=k}a=a.replace("#percent",fa(h,k,g._cultureInfo));a=a.replace("#total",fa(l,b.yValueFormatString?b.yValueFormatString:"#,##0.########",g._cultureInfo))}while(0<=
a.indexOf("#percent")||0<=a.indexOf("#total"))}return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,function(a){if('"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=ma(a.slice(1,a.length-1));a=a.replace("#index",f);var e=null;try{var h=a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);h&&0<h.length&&(e=ma(h[2]),a=ma(h[1]))}catch(k){}h=null;if("color"===a)return d.color?d.color:b.color?b.color:b._colorSet[c%b._colorSet.length];if(d.hasOwnProperty(a))h=d;else if(b.hasOwnProperty(a))h=
b;else return"";h=h[a];null!==e&&(h=h[e]);if("x"===a)if("dateTime"===g.plotInfo.axisXValueType||"dateTime"===b.xValueType||d.x&&d.x.getTime){if(g.plotInfo.plotTypes[0].plotUnits[0].axisX&&!g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic)return Fa(h,d.xValueFormatString?d.xValueFormatString:b.xValueFormatString?b.xValueFormatString:b.xValueFormatString=g.axisX&&g.axisX.autoValueFormatString?g.axisX.autoValueFormatString:"DD MMM YY",g._cultureInfo)}else return fa(h,d.xValueFormatString?d.xValueFormatString:
b.xValueFormatString?b.xValueFormatString:b.xValueFormatString="#,##0.########",g._cultureInfo);else return"y"===a?fa(h,d.yValueFormatString?d.yValueFormatString:b.yValueFormatString?b.yValueFormatString:b.yValueFormatString="#,##0.########",g._cultureInfo):"z"===a?fa(h,d.zValueFormatString?d.zValueFormatString:b.zValueFormatString?b.zValueFormatString:b.zValueFormatString="#,##0.########",g._cultureInfo):h})};na.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=
[];this.previousDataPointEventObject=null;this.eventObjects=[];v&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())};na.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};na.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var d=[],b=za(a),c=null;if((c=this.chart.getObjectAtXY(b.x,b.y,!1))&&"undefined"!==typeof this.objectMap[c])if(c=this.objectMap[c],"dataPoint"===c.objectType){var f=this.chart.data[c.dataSeriesIndex],
g=f.dataPoints[c.dataPointIndex],h=c.dataPointIndex;c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:f.options,dataPointIndex:h,dataSeriesIndex:f.index,chart:this.chart};c.eventContext={context:g,userContext:g,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};d.push(c);c=this.objectMap[f.id];c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:f.options,dataPointIndex:h,dataSeriesIndex:f.index,chart:this.chart};c.eventContext={context:f,userContext:f.options,mouseover:"mouseover",
mousemove:"mousemove",mouseout:"mouseout",click:"click"};d.push(this.objectMap[f.id])}else"legendItem"===c.objectType&&(f=this.chart.data[c.dataSeriesIndex],g=null!==c.dataPointIndex?f.dataPoints[c.dataPointIndex]:null,c.eventParameter={x:b.x,y:b.y,dataSeries:f.options,dataPoint:g,dataPointIndex:c.dataPointIndex,dataSeriesIndex:c.dataSeriesIndex,chart:this.chart},c.eventContext={context:this.chart.legend,userContext:this.chart.legend.options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",
click:"itemclick"},d.push(c));f=[];for(b=0;b<this.mouseoveredObjectMaps.length;b++){g=!0;for(c=0;c<d.length;c++)if(d[c].id===this.mouseoveredObjectMaps[b].id){g=!1;break}g?this.fireEvent(this.mouseoveredObjectMaps[b],"mouseout",a):f.push(this.mouseoveredObjectMaps[b])}this.mouseoveredObjectMaps=f;for(b=0;b<d.length;b++){f=!1;for(c=0;c<this.mouseoveredObjectMaps.length;c++)if(d[b].id===this.mouseoveredObjectMaps[c].id){f=!0;break}f||(this.fireEvent(d[b],"mouseover",a),this.mouseoveredObjectMaps.push(d[b]));
"click"===a.type?this.fireEvent(d[b],"click",a):"mousemove"===a.type&&this.fireEvent(d[b],"mousemove",a)}}};na.prototype.fireEvent=function(a,d,b){if(a&&d){var c=a.eventParameter,f=a.eventContext,g=a.eventContext.userContext;g&&(f&&g[f[d]])&&g[f[d]].call(g,c);"mouseout"!==d?g.cursor&&g.cursor!==b.target.style.cursor&&(b.target.style.cursor=g.cursor):(b.target.style.cursor=this.chart._defaultCursor,delete a.eventParameter,delete a.eventContext);"click"===d&&("dataPoint"===a.objectType&&this.chart.pieDoughnutClickHandler)&&
this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],c)}};U(qa,M);Ea.prototype.animate=function(a,d,b,c,f){var g=this;this.chart.isAnimating=!0;f=f||E.easing.linear;b&&this.animations.push({startTime:(new Date).getTime()+(a?a:0),duration:d,animationCallback:b,onComplete:c});for(a=[];0<this.animations.length;)if(d=this.animations.shift(),b=(new Date).getTime(),c=0,d.startTime<=b&&(c=f(Math.min(b-d.startTime,d.duration),0,1,d.duration),c=Math.min(c,1),isNaN(c)||!isFinite(c))&&
(c=1),1>c&&a.push(d),d.animationCallback(c),1<=c&&d.onComplete)d.onComplete();this.animations=a;0<this.animations.length?this.animationRequestId=this.chart.requestAnimFrame.call(window,function(){g.animate.call(g)}):this.chart.isAnimating=!1};Ea.prototype.cancelAllAnimations=function(){this.animations=[];this.animationRequestId&&this.chart.cancelRequestAnimFrame.call(window,this.animationRequestId);this.animationRequestId=null;this.chart.isAnimating=!1};var E={yScaleAnimation:function(a,d){if(0!==
a){var b=d.dest,c=d.source.canvas,f=d.animationBase;b.drawImage(c,0,0,c.width,c.height,0,f-f*a,b.canvas.width/P,a*b.canvas.height/P)}},xScaleAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas,f=d.animationBase;b.drawImage(c,0,0,c.width,c.height,f-f*a,0,a*b.canvas.width/P,b.canvas.height/P)}},xClipAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas;b.save();0<a&&b.drawImage(c,0,0,c.width*a,c.height,0,0,c.width*a/P,c.height/P);b.restore()}},fadeInAnimation:function(a,d){if(0!==
a){var b=d.dest,c=d.source.canvas;b.save();b.globalAlpha=a;b.drawImage(c,0,0,c.width,c.height,0,0,b.canvas.width/P,b.canvas.height/P);b.restore()}},easing:{linear:function(a,d,b,c){return b*a/c+d},easeOutQuad:function(a,d,b,c){return-b*(a/=c)*(a-2)+d},easeOutQuart:function(a,d,b,c){return-b*((a=a/c-1)*a*a*a-1)+d},easeInQuad:function(a,d,b,c){return b*(a/=c)*a+d},easeInQuart:function(a,d,b,c){return b*(a/=c)*a*a*a+d}}},O={drawMarker:function(a,d,b,c,f,g,h,l){if(b){var k=1;b.fillStyle=g?g:"#000000";
b.strokeStyle=h?h:"#000000";b.lineWidth=l?l:0;"circle"===c?(b.moveTo(a,d),b.beginPath(),b.arc(a,d,f/2,0,2*Math.PI,!1),g&&b.fill(),l&&(h?b.stroke():(k=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=k))):"square"===c?(b.beginPath(),b.rect(a-f/2,d-f/2,f,f),g&&b.fill(),l&&(h?b.stroke():(k=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=k))):"triangle"===c?(b.beginPath(),b.moveTo(a-f/2,d+f/2),b.lineTo(a+f/2,d+f/2),b.lineTo(a,d-f/2),b.closePath(),
g&&b.fill(),l&&(h?b.stroke():(k=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=k)),b.beginPath()):"cross"===c&&(b.strokeStyle=g,b.lineWidth=f/4,b.beginPath(),b.moveTo(a-f/2,d-f/2),b.lineTo(a+f/2,d+f/2),b.stroke(),b.moveTo(a+f/2,d-f/2),b.lineTo(a-f/2,d+f/2),b.stroke())}},drawMarkers:function(a){for(var d=0;d<a.length;d++){var b=a[d];O.drawMarker(b.x,b.y,b.ctx,b.type,b.size,b.color,b.borderColor,b.borderThickness)}}},Qa={Chart:z,addColorSet:function(a,d){ja[a]=d},addCultureInfo:function(a,
d){ra[a]=d},formatNumber:function(a,d,b){b=b||"en";if(ra[b])return fa(a,d||"#,##0.##",new qa(b));throw"Unknown Culture Name";},formatDate:function(a,d,b){b=b||"en";if(ra[b])return Fa(a,d||"DD MMM YYYY",new qa(b));throw"Unknown Culture Name";}};Qa.Chart.version="v1.9.6 GA";window.CanvasJS=Qa})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();
//Menu accordian
$(function() {
$('.side-menu-').accordion({ multiOpen: false });
});

//Slide navigation
 
$ (document) .ready(function(){
checkPosition();
function checkPosition(){
if($(window).width() > 767)
{
$(".slide-arrow").click(function(){
        $(".main-dashboard").toggleClass("hide-menu");
    });
	
	

}

else {}
		}
		})



//mobile-menu
$ (document) .ready(function(){
$(".mob-").click(function(){
	 $(".main-hotel-sec").removeClass("mob-sh");
        $(".main-mobile-menu").toggleClass("mob-sh");
    });

$(".build-arrow").click(function(){
        $(".main-hotel-sec").toggleClass("mob-sh");
		$(".main-mobile-menu").removeClass("mob-sh");
    });

	})
	
	//moblie payment
	 
	 $(".mobil-sear").click(function(){
        $(".mobile-payment").toggleClass("show-pay-sh");
    });
	$(".mobil-sear").click(function(){
        $(".search-secn").toggleClass("hide-search");
    });


//book rooms
$ (document) .ready(function(){
$(".edit-t").click(function(){
	$(".view-long-tirm, .edit-t").toggleClass("active");
});

$(".edit-t").click(function(){
	$(".viewbookinglist.active, .view-t.active").removeClass("active");
});

$(".view-t").click(function(){
	$(".viewbookinglist, .view-t").toggleClass("active");
});

$(".view-t").click(function(){
	$(".view-long-tirm.active, .edit-t.active").removeClass("active");
});



})
	

//custom Plus Min.

$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
 
 
 
 
 $("#top-go").click( function() {
   $(window).scrollTop(0);
 });
//! moment.js
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return od.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){od=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function g(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function h(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function i(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function j(a,b){for(var c in b)i(b,c)&&(a[c]=b[c]);return i(b,"toString")&&(a.toString=b.toString),i(b,"valueOf")&&(a.valueOf=b.valueOf),a}function k(a,b,c,d){return rb(a,b,c,d,!0).utc()}function l(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function m(a){return null==a._pf&&(a._pf=l()),a._pf}function n(a){if(null==a._isValid){var b=m(a),c=qd.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function o(a){var b=k(NaN);return null!=a?j(m(b),a):m(b).userInvalidated=!0,b}function p(a){return void 0===a}function q(a,b){var c,d,e;if(p(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),p(b._i)||(a._i=b._i),p(b._f)||(a._f=b._f),p(b._l)||(a._l=b._l),p(b._strict)||(a._strict=b._strict),p(b._tzm)||(a._tzm=b._tzm),p(b._isUTC)||(a._isUTC=b._isUTC),p(b._offset)||(a._offset=b._offset),p(b._pf)||(a._pf=m(b)),p(b._locale)||(a._locale=b._locale),rd.length>0)for(c in rd)d=rd[c],e=b[d],p(e)||(a[d]=e);return a}
// Moment prototype object
function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),
// Prevent infinite loop in case updateOffset creates new moment
// objects.
sd===!1&&(sd=!0,a.updateOffset(this),sd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}
// compare two arrays, return the number of differences
function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return j(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),td[b]||(w(c),td[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=j({},a);for(c in b)i(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},j(e[c],a[c]),j(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)i(a,c)&&!i(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=j({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Dd[c]=Dd[c+"s"]=Dd[b]=a}function K(a){return"string"==typeof a?Dd[a]||Dd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)i(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Ed[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Ed[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Id[a]=e),b&&(Id[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Id[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Fd);for(b=0,c=d.length;b<c;b++)Id[d[b]]?d[b]=Id[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Hd[b]=Hd[b]||W(b),Hd[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Gd.lastIndex=0;d>=0&&Gd.test(a);)a=a.replace(Gd,c),Gd.lastIndex=0,d-=1;return a}function Z(a,b,c){$d[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return i($d,a)?$d[a](b._strict,b._locale):new RegExp(_(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),f(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)_d[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&i(_d,a)&&_d[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||ke).test(b)?"format":"standalone"][a.month()]:this._months}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[ke.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=k([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=je.call(this._shortMonthsParse,g),e!==-1?e:null):(e=je.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=je.call(this._shortMonthsParse,g),e!==-1?e:(e=je.call(this._longMonthsParse,g),e!==-1?e:null)):(e=je.call(this._longMonthsParse,g),e!==-1?e:(e=je.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){
// test the regex
if(
// make the regex if we don't have it already
e=k([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ja(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),!f(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(i(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(i(this,"_monthsShortRegex")||(this._monthsShortRegex=ne),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(i(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(i(this,"_monthsRegex")||(this._monthsRegex=oe),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)
// make the regex if we don't have it already
c=k([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ua(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}
// HELPERS
// LOCALES
function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}
// MOMENTS
function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=k([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=je.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=je.call(this._minWeekdaysParse,g),e!==-1?e:(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){
// test the regex
if(
// make the regex if we don't have it already
e=k([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(i(this,"_weekdaysRegex")||(this._weekdaysRegex=ue),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(i(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ve),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(i(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=we),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)
// make the regex if we don't have it already
c=k([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ua(a,b){return b._meridiemParse}
// LOCALES
function Va(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Za(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!Be[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=xe._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
$a(b)}catch(a){}return Be[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function $a(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=p(b)?bb(a):_a(a,b),c&&(xe=c)),xe._abbr}function _a(a,b){if(null!==b){var c=Ae;if(b.abbr=a,null!=Be[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Be[a]._config;else if(null!=b.parentLocale){if(null==Be[b.parentLocale])return Ce[b.parentLocale]||(Ce[b.parentLocale]=[]),Ce[b.parentLocale].push({name:a,config:b}),null;c=Be[b.parentLocale]._config}
// backwards compat for now: also set the locale
// make sure we set the locale AFTER all child locales have been
// created, so we won't end up with the child locale set.
return Be[a]=new C(B(c,b)),Ce[a]&&Ce[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Be[a]}
// useful for testing
return delete Be[a],null}function ab(a,b){if(null!=b){var c,d=Ae;
// MERGE
null!=Be[a]&&(d=Be[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Be[a],Be[a]=c,
// backwards compat for now: also set the locale
$a(a)}else
// pass null for config to unupdate, useful for tests
null!=Be[a]&&(null!=Be[a].parentLocale?Be[a]=Be[a].parentLocale:null!=Be[a]&&delete Be[a]);return Be[a]}
// returns locale data
function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return xe;if(!c(a)){if(
//short-circuit everything else
b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return wd(Be)}function db(a){var b,c=a._a;return c&&m(a).overflow===-2&&(b=c[be]<0||c[be]>11?be:c[ce]<1||c[ce]>ea(c[ae],c[be])?ce:c[de]<0||c[de]>24||24===c[de]&&(0!==c[ee]||0!==c[fe]||0!==c[ge])?de:c[ee]<0||c[ee]>59?ee:c[fe]<0||c[fe]>59?fe:c[ge]<0||c[ge]>999?ge:-1,m(a)._overflowDayOfYear&&(b<ae||b>ce)&&(b=ce),m(a)._overflowWeeks&&b===-1&&(b=he),m(a)._overflowWeekday&&b===-1&&(b=ie),m(a).overflow=b),a}
// date from iso format
function eb(a){var b,c,d,e,f,g,h=a._i,i=De.exec(h)||Ee.exec(h);if(i){for(m(a).iso=!0,b=0,c=Ge.length;b<c;b++)if(Ge[b][1].exec(i[1])){e=Ge[b][0],d=Ge[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=He.length;b<c;b++)if(He[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+He[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Fe.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),kb(a)}else a._isValid=!1}
// date from iso format or fallback
function fb(b){var c=Ie.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function gb(a,b,c){return null!=a?a:null!=b?b:c}function hb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function ib(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=hb(a),
//compute day of the year from weeks and weekdays
a._w&&null==a._a[ce]&&null==a._a[be]&&jb(a),
//if the day of the year is set, figure out what it is
a._dayOfYear&&(e=gb(a._a[ae],d[ae]),a._dayOfYear>pa(e)&&(m(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[be]=c.getUTCMonth(),a._a[ce]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[de]&&0===a._a[ee]&&0===a._a[fe]&&0===a._a[ge]&&(a._nextDay=!0,a._a[de]=0),a._d=(a._useUTC?ta:sa).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[de]=24)}}function jb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
c=gb(b.GG,a._a[ae],wa(sb(),1,4).year),d=gb(b.W,1),e=gb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(sb(),f,g);c=gb(b.gg,a._a[ae],j.year),
// Default to current week.
d=gb(b.w,j.week),null!=b.d?(
// weekday -- low day numbers are considered next week
e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(
// local weekday -- counting starts from begining of week
e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):
// default to begining of week
e=f}d<1||d>xa(c,f,g)?m(a)._overflowWeeks=!0:null!=i?m(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ae]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function kb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void eb(b);b._a=[],m(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Fd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],
// console.log('token', token, 'parsedInput', parsedInput,
//         'regex', getParseRegexForToken(token, config));
d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&m(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),
// don't parse if it's not a known token
Id[f]?(d?m(b).empty=!1:m(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&m(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
m(b).charsLeftOver=i-j,h.length>0&&m(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[de]<=12&&m(b).bigHour===!0&&b._a[de]>0&&(m(b).bigHour=void 0),m(b).parsedDateParts=b._a.slice(0),m(b).meridiem=b._meridiem,
// handle meridiem
b._a[de]=lb(b._locale,b._a[de],b._meridiem),ib(b),db(b)}function lb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function mb(a){var b,c,d,e,f;if(0===a._f.length)return m(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],kb(b),n(b)&&(
// if there is any input that was not parsed add a penalty for that format
f+=m(b).charsLeftOver,
//or tokens
f+=10*m(b).unusedTokens.length,m(b).score=f,(null==d||f<d)&&(d=f,c=b));j(a,c||b)}function nb(a){if(!a._d){var b=L(a._i);a._a=h([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),ib(a)}}function ob(a){var b=new r(db(pb(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function pb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?o({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(g(b)?a._d=b:c(d)?mb(a):d?kb(a):qb(a),n(a)||(a._d=null),a))}function qb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):g(d)?b._d=new Date(d.valueOf()):"string"==typeof d?fb(b):c(d)?(b._a=h(d.slice(0),function(a){return parseInt(a,10)}),ib(b)):"object"==typeof d?nb(b):f(d)?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function rb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,ob(i)}function sb(a,b,c,d){return rb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function tb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return sb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function ub(){var a=[].slice.call(arguments,0);return tb("isBefore",a)}function vb(){var a=[].slice.call(arguments,0);return tb("isAfter",a)}function wb(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function xb(a){return a instanceof wb}function yb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}
// FORMATTING
function zb(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Ab(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Me)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Bb(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(s(b)||g(b)?b.valueOf():sb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):sb(b).local()}function Cb(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Db(b,c){var d,e=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Ab(Xd,b),null===b)return this}else Math.abs(b)<16&&(b=60*b);return!this._isUTC&&c&&(d=Cb(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Tb(this,Ob(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?e:Cb(this)}function Eb(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Fb(a){return this.utcOffset(0,a)}function Gb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Cb(this),"m")),this}function Hb(){if(null!=this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=Ab(Wd,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Ib(a){return!!this.isValid()&&(a=a?sb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Jb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Kb(){if(!p(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=pb(a),a._a){var b=a._isUTC?k(a._a):sb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Lb(){return!!this.isValid()&&!this._isUTC}function Mb(){return!!this.isValid()&&this._isUTC}function Nb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ob(a,b){var c,d,e,g=a,
// matching against regexp is expensive, do it on demand
h=null;// checks for null or undefined
return xb(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:f(a)?(g={},b?g[b]=a:g.milliseconds=a):(h=Ne.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:u(h[ce])*c,h:u(h[de])*c,m:u(h[ee])*c,s:u(h[fe])*c,ms:u(yb(1e3*h[ge]))*c}):(h=Oe.exec(a))?(c="-"===h[1]?-1:1,g={y:Pb(h[2],c),M:Pb(h[3],c),w:Pb(h[4],c),d:Pb(h[5],c),h:Pb(h[6],c),m:Pb(h[7],c),s:Pb(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=Rb(sb(g.from),sb(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new wb(g),xb(a)&&i(a,"_locale")&&(d._locale=a._locale),d}function Pb(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Qb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Rb(a,b){var c;return a.isValid()&&b.isValid()?(b=Bb(b,a),a.isBefore(b)?c=Qb(a,b):(c=Qb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function Sb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ob(c,d),Tb(this,e,a),this}}function Tb(b,c,d,e){var f=c._milliseconds,g=yb(c._days),h=yb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Ub(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Vb(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||sb(),e=Bb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,sb(d)))}function Wb(){return new r(this)}function Xb(a,b){var c=s(a)?a:sb(a);return!(!this.isValid()||!c.isValid())&&(b=K(p(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function Yb(a,b){var c=s(a)?a:sb(a);return!(!this.isValid()||!c.isValid())&&(b=K(p(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function Zb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function $b(a,b){var c,d=s(a)?a:sb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function _b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ac(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function bc(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=Bb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=cc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function cc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function dc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ec(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function fc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function gc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function hc(a,b){return this.isValid()&&(s(a)&&a.isValid()||sb(a).isValid())?Ob({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.from(sb(),a)}function jc(a,b){return this.isValid()&&(s(a)&&a.isValid()||sb(a).isValid())?Ob({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function kc(a){return this.to(sb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function lc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function mc(){return this._locale}function nc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=K(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function oc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function pc(){return this._d.valueOf()-6e4*(this._offset||0)}function qc(){return Math.floor(this.valueOf()/1e3)}function rc(){return new Date(this.valueOf())}function sc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function tc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function uc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function vc(){return n(this)}function wc(){return j({},m(this))}function xc(){return m(this).overflow}function yc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function zc(a,b){U(0,[a,a.length],0,b)}
// MOMENTS
function Ac(a){return Ec.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Bc(a){return Ec.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Cc(){return xa(this.year(),1,4)}function Dc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ec(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Fc.call(this,a,b,c,d,e))}function Fc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Gc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Hc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Ic(a,b){b[ge]=u(1e3*("0."+a))}
// MOMENTS
function Jc(){return this._isUTC?"UTC":""}function Kc(){return this._isUTC?"Coordinated Universal Time":""}function Lc(a){return sb(1e3*a)}function Mc(){return sb.apply(null,arguments).parseZone()}function Nc(a){return a}function Oc(a,b,c,d){var e=bb(),f=k().set(d,b);return e[c](f,a)}function Pc(a,b,c){if(f(a)&&(b=a,a=void 0),a=a||"",null!=b)return Oc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Oc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Qc(a,b,c,d){"boolean"==typeof a?(f(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,f(b)&&(c=b,b=void 0),b=b||"");var e=bb(),g=a?e._week.dow:0;if(null!=c)return Oc(b,(c+g)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Oc(b,(h+g)%7,d,"day");return i}function Rc(a,b){return Pc(a,b,"months")}function Sc(a,b){return Pc(a,b,"monthsShort")}function Tc(a,b,c){return Qc(a,b,c,"weekdays")}function Uc(a,b,c){return Qc(a,b,c,"weekdaysShort")}function Vc(a,b,c){return Qc(a,b,c,"weekdaysMin")}function Wc(){var a=this._data;return this._milliseconds=Ze(this._milliseconds),this._days=Ze(this._days),this._months=Ze(this._months),a.milliseconds=Ze(a.milliseconds),a.seconds=Ze(a.seconds),a.minutes=Ze(a.minutes),a.hours=Ze(a.hours),a.months=Ze(a.months),a.years=Ze(a.years),this}function Xc(a,b,c,d){var e=Ob(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Yc(a,b){return Xc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Zc(a,b){return Xc(this,a,b,-1)}function $c(a){return a<0?Math.floor(a):Math.ceil(a)}function _c(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*$c(bd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ad(g)),h+=e,g-=$c(bd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ad(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function bd(a){
// the reverse of daysToMonths
return 146097*a/4800}function cd(a){var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ad(b),"month"===a?c:c/12;switch(
// handle milliseconds separately because of floating point math errors (issue #1867)
b=this._days+Math.round(bd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function dd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12)}function ed(a){return function(){return this.as(a)}}function fd(a){return a=K(a),this[a+"s"]()}function gd(a){return function(){return this._data[a]}}function hd(){return t(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function id(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function jd(a,b,c){var d=Ob(a).abs(),e=of(d.as("s")),f=of(d.as("m")),g=of(d.as("h")),h=of(d.as("d")),i=of(d.as("M")),j=of(d.as("y")),k=e<pf.s&&["s",e]||f<=1&&["m"]||f<pf.m&&["mm",f]||g<=1&&["h"]||g<pf.h&&["hh",g]||h<=1&&["d"]||h<pf.d&&["dd",h]||i<=1&&["M"]||i<pf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,id.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function kd(a){return void 0===a?of:"function"==typeof a&&(of=a,!0)}
// This function allows you to set a threshold for relative time strings
function ld(a,b){return void 0!==pf[a]&&(void 0===b?pf[a]:(pf[a]=b,!0))}function md(a){var b=this.localeData(),c=jd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function nd(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=qf(this._milliseconds)/1e3,e=qf(this._days),f=qf(this._months);
// 3600 seconds -> 60 minutes -> 1 hour
a=t(d/60),b=t(a/60),d%=60,a%=60,
// 12 months -> 1 year
c=t(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var od,pd;pd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var qd=pd,rd=a.momentProperties=[],sd=!1,td={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var ud;ud=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)i(a,b)&&c.push(b);return c};var vd,wd=ud,xd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},yd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},zd="Invalid date",Ad="%d",Bd=/\d{1,2}/,Cd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Dd={},Ed={},Fd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Gd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Hd={},Id={},Jd=/\d/,Kd=/\d\d/,Ld=/\d{3}/,Md=/\d{4}/,Nd=/[+-]?\d{6}/,Od=/\d\d?/,Pd=/\d\d\d\d?/,Qd=/\d\d\d\d\d\d?/,Rd=/\d{1,3}/,Sd=/\d{1,4}/,Td=/[+-]?\d{1,6}/,Ud=/\d+/,Vd=/[+-]?\d+/,Wd=/Z|[+-]\d\d:?\d\d/gi,Xd=/Z|[+-]\d\d(?::?\d\d)?/gi,Yd=/[+-]?\d+(\.\d{1,3})?/,Zd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,$d={},_d={},ae=0,be=1,ce=2,de=3,ee=4,fe=5,ge=6,he=7,ie=8;vd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var je=vd;
// FORMATTING
U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),
// ALIASES
J("month","M"),
// PRIORITY
M("month",8),
// PARSING
Z("M",Od),Z("MM",Od,Kd),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[be]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);
// if we didn't find a month name, mark the date as invalid.
null!=e?b[be]=e:m(c).invalidMonth=a});
// LOCALES
var ke=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,le="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),me="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ne=Zd,oe=Zd;
// FORMATTING
U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
J("year","y"),
// PRIORITIES
M("year",1),
// PARSING
Z("Y",Vd),Z("YY",Od,Kd),Z("YYYY",Sd,Md),Z("YYYYY",Td,Nd),Z("YYYYYY",Td,Nd),ba(["YYYYY","YYYYYY"],ae),ba("YYYY",function(b,c){c[ae]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ae]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ae]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};
// MOMENTS
var pe=O("FullYear",!0);
// FORMATTING
U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),
// ALIASES
J("week","w"),J("isoWeek","W"),
// PRIORITIES
M("week",5),M("isoWeek",5),
// PARSING
Z("w",Od),Z("ww",Od,Kd),Z("W",Od),Z("WW",Od,Kd),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var qe={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),
// ALIASES
J("day","d"),J("weekday","e"),J("isoWeekday","E"),
// PRIORITY
M("day",11),M("weekday",11),M("isoWeekday",11),
// PARSING
Z("d",Od),Z("e",Od),Z("E",Od),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:m(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});
// LOCALES
var re="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),se="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),te="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ue=Zd,ve=Zd,we=Zd;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),
// ALIASES
J("hour","h"),
// PRIORITY
M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Od),Z("h",Od),Z("HH",Od,Kd),Z("hh",Od,Kd),Z("hmm",Pd),Z("hmmss",Qd),Z("Hmm",Pd),Z("Hmmss",Qd),ba(["H","HH"],de),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[de]=u(a),m(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d)),m(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d,2)),b[fe]=u(a.substr(e)),m(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d,2)),b[fe]=u(a.substr(e))});var xe,ye=/[ap]\.?m?\.?/i,ze=O("Hours",!0),Ae={calendar:xd,longDateFormat:yd,invalidDate:zd,ordinal:Ad,ordinalParse:Bd,relativeTime:Cd,months:le,monthsShort:me,week:qe,weekdays:re,weekdaysMin:te,weekdaysShort:se,meridiemParse:ye},Be={},Ce={},De=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ee=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fe=/Z|[+-]\d\d(?::?\d\d)?/,Ge=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],He=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ie=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var Je=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=sb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:o()}),Ke=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=sb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:o()}),Le=function(){return Date.now?Date.now():+new Date};zb("Z",":"),zb("ZZ",""),
// PARSING
Z("Z",Xd),Z("ZZ",Xd),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ab(Xd,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Me=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var Ne=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Oe=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ob.fn=wb.prototype;var Pe=Sb(1,"add"),Qe=Sb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Re=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),zc("gggg","weekYear"),zc("ggggg","weekYear"),zc("GGGG","isoWeekYear"),zc("GGGGG","isoWeekYear"),
// ALIASES
J("weekYear","gg"),J("isoWeekYear","GG"),
// PRIORITY
M("weekYear",1),M("isoWeekYear",1),
// PARSING
Z("G",Vd),Z("g",Vd),Z("GG",Od,Kd),Z("gg",Od,Kd),Z("GGGG",Sd,Md),Z("gggg",Sd,Md),Z("GGGGG",Td,Nd),Z("ggggg",Td,Nd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
U("Q",0,"Qo","quarter"),
// ALIASES
J("quarter","Q"),
// PRIORITY
M("quarter",7),
// PARSING
Z("Q",Jd),ba("Q",function(a,b){b[be]=3*(u(a)-1)}),
// FORMATTING
U("D",["DD",2],"Do","date"),
// ALIASES
J("date","D"),
// PRIOROITY
M("date",9),
// PARSING
Z("D",Od),Z("DD",Od,Kd),Z("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),ba(["D","DD"],ce),ba("Do",function(a,b){b[ce]=u(a.match(Od)[0],10)});
// MOMENTS
var Se=O("Date",!0);
// FORMATTING
U("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
J("dayOfYear","DDD"),
// PRIORITY
M("dayOfYear",4),
// PARSING
Z("DDD",Rd),Z("DDDD",Ld),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),
// FORMATTING
U("m",["mm",2],0,"minute"),
// ALIASES
J("minute","m"),
// PRIORITY
M("minute",14),
// PARSING
Z("m",Od),Z("mm",Od,Kd),ba(["m","mm"],ee);
// MOMENTS
var Te=O("Minutes",!1);
// FORMATTING
U("s",["ss",2],0,"second"),
// ALIASES
J("second","s"),
// PRIORITY
M("second",15),
// PARSING
Z("s",Od),Z("ss",Od,Kd),ba(["s","ss"],fe);
// MOMENTS
var Ue=O("Seconds",!1);
// FORMATTING
U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
J("millisecond","ms"),
// PRIORITY
M("millisecond",16),
// PARSING
Z("S",Rd,Jd),Z("SS",Rd,Kd),Z("SSS",Rd,Ld);var Ve;for(Ve="SSSS";Ve.length<=9;Ve+="S")Z(Ve,Ud);for(Ve="S";Ve.length<=9;Ve+="S")ba(Ve,Ic);
// MOMENTS
var We=O("Milliseconds",!1);
// FORMATTING
U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var Xe=r.prototype;Xe.add=Pe,Xe.calendar=Vb,Xe.clone=Wb,Xe.diff=bc,Xe.endOf=oc,Xe.format=gc,Xe.from=hc,Xe.fromNow=ic,Xe.to=jc,Xe.toNow=kc,Xe.get=R,Xe.invalidAt=xc,Xe.isAfter=Xb,Xe.isBefore=Yb,Xe.isBetween=Zb,Xe.isSame=$b,Xe.isSameOrAfter=_b,Xe.isSameOrBefore=ac,Xe.isValid=vc,Xe.lang=Re,Xe.locale=lc,Xe.localeData=mc,Xe.max=Ke,Xe.min=Je,Xe.parsingFlags=wc,Xe.set=S,Xe.startOf=nc,Xe.subtract=Qe,Xe.toArray=sc,Xe.toObject=tc,Xe.toDate=rc,Xe.toISOString=ec,Xe.inspect=fc,Xe.toJSON=uc,Xe.toString=dc,Xe.unix=qc,Xe.valueOf=pc,Xe.creationData=yc,
// Year
Xe.year=pe,Xe.isLeapYear=ra,
// Week Year
Xe.weekYear=Ac,Xe.isoWeekYear=Bc,
// Quarter
Xe.quarter=Xe.quarters=Gc,
// Month
Xe.month=ka,Xe.daysInMonth=la,
// Week
Xe.week=Xe.weeks=Ba,Xe.isoWeek=Xe.isoWeeks=Ca,Xe.weeksInYear=Dc,Xe.isoWeeksInYear=Cc,
// Day
Xe.date=Se,Xe.day=Xe.days=Ka,Xe.weekday=La,Xe.isoWeekday=Ma,Xe.dayOfYear=Hc,
// Hour
Xe.hour=Xe.hours=ze,
// Minute
Xe.minute=Xe.minutes=Te,
// Second
Xe.second=Xe.seconds=Ue,
// Millisecond
Xe.millisecond=Xe.milliseconds=We,
// Offset
Xe.utcOffset=Db,Xe.utc=Fb,Xe.local=Gb,Xe.parseZone=Hb,Xe.hasAlignedHourOffset=Ib,Xe.isDST=Jb,Xe.isLocal=Lb,Xe.isUtcOffset=Mb,Xe.isUtc=Nb,Xe.isUTC=Nb,
// Timezone
Xe.zoneAbbr=Jc,Xe.zoneName=Kc,
// Deprecations
Xe.dates=x("dates accessor is deprecated. Use date instead.",Se),Xe.months=x("months accessor is deprecated. Use month instead",ka),Xe.years=x("years accessor is deprecated. Use year instead",pe),Xe.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Eb),Xe.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Kb);var Ye=C.prototype;Ye.calendar=D,Ye.longDateFormat=E,Ye.invalidDate=F,Ye.ordinal=G,Ye.preparse=Nc,Ye.postformat=Nc,Ye.relativeTime=H,Ye.pastFuture=I,Ye.set=A,
// Month
Ye.months=fa,Ye.monthsShort=ga,Ye.monthsParse=ia,Ye.monthsRegex=na,Ye.monthsShortRegex=ma,
// Week
Ye.week=ya,Ye.firstDayOfYear=Aa,Ye.firstDayOfWeek=za,
// Day of Week
Ye.weekdays=Fa,Ye.weekdaysMin=Ha,Ye.weekdaysShort=Ga,Ye.weekdaysParse=Ja,Ye.weekdaysRegex=Na,Ye.weekdaysShortRegex=Oa,Ye.weekdaysMinRegex=Pa,
// Hours
Ye.isPM=Va,Ye.meridiem=Wa,$a("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var Ze=Math.abs,$e=ed("ms"),_e=ed("s"),af=ed("m"),bf=ed("h"),cf=ed("d"),df=ed("w"),ef=ed("M"),ff=ed("y"),gf=gd("milliseconds"),hf=gd("seconds"),jf=gd("minutes"),kf=gd("hours"),lf=gd("days"),mf=gd("months"),nf=gd("years"),of=Math.round,pf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},qf=Math.abs,rf=wb.prototype;
// Deprecations
// Side effect imports
// FORMATTING
// PARSING
// Side effect imports
return rf.abs=Wc,rf.add=Yc,rf.subtract=Zc,rf.as=cd,rf.asMilliseconds=$e,rf.asSeconds=_e,rf.asMinutes=af,rf.asHours=bf,rf.asDays=cf,rf.asWeeks=df,rf.asMonths=ef,rf.asYears=ff,rf.valueOf=dd,rf._bubble=_c,rf.get=fd,rf.milliseconds=gf,rf.seconds=hf,rf.minutes=jf,rf.hours=kf,rf.days=lf,rf.weeks=hd,rf.months=mf,rf.years=nf,rf.humanize=md,rf.toISOString=nd,rf.toString=nd,rf.toJSON=nd,rf.locale=lc,rf.localeData=mc,rf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nd),rf.lang=Re,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Vd),Z("X",Yd),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.17.1",b(sb),a.fn=Xe,a.min=ub,a.max=vb,a.now=Le,a.utc=k,a.unix=Lc,a.months=Rc,a.isDate=g,a.locale=$a,a.invalid=o,a.duration=Ob,a.isMoment=s,a.weekdays=Tc,a.parseZone=Mc,a.localeData=bb,a.isDuration=xb,a.monthsShort=Sc,a.weekdaysMin=Vc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Uc,a.normalizeUnits=K,a.relativeTimeRounding=kd,a.relativeTimeThreshold=ld,a.calendarFormat=Ub,a.prototype=Xe,a});
/*!
 * FullCalendar v3.1.0
 * Docs & License: http://fullcalendar.io/
 * (c) 2016 Adam Shaw
 */

!function(t){"function"==typeof define&&define.amd?define(["jquery","moment"],t):"object"==typeof exports?module.exports=t(require("jquery"),require("moment")):t(jQuery,moment)}(function(t,e){function n(t){return q(t,$t)}function i(t,e){e.left&&t.css({"border-left-width":1,"margin-left":e.left-1}),e.right&&t.css({"border-right-width":1,"margin-right":e.right-1})}function r(t){t.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}function s(){t("body").addClass("fc-not-allowed")}function o(){t("body").removeClass("fc-not-allowed")}function l(e,n,i){var r=Math.floor(n/e.length),s=Math.floor(n-r*(e.length-1)),o=[],l=[],u=[],c=0;a(e),e.each(function(n,i){var a=n===e.length-1?s:r,d=t(i).outerHeight(!0);d<a?(o.push(i),l.push(d),u.push(t(i).height())):c+=d}),i&&(n-=c,r=Math.floor(n/o.length),s=Math.floor(n-r*(o.length-1))),t(o).each(function(e,n){var i=e===o.length-1?s:r,a=l[e],c=u[e],d=i-(a-c);a<i&&t(n).height(d)})}function a(t){t.height("")}function u(e){var n=0;return e.find("> *").each(function(e,i){var r=t(i).outerWidth();r>n&&(n=r)}),n++,e.width(n),n}function c(t,e){var n,i=t.add(e);return i.css({position:"relative",left:-1}),n=t.outerHeight()-e.outerHeight(),i.css({position:"",left:""}),n}function d(e){var n=e.css("position"),i=e.parents().filter(function(){var e=t(this);return/(auto|scroll)/.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:t(e[0].ownerDocument||document)}function h(t,e){var n=t.offset(),i=n.left-(e?e.left:0),r=n.top-(e?e.top:0);return{left:i,right:i+t.outerWidth(),top:r,bottom:r+t.outerHeight()}}function f(t,e){var n=t.offset(),i=p(t),r=n.left+y(t,"border-left-width")+i.left-(e?e.left:0),s=n.top+y(t,"border-top-width")+i.top-(e?e.top:0);return{left:r,right:r+t[0].clientWidth,top:s,bottom:s+t[0].clientHeight}}function g(t,e){var n=t.offset(),i=n.left+y(t,"border-left-width")+y(t,"padding-left")-(e?e.left:0),r=n.top+y(t,"border-top-width")+y(t,"padding-top")-(e?e.top:0);return{left:i,right:i+t.width(),top:r,bottom:r+t.height()}}function p(t){var e=t.innerWidth()-t[0].clientWidth,n={left:0,right:0,top:0,bottom:t.innerHeight()-t[0].clientHeight};return v()&&"rtl"==t.css("direction")?n.left=e:n.right=e,n}function v(){return null===Qt&&(Qt=m()),Qt}function m(){var e=t("<div><div/></div>").css({position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}).appendTo("body"),n=e.children(),i=n.offset().left>e.offset().left;return e.remove(),i}function y(t,e){return parseFloat(t.css(e))||0}function S(t){return 1==t.which&&!t.ctrlKey}function w(t){if(void 0!==t.pageX)return t.pageX;var e=t.originalEvent.touches;return e?e[0].pageX:void 0}function E(t){if(void 0!==t.pageY)return t.pageY;var e=t.originalEvent.touches;return e?e[0].pageY:void 0}function b(t){return/^touch/.test(t.type)}function D(t){t.addClass("fc-unselectable").on("selectstart",T)}function T(t){t.preventDefault()}function C(t){return!!window.addEventListener&&(window.addEventListener("scroll",t,!0),!0)}function H(t){return!!window.removeEventListener&&(window.removeEventListener("scroll",t,!0),!0)}function R(t,e){var n={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)};return n.left<n.right&&n.top<n.bottom&&n}function x(t,e){return{left:Math.min(Math.max(t.left,e.left),e.right),top:Math.min(Math.max(t.top,e.top),e.bottom)}}function I(t){return{left:(t.left+t.right)/2,top:(t.top+t.bottom)/2}}function k(t,e){return{left:t.left-e.left,top:t.top-e.top}}function L(e){var n,i,r=[],s=[];for("string"==typeof e?s=e.split(/\s*,\s*/):"function"==typeof e?s=[e]:t.isArray(e)&&(s=e),n=0;n<s.length;n++)i=s[n],"string"==typeof i?r.push("-"==i.charAt(0)?{field:i.substring(1),order:-1}:{field:i,order:1}):"function"==typeof i&&r.push({func:i});return r}function M(t,e,n){var i,r;for(i=0;i<n.length;i++)if(r=B(t,e,n[i]))return r;return 0}function B(t,e,n){return n.func?n.func(t,e):z(t[n.field],e[n.field])*(n.order||1)}function z(e,n){return e||n?null==n?-1:null==e?1:"string"===t.type(e)||"string"===t.type(n)?String(e).localeCompare(String(n)):e-n:0}function F(t,e){var n,i,r,s,o=t.start,l=t.end,a=e.start,u=e.end;if(l>a&&o<u)return o>=a?(n=o.clone(),r=!0):(n=a.clone(),r=!1),l<=u?(i=l.clone(),s=!0):(i=u.clone(),s=!1),{start:n,end:i,isStart:r,isEnd:s}}function N(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days"),ms:t.time()-n.time()})}function G(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days")})}function O(t,n,i){return e.duration(Math.round(t.diff(n,i,!0)),i)}function A(t,e){var n,i,r;for(n=0;n<Kt.length&&(i=Kt[n],r=V(i,t,e),!(r>=1&&ot(r)));n++);return i}function V(t,n,i){return null!=i?i.diff(n,t,!0):e.isDuration(n)?n.as(t):n.end.diff(n.start,t,!0)}function P(t,e,n){var i;return W(n)?(e-t)/n:(i=n.asMonths(),Math.abs(i)>=1&&ot(i)?e.diff(t,"months",!0)/i:e.diff(t,"days",!0)/n.asDays())}function _(t,e){var n,i;return W(t)||W(e)?t/e:(n=t.asMonths(),i=e.asMonths(),Math.abs(n)>=1&&ot(n)&&Math.abs(i)>=1&&ot(i)?n/i:t.asDays()/e.asDays())}function Y(t,n){var i;return W(t)?e.duration(t*n):(i=t.asMonths(),Math.abs(i)>=1&&ot(i)?e.duration({months:i*n}):e.duration({days:t.asDays()*n}))}function W(t){return Boolean(t.hours()||t.minutes()||t.seconds()||t.milliseconds())}function U(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function j(t){return/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)}function q(t,e){var n,i,r,s,o,l,a={};if(e)for(n=0;n<e.length;n++){for(i=e[n],r=[],s=t.length-1;s>=0;s--)if(o=t[s][i],"object"==typeof o)r.unshift(o);else if(void 0!==o){a[i]=o;break}r.length&&(a[i]=q(r))}for(n=t.length-1;n>=0;n--){l=t[n];for(i in l)i in a||(a[i]=l[i])}return a}function Z(t){var e=function(){};return e.prototype=t,new e}function $(t,e){for(var n in t)Q(t,n)&&(e[n]=t[n])}function Q(t,e){return Jt.call(t,e)}function X(e){return/undefined|null|boolean|number|string/.test(t.type(e))}function K(e,n,i){if(t.isFunction(e)&&(e=[e]),e){var r,s;for(r=0;r<e.length;r++)s=e[r].apply(n,i)||s;return s}}function J(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]}function tt(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function et(t){return t.replace(/&.*?;/g,"")}function nt(e){var n=[];return t.each(e,function(t,e){null!=e&&n.push(t+":"+e)}),n.join(";")}function it(e){var n=[];return t.each(e,function(t,e){null!=e&&n.push(t+'="'+tt(e)+'"')}),n.join(" ")}function rt(t){return t.charAt(0).toUpperCase()+t.slice(1)}function st(t,e){return t-e}function ot(t){return t%1===0}function lt(t,e){var n=t[e];return function(){return n.apply(t,arguments)}}function at(t,e,n){var i,r,s,o,l,a=function(){var u=+new Date-o;u<e?i=setTimeout(a,e-u):(i=null,n||(l=t.apply(s,r),s=r=null))};return function(){s=this,r=arguments,o=+new Date;var u=n&&!i;return i||(i=setTimeout(a,e)),u&&(l=t.apply(s,r),s=r=null),l}}function ut(n,i,r){var s,o,l,a,u=n[0],c=1==n.length&&"string"==typeof u;return e.isMoment(u)||U(u)||void 0===u?a=e.apply(null,n):(s=!1,o=!1,c?te.test(u)?(u+="-01",n=[u],s=!0,o=!0):(l=ee.exec(u))&&(s=!l[5],o=!0):t.isArray(u)&&(o=!0),a=i||s?e.utc.apply(e,n):e.apply(null,n),s?(a._ambigTime=!0,a._ambigZone=!0):r&&(o?a._ambigZone=!0:c&&a.utcOffset(u))),a._fullCalendar=!0,a}function ct(t,e){return ie.format.call(t,e)}function dt(t,e){return ht(t,mt(e))}function ht(t,e){var n,i="";for(n=0;n<e.length;n++)i+=ft(t,e[n]);return i}function ft(t,e){var n,i;return"string"==typeof e?e:(n=e.token)?se[n]?se[n](t):ct(t,n):e.maybe&&(i=ht(t,e.maybe),i.match(/[1-9]/))?i:""}function gt(t,e,n,i,r){var s;return t=qt.moment.parseZone(t),e=qt.moment.parseZone(e),s=t.localeData(),n=s.longDateFormat(n)||n,i=i||" - ",pt(t,e,mt(n),i,r)}function pt(t,e,n,i,r){var s,o,l,a,u=t.clone().stripZone(),c=e.clone().stripZone(),d="",h="",f="",g="",p="";for(o=0;o<n.length&&(s=vt(t,e,u,c,n[o]),s!==!1);o++)d+=s;for(l=n.length-1;l>o&&(s=vt(t,e,u,c,n[l]),s!==!1);l--)h=s+h;for(a=o;a<=l;a++)f+=ft(t,n[a]),g+=ft(e,n[a]);return(f||g)&&(p=r?g+i+f:f+i+g),d+p+h}function vt(t,e,n,i,r){var s,o;return"string"==typeof r?r:!!((s=r.token)&&(o=oe[s.charAt(0)],o&&n.isSame(i,o)))&&ct(t,s)}function mt(t){return t in le?le[t]:le[t]=yt(t)}function yt(t){for(var e,n=[],i=/\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;e=i.exec(t);)e[1]?n.push(e[1]):e[2]?n.push({maybe:yt(e[2])}):e[3]?n.push({token:e[3]}):e[5]&&n.push(e[5]);return n}function St(){}function wt(t,e){var n;return Q(e,"constructor")&&(n=e.constructor),"function"!=typeof n&&(n=e.constructor=function(){t.apply(this,arguments)}),n.prototype=Z(t.prototype),$(e,n.prototype),$(t,n),n}function Et(t,e){$(e,t.prototype)}function bt(e){var n=t.Deferred(),i=n.promise();if("function"==typeof e&&e(function(t){bt.immediate&&(i._value=t),n.resolve(t)},function(){n.reject()}),bt.immediate){var r=i.then;i.then=function(t,e){var n=i.state();if("resolved"===n){if("function"==typeof t)return bt.resolve(t(i._value))}else if("rejected"===n&&"function"==typeof e)return e(),i;return r.call(i,t,e)}}return i}function Dt(t){function e(t){return new bt(function(e){var i=function(){bt.resolve(t()).then(e).then(function(){n.shift(),n.length&&n[0]()})};n.push(i),1===n.length&&i()})}var n=[];this.add="number"==typeof t?at(e,t):e,this.addQuickly=e}function Tt(t,e){return!t&&!e||!(!t||!e)&&(t.component===e.component&&Ct(t,e)&&Ct(e,t))}function Ct(t,e){for(var n in t)if(!/^(component|left|right|top|bottom)$/.test(n)&&t[n]!==e[n])return!1;return!0}function Ht(t){return{start:t.start.clone(),end:t.end?t.end.clone():null,allDay:t.allDay}}function Rt(t){var e=It(t);return"background"===e||"inverse-background"===e}function xt(t){return"inverse-background"===It(t)}function It(t){return J((t.source||{}).rendering,t.rendering)}function kt(t){var e,n,i={};for(e=0;e<t.length;e++)n=t[e],(i[n._id]||(i[n._id]=[])).push(n);return i}function Lt(t,e){return t.start-e.start}function Mt(n){var i,r,s,o,l=qt.dataAttrPrefix;return l&&(l+="-"),i=n.data(l+"event")||null,i&&(i="object"==typeof i?t.extend({},i):{},r=i.start,null==r&&(r=i.time),s=i.duration,o=i.stick,delete i.start,delete i.time,delete i.duration,delete i.stick),null==r&&(r=n.data(l+"start")),null==r&&(r=n.data(l+"time")),null==s&&(s=n.data(l+"duration")),null==o&&(o=n.data(l+"stick")),r=null!=r?e.duration(r):null,s=null!=s?e.duration(s):null,o=Boolean(o),{eventProps:i,startTime:r,duration:s,stick:o}}function Bt(t,e){var n,i;for(n=0;n<e.length;n++)if(i=e[n],i.leftCol<=t.rightCol&&i.rightCol>=t.leftCol)return!0;return!1}function zt(t,e){return t.leftCol-e.leftCol}function Ft(t){var e,n,i,r=[];for(e=0;e<t.length;e++){for(n=t[e],i=0;i<r.length&&Ot(n,r[i]).length;i++);n.level=i,(r[i]||(r[i]=[])).push(n)}return r}function Nt(t){var e,n,i,r,s;for(e=0;e<t.length;e++)for(n=t[e],i=0;i<n.length;i++)for(r=n[i],r.forwardSegs=[],s=e+1;s<t.length;s++)Ot(r,t[s],r.forwardSegs)}function Gt(t){var e,n,i=t.forwardSegs,r=0;if(void 0===t.forwardPressure){for(e=0;e<i.length;e++)n=i[e],Gt(n),r=Math.max(r,1+n.forwardPressure);t.forwardPressure=r}}function Ot(t,e,n){n=n||[];for(var i=0;i<e.length;i++)At(t,e[i])&&n.push(e[i]);return n}function At(t,e){return t.bottom>e.top&&t.top<e.bottom}function Vt(t){this.items=t||[]}function Pt(e,n){function i(t){n=t}function r(){var i=n.layout;p=e.options.theme?"ui":"fc",i?(g?g.empty():g=this.el=t("<div class='fc-toolbar "+n.extraClasses+"'/>"),g.append(o("left")).append(o("right")).append(o("center")).append('<div class="fc-clear"/>')):s()}function s(){g&&(g.remove(),g=f.el=null)}function o(i){var r=t('<div class="fc-'+i+'"/>'),s=n.layout[i];return s&&t.each(s.split(" "),function(n){var i,s=t(),o=!0;t.each(this.split(","),function(n,i){var r,l,a,u,c,d,h,f,g,m;"title"==i?(s=s.add(t("<h2>&nbsp;</h2>")),o=!1):((r=(e.options.customButtons||{})[i])?(a=function(t){r.click&&r.click.call(m[0],t)},u="",c=r.text):(l=e.getViewSpec(i))?(a=function(){e.changeView(i)},v.push(i),u=l.buttonTextOverride,c=l.buttonTextDefault):e[i]&&(a=function(){e[i]()},u=(e.overrides.buttonText||{})[i],c=e.options.buttonText[i]),a&&(d=r?r.themeIcon:e.options.themeButtonIcons[i],h=r?r.icon:e.options.buttonIcons[i],f=u?tt(u):d&&e.options.theme?"<span class='ui-icon ui-icon-"+d+"'></span>":h&&!e.options.theme?"<span class='fc-icon fc-icon-"+h+"'></span>":tt(c),g=["fc-"+i+"-button",p+"-button",p+"-state-default"],m=t('<button type="button" class="'+g.join(" ")+'">'+f+"</button>").click(function(t){m.hasClass(p+"-state-disabled")||(a(t),(m.hasClass(p+"-state-active")||m.hasClass(p+"-state-disabled"))&&m.removeClass(p+"-state-hover"))}).mousedown(function(){m.not("."+p+"-state-active").not("."+p+"-state-disabled").addClass(p+"-state-down")}).mouseup(function(){m.removeClass(p+"-state-down")}).hover(function(){m.not("."+p+"-state-active").not("."+p+"-state-disabled").addClass(p+"-state-hover")},function(){m.removeClass(p+"-state-hover").removeClass(p+"-state-down")}),s=s.add(m)))}),o&&s.first().addClass(p+"-corner-left").end().last().addClass(p+"-corner-right").end(),s.length>1?(i=t("<div/>"),o&&i.addClass("fc-button-group"),i.append(s),r.append(i)):r.append(s)}),r}function l(t){g&&g.find("h2").text(t)}function a(t){g&&g.find(".fc-"+t+"-button").addClass(p+"-state-active")}function u(t){g&&g.find(".fc-"+t+"-button").removeClass(p+"-state-active")}function c(t){g&&g.find(".fc-"+t+"-button").prop("disabled",!0).addClass(p+"-state-disabled")}function d(t){g&&g.find(".fc-"+t+"-button").prop("disabled",!1).removeClass(p+"-state-disabled")}function h(){return v}var f=this;f.setToolbarOptions=i,f.render=r,f.removeElement=s,f.updateTitle=l,f.activateButton=a,f.deactivateButton=u,f.disableButton=c,f.enableButton=d,f.getViewsWithButtons=h,f.el=null;var g,p,v=[]}function _t(n,i){function r(t){t._locale=Y}function s(){q?a()&&(f(),u()):o()}function o(){n.addClass("fc"),n.on("click.fc","a[data-goto]",function(e){var n=t(this),i=n.data("goto"),r=_.moment(i.date),s=i.type,o=Q.opt("navLink"+rt(s)+"Click");"function"==typeof o?o(r,e):("string"==typeof o&&(s=o),B(r,s))}),_.bindOption("theme",function(t){$=t?"ui":"fc",n.toggleClass("ui-widget",t),n.toggleClass("fc-unthemed",!t)}),_.bindOptions(["isRTL","locale"],function(t){n.toggleClass("fc-ltr",!t),n.toggleClass("fc-rtl",t)}),q=t("<div class='fc-view-container'/>").prependTo(n);var e=y();W=new Vt(e),U=_.header=e[0],j=_.footer=e[1],E(),b(),u(_.options.defaultView),_.options.handleWindowResize&&(K=at(v,_.options.windowResizeDelay),t(window).resize(K))}function l(){Q&&Q.removeElement(),W.proxyCall("removeElement"),q.remove(),n.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"),n.off(".fc"),K&&t(window).unbind("resize",K)}function a(){return n.is(":visible")}function u(e,n){nt++;var i=Q&&e&&Q.type!==e;i&&(F(),c()),!Q&&e&&(Q=_.view=et[e]||(et[e]=_.instantiateView(e)),Q.setElement(t("<div class='fc-view fc-"+e+"-view' />").appendTo(q)),W.proxyCall("activateButton",e)),Q&&(J=Q.massageCurrentDate(J),Q.isDateSet&&J>=Q.intervalStart&&J<Q.intervalEnd||a()&&(n&&Q.captureInitialScroll(n),Q.setDate(J,n),n&&Q.releaseScroll(),D())),i&&N(),nt--}function c(){W.proxyCall("deactivateButton",Q.type),Q.removeElement(),Q=_.view=null}function d(){nt++,F();var t=Q.type,e=Q.queryScroll();c(),f(),u(t,e),N(),nt--}function h(t){if(a())return t&&g(),nt++,Q.updateSize(!0),nt--,!0}function f(){a()&&g()}function g(){var t=_.options.contentHeight,e=_.options.height;X="number"==typeof t?t:"function"==typeof t?t():"number"==typeof e?e-p():"function"==typeof e?e()-p():"parent"===e?n.parent().height()-p():Math.round(q.width()/Math.max(_.options.aspectRatio,.5))}function p(){return W.items.reduce(function(t,e){var n=e.el?e.el.outerHeight(!0):0;return t+n},0)}function v(t){!nt&&t.target===window&&Q.start&&h(!0)&&Q.publiclyTrigger("windowResize",tt)}function m(){a()&&_.reportEventChange()}function y(){return[new Pt(_,S()),new Pt(_,w())]}function S(){return{extraClasses:"fc-header-toolbar",layout:_.options.header}}function w(){return{extraClasses:"fc-footer-toolbar",layout:_.options.footer}}function E(){U.setToolbarOptions(S()),U.render(),U.el&&n.prepend(U.el)}function b(){j.setToolbarOptions(w()),j.render(),j.el&&n.append(j.el)}function D(){var t=_.getNow();t>=Q.intervalStart&&t<Q.intervalEnd?W.proxyCall("disableButton","today"):W.proxyCall("enableButton","today")}function T(t,e){Q.select(_.buildSelectSpan.apply(_,arguments))}function C(){Q&&Q.unselect()}function H(){J=Q.computePrevDate(J),u()}function R(){J=Q.computeNextDate(J),u()}function x(){J.add(-1,"years"),u()}function I(){J.add(1,"years"),u()}function k(){J=_.getNow(),u()}function L(t){J=_.moment(t).stripZone(),u()}function M(t){J.add(e.duration(t)),u()}function B(t,e){var n;e=e||"day",n=_.getViewSpec(e)||_.getUnitViewSpec(e),J=t.clone(),u(n?n.type:null)}function z(){return _.applyTimezone(J)}function F(){it++||q.css({width:"100%",height:q.height(),overflow:"hidden"})}function N(){--it||q.css({width:"",height:"",overflow:""})}function G(){return _}function O(){return Q}function A(t,e){var n;if("string"==typeof t){if(void 0===e)return _.options[t];n={},n[t]=e,V(n)}else"object"==typeof t&&V(t)}function V(t){var e,n=0;for(e in t)_.dynamicOverrides[e]=t[e];_.viewSpecCache={},_.populateOptionsHash();for(e in t)_.triggerOptionHandlers(e),n++;if(1===n){if("height"===e||"contentHeight"===e||"aspectRatio"===e)return void h(!0);if("defaultDate"===e)return;if("businessHours"===e)return void(Q&&(Q.unrenderBusinessHours(),Q.renderBusinessHours()));if("timezone"===e)return _.rezoneArrayEventSources(),void _.refetchEvents()}E(),b(),et={},d()}function P(t,e){var n=Array.prototype.slice.call(arguments,2);if(e=e||tt,this.triggerWith(t,e,n),_.options[t])return _.options[t].apply(e,n)}var _=this;_.render=s,_.destroy=l,_.rerenderEvents=m,_.changeView=u,_.select=T,_.unselect=C,_.prev=H,_.next=R,_.prevYear=x,_.nextYear=I,_.today=k,_.gotoDate=L,_.incrementDate=M,_.zoomTo=B,_.getDate=z,_.getCalendar=G,_.getView=O,_.option=A,_.publiclyTrigger=P,_.dynamicOverrides={},_.viewSpecCache={},_.optionHandlers={},_.overrides=t.extend({},i),_.populateOptionsHash();var Y;_.bindOptions(["locale","monthNames","monthNamesShort","dayNames","dayNamesShort","firstDay","weekNumberCalculation"],function(t,e,n,i,s,o,l){if("iso"===l&&(l="ISO"),Y=Z(Wt(t)),e&&(Y._months=e),n&&(Y._monthsShort=n),i&&(Y._weekdays=i),s&&(Y._weekdaysShort=s),null==o&&"ISO"===l&&(o=1),null!=o){var a=Z(Y._week);a.dow=o,Y._week=a}"ISO"!==l&&"local"!==l&&"function"!=typeof l||(Y._fullCalendar_weekCalc=l),J&&r(J)}),_.defaultAllDayEventDuration=e.duration(_.options.defaultAllDayEventDuration),_.defaultTimedEventDuration=e.duration(_.options.defaultTimedEventDuration),_.moment=function(){var t;return"local"===_.options.timezone?(t=qt.moment.apply(null,arguments),t.hasTime()&&t.local()):t="UTC"===_.options.timezone?qt.moment.utc.apply(null,arguments):qt.moment.parseZone.apply(null,arguments),r(t),t},_.localizeMoment=r,_.getIsAmbigTimezone=function(){return"local"!==_.options.timezone&&"UTC"!==_.options.timezone},_.applyTimezone=function(t){if(!t.hasTime())return t.clone();var e,n=_.moment(t.toArray()),i=t.time()-n.time();return i&&(e=n.clone().add(i),t.time()-e.time()===0&&(n=e)),n},_.getNow=function(){var t=_.options.now;return"function"==typeof t&&(t=t()),_.moment(t).stripZone()},_.getEventEnd=function(t){return t.end?t.end.clone():_.getDefaultEventEnd(t.allDay,t.start)},_.getDefaultEventEnd=function(t,e){var n=e.clone();return t?n.stripTime().add(_.defaultAllDayEventDuration):n.add(_.defaultTimedEventDuration),_.getIsAmbigTimezone()&&n.stripZone(),n},_.humanizeDuration=function(t){return t.locale(_.options.locale).humanize()},Ut.call(_);var W,U,j,q,$,Q,X,K,J,tt=n[0],et={},nt=0;J=null!=_.options.defaultDate?_.moment(_.options.defaultDate).stripZone():_.getNow(),_.getSuggestedViewHeight=function(){return void 0===X&&f(),X},_.isHeightAuto=function(){return"auto"===_.options.contentHeight||"auto"===_.options.height},_.setToolbarsTitle=function(t){W.proxyCall("updateTitle",t)},_.freezeContentHeight=F,_.thawContentHeight=N;var it=0;_.initialize()}function Yt(e){t.each(Re,function(t,n){null==e[t]&&(e[t]=n(e))})}function Wt(t){return e.localeData(t)||e.localeData("en")}function Ut(){function n(t,e){return!U.options.lazyFetching||s(t,e)?o(t,e):bt.resolve($)}function i(){$=r(nt),U.trigger("eventsReset",$)}function r(t){var e,n,i=[];for(e=0;e<t.length;e++)n=t[e],n.start.clone().stripZone()<Z&&U.getEventEnd(n).stripZone()>q&&i.push(n);return i}function s(t,e){return!q||t<q||e>Z}function o(t,e){return q=t,Z=e,l()}function l(){return u(tt,"reset")}function a(t){return u(E(t))}function u(t,e){var n,i;for("reset"===e?nt=[]:"add"!==e&&(nt=C(nt,t)),n=0;n<t.length;n++)i=t[n],"pending"!==i._status&&et++,i._fetchId=(i._fetchId||0)+1,i._status="pending";for(n=0;n<t.length;n++)i=t[n],c(i,i._fetchId);return et?new bt(function(t){U.one("eventsReceived",t)}):bt.resolve($)}function c(e,n){f(e,function(i){var r,s,o,l=t.isArray(e.events);if(n===e._fetchId&&"rejected"!==e._status){if(e._status="resolved",i)for(r=0;r<i.length;r++)s=i[r],o=l?s:F(s,e),o&&nt.push.apply(nt,_(o));h()}})}function d(t){var e="pending"===t._status;t._status="rejected",e&&h()}function h(){et--,et||(i(nt),U.trigger("eventsReceived",$))}function f(e,n){var i,r,s=qt.sourceFetchers;for(i=0;i<s.length;i++){if(r=s[i].call(U,e,q.clone(),Z.clone(),U.options.timezone,n),r===!0)return;if("object"==typeof r)return void f(r,n)}var o=e.events;if(o)t.isFunction(o)?(U.pushLoading(),o.call(U,q.clone(),Z.clone(),U.options.timezone,function(t){n(t),U.popLoading()})):t.isArray(o)?n(o):n();else{var l=e.url;if(l){var a,u=e.success,c=e.error,d=e.complete;a=t.isFunction(e.data)?e.data():e.data;var h=t.extend({},a||{}),g=J(e.startParam,U.options.startParam),p=J(e.endParam,U.options.endParam),v=J(e.timezoneParam,U.options.timezoneParam);g&&(h[g]=q.format()),p&&(h[p]=Z.format()),U.options.timezone&&"local"!=U.options.timezone&&(h[v]=U.options.timezone),U.pushLoading(),t.ajax(t.extend({},xe,e,{data:h,success:function(e){e=e||[];var i=K(u,this,arguments);t.isArray(i)&&(e=i),n(e)},error:function(){K(c,this,arguments),n()},complete:function(){K(d,this,arguments),U.popLoading()}}))}else n()}}function g(t){var e=p(t);e&&(tt.push(e),u([e],"add"))}function p(e){var n,i,r=qt.sourceNormalizers;if(t.isFunction(e)||t.isArray(e)?n={events:e}:"string"==typeof e?n={url:e}:"object"==typeof e&&(n=t.extend({},e)),n){for(n.className?"string"==typeof n.className&&(n.className=n.className.split(/\s+/)):n.className=[],t.isArray(n.events)&&(n.origArray=n.events,n.events=t.map(n.events,function(t){return F(t,n)})),i=0;i<r.length;i++)r[i].call(U,n);return n}}function v(t){y(b(t))}function m(t){null==t?y(tt,!0):y(E(t))}function y(e,n){var r;for(r=0;r<e.length;r++)d(e[r]);n?(tt=[],nt=[]):(tt=t.grep(tt,function(t){for(r=0;r<e.length;r++)if(t===e[r])return!1;return!0}),nt=C(nt,e)),i()}function S(){return tt.slice(1)}function w(e){return t.grep(tt,function(t){return t.id&&t.id===e})[0]}function E(e){e?t.isArray(e)||(e=[e]):e=[];var n,i=[];for(n=0;n<e.length;n++)i.push.apply(i,b(e[n]));return i}function b(e){var n,i;for(n=0;n<tt.length;n++)if(i=tt[n],i===e)return[i];return i=w(e),i?[i]:t.grep(tt,function(t){return D(e,t)})}function D(t,e){return t&&e&&T(t)==T(e)}function T(t){return("object"==typeof t?t.origArray||t.googleCalendarId||t.url||t.events:null)||t}function C(e,n){return t.grep(e,function(t){for(var e=0;e<n.length;e++)if(t.source===n[e])return!1;return!0})}function H(t){R([t])}function R(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.start=U.moment(n.start),n.end?n.end=U.moment(n.end):n.end=null,Y(n,x(n));i()}function x(e){var n={};return t.each(e,function(t,e){I(t)&&void 0!==e&&X(e)&&(n[t]=e)}),n}function I(t){return!/^_|^(id|allDay|start|end)$/.test(t)}function k(t,e){return L([t],e)}function L(t,e){var n,r,s,o,l,a=[];for(s=0;s<t.length;s++)if(r=F(t[s])){for(n=_(r),o=0;o<n.length;o++)l=n[o],l.source||(e&&(Q.events.push(l),l.source=Q),nt.push(l));a=a.concat(n)}return a.length&&i(),a}function M(e){var n,r;for(null==e?e=function(){return!0}:t.isFunction(e)||(n=e+"",e=function(t){return t._id==n}),nt=t.grep(nt,e,!0),r=0;r<tt.length;r++)t.isArray(tt[r].events)&&(tt[r].events=t.grep(tt[r].events,e,!0));i()}function B(e){return t.isFunction(e)?t.grep(nt,e):null!=e?(e+="",t.grep(nt,function(t){return t._id==e})):nt}function z(t){t.start=U.moment(t.start),t.end&&(t.end=U.moment(t.end)),jt(t)}function F(n,i){var r,s,o,l={};if(U.options.eventDataTransform&&(n=U.options.eventDataTransform(n)),i&&i.eventDataTransform&&(n=i.eventDataTransform(n)),t.extend(l,n),i&&(l.source=i),l._id=n._id||(void 0===n.id?"_fc"+Ie++:n.id+""),n.className?"string"==typeof n.className?l.className=n.className.split(/\s+/):l.className=n.className:l.className=[],r=n.start||n.date,s=n.end,j(r)&&(r=e.duration(r)),j(s)&&(s=e.duration(s)),n.dow||e.isDuration(r)||e.isDuration(s))l.start=r?e.duration(r):null,l.end=s?e.duration(s):null,l._recurring=!0;else{if(r&&(r=U.moment(r),!r.isValid()))return!1;s&&(s=U.moment(s),s.isValid()||(s=null)),o=n.allDay,void 0===o&&(o=J(i?i.allDayDefault:void 0,U.options.allDayDefault)),A(r,s,o,l)}return U.normalizeEvent(l),l}function A(t,e,n,i){i.start=t,i.end=e,i.allDay=n,V(i),jt(i)}function V(t){P(t),t.end&&!t.end.isAfter(t.start)&&(t.end=null),t.end||(U.options.forceEventDuration?t.end=U.getDefaultEventEnd(t.allDay,t.start):t.end=null)}function P(t){null==t.allDay&&(t.allDay=!(t.start.hasTime()||t.end&&t.end.hasTime())),t.allDay?(t.start.stripTime(),t.end&&t.end.stripTime()):(t.start.hasTime()||(t.start=U.applyTimezone(t.start.time(0))),t.end&&!t.end.hasTime()&&(t.end=U.applyTimezone(t.end.time(0))))}function _(e,n,i){var r,s,o,l,a,u,c,d,h,f=[];if(n=n||q,i=i||Z,e)if(e._recurring){if(s=e.dow)for(r={},o=0;o<s.length;o++)r[s[o]]=!0;for(l=n.clone().stripTime();l.isBefore(i);)r&&!r[l.day()]||(a=e.start,u=e.end,c=l.clone(),d=null,a&&(c=c.time(a)),u&&(d=l.clone().time(u)),h=t.extend({},e),A(c,d,!a&&!u,h),f.push(h)),l.add(1,"days")}else f.push(e);return f}function Y(e,n,i){function r(t,e){return i?O(t,e,i):n.allDay?G(t,e):N(t,e)}var s,o,l,a,u,c,d={};return n=n||{},n.start||(n.start=e.start.clone()),void 0===n.end&&(n.end=e.end?e.end.clone():null),null==n.allDay&&(n.allDay=e.allDay),V(n),s={start:e._start.clone(),end:e._end?e._end.clone():U.getDefaultEventEnd(e._allDay,e._start),allDay:n.allDay},V(s),o=null!==e._end&&null===n.end,l=r(n.start,s.start),n.end?(a=r(n.end,s.end),u=a.subtract(l)):u=null,t.each(n,function(t,e){I(t)&&void 0!==e&&(d[t]=e)}),c=W(B(e._id),o,n.allDay,l,u,d),{dateDelta:l,durationDelta:u,undo:c}}function W(e,n,i,r,s,o){var l=U.getIsAmbigTimezone(),a=[];return r&&!r.valueOf()&&(r=null),s&&!s.valueOf()&&(s=null),t.each(e,function(e,u){var c,d;c={start:u.start.clone(),end:u.end?u.end.clone():null,allDay:u.allDay},t.each(o,function(t){c[t]=u[t]}),d={start:u._start,end:u._end,allDay:i},V(d),n?d.end=null:s&&!d.end&&(d.end=U.getDefaultEventEnd(d.allDay,d.start)),r&&(d.start.add(r),d.end&&d.end.add(r)),s&&d.end.add(s),l&&!d.allDay&&(r||s)&&(d.start.stripZone(),d.end&&d.end.stripZone()),t.extend(u,o,d),jt(u),a.push(function(){t.extend(u,c),jt(u)})}),function(){for(var t=0;t<a.length;t++)a[t]()}}var U=this;U.requestEvents=n,U.reportEventChange=i,U.isFetchNeeded=s,U.fetchEvents=o,U.fetchEventSources=u,U.refetchEvents=l,U.refetchEventSources=a,U.getEventSources=S,U.getEventSourceById=w,U.addEventSource=g,U.removeEventSource=v,U.removeEventSources=m,U.updateEvent=H,U.updateEvents=R,U.renderEvent=k,U.renderEvents=L,U.removeEvents=M,U.clientEvents=B,U.mutateEvent=Y,U.normalizeEventDates=V,U.normalizeEventTimes=P;var q,Z,$,Q={events:[]},tt=[Q],et=0,nt=[];t.each((U.options.events?[U.options.events]:[]).concat(U.options.eventSources||[]),function(t,e){var n=p(e);n&&tt.push(n)}),U.getEventCache=function(){return nt},U.getPrunedEventCache=function(){return $},U.rezoneArrayEventSources=function(){var e,n,i;for(e=0;e<tt.length;e++)if(n=tt[e].events,t.isArray(n))for(i=0;i<n.length;i++)z(n[i])},U.buildEventFromInput=F,U.expandEvent=_}function jt(t){t._allDay=t.allDay,t._start=t.start.clone(),t._end=t.end?t.end.clone():null}var qt=t.fullCalendar={version:"3.1.0",internalApiVersion:7},Zt=qt.views={};t.fn.fullCalendar=function(e){var n=Array.prototype.slice.call(arguments,1),i=this;return this.each(function(r,s){var o,l=t(s),a=l.data("fullCalendar");"string"==typeof e?a&&t.isFunction(a[e])&&(o=a[e].apply(a,n),r||(i=o),"destroy"===e&&l.removeData("fullCalendar")):a||(a=new De(l,e),l.data("fullCalendar",a),a.render())}),i};var $t=["header","footer","buttonText","buttonIcons","themeButtonIcons"];qt.intersectRanges=F,qt.applyAll=K,qt.debounce=at,qt.isInt=ot,qt.htmlEscape=tt,qt.cssToStr=nt,qt.proxy=lt,qt.capitaliseFirstLetter=rt,qt.getOuterRect=h,qt.getClientRect=f,qt.getContentRect=g,qt.getScrollbarWidths=p;var Qt=null;qt.preventDefault=T,qt.intersectRects=R,qt.parseFieldSpecs=L,qt.compareByFieldSpecs=M,qt.compareByFieldSpec=B,qt.flexibleCompare=z,qt.computeIntervalUnit=A,qt.divideRangeByDuration=P,qt.divideDurationByDuration=_,qt.multiplyDuration=Y,qt.durationHasTime=W;var Xt=["sun","mon","tue","wed","thu","fri","sat"],Kt=["year","month","week","day","hour","minute","second","millisecond"];qt.log=function(){var t=window.console;if(t&&t.log)return t.log.apply(t,arguments)},qt.warn=function(){var t=window.console;return t&&t.warn?t.warn.apply(t,arguments):qt.log.apply(qt,arguments)};var Jt={}.hasOwnProperty;qt.createObject=Z;var te=/^\s*\d{4}-\d\d$/,ee=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,ne=e.fn,ie=t.extend({},ne),re=e.momentProperties;re.push("_fullCalendar"),re.push("_ambigTime"),re.push("_ambigZone"),qt.moment=function(){return ut(arguments)},qt.moment.utc=function(){var t=ut(arguments,!0);return t.hasTime()&&t.utc(),t},qt.moment.parseZone=function(){return ut(arguments,!0,!0)},ne.week=ne.weeks=function(t){var e=this._locale._fullCalendar_weekCalc;return null==t&&"function"==typeof e?e(this):"ISO"===e?ie.isoWeek.apply(this,arguments):ie.week.apply(this,arguments)},ne.time=function(t){if(!this._fullCalendar)return ie.time.apply(this,arguments);if(null==t)return e.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});this._ambigTime=!1,e.isDuration(t)||e.isMoment(t)||(t=e.duration(t));var n=0;return e.isDuration(t)&&(n=24*Math.floor(t.asDays())),this.hours(n+t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())},ne.stripTime=function(){return this._ambigTime||(this.utc(!0),this.set({hours:0,minutes:0,seconds:0,ms:0}),this._ambigTime=!0,this._ambigZone=!0),this},ne.hasTime=function(){return!this._ambigTime},ne.stripZone=function(){var t;return this._ambigZone||(t=this._ambigTime,this.utc(!0),this._ambigTime=t||!1,this._ambigZone=!0),this},ne.hasZone=function(){return!this._ambigZone},ne.local=function(t){return ie.local.call(this,this._ambigZone||t),this._ambigTime=!1,this._ambigZone=!1,this},ne.utc=function(t){return ie.utc.call(this,t),this._ambigTime=!1,this._ambigZone=!1,this},ne.utcOffset=function(t){return null!=t&&(this._ambigTime=!1,this._ambigZone=!1),ie.utcOffset.apply(this,arguments)},ne.format=function(){return this._fullCalendar&&arguments[0]?dt(this,arguments[0]):this._ambigTime?ct(this,"YYYY-MM-DD"):this._ambigZone?ct(this,"YYYY-MM-DD[T]HH:mm:ss"):ie.format.apply(this,arguments)},ne.toISOString=function(){return this._ambigTime?ct(this,"YYYY-MM-DD"):this._ambigZone?ct(this,"YYYY-MM-DD[T]HH:mm:ss"):ie.toISOString.apply(this,arguments)};var se={t:function(t){return ct(t,"a").charAt(0)},T:function(t){return ct(t,"A").charAt(0)}};qt.formatRange=gt;var oe={Y:"year",M:"month",D:"day",d:"day",A:"second",a:"second",T:"second",t:"second",H:"second",h:"second",m:"second",s:"second"},le={},ae={Y:{value:1,unit:"year"},M:{value:2,unit:"month"},W:{value:3,unit:"week"},w:{value:3,unit:"week"},D:{value:4,unit:"day"},d:{value:4,unit:"day"}};qt.queryMostGranularFormatUnit=function(t){
var e,n,i,r,s=mt(t);for(e=0;e<s.length;e++)n=s[e],n.token&&(i=ae[n.token.charAt(0)],i&&(!r||i.value>r.value)&&(r=i));return r?r.unit:null},qt.Class=St,St.extend=function(){var t,e,n=arguments.length;for(t=0;t<n;t++)e=arguments[t],t<n-1&&Et(this,e);return wt(this,e||{})},St.mixin=function(t){Et(this,t)},qt.Promise=bt,bt.immediate=!0,bt.resolve=function(e){if(e&&"function"==typeof e.resolve)return e.promise();if(e&&"function"==typeof e.then)return e;var n=t.Deferred().resolve(e),i=n.promise();if(bt.immediate){var r=i.then;i._value=e,i.then=function(t,n){return"function"==typeof t?bt.resolve(t(e)):r.call(i,t,n)}}return i},bt.reject=function(){return t.Deferred().reject().promise()},bt.all=function(e){var n,i,r,s=!1;if(bt.immediate)for(s=!0,n=[],i=0;i<e.length;i++)if(r=e[i],r&&"function"==typeof r.state&&"resolved"===r.state()&&"_value"in r)n.push(r._value);else{if(r&&"function"==typeof r.then){s=!1;break}n.push(r)}return s?bt.resolve(n):t.when.apply(t.when,e).then(function(){return t.when(t.makeArray(arguments))})},qt.TaskQueue=Dt;var ue=qt.EmitterMixin={on:function(e,n){return t(this).on(e,this._prepareIntercept(n)),this},one:function(e,n){return t(this).one(e,this._prepareIntercept(n)),this},_prepareIntercept:function(e){var n=function(t,n){return e.apply(n.context||this,n.args||[])};return e.guid||(e.guid=t.guid++),n.guid=e.guid,n},off:function(e,n){return t(this).off(e,n),this},trigger:function(e){var n=Array.prototype.slice.call(arguments,1);return t(this).triggerHandler(e,{args:n}),this},triggerWith:function(e,n,i){return t(this).triggerHandler(e,{context:n,args:i}),this}},ce=qt.ListenerMixin=function(){var e=0,n={listenerId:null,listenTo:function(e,n,i){if("object"==typeof n)for(var r in n)n.hasOwnProperty(r)&&this.listenTo(e,r,n[r]);else"string"==typeof n&&e.on(n+"."+this.getListenerNamespace(),t.proxy(i,this))},stopListeningTo:function(t,e){t.off((e||"")+"."+this.getListenerNamespace())},getListenerNamespace:function(){return null==this.listenerId&&(this.listenerId=e++),"_listener"+this.listenerId}};return n}(),de={isIgnoringMouse:!1,delayUnignoreMouse:null,initMouseIgnoring:function(t){this.delayUnignoreMouse=at(lt(this,"unignoreMouse"),t||1e3)},tempIgnoreMouse:function(){this.isIgnoringMouse=!0,this.delayUnignoreMouse()},unignoreMouse:function(){this.isIgnoringMouse=!1}},he=St.extend(ce,{isHidden:!0,options:null,el:null,margin:10,constructor:function(t){this.options=t||{}},show:function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},hide:function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},render:function(){var e=this,n=this.options;this.el=t('<div class="fc-popover"/>').addClass(n.className||"").css({top:0,left:0}).append(n.content).appendTo(n.parentEl),this.el.on("click",".fc-close",function(){e.hide()}),n.autoHide&&this.listenTo(t(document),"mousedown",this.documentMousedown)},documentMousedown:function(e){this.el&&!t(e.target).closest(this.el).length&&this.hide()},removeElement:function(){this.hide(),this.el&&(this.el.remove(),this.el=null),this.stopListeningTo(t(document),"mousedown")},position:function(){var e,n,i,r,s,o=this.options,l=this.el.offsetParent().offset(),a=this.el.outerWidth(),u=this.el.outerHeight(),c=t(window),h=d(this.el);r=o.top||0,s=void 0!==o.left?o.left:void 0!==o.right?o.right-a:0,h.is(window)||h.is(document)?(h=c,e=0,n=0):(i=h.offset(),e=i.top,n=i.left),e+=c.scrollTop(),n+=c.scrollLeft(),o.viewportConstrain!==!1&&(r=Math.min(r,e+h.outerHeight()-u-this.margin),r=Math.max(r,e+this.margin),s=Math.min(s,n+h.outerWidth()-a-this.margin),s=Math.max(s,n+this.margin)),this.el.css({top:r-l.top,left:s-l.left})},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))}}),fe=qt.CoordCache=St.extend({els:null,forcedOffsetParentEl:null,origin:null,boundingRect:null,isHorizontal:!1,isVertical:!1,lefts:null,rights:null,tops:null,bottoms:null,constructor:function(e){this.els=t(e.els),this.isHorizontal=e.isHorizontal,this.isVertical=e.isVertical,this.forcedOffsetParentEl=e.offsetParent?t(e.offsetParent):null},build:function(){var t=this.forcedOffsetParentEl;!t&&this.els.length>0&&(t=this.els.eq(0).offsetParent()),this.origin=t?t.offset():null,this.boundingRect=this.queryBoundingRect(),this.isHorizontal&&this.buildElHorizontals(),this.isVertical&&this.buildElVerticals()},clear:function(){this.origin=null,this.boundingRect=null,this.lefts=null,this.rights=null,this.tops=null,this.bottoms=null},ensureBuilt:function(){this.origin||this.build()},buildElHorizontals:function(){var e=[],n=[];this.els.each(function(i,r){var s=t(r),o=s.offset().left,l=s.outerWidth();e.push(o),n.push(o+l)}),this.lefts=e,this.rights=n},buildElVerticals:function(){var e=[],n=[];this.els.each(function(i,r){var s=t(r),o=s.offset().top,l=s.outerHeight();e.push(o),n.push(o+l)}),this.tops=e,this.bottoms=n},getHorizontalIndex:function(t){this.ensureBuilt();var e,n=this.lefts,i=this.rights,r=n.length;for(e=0;e<r;e++)if(t>=n[e]&&t<i[e])return e},getVerticalIndex:function(t){this.ensureBuilt();var e,n=this.tops,i=this.bottoms,r=n.length;for(e=0;e<r;e++)if(t>=n[e]&&t<i[e])return e},getLeftOffset:function(t){return this.ensureBuilt(),this.lefts[t]},getLeftPosition:function(t){return this.ensureBuilt(),this.lefts[t]-this.origin.left},getRightOffset:function(t){return this.ensureBuilt(),this.rights[t]},getRightPosition:function(t){return this.ensureBuilt(),this.rights[t]-this.origin.left},getWidth:function(t){return this.ensureBuilt(),this.rights[t]-this.lefts[t]},getTopOffset:function(t){return this.ensureBuilt(),this.tops[t]},getTopPosition:function(t){return this.ensureBuilt(),this.tops[t]-this.origin.top},getBottomOffset:function(t){return this.ensureBuilt(),this.bottoms[t]},getBottomPosition:function(t){return this.ensureBuilt(),this.bottoms[t]-this.origin.top},getHeight:function(t){return this.ensureBuilt(),this.bottoms[t]-this.tops[t]},queryBoundingRect:function(){var t;return this.els.length>0&&(t=d(this.els.eq(0)),!t.is(document))?f(t):null},isPointInBounds:function(t,e){return this.isLeftInBounds(t)&&this.isTopInBounds(e)},isLeftInBounds:function(t){return!this.boundingRect||t>=this.boundingRect.left&&t<this.boundingRect.right},isTopInBounds:function(t){return!this.boundingRect||t>=this.boundingRect.top&&t<this.boundingRect.bottom}}),ge=qt.DragListener=St.extend(ce,de,{options:null,subjectEl:null,originX:null,originY:null,scrollEl:null,isInteracting:!1,isDistanceSurpassed:!1,isDelayEnded:!1,isDragging:!1,isTouch:!1,delay:null,delayTimeoutId:null,minDistance:null,handleTouchScrollProxy:null,constructor:function(t){this.options=t||{},this.handleTouchScrollProxy=lt(this,"handleTouchScroll"),this.initMouseIgnoring(500)},startInteraction:function(e,n){var i=b(e);if("mousedown"===e.type){if(this.isIgnoringMouse)return;if(!S(e))return;e.preventDefault()}this.isInteracting||(n=n||{},this.delay=J(n.delay,this.options.delay,0),this.minDistance=J(n.distance,this.options.distance,0),this.subjectEl=this.options.subjectEl,this.isInteracting=!0,this.isTouch=i,this.isDelayEnded=!1,this.isDistanceSurpassed=!1,this.originX=w(e),this.originY=E(e),this.scrollEl=d(t(e.target)),this.bindHandlers(),this.initAutoScroll(),this.handleInteractionStart(e),this.startDelay(e),this.minDistance||this.handleDistanceSurpassed(e))},handleInteractionStart:function(t){this.trigger("interactionStart",t)},endInteraction:function(t,e){this.isInteracting&&(this.endDrag(t),this.delayTimeoutId&&(clearTimeout(this.delayTimeoutId),this.delayTimeoutId=null),this.destroyAutoScroll(),this.unbindHandlers(),this.isInteracting=!1,this.handleInteractionEnd(t,e),this.isTouch&&this.tempIgnoreMouse())},handleInteractionEnd:function(t,e){this.trigger("interactionEnd",t,e||!1)},bindHandlers:function(){var e=this,n=1;this.isTouch?(this.listenTo(t(document),{touchmove:this.handleTouchMove,touchend:this.endInteraction,touchcancel:this.endInteraction,touchstart:function(t){n?n--:e.endInteraction(t,!0)}}),!C(this.handleTouchScrollProxy)&&this.scrollEl&&this.listenTo(this.scrollEl,"scroll",this.handleTouchScroll)):this.listenTo(t(document),{mousemove:this.handleMouseMove,mouseup:this.endInteraction}),this.listenTo(t(document),{selectstart:T,contextmenu:T})},unbindHandlers:function(){this.stopListeningTo(t(document)),H(this.handleTouchScrollProxy),this.scrollEl&&this.stopListeningTo(this.scrollEl,"scroll")},startDrag:function(t,e){this.startInteraction(t,e),this.isDragging||(this.isDragging=!0,this.handleDragStart(t))},handleDragStart:function(t){this.trigger("dragStart",t)},handleMove:function(t){var e,n=w(t)-this.originX,i=E(t)-this.originY,r=this.minDistance;this.isDistanceSurpassed||(e=n*n+i*i,e>=r*r&&this.handleDistanceSurpassed(t)),this.isDragging&&this.handleDrag(n,i,t)},handleDrag:function(t,e,n){this.trigger("drag",t,e,n),this.updateAutoScroll(n)},endDrag:function(t){this.isDragging&&(this.isDragging=!1,this.handleDragEnd(t))},handleDragEnd:function(t){this.trigger("dragEnd",t)},startDelay:function(t){var e=this;this.delay?this.delayTimeoutId=setTimeout(function(){e.handleDelayEnd(t)},this.delay):this.handleDelayEnd(t)},handleDelayEnd:function(t){this.isDelayEnded=!0,this.isDistanceSurpassed&&this.startDrag(t)},handleDistanceSurpassed:function(t){this.isDistanceSurpassed=!0,this.isDelayEnded&&this.startDrag(t)},handleTouchMove:function(t){this.isDragging&&t.preventDefault(),this.handleMove(t)},handleMouseMove:function(t){this.handleMove(t)},handleTouchScroll:function(t){this.isDragging||this.endInteraction(t,!0)},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1)),this["_"+t]&&this["_"+t].apply(this,Array.prototype.slice.call(arguments,1))}});ge.mixin({isAutoScroll:!1,scrollBounds:null,scrollTopVel:null,scrollLeftVel:null,scrollIntervalId:null,scrollSensitivity:30,scrollSpeed:200,scrollIntervalMs:50,initAutoScroll:function(){var t=this.scrollEl;this.isAutoScroll=this.options.scroll&&t&&!t.is(window)&&!t.is(document),this.isAutoScroll&&this.listenTo(t,"scroll",at(this.handleDebouncedScroll,100))},destroyAutoScroll:function(){this.endAutoScroll(),this.isAutoScroll&&this.stopListeningTo(this.scrollEl,"scroll")},computeScrollBounds:function(){this.isAutoScroll&&(this.scrollBounds=h(this.scrollEl))},updateAutoScroll:function(t){var e,n,i,r,s=this.scrollSensitivity,o=this.scrollBounds,l=0,a=0;o&&(e=(s-(E(t)-o.top))/s,n=(s-(o.bottom-E(t)))/s,i=(s-(w(t)-o.left))/s,r=(s-(o.right-w(t)))/s,e>=0&&e<=1?l=e*this.scrollSpeed*-1:n>=0&&n<=1&&(l=n*this.scrollSpeed),i>=0&&i<=1?a=i*this.scrollSpeed*-1:r>=0&&r<=1&&(a=r*this.scrollSpeed)),this.setScrollVel(l,a)},setScrollVel:function(t,e){this.scrollTopVel=t,this.scrollLeftVel=e,this.constrainScrollVel(),!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(lt(this,"scrollIntervalFunc"),this.scrollIntervalMs))},constrainScrollVel:function(){var t=this.scrollEl;this.scrollTopVel<0?t.scrollTop()<=0&&(this.scrollTopVel=0):this.scrollTopVel>0&&t.scrollTop()+t[0].clientHeight>=t[0].scrollHeight&&(this.scrollTopVel=0),this.scrollLeftVel<0?t.scrollLeft()<=0&&(this.scrollLeftVel=0):this.scrollLeftVel>0&&t.scrollLeft()+t[0].clientWidth>=t[0].scrollWidth&&(this.scrollLeftVel=0)},scrollIntervalFunc:function(){var t=this.scrollEl,e=this.scrollIntervalMs/1e3;this.scrollTopVel&&t.scrollTop(t.scrollTop()+this.scrollTopVel*e),this.scrollLeftVel&&t.scrollLeft(t.scrollLeft()+this.scrollLeftVel*e),this.constrainScrollVel(),this.scrollTopVel||this.scrollLeftVel||this.endAutoScroll()},endAutoScroll:function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.handleScrollEnd())},handleDebouncedScroll:function(){this.scrollIntervalId||this.handleScrollEnd()},handleScrollEnd:function(){}});var pe=ge.extend({component:null,origHit:null,hit:null,coordAdjust:null,constructor:function(t,e){ge.call(this,e),this.component=t},handleInteractionStart:function(t){var e,n,i,r=this.subjectEl;this.computeCoords(),t?(n={left:w(t),top:E(t)},i=n,r&&(e=h(r),i=x(i,e)),this.origHit=this.queryHit(i.left,i.top),r&&this.options.subjectCenter&&(this.origHit&&(e=R(this.origHit,e)||e),i=I(e)),this.coordAdjust=k(i,n)):(this.origHit=null,this.coordAdjust=null),ge.prototype.handleInteractionStart.apply(this,arguments)},computeCoords:function(){this.component.prepareHits(),this.computeScrollBounds()},handleDragStart:function(t){var e;ge.prototype.handleDragStart.apply(this,arguments),e=this.queryHit(w(t),E(t)),e&&this.handleHitOver(e)},handleDrag:function(t,e,n){var i;ge.prototype.handleDrag.apply(this,arguments),i=this.queryHit(w(n),E(n)),Tt(i,this.hit)||(this.hit&&this.handleHitOut(),i&&this.handleHitOver(i))},handleDragEnd:function(){this.handleHitDone(),ge.prototype.handleDragEnd.apply(this,arguments)},handleHitOver:function(t){var e=Tt(t,this.origHit);this.hit=t,this.trigger("hitOver",this.hit,e,this.origHit)},handleHitOut:function(){this.hit&&(this.trigger("hitOut",this.hit),this.handleHitDone(),this.hit=null)},handleHitDone:function(){this.hit&&this.trigger("hitDone",this.hit)},handleInteractionEnd:function(){ge.prototype.handleInteractionEnd.apply(this,arguments),this.origHit=null,this.hit=null,this.component.releaseHits()},handleScrollEnd:function(){ge.prototype.handleScrollEnd.apply(this,arguments),this.computeCoords()},queryHit:function(t,e){return this.coordAdjust&&(t+=this.coordAdjust.left,e+=this.coordAdjust.top),this.component.queryHit(t,e)}}),ve=St.extend(ce,{options:null,sourceEl:null,el:null,parentEl:null,top0:null,left0:null,y0:null,x0:null,topDelta:null,leftDelta:null,isFollowing:!1,isHidden:!1,isAnimating:!1,constructor:function(e,n){this.options=n=n||{},this.sourceEl=e,this.parentEl=n.parentEl?t(n.parentEl):e.parent()},start:function(e){this.isFollowing||(this.isFollowing=!0,this.y0=E(e),this.x0=w(e),this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),b(e)?this.listenTo(t(document),"touchmove",this.handleMove):this.listenTo(t(document),"mousemove",this.handleMove))},stop:function(e,n){function i(){r.isAnimating=!1,r.removeElement(),r.top0=r.left0=null,n&&n()}var r=this,s=this.options.revertDuration;this.isFollowing&&!this.isAnimating&&(this.isFollowing=!1,this.stopListeningTo(t(document)),e&&s&&!this.isHidden?(this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:s,complete:i})):i())},getEl:function(){var t=this.el;return t||(t=this.el=this.sourceEl.clone().addClass(this.options.additionalClass||"").css({position:"absolute",visibility:"",display:this.isHidden?"none":"",margin:0,right:"auto",bottom:"auto",width:this.sourceEl.width(),height:this.sourceEl.height(),opacity:this.options.opacity||"",zIndex:this.options.zIndex}),t.addClass("fc-unselectable"),t.appendTo(this.parentEl)),t},removeElement:function(){this.el&&(this.el.remove(),this.el=null)},updatePosition:function(){var t,e;this.getEl(),null===this.top0&&(t=this.sourceEl.offset(),e=this.el.offsetParent().offset(),this.top0=t.top-e.top,this.left0=t.left-e.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},handleMove:function(t){this.topDelta=E(t)-this.y0,this.leftDelta=w(t)-this.x0,this.isHidden||this.updatePosition()},hide:function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},show:function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())}}),me=qt.Grid=St.extend(ce,de,{hasDayInteractions:!0,view:null,isRTL:null,start:null,end:null,el:null,elsByFill:null,eventTimeFormat:null,displayEventTime:null,displayEventEnd:null,minResizeDuration:null,largeUnit:null,dayDragListener:null,segDragListener:null,segResizeListener:null,externalDragListener:null,constructor:function(t){this.view=t,this.isRTL=t.opt("isRTL"),this.elsByFill={},this.dayDragListener=this.buildDayDragListener(),this.initMouseIgnoring()},computeEventTimeFormat:function(){return this.view.opt("smallTimeFormat")},computeDisplayEventTime:function(){return!0},computeDisplayEventEnd:function(){return!0},setRange:function(t){this.start=t.start.clone(),this.end=t.end.clone(),this.rangeUpdated(),this.processRangeOptions()},rangeUpdated:function(){},processRangeOptions:function(){var t,e,n=this.view;this.eventTimeFormat=n.opt("eventTimeFormat")||n.opt("timeFormat")||this.computeEventTimeFormat(),t=n.opt("displayEventTime"),null==t&&(t=this.computeDisplayEventTime()),e=n.opt("displayEventEnd"),null==e&&(e=this.computeDisplayEventEnd()),this.displayEventTime=t,this.displayEventEnd=e},spanToSegs:function(t){},diffDates:function(t,e){return this.largeUnit?O(t,e,this.largeUnit):N(t,e)},prepareHits:function(){},releaseHits:function(){},queryHit:function(t,e){},getHitSpan:function(t){},getHitEl:function(t){},setElement:function(t){this.el=t,this.hasDayInteractions&&(D(t),this.bindDayHandler("touchstart",this.dayTouchStart),this.bindDayHandler("mousedown",this.dayMousedown)),this.bindSegHandlers(),this.bindGlobalHandlers()},bindDayHandler:function(e,n){var i=this;this.el.on(e,function(e){if(!t(e.target).is(i.segSelector+","+i.segSelector+" *,.fc-more,a[data-goto]"))return n.call(i,e)})},removeElement:function(){this.unbindGlobalHandlers(),this.clearDragListeners(),this.el.remove()},renderSkeleton:function(){},renderDates:function(){},unrenderDates:function(){},bindGlobalHandlers:function(){this.listenTo(t(document),{dragstart:this.externalDragStart,sortstart:this.externalDragStart})},unbindGlobalHandlers:function(){this.stopListeningTo(t(document))},dayMousedown:function(t){this.isIgnoringMouse||this.dayDragListener.startInteraction(t,{})},dayTouchStart:function(t){var e=this.view,n=e.opt("selectLongPressDelay");(e.isSelected||e.selectedEvent)&&this.tempIgnoreMouse(),null==n&&(n=e.opt("longPressDelay")),this.dayDragListener.startInteraction(t,{delay:n})},buildDayDragListener:function(){var t,e,n=this,i=this.view,r=i.opt("selectable"),l=new pe(this,{scroll:i.opt("dragScroll"),interactionStart:function(){t=l.origHit,e=null},dragStart:function(){i.unselect()},hitOver:function(i,o,l){l&&(o||(t=null),r&&(e=n.computeSelection(n.getHitSpan(l),n.getHitSpan(i)),e?n.renderSelection(e):e===!1&&s()))},hitOut:function(){t=null,e=null,n.unrenderSelection()},hitDone:function(){o()},interactionEnd:function(r,s){s||(t&&!n.isIgnoringMouse&&i.triggerDayClick(n.getHitSpan(t),n.getHitEl(t),r),e&&i.reportSelection(e,r))}});return l},clearDragListeners:function(){this.dayDragListener.endInteraction(),this.segDragListener&&this.segDragListener.endInteraction(),this.segResizeListener&&this.segResizeListener.endInteraction(),this.externalDragListener&&this.externalDragListener.endInteraction()},renderEventLocationHelper:function(t,e){var n=this.fabricateHelperEvent(t,e);return this.renderHelper(n,e)},fabricateHelperEvent:function(t,e){var n=e?Z(e.event):{};return n.start=t.start.clone(),n.end=t.end?t.end.clone():null,n.allDay=null,this.view.calendar.normalizeEventDates(n),n.className=(n.className||[]).concat("fc-helper"),e||(n.editable=!1),n},renderHelper:function(t,e){},unrenderHelper:function(){},renderSelection:function(t){this.renderHighlight(t)},unrenderSelection:function(){this.unrenderHighlight()},computeSelection:function(t,e){var n=this.computeSelectionSpan(t,e);return!(n&&!this.view.calendar.isSelectionSpanAllowed(n))&&n},computeSelectionSpan:function(t,e){var n=[t.start,t.end,e.start,e.end];return n.sort(st),{start:n[0].clone(),end:n[3].clone()}},renderHighlight:function(t){this.renderFill("highlight",this.spanToSegs(t))},unrenderHighlight:function(){this.unrenderFill("highlight")},highlightSegClasses:function(){return["fc-highlight"]},renderBusinessHours:function(){},unrenderBusinessHours:function(){},getNowIndicatorUnit:function(){},renderNowIndicator:function(t){},unrenderNowIndicator:function(){},renderFill:function(t,e){},unrenderFill:function(t){var e=this.elsByFill[t];e&&(e.remove(),delete this.elsByFill[t])},renderFillSegEls:function(e,n){var i,r=this,s=this[e+"SegEl"],o="",l=[];if(n.length){for(i=0;i<n.length;i++)o+=this.fillSegHtml(e,n[i]);t(o).each(function(e,i){var o=n[e],a=t(i);s&&(a=s.call(r,o,a)),a&&(a=t(a),a.is(r.fillSegTag)&&(o.el=a,l.push(o)))})}return l},fillSegTag:"div",fillSegHtml:function(t,e){var n=this[t+"SegClasses"],i=this[t+"SegCss"],r=n?n.call(this,e):[],s=nt(i?i.call(this,e):{});return"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(s?' style="'+s+'"':"")+" />"},getDayClasses:function(t,e){var n=this.view,i=n.calendar.getNow(),r=["fc-"+Xt[t.day()]];return 1==n.intervalDuration.as("months")&&t.month()!=n.intervalStart.month()&&r.push("fc-other-month"),t.isSame(i,"day")?(r.push("fc-today"),e!==!0&&r.push(n.highlightStateClass)):t<i?r.push("fc-past"):r.push("fc-future"),r}});me.mixin({segSelector:".fc-event-container > *",mousedOverSeg:null,isDraggingSeg:!1,isResizingSeg:!1,isDraggingExternal:!1,segs:null,renderEvents:function(t){var e,n=[],i=[];for(e=0;e<t.length;e++)(Rt(t[e])?n:i).push(t[e]);this.segs=[].concat(this.renderBgEvents(n),this.renderFgEvents(i))},renderBgEvents:function(t){var e=this.eventsToSegs(t);return this.renderBgSegs(e)||e},renderFgEvents:function(t){var e=this.eventsToSegs(t);return this.renderFgSegs(e)||e},unrenderEvents:function(){this.handleSegMouseout(),this.clearDragListeners(),this.unrenderFgSegs(),this.unrenderBgSegs(),this.segs=null},getEventSegs:function(){return this.segs||[]},renderFgSegs:function(t){},unrenderFgSegs:function(){},renderFgSegEls:function(e,n){var i,r=this.view,s="",o=[];if(e.length){for(i=0;i<e.length;i++)s+=this.fgSegHtml(e[i],n);t(s).each(function(n,i){var s=e[n],l=r.resolveEventEl(s.event,t(i));l&&(l.data("fc-seg",s),s.el=l,o.push(s))})}return o},fgSegHtml:function(t,e){},renderBgSegs:function(t){return this.renderFill("bgEvent",t)},unrenderBgSegs:function(){this.unrenderFill("bgEvent")},bgEventSegEl:function(t,e){return this.view.resolveEventEl(t.event,e)},bgEventSegClasses:function(t){var e=t.event,n=e.source||{};return["fc-bgevent"].concat(e.className,n.className||[])},bgEventSegCss:function(t){return{"background-color":this.getSegSkinCss(t)["background-color"]}},businessHoursSegClasses:function(t){return["fc-nonbusiness","fc-bgevent"]},buildBusinessHourSegs:function(t,e){return this.eventsToSegs(this.buildBusinessHourEvents(t,e))},buildBusinessHourEvents:function(e,n){var i,r=this.view.calendar;return null==n&&(n=r.options.businessHours),i=r.computeBusinessHourEvents(e,n),!i.length&&n&&(i=[t.extend({},ke,{start:this.view.end,end:this.view.end,dow:null})]),i},bindSegHandlers:function(){this.bindSegHandlersToEl(this.el)},bindSegHandlersToEl:function(t){this.bindSegHandlerToEl(t,"touchstart",this.handleSegTouchStart),this.bindSegHandlerToEl(t,"touchend",this.handleSegTouchEnd),this.bindSegHandlerToEl(t,"mouseenter",this.handleSegMouseover),this.bindSegHandlerToEl(t,"mouseleave",this.handleSegMouseout),this.bindSegHandlerToEl(t,"mousedown",this.handleSegMousedown),this.bindSegHandlerToEl(t,"click",this.handleSegClick)},bindSegHandlerToEl:function(e,n,i){var r=this;e.on(n,this.segSelector,function(e){var n=t(this).data("fc-seg");if(n&&!r.isDraggingSeg&&!r.isResizingSeg)return i.call(r,n,e)})},handleSegClick:function(t,e){var n=this.view.publiclyTrigger("eventClick",t.el[0],t.event,e);n===!1&&e.preventDefault()},handleSegMouseover:function(t,e){this.isIgnoringMouse||this.mousedOverSeg||(this.mousedOverSeg=t,this.view.isEventResizable(t.event)&&t.el.addClass("fc-allow-mouse-resize"),this.view.publiclyTrigger("eventMouseover",t.el[0],t.event,e))},handleSegMouseout:function(t,e){e=e||{},this.mousedOverSeg&&(t=t||this.mousedOverSeg,this.mousedOverSeg=null,this.view.isEventResizable(t.event)&&t.el.removeClass("fc-allow-mouse-resize"),this.view.publiclyTrigger("eventMouseout",t.el[0],t.event,e))},handleSegMousedown:function(t,e){var n=this.startSegResize(t,e,{distance:5});!n&&this.view.isEventDraggable(t.event)&&this.buildSegDragListener(t).startInteraction(e,{distance:5})},handleSegTouchStart:function(t,e){var n,i,r=this.view,s=t.event,o=r.isEventSelected(s),l=r.isEventDraggable(s),a=r.isEventResizable(s),u=!1;o&&a&&(u=this.startSegResize(t,e)),u||!l&&!a||(i=r.opt("eventLongPressDelay"),null==i&&(i=r.opt("longPressDelay")),n=l?this.buildSegDragListener(t):this.buildSegSelectListener(t),n.startInteraction(e,{delay:o?0:i})),this.tempIgnoreMouse()},handleSegTouchEnd:function(t,e){this.tempIgnoreMouse()},startSegResize:function(e,n,i){return!!t(n.target).is(".fc-resizer")&&(this.buildSegResizeListener(e,t(n.target).is(".fc-start-resizer")).startInteraction(n,i),!0)},buildSegDragListener:function(t){var e,n,i,r=this,l=this.view,a=l.calendar,u=t.el,c=t.event;if(this.segDragListener)return this.segDragListener;var d=this.segDragListener=new pe(l,{scroll:l.opt("dragScroll"),subjectEl:u,subjectCenter:!0,interactionStart:function(i){t.component=r,e=!1,n=new ve(t.el,{additionalClass:"fc-dragging",parentEl:l.el,opacity:d.isTouch?null:l.opt("dragOpacity"),revertDuration:l.opt("dragRevertDuration"),zIndex:2}),n.hide(),n.start(i)},dragStart:function(n){d.isTouch&&!l.isEventSelected(c)&&l.selectEvent(c),e=!0,r.handleSegMouseout(t,n),r.segDragStart(t,n),l.hideEvent(c)},hitOver:function(e,o,u){var h;t.hit&&(u=t.hit),i=r.computeEventDrop(u.component.getHitSpan(u),e.component.getHitSpan(e),c),i&&!a.isEventSpanAllowed(r.eventToSpan(i),c)&&(s(),i=null),i&&(h=l.renderDrag(i,t))?(h.addClass("fc-dragging"),d.isTouch||r.applyDragOpacity(h),n.hide()):n.show(),o&&(i=null)},hitOut:function(){l.unrenderDrag(),n.show(),i=null},hitDone:function(){o()},interactionEnd:function(s){delete t.component,n.stop(!i,function(){e&&(l.unrenderDrag(),r.segDragStop(t,s)),i?l.reportEventDrop(c,i,r.largeUnit,u,s):l.showEvent(c)}),r.segDragListener=null}});return d},buildSegSelectListener:function(t){var e=this,n=this.view,i=t.event;if(this.segDragListener)return this.segDragListener;var r=this.segDragListener=new ge({dragStart:function(t){r.isTouch&&!n.isEventSelected(i)&&n.selectEvent(i)},interactionEnd:function(t){e.segDragListener=null}});return r},segDragStart:function(t,e){this.isDraggingSeg=!0,this.view.publiclyTrigger("eventDragStart",t.el[0],t.event,e,{})},segDragStop:function(t,e){this.isDraggingSeg=!1,this.view.publiclyTrigger("eventDragStop",t.el[0],t.event,e,{})},computeEventDrop:function(t,e,n){var i,r,s=this.view.calendar,o=t.start,l=e.start;return o.hasTime()===l.hasTime()?(i=this.diffDates(l,o),n.allDay&&W(i)?(r={start:n.start.clone(),end:s.getEventEnd(n),allDay:!1},s.normalizeEventTimes(r)):r=Ht(n),r.start.add(i),r.end&&r.end.add(i)):r={start:l.clone(),end:null,allDay:!l.hasTime()},r},applyDragOpacity:function(t){var e=this.view.opt("dragOpacity");null!=e&&t.css("opacity",e)},externalDragStart:function(e,n){var i,r,s=this.view;s.opt("droppable")&&(i=t((n?n.item:null)||e.target),r=s.opt("dropAccept"),(t.isFunction(r)?r.call(i[0],i):i.is(r))&&(this.isDraggingExternal||this.listenToExternalDrag(i,e,n)))},listenToExternalDrag:function(t,e,n){var i,r=this,l=this.view.calendar,a=Mt(t),u=r.externalDragListener=new pe(this,{interactionStart:function(){r.isDraggingExternal=!0},hitOver:function(t){i=r.computeExternalDrop(t.component.getHitSpan(t),a),i&&!l.isExternalSpanAllowed(r.eventToSpan(i),i,a.eventProps)&&(s(),i=null),i&&r.renderDrag(i)},hitOut:function(){i=null},hitDone:function(){o(),r.unrenderDrag()},interactionEnd:function(e){i&&r.view.reportExternalDrop(a,i,t,e,n),r.isDraggingExternal=!1,r.externalDragListener=null}});u.startDrag(e)},computeExternalDrop:function(t,e){var n=this.view.calendar,i={start:n.applyTimezone(t.start),end:null};return e.startTime&&!i.start.hasTime()&&i.start.time(e.startTime),e.duration&&(i.end=i.start.clone().add(e.duration)),i},renderDrag:function(t,e){},unrenderDrag:function(){},buildSegResizeListener:function(t,e){var n,i,r=this,l=this.view,a=l.calendar,u=t.el,c=t.event,d=a.getEventEnd(c),h=this.segResizeListener=new pe(this,{scroll:l.opt("dragScroll"),subjectEl:u,interactionStart:function(){n=!1},dragStart:function(e){n=!0,r.handleSegMouseout(t,e),r.segResizeStart(t,e)},hitOver:function(n,o,u){var h=r.getHitSpan(u),f=r.getHitSpan(n);i=e?r.computeEventStartResize(h,f,c):r.computeEventEndResize(h,f,c),i&&(a.isEventSpanAllowed(r.eventToSpan(i),c)?i.start.isSame(c.start.clone().stripZone())&&i.end.isSame(d.clone().stripZone())&&(i=null):(s(),i=null)),i&&(l.hideEvent(c),r.renderEventResize(i,t))},hitOut:function(){i=null,l.showEvent(c)},hitDone:function(){r.unrenderEventResize(),o()},interactionEnd:function(e){n&&r.segResizeStop(t,e),i?l.reportEventResize(c,i,r.largeUnit,u,e):l.showEvent(c),r.segResizeListener=null}});return h},segResizeStart:function(t,e){this.isResizingSeg=!0,this.view.publiclyTrigger("eventResizeStart",t.el[0],t.event,e,{})},segResizeStop:function(t,e){this.isResizingSeg=!1,this.view.publiclyTrigger("eventResizeStop",t.el[0],t.event,e,{})},computeEventStartResize:function(t,e,n){return this.computeEventResize("start",t,e,n)},computeEventEndResize:function(t,e,n){return this.computeEventResize("end",t,e,n)},computeEventResize:function(t,e,n,i){var r,s,o=this.view.calendar,l=this.diffDates(n[t],e[t]);return r={start:i.start.clone(),end:o.getEventEnd(i),allDay:i.allDay},r.allDay&&W(l)&&(r.allDay=!1,o.normalizeEventTimes(r)),r[t].add(l),r.start.isBefore(r.end)||(s=this.minResizeDuration||(i.allDay?o.defaultAllDayEventDuration:o.defaultTimedEventDuration),"start"==t?r.start=r.end.clone().subtract(s):r.end=r.start.clone().add(s)),r},renderEventResize:function(t,e){},unrenderEventResize:function(){},getEventTimeText:function(t,e,n){return null==e&&(e=this.eventTimeFormat),null==n&&(n=this.displayEventEnd),this.displayEventTime&&t.start.hasTime()?n&&t.end?this.view.formatRange(t,e):t.start.format(e):""},getSegClasses:function(t,e,n){var i=this.view,r=["fc-event",t.isStart?"fc-start":"fc-not-start",t.isEnd?"fc-end":"fc-not-end"].concat(this.getSegCustomClasses(t));return e&&r.push("fc-draggable"),n&&r.push("fc-resizable"),i.isEventSelected(t.event)&&r.push("fc-selected"),r},getSegCustomClasses:function(t){var e=t.event;return[].concat(e.className,e.source?e.source.className:[])},getSegSkinCss:function(t){return{"background-color":this.getSegBackgroundColor(t),"border-color":this.getSegBorderColor(t),color:this.getSegTextColor(t)}},getSegBackgroundColor:function(t){return t.event.backgroundColor||t.event.color||this.getSegDefaultBackgroundColor(t)},getSegDefaultBackgroundColor:function(t){var e=t.event.source||{};return e.backgroundColor||e.color||this.view.opt("eventBackgroundColor")||this.view.opt("eventColor")},getSegBorderColor:function(t){return t.event.borderColor||t.event.color||this.getSegDefaultBorderColor(t)},getSegDefaultBorderColor:function(t){var e=t.event.source||{};return e.borderColor||e.color||this.view.opt("eventBorderColor")||this.view.opt("eventColor")},getSegTextColor:function(t){return t.event.textColor||this.getSegDefaultTextColor(t)},getSegDefaultTextColor:function(t){var e=t.event.source||{};return e.textColor||this.view.opt("eventTextColor")},eventToSegs:function(t){return this.eventsToSegs([t])},eventToSpan:function(t){return this.eventToSpans(t)[0]},eventToSpans:function(t){var e=this.eventToRange(t);return this.eventRangeToSpans(e,t)},eventsToSegs:function(e,n){var i=this,r=kt(e),s=[];return t.each(r,function(t,e){var r,o=[];for(r=0;r<e.length;r++)o.push(i.eventToRange(e[r]));if(xt(e[0]))for(o=i.invertRanges(o),r=0;r<o.length;r++)s.push.apply(s,i.eventRangeToSegs(o[r],e[0],n));else for(r=0;r<o.length;r++)s.push.apply(s,i.eventRangeToSegs(o[r],e[r],n))}),s},eventToRange:function(t){var e=this.view.calendar,n=t.start.clone().stripZone(),i=(t.end?t.end.clone():e.getDefaultEventEnd(null!=t.allDay?t.allDay:!t.start.hasTime(),t.start)).stripZone();return e.localizeMoment(n),e.localizeMoment(i),{start:n,end:i}},eventRangeToSegs:function(t,e,n){var i,r=this.eventRangeToSpans(t,e),s=[];for(i=0;i<r.length;i++)s.push.apply(s,this.eventSpanToSegs(r[i],e,n));return s},eventRangeToSpans:function(e,n){return[t.extend({},e)]},eventSpanToSegs:function(t,e,n){var i,r,s=n?n(t):this.spanToSegs(t);
for(i=0;i<s.length;i++)r=s[i],r.event=e,r.eventStartMS=+t.start,r.eventDurationMS=t.end-t.start;return s},invertRanges:function(t){var e,n,i=this.view,r=i.start.clone(),s=i.end.clone(),o=[],l=r;for(t.sort(Lt),e=0;e<t.length;e++)n=t[e],n.start>l&&o.push({start:l,end:n.start}),l=n.end;return l<s&&o.push({start:l,end:s}),o},sortEventSegs:function(t){t.sort(lt(this,"compareEventSegs"))},compareEventSegs:function(t,e){return t.eventStartMS-e.eventStartMS||e.eventDurationMS-t.eventDurationMS||e.event.allDay-t.event.allDay||M(t.event,e.event,this.view.eventOrderSpecs)}}),qt.pluckEventDateProps=Ht,qt.isBgEvent=Rt,qt.dataAttrPrefix="";var ye=qt.DayTableMixin={breakOnWeeks:!1,dayDates:null,dayIndices:null,daysPerRow:null,rowCnt:null,colCnt:null,colHeadFormat:null,updateDayTable:function(){for(var t,e,n,i=this.view,r=this.start.clone(),s=-1,o=[],l=[];r.isBefore(this.end);)i.isHiddenDay(r)?o.push(s+.5):(s++,o.push(s),l.push(r.clone())),r.add(1,"days");if(this.breakOnWeeks){for(e=l[0].day(),t=1;t<l.length&&l[t].day()!=e;t++);n=Math.ceil(l.length/t)}else n=1,t=l.length;this.dayDates=l,this.dayIndices=o,this.daysPerRow=t,this.rowCnt=n,this.updateDayTableCols()},updateDayTableCols:function(){this.colCnt=this.computeColCnt(),this.colHeadFormat=this.view.opt("columnFormat")||this.computeColHeadFormat()},computeColCnt:function(){return this.daysPerRow},getCellDate:function(t,e){return this.dayDates[this.getCellDayIndex(t,e)].clone()},getCellRange:function(t,e){var n=this.getCellDate(t,e),i=n.clone().add(1,"days");return{start:n,end:i}},getCellDayIndex:function(t,e){return t*this.daysPerRow+this.getColDayIndex(e)},getColDayIndex:function(t){return this.isRTL?this.colCnt-1-t:t},getDateDayIndex:function(t){var e=this.dayIndices,n=t.diff(this.start,"days");return n<0?e[0]-1:n>=e.length?e[e.length-1]+1:e[n]},computeColHeadFormat:function(){return this.rowCnt>1||this.colCnt>10?"ddd":this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},sliceRangeByRow:function(t){var e,n,i,r,s,o=this.daysPerRow,l=this.view.computeDayRange(t),a=this.getDateDayIndex(l.start),u=this.getDateDayIndex(l.end.clone().subtract(1,"days")),c=[];for(e=0;e<this.rowCnt;e++)n=e*o,i=n+o-1,r=Math.max(a,n),s=Math.min(u,i),r=Math.ceil(r),s=Math.floor(s),r<=s&&c.push({row:e,firstRowDayIndex:r-n,lastRowDayIndex:s-n,isStart:r===a,isEnd:s===u});return c},sliceRangeByDay:function(t){var e,n,i,r,s,o,l=this.daysPerRow,a=this.view.computeDayRange(t),u=this.getDateDayIndex(a.start),c=this.getDateDayIndex(a.end.clone().subtract(1,"days")),d=[];for(e=0;e<this.rowCnt;e++)for(n=e*l,i=n+l-1,r=n;r<=i;r++)s=Math.max(u,r),o=Math.min(c,r),s=Math.ceil(s),o=Math.floor(o),s<=o&&d.push({row:e,firstRowDayIndex:s-n,lastRowDayIndex:o-n,isStart:s===u,isEnd:o===c});return d},renderHeadHtml:function(){var t=this.view;return'<div class="fc-row '+t.widgetHeaderClass+'"><table><thead>'+this.renderHeadTrHtml()+"</thead></table></div>"},renderHeadIntroHtml:function(){return this.renderIntroHtml()},renderHeadTrHtml:function(){return"<tr>"+(this.isRTL?"":this.renderHeadIntroHtml())+this.renderHeadDateCellsHtml()+(this.isRTL?this.renderHeadIntroHtml():"")+"</tr>"},renderHeadDateCellsHtml:function(){var t,e,n=[];for(t=0;t<this.colCnt;t++)e=this.getCellDate(0,t),n.push(this.renderHeadDateCellHtml(e));return n.join("")},renderHeadDateCellHtml:function(t,e,n){var i=this.view,r=["fc-day-header",i.widgetHeaderClass];return 1===this.rowCnt?r=r.concat(this.getDayClasses(t,!0)):r.push("fc-"+Xt[t.day()]),'<th class="'+r.join(" ")+'"'+(1===this.rowCnt?' data-date="'+t.format("YYYY-MM-DD")+'"':"")+(e>1?' colspan="'+e+'"':"")+(n?" "+n:"")+">"+i.buildGotoAnchorHtml({date:t,forceOff:this.rowCnt>1||1===this.colCnt},tt(t.format(this.colHeadFormat)))+"</th>"},renderBgTrHtml:function(t){return"<tr>"+(this.isRTL?"":this.renderBgIntroHtml(t))+this.renderBgCellsHtml(t)+(this.isRTL?this.renderBgIntroHtml(t):"")+"</tr>"},renderBgIntroHtml:function(t){return this.renderIntroHtml()},renderBgCellsHtml:function(t){var e,n,i=[];for(e=0;e<this.colCnt;e++)n=this.getCellDate(t,e),i.push(this.renderBgCellHtml(n));return i.join("")},renderBgCellHtml:function(t,e){var n=this.view,i=this.getDayClasses(t);return i.unshift("fc-day",n.widgetContentClass),'<td class="'+i.join(" ")+'" data-date="'+t.format("YYYY-MM-DD")+'"'+(e?" "+e:"")+"></td>"},renderIntroHtml:function(){},bookendCells:function(t){var e=this.renderIntroHtml();e&&(this.isRTL?t.append(e):t.prepend(e))}},Se=qt.DayGrid=me.extend(ye,{numbersVisible:!1,bottomCoordPadding:0,rowEls:null,cellEls:null,helperEls:null,rowCoordCache:null,colCoordCache:null,renderDates:function(t){var e,n,i=this.view,r=this.rowCnt,s=this.colCnt,o="";for(e=0;e<r;e++)o+=this.renderDayRowHtml(e,t);for(this.el.html(o),this.rowEls=this.el.find(".fc-row"),this.cellEls=this.el.find(".fc-day"),this.rowCoordCache=new fe({els:this.rowEls,isVertical:!0}),this.colCoordCache=new fe({els:this.cellEls.slice(0,this.colCnt),isHorizontal:!0}),e=0;e<r;e++)for(n=0;n<s;n++)i.publiclyTrigger("dayRender",null,this.getCellDate(e,n),this.getCellEl(e,n))},unrenderDates:function(){this.removeSegPopover()},renderBusinessHours:function(){var t=this.buildBusinessHourSegs(!0);this.renderFill("businessHours",t,"bgevent")},unrenderBusinessHours:function(){this.unrenderFill("businessHours")},renderDayRowHtml:function(t,e){var n=this.view,i=["fc-row","fc-week",n.widgetContentClass];return e&&i.push("fc-rigid"),'<div class="'+i.join(" ")+'"><div class="fc-bg"><table>'+this.renderBgTrHtml(t)+'</table></div><div class="fc-content-skeleton"><table>'+(this.numbersVisible?"<thead>"+this.renderNumberTrHtml(t)+"</thead>":"")+"</table></div></div>"},renderNumberTrHtml:function(t){return"<tr>"+(this.isRTL?"":this.renderNumberIntroHtml(t))+this.renderNumberCellsHtml(t)+(this.isRTL?this.renderNumberIntroHtml(t):"")+"</tr>"},renderNumberIntroHtml:function(t){return this.renderIntroHtml()},renderNumberCellsHtml:function(t){var e,n,i=[];for(e=0;e<this.colCnt;e++)n=this.getCellDate(t,e),i.push(this.renderNumberCellHtml(n));return i.join("")},renderNumberCellHtml:function(t){var e,n,i="";return this.view.dayNumbersVisible||this.view.cellWeekNumbersVisible?(e=this.getDayClasses(t),e.unshift("fc-day-top"),this.view.cellWeekNumbersVisible&&(n="ISO"===t._locale._fullCalendar_weekCalc?1:t._locale.firstDayOfWeek()),i+='<td class="'+e.join(" ")+'" data-date="'+t.format()+'">',this.view.cellWeekNumbersVisible&&t.day()==n&&(i+=this.view.buildGotoAnchorHtml({date:t,type:"week"},{class:"fc-week-number"},t.format("w"))),this.view.dayNumbersVisible&&(i+=this.view.buildGotoAnchorHtml(t,{class:"fc-day-number"},t.date())),i+="</td>"):"<td/>"},computeEventTimeFormat:function(){return this.view.opt("extraSmallTimeFormat")},computeDisplayEventEnd:function(){return 1==this.colCnt},rangeUpdated:function(){this.updateDayTable()},spanToSegs:function(t){var e,n,i=this.sliceRangeByRow(t);for(e=0;e<i.length;e++)n=i[e],this.isRTL?(n.leftCol=this.daysPerRow-1-n.lastRowDayIndex,n.rightCol=this.daysPerRow-1-n.firstRowDayIndex):(n.leftCol=n.firstRowDayIndex,n.rightCol=n.lastRowDayIndex);return i},prepareHits:function(){this.colCoordCache.build(),this.rowCoordCache.build(),this.rowCoordCache.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},releaseHits:function(){this.colCoordCache.clear(),this.rowCoordCache.clear()},queryHit:function(t,e){if(this.colCoordCache.isLeftInBounds(t)&&this.rowCoordCache.isTopInBounds(e)){var n=this.colCoordCache.getHorizontalIndex(t),i=this.rowCoordCache.getVerticalIndex(e);if(null!=i&&null!=n)return this.getCellHit(i,n)}},getHitSpan:function(t){return this.getCellRange(t.row,t.col)},getHitEl:function(t){return this.getCellEl(t.row,t.col)},getCellHit:function(t,e){return{row:t,col:e,component:this,left:this.colCoordCache.getLeftOffset(e),right:this.colCoordCache.getRightOffset(e),top:this.rowCoordCache.getTopOffset(t),bottom:this.rowCoordCache.getBottomOffset(t)}},getCellEl:function(t,e){return this.cellEls.eq(t*this.colCnt+e)},renderDrag:function(t,e){if(this.renderHighlight(this.eventToSpan(t)),e&&e.component!==this)return this.renderEventLocationHelper(t,e)},unrenderDrag:function(){this.unrenderHighlight(),this.unrenderHelper()},renderEventResize:function(t,e){return this.renderHighlight(this.eventToSpan(t)),this.renderEventLocationHelper(t,e)},unrenderEventResize:function(){this.unrenderHighlight(),this.unrenderHelper()},renderHelper:function(e,n){var i,r=[],s=this.eventToSegs(e);return s=this.renderFgSegEls(s),i=this.renderSegRows(s),this.rowEls.each(function(e,s){var o,l=t(s),a=t('<div class="fc-helper-skeleton"><table/></div>');o=n&&n.row===e?n.el.position().top:l.find(".fc-content-skeleton tbody").position().top,a.css("top",o).find("table").append(i[e].tbodyEl),l.append(a),r.push(a[0])}),this.helperEls=t(r)},unrenderHelper:function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},fillSegTag:"td",renderFill:function(e,n,i){var r,s,o,l=[];for(n=this.renderFillSegEls(e,n),r=0;r<n.length;r++)s=n[r],o=this.renderFillRow(e,s,i),this.rowEls.eq(s.row).append(o),l.push(o[0]);return this.elsByFill[e]=t(l),n},renderFillRow:function(e,n,i){var r,s,o=this.colCnt,l=n.leftCol,a=n.rightCol+1;return i=i||e.toLowerCase(),r=t('<div class="fc-'+i+'-skeleton"><table><tr/></table></div>'),s=r.find("tr"),l>0&&s.append('<td colspan="'+l+'"/>'),s.append(n.el.attr("colspan",a-l)),a<o&&s.append('<td colspan="'+(o-a)+'"/>'),this.bookendCells(s),r}});Se.mixin({rowStructs:null,unrenderEvents:function(){this.removeSegPopover(),me.prototype.unrenderEvents.apply(this,arguments)},getEventSegs:function(){return me.prototype.getEventSegs.call(this).concat(this.popoverSegs||[])},renderBgSegs:function(e){var n=t.grep(e,function(t){return t.event.allDay});return me.prototype.renderBgSegs.call(this,n)},renderFgSegs:function(e){var n;return e=this.renderFgSegEls(e),n=this.rowStructs=this.renderSegRows(e),this.rowEls.each(function(e,i){t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)}),e},unrenderFgSegs:function(){for(var t,e=this.rowStructs||[];t=e.pop();)t.tbodyEl.remove();this.rowStructs=null},renderSegRows:function(t){var e,n,i=[];for(e=this.groupSegRows(t),n=0;n<e.length;n++)i.push(this.renderSegRow(n,e[n]));return i},fgSegHtml:function(t,e){var n,i,r=this.view,s=t.event,o=r.isEventDraggable(s),l=!e&&s.allDay&&t.isStart&&r.isEventResizableFromStart(s),a=!e&&s.allDay&&t.isEnd&&r.isEventResizableFromEnd(s),u=this.getSegClasses(t,o,l||a),c=nt(this.getSegSkinCss(t)),d="";return u.unshift("fc-day-grid-event","fc-h-event"),t.isStart&&(n=this.getEventTimeText(s),n&&(d='<span class="fc-time">'+tt(n)+"</span>")),i='<span class="fc-title">'+(tt(s.title||"")||"&nbsp;")+"</span>",'<a class="'+u.join(" ")+'"'+(s.url?' href="'+tt(s.url)+'"':"")+(c?' style="'+c+'"':"")+'><div class="fc-content">'+(this.isRTL?i+" "+d:d+" "+i)+"</div>"+(l?'<div class="fc-resizer fc-start-resizer" />':"")+(a?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},renderSegRow:function(e,n){function i(e){for(;o<e;)c=(m[r-1]||[])[o],c?c.attr("rowspan",parseInt(c.attr("rowspan")||1,10)+1):(c=t("<td/>"),l.append(c)),v[r][o]=c,m[r][o]=c,o++}var r,s,o,l,a,u,c,d=this.colCnt,h=this.buildSegLevels(n),f=Math.max(1,h.length),g=t("<tbody/>"),p=[],v=[],m=[];for(r=0;r<f;r++){if(s=h[r],o=0,l=t("<tr/>"),p.push([]),v.push([]),m.push([]),s)for(a=0;a<s.length;a++){for(u=s[a],i(u.leftCol),c=t('<td class="fc-event-container"/>').append(u.el),u.leftCol!=u.rightCol?c.attr("colspan",u.rightCol-u.leftCol+1):m[r][o]=c;o<=u.rightCol;)v[r][o]=c,p[r][o]=u,o++;l.append(c)}i(d),this.bookendCells(l),g.append(l)}return{row:e,tbodyEl:g,cellMatrix:v,segMatrix:p,segLevels:h,segs:n}},buildSegLevels:function(t){var e,n,i,r=[];for(this.sortEventSegs(t),e=0;e<t.length;e++){for(n=t[e],i=0;i<r.length&&Bt(n,r[i]);i++);n.level=i,(r[i]||(r[i]=[])).push(n)}for(i=0;i<r.length;i++)r[i].sort(zt);return r},groupSegRows:function(t){var e,n=[];for(e=0;e<this.rowCnt;e++)n.push([]);for(e=0;e<t.length;e++)n[t[e].row].push(t[e]);return n}}),Se.mixin({segPopover:null,popoverSegs:null,removeSegPopover:function(){this.segPopover&&this.segPopover.hide()},limitRows:function(t){var e,n,i=this.rowStructs||[];for(e=0;e<i.length;e++)this.unlimitRow(e),n=!!t&&("number"==typeof t?t:this.computeRowLevelLimit(e)),n!==!1&&this.limitRow(e,n)},computeRowLevelLimit:function(e){function n(e,n){s=Math.max(s,t(n).outerHeight())}var i,r,s,o=this.rowEls.eq(e),l=o.height(),a=this.rowStructs[e].tbodyEl.children();for(i=0;i<a.length;i++)if(r=a.eq(i).removeClass("fc-limited"),s=0,r.find("> td > :first-child").each(n),r.position().top+s>l)return i;return!1},limitRow:function(e,n){function i(i){for(;b<i;)u=S.getCellSegs(e,b,n),u.length&&(h=s[n-1][b],y=S.renderMoreLink(e,b,u),m=t("<div/>").append(y),h.append(m),E.push(m[0])),b++}var r,s,o,l,a,u,c,d,h,f,g,p,v,m,y,S=this,w=this.rowStructs[e],E=[],b=0;if(n&&n<w.segLevels.length){for(r=w.segLevels[n-1],s=w.cellMatrix,o=w.tbodyEl.children().slice(n).addClass("fc-limited").get(),l=0;l<r.length;l++){for(a=r[l],i(a.leftCol),d=[],c=0;b<=a.rightCol;)u=this.getCellSegs(e,b,n),d.push(u),c+=u.length,b++;if(c){for(h=s[n-1][a.leftCol],f=h.attr("rowspan")||1,g=[],p=0;p<d.length;p++)v=t('<td class="fc-more-cell"/>').attr("rowspan",f),u=d[p],y=this.renderMoreLink(e,a.leftCol+p,[a].concat(u)),m=t("<div/>").append(y),v.append(m),g.push(v[0]),E.push(v[0]);h.addClass("fc-limited").after(t(g)),o.push(h[0])}}i(this.colCnt),w.moreEls=t(E),w.limitedEls=t(o)}},unlimitRow:function(t){var e=this.rowStructs[t];e.moreEls&&(e.moreEls.remove(),e.moreEls=null),e.limitedEls&&(e.limitedEls.removeClass("fc-limited"),e.limitedEls=null)},renderMoreLink:function(e,n,i){var r=this,s=this.view;return t('<a class="fc-more"/>').text(this.getMoreLinkText(i.length)).on("click",function(o){var l=s.opt("eventLimitClick"),a=r.getCellDate(e,n),u=t(this),c=r.getCellEl(e,n),d=r.getCellSegs(e,n),h=r.resliceDaySegs(d,a),f=r.resliceDaySegs(i,a);"function"==typeof l&&(l=s.publiclyTrigger("eventLimitClick",null,{date:a,dayEl:c,moreEl:u,segs:h,hiddenSegs:f},o)),"popover"===l?r.showSegPopover(e,n,u,h):"string"==typeof l&&s.calendar.zoomTo(a,l)})},showSegPopover:function(t,e,n,i){var r,s,o=this,l=this.view,a=n.parent();r=1==this.rowCnt?l.el:this.rowEls.eq(t),s={className:"fc-more-popover",content:this.renderSegPopoverContent(t,e,i),parentEl:this.view.el,top:r.offset().top,autoHide:!0,viewportConstrain:l.opt("popoverViewportConstrain"),hide:function(){if(o.popoverSegs)for(var t,e=0;e<o.popoverSegs.length;++e)t=o.popoverSegs[e],l.publiclyTrigger("eventDestroy",t.event,t.event,t.el);o.segPopover.removeElement(),o.segPopover=null,o.popoverSegs=null}},this.isRTL?s.right=a.offset().left+a.outerWidth()+1:s.left=a.offset().left-1,this.segPopover=new he(s),this.segPopover.show(),this.bindSegHandlersToEl(this.segPopover.el)},renderSegPopoverContent:function(e,n,i){var r,s=this.view,o=s.opt("theme"),l=this.getCellDate(e,n).format(s.opt("dayPopoverFormat")),a=t('<div class="fc-header '+s.widgetHeaderClass+'"><span class="fc-close '+(o?"ui-icon ui-icon-closethick":"fc-icon fc-icon-x")+'"></span><span class="fc-title">'+tt(l)+'</span><div class="fc-clear"/></div><div class="fc-body '+s.widgetContentClass+'"><div class="fc-event-container"></div></div>'),u=a.find(".fc-event-container");for(i=this.renderFgSegEls(i,!0),this.popoverSegs=i,r=0;r<i.length;r++)this.prepareHits(),i[r].hit=this.getCellHit(e,n),this.releaseHits(),u.append(i[r].el);return a},resliceDaySegs:function(e,n){var i=t.map(e,function(t){return t.event}),r=n.clone(),s=r.clone().add(1,"days"),o={start:r,end:s};return e=this.eventsToSegs(i,function(t){var e=F(t,o);return e?[e]:[]}),this.sortEventSegs(e),e},getMoreLinkText:function(t){var e=this.view.opt("eventLimitText");return"function"==typeof e?e(t):"+"+t+" "+e},getCellSegs:function(t,e,n){for(var i,r=this.rowStructs[t].segMatrix,s=n||0,o=[];s<r.length;)i=r[s][e],i&&o.push(i),s++;return o}});var we=qt.TimeGrid=me.extend(ye,{slotDuration:null,snapDuration:null,snapsPerSlot:null,minTime:null,maxTime:null,labelFormat:null,labelInterval:null,colEls:null,slatContainerEl:null,slatEls:null,nowIndicatorEls:null,colCoordCache:null,slatCoordCache:null,constructor:function(){me.apply(this,arguments),this.processOptions()},renderDates:function(){this.el.html(this.renderHtml()),this.colEls=this.el.find(".fc-day"),this.slatContainerEl=this.el.find(".fc-slats"),this.slatEls=this.slatContainerEl.find("tr"),this.colCoordCache=new fe({els:this.colEls,isHorizontal:!0}),this.slatCoordCache=new fe({els:this.slatEls,isVertical:!0}),this.renderContentSkeleton()},renderHtml:function(){return'<div class="fc-bg"><table>'+this.renderBgTrHtml(0)+'</table></div><div class="fc-slats"><table>'+this.renderSlatRowHtml()+"</table></div>"},renderSlatRowHtml:function(){for(var t,n,i,r=this.view,s=this.isRTL,o="",l=e.duration(+this.minTime);l<this.maxTime;)t=this.start.clone().time(l),n=ot(_(l,this.labelInterval)),i='<td class="fc-axis fc-time '+r.widgetContentClass+'" '+r.axisStyleAttr()+">"+(n?"<span>"+tt(t.format(this.labelFormat))+"</span>":"")+"</td>",o+='<tr data-time="'+t.format("HH:mm:ss")+'"'+(n?"":' class="fc-minor"')+">"+(s?"":i)+'<td class="'+r.widgetContentClass+'"/>'+(s?i:"")+"</tr>",l.add(this.slotDuration);return o},processOptions:function(){var n,i=this.view,r=i.opt("slotDuration"),s=i.opt("snapDuration");r=e.duration(r),s=s?e.duration(s):r,this.slotDuration=r,this.snapDuration=s,this.snapsPerSlot=r/s,this.minResizeDuration=s,this.minTime=e.duration(i.opt("minTime")),this.maxTime=e.duration(i.opt("maxTime")),n=i.opt("slotLabelFormat"),t.isArray(n)&&(n=n[n.length-1]),this.labelFormat=n||i.opt("smallTimeFormat"),n=i.opt("slotLabelInterval"),this.labelInterval=n?e.duration(n):this.computeLabelInterval(r)},computeLabelInterval:function(t){var n,i,r;for(n=Oe.length-1;n>=0;n--)if(i=e.duration(Oe[n]),r=_(i,t),ot(r)&&r>1)return i;return e.duration(t)},computeEventTimeFormat:function(){return this.view.opt("noMeridiemTimeFormat")},computeDisplayEventEnd:function(){return!0},prepareHits:function(){this.colCoordCache.build(),this.slatCoordCache.build()},releaseHits:function(){this.colCoordCache.clear()},queryHit:function(t,e){var n=this.snapsPerSlot,i=this.colCoordCache,r=this.slatCoordCache;if(i.isLeftInBounds(t)&&r.isTopInBounds(e)){var s=i.getHorizontalIndex(t),o=r.getVerticalIndex(e);if(null!=s&&null!=o){var l=r.getTopOffset(o),a=r.getHeight(o),u=(e-l)/a,c=Math.floor(u*n),d=o*n+c,h=l+c/n*a,f=l+(c+1)/n*a;return{col:s,snap:d,component:this,left:i.getLeftOffset(s),right:i.getRightOffset(s),top:h,bottom:f}}}},getHitSpan:function(t){var e,n=this.getCellDate(0,t.col),i=this.computeSnapTime(t.snap);return n.time(i),e=n.clone().add(this.snapDuration),{start:n,end:e}},getHitEl:function(t){return this.colEls.eq(t.col)},rangeUpdated:function(){this.updateDayTable()},computeSnapTime:function(t){return e.duration(this.minTime+this.snapDuration*t)},spanToSegs:function(t){var e,n=this.sliceRangeByTimes(t);for(e=0;e<n.length;e++)this.isRTL?n[e].col=this.daysPerRow-1-n[e].dayIndex:n[e].col=n[e].dayIndex;return n},sliceRangeByTimes:function(t){var e,n,i,r,s=[];for(n=0;n<this.daysPerRow;n++)i=this.dayDates[n].clone(),r={start:i.clone().time(this.minTime),end:i.clone().time(this.maxTime)},e=F(t,r),e&&(e.dayIndex=n,s.push(e));return s},updateSize:function(t){this.slatCoordCache.build(),t&&this.updateSegVerticals([].concat(this.fgSegs||[],this.bgSegs||[],this.businessSegs||[]))},getTotalSlatHeight:function(){return this.slatContainerEl.outerHeight()},computeDateTop:function(t,n){return this.computeTimeTop(e.duration(t-n.clone().stripTime()))},computeTimeTop:function(t){var e,n,i=this.slatEls.length,r=(t-this.minTime)/this.slotDuration;return r=Math.max(0,r),r=Math.min(i,r),e=Math.floor(r),e=Math.min(e,i-1),n=r-e,this.slatCoordCache.getTopPosition(e)+this.slatCoordCache.getHeight(e)*n},renderDrag:function(t,e){return e?this.renderEventLocationHelper(t,e):void this.renderHighlight(this.eventToSpan(t))},unrenderDrag:function(){this.unrenderHelper(),this.unrenderHighlight()},renderEventResize:function(t,e){return this.renderEventLocationHelper(t,e)},unrenderEventResize:function(){this.unrenderHelper()},renderHelper:function(t,e){return this.renderHelperSegs(this.eventToSegs(t),e)},unrenderHelper:function(){this.unrenderHelperSegs()},renderBusinessHours:function(){this.renderBusinessSegs(this.buildBusinessHourSegs())},unrenderBusinessHours:function(){this.unrenderBusinessSegs()},getNowIndicatorUnit:function(){return"minute"},renderNowIndicator:function(e){var n,i=this.spanToSegs({start:e,end:e}),r=this.computeDateTop(e,e),s=[];for(n=0;n<i.length;n++)s.push(t('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top",r).appendTo(this.colContainerEls.eq(i[n].col))[0]);i.length>0&&s.push(t('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top",r).appendTo(this.el.find(".fc-content-skeleton"))[0]),this.nowIndicatorEls=t(s)},unrenderNowIndicator:function(){this.nowIndicatorEls&&(this.nowIndicatorEls.remove(),this.nowIndicatorEls=null)},renderSelection:function(t){this.view.opt("selectHelper")?this.renderEventLocationHelper(t):this.renderHighlight(t)},unrenderSelection:function(){this.unrenderHelper(),this.unrenderHighlight()},renderHighlight:function(t){this.renderHighlightSegs(this.spanToSegs(t))},unrenderHighlight:function(){this.unrenderHighlightSegs()}});we.mixin({colContainerEls:null,fgContainerEls:null,bgContainerEls:null,helperContainerEls:null,highlightContainerEls:null,businessContainerEls:null,fgSegs:null,bgSegs:null,helperSegs:null,highlightSegs:null,businessSegs:null,renderContentSkeleton:function(){var e,n,i="";for(e=0;e<this.colCnt;e++)i+='<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';n=t('<div class="fc-content-skeleton"><table><tr>'+i+"</tr></table></div>"),this.colContainerEls=n.find(".fc-content-col"),this.helperContainerEls=n.find(".fc-helper-container"),this.fgContainerEls=n.find(".fc-event-container:not(.fc-helper-container)"),this.bgContainerEls=n.find(".fc-bgevent-container"),this.highlightContainerEls=n.find(".fc-highlight-container"),this.businessContainerEls=n.find(".fc-business-container"),this.bookendCells(n.find("tr")),this.el.append(n)},renderFgSegs:function(t){return t=this.renderFgSegsIntoContainers(t,this.fgContainerEls),this.fgSegs=t,t},unrenderFgSegs:function(){this.unrenderNamedSegs("fgSegs")},renderHelperSegs:function(e,n){var i,r,s,o=[];for(e=this.renderFgSegsIntoContainers(e,this.helperContainerEls),i=0;i<e.length;i++)r=e[i],n&&n.col===r.col&&(s=n.el,r.el.css({left:s.css("left"),right:s.css("right"),"margin-left":s.css("margin-left"),"margin-right":s.css("margin-right")})),o.push(r.el[0]);return this.helperSegs=e,t(o)},unrenderHelperSegs:function(){this.unrenderNamedSegs("helperSegs")},renderBgSegs:function(t){return t=this.renderFillSegEls("bgEvent",t),this.updateSegVerticals(t),this.attachSegsByCol(this.groupSegsByCol(t),this.bgContainerEls),this.bgSegs=t,t},unrenderBgSegs:function(){this.unrenderNamedSegs("bgSegs")},renderHighlightSegs:function(t){t=this.renderFillSegEls("highlight",t),this.updateSegVerticals(t),this.attachSegsByCol(this.groupSegsByCol(t),this.highlightContainerEls),this.highlightSegs=t},unrenderHighlightSegs:function(){this.unrenderNamedSegs("highlightSegs")},renderBusinessSegs:function(t){t=this.renderFillSegEls("businessHours",t),this.updateSegVerticals(t),this.attachSegsByCol(this.groupSegsByCol(t),this.businessContainerEls),this.businessSegs=t},unrenderBusinessSegs:function(){this.unrenderNamedSegs("businessSegs")},groupSegsByCol:function(t){var e,n=[];for(e=0;e<this.colCnt;e++)n.push([]);for(e=0;e<t.length;e++)n[t[e].col].push(t[e]);return n},attachSegsByCol:function(t,e){var n,i,r;for(n=0;n<this.colCnt;n++)for(i=t[n],r=0;r<i.length;r++)e.eq(n).append(i[r].el)},unrenderNamedSegs:function(t){var e,n=this[t];if(n){for(e=0;e<n.length;e++)n[e].el.remove();this[t]=null}},renderFgSegsIntoContainers:function(t,e){var n,i;for(t=this.renderFgSegEls(t),n=this.groupSegsByCol(t),i=0;i<this.colCnt;i++)this.updateFgSegCoords(n[i]);return this.attachSegsByCol(n,e),t},fgSegHtml:function(t,e){var n,i,r,s=this.view,o=t.event,l=s.isEventDraggable(o),a=!e&&t.isStart&&s.isEventResizableFromStart(o),u=!e&&t.isEnd&&s.isEventResizableFromEnd(o),c=this.getSegClasses(t,l,a||u),d=nt(this.getSegSkinCss(t));return c.unshift("fc-time-grid-event","fc-v-event"),s.isMultiDayEvent(o)?(t.isStart||t.isEnd)&&(n=this.getEventTimeText(t),i=this.getEventTimeText(t,"LT"),r=this.getEventTimeText(t,null,!1)):(n=this.getEventTimeText(o),i=this.getEventTimeText(o,"LT"),r=this.getEventTimeText(o,null,!1)),'<a class="'+c.join(" ")+'"'+(o.url?' href="'+tt(o.url)+'"':"")+(d?' style="'+d+'"':"")+'><div class="fc-content">'+(n?'<div class="fc-time" data-start="'+tt(r)+'" data-full="'+tt(i)+'"><span>'+tt(n)+"</span></div>":"")+(o.title?'<div class="fc-title">'+tt(o.title)+"</div>":"")+'</div><div class="fc-bg"/>'+(u?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},updateSegVerticals:function(t){this.computeSegVerticals(t),this.assignSegVerticals(t)},computeSegVerticals:function(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.top=this.computeDateTop(n.start,n.start),n.bottom=this.computeDateTop(n.end,n.start)},assignSegVerticals:function(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.el.css(this.generateSegVerticalCss(n))},generateSegVerticalCss:function(t){return{top:t.top,bottom:-t.bottom}},updateFgSegCoords:function(t){this.computeSegVerticals(t),this.computeFgSegHorizontals(t),this.assignSegVerticals(t),this.assignFgSegHorizontals(t)},computeFgSegHorizontals:function(t){var e,n,i;if(this.sortEventSegs(t),e=Ft(t),Nt(e),n=e[0]){for(i=0;i<n.length;i++)Gt(n[i]);for(i=0;i<n.length;i++)this.computeFgSegForwardBack(n[i],0,0)}},computeFgSegForwardBack:function(t,e,n){var i,r=t.forwardSegs;if(void 0===t.forwardCoord)for(r.length?(this.sortForwardSegs(r),this.computeFgSegForwardBack(r[0],e+1,n),t.forwardCoord=r[0].backwardCoord):t.forwardCoord=1,t.backwardCoord=t.forwardCoord-(t.forwardCoord-n)/(e+1),i=0;i<r.length;i++)this.computeFgSegForwardBack(r[i],0,t.forwardCoord)},sortForwardSegs:function(t){t.sort(lt(this,"compareForwardSegs"))},compareForwardSegs:function(t,e){return e.forwardPressure-t.forwardPressure||(t.backwardCoord||0)-(e.backwardCoord||0)||this.compareEventSegs(t,e)},assignFgSegHorizontals:function(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.el.css(this.generateFgSegHorizontalCss(n)),n.bottom-n.top<30&&n.el.addClass("fc-short")},generateFgSegHorizontalCss:function(t){var e,n,i=this.view.opt("slotEventOverlap"),r=t.backwardCoord,s=t.forwardCoord,o=this.generateSegVerticalCss(t);return i&&(s=Math.min(1,r+2*(s-r))),this.isRTL?(e=1-s,n=r):(e=r,n=1-s),o.zIndex=t.level+1,o.left=100*e+"%",o.right=100*n+"%",i&&t.forwardPressure&&(o[this.isRTL?"marginLeft":"marginRight"]=20),o}});var Ee=qt.View=St.extend(ue,ce,{type:null,name:null,title:null,calendar:null,options:null,el:null,isDateSet:!1,isDateRendered:!1,dateRenderQueue:null,isEventsBound:!1,isEventsSet:!1,isEventsRendered:!1,eventRenderQueue:null,start:null,end:null,intervalStart:null,intervalEnd:null,intervalDuration:null,intervalUnit:null,isRTL:!1,isSelected:!1,selectedEvent:null,eventOrderSpecs:null,widgetHeaderClass:null,widgetContentClass:null,highlightStateClass:null,nextDayThreshold:null,isHiddenDayHash:null,isNowIndicatorRendered:null,initialNowDate:null,initialNowQueriedMs:null,nowIndicatorTimeoutID:null,nowIndicatorIntervalID:null,constructor:function(t,n,i,r){this.calendar=t,this.type=this.name=n,this.options=i,this.intervalDuration=r||e.duration(1,"day"),this.nextDayThreshold=e.duration(this.opt("nextDayThreshold")),this.initThemingProps(),this.initHiddenDays(),this.isRTL=this.opt("isRTL"),this.eventOrderSpecs=L(this.opt("eventOrder")),this.dateRenderQueue=new Dt,this.eventRenderQueue=new Dt(this.opt("eventRenderWait")),this.initialize()},initialize:function(){},opt:function(t){return this.options[t]},publiclyTrigger:function(t,e){var n=this.calendar;return n.publiclyTrigger.apply(n,[t,e||this].concat(Array.prototype.slice.call(arguments,2),[this]))},rejectOn:function(t,e){var n=this;return new bt(function(i,r){function s(){n.off(t,r)}n.one(t,r),e.then(function(t){s(),i(t)},function(){s(),r()})})},setRange:function(e){t.extend(this,e),this.updateTitle()},computeRange:function(t){var e,n,i=A(this.intervalDuration),r=t.clone().startOf(i),s=r.clone().add(this.intervalDuration);return/year|month|week|day/.test(i)?(r.stripTime(),s.stripTime()):(r.hasTime()||(r=this.calendar.time(0)),s.hasTime()||(s=this.calendar.time(0))),e=r.clone(),e=this.skipHiddenDays(e),n=s.clone(),n=this.skipHiddenDays(n,-1,!0),{intervalUnit:i,intervalStart:r,intervalEnd:s,start:e,end:n}},computePrevDate:function(t){return this.massageCurrentDate(t.clone().startOf(this.intervalUnit).subtract(this.intervalDuration),-1)},computeNextDate:function(t){return this.massageCurrentDate(t.clone().startOf(this.intervalUnit).add(this.intervalDuration))},massageCurrentDate:function(t,e){return this.intervalDuration.as("days")<=1&&this.isHiddenDay(t)&&(t=this.skipHiddenDays(t,e),t.startOf("day")),t},updateTitle:function(){this.title=this.computeTitle(),this.calendar.setToolbarsTitle(this.title)},computeTitle:function(){return this.formatRange({start:this.calendar.applyTimezone(this.intervalStart),end:this.calendar.applyTimezone(this.intervalEnd)},this.opt("titleFormat")||this.computeTitleFormat(),this.opt("titleRangeSeparator"))},computeTitleFormat:function(){return"year"==this.intervalUnit?"YYYY":"month"==this.intervalUnit?this.opt("monthYearFormat"):this.intervalDuration.as("days")>1?"ll":"LL"},formatRange:function(t,e,n){var i=t.end;return i.hasTime()||(i=i.clone().subtract(1)),gt(t.start,i,e,n,this.opt("isRTL"))},getAllDayHtml:function(){return this.opt("allDayHtml")||tt(this.opt("allDayText"))},buildGotoAnchorHtml:function(e,n,i){var r,s,o,l;return t.isPlainObject(e)?(r=e.date,s=e.type,o=e.forceOff):r=e,r=qt.moment(r),l={date:r.format("YYYY-MM-DD"),type:s||"day"},"string"==typeof n&&(i=n,n=null),n=n?" "+it(n):"",i=i||"",!o&&this.opt("navLinks")?"<a"+n+' data-goto="'+tt(JSON.stringify(l))+'">'+i+"</a>":"<span"+n+">"+i+"</span>"},setElement:function(t){this.el=t,this.bindGlobalHandlers(),this.renderSkeleton()},removeElement:function(){this.unsetDate(),this.unrenderSkeleton(),this.unbindGlobalHandlers(),this.el.remove()},renderSkeleton:function(){},unrenderSkeleton:function(){},setDate:function(t){var e=this.isDateSet;this.isDateSet=!0,this.handleDate(t,e),this.trigger(e?"dateReset":"dateSet",t)},unsetDate:function(){this.isDateSet&&(this.isDateSet=!1,this.handleDateUnset(),this.trigger("dateUnset"))},handleDate:function(t,e){var n=this;this.unbindEvents(),this.requestDateRender(t).then(function(){n.bindEvents()})},handleDateUnset:function(){this.unbindEvents(),this.requestDateUnrender()},requestDateRender:function(t){var e=this;return this.dateRenderQueue.add(function(){return e.executeDateRender(t)})},requestDateUnrender:function(){var t=this;return this.dateRenderQueue.add(function(){return t.executeDateUnrender()})},executeDateRender:function(t){var e=this;return t?this.captureInitialScroll():this.captureScroll(),this.freezeHeight(),this.executeDateUnrender().then(function(){t&&e.setRange(e.computeRange(t)),e.render&&e.render(),e.renderDates(),e.updateSize(),e.renderBusinessHours(),e.startNowIndicator(),e.thawHeight(),e.releaseScroll(),e.isDateRendered=!0,e.onDateRender(),e.trigger("dateRender")})},executeDateUnrender:function(){var t=this;return t.isDateRendered?this.requestEventsUnrender().then(function(){t.unselect(),t.stopNowIndicator(),t.triggerUnrender(),t.unrenderBusinessHours(),t.unrenderDates(),t.destroy&&t.destroy(),t.isDateRendered=!1,t.trigger("dateUnrender")}):bt.resolve()},onDateRender:function(){this.triggerRender()},renderDates:function(){},unrenderDates:function(){},triggerRender:function(){this.publiclyTrigger("viewRender",this,this,this.el);
},triggerUnrender:function(){this.publiclyTrigger("viewDestroy",this,this,this.el)},bindGlobalHandlers:function(){this.listenTo(t(document),"mousedown",this.handleDocumentMousedown),this.listenTo(t(document),"touchstart",this.processUnselect)},unbindGlobalHandlers:function(){this.stopListeningTo(t(document))},initThemingProps:function(){var t=this.opt("theme")?"ui":"fc";this.widgetHeaderClass=t+"-widget-header",this.widgetContentClass=t+"-widget-content",this.highlightStateClass=t+"-state-highlight"},renderBusinessHours:function(){},unrenderBusinessHours:function(){},startNowIndicator:function(){var t,n,i,r=this;this.opt("nowIndicator")&&(t=this.getNowIndicatorUnit(),t&&(n=lt(this,"updateNowIndicator"),this.initialNowDate=this.calendar.getNow(),this.initialNowQueriedMs=+new Date,this.renderNowIndicator(this.initialNowDate),this.isNowIndicatorRendered=!0,i=this.initialNowDate.clone().startOf(t).add(1,t)-this.initialNowDate,this.nowIndicatorTimeoutID=setTimeout(function(){r.nowIndicatorTimeoutID=null,n(),i=+e.duration(1,t),i=Math.max(100,i),r.nowIndicatorIntervalID=setInterval(n,i)},i)))},updateNowIndicator:function(){this.isNowIndicatorRendered&&(this.unrenderNowIndicator(),this.renderNowIndicator(this.initialNowDate.clone().add(new Date-this.initialNowQueriedMs)))},stopNowIndicator:function(){this.isNowIndicatorRendered&&(this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearTimeout(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},getNowIndicatorUnit:function(){},renderNowIndicator:function(t){},unrenderNowIndicator:function(){},updateSize:function(t){t&&this.captureScroll(),this.updateHeight(t),this.updateWidth(t),this.updateNowIndicator(),t&&this.releaseScroll()},updateWidth:function(t){},updateHeight:function(t){var e=this.calendar;this.setHeight(e.getSuggestedViewHeight(),e.isHeightAuto())},setHeight:function(t,e){},capturedScroll:null,capturedScrollDepth:0,captureScroll:function(){return!this.capturedScrollDepth++&&(this.capturedScroll=this.isDateRendered?this.queryScroll():{},!0)},captureInitialScroll:function(e){this.captureScroll()&&(this.capturedScroll.isInitial=!0,e?t.extend(this.capturedScroll,e):this.capturedScroll.isComputed=!0)},releaseScroll:function(){var e=this.capturedScroll,n=this.discardScroll();e.isComputed&&(n?t.extend(e,this.computeInitialScroll()):e=null),e&&(e.isInitial?this.hardSetScroll(e):this.setScroll(e))},discardScroll:function(){return!--this.capturedScrollDepth&&(this.capturedScroll=null,!0)},computeInitialScroll:function(){return{}},queryScroll:function(){return{}},hardSetScroll:function(t){var e=this,n=function(){e.setScroll(t)};n(),setTimeout(n,0)},setScroll:function(t){},freezeHeight:function(){this.calendar.freezeContentHeight()},thawHeight:function(){this.calendar.thawContentHeight()},bindEvents:function(){var t=this;this.isEventsBound||(this.isEventsBound=!0,this.rejectOn("eventsUnbind",this.requestEvents()).then(function(e){t.listenTo(t.calendar,"eventsReset",t.setEvents),t.setEvents(e)}))},unbindEvents:function(){this.isEventsBound&&(this.isEventsBound=!1,this.stopListeningTo(this.calendar,"eventsReset"),this.unsetEvents(),this.trigger("eventsUnbind"))},setEvents:function(t){var e=this.isEventSet;this.isEventsSet=!0,this.handleEvents(t,e),this.trigger(e?"eventsReset":"eventsSet",t)},unsetEvents:function(){this.isEventsSet&&(this.isEventsSet=!1,this.handleEventsUnset(),this.trigger("eventsUnset"))},whenEventsSet:function(){var t=this;return this.isEventsSet?bt.resolve(this.getCurrentEvents()):new bt(function(e){t.one("eventsSet",e)})},handleEvents:function(t,e){this.requestEventsRender(t)},handleEventsUnset:function(){this.requestEventsUnrender()},requestEventsRender:function(t){var e=this;return this.eventRenderQueue.add(function(){return e.executeEventsRender(t)})},requestEventsUnrender:function(){var t=this;return this.isEventsRendered?this.eventRenderQueue.addQuickly(function(){return t.executeEventsUnrender()}):bt.resolve()},requestCurrentEventsRender:function(){return this.isEventsSet?void this.requestEventsRender(this.getCurrentEvents()):bt.reject()},executeEventsRender:function(t){var e=this;return this.captureScroll(),this.freezeHeight(),this.executeEventsUnrender().then(function(){e.renderEvents(t),e.thawHeight(),e.releaseScroll(),e.isEventsRendered=!0,e.onEventsRender(),e.trigger("eventsRender")})},executeEventsUnrender:function(){return this.isEventsRendered&&(this.onBeforeEventsUnrender(),this.captureScroll(),this.freezeHeight(),this.destroyEvents&&this.destroyEvents(),this.unrenderEvents(),this.thawHeight(),this.releaseScroll(),this.isEventsRendered=!1,this.trigger("eventsUnrender")),bt.resolve()},onEventsRender:function(){this.renderedEventSegEach(function(t){this.publiclyTrigger("eventAfterRender",t.event,t.event,t.el)}),this.publiclyTrigger("eventAfterAllRender")},onBeforeEventsUnrender:function(){this.renderedEventSegEach(function(t){this.publiclyTrigger("eventDestroy",t.event,t.event,t.el)})},renderEvents:function(t){},unrenderEvents:function(){},requestEvents:function(){return this.calendar.requestEvents(this.start,this.end)},getCurrentEvents:function(){return this.calendar.getPrunedEventCache()},resolveEventEl:function(e,n){var i=this.publiclyTrigger("eventRender",e,e,n);return i===!1?n=null:i&&i!==!0&&(n=t(i)),n},showEvent:function(t){this.renderedEventSegEach(function(t){t.el.css("visibility","")},t)},hideEvent:function(t){this.renderedEventSegEach(function(t){t.el.css("visibility","hidden")},t)},renderedEventSegEach:function(t,e){var n,i=this.getEventSegs();for(n=0;n<i.length;n++)e&&i[n].event._id!==e._id||i[n].el&&t.call(this,i[n])},getEventSegs:function(){return[]},isEventDraggable:function(t){return this.isEventStartEditable(t)},isEventStartEditable:function(t){return J(t.startEditable,(t.source||{}).startEditable,this.opt("eventStartEditable"),this.isEventGenerallyEditable(t))},isEventGenerallyEditable:function(t){return J(t.editable,(t.source||{}).editable,this.opt("editable"))},reportEventDrop:function(t,e,n,i,r){var s=this.calendar,o=s.mutateEvent(t,e,n),l=function(){o.undo(),s.reportEventChange()};this.triggerEventDrop(t,o.dateDelta,l,i,r),s.reportEventChange()},triggerEventDrop:function(t,e,n,i,r){this.publiclyTrigger("eventDrop",i[0],t,e,n,r,{})},reportExternalDrop:function(e,n,i,r,s){var o,l,a=e.eventProps;a&&(o=t.extend({},a,n),l=this.calendar.renderEvent(o,e.stick)[0]),this.triggerExternalDrop(l,n,i,r,s)},triggerExternalDrop:function(t,e,n,i,r){this.publiclyTrigger("drop",n[0],e.start,i,r),t&&this.publiclyTrigger("eventReceive",null,t)},renderDrag:function(t,e){},unrenderDrag:function(){},isEventResizableFromStart:function(t){return this.opt("eventResizableFromStart")&&this.isEventResizable(t)},isEventResizableFromEnd:function(t){return this.isEventResizable(t)},isEventResizable:function(t){var e=t.source||{};return J(t.durationEditable,e.durationEditable,this.opt("eventDurationEditable"),t.editable,e.editable,this.opt("editable"))},reportEventResize:function(t,e,n,i,r){var s=this.calendar,o=s.mutateEvent(t,e,n),l=function(){o.undo(),s.reportEventChange()};this.triggerEventResize(t,o.durationDelta,l,i,r),s.reportEventChange()},triggerEventResize:function(t,e,n,i,r){this.publiclyTrigger("eventResize",i[0],t,e,n,r,{})},select:function(t,e){this.unselect(e),this.renderSelection(t),this.reportSelection(t,e)},renderSelection:function(t){},reportSelection:function(t,e){this.isSelected=!0,this.triggerSelect(t,e)},triggerSelect:function(t,e){this.publiclyTrigger("select",null,this.calendar.applyTimezone(t.start),this.calendar.applyTimezone(t.end),e)},unselect:function(t){this.isSelected&&(this.isSelected=!1,this.destroySelection&&this.destroySelection(),this.unrenderSelection(),this.publiclyTrigger("unselect",null,t))},unrenderSelection:function(){},selectEvent:function(t){this.selectedEvent&&this.selectedEvent===t||(this.unselectEvent(),this.renderedEventSegEach(function(t){t.el.addClass("fc-selected")},t),this.selectedEvent=t)},unselectEvent:function(){this.selectedEvent&&(this.renderedEventSegEach(function(t){t.el.removeClass("fc-selected")},this.selectedEvent),this.selectedEvent=null)},isEventSelected:function(t){return this.selectedEvent&&this.selectedEvent._id===t._id},handleDocumentMousedown:function(t){S(t)&&this.processUnselect(t)},processUnselect:function(t){this.processRangeUnselect(t),this.processEventUnselect(t)},processRangeUnselect:function(e){var n;this.isSelected&&this.opt("unselectAuto")&&(n=this.opt("unselectCancel"),n&&t(e.target).closest(n).length||this.unselect(e))},processEventUnselect:function(e){this.selectedEvent&&(t(e.target).closest(".fc-selected").length||this.unselectEvent())},triggerDayClick:function(t,e,n){this.publiclyTrigger("dayClick",e,this.calendar.applyTimezone(t.start),n)},initHiddenDays:function(){var e,n=this.opt("hiddenDays")||[],i=[],r=0;for(this.opt("weekends")===!1&&n.push(0,6),e=0;e<7;e++)(i[e]=t.inArray(e,n)!==-1)||r++;if(!r)throw"invalid hiddenDays";this.isHiddenDayHash=i},isHiddenDay:function(t){return e.isMoment(t)&&(t=t.day()),this.isHiddenDayHash[t]},skipHiddenDays:function(t,e,n){var i=t.clone();for(e=e||1;this.isHiddenDayHash[(i.day()+(n?e:0)+7)%7];)i.add(e,"days");return i},computeDayRange:function(t){var e,n=t.start.clone().stripTime(),i=t.end,r=null;return i&&(r=i.clone().stripTime(),e=+i.time(),e&&e>=this.nextDayThreshold&&r.add(1,"days")),(!i||r<=n)&&(r=n.clone().add(1,"days")),{start:n,end:r}},isMultiDayEvent:function(t){var e=this.computeDayRange(t);return e.end.diff(e.start,"days")>1}}),be=qt.Scroller=St.extend({el:null,scrollEl:null,overflowX:null,overflowY:null,constructor:function(t){t=t||{},this.overflowX=t.overflowX||t.overflow||"auto",this.overflowY=t.overflowY||t.overflow||"auto"},render:function(){this.el=this.renderEl(),this.applyOverflow()},renderEl:function(){return this.scrollEl=t('<div class="fc-scroller"></div>')},clear:function(){this.setHeight("auto"),this.applyOverflow()},destroy:function(){this.el.remove()},applyOverflow:function(){this.scrollEl.css({"overflow-x":this.overflowX,"overflow-y":this.overflowY})},lockOverflow:function(t){var e=this.overflowX,n=this.overflowY;t=t||this.getScrollbarWidths(),"auto"===e&&(e=t.top||t.bottom||this.scrollEl[0].scrollWidth-1>this.scrollEl[0].clientWidth?"scroll":"hidden"),"auto"===n&&(n=t.left||t.right||this.scrollEl[0].scrollHeight-1>this.scrollEl[0].clientHeight?"scroll":"hidden"),this.scrollEl.css({"overflow-x":e,"overflow-y":n})},setHeight:function(t){this.scrollEl.height(t)},getScrollTop:function(){return this.scrollEl.scrollTop()},setScrollTop:function(t){this.scrollEl.scrollTop(t)},getClientWidth:function(){return this.scrollEl[0].clientWidth},getClientHeight:function(){return this.scrollEl[0].clientHeight},getScrollbarWidths:function(){return p(this.scrollEl)}});Vt.prototype.proxyCall=function(t){var e=Array.prototype.slice.call(arguments,1),n=[];return this.items.forEach(function(i){n.push(i[t].apply(i,e))}),n};var De=qt.Calendar=St.extend({dirDefaults:null,localeDefaults:null,overrides:null,dynamicOverrides:null,options:null,viewSpecCache:null,view:null,header:null,footer:null,loadingLevel:0,constructor:_t,initialize:function(){},populateOptionsHash:function(){var t,e,i,r;t=J(this.dynamicOverrides.locale,this.overrides.locale),e=Te[t],e||(t=De.defaults.locale,e=Te[t]||{}),i=J(this.dynamicOverrides.isRTL,this.overrides.isRTL,e.isRTL,De.defaults.isRTL),r=i?De.rtlDefaults:{},this.dirDefaults=r,this.localeDefaults=e,this.options=n([De.defaults,r,e,this.overrides,this.dynamicOverrides]),Yt(this.options)},getViewSpec:function(t){var e=this.viewSpecCache;return e[t]||(e[t]=this.buildViewSpec(t))},getUnitViewSpec:function(e){var n,i,r;if(t.inArray(e,Kt)!=-1)for(n=this.header.getViewsWithButtons(),t.each(qt.views,function(t){n.push(t)}),i=0;i<n.length;i++)if(r=this.getViewSpec(n[i]),r&&r.singleUnit==e)return r},buildViewSpec:function(t){for(var i,r,s,o,l=this.overrides.views||{},a=[],u=[],c=[],d=t;d;)i=Zt[d],r=l[d],d=null,"function"==typeof i&&(i={class:i}),i&&(a.unshift(i),u.unshift(i.defaults||{}),s=s||i.duration,d=d||i.type),r&&(c.unshift(r),s=s||r.duration,d=d||r.type);return i=q(a),i.type=t,!!i.class&&(s&&(s=e.duration(s),s.valueOf()&&(i.duration=s,o=A(s),1===s.as(o)&&(i.singleUnit=o,c.unshift(l[o]||{})))),i.defaults=n(u),i.overrides=n(c),this.buildViewSpecOptions(i),this.buildViewSpecButtonText(i,t),i)},buildViewSpecOptions:function(t){t.options=n([De.defaults,t.defaults,this.dirDefaults,this.localeDefaults,this.overrides,t.overrides,this.dynamicOverrides]),Yt(t.options)},buildViewSpecButtonText:function(t,e){function n(n){var i=n.buttonText||{};return i[e]||(t.buttonTextKey?i[t.buttonTextKey]:null)||(t.singleUnit?i[t.singleUnit]:null)}t.buttonTextOverride=n(this.dynamicOverrides)||n(this.overrides)||t.overrides.buttonText,t.buttonTextDefault=n(this.localeDefaults)||n(this.dirDefaults)||t.defaults.buttonText||n(De.defaults)||(t.duration?this.humanizeDuration(t.duration):null)||e},instantiateView:function(t){var e=this.getViewSpec(t);return new e.class(this,t,e.options,e.duration)},isValidViewType:function(t){return Boolean(this.getViewSpec(t))},pushLoading:function(){this.loadingLevel++||this.publiclyTrigger("loading",null,!0,this.view)},popLoading:function(){--this.loadingLevel||this.publiclyTrigger("loading",null,!1,this.view)},buildSelectSpan:function(t,e){var n,i=this.moment(t).stripZone();return n=e?this.moment(e).stripZone():i.hasTime()?i.clone().add(this.defaultTimedEventDuration):i.clone().add(this.defaultAllDayEventDuration),{start:i,end:n}}});De.mixin(ue),De.mixin({optionHandlers:null,bindOption:function(t,e){this.bindOptions([t],e)},bindOptions:function(t,e){var n,i={func:e,names:t};for(n=0;n<t.length;n++)this.registerOptionHandlerObj(t[n],i);this.triggerOptionHandlerObj(i)},registerOptionHandlerObj:function(t,e){(this.optionHandlers[t]||(this.optionHandlers[t]=[])).push(e)},triggerOptionHandlers:function(t){var e,n=this.optionHandlers[t]||[];for(e=0;e<n.length;e++)this.triggerOptionHandlerObj(n[e])},triggerOptionHandlerObj:function(t){var e,n=t.names,i=[];for(e=0;e<n.length;e++)i.push(this.options[n[e]]);t.func.apply(this,i)}}),De.defaults={titleRangeSeparator:" – ",monthYearFormat:"MMMM YYYY",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",scrollTime:"06:00:00",lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,isRTL:!1,buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day"},buttonIcons:{prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow"},allDayText:"all-day",theme:!1,themeButtonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e",prevYear:"seek-prev",nextYear:"seek-next"},dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,unselectAuto:!0,dropAccept:"*",eventOrder:"title",eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3},De.englishDefaults={dayPopoverFormat:"dddd, MMMM D"},De.rtlDefaults={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}};var Te=qt.locales={};qt.datepickerLocale=function(e,n,i){var r=Te[e]||(Te[e]={});r.isRTL=i.isRTL,r.weekNumberTitle=i.weekHeader,t.each(Ce,function(t,e){r[t]=e(i)}),t.datepicker&&(t.datepicker.regional[n]=t.datepicker.regional[e]=i,t.datepicker.regional.en=t.datepicker.regional[""],t.datepicker.setDefaults(i))},qt.locale=function(e,i){var r,s;r=Te[e]||(Te[e]={}),i&&(r=Te[e]=n([r,i])),s=Wt(e),t.each(He,function(t,e){null==r[t]&&(r[t]=e(s,r))}),De.defaults.locale=e};var Ce={buttonText:function(t){return{prev:et(t.prevText),next:et(t.nextText),today:et(t.currentText)}},monthYearFormat:function(t){return t.showMonthAfterYear?"YYYY["+t.yearSuffix+"] MMMM":"MMMM YYYY["+t.yearSuffix+"]"}},He={dayOfMonthFormat:function(t,e){var n=t.longDateFormat("l");return n=n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),e.isRTL?n+=" ddd":n="ddd "+n,n},mediumTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"a")},smallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")},extraSmallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")},hourFormat:function(t){return t.longDateFormat("LT").replace(":mm","").replace(/(\Wmm)$/,"").replace(/\s*a$/i,"a")},noMeridiemTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"")}},Re={smallDayDateFormat:function(t){return t.isRTL?"D dd":"dd D"},weekFormat:function(t){return t.isRTL?"w[ "+t.weekNumberTitle+"]":"["+t.weekNumberTitle+" ]w"},smallWeekFormat:function(t){return t.isRTL?"w["+t.weekNumberTitle+"]":"["+t.weekNumberTitle+"]w"}};qt.locale("en",De.englishDefaults),qt.sourceNormalizers=[],qt.sourceFetchers=[];var xe={dataType:"json",cache:!1},Ie=1;De.prototype.normalizeEvent=function(t){},De.prototype.spanContainsSpan=function(t,e){var n=t.start.clone().stripZone(),i=this.getEventEnd(t).stripZone();return e.start>=n&&e.end<=i},De.prototype.getPeerEvents=function(t,e){var n,i,r=this.getEventCache(),s=[];for(n=0;n<r.length;n++)i=r[n],e&&e._id===i._id||s.push(i);return s},De.prototype.isEventSpanAllowed=function(t,e){var n=e.source||{},i=J(e.constraint,n.constraint,this.options.eventConstraint),r=J(e.overlap,n.overlap,this.options.eventOverlap);return this.isSpanAllowed(t,i,r,e)&&(!this.options.eventAllow||this.options.eventAllow(t,e)!==!1)},De.prototype.isExternalSpanAllowed=function(e,n,i){var r,s;return i&&(r=t.extend({},i,n),s=this.expandEvent(this.buildEventFromInput(r))[0]),s?this.isEventSpanAllowed(e,s):this.isSelectionSpanAllowed(e)},De.prototype.isSelectionSpanAllowed=function(t){return this.isSpanAllowed(t,this.options.selectConstraint,this.options.selectOverlap)&&(!this.options.selectAllow||this.options.selectAllow(t)!==!1)},De.prototype.isSpanAllowed=function(t,e,n,i){var r,s,o,l,a,u;if(null!=e&&(r=this.constraintToEvents(e))){for(s=!1,l=0;l<r.length;l++)if(this.spanContainsSpan(r[l],t)){s=!0;break}if(!s)return!1}for(o=this.getPeerEvents(t,i),l=0;l<o.length;l++)if(a=o[l],this.eventIntersectsRange(a,t)){if(n===!1)return!1;if("function"==typeof n&&!n(a,i))return!1;if(i){if(u=J(a.overlap,(a.source||{}).overlap),u===!1)return!1;if("function"==typeof u&&!u(i,a))return!1}}return!0},De.prototype.constraintToEvents=function(t){return"businessHours"===t?this.getCurrentBusinessHourEvents():"object"==typeof t?null!=t.start?this.expandEvent(this.buildEventFromInput(t)):null:this.clientEvents(t)},De.prototype.eventIntersectsRange=function(t,e){var n=t.start.clone().stripZone(),i=this.getEventEnd(t).stripZone();return e.start<i&&e.end>n};var ke={id:"_fcBusinessHours",start:"09:00",end:"17:00",dow:[1,2,3,4,5],rendering:"inverse-background"};De.prototype.getCurrentBusinessHourEvents=function(t){return this.computeBusinessHourEvents(t,this.options.businessHours)},De.prototype.computeBusinessHourEvents=function(e,n){return n===!0?this.expandBusinessHourEvents(e,[{}]):t.isPlainObject(n)?this.expandBusinessHourEvents(e,[n]):t.isArray(n)?this.expandBusinessHourEvents(e,n,!0):[]},De.prototype.expandBusinessHourEvents=function(e,n,i){var r,s,o=this.getView(),l=[];for(r=0;r<n.length;r++)s=n[r],i&&!s.dow||(s=t.extend({},ke,s),e&&(s.start=null,s.end=null),l.push.apply(l,this.expandEvent(this.buildEventFromInput(s),o.start,o.end)));return l};var Le=qt.BasicView=Ee.extend({scroller:null,dayGridClass:Se,dayGrid:null,dayNumbersVisible:!1,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1,weekNumberWidth:null,headContainerEl:null,headRowEl:null,initialize:function(){this.dayGrid=this.instantiateDayGrid(),this.scroller=new be({overflowX:"hidden",overflowY:"auto"})},instantiateDayGrid:function(){var t=this.dayGridClass.extend(Me);return new t(this)},setRange:function(t){Ee.prototype.setRange.call(this,t),this.dayGrid.breakOnWeeks=/year|month|week/.test(this.intervalUnit),this.dayGrid.setRange(t)},computeRange:function(t){var e=Ee.prototype.computeRange.call(this,t);return/year|month/.test(e.intervalUnit)&&(e.start.startOf("week"),e.start=this.skipHiddenDays(e.start),e.end.weekday()&&(e.end.add(1,"week").startOf("week"),e.end=this.skipHiddenDays(e.end,-1,!0))),e},renderDates:function(){this.dayNumbersVisible=this.dayGrid.rowCnt>1,this.opt("weekNumbers")&&(this.opt("weekNumbersWithinDays")?(this.cellWeekNumbersVisible=!0,this.colWeekNumbersVisible=!1):(this.cellWeekNumbersVisible=!1,this.colWeekNumbersVisible=!0)),this.dayGrid.numbersVisible=this.dayNumbersVisible||this.cellWeekNumbersVisible||this.colWeekNumbersVisible,this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var e=this.scroller.el.addClass("fc-day-grid-container"),n=t('<div class="fc-day-grid" />').appendTo(e);this.el.find(".fc-body > tr > td").append(e),this.dayGrid.setElement(n),this.dayGrid.renderDates(this.hasRigidRows())},renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()),this.headRowEl=this.headContainerEl.find(".fc-row")},unrenderDates:function(){this.dayGrid.unrenderDates(),this.dayGrid.removeElement(),this.scroller.destroy()},renderBusinessHours:function(){this.dayGrid.renderBusinessHours()},unrenderBusinessHours:function(){this.dayGrid.unrenderBusinessHours()},renderSkeletonHtml:function(){return'<table><thead class="fc-head"><tr><td class="fc-head-container '+this.widgetHeaderClass+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'"></td></tr></tbody></table>'},weekNumberStyleAttr:function(){return null!==this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},hasRigidRows:function(){var t=this.opt("eventLimit");return t&&"number"!=typeof t},updateWidth:function(){this.colWeekNumbersVisible&&(this.weekNumberWidth=u(this.el.find(".fc-week-number")))},setHeight:function(t,e){var n,s,o=this.opt("eventLimit");this.scroller.clear(),r(this.headRowEl),this.dayGrid.removeSegPopover(),o&&"number"==typeof o&&this.dayGrid.limitRows(o),n=this.computeScrollerHeight(t),this.setGridHeight(n,e),o&&"number"!=typeof o&&this.dayGrid.limitRows(o),e||(this.scroller.setHeight(n),s=this.scroller.getScrollbarWidths(),(s.left||s.right)&&(i(this.headRowEl,s),n=this.computeScrollerHeight(t),this.scroller.setHeight(n)),this.scroller.lockOverflow(s))},computeScrollerHeight:function(t){return t-c(this.el,this.scroller.el)},setGridHeight:function(t,e){e?a(this.dayGrid.rowEls):l(this.dayGrid.rowEls,t,!0)},computeInitialScroll:function(){return{top:0}},queryScroll:function(){return{top:this.scroller.getScrollTop()}},setScroll:function(t){this.scroller.setScrollTop(t.top)},prepareHits:function(){this.dayGrid.prepareHits()},releaseHits:function(){this.dayGrid.releaseHits()},queryHit:function(t,e){return this.dayGrid.queryHit(t,e)},getHitSpan:function(t){return this.dayGrid.getHitSpan(t)},getHitEl:function(t){return this.dayGrid.getHitEl(t)},renderEvents:function(t){this.dayGrid.renderEvents(t),this.updateHeight()},getEventSegs:function(){return this.dayGrid.getEventSegs()},unrenderEvents:function(){this.dayGrid.unrenderEvents()},renderDrag:function(t,e){return this.dayGrid.renderDrag(t,e)},unrenderDrag:function(){this.dayGrid.unrenderDrag()},renderSelection:function(t){this.dayGrid.renderSelection(t)},unrenderSelection:function(){this.dayGrid.unrenderSelection()}}),Me={renderHeadIntroHtml:function(){var t=this.view;return t.colWeekNumbersVisible?'<th class="fc-week-number '+t.widgetHeaderClass+'" '+t.weekNumberStyleAttr()+"><span>"+tt(t.opt("weekNumberTitle"))+"</span></th>":""},renderNumberIntroHtml:function(t){var e=this.view,n=this.getCellDate(t,0);return e.colWeekNumbersVisible?'<td class="fc-week-number" '+e.weekNumberStyleAttr()+">"+e.buildGotoAnchorHtml({date:n,type:"week",forceOff:1===this.colCnt},n.format("w"))+"</td>":""},renderBgIntroHtml:function(){var t=this.view;return t.colWeekNumbersVisible?'<td class="fc-week-number '+t.widgetContentClass+'" '+t.weekNumberStyleAttr()+"></td>":""},renderIntroHtml:function(){var t=this.view;return t.colWeekNumbersVisible?'<td class="fc-week-number" '+t.weekNumberStyleAttr()+"></td>":""}},Be=qt.MonthView=Le.extend({computeRange:function(t){var e,n=Le.prototype.computeRange.call(this,t);return this.isFixedWeeks()&&(e=Math.ceil(n.end.diff(n.start,"weeks",!0)),n.end.add(6-e,"weeks")),n},setGridHeight:function(t,e){e&&(t*=this.rowCnt/6),l(this.dayGrid.rowEls,t,!e)},isFixedWeeks:function(){return this.opt("fixedWeekCount")}});Zt.basic={class:Le},Zt.basicDay={type:"basic",duration:{days:1}},Zt.basicWeek={type:"basic",duration:{weeks:1}},Zt.month={class:Be,duration:{months:1},defaults:{fixedWeekCount:!0}};var ze=qt.AgendaView=Ee.extend({scroller:null,timeGridClass:we,timeGrid:null,dayGridClass:Se,dayGrid:null,axisWidth:null,headContainerEl:null,noScrollRowEls:null,bottomRuleEl:null,initialize:function(){this.timeGrid=this.instantiateTimeGrid(),this.opt("allDaySlot")&&(this.dayGrid=this.instantiateDayGrid()),this.scroller=new be({overflowX:"hidden",overflowY:"auto"})},instantiateTimeGrid:function(){var t=this.timeGridClass.extend(Fe);return new t(this)},instantiateDayGrid:function(){var t=this.dayGridClass.extend(Ne);return new t(this)},setRange:function(t){Ee.prototype.setRange.call(this,t),this.timeGrid.setRange(t),this.dayGrid&&this.dayGrid.setRange(t)},renderDates:function(){this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var e=this.scroller.el.addClass("fc-time-grid-container"),n=t('<div class="fc-time-grid" />').appendTo(e);this.el.find(".fc-body > tr > td").append(e),this.timeGrid.setElement(n),this.timeGrid.renderDates(),this.bottomRuleEl=t('<hr class="fc-divider '+this.widgetHeaderClass+'"/>').appendTo(this.timeGrid.el),this.dayGrid&&(this.dayGrid.setElement(this.el.find(".fc-day-grid")),this.dayGrid.renderDates(),this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight()),this.noScrollRowEls=this.el.find(".fc-row:not(.fc-scroller *)")},renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())},unrenderDates:function(){this.timeGrid.unrenderDates(),this.timeGrid.removeElement(),this.dayGrid&&(this.dayGrid.unrenderDates(),this.dayGrid.removeElement()),this.scroller.destroy()},renderSkeletonHtml:function(){return'<table><thead class="fc-head"><tr><td class="fc-head-container '+this.widgetHeaderClass+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="fc-divider '+this.widgetHeaderClass+'"/>':"")+"</td></tr></tbody></table>"},axisStyleAttr:function(){return null!==this.axisWidth?'style="width:'+this.axisWidth+'px"':""},renderBusinessHours:function(){this.timeGrid.renderBusinessHours(),this.dayGrid&&this.dayGrid.renderBusinessHours()},unrenderBusinessHours:function(){this.timeGrid.unrenderBusinessHours(),this.dayGrid&&this.dayGrid.unrenderBusinessHours()},getNowIndicatorUnit:function(){return this.timeGrid.getNowIndicatorUnit()},renderNowIndicator:function(t){this.timeGrid.renderNowIndicator(t)},unrenderNowIndicator:function(){this.timeGrid.unrenderNowIndicator()},updateSize:function(t){this.timeGrid.updateSize(t),Ee.prototype.updateSize.call(this,t)},updateWidth:function(){this.axisWidth=u(this.el.find(".fc-axis"))},setHeight:function(t,e){var n,s,o;this.bottomRuleEl.hide(),this.scroller.clear(),r(this.noScrollRowEls),this.dayGrid&&(this.dayGrid.removeSegPopover(),n=this.opt("eventLimit"),n&&"number"!=typeof n&&(n=Ge),n&&this.dayGrid.limitRows(n)),e||(s=this.computeScrollerHeight(t),this.scroller.setHeight(s),o=this.scroller.getScrollbarWidths(),(o.left||o.right)&&(i(this.noScrollRowEls,o),s=this.computeScrollerHeight(t),this.scroller.setHeight(s)),this.scroller.lockOverflow(o),this.timeGrid.getTotalSlatHeight()<s&&this.bottomRuleEl.show())},computeScrollerHeight:function(t){return t-c(this.el,this.scroller.el)},computeInitialScroll:function(){var t=e.duration(this.opt("scrollTime")),n=this.timeGrid.computeTimeTop(t);return n=Math.ceil(n),n&&n++,{top:n}},queryScroll:function(){return{top:this.scroller.getScrollTop()}},setScroll:function(t){this.scroller.setScrollTop(t.top)},prepareHits:function(){this.timeGrid.prepareHits(),this.dayGrid&&this.dayGrid.prepareHits()},releaseHits:function(){this.timeGrid.releaseHits(),this.dayGrid&&this.dayGrid.releaseHits()},queryHit:function(t,e){var n=this.timeGrid.queryHit(t,e);return!n&&this.dayGrid&&(n=this.dayGrid.queryHit(t,e)),n},getHitSpan:function(t){return t.component.getHitSpan(t)},getHitEl:function(t){return t.component.getHitEl(t)},renderEvents:function(t){var e,n,i=[],r=[],s=[];for(n=0;n<t.length;n++)t[n].allDay?i.push(t[n]):r.push(t[n]);e=this.timeGrid.renderEvents(r),this.dayGrid&&(s=this.dayGrid.renderEvents(i)),this.updateHeight()},getEventSegs:function(){return this.timeGrid.getEventSegs().concat(this.dayGrid?this.dayGrid.getEventSegs():[])},unrenderEvents:function(){this.timeGrid.unrenderEvents(),this.dayGrid&&this.dayGrid.unrenderEvents()},renderDrag:function(t,e){return t.start.hasTime()?this.timeGrid.renderDrag(t,e):this.dayGrid?this.dayGrid.renderDrag(t,e):void 0},unrenderDrag:function(){this.timeGrid.unrenderDrag(),this.dayGrid&&this.dayGrid.unrenderDrag()},renderSelection:function(t){t.start.hasTime()||t.end.hasTime()?this.timeGrid.renderSelection(t):this.dayGrid&&this.dayGrid.renderSelection(t)},unrenderSelection:function(){this.timeGrid.unrenderSelection(),this.dayGrid&&this.dayGrid.unrenderSelection()}}),Fe={renderHeadIntroHtml:function(){var t,e=this.view;return e.opt("weekNumbers")?(t=this.start.format(e.opt("smallWeekFormat")),'<th class="fc-axis fc-week-number '+e.widgetHeaderClass+'" '+e.axisStyleAttr()+">"+e.buildGotoAnchorHtml({date:this.start,type:"week",forceOff:this.colCnt>1},tt(t))+"</th>"):'<th class="fc-axis '+e.widgetHeaderClass+'" '+e.axisStyleAttr()+"></th>"},renderBgIntroHtml:function(){var t=this.view;return'<td class="fc-axis '+t.widgetContentClass+'" '+t.axisStyleAttr()+"></td>"},renderIntroHtml:function(){var t=this.view;return'<td class="fc-axis" '+t.axisStyleAttr()+"></td>"}},Ne={renderBgIntroHtml:function(){var t=this.view;return'<td class="fc-axis '+t.widgetContentClass+'" '+t.axisStyleAttr()+"><span>"+t.getAllDayHtml()+"</span></td>"},renderIntroHtml:function(){var t=this.view;return'<td class="fc-axis" '+t.axisStyleAttr()+"></td>"}},Ge=5,Oe=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];Zt.agenda={class:ze,defaults:{allDaySlot:!0,slotDuration:"00:30:00",minTime:"00:00:00",maxTime:"24:00:00",slotEventOverlap:!0}},Zt.agendaDay={type:"agenda",duration:{days:1}},Zt.agendaWeek={type:"agenda",duration:{weeks:1}};var Ae=Ee.extend({grid:null,scroller:null,initialize:function(){this.grid=new Ve(this),this.scroller=new be({overflowX:"hidden",overflowY:"auto"})},setRange:function(t){Ee.prototype.setRange.call(this,t),this.grid.setRange(t)},renderSkeleton:function(){this.el.addClass("fc-list-view "+this.widgetContentClass),this.scroller.render(),this.scroller.el.appendTo(this.el),this.grid.setElement(this.scroller.scrollEl)},unrenderSkeleton:function(){this.scroller.destroy()},setHeight:function(t,e){this.scroller.setHeight(this.computeScrollerHeight(t))},computeScrollerHeight:function(t){return t-c(this.el,this.scroller.el);
},renderEvents:function(t){this.grid.renderEvents(t)},unrenderEvents:function(){this.grid.unrenderEvents()},isEventResizable:function(t){return!1},isEventDraggable:function(t){return!1}}),Ve=me.extend({segSelector:".fc-list-item",hasDayInteractions:!1,spanToSegs:function(t){for(var e,n=this.view,i=n.start.clone().time(0),r=0,s=[];i<n.end;)if(e=F(t,{start:i,end:i.clone().add(1,"day")}),e&&(e.dayIndex=r,s.push(e)),i.add(1,"day"),r++,e&&!e.isEnd&&t.end.hasTime()&&t.end<i.clone().add(this.view.nextDayThreshold)){e.end=t.end.clone(),e.isEnd=!0;break}return s},computeEventTimeFormat:function(){return this.view.opt("mediumTimeFormat")},handleSegClick:function(e,n){var i;me.prototype.handleSegClick.apply(this,arguments),t(n.target).closest("a[href]").length||(i=e.event.url,i&&!n.isDefaultPrevented()&&(window.location.href=i))},renderFgSegs:function(t){return t=this.renderFgSegEls(t),t.length?this.renderSegList(t):this.renderEmptyMessage(),t},renderEmptyMessage:function(){this.el.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+tt(this.view.opt("noEventsMessage"))+"</div></div></div>")},renderSegList:function(e){var n,i,r,s=this.groupSegsByDay(e),o=t('<table class="fc-list-table"><tbody/></table>'),l=o.find("tbody");for(n=0;n<s.length;n++)if(i=s[n])for(l.append(this.dayHeaderHtml(this.view.start.clone().add(n,"days"))),this.sortEventSegs(i),r=0;r<i.length;r++)l.append(i[r].el);this.el.empty().append(o)},groupSegsByDay:function(t){var e,n,i=[];for(e=0;e<t.length;e++)n=t[e],(i[n.dayIndex]||(i[n.dayIndex]=[])).push(n);return i},dayHeaderHtml:function(t){var e=this.view,n=e.opt("listDayFormat"),i=e.opt("listDayAltFormat");return'<tr class="fc-list-heading" data-date="'+t.format("YYYY-MM-DD")+'"><td class="'+e.widgetHeaderClass+'" colspan="3">'+(n?e.buildGotoAnchorHtml(t,{class:"fc-list-heading-main"},tt(t.format(n))):"")+(i?e.buildGotoAnchorHtml(t,{class:"fc-list-heading-alt"},tt(t.format(i))):"")+"</td></tr>"},fgSegHtml:function(t){var e,n=this.view,i=["fc-list-item"].concat(this.getSegCustomClasses(t)),r=this.getSegBackgroundColor(t),s=t.event,o=s.url;return e=s.allDay?n.getAllDayHtml():n.isMultiDayEvent(s)?t.isStart||t.isEnd?tt(this.getEventTimeText(t)):n.getAllDayHtml():tt(this.getEventTimeText(s)),o&&i.push("fc-has-url"),'<tr class="'+i.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+n.widgetContentClass+'">'+(e||"")+"</td>":"")+'<td class="fc-list-item-marker '+n.widgetContentClass+'"><span class="fc-event-dot"'+(r?' style="background-color:'+r+'"':"")+'></span></td><td class="fc-list-item-title '+n.widgetContentClass+'"><a'+(o?' href="'+tt(o)+'"':"")+">"+tt(t.event.title||"")+"</a></td></tr>"}});return Zt.list={class:Ae,buttonTextKey:"list",defaults:{buttonText:"list",listDayFormat:"LL",noEventsMessage:"No events to display"}},Zt.listDay={type:"list",duration:{days:1},defaults:{listDayFormat:"dddd"}},Zt.listWeek={type:"list",duration:{weeks:1},defaults:{listDayFormat:"dddd",listDayAltFormat:"LL"}},Zt.listMonth={type:"list",duration:{month:1},defaults:{listDayAltFormat:"dddd"}},Zt.listYear={type:"list",duration:{year:1},defaults:{listDayAltFormat:"dddd"}},qt});
!function t(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Raphael=r():e.Raphael=r()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var i,n;i=[r(1),r(3),r(4)],n=function(t){return t}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(2)],n=function(t){function e(r){if(e.is(r,"function"))return w?r():t.on("raphael.DOMload",r);if(e.is(r,Q))return e._engine.create[z](e,r.splice(0,3+e.is(r[0],$))).add(r);var i=Array.prototype.slice.call(arguments,0);if(e.is(i[i.length-1],"function")){var n=i.pop();return w?n.call(e._engine.create[z](e,i)):t.on("raphael.DOMload",function(){n.call(e._engine.create[z](e,i))})}return e._engine.create[z](e,arguments)}function r(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var i in t)t[T](i)&&(e[i]=r(t[i]));return e}function i(t,e){for(var r=0,i=t.length;i>r;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function n(t,e,r){function n(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=n.cache=n.cache||{},l=n.count=n.count||[];return o[T](s)?(i(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[z](e,a),r?r(o[s]):o[s])}return n}function a(){return this.hex}function s(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function o(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function l(t,e,r,i,n,a,s,l,h){null==h&&(h=1),h=h>1?1:0>h?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;c>g;g++){var x=u*f[g]+u,v=o(x,t,r,n,s),y=o(x,e,i,a,l),m=v*v+y*y;d+=p[g]*Y.sqrt(m)}return u*d}function h(t,e,r,i,n,a,s,o,h){if(!(0>h||l(t,e,r,i,n,a,s,o)<h)){var u=1,c=u/2,f=u-c,p,d=.01;for(p=l(t,e,r,i,n,a,s,o,f);H(p-h)>d;)c/=2,f+=(h>p?1:-1)*c,p=l(t,e,r,i,n,a,s,o,f);return f}}function u(t,e,r,i,n,a,s,o){if(!(W(t,r)<G(n,s)||G(t,r)>W(n,s)||W(e,i)<G(a,o)||G(e,i)>W(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p<+G(t,r).toFixed(2)||p>+W(t,r).toFixed(2)||p<+G(n,s).toFixed(2)||p>+W(n,s).toFixed(2)||d<+G(e,i).toFixed(2)||d>+W(e,i).toFixed(2)||d<+G(a,o).toFixed(2)||d>+W(a,o).toFixed(2)))return{x:c,y:f}}}}function c(t,e){return p(t,e)}function f(t,e){return p(t,e,1)}function p(t,r,i){var n=e.bezierBBox(t),a=e.bezierBBox(r);if(!e.isBBoxIntersect(n,a))return i?0:[];for(var s=l.apply(0,t),o=l.apply(0,r),h=W(~~(s/5),1),c=W(~~(o/5),1),f=[],p=[],d={},g=i?0:[],x=0;h+1>x;x++){var v=e.findDotsAtSegment.apply(e,t.concat(x/h));f.push({x:v.x,y:v.y,t:x/h})}for(x=0;c+1>x;x++)v=e.findDotsAtSegment.apply(e,r.concat(x/c)),p.push({x:v.x,y:v.y,t:x/c});for(x=0;h>x;x++)for(var y=0;c>y;y++){var m=f[x],b=f[x+1],_=p[y],w=p[y+1],k=H(b.x-m.x)<.001?"y":"x",B=H(w.x-_.x)<.001?"y":"x",C=u(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(C){if(d[C.x.toFixed(4)]==C.y.toFixed(4))continue;d[C.x.toFixed(4)]=C.y.toFixed(4);var S=m.t+H((C[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),T=_.t+H((C[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);S>=0&&1.001>=S&&T>=0&&1.001>=T&&(i?g++:g.push({x:C.x,y:C.y,t1:G(S,1),t2:G(T,1)}))}}return g}function d(t,r,i){t=e._path2curve(t),r=e._path2curve(r);for(var n,a,s,o,l,h,u,c,f,d,g=i?0:[],x=0,v=t.length;v>x;x++){var y=t[x];if("M"==y[0])n=l=y[1],a=h=y[2];else{"C"==y[0]?(f=[n,a].concat(y.slice(1)),n=f[6],a=f[7]):(f=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=r.length;b>m;m++){var _=r[m];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=p(f,d,i);if(i)g+=w;else{for(var k=0,B=w.length;B>k;k++)w[k].segment1=x,w[k].segment2=m,w[k].bez1=f,w[k].bez2=d;g=g.concat(w)}}}}}return g}function g(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function x(){return this.x+I+this.y}function v(){return this.x+I+this.y+I+this.width+" × "+this.height}function y(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;8>l;l++){if(a=s(n)-t,H(a)<e)return n;if(o=(3*c*n+2*u)*n+h,H(o)<1e-6)break;n-=a/o}if(r=0,i=1,n=t,r>n)return r;if(n>i)return i;for(;i>r;){if(a=s(n),H(a-t)<e)return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function m(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[T](n)&&(i[ht(n)]=t[n],r.push(ht(n)));r.sort(Bt)}this.anim=i,this.top=r[r.length-1],this.percents=r}function b(r,i,n,a,s,o){n=ht(n);var l,h,u,c=[],f,p,d,x=r.ms,v={},m={},b={};if(a)for(w=0,B=Ee.length;B>w;w++){var _=Ee[w];if(_.el.id==i.id&&_.anim==r){_.percent!=n?(Ee.splice(w,1),u=1):h=_,i.attr(_.totalOrigin);break}}else a=+m;for(var w=0,B=r.percents.length;B>w;w++){if(r.percents[w]==n||r.percents[w]>a*r.top){n=r.percents[w],p=r.percents[w-1]||0,x=x/r.top*(n-p),f=r.percents[w+1],l=r.anim[n];break}a&&i.attr(r.anim[r.percents[w]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var C in l)if(l[T](C)&&(pt[T](C)||i.paper.customAttributes[T](C)))switch(v[C]=i.attr(C),null==v[C]&&(v[C]=ft[C]),m[C]=l[C],pt[C]){case $:b[C]=(m[C]-v[C])/x;break;case"colour":v[C]=e.getRGB(v[C]);var S=e.getRGB(m[C]);b[C]={r:(S.r-v[C].r)/x,g:(S.g-v[C].g)/x,b:(S.b-v[C].b)/x};break;case"path":var A=Qt(v[C],m[C]),E=A[1];for(v[C]=A[0],b[C]=[],w=0,B=v[C].length;B>w;w++){b[C][w]=[0];for(var N=1,M=v[C][w].length;M>N;N++)b[C][w][N]=(E[w][N]-v[C][w][N])/x}break;case"transform":var L=i._,z=le(L[C],m[C]);if(z)for(v[C]=z.from,m[C]=z.to,b[C]=[],b[C].real=!0,w=0,B=v[C].length;B>w;w++)for(b[C][w]=[v[C][w][0]],N=1,M=v[C][w].length;M>N;N++)b[C][w][N]=(m[C][w][N]-v[C][w][N])/x;else{var F=i.matrix||new g,R={_:{transform:L.transform},getBBox:function(){return i.getBBox(1)}};v[C]=[F.a,F.b,F.c,F.d,F.e,F.f],se(R,m[C]),m[C]=R._.transform,b[C]=[(R.matrix.a-F.a)/x,(R.matrix.b-F.b)/x,(R.matrix.c-F.c)/x,(R.matrix.d-F.d)/x,(R.matrix.e-F.e)/x,(R.matrix.f-F.f)/x]}break;case"csv":var I=j(l[C])[q](k),D=j(v[C])[q](k);if("clip-rect"==C)for(v[C]=D,b[C]=[],w=D.length;w--;)b[C][w]=(I[w]-v[C][w])/x;m[C]=I;break;default:for(I=[][P](l[C]),D=[][P](v[C]),b[C]=[],w=i.paper.customAttributes[C].length;w--;)b[C][w]=((I[w]||0)-(D[w]||0))/x}var V=l.easing,O=e.easing_formulas[V];if(!O)if(O=j(V).match(st),O&&5==O.length){var Y=O;O=function(t){return y(t,+Y[1],+Y[2],+Y[3],+Y[4],x)}}else O=St;if(d=l.start||r.start||+new Date,_={anim:r,percent:n,timestamp:d,start:d+(r.del||0),status:0,initstatus:a||0,stop:!1,ms:x,easing:O,from:v,diff:b,to:m,el:i,callback:l.callback,prev:p,next:f,repeat:o||r.times,origin:i.attr(),totalOrigin:s},Ee.push(_),a&&!h&&!u&&(_.stop=!0,_.start=new Date-x*a,1==Ee.length))return Me();u&&(_.start=new Date-_.ms*a),1==Ee.length&&Ne(Me)}t("raphael.anim.start."+i.id,i,r)}}function _(t){for(var e=0;e<Ee.length;e++)Ee[e].el.paper==t&&Ee.splice(e--,1)}e.version="2.2.0",e.eve=t;var w,k=/[, ]+/,B={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,S="prototype",T="hasOwnProperty",A={doc:document,win:window},E={was:Object.prototype[T].call(A.win,"Raphael"),is:A.win.Raphael},N=function(){this.ca=this.customAttributes={}},M,L="appendChild",z="apply",P="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,R="",I=" ",j=String,q="split",D="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[q](I),V={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},O=j.prototype.toLowerCase,Y=Math,W=Y.max,G=Y.min,H=Y.abs,X=Y.pow,U=Y.PI,$="number",Z="string",Q="array",J="toString",K="fill",tt=Object.prototype.toString,et={},rt="push",it=e._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,nt=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,at={NaN:1,Infinity:1,"-Infinity":1},st=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,ot=Y.round,lt="setAttribute",ht=parseFloat,ut=parseInt,ct=j.prototype.toUpperCase,ft=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0,"class":""},pt=e._availableAnimAttrs={blur:$,"clip-rect":"csv",cx:$,cy:$,fill:"colour","fill-opacity":$,"font-size":$,height:$,opacity:$,path:"path",r:$,rx:$,ry:$,stroke:"colour","stroke-opacity":$,"stroke-width":$,transform:"transform",width:$,x:$,y:$},dt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,gt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,xt={hs:1,rg:1},vt=/,?([achlmqrstvxz]),?/gi,yt=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,mt=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,bt=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,_t=e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,wt={},kt=function(t,e){return t.key-e.key},Bt=function(t,e){return ht(t)-ht(e)},Ct=function(){},St=function(t){return t},Tt=e._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},At=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},Et=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return At(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return At(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return Tt(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return Tt(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return Tt(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return Tt(e.x,e.y,e.width,e.height)}},Nt=e.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Qt(t),n=0,s=t.length;s>n;n++)for(l=t[n],a=1,o=l.length;o>a;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(e._g=A,e.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var Mt=A.doc.createElement("div"),Lt;if(Mt.innerHTML='<v:shape adj="1"/>',Lt=Mt.firstChild,Lt.style.behavior="url(#default#VML)",!Lt||"object"!=typeof Lt.adj)return e.type=R;Mt=null}e.svg=!(e.vml="VML"==e.type),e._Paper=N,e.fn=M=N.prototype=e.prototype,e._id=0,e._oid=0,e.is=function(t,e){return e=O.call(e),"finite"==e?!at[T](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||tt.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,r,i,n,a,s){if(null==a){var o=t-i,l=r-n;return o||l?(180+180*Y.atan2(-l,-o)/U+360)%360:0}return e.angle(t,r,a,s)-e.angle(i,n,a,s)},e.rad=function(t){return t%360*U/180},e.deg=function(t){return Math.round(180*t/U%360*1e3)/1e3},e.snapTo=function(t,r,i){if(i=e.is(i,"finite")?i:10,e.is(t,Q)){for(var n=t.length;n--;)if(H(t[n]-r)<=i)return t[n]}else{t=+t;var a=r%t;if(i>a)return r-a;if(a>t-i)return r-a+t}return r};var zt=e.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*Y.random()|0,r="x"==t?e:3&e|8;return r.toString(16)});e.setWindow=function(r){t("raphael.setWindow",e,A.win,r),A.win=r,A.doc=A.win.document,e._engine.initWin&&e._engine.initWin(A.win)};var Pt=function(t){if(e.vml){var r=/^\s+|\s+$/g,i;try{var a=new ActiveXObject("htmlfile");a.write("<body>"),a.close(),i=a.body}catch(s){i=createPopup().document.body}var o=i.createTextRange();Pt=n(function(t){try{i.style.color=j(t).replace(r,R);var e=o.queryCommandValue("ForeColor");return e=(255&e)<<16|65280&e|(16711680&e)>>>16,"#"+("000000"+e.toString(16)).slice(-6)}catch(n){return"none"}})}else{var l=A.doc.createElement("i");l.title="Raphaël Colour Picker",l.style.display="none",A.doc.body.appendChild(l),Pt=n(function(t){return l.style.color=t,A.doc.defaultView.getComputedStyle(l,R).getPropertyValue("color")})}return Pt(t)},Ft=function(){return"hsb("+[this.h,this.s,this.b]+")"},Rt=function(){return"hsl("+[this.h,this.s,this.l]+")"},It=function(){return this.hex},jt=function(t,r,i){if(null==r&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,r=t.g,t=t.r),null==r&&e.is(t,Z)){var n=e.getRGB(t);t=n.r,r=n.g,i=n.b}return(t>1||r>1||i>1)&&(t/=255,r/=255,i/=255),[t,r,i]},qt=function(t,r,i,n){t*=255,r*=255,i*=255;var a={r:t,g:r,b:i,hex:e.rgb(t,r,i),toString:It};return e.is(n,"finite")&&(a.opacity=n),a};e.color=function(t){var r;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(r=e.hsb2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(r=e.hsl2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(r=e.rgb2hsl(t),t.h=r.h,t.s=r.s,t.l=r.l,r=e.rgb2hsb(t),t.v=r.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=It,t},e.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,i=t.o,t=t.h),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-H(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(.5>r?r:1-r),o=l*(1-H(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.rgb2hsb=function(t,e,r){r=jt(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=W(t,e,r),s=a-G(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:Ft}},e.rgb2hsl=function(t,e,r){r=jt(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=W(t,e,r),o=G(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:.5>a?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:Rt}},e._path2string=function(){return this.join(",").replace(vt,"$1")};var Dt=e._preload=function(t,e){var r=A.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,A.doc.body.removeChild(this)},r.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(r),r.src=t};e.getRGB=n(function(t){if(!t||(t=j(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:a};!(xt[T](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=Pt(t));var r,i,n,s,o,l,h,u=t.match(nt);return u?(u[2]&&(s=ut(u[2].substring(5),16),n=ut(u[2].substring(3,5),16),i=ut(u[2].substring(1,3),16)),u[3]&&(s=ut((l=u[3].charAt(3))+l,16),n=ut((l=u[3].charAt(2))+l,16),i=ut((l=u[3].charAt(1))+l,16)),u[4]&&(h=u[4][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),"rgba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100)),u[5]?(h=u[5][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsb2rgb(i,n,s,o)):u[6]?(h=u[6][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsla"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsl2rgb(i,n,s,o)):(u={r:i,g:n,b:s,toString:a},u.hex="#"+(16777216|s|n<<8|i<<16).toString(16).slice(1),e.is(o,"finite")&&(u.opacity=o),u)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a}},e),e.hsb=n(function(t,r,i){return e.hsb2rgb(t,r,i).hex}),e.hsl=n(function(t,r,i){return e.hsl2rgb(t,r,i).hex}),e.rgb=n(function(t,e,r){function i(t){return t+.5|0}return"#"+(16777216|i(r)|i(e)<<8|i(t)<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var r=Vt(t);if(r.arr)return Yt(r.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,Q)&&e.is(t[0],Q)&&(n=Yt(t)),n.length||j(t).replace(yt,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(bt,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][P](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][P](a));else for(;a.length>=i[s]&&(n.push([e][P](a.splice(0,i[s]))),i[s]););}),n.toString=e._path2string,r.arr=Yt(n),n},e.parseTransformString=n(function(t){if(!t)return null;var r={r:3,s:4,t:2,m:6},i=[];return e.is(t,Q)&&e.is(t[0],Q)&&(i=Yt(t)),i.length||j(t).replace(mt,function(t,e,r){var n=[],a=O.call(e);r.replace(bt,function(t,e){e&&n.push(+e)}),i.push([e][P](n))}),i.toString=e._path2string,i});var Vt=function(t){var e=Vt.ps=Vt.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[T](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};e.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=X(h,3),c=X(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,x=t+2*l*(r-t)+f*(n-2*r+t),v=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,B=90-180*Y.atan2(x-y,v-m)/U;return(x>y||m>v)&&(B+=180),{x:d,y:g,m:{x:x,y:v},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},e.bezierBBox=function(t,r,i,n,a,s,o,l){e.is(t,"array")||(t=[t,r,i,n,a,s,o,l]);var h=Zt.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},e.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},e.isBBoxIntersect=function(t,r){var i=e.isPointInsideBBox;return i(r,t.x,t.y)||i(r,t.x2,t.y)||i(r,t.x,t.y2)||i(r,t.x2,t.y2)||i(t,r.x,r.y)||i(t,r.x2,r.y)||i(t,r.x,r.y2)||i(t,r.x2,r.y2)||(t.x<r.x2&&t.x>r.x||r.x<t.x2&&r.x>t.x)&&(t.y<r.y2&&t.y>r.y||r.y<t.y2&&r.y>t.y)},e.pathIntersection=function(t,e){return d(t,e)},e.pathIntersectionNumber=function(t,e){return d(t,e,1)},e.isPointInsidePath=function(t,r,i){var n=e.pathBBox(t);return e.isPointInsideBBox(n,r,i)&&d(t,[["M",r,i],["H",n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var Ot=e.pathBBox=function(t){var e=Vt(t);if(e.bbox)return r(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Qt(t);for(var i=0,n=0,a=[],s=[],o,l=0,h=t.length;h>l;l++)if(o=t[l],"M"==o[0])i=o[1],n=o[2],a.push(i),s.push(n);else{var u=Zt(i,n,o[1],o[2],o[3],o[4],o[5],o[6]);a=a[P](u.min.x,u.max.x),s=s[P](u.min.y,u.max.y),i=o[5],n=o[6]}var c=G[z](0,a),f=G[z](0,s),p=W[z](0,a),d=W[z](0,s),g=p-c,x=d-f,v={x:c,y:f,x2:p,y2:d,width:g,height:x,cx:c+g/2,cy:f+x/2};return e.bbox=r(v),v},Yt=function(t){var i=r(t);return i.toString=e._path2string,i},Wt=e._pathToRelative=function(t){var r=Vt(t);if(r.rel)return Yt(r.rel);e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));for(var h=l,u=t.length;u>h;h++){var c=i[h]=[],f=t[h];if(f[0]!=O.call(f[0]))switch(c[0]=O.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;d>p;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,x=f.length;x>g;g++)i[h][g]=f[g]}var v=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][v-1];break;case"v":a+=+i[h][v-1];break;default:n+=+i[h][v-2],a+=+i[h][v-1]}}return i.toString=e._path2string,r.rel=Yt(i),i},Gt=e._pathToAbsolute=function(t){var r=Vt(t);if(r.abs)return Yt(r.abs);if(e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,o=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],o=n,l=a,h++,i[0]=["M",n,a]);for(var u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),c,f,p=h,d=t.length;d>p;p++){if(i.push(c=[]),f=t[p],f[0]!=ct.call(f[0]))switch(c[0]=ct.call(f[0]),c[0]){case"A":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]+n),c[7]=+(f[7]+a);break;case"V":c[1]=+f[1]+a;break;case"H":c[1]=+f[1]+n;break;case"R":for(var g=[n,a][P](f.slice(1)),x=2,v=g.length;v>x;x++)g[x]=+g[x]+n,g[++x]=+g[x]+a;i.pop(),i=i[P](s(g,u));break;case"M":o=+f[1]+n,l=+f[2]+a;default:for(x=1,v=f.length;v>x;x++)c[x]=+f[x]+(x%2?n:a)}else if("R"==f[0])g=[n,a][P](f.slice(1)),i.pop(),i=i[P](s(g,u)),c=["R"][P](f.slice(-2));else for(var y=0,m=f.length;m>y;y++)c[y]=f[y];switch(c[0]){case"Z":n=o,a=l;break;case"H":n=c[1];break;case"V":a=c[1];break;case"M":o=c[c.length-2],l=c[c.length-1];default:n=c[c.length-2],a=c[c.length-1]}}return i.toString=e._path2string,r.abs=Yt(i),i},Ht=function(t,e,r,i){return[t,e,r,i,r,i]},Xt=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Ut=function(t,e,r,i,a,s,o,l,h,u){var c=120*U/180,f=U/180*(+a||0),p=[],d,g=n(function(t,e,r){var i=t*Y.cos(r)-e*Y.sin(r),n=t*Y.sin(r)+e*Y.cos(r);return{x:i,y:n}});if(u)S=u[0],T=u[1],B=u[2],C=u[3];else{d=g(t,e,-f),t=d.x,e=d.y,d=g(l,h,-f),l=d.x,h=d.y;var x=Y.cos(U/180*a),v=Y.sin(U/180*a),y=(t-l)/2,m=(e-h)/2,b=y*y/(r*r)+m*m/(i*i);b>1&&(b=Y.sqrt(b),r=b*r,i=b*i);var _=r*r,w=i*i,k=(s==o?-1:1)*Y.sqrt(H((_*w-_*m*m-w*y*y)/(_*m*m+w*y*y))),B=k*r*m/i+(t+l)/2,C=k*-i*y/r+(e+h)/2,S=Y.asin(((e-C)/i).toFixed(9)),T=Y.asin(((h-C)/i).toFixed(9));S=B>t?U-S:S,T=B>l?U-T:T,0>S&&(S=2*U+S),0>T&&(T=2*U+T),o&&S>T&&(S-=2*U),!o&&T>S&&(T-=2*U)}var A=T-S;if(H(A)>c){var E=T,N=l,M=h;T=S+c*(o&&T>S?1:-1),l=B+r*Y.cos(T),h=C+i*Y.sin(T),p=Ut(l,h,r,i,a,0,o,N,M,[T,E,B,C])}A=T-S;var L=Y.cos(S),z=Y.sin(S),F=Y.cos(T),R=Y.sin(T),I=Y.tan(A/4),j=4/3*r*I,D=4/3*i*I,V=[t,e],O=[t+j*z,e-D*L],W=[l+j*R,h-D*F],G=[l,h];if(O[0]=2*V[0]-O[0],O[1]=2*V[1]-O[1],u)return[O,W,G][P](p);p=[O,W,G][P](p).join()[q](",");for(var X=[],$=0,Z=p.length;Z>$;$++)X[$]=$%2?g(p[$-1],p[$],f).y:g(p[$],p[$+1],f).x;return X},$t=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:X(h,3)*t+3*X(h,2)*l*r+3*h*l*l*n+X(l,3)*s,y:X(h,3)*e+3*X(h,2)*l*i+3*h*l*l*a+X(l,3)*o}},Zt=n(function(t,e,r,i,n,a,s,o){var l=n-2*r+t-(s-2*n+r),h=2*(r-t)-2*(n-r),u=t-r,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,p=[e,o],d=[t,s],g;return H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&1>c&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&1>f&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),l=a-2*i+e-(o-2*a+i),h=2*(i-e)-2*(a-i),u=e-i,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&1>c&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&1>f&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),{min:{x:G[z](0,d),y:G[z](0,p)},max:{x:W[z](0,d),y:W[z](0,p)}}}),Qt=e._path2curve=n(function(t,e){var r=!e&&Vt(t);if(!e&&r.curve)return Yt(r.curve);for(var i=Gt(t),n=e&&Gt(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var i,n,a={T:1,Q:1};if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in a)&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][P](Ut[z](0,[e.x,e.y][P](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][P](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][P](Xt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][P](Xt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][P](Ht(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][P](Ht(e.x,e.y,t[1],e.y));break;case"V":t=["C"][P](Ht(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][P](Ht(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)u[e]="A",n&&(c[e]="A"),t.splice(e++,0,["C"][P](r.splice(0,6)));t.splice(e,1),g=W(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],g=W(i.length,n&&n.length||0))},u=[],c=[],f="",p="",d=0,g=W(i.length,n&&n.length||0);g>d;d++){i[d]&&(f=i[d][0]),"C"!=f&&(u[d]=f,d&&(p=u[d-1])),i[d]=o(i[d],a,p),"A"!=u[d]&&"C"==f&&(u[d]="C"),l(i,d),n&&(n[d]&&(f=n[d][0]),"C"!=f&&(c[d]=f,d&&(p=c[d-1])),n[d]=o(n[d],s,p),"A"!=c[d]&&"C"==f&&(c[d]="C"),l(n,d)),h(i,n,a,s,d),h(n,i,s,a,d);var x=i[d],v=n&&n[d],y=x.length,m=n&&v.length;a.x=x[y-2],a.y=x[y-1],a.bx=ht(x[y-4])||a.x,a.by=ht(x[y-3])||a.y,s.bx=n&&(ht(v[m-4])||s.x),s.by=n&&(ht(v[m-3])||s.y),s.x=n&&v[m-2],s.y=n&&v[m-1]}return n||(r.curve=Yt(i)),n?[i,n]:i},null,Yt),Jt=e._parseDots=n(function(t){for(var r=[],i=0,n=t.length;n>i;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.opacity=a.color.opacity,a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),r.push(a)}for(i=1,n=r.length-1;n>i;i++)if(!r[i].offset){for(var o=ht(r[i-1].offset||0),l=0,h=i+1;n>h;h++)if(r[h].offset){l=r[h].offset;break}l||(l=100,h=n),l=ht(l);for(var u=(l-o)/(h-i+1);h>i;i++)o+=u,r[i].offset=o+"%"}return r}),Kt=e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)},te=e._tofront=function(t,e){e.top!==t&&(Kt(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},ee=e._toback=function(t,e){e.bottom!==t&&(Kt(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},re=e._insertafter=function(t,e,r){Kt(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},ie=e._insertbefore=function(t,e,r){Kt(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},ne=e.toMatrix=function(t,e){var r=Ot(t),i={_:{transform:R},getBBox:function(){return r}};return se(i,e),i.matrix},ae=e.transformPath=function(t,e){return Nt(t,ne(t,e))},se=e._extractTransform=function(t,r){if(null==r)return t._.transform;r=j(r).replace(/\.{3}|\u2026/g,t._.transform||R);var i=e.parseTransformString(r),n=0,a=0,s=0,o=1,l=1,h=t._,u=new g;if(h.transform=i||[],i)for(var c=0,f=i.length;f>c;c++){var p=i[c],d=p.length,x=j(p[0]).toLowerCase(),v=p[0]!=x,y=v?u.invert():0,m,b,_,w,k;"t"==x&&3==d?v?(m=y.x(0,0),b=y.y(0,0),_=y.x(p[1],p[2]),w=y.y(p[1],p[2]),u.translate(_-m,w-b)):u.translate(p[1],p[2]):"r"==x?2==d?(k=k||t.getBBox(1),u.rotate(p[1],k.x+k.width/2,k.y+k.height/2),n+=p[1]):4==d&&(v?(_=y.x(p[2],p[3]),w=y.y(p[2],p[3]),u.rotate(p[1],_,w)):u.rotate(p[1],p[2],p[3]),n+=p[1]):"s"==x?2==d||3==d?(k=k||t.getBBox(1),u.scale(p[1],p[d-1],k.x+k.width/2,k.y+k.height/2),o*=p[1],l*=p[d-1]):5==d&&(v?(_=y.x(p[3],p[4]),w=y.y(p[3],p[4]),u.scale(p[1],p[2],_,w)):u.scale(p[1],p[2],p[3],p[4]),o*=p[1],l*=p[2]):"m"==x&&7==d&&u.add(p[1],p[2],p[3],p[4],p[5],p[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1},oe=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},le=e._equaliseTransform=function(t,r){r=j(r).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],r=e.parseTransformString(r)||[];for(var i=W(t.length,r.length),n=[],a=[],s=0,o,l,h,u;i>s;s++){if(h=t[s]||oe(r[s]),u=r[s]||oe(h),h[0]!=u[0]||"r"==h[0].toLowerCase()&&(h[2]!=u[2]||h[3]!=u[3])||"s"==h[0].toLowerCase()&&(h[3]!=u[3]||h[4]!=u[4]))return;for(n[s]=[],a[s]=[],o=0,l=W(h.length,u.length);l>o;o++)o in h&&(n[s][o]=h[o]),o in u&&(a[s][o]=u[o])}return{from:n,to:a}};e._getContainer=function(t,r,i,n){var a;return a=null!=n||e.is(t,"object")?t:A.doc.getElementById(t),null!=a?a.tagName?null==r?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:r,height:i}:{container:1,x:t,y:r,width:i,height:n}:void 0},e.pathToRelative=Wt,e._engine={},e.path2curve=Qt,e.matrix=function(t,e,r,i,n,a){return new g(t,e,r,i,n,a)},function(t){function r(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var e=Y.sqrt(r(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,r,i,n,a){var s=[[],[],[]],o=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],l=[[t,r,n],[e,i,a],[0,0,1]],h,u,c,f;for(t&&t instanceof g&&(l=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),h=0;3>h;h++)for(u=0;3>u;u++){for(f=0,c=0;3>c;c++)f+=o[h][c]*l[c][u];s[h][u]=f}this.a=s[0][0],this.b=s[1][0],this.c=s[0][1],this.d=s[1][1],this.e=s[0][2],this.f=s[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new g(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new g(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){
this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,r,i){t=e.rad(t),r=r||0,i=i||0;var n=+Y.cos(t).toFixed(9),a=+Y.sin(t).toFixed(9);this.add(n,a,-a,n,r,i),this.add(1,0,0,1,-r,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[j.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=Y.sqrt(r(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=Y.sqrt(r(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return 0>s?(t.rotate=e.deg(Y.acos(s)),0>a&&(t.rotate=360-t.rotate)):t.rotate=e.deg(Y.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[q]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:R)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:R)+(e.rotate?"r"+[e.rotate,0,0]:R)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(g.prototype);for(var he=function(){this.returnValue=!1},ue=function(){return this.originalEvent.preventDefault()},ce=function(){this.cancelBubble=!0},fe=function(){return this.originalEvent.stopPropagation()},pe=function(t){var e=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,r=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},de=function(){return A.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=pe(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),F&&V[e]){var a=function(e){for(var n=pe(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;o>s;s++)if(e.targetTouches[s].target==t){e=e.targetTouches[s],e.originalEvent=a,e.preventDefault=ue,e.stopPropagation=fe;break}return r.call(i,e,n.x,n.y)};t.addEventListener(V[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),F&&V[e]&&t.removeEventListener(V[e],a,!1),!0}}:A.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||A.win.event;var e=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,n=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||he,t.stopPropagation=t.stopPropagation||ce,r.call(i,t,a,s)};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a}:void 0}(),ge=[],xe=function(e){for(var r=e.clientX,i=e.clientY,n=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,a=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,s,o=ge.length;o--;){if(s=ge[o],F&&e.touches){for(var l=e.touches.length,h;l--;)if(h=e.touches[l],h.identifier==s.el._drag.id){r=h.clientX,i=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var u=s.el.node,c,f=u.nextSibling,p=u.parentNode,d=u.style.display;A.win.opera&&p.removeChild(u),u.style.display="none",c=s.el.paper.getElementByPoint(r,i),u.style.display=d,A.win.opera&&(f?p.insertBefore(u,f):p.appendChild(u)),c&&t("raphael.drag.over."+s.el.id,s.el,c),r+=a,i+=n,t("raphael.drag.move."+s.el.id,s.move_scope||s.el,r-s.el._drag.x,i-s.el._drag.y,r,i,e)}},ve=function(r){e.unmousemove(xe).unmouseup(ve);for(var i=ge.length,n;i--;)n=ge[i],n.el._drag={},t("raphael.drag.end."+n.el.id,n.end_scope||n.start_scope||n.move_scope||n.el,r);ge=[]},ye=e.el={},me=D.length;me--;)!function(t){e[t]=ye[t]=function(r,i){return e.is(r,"function")&&(this.events=this.events||[],this.events.push({name:t,f:r,unbind:de(this.shape||this.node||A.doc,t,r,i||this)})),this},e["un"+t]=ye["un"+t]=function(r){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!e.is(r,"undefined")&&i[n].f!=r||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}}(D[me]);ye.data=function(r,i){var n=wt[this.id]=wt[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(r,"object")){for(var a in r)r[T](a)&&this.data(a,r[a]);return this}return t("raphael.data.get."+this.id,this,n[r],r),n[r]}return n[r]=i,t("raphael.data.set."+this.id,this,i,r),this},ye.removeData=function(t){return null==t?wt[this.id]={}:wt[this.id]&&delete wt[this.id][t],this},ye.getData=function(){return r(wt[this.id]||{})},ye.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},ye.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var be=[];ye.drag=function(r,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=l.clientX,u=l.clientY,c=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,f=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=l.identifier,F&&l.touches)for(var p=l.touches.length,d;p--;)if(d=l.touches[p],this._drag.id=d.identifier,d.identifier==this._drag.id){h=d.clientX,u=d.clientY;break}this._drag.x=h+f,this._drag.y=u+c,!ge.length&&e.mousemove(xe).mouseup(ve),ge.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&t.on("raphael.drag.start."+this.id,i),r&&t.on("raphael.drag.move."+this.id,r),n&&t.on("raphael.drag.end."+this.id,n),t("raphael.drag.start."+this.id,s||a||this,l.clientX+f,l.clientY+c,l)}return this._drag={},be.push({el:this,start:l}),this.mousedown(l),this},ye.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},ye.undrag=function(){for(var r=be.length;r--;)be[r].el==this&&(this.unmousedown(be[r].start),be.splice(r,1),t.unbind("raphael.drag.*."+this.id));!be.length&&e.unmousemove(xe).unmouseup(ve),ge=[]},M.circle=function(t,r,i){var n=e._engine.circle(this,t||0,r||0,i||0);return this.__set__&&this.__set__.push(n),n},M.rect=function(t,r,i,n,a){var s=e._engine.rect(this,t||0,r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},M.ellipse=function(t,r,i,n){var a=e._engine.ellipse(this,t||0,r||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},M.path=function(t){t&&!e.is(t,Z)&&!e.is(t[0],Q)&&(t+=R);var r=e._engine.path(e.format[z](e,arguments),this);return this.__set__&&this.__set__.push(r),r},M.image=function(t,r,i,n,a){var s=e._engine.image(this,t||"about:blank",r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},M.text=function(t,r,i){var n=e._engine.text(this,t||0,r||0,j(i));return this.__set__&&this.__set__.push(n),n},M.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var r=new ze(t);return this.__set__&&this.__set__.push(r),r.paper=this,r.type="set",r},M.setStart=function(t){this.__set__=t||this.set()},M.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},M.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},M.setSize=function(t,r){return e._engine.setSize.call(this,t,r)},M.setViewBox=function(t,r,i,n,a){return e._engine.setViewBox.call(this,t,r,i,n,a)},M.top=M.bottom=null,M.raphael=e;var _e=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(A.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(A.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};M.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=A.doc.elementFromPoint(t,e);if(A.win.opera&&"svg"==n.tagName){var a=_e(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},M.getElementsByBBox=function(t){var r=this.set();return this.forEach(function(i){e.isBBoxIntersect(i.getBBox(),t)&&r.push(i)}),r},M.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},M.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},M.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},ye.isPointInside=function(t,r){var i=this.realPath=Et[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=e.transformPath(i,this.attr("transform"))),e.isPointInsidePath(i,t,r)},ye.getBBox=function(t){if(this.removed)return{};var e=this._;return t?(!e.dirty&&e.bboxwt||(this.realPath=Et[this.type](this),e.bboxwt=Ot(this.realPath),e.bboxwt.toString=v,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&(!e.dirty&&this.realPath||(e.bboxwt=0,this.realPath=Et[this.type](this)),e.bbox=Ot(Nt(this.realPath,this.matrix)),e.bbox.toString=v,e.dirty=e.dirtyT=0),e.bbox)},ye.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},ye.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||Et[this.type](this);a=this.matrix?Nt(a,this.matrix):a;for(var s=1;r+1>s;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var we={},ke=function(t,r,i,n,a,s,o,u,c){return null==c?l(t,r,i,n,a,s,o,u):e.findDotsAtSegment(t,r,i,n,a,s,o,u,h(t,r,i,n,a,s,o,u,c))},Be=function(t,r){return function(i,n,a){i=Qt(i);for(var s,o,l,h,u="",c={},f,p=0,d=0,g=i.length;g>d;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];else{if(h=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(r&&!c.start){if(f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),u+=["C"+f.start.x,f.start.y,f.m.x,f.m.y,f.x,f.y],a)return u;c.start=u,u=["M"+f.x,f.y+"C"+f.n.x,f.n.y,f.end.x,f.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!r)return f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:f.x,y:f.y,alpha:f.alpha}}p+=h,s=+l[5],o=+l[6]}u+=l.shift()+l}return c.end=u,f=t?p:r?c:e.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),f.alpha&&(f={x:f.x,y:f.y,alpha:f.alpha}),f}},Ce=Be(1),Se=Be(),Te=Be(0,1);e.getTotalLength=Ce,e.getPointAtLength=Se,e.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return Te(t,e).end;var i=Te(t,r,1);return e?Te(i,e).end:i},ye.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():Ce(t)},ye.getPointAtLength=function(t){var e=this.getPath();if(e)return Se(e,t)},ye.getPath=function(){var t,r=e._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return r&&(t=r(this)),t},ye.getSubpath=function(t,r){var i=this.getPath();if(i)return e.getSubpath(i,t,r)};var Ae=e.easing_formulas={linear:function(t){return t},"<":function(t){return X(t,1.7)},">":function(t){return X(t,.48)},"<>":function(t){var e=.48-t/1.04,r=Y.sqrt(.1734+e*e),i=r-e,n=X(H(i),1/3)*(0>i?-1:1),a=-r-e,s=X(H(a),1/3)*(0>a?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:X(2,-10*t)*Y.sin((t-.075)*(2*U)/.3)+1},bounce:function(t){var e=7.5625,r=2.75,i;return 1/r>t?i=e*t*t:2/r>t?(t-=1.5/r,i=e*t*t+.75):2.5/r>t?(t-=2.25/r,i=e*t*t+.9375):(t-=2.625/r,i=e*t*t+.984375),i}};Ae.easeIn=Ae["ease-in"]=Ae["<"],Ae.easeOut=Ae["ease-out"]=Ae[">"],Ae.easeInOut=Ae["ease-in-out"]=Ae["<>"],Ae["back-in"]=Ae.backIn,Ae["back-out"]=Ae.backOut;var Ee=[],Ne=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},Me=function(){for(var r=+new Date,i=0;i<Ee.length;i++){var n=Ee[i];if(!n.el.removed&&!n.paused){var a=r-n.start,s=n.ms,o=n.easing,l=n.from,h=n.diff,u=n.to,c=n.t,f=n.el,p={},d,g={},x;if(n.initstatus?(a=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*s,n.status=n.initstatus,delete n.initstatus,n.stop&&Ee.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(a/s))/n.anim.top,!(0>a))if(s>a){var v=o(a/s);for(var y in l)if(l[T](y)){switch(pt[y]){case $:d=+l[y]+v*s*h[y];break;case"colour":d="rgb("+[Le(ot(l[y].r+v*s*h[y].r)),Le(ot(l[y].g+v*s*h[y].g)),Le(ot(l[y].b+v*s*h[y].b))].join(",")+")";break;case"path":d=[];for(var m=0,_=l[y].length;_>m;m++){d[m]=[l[y][m][0]];for(var w=1,k=l[y][m].length;k>w;w++)d[m][w]=+l[y][m][w]+v*s*h[y][m][w];d[m]=d[m].join(I)}d=d.join(I);break;case"transform":if(h[y].real)for(d=[],m=0,_=l[y].length;_>m;m++)for(d[m]=[l[y][m][0]],w=1,k=l[y][m].length;k>w;w++)d[m][w]=l[y][m][w]+v*s*h[y][m][w];else{var B=function(t){return+l[y][t]+v*s*h[y][t]};d=[["m",B(0),B(1),B(2),B(3),B(4),B(5)]]}break;case"csv":if("clip-rect"==y)for(d=[],m=4;m--;)d[m]=+l[y][m]+v*s*h[y][m];break;default:var C=[][P](l[y]);for(d=[],m=f.paper.customAttributes[y].length;m--;)d[m]=+C[m]+v*s*h[y][m]}p[y]=d}f.attr(p),function(e,r,i){setTimeout(function(){t("raphael.anim.frame."+e,r,i)})}(f.id,f,n.anim)}else{if(function(r,i,n){setTimeout(function(){t("raphael.anim.frame."+i.id,i,n),t("raphael.anim.finish."+i.id,i,n),e.is(r,"function")&&r.call(i)})}(n.callback,f,n.anim),f.attr(u),Ee.splice(i--,1),n.repeat>1&&!n.next){for(x in u)u[T](x)&&(g[x]=n.totalOrigin[x]);n.el.attr(g),b(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&b(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}Ee.length&&Ne(Me)},Le=function(t){return t>255?255:0>t?0:t};ye.animateWith=function(t,r,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var l=i instanceof m?i:e.animation(i,n,a,s),h,u;b(l,o,l.percents[0],null,o.attr());for(var c=0,f=Ee.length;f>c;c++)if(Ee[c].anim==r&&Ee[c].el==t){Ee[f-1].start=Ee[c].start;break}return o},ye.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},m.prototype.delay=function(t){var e=new m(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},m.prototype.repeat=function(t){var e=new m(this.anim,this.ms);return e.del=this.del,e.times=Y.floor(W(t,0))||1,e},e.animation=function(t,r,i,n){if(t instanceof m)return t;!e.is(i,"function")&&i||(n=n||i||null,i=null),t=Object(t),r=+r||0;var a={},s,o;for(o in t)t[T](o)&&ht(o)!=o&&ht(o)+"%"!=o&&(s=!0,a[o]=t[o]);if(s)return i&&(a.easing=i),n&&(a.callback=n),new m({100:a},r);if(n){var l=0;for(var h in t){var u=ut(h);t[T](h)&&u>l&&(l=u)}l+="%",!t[l].callback&&(t[l].callback=n)}return new m(t,r)},ye.animate=function(t,r,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof m?t:e.animation(t,r,i,n);return b(s,a,s.percents[0],null,a.attr()),a},ye.setTime=function(t,e){return t&&null!=e&&this.status(t,G(e,t.ms)/t.ms),this},ye.status=function(t,e){var r=[],i=0,n,a;if(null!=e)return b(t,this,-1,G(e,1)),this;for(n=Ee.length;n>i;i++)if(a=Ee[i],a.el.id==this.id&&(!t||a.anim==t)){if(t)return a.status;r.push({anim:a.anim,status:a.status})}return t?0:r},ye.pause=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.pause."+this.id,this,Ee[r].anim)!==!1&&(Ee[r].paused=!0);return this},ye.resume=function(e){for(var r=0;r<Ee.length;r++)if(Ee[r].el.id==this.id&&(!e||Ee[r].anim==e)){var i=Ee[r];t("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))}return this},ye.stop=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.stop."+this.id,this,Ee[r].anim)!==!1&&Ee.splice(r--,1);return this},t.on("raphael.remove",_),t.on("raphael.clear",_),ye.toString=function(){return"Raphaël’s object"};var ze=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;r>e;e++)!t[e]||t[e].constructor!=ye.constructor&&t[e].constructor!=ze||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},Pe=ze.prototype;Pe.push=function(){for(var t,e,r=0,i=arguments.length;i>r;r++)t=arguments[r],!t||t.constructor!=ye.constructor&&t.constructor!=ze||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},Pe.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},Pe.forEach=function(t,e){for(var r=0,i=this.items.length;i>r;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var Fe in ye)ye[T](Fe)&&(Pe[Fe]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][z](r,e)})}}(Fe));return Pe.attr=function(t,r){if(t&&e.is(t,Q)&&e.is(t[0],"object"))for(var i=0,n=t.length;n>i;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;s>a;a++)this.items[a].attr(t,r);return this},Pe.clear=function(){for(;this.length;)this.pop()},Pe.splice=function(t,e,r){t=0>t?W(this.length+t,0):t,e=W(0,G(this.length-t,e));var i=[],n=[],a=[],s;for(s=2;s<arguments.length;s++)a.push(arguments[s]);for(s=0;e>s;s++)n.push(this[t+s]);for(;s<this.length-t;s++)i.push(this[t+s]);var o=a.length;for(s=0;s<o+i.length;s++)this.items[t+s]=this[t+s]=o>s?a[s]:i[s-o];for(s=this.items.length=this.length-=e-o;this[s];)delete this[s++];return new ze(n)},Pe.exclude=function(t){for(var e=0,r=this.length;r>e;e++)if(this[e]==t)return this.splice(e,1),!0},Pe.animate=function(t,r,i,n){(e.is(i,"function")||!i)&&(n=i||null);var a=this.items.length,s=a,o,l=this,h;if(!a)return this;n&&(h=function(){!--a&&n.call(l)}),i=e.is(i,Z)?i:h;var u=e.animation(t,r,i,h);for(o=this.items[--s].animate(u);s--;)this.items[s]&&!this.items[s].removed&&this.items[s].animateWith(o,u,u),this.items[s]&&!this.items[s].removed||a--;return this},Pe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},Pe.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=G[z](0,t),e=G[z](0,e),r=W[z](0,r),i=W[z](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},Pe.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;r>e;e++)t.push(this.items[e].clone());return t},Pe.toString=function(){return"Raphaël‘s set"},Pe.glow=function(t){var e=this.paper.set();return this.forEach(function(r,i){var n=r.glow(t);null!=n&&n.forEach(function(t,r){e.push(t)})}),e},Pe.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){return i.isPointInside(t,e)?(r=!0,!1):void 0}),r},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[T](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=ut(t.face["units-per-em"],10);for(var n in t.glyphs)if(t.glyphs[T](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[T](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},M.getFont=function(t,r,i,n){if(n=n||"normal",i=i||"normal",r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400,e.fonts){var a=e.fonts[t];if(!a){var s=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,R)+"(\\s|$)","i");for(var o in e.fonts)if(e.fonts[T](o)&&s.test(o)){a=e.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;u>h&&(l=a[h],l.face["font-weight"]!=r||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l}},M.print=function(t,r,i,n,a,s,o,l){s=s||"middle",o=W(G(o||0,1),-1),l=W(G(l||1,3),1);var h=j(i)[q](R),u=0,c=0,f=R,p;if(e.is(n,"string")&&(n=this.getFont(n)),n){p=(a||16)/n.face["units-per-em"];for(var d=n.face.bbox[q](k),g=+d[0],x=d[3]-d[1],v=0,y=+d[1]+("baseline"==s?x+ +n.face.descent:x/2),m=0,b=h.length;b>m;m++){if("\n"==h[m])u=0,w=0,c=0,v+=x*l;else{var _=c&&n.glyphs[h[m-1]]||{},w=n.glyphs[h[m]];u+=c?(_.w||n.w)+(_.k&&_.k[h[m]]||0)+n.w*o:0,c=1}w&&w.d&&(f+=e.transformPath(w.d,["t",u*p,v*p,"s",p,p,g,y,"t",(t-g)/p,(r-y)/p]))}}return this.path(f).attr({fill:"#000",stroke:"none"})},M.add=function(t){if(e.is(t,"array"))for(var r=this.set(),i=0,n=t.length,a;n>i;i++)a=t[i]||{},B[T](a.type)&&r.push(this[a.type]().attr(a));return r},e.format=function(t,r){var i=e.is(r,Q)?[0][P](r):arguments;return t&&e.is(t,Z)&&i.length-1&&(t=t.replace(C,function(t,e){return null==i[++e]?R:i[e]})),t||R},e.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""};return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)})}}(),e.ninja=function(){if(E.was)A.win.Raphael=E.is;else{window.Raphael=void 0;try{delete window.Raphael}catch(t){}}return e},e.st=Pe,t.on("raphael.DOMload",function(){w=!0}),function(t,r,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):e.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(r,i=function(){t.removeEventListener(r,i,!1),t.readyState="complete"},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),e}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;!function(r){var a="0.4.2",s="hasOwnProperty",o=/[\.\/]/,l="*",h=function(){},u=function(t,e){return t-e},c,f,p={n:{}},d=function(t,e){t=String(t);var r=p,i=f,n=Array.prototype.slice.call(arguments,2),a=d.listeners(t),s=0,o=!1,l,h=[],g={},x=[],v=c,y=[];c=t,f=0;for(var m=0,b=a.length;b>m;m++)"zIndex"in a[m]&&(h.push(a[m].zIndex),a[m].zIndex<0&&(g[a[m].zIndex]=a[m]));for(h.sort(u);h[s]<0;)if(l=g[h[s++]],x.push(l.apply(e,n)),f)return f=i,x;for(m=0;b>m;m++)if(l=a[m],"zIndex"in l)if(l.zIndex==h[s]){if(x.push(l.apply(e,n)),f)break;do if(s++,l=g[h[s]],l&&x.push(l.apply(e,n)),f)break;while(l)}else g[l.zIndex]=l;else if(x.push(l.apply(e,n)),f)break;return f=i,c=v,x.length?x:null};d._events=p,d.listeners=function(t){var e=t.split(o),r=p,i,n,a,s,h,u,c,f,d=[r],g=[];for(s=0,h=e.length;h>s;s++){for(f=[],u=0,c=d.length;c>u;u++)for(r=d[u].n,n=[r[e[s]],r[l]],a=2;a--;)i=n[a],i&&(f.push(i),g=g.concat(i.f||[]));d=f}return g},d.on=function(t,e){if(t=String(t),"function"!=typeof e)return function(){};for(var r=t.split(o),i=p,n=0,a=r.length;a>n;n++)i=i.n,i=i.hasOwnProperty(r[n])&&i[r[n]]||(i[r[n]]={n:{}});for(i.f=i.f||[],n=0,a=i.f.length;a>n;n++)if(i.f[n]==e)return h;return i.f.push(e),function(t){+t==+t&&(e.zIndex=+t)}},d.f=function(t){var e=[].slice.call(arguments,1);return function(){d.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},d.stop=function(){f=1},d.nt=function(t){return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(c):c},d.nts=function(){return c.split(o)},d.off=d.unbind=function(t,e){if(!t)return void(d._events=p={n:{}});var r=t.split(o),i,n,a,h,u,c,f,g=[p];for(h=0,u=r.length;u>h;h++)for(c=0;c<g.length;c+=a.length-2){if(a=[c,1],i=g[c].n,r[h]!=l)i[r[h]]&&a.push(i[r[h]]);else for(n in i)i[s](n)&&a.push(i[n]);g.splice.apply(g,a)}for(h=0,u=g.length;u>h;h++)for(i=g[h];i.n;){if(e){if(i.f){for(c=0,f=i.f.length;f>c;c++)if(i.f[c]==e){i.f.splice(c,1);break}!i.f.length&&delete i.f}for(n in i.n)if(i.n[s](n)&&i.n[n].f){var x=i.n[n].f;for(c=0,f=x.length;f>c;c++)if(x[c]==e){x.splice(c,1);break}!x.length&&delete i.n[n].f}}else{delete i.f;for(n in i.n)i.n[s](n)&&i.n[n].f&&delete i.n[n].f}i=i.n}},d.once=function(t,e){var r=function(){return d.unbind(t,r),e.apply(this,arguments)};return d.on(t,r)},d.version=a,d.toString=function(){return"You are running Eve "+a},"undefined"!=typeof t&&t.exports?t.exports=d:(i=[],n=function(){return d}.apply(e,i),!(void 0!==n&&(t.exports=n)))}(this)},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.svg){var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var x=function(i,n){if(n){"string"==typeof i&&(i=x(i));for(var a in n)n[e](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])))}else i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},v=function(e,n){var h="linear",u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,v=d.style,y=t._g.doc.getElementById(u);if(!y){if(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var b=n.shift();if(b=-i(b),isNaN(b))return null;var _=[0,0,a.cos(t.rad(b)),a.sin(t.rad(b))],w=1/(s(o(_[2]),o(_[3]))||1);_[2]*=w,_[3]*=w,_[2]<0&&(_[0]=-_[2],_[2]=0),_[3]<0&&(_[1]=-_[3],_[3]=0)}var k=t._parseDots(n);if(!k)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&u!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=x(h+"Gradient",{id:u}),e.gradient=y,x(y,"radial"==h?{fx:f,fy:p}:{x1:_[0],y1:_[1],x2:_[2],y2:_[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y);for(var B=0,C=k.length;C>B;B++)y.appendChild(x("stop",{offset:k[B].offset?k[B].offset:B?"100%":"0%","stop-color":k[B].color||"#fff","stop-opacity":isFinite(k[B].opacity)?k[B].opacity:1}))}}return x(d,{fill:m(u),opacity:1,"fill-opacity":1}),v.fill=c,v.opacity=1,v.fillOpacity=1,1},y=function(){var t=document.documentMode;return t&&(9===t||10===t)},m=function(t){if(y())return"url('#"+t+"')";var e=document.location,r=e.protocol+"//"+e.host+e.pathname+e.search;return"url('"+r+"#"+t+"')"},b=function(t){var e=t.getBBox(1);x(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},_=function(i,n,a){if("path"==i.type){for(var s=r(n).toLowerCase().split("-"),o=i.paper,l=a?"end":"start",h=i.node,u=i.attrs,f=u["stroke-width"],p=s.length,v="classic",y,m,b,_,w,k=3,B=3,C=5;p--;)switch(s[p]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":v=s[p];break;case"wide":B=5;break;case"narrow":B=2;break;case"long":k=5;break;case"short":k=2}if("open"==v?(k+=2,B+=2,C+=2,b=1,_=a?4:1,w={fill:"none",stroke:u.stroke}):(_=b=k/2,w={fill:u.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=v){var S="raphael-marker-"+v,T="raphael-marker-"+l+v+k+B+"-obj"+i.id;t._g.doc.getElementById(S)?g[S]++:(o.defs.appendChild(x(x("path"),{"stroke-linecap":"round",d:d[v],id:S})),g[S]=1);var A=t._g.doc.getElementById(T),E;A?(g[T]++,E=A.getElementsByTagName("use")[0]):(A=x(x("marker"),{id:T,markerHeight:B,markerWidth:k,orient:"auto",refX:_,refY:B/2}),E=x(x("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+B/2+") ":c)+"scale("+k/C+","+B/C+")","stroke-width":(1/((k/C+B/C)/2)).toFixed(4)}),A.appendChild(E),o.defs.appendChild(A),g[T]=1),x(E,w);var N=b*("diamond"!=v&&"oval"!=v);a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-N*f):(y=N*f,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),w={},w["marker-"+l]="url(#"+T+")",(m||y)&&(w.d=t.getSubpath(u.path,y,m)),x(h,w),i._.arrows[l+"Path"]=S,i._.arrows[l+"Marker"]=T,i._.arrows[l+"dx"]=N,i._.arrows[l+"Type"]=v,i._.arrows[l+"String"]=n}else a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-y):(y=0,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),i._.arrows[l+"Path"]&&x(h,{d:t.getSubpath(u.path,y,m)}),delete i._.arrows[l+"Path"],delete i._.arrows[l+"Marker"],delete i._.arrows[l+"dx"],delete i._.arrows[l+"Type"],delete i._.arrows[l+"String"];for(w in g)if(g[e](w)&&!g[w]){var M=t._g.doc.getElementById(w);M&&M.parentNode.removeChild(M)}}},w={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},k=function(t,e,i){if(e=w[r(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a;x(t.node,{"stroke-dasharray":s.join(",")})}else x(t.node,{"stroke-dasharray":"none"})},B=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var y=l.getElementsByTagName("title");if(y.length&&(y=y[0]))y.firstChild.nodeValue=g;else{y=x("title");var m=t._g.doc.createTextNode(g);y.appendChild(m),l.appendChild(y)}break;case"href":case"target":var w=l.parentNode;if("a"!=w.tagName.toLowerCase()){var B=x("a");w.insertBefore(B,l),B.appendChild(l),w=B}"target"==d?w.setAttributeNS(p,"show","blank"==g?"new":g):w.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":_(i,g);break;case"arrow-end":_(i,g,1);break;case"clip-rect":var C=r(g).split(h);if(4==C.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var T=x("clipPath"),A=x("rect");T.id=t.createUUID(),x(A,{x:C[0],y:C[1],width:C[2],height:C[3]}),T.appendChild(A),i.paper.defs.appendChild(T),x(l,{"clip-path":"url(#"+T.id+")"}),i.clip=A}if(!g){var E=l.getAttribute("clip-path");if(E){var N=t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g,c));N&&N.parentNode.removeChild(N),x(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(x(l,{d:g?u.path=t._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"r":"rect"==i.type?x(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":1==i._.sx&&1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u["stroke-dasharray"]&&k(i,u["stroke-dasharray"],a),i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"stroke-dasharray":k(i,g,a);break;case"fill":var M=r(g).match(t._ISURL);if(M){T=x("pattern");var L=x("image");T.id=t.createUUID(),x(T,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),x(L,{x:0,y:0,"xlink:href":M[1]}),T.appendChild(L),function(e){t._preload(M[1],function(){var t=this.offsetWidth,r=this.offsetHeight;x(e,{width:t,height:r}),x(L,{width:t,height:r})})}(T),i.paper.defs.appendChild(T),x(l,{fill:"url(#"+T.id+")"}),i.pattern=T,i.pattern&&b(i);break}var z=t.getRGB(g);if(z.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&v(i,g)){
if("opacity"in u||"fill-opacity"in u){var P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(P){var F=P.getElementsByTagName("stop");x(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,"undefined")&&t.is(a.opacity,"undefined")&&x(l,{opacity:u.opacity}),!t.is(u["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&x(l,{"fill-opacity":u["fill-opacity"]});z[e]("opacity")&&x(l,{"fill-opacity":z.opacity>1?z.opacity/100:z.opacity});case"stroke":z=t.getRGB(g),l.setAttribute(d,z.hex),"stroke"==d&&z[e]("opacity")&&x(l,{"stroke-opacity":z.opacity>1?z.opacity/100:z.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&v(i,g);break;case"opacity":u.gradient&&!u[e]("stroke-opacity")&&x(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),P&&(F=P.getElementsByTagName("stop"),x(F[F.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}S(i,a),l.style.visibility=f},C=1.2,S=function(i,a){if("text"==i.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h=r(a.text).split("\n"),u=[],f,p=0,d=h.length;d>p;p++)f=x("tspan"),p&&x(f,{dy:l*C,x:s.x}),f.appendChild(t._g.doc.createTextNode(h[p])),o.appendChild(f),u[p]=f}else for(u=o.getElementsByTagName("tspan"),p=0,d=u.length;d>p;p++)p?x(u[p],{dy:l*C,x:s.x}):x(u[0],{dy:0});x(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),v=s.y-(g.y+g.height/2);v&&t.is(v,"finite")&&x(u[0],{dy:v})}},T=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},A=function(e,r){var i=0,n=0;this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},E=t.el;A.prototype=E,E.constructor=A,t._engine.path=function(t,e){var r=x("path");e.canvas&&e.canvas.appendChild(r);var i=new A(r,e);return i.type="path",B(i,{fill:"none",stroke:"#000",path:t}),i},E.rotate=function(t,e,n){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},E.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this},E.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},E.transform=function(r){var i=this._;if(null==r)return i.transform;if(t._extractTransform(this,r),this.clip&&x(this.clip,{transform:this.matrix.invert()}),this.pattern&&b(this),this.node&&x(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return i.transform=this.matrix.toTransformString(),this},E.hide=function(){return this.removed||(this.node.style.display="none"),this},E.show=function(){return this.removed||(this.node.style.display=""),this},E.remove=function(){var e=T(this.node);if(!this.removed&&e.parentNode){var r=this.paper;r.__set__&&r.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&r.defs.removeChild(this.gradient),t._tear(this,r),e.parentNode.removeChild(e),this.removeData();for(var i in this)this[i]="function"==typeof this[i]?t._removedFactory(i):null;this.removed=!0}},E._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e=!1,r;this.paper.canvas.parentElement?r=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(r=this.paper.canvas.parentNode.style),r&&"none"==r.display&&(e=!0,r.display="");var i={};try{i=this.node.getBBox()}catch(n){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},e&&(r.display="none")}return t&&this.hide(),i},E.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},l=0,c=s.length;c>l;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;c>l;l++)o[r[l]]=this.attr(r[l]);return o}if(null!=i){var f={};f[r]=i}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[e](g)&&(f[g]=d[g])}return B(this,f),this},E.toFront=function(){if(this.removed)return this;var e=T(this.node);e.parentNode.appendChild(e);var r=this.paper;return r.top!=this&&t._tofront(this,r),this},E.toBack=function(){if(this.removed)return this;var e=T(this.node),r=e.parentNode;r.insertBefore(e,r.firstChild),t._toback(this,this.paper);var i=this.paper;return this},E.insertAfter=function(e){if(this.removed||!e)return this;var r=T(this.node),i=T(e.node||e[e.length-1].node);return i.nextSibling?i.parentNode.insertBefore(r,i.nextSibling):i.parentNode.appendChild(r),t._insertafter(this,e,this.paper),this},E.insertBefore=function(e){if(this.removed||!e)return this;var r=T(this.node),i=T(e.node||e[0].node);return i.parentNode.insertBefore(r,i),t._insertbefore(this,e,this.paper),this},E.blur=function(e){var r=this;if(0!==+e){var i=x("filter"),n=x("feGaussianBlur");r.attrs.blur=e,i.id=t.createUUID(),x(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,x(r.node,{filter:"url(#"+i.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter");return r},t._engine.circle=function(t,e,r,i){var n=x("circle");t.canvas&&t.canvas.appendChild(n);var a=new A(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",x(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=x("rect");t.canvas&&t.canvas.appendChild(s);var o=new A(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",x(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=x("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new A(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",x(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=x("image");x(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new A(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,i,n){var a=x("text");e.canvas&&e.canvas.appendChild(a);var s=new A(a,e);return s.attrs={x:r,y:i,"text-anchor":"middle",text:n,"font-family":t._availableAttrs["font-family"],"font-size":t._availableAttrs["font-size"],stroke:"none",fill:"#000"},s.type="text",B(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container,i=e.x,n=e.y,a=e.width,s=e.height;if(!r)throw new Error("SVG container not found.");var o=x("svg"),l="overflow:hidden;",h;return i=i||0,n=n||0,a=a||512,s=s||342,x(o,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==r?(o.style.cssText=l+"position:absolute;left:"+i+"px;top:"+n+"px",t._g.doc.body.appendChild(o),h=1):(o.style.cssText=l+"position:relative",r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o)),r=new t._Paper,r.width=a,r.height=s,r.canvas=o,r.clear(),r._left=r._top=0,h&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a=this.getSize(),o=s(r/a.width,i/a.height),l=this.top,h=n?"xMidYMid meet":"xMinYMin",c,p;for(null==t?(this._vbSize&&(o=1),delete this._vbSize,c="0 0 "+this.width+f+this.height):(this._vbSize=o,c=t+f+e+f+r+f+i),x(this.canvas,{viewBox:c,preserveAspectRatio:h});o&&l;)p="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":p}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t=this.canvas,e=t.style,r;try{r=t.getScreenCTM()||t.createSVGMatrix()}catch(i){r=t.createSVGMatrix()}var n=-r.e%1,a=-r.f%1;(n||a)&&(n&&(this._left=(this._left+n)%1,e.left=this._left+"px"),a&&(this._top=(this._top+a)%1,e.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=x("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=x("defs"))},t.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var N=t.st;for(var M in E)E[e](M)&&!N[e](M)&&(N[M]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(M))}}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.vml){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=t.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},x=/([clmz]),?([^clmz]*)/gi,v=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(x,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o=n(e),l,h;s=[];for(var u=0,c=o.length;c>u;u++){l=o[u],h=o[u][0].toLowerCase(),"z"==h&&(h="x");for(var f=1,v=l.length;v>f;f++)h+=a(l[f]*b)+(f!=v-1?",":d);s.push(h)}return s.join(p)},B=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},C=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",x,v=b/e,y=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(v)+p+l(y),f.rotation=a*(0>e*r?-1:1),a){var m=B(a,i,n);i=m.dx,n=m.dy}if(0>e&&(g+="x"),0>r&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-v+p+n*-y,u||s.fillsize){var _=c.getElementsByTagName(h);_=_&&_[0],c.removeChild(_),u&&(m=B(a,o.x(u[0],u[1]),o.y(u[0],u[1])),_.position=m.dx*d+p+m.dy*d),s.fillsize&&(_.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(_)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},T=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,x,v=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),y=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),m=n;for(var B in l)l[e](B)&&(f[B]=l[B]);if(v&&(f.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||v)&&(c.path=k(~r(f.path).toLowerCase().indexOf("r")?t._pathToAbsolute(f.path):f.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],C(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),y){var T=+f.cx,E=+f.cy,N=+f.rx||+f.r||0,L=+f.ry||+f.r||0;c.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((T-N)*b),a((E-L)*b),a((T+N)*b),a((E+L)*b),a(T*b)),n._.dirty=1}if("clip-rect"in l){var z=r(l["clip-rect"]).split(u);if(4==z.length){z[2]=+z[2]+ +z[0],z[3]=+z[3]+ +z[1];var P=c.clipRect||t._g.doc.createElement("div"),F=P.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",z),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(P,c),P.appendChild(c),c.clipRect=P)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&S(m,l["arrow-start"]),"arrow-end"in l&&S(m,l["arrow-end"],1),null!=l.opacity||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var I=c.getElementsByTagName(h),j=!1;if(I=I&&I[0],!I&&(j=I=M(h)),"image"==n.type&&l.src&&(I.src=l.src),l.fill&&(I.on=!0),null!=I.on&&"none"!=l.fill&&null!==l.fill||(I.on=!1),I.on&&l.fill){var q=r(l.fill).match(t._ISURL);if(q){I.parentNode==c&&c.removeChild(I),I.rotate=!0,I.src=q[1],I.type="tile";var D=n.getBBox(1);I.position=D.x+p+D.y,n._.fillpos=[D.x,D.y],t._preload(q[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else I.color=t.getRGB(l.fill).hex,I.src=d,I.type="solid",t.getRGB(l.fill).error&&(m.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&A(m,l.fill,I)&&(f.fill="none",f.gradient=l.fill,I.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var V=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);V=o(s(V,0),1),I.opacity=V,I.src&&(I.color="none")}c.appendChild(I);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],Y=!1;!O&&(Y=O=M("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var W=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=W.hex),V=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+W.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(V=o(s(V,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&1>G&&(V*=G)&&(O.weight=1),O.opacity=V,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var H={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=H[e](l["stroke-dasharray"])?H[l["stroke-dasharray"]]:d}Y&&c.appendChild(O)}if("text"==m.type){m.paper.canvas.style.display=d;var X=m.paper.span,U=100,$=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),$=i(f["font-size"]||$&&$[0])||10,g.fontSize=$*U+"px",m.textpath.string&&(X.innerHTML=r(m.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var Z=X.getBoundingClientRect();m.W=f.w=(Z.right-Z.left)/U,m.H=f.h=(Z.bottom-Z.top)/U,m.X=f.x,m.Y=f.y+m.H/2,("x"in l||"y"in l)&&(m.path.v=t.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Q=["x","y","text","font","font-family","font-weight","font-style","font-size"],J=0,K=Q.length;K>J;J++)if(Q[J]in l){m._.dirty=1;break}switch(f["text-anchor"]){case"start":m.textpath.style["v-text-align"]="left",m.bbx=m.W/2;break;case"end":m.textpath.style["v-text-align"]="right",m.bbx=-m.W/2;break;default:m.textpath.style["v-text-align"]="center",m.bbx=0}m.textpath.style["v-text-kern"]=!0}},A=function(e,a,s){e.attrs=e.attrs||{};var o=e.attrs,l=Math.pow,h,u,c="linear",f=".5 .5";if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return c="radial",e&&r&&(e=i(e),r=i(r),l(e-.5,2)+l(r-.5,2)>.25&&(r=n.sqrt(.25-l(e-.5,2))*(2*(r>.5)-1)+.5),f=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==c){var g=a.shift();if(g=-i(g),isNaN(g))return null}var x=t._parseDots(a);if(!x)return null;if(e=e.shape||e.node,x.length){e.removeChild(s),s.on=!0,s.method="none",s.color=x[0].color,s.color2=x[x.length-1].color;for(var v=[],y=0,m=x.length;m>y;y++)x[y].offset&&v.push(x[y].offset+p+x[y].color);s.colors=v.length?v.join():"0% "+s.color,"radial"==c?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=f,s.angle=0):(s.type="gradient",s.angle=(270-g)%360),e.appendChild(s)}return 1},E=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},N=t.el;E.prototype=N,N.constructor=E,N.transform=function(e){if(null==e)return this._.transform;var i=this.paper._viewBoxShift,n=i?"s"+[i.scale,i.scale]+"-1-1t"+[i.dx,i.dy]:d,a;i&&(a=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,n+e);var s=this.matrix.clone(),o=this.skew,l=this.node,h,u=~r(this.attrs.fill).indexOf("-"),c=!r(this.attrs.fill).indexOf("url(");if(s.translate(1,1),c||u||"image"==this.type)if(o.matrix="1 0 0 1",o.offset="0 0",h=s.split(),u&&h.noRotation||!h.isSimple){l.style.filter=s.toFilter();var f=this.getBBox(),g=this.getBBox(1),x=f.x-g.x,v=f.y-g.y;l.coordorigin=x*-b+p+v*-b,C(this,1,1,x,v,0)}else l.style.filter=d,C(this,h.scalex,h.scaley,h.dx,h.dy,h.rotate);else l.style.filter=d,o.matrix=r(s),o.offset=s.offset();return null!==a&&(this._.transform=a,t._extractTransform(this,a)),this},N.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},N.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},N.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},N.hide=function(){return!this.removed&&(this.node.style.display="none"),this},N.show=function(){return!this.removed&&(this.node.style.display=d),this},N.auxGetBBox=t.el.getBBox,N.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},N._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},N.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},N.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(u),o={},l=0,f=s.length;f>l;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,f=r.length;f>l;l++)o[r[l]]=this.attr(r[l]);return o}var p;null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var x in g)g[e](x)&&(p[x]=g[x])}p.text&&"text"==this.type&&(this.textpath.string=p.text),T(this,p)}return this},N.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},N.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},N.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},N.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},N.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;return i=i.replace(v,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+f+".Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var r=M("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new E(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,T(i,n),e.canvas&&e.canvas.appendChild(r);var a=M("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path(),s=a.attrs;return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",T(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path(),a=n.attrs;return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",T(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=r,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),C(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=M("shape"),l=M("path"),h=M("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new E(o,e),c={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,T(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var f=M("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var s=this.getSize(),o=s.width,l=s.height,h,u;return a&&(h=l/n,u=o/i,o>i*h&&(e-=(o-i*h)/2/h),l>n*u&&(r-=(l-n*u)/2/u)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:s},this.forEach(function(t){t.transform("...")}),this};var M;t._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),M=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){M=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n,a=e.width,s=e.x,o=e.y;if(!r)throw new Error("VML container not found.");var l=new t._Paper,h=l.canvas=t._g.doc.createElement("div"),u=h.style;return s=s||0,o=o||0,a=a||512,i=i||342,l.width=a,l.height=i,a==+a&&(a+="px"),i==+i&&(i+="px"),l.coordsize=1e3*b+p+1e3*b,l.coordorigin="0 0",l.span=t._g.doc.createElement("span"),l.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",h.appendChild(l.span),u.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",a,i),1==r?(t._g.doc.body.appendChild(h),u.left=s+"px",u.top=o+"px",u.position="absolute"):r.firstChild?r.insertBefore(h,r.firstChild):r.appendChild(h),l.renderfix=function(){},l},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var L=t.st;for(var z in N)N[e](z)&&!L[e](z)&&(L[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}.apply(e,i),!(void 0!==n&&(t.exports=n))}])});
/* @license
morris.js v0.5.0
Copyright 2014 Olly Smith All rights reserved.
Licensed under the BSD-2-Clause License.
*/

(function(){var a,b,c,d,e=[].slice,f=function(a,b){return function(){return a.apply(b,arguments)}},g={}.hasOwnProperty,h=function(a,b){function c(){this.constructor=a}for(var d in b)g.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},i=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=window.Morris={},a=jQuery,b.EventEmitter=function(){function a(){}return a.prototype.on=function(a,b){return null==this.handlers&&(this.handlers={}),null==this.handlers[a]&&(this.handlers[a]=[]),this.handlers[a].push(b),this},a.prototype.fire=function(){var a,b,c,d,f,g,h;if(c=arguments[0],a=2<=arguments.length?e.call(arguments,1):[],null!=this.handlers&&null!=this.handlers[c]){for(g=this.handlers[c],h=[],d=0,f=g.length;f>d;d++)b=g[d],h.push(b.apply(null,a));return h}},a}(),b.commas=function(a){var b,c,d,e;return null!=a?(d=0>a?"-":"",b=Math.abs(a),c=Math.floor(b).toFixed(0),d+=c.replace(/(?=(?:\d{3})+$)(?!^)/g,","),e=b.toString(),e.length>c.length&&(d+=e.slice(c.length)),d):"-"},b.pad2=function(a){return(10>a?"0":"")+a},b.Grid=function(c){function d(b){this.resizeHandler=f(this.resizeHandler,this);var c=this;if(this.el="string"==typeof b.element?a(document.getElementById(b.element)):a(b.element),null==this.el||0===this.el.length)throw new Error("Graph container element not found");"static"===this.el.css("position")&&this.el.css("position","relative"),this.options=a.extend({},this.gridDefaults,this.defaults||{},b),"string"==typeof this.options.units&&(this.options.postUnits=b.units),this.raphael=new Raphael(this.el[0]),this.elementWidth=null,this.elementHeight=null,this.dirty=!1,this.selectFrom=null,this.init&&this.init(),this.setData(this.options.data),this.el.bind("mousemove",function(a){var b,d,e,f,g;return d=c.el.offset(),g=a.pageX-d.left,c.selectFrom?(b=c.data[c.hitTest(Math.min(g,c.selectFrom))]._x,e=c.data[c.hitTest(Math.max(g,c.selectFrom))]._x,f=e-b,c.selectionRect.attr({x:b,width:f})):c.fire("hovermove",g,a.pageY-d.top)}),this.el.bind("mouseleave",function(){return c.selectFrom&&(c.selectionRect.hide(),c.selectFrom=null),c.fire("hoverout")}),this.el.bind("touchstart touchmove touchend",function(a){var b,d;return d=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],b=c.el.offset(),c.fire("hovermove",d.pageX-b.left,d.pageY-b.top)}),this.el.bind("click",function(a){var b;return b=c.el.offset(),c.fire("gridclick",a.pageX-b.left,a.pageY-b.top)}),this.options.rangeSelect&&(this.selectionRect=this.raphael.rect(0,0,0,this.el.innerHeight()).attr({fill:this.options.rangeSelectColor,stroke:!1}).toBack().hide(),this.el.bind("mousedown",function(a){var b;return b=c.el.offset(),c.startRange(a.pageX-b.left)}),this.el.bind("mouseup",function(a){var b;return b=c.el.offset(),c.endRange(a.pageX-b.left),c.fire("hovermove",a.pageX-b.left,a.pageY-b.top)})),this.options.resize&&a(window).bind("resize",function(){return null!=c.timeoutId&&window.clearTimeout(c.timeoutId),c.timeoutId=window.setTimeout(c.resizeHandler,100)}),this.el.css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),this.postInit&&this.postInit()}return h(d,c),d.prototype.gridDefaults={dateFormat:null,axes:!0,grid:!0,gridLineColor:"#aaa",gridStrokeWidth:.5,gridTextColor:"#888",gridTextSize:12,gridTextFamily:"sans-serif",gridTextWeight:"normal",hideHover:!1,yLabelFormat:null,xLabelAngle:0,numLines:5,padding:25,parseTime:!0,postUnits:"",preUnits:"",ymax:"auto",ymin:"auto 0",goals:[],goalStrokeWidth:1,goalLineColors:["#666633","#999966","#cc6666","#663333"],events:[],eventStrokeWidth:1,eventLineColors:["#005a04","#ccffbb","#3a5f0b","#005502"],rangeSelect:null,rangeSelectColor:"#eef",resize:!1},d.prototype.setData=function(a,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;return null==c&&(c=!0),this.options.data=a,null==a||0===a.length?(this.data=[],this.raphael.clear(),null!=this.hover&&this.hover.hide(),void 0):(o=this.cumulative?0:null,p=this.cumulative?0:null,this.options.goals.length>0&&(h=Math.min.apply(Math,this.options.goals),g=Math.max.apply(Math,this.options.goals),p=null!=p?Math.min(p,h):h,o=null!=o?Math.max(o,g):g),this.data=function(){var c,d,g;for(g=[],f=c=0,d=a.length;d>c;f=++c)j=a[f],i={src:j},i.label=j[this.options.xkey],this.options.parseTime?(i.x=b.parseDate(i.label),this.options.dateFormat?i.label=this.options.dateFormat(i.x):"number"==typeof i.label&&(i.label=new Date(i.label).toString())):(i.x=f,this.options.xLabelFormat&&(i.label=this.options.xLabelFormat(i))),l=0,i.y=function(){var a,b,c,d;for(c=this.options.ykeys,d=[],e=a=0,b=c.length;b>a;e=++a)n=c[e],q=j[n],"string"==typeof q&&(q=parseFloat(q)),null!=q&&"number"!=typeof q&&(q=null),null!=q&&(this.cumulative?l+=q:null!=o?(o=Math.max(q,o),p=Math.min(q,p)):o=p=q),this.cumulative&&null!=l&&(o=Math.max(l,o),p=Math.min(l,p)),d.push(q);return d}.call(this),g.push(i);return g}.call(this),this.options.parseTime&&(this.data=this.data.sort(function(a,b){return(a.x>b.x)-(b.x>a.x)})),this.xmin=this.data[0].x,this.xmax=this.data[this.data.length-1].x,this.events=[],this.options.events.length>0&&(this.events=this.options.parseTime?function(){var a,c,e,f;for(e=this.options.events,f=[],a=0,c=e.length;c>a;a++)d=e[a],f.push(b.parseDate(d));return f}.call(this):this.options.events,this.xmax=Math.max(this.xmax,Math.max.apply(Math,this.events)),this.xmin=Math.min(this.xmin,Math.min.apply(Math,this.events))),this.xmin===this.xmax&&(this.xmin-=1,this.xmax+=1),this.ymin=this.yboundary("min",p),this.ymax=this.yboundary("max",o),this.ymin===this.ymax&&(p&&(this.ymin-=1),this.ymax+=1),((r=this.options.axes)===!0||"both"===r||"y"===r||this.options.grid===!0)&&(this.options.ymax===this.gridDefaults.ymax&&this.options.ymin===this.gridDefaults.ymin?(this.grid=this.autoGridLines(this.ymin,this.ymax,this.options.numLines),this.ymin=Math.min(this.ymin,this.grid[0]),this.ymax=Math.max(this.ymax,this.grid[this.grid.length-1])):(k=(this.ymax-this.ymin)/(this.options.numLines-1),this.grid=function(){var a,b,c,d;for(d=[],m=a=b=this.ymin,c=this.ymax;k>0?c>=a:a>=c;m=a+=k)d.push(m);return d}.call(this))),this.dirty=!0,c?this.redraw():void 0)},d.prototype.yboundary=function(a,b){var c,d;return c=this.options["y"+a],"string"==typeof c?"auto"===c.slice(0,4)?c.length>5?(d=parseInt(c.slice(5),10),null==b?d:Math[a](b,d)):null!=b?b:0:parseInt(c,10):c},d.prototype.autoGridLines=function(a,b,c){var d,e,f,g,h,i,j,k,l;return h=b-a,l=Math.floor(Math.log(h)/Math.log(10)),j=Math.pow(10,l),e=Math.floor(a/j)*j,d=Math.ceil(b/j)*j,i=(d-e)/(c-1),1===j&&i>1&&Math.ceil(i)!==i&&(i=Math.ceil(i),d=e+i*(c-1)),0>e&&d>0&&(e=Math.floor(a/i)*i,d=Math.ceil(b/i)*i),1>i?(g=Math.floor(Math.log(i)/Math.log(10)),f=function(){var a,b;for(b=[],k=a=e;i>0?d>=a:a>=d;k=a+=i)b.push(parseFloat(k.toFixed(1-g)));return b}()):f=function(){var a,b;for(b=[],k=a=e;i>0?d>=a:a>=d;k=a+=i)b.push(k);return b}(),f},d.prototype._calc=function(){var a,b,c,d,e,f,g,h;return e=this.el.width(),c=this.el.height(),(this.elementWidth!==e||this.elementHeight!==c||this.dirty)&&(this.elementWidth=e,this.elementHeight=c,this.dirty=!1,this.left=this.options.padding,this.right=this.elementWidth-this.options.padding,this.top=this.options.padding,this.bottom=this.elementHeight-this.options.padding,((g=this.options.axes)===!0||"both"===g||"y"===g)&&(f=function(){var a,c,d,e;for(d=this.grid,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(this.measureText(this.yAxisFormat(b)).width);return e}.call(this),this.left+=Math.max.apply(Math,f)),((h=this.options.axes)===!0||"both"===h||"x"===h)&&(a=function(){var a,b,c;for(c=[],d=a=0,b=this.data.length;b>=0?b>a:a>b;d=b>=0?++a:--a)c.push(this.measureText(this.data[d].text,-this.options.xLabelAngle).height);return c}.call(this),this.bottom-=Math.max.apply(Math,a)),this.width=Math.max(1,this.right-this.left),this.height=Math.max(1,this.bottom-this.top),this.dx=this.width/(this.xmax-this.xmin),this.dy=this.height/(this.ymax-this.ymin),this.calc)?this.calc():void 0},d.prototype.transY=function(a){return this.bottom-(a-this.ymin)*this.dy},d.prototype.transX=function(a){return 1===this.data.length?(this.left+this.right)/2:this.left+(a-this.xmin)*this.dx},d.prototype.redraw=function(){return this.raphael.clear(),this._calc(),this.drawGrid(),this.drawGoals(),this.drawEvents(),this.draw?this.draw():void 0},d.prototype.measureText=function(a,b){var c,d;return null==b&&(b=0),d=this.raphael.text(100,100,a).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).rotate(b),c=d.getBBox(),d.remove(),c},d.prototype.yAxisFormat=function(a){return this.yLabelFormat(a)},d.prototype.yLabelFormat=function(a){return"function"==typeof this.options.yLabelFormat?this.options.yLabelFormat(a):""+this.options.preUnits+b.commas(a)+this.options.postUnits},d.prototype.drawGrid=function(){var a,b,c,d,e,f,g,h;if(this.options.grid!==!1||(e=this.options.axes)===!0||"both"===e||"y"===e){for(f=this.grid,h=[],c=0,d=f.length;d>c;c++)a=f[c],b=this.transY(a),((g=this.options.axes)===!0||"both"===g||"y"===g)&&this.drawYAxisLabel(this.left-this.options.padding/2,b,this.yAxisFormat(a)),this.options.grid?h.push(this.drawGridLine("M"+this.left+","+b+"H"+(this.left+this.width))):h.push(void 0);return h}},d.prototype.drawGoals=function(){var a,b,c,d,e,f,g;for(f=this.options.goals,g=[],c=d=0,e=f.length;e>d;c=++d)b=f[c],a=this.options.goalLineColors[c%this.options.goalLineColors.length],g.push(this.drawGoal(b,a));return g},d.prototype.drawEvents=function(){var a,b,c,d,e,f,g;for(f=this.events,g=[],c=d=0,e=f.length;e>d;c=++d)b=f[c],a=this.options.eventLineColors[c%this.options.eventLineColors.length],g.push(this.drawEvent(b,a));return g},d.prototype.drawGoal=function(a,b){return this.raphael.path("M"+this.left+","+this.transY(a)+"H"+this.right).attr("stroke",b).attr("stroke-width",this.options.goalStrokeWidth)},d.prototype.drawEvent=function(a,b){return this.raphael.path("M"+this.transX(a)+","+this.bottom+"V"+this.top).attr("stroke",b).attr("stroke-width",this.options.eventStrokeWidth)},d.prototype.drawYAxisLabel=function(a,b,c){return this.raphael.text(a,b,c).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor).attr("text-anchor","end")},d.prototype.drawGridLine=function(a){return this.raphael.path(a).attr("stroke",this.options.gridLineColor).attr("stroke-width",this.options.gridStrokeWidth)},d.prototype.startRange=function(a){return this.hover.hide(),this.selectFrom=a,this.selectionRect.attr({x:a,width:0}).show()},d.prototype.endRange=function(a){var b,c;return this.selectFrom?(c=Math.min(this.selectFrom,a),b=Math.max(this.selectFrom,a),this.options.rangeSelect.call(this.el,{start:this.data[this.hitTest(c)].x,end:this.data[this.hitTest(b)].x}),this.selectFrom=null):void 0},d.prototype.resizeHandler=function(){return this.timeoutId=null,this.raphael.setSize(this.el.width(),this.el.height()),this.redraw()},d}(b.EventEmitter),b.parseDate=function(a){var b,c,d,e,f,g,h,i,j,k,l;return"number"==typeof a?a:(c=a.match(/^(\d+) Q(\d)$/),e=a.match(/^(\d+)-(\d+)$/),f=a.match(/^(\d+)-(\d+)-(\d+)$/),h=a.match(/^(\d+) W(\d+)$/),i=a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/),j=a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/),c?new Date(parseInt(c[1],10),3*parseInt(c[2],10)-1,1).getTime():e?new Date(parseInt(e[1],10),parseInt(e[2],10)-1,1).getTime():f?new Date(parseInt(f[1],10),parseInt(f[2],10)-1,parseInt(f[3],10)).getTime():h?(k=new Date(parseInt(h[1],10),0,1),4!==k.getDay()&&k.setMonth(0,1+(4-k.getDay()+7)%7),k.getTime()+6048e5*parseInt(h[2],10)):i?i[6]?(g=0,"Z"!==i[6]&&(g=60*parseInt(i[8],10)+parseInt(i[9],10),"+"===i[7]&&(g=0-g)),Date.UTC(parseInt(i[1],10),parseInt(i[2],10)-1,parseInt(i[3],10),parseInt(i[4],10),parseInt(i[5],10)+g)):new Date(parseInt(i[1],10),parseInt(i[2],10)-1,parseInt(i[3],10),parseInt(i[4],10),parseInt(i[5],10)).getTime():j?(l=parseFloat(j[6]),b=Math.floor(l),d=Math.round(1e3*(l-b)),j[8]?(g=0,"Z"!==j[8]&&(g=60*parseInt(j[10],10)+parseInt(j[11],10),"+"===j[9]&&(g=0-g)),Date.UTC(parseInt(j[1],10),parseInt(j[2],10)-1,parseInt(j[3],10),parseInt(j[4],10),parseInt(j[5],10)+g,b,d)):new Date(parseInt(j[1],10),parseInt(j[2],10)-1,parseInt(j[3],10),parseInt(j[4],10),parseInt(j[5],10),b,d).getTime()):new Date(parseInt(a,10),0,1).getTime())},b.Hover=function(){function c(c){null==c&&(c={}),this.options=a.extend({},b.Hover.defaults,c),this.el=a("<div class='"+this.options["class"]+"'></div>"),this.el.hide(),this.options.parent.append(this.el)}return c.defaults={"class":"morris-hover morris-default-style"},c.prototype.update=function(a,b,c){return a?(this.html(a),this.show(),this.moveTo(b,c)):this.hide()},c.prototype.html=function(a){return this.el.html(a)},c.prototype.moveTo=function(a,b){var c,d,e,f,g,h;return g=this.options.parent.innerWidth(),f=this.options.parent.innerHeight(),d=this.el.outerWidth(),c=this.el.outerHeight(),e=Math.min(Math.max(0,a-d/2),g-d),null!=b?(h=b-c-10,0>h&&(h=b+10,h+c>f&&(h=f/2-c/2))):h=f/2-c/2,this.el.css({left:e+"px",top:parseInt(h)+"px"})},c.prototype.show=function(){return this.el.show()},c.prototype.hide=function(){return this.el.hide()},c}(),b.Line=function(a){function c(a){return this.hilight=f(this.hilight,this),this.onHoverOut=f(this.onHoverOut,this),this.onHoverMove=f(this.onHoverMove,this),this.onGridClick=f(this.onGridClick,this),this instanceof b.Line?(c.__super__.constructor.call(this,a),void 0):new b.Line(a)}return h(c,a),c.prototype.init=function(){return"always"!==this.options.hideHover?(this.hover=new b.Hover({parent:this.el}),this.on("hovermove",this.onHoverMove),this.on("hoverout",this.onHoverOut),this.on("gridclick",this.onGridClick)):void 0},c.prototype.defaults={lineWidth:3,pointSize:4,lineColors:["#0b62a4","#7A92A3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],pointStrokeWidths:[1],pointStrokeColors:["#ffffff"],pointFillColors:[],smooth:!0,xLabels:"auto",xLabelFormat:null,xLabelMargin:24,hideHover:!1},c.prototype.calc=function(){return this.calcPoints(),this.generatePaths()},c.prototype.calcPoints=function(){var a,b,c,d,e,f;for(e=this.data,f=[],c=0,d=e.length;d>c;c++)a=e[c],a._x=this.transX(a.x),a._y=function(){var c,d,e,f;for(e=a.y,f=[],c=0,d=e.length;d>c;c++)b=e[c],null!=b?f.push(this.transY(b)):f.push(b);return f}.call(this),f.push(a._ymax=Math.min.apply(Math,[this.bottom].concat(function(){var c,d,e,f;for(e=a._y,f=[],c=0,d=e.length;d>c;c++)b=e[c],null!=b&&f.push(b);return f}())));return f},c.prototype.hitTest=function(a){var b,c,d,e,f;if(0===this.data.length)return null;for(f=this.data.slice(1),b=d=0,e=f.length;e>d&&(c=f[b],!(a<(c._x+this.data[b]._x)/2));b=++d);return b},c.prototype.onGridClick=function(a,b){var c;return c=this.hitTest(a),this.fire("click",c,this.data[c].src,a,b)},c.prototype.onHoverMove=function(a){var b;return b=this.hitTest(a),this.displayHoverForRow(b)},c.prototype.onHoverOut=function(){return this.options.hideHover!==!1?this.displayHoverForRow(null):void 0},c.prototype.displayHoverForRow=function(a){var b;return null!=a?((b=this.hover).update.apply(b,this.hoverContentForRow(a)),this.hilight(a)):(this.hover.hide(),this.hilight())},c.prototype.hoverContentForRow=function(a){var b,c,d,e,f,g,h;for(d=this.data[a],b="<div class='morris-hover-row-label'>"+d.label+"</div>",h=d.y,c=f=0,g=h.length;g>f;c=++f)e=h[c],b+="<div class='morris-hover-point' style='color: "+this.colorFor(d,c,"label")+"'>\n  "+this.options.labels[c]+":\n  "+this.yLabelFormat(e)+"\n</div>";return"function"==typeof this.options.hoverCallback&&(b=this.options.hoverCallback(a,this.options,b,d.src)),[b,d._x,d._ymax]},c.prototype.generatePaths=function(){var a,c,d,e;return this.paths=function(){var f,g,h,j;for(j=[],c=f=0,g=this.options.ykeys.length;g>=0?g>f:f>g;c=g>=0?++f:--f)e="boolean"==typeof this.options.smooth?this.options.smooth:(h=this.options.ykeys[c],i.call(this.options.smooth,h)>=0),a=function(){var a,b,e,f;for(e=this.data,f=[],a=0,b=e.length;b>a;a++)d=e[a],void 0!==d._y[c]&&f.push({x:d._x,y:d._y[c]});return f}.call(this),a.length>1?j.push(b.Line.createPath(a,e,this.bottom)):j.push(null);return j}.call(this)},c.prototype.draw=function(){var a;return((a=this.options.axes)===!0||"both"===a||"x"===a)&&this.drawXAxis(),this.drawSeries(),this.options.hideHover===!1?this.displayHoverForRow(this.data.length-1):void 0},c.prototype.drawXAxis=function(){var a,c,d,e,f,g,h,i,j,k,l=this;for(h=this.bottom+this.options.padding/2,f=null,e=null,a=function(a,b){var c,d,g,i,j;return c=l.drawXAxisLabel(l.transX(b),h,a),j=c.getBBox(),c.transform("r"+-l.options.xLabelAngle),d=c.getBBox(),c.transform("t0,"+d.height/2+"..."),0!==l.options.xLabelAngle&&(i=-.5*j.width*Math.cos(l.options.xLabelAngle*Math.PI/180),c.transform("t"+i+",0...")),d=c.getBBox(),(null==f||f>=d.x+d.width||null!=e&&e>=d.x)&&d.x>=0&&d.x+d.width<l.el.width()?(0!==l.options.xLabelAngle&&(g=1.25*l.options.gridTextSize/Math.sin(l.options.xLabelAngle*Math.PI/180),e=d.x-g),f=d.x-l.options.xLabelMargin):c.remove()},d=this.options.parseTime?1===this.data.length&&"auto"===this.options.xLabels?[[this.data[0].label,this.data[0].x]]:b.labelSeries(this.xmin,this.xmax,this.width,this.options.xLabels,this.options.xLabelFormat):function(){var a,b,c,d;for(c=this.data,d=[],a=0,b=c.length;b>a;a++)g=c[a],d.push([g.label,g.x]);return d}.call(this),d.reverse(),k=[],i=0,j=d.length;j>i;i++)c=d[i],k.push(a(c[0],c[1]));return k},c.prototype.drawSeries=function(){var a,b,c,d,e,f;for(this.seriesPoints=[],a=b=d=this.options.ykeys.length-1;0>=d?0>=b:b>=0;a=0>=d?++b:--b)this._drawLineFor(a);for(f=[],a=c=e=this.options.ykeys.length-1;0>=e?0>=c:c>=0;a=0>=e?++c:--c)f.push(this._drawPointFor(a));return f},c.prototype._drawPointFor=function(a){var b,c,d,e,f,g;for(this.seriesPoints[a]=[],f=this.data,g=[],d=0,e=f.length;e>d;d++)c=f[d],b=null,null!=c._y[a]&&(b=this.drawLinePoint(c._x,c._y[a],this.colorFor(c,a,"point"),a)),g.push(this.seriesPoints[a].push(b));return g},c.prototype._drawLineFor=function(a){var b;return b=this.paths[a],null!==b?this.drawLinePath(b,this.colorFor(null,a,"line"),a):void 0},c.createPath=function(a,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;for(k="",c&&(g=b.Line.gradients(a)),l={y:null},h=q=0,r=a.length;r>q;h=++q)e=a[h],null!=e.y&&(null!=l.y?c?(f=g[h],j=g[h-1],i=(e.x-l.x)/4,m=l.x+i,o=Math.min(d,l.y+i*j),n=e.x-i,p=Math.min(d,e.y-i*f),k+="C"+m+","+o+","+n+","+p+","+e.x+","+e.y):k+="L"+e.x+","+e.y:c&&null==g[h]||(k+="M"+e.x+","+e.y)),l=e;return k},c.gradients=function(a){var b,c,d,e,f,g,h,i;for(c=function(a,b){return(a.y-b.y)/(a.x-b.x)},i=[],d=g=0,h=a.length;h>g;d=++g)b=a[d],null!=b.y?(e=a[d+1]||{y:null},f=a[d-1]||{y:null},null!=f.y&&null!=e.y?i.push(c(f,e)):null!=f.y?i.push(c(f,b)):null!=e.y?i.push(c(b,e)):i.push(null)):i.push(null);return i},c.prototype.hilight=function(a){var b,c,d,e,f;if(null!==this.prevHilight&&this.prevHilight!==a)for(b=c=0,e=this.seriesPoints.length-1;e>=0?e>=c:c>=e;b=e>=0?++c:--c)this.seriesPoints[b][this.prevHilight]&&this.seriesPoints[b][this.prevHilight].animate(this.pointShrinkSeries(b));if(null!==a&&this.prevHilight!==a)for(b=d=0,f=this.seriesPoints.length-1;f>=0?f>=d:d>=f;b=f>=0?++d:--d)this.seriesPoints[b][a]&&this.seriesPoints[b][a].animate(this.pointGrowSeries(b));return this.prevHilight=a},c.prototype.colorFor=function(a,b,c){return"function"==typeof this.options.lineColors?this.options.lineColors.call(this,a,b,c):"point"===c?this.options.pointFillColors[b%this.options.pointFillColors.length]||this.options.lineColors[b%this.options.lineColors.length]:this.options.lineColors[b%this.options.lineColors.length]},c.prototype.drawXAxisLabel=function(a,b,c){return this.raphael.text(a,b,c).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)},c.prototype.drawLinePath=function(a,b,c){return this.raphael.path(a).attr("stroke",b).attr("stroke-width",this.lineWidthForSeries(c))},c.prototype.drawLinePoint=function(a,b,c,d){return this.raphael.circle(a,b,this.pointSizeForSeries(d)).attr("fill",c).attr("stroke-width",this.pointStrokeWidthForSeries(d)).attr("stroke",this.pointStrokeColorForSeries(d))},c.prototype.pointStrokeWidthForSeries=function(a){return this.options.pointStrokeWidths[a%this.options.pointStrokeWidths.length]},c.prototype.pointStrokeColorForSeries=function(a){return this.options.pointStrokeColors[a%this.options.pointStrokeColors.length]},c.prototype.lineWidthForSeries=function(a){return this.options.lineWidth instanceof Array?this.options.lineWidth[a%this.options.lineWidth.length]:this.options.lineWidth},c.prototype.pointSizeForSeries=function(a){return this.options.pointSize instanceof Array?this.options.pointSize[a%this.options.pointSize.length]:this.options.pointSize},c.prototype.pointGrowSeries=function(a){return Raphael.animation({r:this.pointSizeForSeries(a)+3},25,"linear")},c.prototype.pointShrinkSeries=function(a){return Raphael.animation({r:this.pointSizeForSeries(a)},25,"linear")},c}(b.Grid),b.labelSeries=function(c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;if(j=200*(d-c)/e,i=new Date(c),n=b.LABEL_SPECS[f],void 0===n)for(r=b.AUTO_LABEL_ORDER,p=0,q=r.length;q>p;p++)if(k=r[p],m=b.LABEL_SPECS[k],j>=m.span){n=m;break}for(void 0===n&&(n=b.LABEL_SPECS.second),g&&(n=a.extend({},n,{fmt:g})),h=n.start(i),l=[];(o=h.getTime())<=d;)o>=c&&l.push([n.fmt(h),o]),n.incr(h);return l},c=function(a){return{span:60*a*1e3,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours())},fmt:function(a){return""+b.pad2(a.getHours())+":"+b.pad2(a.getMinutes())},incr:function(b){return b.setUTCMinutes(b.getUTCMinutes()+a)}}},d=function(a){return{span:1e3*a,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes())},fmt:function(a){return""+b.pad2(a.getHours())+":"+b.pad2(a.getMinutes())+":"+b.pad2(a.getSeconds())},incr:function(b){return b.setUTCSeconds(b.getUTCSeconds()+a)}}},b.LABEL_SPECS={decade:{span:1728e8,start:function(a){return new Date(a.getFullYear()-a.getFullYear()%10,0,1)},fmt:function(a){return""+a.getFullYear()},incr:function(a){return a.setFullYear(a.getFullYear()+10)}},year:{span:1728e7,start:function(a){return new Date(a.getFullYear(),0,1)},fmt:function(a){return""+a.getFullYear()},incr:function(a){return a.setFullYear(a.getFullYear()+1)}},month:{span:24192e5,start:function(a){return new Date(a.getFullYear(),a.getMonth(),1)},fmt:function(a){return""+a.getFullYear()+"-"+b.pad2(a.getMonth()+1)},incr:function(a){return a.setMonth(a.getMonth()+1)}},week:{span:6048e5,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate())},fmt:function(a){return""+a.getFullYear()+"-"+b.pad2(a.getMonth()+1)+"-"+b.pad2(a.getDate())},incr:function(a){return a.setDate(a.getDate()+7)}},day:{span:864e5,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate())},fmt:function(a){return""+a.getFullYear()+"-"+b.pad2(a.getMonth()+1)+"-"+b.pad2(a.getDate())},incr:function(a){return a.setDate(a.getDate()+1)}},hour:c(60),"30min":c(30),"15min":c(15),"10min":c(10),"5min":c(5),minute:c(1),"30sec":d(30),"15sec":d(15),"10sec":d(10),"5sec":d(5),second:d(1)},b.AUTO_LABEL_ORDER=["decade","year","month","week","day","hour","30min","15min","10min","5min","minute","30sec","15sec","10sec","5sec","second"],b.Area=function(c){function d(c){var f;return this instanceof b.Area?(f=a.extend({},e,c),this.cumulative=!f.behaveLikeLine,"auto"===f.fillOpacity&&(f.fillOpacity=f.behaveLikeLine?.8:1),d.__super__.constructor.call(this,f),void 0):new b.Area(c)}var e;return h(d,c),e={fillOpacity:"auto",behaveLikeLine:!1},d.prototype.calcPoints=function(){var a,b,c,d,e,f,g;for(f=this.data,g=[],d=0,e=f.length;e>d;d++)a=f[d],a._x=this.transX(a.x),b=0,a._y=function(){var d,e,f,g;for(f=a.y,g=[],d=0,e=f.length;e>d;d++)c=f[d],this.options.behaveLikeLine?g.push(this.transY(c)):(b+=c||0,g.push(this.transY(b)));return g}.call(this),g.push(a._ymax=Math.max.apply(Math,a._y));return g},d.prototype.drawSeries=function(){var a,b,c,d,e,f,g,h;for(this.seriesPoints=[],b=this.options.behaveLikeLine?function(){f=[];for(var a=0,b=this.options.ykeys.length-1;b>=0?b>=a:a>=b;b>=0?a++:a--)f.push(a);return f}.apply(this):function(){g=[];for(var a=e=this.options.ykeys.length-1;0>=e?0>=a:a>=0;0>=e?a++:a--)g.push(a);return g}.apply(this),h=[],c=0,d=b.length;d>c;c++)a=b[c],this._drawFillFor(a),this._drawLineFor(a),h.push(this._drawPointFor(a));return h},d.prototype._drawFillFor=function(a){var b;return b=this.paths[a],null!==b?(b+="L"+this.transX(this.xmax)+","+this.bottom+"L"+this.transX(this.xmin)+","+this.bottom+"Z",this.drawFilledPath(b,this.fillForSeries(a))):void 0},d.prototype.fillForSeries=function(a){var b;return b=Raphael.rgb2hsl(this.colorFor(this.data[a],a,"line")),Raphael.hsl(b.h,this.options.behaveLikeLine?.9*b.s:.75*b.s,Math.min(.98,this.options.behaveLikeLine?1.2*b.l:1.25*b.l))},d.prototype.drawFilledPath=function(a,b){return this.raphael.path(a).attr("fill",b).attr("fill-opacity",this.options.fillOpacity).attr("stroke","none")},d}(b.Line),b.Bar=function(c){function d(c){return this.onHoverOut=f(this.onHoverOut,this),this.onHoverMove=f(this.onHoverMove,this),this.onGridClick=f(this.onGridClick,this),this instanceof b.Bar?(d.__super__.constructor.call(this,a.extend({},c,{parseTime:!1})),void 0):new b.Bar(c)}return h(d,c),d.prototype.init=function(){return this.cumulative=this.options.stacked,"always"!==this.options.hideHover?(this.hover=new b.Hover({parent:this.el}),this.on("hovermove",this.onHoverMove),this.on("hoverout",this.onHoverOut),this.on("gridclick",this.onGridClick)):void 0},d.prototype.defaults={barSizeRatio:.75,barGap:3,barColors:["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],barOpacity:1,barRadius:[0,0,0,0],xLabelMargin:50},d.prototype.calc=function(){var a;return this.calcBars(),this.options.hideHover===!1?(a=this.hover).update.apply(a,this.hoverContentForRow(this.data.length-1)):void 0},d.prototype.calcBars=function(){var a,b,c,d,e,f,g;for(f=this.data,g=[],a=d=0,e=f.length;e>d;a=++d)b=f[a],b._x=this.left+this.width*(a+.5)/this.data.length,g.push(b._y=function(){var a,d,e,f;for(e=b.y,f=[],a=0,d=e.length;d>a;a++)c=e[a],null!=c?f.push(this.transY(c)):f.push(null);return f}.call(this));return g},d.prototype.draw=function(){var a;return((a=this.options.axes)===!0||"both"===a||"x"===a)&&this.drawXAxis(),this.drawSeries()},d.prototype.drawXAxis=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(j=this.bottom+(this.options.xAxisLabelTopPadding||this.options.padding/2),g=null,f=null,m=[],a=k=0,l=this.data.length;l>=0?l>k:k>l;a=l>=0?++k:--k)h=this.data[this.data.length-1-a],b=this.drawXAxisLabel(h._x,j,h.label),i=b.getBBox(),b.transform("r"+-this.options.xLabelAngle),c=b.getBBox(),b.transform("t0,"+c.height/2+"..."),0!==this.options.xLabelAngle&&(e=-.5*i.width*Math.cos(this.options.xLabelAngle*Math.PI/180),b.transform("t"+e+",0...")),(null==g||g>=c.x+c.width||null!=f&&f>=c.x)&&c.x>=0&&c.x+c.width<this.el.width()?(0!==this.options.xLabelAngle&&(d=1.25*this.options.gridTextSize/Math.sin(this.options.xLabelAngle*Math.PI/180),f=c.x-d),m.push(g=c.x-this.options.xLabelMargin)):m.push(b.remove());return m},d.prototype.drawSeries=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;return c=this.width/this.options.data.length,h=this.options.stacked?1:this.options.ykeys.length,a=(c*this.options.barSizeRatio-this.options.barGap*(h-1))/h,this.options.barSize&&(a=Math.min(a,this.options.barSize)),l=c-a*h-this.options.barGap*(h-1),g=l/2,o=this.ymin<=0&&this.ymax>=0?this.transY(0):null,this.bars=function(){var h,l,p,q;for(p=this.data,q=[],d=h=0,l=p.length;l>h;d=++h)i=p[d],e=0,q.push(function(){var h,l,p,q;for(p=i._y,q=[],j=h=0,l=p.length;l>h;j=++h)n=p[j],null!==n?(o?(m=Math.min(n,o),b=Math.max(n,o)):(m=n,b=this.bottom),f=this.left+d*c+g,this.options.stacked||(f+=j*(a+this.options.barGap)),k=b-m,this.options.verticalGridCondition&&this.options.verticalGridCondition(i.x)&&this.drawBar(this.left+d*c,this.top,c,Math.abs(this.top-this.bottom),this.options.verticalGridColor,this.options.verticalGridOpacity,this.options.barRadius),this.options.stacked&&(m-=e),this.drawBar(f,m,a,k,this.colorFor(i,j,"bar"),this.options.barOpacity,this.options.barRadius),q.push(e+=k)):q.push(null);return q}.call(this));return q}.call(this)},d.prototype.colorFor=function(a,b,c){var d,e;return"function"==typeof this.options.barColors?(d={x:a.x,y:a.y[b],label:a.label},e={index:b,key:this.options.ykeys[b],label:this.options.labels[b]},this.options.barColors.call(this,d,e,c)):this.options.barColors[b%this.options.barColors.length]},d.prototype.hitTest=function(a){return 0===this.data.length?null:(a=Math.max(Math.min(a,this.right),this.left),Math.min(this.data.length-1,Math.floor((a-this.left)/(this.width/this.data.length))))},d.prototype.onGridClick=function(a,b){var c;return c=this.hitTest(a),this.fire("click",c,this.data[c].src,a,b)},d.prototype.onHoverMove=function(a){var b,c;return b=this.hitTest(a),(c=this.hover).update.apply(c,this.hoverContentForRow(b))},d.prototype.onHoverOut=function(){return this.options.hideHover!==!1?this.hover.hide():void 0},d.prototype.hoverContentForRow=function(a){var b,c,d,e,f,g,h,i;for(d=this.data[a],b="<div class='morris-hover-row-label'>"+d.label+"</div>",i=d.y,c=g=0,h=i.length;h>g;c=++g)f=i[c],b+="<div class='morris-hover-point' style='color: "+this.colorFor(d,c,"label")+"'>\n  "+this.options.labels[c]+":\n  "+this.yLabelFormat(f)+"\n</div>";return"function"==typeof this.options.hoverCallback&&(b=this.options.hoverCallback(a,this.options,b,d.src)),e=this.left+(a+.5)*this.width/this.data.length,[b,e]},d.prototype.drawXAxisLabel=function(a,b,c){var d;return d=this.raphael.text(a,b,c).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)},d.prototype.drawBar=function(a,b,c,d,e,f,g){var h,i;return h=Math.max.apply(Math,g),i=0===h||h>d?this.raphael.rect(a,b,c,d):this.raphael.path(this.roundedRect(a,b,c,d,g)),i.attr("fill",e).attr("fill-opacity",f).attr("stroke","none")},d.prototype.roundedRect=function(a,b,c,d,e){return null==e&&(e=[0,0,0,0]),["M",a,e[0]+b,"Q",a,b,a+e[0],b,"L",a+c-e[1],b,"Q",a+c,b,a+c,b+e[1],"L",a+c,b+d-e[2],"Q",a+c,b+d,a+c-e[2],b+d,"L",a+e[3],b+d,"Q",a,b+d,a,b+d-e[3],"Z"]},d}(b.Grid),b.Donut=function(c){function d(c){this.resizeHandler=f(this.resizeHandler,this),this.select=f(this.select,this),this.click=f(this.click,this);var d=this;if(!(this instanceof b.Donut))return new b.Donut(c);if(this.options=a.extend({},this.defaults,c),this.el="string"==typeof c.element?a(document.getElementById(c.element)):a(c.element),null===this.el||0===this.el.length)throw new Error("Graph placeholder not found.");void 0!==c.data&&0!==c.data.length&&(this.raphael=new Raphael(this.el[0]),this.options.resize&&a(window).bind("resize",function(){return null!=d.timeoutId&&window.clearTimeout(d.timeoutId),d.timeoutId=window.setTimeout(d.resizeHandler,100)}),this.setData(c.data))}return h(d,c),d.prototype.defaults={colors:["#0B62A4","#3980B5","#679DC6","#95BBD7","#B0CCE1","#095791","#095085","#083E67","#052C48","#042135"],backgroundColor:"#FFFFFF",labelColor:"#000000",formatter:b.commas,resize:!1},d.prototype.redraw=function(){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;for(this.raphael.clear(),c=this.el.width()/2,d=this.el.height()/2,n=(Math.min(c,d)-10)/3,l=0,u=this.values,o=0,r=u.length;r>o;o++)m=u[o],l+=m;for(i=5/(2*n),a=1.9999*Math.PI-i*this.data.length,g=0,f=0,this.segments=[],v=this.values,e=p=0,s=v.length;s>p;e=++p)m=v[e],j=g+i+a*(m/l),k=new b.DonutSegment(c,d,2*n,n,g,j,this.data[e].color||this.options.colors[f%this.options.colors.length],this.options.backgroundColor,f,this.raphael),k.render(),this.segments.push(k),k.on("hover",this.select),k.on("click",this.click),g=j,f+=1;for(this.text1=this.drawEmptyDonutLabel(c,d-10,this.options.labelColor,15,800),this.text2=this.drawEmptyDonutLabel(c,d+10,this.options.labelColor,14),h=Math.max.apply(Math,this.values),f=0,w=this.values,x=[],q=0,t=w.length;t>q;q++){if(m=w[q],m===h){this.select(f);
break}x.push(f+=1)}return x},d.prototype.setData=function(a){var b;return this.data=a,this.values=function(){var a,c,d,e;for(d=this.data,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(parseFloat(b.value));return e}.call(this),this.redraw()},d.prototype.click=function(a){return this.fire("click",a,this.data[a])},d.prototype.select=function(a){var b,c,d,e,f,g;for(g=this.segments,e=0,f=g.length;f>e;e++)c=g[e],c.deselect();return d=this.segments[a],d.select(),b=this.data[a],this.setLabels(b.label,this.options.formatter(b.value,b))},d.prototype.setLabels=function(a,b){var c,d,e,f,g,h,i,j;return c=2*(Math.min(this.el.width()/2,this.el.height()/2)-10)/3,f=1.8*c,e=c/2,d=c/3,this.text1.attr({text:a,transform:""}),g=this.text1.getBBox(),h=Math.min(f/g.width,e/g.height),this.text1.attr({transform:"S"+h+","+h+","+(g.x+g.width/2)+","+(g.y+g.height)}),this.text2.attr({text:b,transform:""}),i=this.text2.getBBox(),j=Math.min(f/i.width,d/i.height),this.text2.attr({transform:"S"+j+","+j+","+(i.x+i.width/2)+","+i.y})},d.prototype.drawEmptyDonutLabel=function(a,b,c,d,e){var f;return f=this.raphael.text(a,b,"").attr("font-size",d).attr("fill",c),null!=e&&f.attr("font-weight",e),f},d.prototype.resizeHandler=function(){return this.timeoutId=null,this.raphael.setSize(this.el.width(),this.el.height()),this.redraw()},d}(b.EventEmitter),b.DonutSegment=function(a){function b(a,b,c,d,e,g,h,i,j,k){this.cx=a,this.cy=b,this.inner=c,this.outer=d,this.color=h,this.backgroundColor=i,this.index=j,this.raphael=k,this.deselect=f(this.deselect,this),this.select=f(this.select,this),this.sin_p0=Math.sin(e),this.cos_p0=Math.cos(e),this.sin_p1=Math.sin(g),this.cos_p1=Math.cos(g),this.is_long=g-e>Math.PI?1:0,this.path=this.calcSegment(this.inner+3,this.inner+this.outer-5),this.selectedPath=this.calcSegment(this.inner+3,this.inner+this.outer),this.hilight=this.calcArc(this.inner)}return h(b,a),b.prototype.calcArcPoints=function(a){return[this.cx+a*this.sin_p0,this.cy+a*this.cos_p0,this.cx+a*this.sin_p1,this.cy+a*this.cos_p1]},b.prototype.calcSegment=function(a,b){var c,d,e,f,g,h,i,j,k,l;return k=this.calcArcPoints(a),c=k[0],e=k[1],d=k[2],f=k[3],l=this.calcArcPoints(b),g=l[0],i=l[1],h=l[2],j=l[3],"M"+c+","+e+("A"+a+","+a+",0,"+this.is_long+",0,"+d+","+f)+("L"+h+","+j)+("A"+b+","+b+",0,"+this.is_long+",1,"+g+","+i)+"Z"},b.prototype.calcArc=function(a){var b,c,d,e,f;return f=this.calcArcPoints(a),b=f[0],d=f[1],c=f[2],e=f[3],"M"+b+","+d+("A"+a+","+a+",0,"+this.is_long+",0,"+c+","+e)},b.prototype.render=function(){var a=this;return this.arc=this.drawDonutArc(this.hilight,this.color),this.seg=this.drawDonutSegment(this.path,this.color,this.backgroundColor,function(){return a.fire("hover",a.index)},function(){return a.fire("click",a.index)})},b.prototype.drawDonutArc=function(a,b){return this.raphael.path(a).attr({stroke:b,"stroke-width":2,opacity:0})},b.prototype.drawDonutSegment=function(a,b,c,d,e){return this.raphael.path(a).attr({fill:b,stroke:c,"stroke-width":3}).hover(d).click(e)},b.prototype.select=function(){return this.selected?void 0:(this.seg.animate({path:this.selectedPath},150,"<>"),this.arc.animate({opacity:1},150,"<>"),this.selected=!0)},b.prototype.deselect=function(){return this.selected?(this.seg.animate({path:this.path},150,"<>"),this.arc.animate({opacity:0},150,"<>"),this.selected=!1):void 0},b}(b.EventEmitter)}).call(this);
// Morris.js Charts sample data for SB Admin template

$(function() {
 

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2012-10-01',
            visits: 802
        }, {
            d: '2012-10-02',
            visits: 783
        }, {
            d: '2012-10-03',
            visits: 820
        }, {
            d: '2012-10-04',
            visits: 839
        }, {
            d: '2012-10-05',
            visits: 792
        }, {
            d: '2012-10-06',
            visits: 859
        }, {
            d: '2012-10-07',
            visits: 790
        }, {
            d: '2012-10-08',
            visits: 1680
        }, {
            d: '2012-10-09',
            visits: 1592
        }, {
            d: '2012-10-10',
            visits: 1420
        }, {
            d: '2012-10-11',
            visits: 882
        }, {
            d: '2012-10-12',
            visits: 889
        }, {
            d: '2012-10-13',
            visits: 819
        }, {
            d: '2012-10-14',
            visits: 849
        }, {
            d: '2012-10-15',
            visits: 870
        }, {
            d: '2012-10-16',
            visits: 1063
        }, {
            d: '2012-10-17',
            visits: 1192
        }, {
            d: '2012-10-18',
            visits: 1224
        }, {
            d: '2012-10-19',
            visits: 1329
        }, {
            d: '2012-10-20',
            visits: 1329
        }, {
            d: '2012-10-21',
            visits: 1239
        }, {
            d: '2012-10-22',
            visits: 1190
        }, {
            d: '2012-10-23',
            visits: 1312
        }, {
            d: '2012-10-24',
            visits: 1293
        }, {
            d: '2012-10-25',
            visits: 1283
        }, {
            d: '2012-10-26',
            visits: 1248
        }, {
            d: '2012-10-27',
            visits: 1323
        }, {
            d: '2012-10-28',
            visits: 1390
        }, {
            d: '2012-10-29',
            visits: 1420
        }, {
            d: '2012-10-30',
            visits: 1529
        }, {
            d: '2012-10-31',
            visits: 1892
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

  


});


















// require_tree .

$(document).ready(function(){
  $(".alert").fadeIn();
  $(".alert").fadeOut(30000);
});

