Object.extend=function(a,e){if(Object.isAssocArray(e)){if(a==null||Object.isUndefined(a)){a={}}for(var d in e){if(Object.isAssocArray(e)){if(Object.isUndefined(a[d])||a[d]==null||a[d]==false){a[d]={}}a[d]=Object.extend(a[d],e[d])}else{if(Object.isArray(e[d])){a[d]=Object.extend(a[d],e[d])}else{a[d]=e[d]}}}delete d}else{if(Object.isArray(e)){if(!Object.isArray(a)){a=[]}for(var c=0,b=e.length;c<b;c++){a[c]=Object.extend(a[c],e[c])}delete c,b}else{a=e}}return a};Object.clone=function(a){var b={};b=Object.extend(b,a);return b};Object.isUndefined=function(a){return typeof a=="undefined"};Object.isDefined=function(a){return typeof a!="undefined"};Object.isFunction=function(a){return typeof a=="function"};Object.isString=function(a){return typeof a=="string"};Object.isNumber=function(a){return typeof a=="number"};Object.isNumeric=function(a){return a!=""&&Object.prototype.toString.call(a)!=="[object Array]"&&!isNaN(Number(a))};Object.isElement=function(a){return a&&a.nodeType==1};Object.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"};Object.isDate=function(a){return Object.prototype.toString.call(a)==="[object Date]"};Object.isNull=function(a){return a===null};Object.isAssocArray=function(a){return Object.prototype.toString.call(a)==="[object Object]"};Object.isBoolean=function(a){return typeof a=="boolean"};Object.isEmpty=function(b,a){if(!b||Object.isUndefined(b)||Object.isNull(b)||(Object.isArray(b)&&b.length===0)||(Object.isString(b)&&(b.trim()===""||b==="0"))||(Object.isNumber(b&&b===0))){return true}else{if(a&&/^(\t*)|(\v*)|(\s*)$/.test(b)){return true}}return false};Object.toQueryString=function(a){if(this.isString(a)){return a}var c="";for(var b in a){if(!this.isFunction(a[b])&&typeof a[b]!="object"){c+=encodeURIComponent(b)+"="+encodeURIComponent(a[b])+"&"}}return c};Object.toIndexedArray=function(b){var a=[];for(var c in b){a.push(b[c])}return a};Object.toArray=function(c){if(Object.isArray(c)){return c}if(Object.isString(c)){return c.split("")}else{if(Object.isNumber(c)){return[c]}else{if(Object.isAssocArray(c)){var b=[];if(Object.isIndexed(c)){for(item in c){if(Object.isNumber(item)){b[item]=c[item]}}}else{var a=-1;for(item in c){a++;if(Object.isNumber(item)){if(Object.isDefined(b[a])){var d=(a+1);b[d]=b[a];b[a]=c[item];a++;continue}}b[a]=c[item]}}return b}}}return[c]};Object.isIndexed=function(b){if(Object.isAssocArray(b)){var a=false;for(var c in b){a=true;if(!Object.isNumeric(c)){return false}}return a}return false};Object.ifSetOr=function(a,b){return Object.isDefined(a)?a:b||null};var $break={};Object.extend(Array.prototype,{_each:function(b){for(var a=0,c=this.length;a<c;a++){b(this[a])}},each:function(b){var a=0;try{this._each(function(d){b(d,a++)})}catch(c){if(c!=$break){throw c}}return this},find:function(b){var a;this.each(function(d,c){if(b(d,c)){a=d;throw $break}});return a},findAll:function(b){var a=[];this.each(function(d,c){if(b(d,c)){a.push(d)}});return a},first:function(){return this[0]},last:function(){return this[this.length-1]},inArray:function(a){return(this.find(function(b){return(a==b)?true:false})!=undefined)?true:false},without:function(){if(Object.isArray(arguments[0])){var a=$A(arguments[0]);return this.findAll(function(b){return !a.include(b)})}else{var a=$A(arguments);return this.findAll(function(b){return !a.include(b)})}},min:function(){return Math.min.apply(this,this)},max:function(){return Math.max.apply(this,this)},sum:function(){var c=0;for(var b=0,a=this.length;b<a;b++){c+=Number(this[b])}return c},average:function(){return this.sum()/this.length}});if(Object.isUndefined(window.Element)){window.Element=function(){}}Object.extend(Element.prototype,{insert:function(f,e){var j={TABLE:["<table>","</table>",1],TBODY:["<table><tbody>","</tbody></table>",2],TR:["<table><tbody><tr>","</tr></tbody></table>",3],TD:["<table><tbody><tr><td>","</td></tr></tbody></table>",4],SELECT:["<select>","</select>",1]};if(Object.isUndefined(e)){e="bottom"}e=e.toLowerCase();if(!["before","after","top","bottom"].inArray(e)){e="bottom"}var g=function(){};switch(e){case"before":g=function(i,l){i.parentNode.insertBefore(l,i)};break;case"after":g=function(i,l){i.parentNode.insertBefore(l,i.nextSibling)};break;case"top":g=function(i,l){i.insertBefore(l,i.firstChild)};break;case"bottom":g=function(i,l){i.appendChild(l)};break}if(Object.isElement(f)){g(this,f);return}var b=((e=="before"||e=="after")?this.parentNode:this).tagName.toUpperCase();var c=document.createElement("div");var k=j[b];if(k){c.innerHTML=k[0]+f+k[1];var a=function(){c=c.firstChild};for(var d=0;d<t[2];d++){a()}}else{c.innerHTML=f}var h=$A(c.childNodes);delete c;if(e=="top"||e=="after"){h.reverse()}h.each(g.curry(this));return this},update:function(a){if(Object.isElement(a)){$A(this.childNodes).each(function(b){this.removeChild(b)}.bind(this));this.appendChild(a)}else{this.innerHTML=a}return this},replace:function(a){$return=this.parentNode;if(Object.isElement(a)){this.parentNode.replaceChild(a,this)}else{this.parentNode.innerHTML=a}return $return},remove:function(){$return=this.parentNode;try{$return.removeChild(this)}catch(a){}return $return},show:function(){this.style.display="";return this},hide:function(){this.style.display="none";return this},isVisible:function(a){if((this.getStyle("display")=="none"||window.getComputedStyle(this,"").display=="none")||(this.getStyle("visibility")=="hidden"||window.getComputedStyle(this,"").visibility=="hidden")){return false}return true},hasClassName:function(a){return this.className.split(" ").inArray(a)},addClassName:function(a){if(!this.hasClassName(a)){this.className+=" "+a}return this},removeClassName:function(a){var b=[];this.className.split(" ").each(function(c){if(c!=a){b.push(c)}});this.className=b.join(" ");return this},toggleClassName:function(a){if(this.hasClassName(a)){this.removeClassName(a)}else{this.addClassName(a)}},swapClassNames:function(b,a){return this.removeClassName(b).addClassName(a)},select:function(a){return this.querySelector(a)},selectAll:function(b,a){if(a){if(Object.isFunction(this.querySelectorAll)){return this.querySelectorAll(b)}else{if(!Object.isUndefined(Ext)){return new Ext.Element(this).query(b)}}}else{if(Object.isFunction(this.querySelectorAll)){return $A(this.querySelectorAll(b))}else{if(!Object.isUndefined(Ext)){return $A(new Ext.Element(this).query(b))}}}},setStyle:function(a){if(Object.isString(a)){this.style.cssText+=";"+a}else{for(var b in a){this.style[b]=a[b]}}return this},getStyle:function(c){if(c.indexOf("-")>-1){var d="";for(var b=0,a=c.length;b<a;b++){if(c.charAt(b)=="-"){b++;d+=c.charAt(b).toUpperCase()}else{d+=c.charAt(b)}}return this.style[d]}else{return this.style[c]}},cleanWhitespace:function(){var b=this.firstChild;while(b){var a=b.nextSibling;if(b.nodeType==3&&!/\S/.test(b.nodeValue)){this.removeChild(b)}b=a}return this},next:function(){this.parentNode.cleanWhitespace();if(arguments.length==1){var a=$A(arguments).first();if(Object.isNumber(a)){var c=this.nextSibling;for(var b=0;b<a;b++){c=c.nextSibling}delete b;return c}else{}}else{return this.nextSibling}},previous:function(){this.parentNode.cleanWhitespace();if(arguments.length==1){var a=$A(arguments).first();if(Object.isNumber(a)){var c=this.previousSibling;for(var b=0;b<a;b++){c=c.previousSibling}delete b;return c}}else{return this.previousSibling}},down:function(){this.cleanWhitespace();if(arguments.length==1){var a=$A(arguments).first();if(Object.isNumber(a)){var d=this.firstChild;for(var c=0;c<a;c++){d=d.firstChild}delete c;return d}else{return this.select(a)}}else{if(arguments.length==2){var b=$A(arguments);return this.selectAll(b[0])[b[1]]}else{return this.firstChild}}},up:function(){try{this.parentNode.cleanWhitespace()}catch(d){try{this.parentElement.cleanWhitespace()}catch(d){}}if(arguments.length==1){var a=$A(arguments).first();if(Object.isNumber(a)){var c=this;for(var b=0;b<a;b++){c=c.parentNode}delete b;return c}else{}}else{return this.parentNode}}});Object.extend(Function.prototype,{bind:function(){if(arguments.length<2&&typeof arguments[0]=="undefined"){return this}var c=this,b=$A(arguments),a=b.shift();return function(){return c.apply(a,b.concat($A(arguments)))}},curry:function(){if(!arguments.length){return this}var a=this,b=$A(arguments);return function(){return a.apply(this,b.concat($A(arguments)))}},intercept:function(){if(arguments.length<1&&typeof arguments[0]!="function"){return}var c=this,a=$A(arguments),b=a.shift();return function(){b.apply(this,a.concat($A(arguments)));return c.apply(this,a.concat($A(arguments)))}},join:function(){if(arguments.length<1&&typeof arguments[0]!="function"){return}var c=this,a=$A(arguments),b=a.shift();return function(){c.apply(this,a.concat($A(arguments)));return b.apply(this,a.concat($A(arguments)))}},sequencedJoin:function(){if(arguments.length<1&&typeof arguments[0]!="function"){return}var c=this,a=$A(arguments),b=a.shift();return function(){var d=c.apply(this,a.concat($A(arguments)));if(Object.isAssocArray(d)&&Object.isDefined(d.args)){return b.apply(this,d.args)}return b.call(this,d)}},defer:function(){var e=this,d=$A(arguments),c=d.shift(),b=d.shift(),a=d.shift();if(!Object.isArray(a)){a=[a]}window.setTimeout(function(){e.apply(b,a)},c)},delay:function(){arguments[0]=arguments[0]*1000;this.defer.apply(this,arguments)}});Object.extend(Math,{roundToNearest:function(a,b){return Math.round(a/b)*b}});Object.extend(String.prototype,{nl2br:function(){return this.replace(/[\r\n\f]/g,"<br />")},trim:function(){var c=this.replace(/^\s\s*/,""),a=/\s/,b=c.length;while(a.test(c.charAt(--b))){}return c.slice(0,b+1)},toQueryParams:function(b){var a=this.trim().match(/([^?#]*)(#.*)?$/);if(!a){return{}}return a[1].split(b||"&").inject({},function(e,f){if((f=f.split("="))[0]){var c=decodeURIComponent(f.shift());var d=f.length>1?f.join("="):f[0];if(!Object.isUndefined(d)){d=decodeURIComponent(d)}if(c in e){if(!Object.isArray(e[c])){e[c]=[e[c]]}e[c].push(d)}else{e[c]=d}}return e})},ellipse:function(a){if(this.length>a){return this.substr(0,a-3)+"..."}return this}});Object.extend(Number.prototype,{toRad:function(){return this*Math.PI/180},toDeg:function(){return this*180/Math.PI},toBrng:function(){return(this.toDeg()+360)%360}});$=function(a){if(Object.isElement(a)){return a}return document.getElementById(a)};$A=function(c){if(!c){return[]}if(!(typeof c=="function"&&c=="[object NodeList]")&&c.toArray){return c.toArray()}var b=c.length||0,a=new Array(b);while(b--){a[b]=c[b]}return a};var $PWT={version:"1.2.0",emptyFunction:function(){},init:function(){delete this.init},namespace:(function(){var b=/^(?:[\$a-zA-Z_]\w*[.])*[\$a-zA-Z_]\w*$/;function a(e,f){var d,h;if(Object.isString(e)){var c,g;if(!b.test(e)){throw new Error('"'+e+'" is not a valid name for a package.')}c=f;g=e.split(".");for(var d=0,h=g.length;d<h;d++){e=g[d];c[e]=c[e]||{};c=c[e]}return c}else{throw new TypeError()}}return function(c,d){return a(c,d||window)}})(),usingPackage:function(){var a=arguments;return function(b){return b.apply(a[0],a)}},Class:{create:function(a){if(typeof a=="string"){var c=window;var b=a}else{if(Object.isUndefined(a.$name)){throw Error("Class name must be defined.")}else{var b=a.$name;if(Object.isUndefined(a.$namespace)){var c=window}else{var c=$PWT.namespace(a.$namespace)}}}c[b]=function(){if(a.$abstract){throw'"'+b+'" is an abstract class and cannot be directly initiated.'}var h=Object.clone(c[b].prototype);var g=$A(arguments);if(c[b].prototype.__behaviors.length){for(var k=0,f=c[b].prototype.__behaviors.length;k<f;k++){var d=g.shift();c[b].prototype.__behaviors[k].call(this,d)}}c[b].prototype=h;var e=function(l,j){var i=function(s,q,t,u,p){var r=s[q].$parent;s[q].$parent=(function(v,w){return function(){var x=null;if(!Object.isUndefined(u.definition.$extends)){var y=u.definition.$extends,z=false;while(1){if(Object.isFunction(y.prototype[q])&&v[q]!==y.prototype[q]){z=true;x=i(v,q,w,y,arguments);break}else{if(!Object.isUndefined(y.definition.$extends)){y=y.definition.$extends}else{break}}}}if(!z){x=w.apply(v,arguments)}return x}})(s,u.prototype[q]);var o=t.apply(s,p);s[q].$parent=r;return o};var n=function(p,o,r){var q=p[o];p[o]=function(){p[o].$parent=(function(s,t){return function(){var u=null;if(!Object.isUndefined(r.definition.$extends)){var v=r.definition.$extends,w=false;while(1){if(Object.isFunction(v.prototype[o])&&s[o]!==v.prototype[o]){w=true;u=i(s,o,t,v,arguments);break}else{if(!Object.isUndefined(v.definition.$extends)){v=v.definition.$extends}else{break}}}}if(!w){u=t.apply(s,arguments)}return u}})(p,r.prototype[o]);return q.apply(p,arguments)}};if(!Object.isUndefined(j.$extends)){for(object in j.$extends.prototype){if(Object.isFunction(l[object])&&Object.isFunction(j.$extends.prototype[object])&&l[object]!==j.$extends.prototype[object]){n(l,object,j.$extends)}else{if(Object.isFunction(l[object])){var m=j.$extends;while(1){if(Object.isFunction(m.prototype[object])&&l[object]!==m.prototype[object]){n(l,object,m);break}else{if(!Object.isUndefined(m.definition.$extends)){m=m.definition.$extends}else{break}}}}}}}};if(!Object.isUndefined(c[b].definition.$extends)){e(this,c[b].definition)}delete e;if(Object.isFunction(this.init)){this.init.apply(this,g)}};return function(d){if(Object.isDefined(a.$extends)){if(Object.isUndefined(a.$extends)){throw new Error("Unable to extend class. Class to extend from is undefined.")}else{if(Object.isDefined(a.$extends.prototype.interfaceName)){throw new Error("Unable to extend class from interface. Use $implements followed by interface.")}else{if(Object.isDefined(a.$extends.prototype.traitName)){throw new Error("Unable to extend class from trait. Use $traits followed by trat.")}else{if(Object.isUndefined(a.$extends.prototype.className)){throw new Error('Unable to extend class. Class to extend from is not an instance of "$PWT.Class".')}else{if(Object.isDefined(a.$extends.definition.$final)&&a.$extends.definition.$final){throw new Error("Unable to extend class. Class to extend from is declared as final.")}else{c[b].prototype=Object.extend(c[b].prototype,a.$extends.prototype)}}}}}}var h=false;if(!Object.isArray(c[b].prototype.__behaviors)){c[b].prototype.__behaviors=[]}if(!Object.isUndefined(a.$traits)){if(!Object.isArray(a.$traits)){a.$traits=[a.$traits]}h=$PWT.Trait.normalize(a.$traits);for(var g=0,e=a.$traits.length;g<e;g++){if(Object.isFunction(a.$traits[g])&&Object.isFunction(a.$traits[g].prototype.init)){c[b].prototype.__behaviors.push(a.$traits[g].prototype.init)}}if(!Object.isArray(a.$traits)){a.$traits=[a.$traits]}}if(!Object.isUndefined(a.$implements)){if(!Object.isArray(a.$implements)){a.$implements=[a.$implements]}for(var g=0,e=a.$implements.length;g<e;g++){if($PWT.Interface.validate(a.$implements[g])){$PWT.Interface.add(c[b],d,h,a.$implements[g])}}}if(!Object.isUndefined(a.$traits)){if($PWT.Trait.validate(h)){$PWT.Trait.add(c[b],h)}}delete h;c[b].prototype.className=b;for(var k in d){if(Object.isFunction(d[k])){if(d[k]===$PWT.Class.ABSTRACT_METHOD){if(!a.$abstract){throw'"'+b+'" contains one or more abstract methods and must be declared as abstract.'}else{c[b].prototype[k]=Object.clone(d[k])}}if(Object.isFunction(c[b].prototype[k])){var f=c[b].prototype[k];c[b].prototype[k]=d[k];c[b].prototype[k].$parent=f}else{if(Object.isAssocArray(d[k])){c[b].prototype[k]=Object.clone(d[k])}else{c[b].prototype[k]=d[k]}}}else{if(Object.isAssocArray(d[k])){c[b].prototype[k]=Object.clone(d[k])}else{c[b].prototype[k]=d[k]}}}for(k in c[b].prototype){if(Object.isFunction(c[b].prototype[k])&&c[b].prototype[k]===$PWT.Class.ABSTRACT_METHOD&&!a.$abstract){throw ['"'+k+'" is an abstract method and so must either be defined or the class ',' "'+b+'" must be declared as abstract by defining'," $abstract:true in the class definition."].join("")}}c[b].definition=a}},ABSTRACT_METHOD:function(){}},Interface:{create:function(a){if(Object.isString(a)){var b=window;var c=a}else{if(Object.isUndefined(a.$name)){throw Error("Interface name must be defined.")}else{var c=a.$name;if(Object.isUndefined(a.$namespace)){var b=window}else{var b=$PWT.namespace(a.$namespace)}}}b[c]=function(){throw ['Interface "'+c+'" cannot be initiated because interfaces'," are abstract classes which cannot be directly initiated."].join("")};b[c].prototype.interfaceName=c;return function(d){if(!Object.isUndefined(a.$extends)){if(!Object.isUndefined(a.$extends.prototype.traitName)){throw new Error("Interfaces cannot extend Traits.")}else{if(!Object.isUndefined(a.$extends.prototype.className)){throw new Error("Interfaces cannot extend Classes.")}else{b[c].prototype=Object.extend(b[c].prototype,a.$extends.prototype)}}}if(!Object.isUndefined(a.$implements)){throw new Error("Interfaces cannot implement other Interfaces. Interfaces can only extend other Interfaces.")}for(var e in d){if(Object.isFunction(d[e])&&d[e]!=$PWT.Interface.METHOD){throw new Error("Interfaces may only contain empty functions. Use $PWT.Interface.METHOD.")}else{b[c].prototype[e]=d[e]}}}},PROPERTY:function(){},METHOD:function(){},validate:function(a){if(Object.isUndefined(a)){throw new Error("Unable to implement interface. Interface to implement is undefined.")}else{if(!Object.isUndefined(a.prototype.className)){throw new Error(['Unable to implement interface. Interface to implement is a "$PWT.Class".',' An interface must be a "$PWT.Interface".'])}else{if(!Object.isUndefined(a.prototype.traitName)){throw new Error(['Unable to implement interface. Interface to implement is a "$PWT.Trait".',' An interface must be a "$PWT.Interface".'])}else{if(Object.isUndefined(a.prototype.interfaceName)){throw new Error('Unable to implement interface. Interface to implement is not an instance of "$PWT.Interface".')}}}}return true},add:function(b,a,c,e){for(var d in e.prototype){if(d!="interfaceName"){if(e.prototype[d]==$PWT.Interface.METHOD){if(!Object.isFunction(a[d])&&!(c&&Object.isFunction(c.prototype[d]))){throw new Error(['The implementation of interface "'+e.prototype.interfaceName+'" requires',' the method "'+d+'" be implemented.'].join(""))}}if(Object.isAssocArray(e.prototype[d])){b.prototype[d]=Object.clone(e.prototype[d])}else{b.prototype[d]=e.prototype[d]}}}}},Trait:{create:function(a){if(typeof a=="string"){var b=window;var c=a}else{if(typeof a.$name=="undefined"){throw Error("Trait name must be defined.")}else{var c=a.$name;if(typeof a.$namespace=="undefined"){var b=window}else{var b=$PWT.namespace(a.$namespace)}}}b[c]=function(){throw ['Trait "'+c+'" cannot be initiated because traits'," are abstract classes which cannot be directly initiated."].join("")};b[c].prototype.traitName=c;return function(g){var f=false;if(!Object.isUndefined(a.$traits)){if(!Object.isArray(a.$traits)){a.$traits=[a.$traits]}f=$PWT.Trait.normalize(a.$traits,true)}if(!Object.isUndefined(a.$implements)){if(!Object.isArray(a.$implements)){a.$implements=[a.$implements]}for(var e=0,d=a.$implements.length;e<d;e++){if($PWT.Interface.validate(a.$implements[e])){$PWT.Interface.add(b[c],g,f,a.$implements[e])}}}if(!Object.isUndefined(a.$traits)){if($PWT.Trait.validate(f)){$PWT.Trait.add(b[c],f)}}delete f;for(var h in g){if(typeof g[h]!="function"){throw new Error("A trait may only contain methods.")}else{b[c].prototype[h]=g[h]}}}},normalize:function(h,b){if(!Object.isArray(h)){h=[h]}var g={};if(!Object.isFunction(h[h.length-1])){g=h[h.length-1];delete h[h.length-1]}var f=function(){};f.prototype.traitName="Normalized";var c=[];var k=[];for(var e=0,d=h.length;e<d;e++){if(Object.isFunction(h[e])){for(var a in h[e].prototype){if(!Object.isFunction(h[e].prototype[a])){continue}if(a=="init"&&!b){continue}if(!c.inArray(a)){c.push(a);f.prototype[a]=h[e].prototype[a]}else{if(!k.inArray(a)){if(Object.isUndefined(g[a])){delete f.prototype[a]}else{f.prototype[a]=g[a].prototype[a]}k.push(a)}}}}}return f},validate:function(a){if(Object.isUndefined(a)){throw new Error("Unable to add trait. Trait to add is undefined.")}else{if(!Object.isUndefined(a.prototype.className)){throw new Error(['Unable to add trait. Trait to add is an instance of "$PWT.Class".',' A trait must be an instance of "$PWT.Trait".'])}else{if(!Object.isUndefined(a.prototype.instanceName)){throw new Error(['Unable to add trait. Trait to add is an instance of "$PWT.Interface".',' A trait must be an instance of "$PWT.Trait".'])}else{if(Object.isUndefined(a.prototype.traitName)){throw new Error('Unable to add trait. Trait to add is not an instance of "$PWT.Trait".')}}}}return true},add:function(a,c){for(var b in c.prototype){if(b!="traitName"){if(!Object.isFunction(c.prototype[b])){throw new Error(["Attempt to add trait to class instance failed because trait contained an entity that was not a method."," Traits may only contain methods."].join(""))}a.prototype[b]=c.prototype[b]}}}},onReady:function(b){var a=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(a);if(Object.isFunction(b)){b()}}},10)},util:{include:function(c,d,g){var b=false;if(d=="js"){$A(document.getElementsByTagName("script")).each(function(h){if(h.src.replace("app:/","")==c&&/loaded|complete/.test(h.readyState)){b=true;if(Object.isFunction(g)){g()}throw $break}});if(!b){var a=document.createElement("script"),f=$PWT.util.random();a.type="text/javascript";a.src=c;a.id=f;if(!(!!window.attachEvent&&!Object.prototype.toString.call(window.opera)!="[object Opera]")){a.onload=function(){if(Object.isFunction(g)){g()}while(script=$(f)){script.parentNode.removeChild(script);$PWT.GC.object(script);delete script}};document.getElementsByTagName("head")[0].appendChild(a)}else{document.getElementsByTagName("head")[0].appendChild(a);a.onreadystatechange=function(j,i,h){if(a.readyState=="complete"||a.readyState=="loaded"){if(Object.isFunction(g)){g()}}}}document.getElementsByTagName("head")[0].appendChild(a)}}else{if(d=="css"){$A(document.getElementsByTagName("link")).each(function(h){if(h.href.replace("app:/","")==c){b=true;if(Object.isFunction(g)){g()}throw $break}});if(!b){var e=document.createElement("link");e.rel="stylesheet";e.type="text/css";e.href=c;e.onload=function(){if(Object.isFunction(g)){g()}};document.getElementsByTagName("head")[0].appendChild(e)}}}},random:function(inOptions){var options={min:10,max:20,chars:[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]};Object.extend(options,inOptions);if(Object.isString(options.chars)){options.chars=$A(options.chars)}else{if(Object.isNumber(options.chars)){eval('options.chars="'+options.chars+'"');options.chars=$A(options.chars)}}var numChars=0;while(numChars<options.min){numChars=Math.round(Math.random()*options.max)}var $return="";for(var i=0;i<numChars;i++){$return+=options.chars[Math.round(Math.random()*(options.chars.length-1))]}return $return},__nextID:0,id:function(){this.__nextID++;return"PWT-"+this.__nextID},randomColor:function(){var b=new Array(6);for(var a=0;a<6;a++){b[a]=Math.round(Math.random()*15);if(b[a]>9){switch(b[a]){case 10:b[a]="A";break;case 11:b[a]="B";break;case 12:b[a]="C";break;case 13:b[a]="D";break;case 14:b[a]="E";break;case 15:b[a]="F";break}}}return"#"+b.join("")},generateColorGradient:function(f,l,q){var f=(Object.isDefined(f))?parseInt(f,16):0,l=(Object.isDefined(l))?parseInt(l,16):0,q=(Object.isDefined(q))?Number(q):16,d=[],o=function(i,g,r,b){if(i<g){return((g-i)*(r/b))+i}else{return((i-g)*(1-(r/b)))+g}};f=(f>=0&&f<=16777215)?f:0;l=(l>=0&&l<=16777215)?l:16777215;q=(q>0&&q<256)?q:16;var k=(f&16711680)>>16,e=(f&65280)>>8,t=(f&255)>>0,j=(l&16711680)>>16,c=(l&65280)>>8,s=(l&255)>>0;for(var m=0;m<=q;m++){var a=o(k,j,m,q),n=o(e,c,m,q),p=o(t,s,m,q),h=(((a<<8)|n)<<8)|p;d.push(h.toString(16))}return d}}};$PWT.init();$PWT.Class.create({$namespace:"$PWT",$name:"GC"})({object:function(b){if(Object.isDefined(b)){if(Object.isArray(b)){for(var c=0,a=b.length;c<a;c++){if(Object.isArray(b[c])||Object.isAssocArray(b[c])){$PWT.GC.object(b[c])}delete b[c]}}else{if(Object.isAssocArray(b)){for(var d in b){if(Object.isArray(b[d])||Object.isAssocArray(b[d])){$PWT.GC.object(b[d])}delete b[d]}}}delete b}},reset:function(a){this.object(a);if(Object.isAssocArray(a)){return{}}else{if(Object.isArray(a)){return[]}}return a},scripts:function(){var a=$A(document.getElementsByTagName("script"));for(var c=0,b=a.length;c<b;c++){a[c].parentNode.removeChild(a[c]);$PWT.GC.object(a[c]);delete a[c]}delete a}});$PWT.GC=new $PWT.GC();$PWT.Class.create({$namespace:"$PWT",$name:"When"})({timer:null,items:{length:0},init:function(){this.timer=null;this.startTimer()},startTimer:function(){if(Object.isNull(this.timer)){this.timer=window.setInterval(function(){for(var a in this.items){if(a=="length"){continue}try{this[this.items[a].condition](this.items[a])}catch(b){this.removeItem(this.items[a].id);throw b}}}.bind(this),100)}},stopTimer:function(){window.clearInterval(this.timer);this.timer=null},captureCondition:function(c,b,a){var a=$A(a);if(a.length){this.items[b].condition=c;this.items[b].callback=a.shift();this.items[b].args=a}else{delete this.removeItem(b)}},addItem:function(b,a){var c=$PWT.util.random();this.items[c]={id:c,scope:b,object:a,condition:null,callback:$PWT.emptyFunction,args:null};this.items.length++;if(this.items.length){this.startTimer()}return c},removeItem:function(a){delete this.items[a];this.items.length--;if(!this.items.length){this.stopTimer()}},assert:function(a,b){if(a){b.callback.apply(b.callback,b.args);this.removeItem(b.id)}},isDefined:function(a){this.assert(Object.isDefined(a.scope[a.object]),a)},isUndefined:function(a){this.assert(Object.isUndefined(a.scope[a.object]),a)},isTrue:function(a){this.assert((a.scope[a.object]===true),a)},isFalse:function(a){this.assert((a.scope[a.object]===false),a)},isBoolean:function(a){this.assert(Object.isBoolean(a.scope[a.object]),a)},isFunction:function(a){this.assert(Object.isFunction(a.scope[a.object]),a)},isArray:function(a){this.assert(Object.isArray(a.scope[a.object]),a)},isAssocArray:function(a){this.assert(Object.isAssocArray(a.scope[a.object]),a)},isString:function(a){this.assert(Object.isString(a.scope[a.object]),a)},isNumber:function(a){this.assert(Object.isNumber(a.scope[a.object]),a)},isElement:function(a){this.assert(Object.isElement(a.scope[a.object]),a)},isNull:function(a){this.assert(Object.isNull(a.scope[a.object]),a)},isEqualTo:function(a){this.assert((a.scope[a.object.object]==a.object.value),a)},isNotEqualTo:function(a){this.assert((a.scope[a.object.object]!=a.object.value),a)}});$PWT.When=new $PWT.When();$PWT.when=function(d,a){var e=$PWT.When.addItem(d,a),c=arguments.callee,b={andWhen:function(){if(!arguments.length){return c(d,a)}else{return c(arguments[0],arguments[1])}}};return{isDefined:function(){$PWT.When.captureCondition("isDefined",e,arguments);return b},isUndefined:function(){$PWT.When.captureCondition("isUndefined",e,arguments);return b},isTrue:function(){$PWT.When.captureCondition("isTrue",e,arguments);return b},isFalse:function(){$PWT.When.captureCondition("isFalse",e,arguments);return b},isBoolean:function(){$PWT.When.captureCondition("isBoolean",e,arguments);return b},isFunction:function(){$PWT.When.captureCondition("isFunction",e,arguments);return b},isArray:function(){$PWT.When.captureCondition("isArray",e,arguments);return b},isAssocArray:function(){$PWT.When.captureCondition("isAssocArray",e,arguments);return b},isString:function(){$PWT.When.captureCondition("isString",e,arguments);return b},isNumber:function(){$PWT.When.captureCondition("isNumber",e,arguments);return b},isElement:function(){$PWT.When.captureCondition("isElement",e,arguments);return b},isNull:function(){$PWT.When.captureCondition("isNull",e,arguments);return b},isEqualTo:function(){$PWT.When.captureCondition("isEqualTo",e,arguments);return b},isNotEqualTo:function(){$PWT.When.captureCondition("isNotEqualTo",e,arguments);return b}}};$PWT.Interface.create({$namespace:"$PWT.iface",$name:"Configurable"})({config:{}});$PWT.Interface.create({$namespace:"$PWT.iface",$name:"Observable"})({events:[],observe:$PWT.Interface.METHOD,unobserve:$PWT.Interface.METHOD,fireEvent:$PWT.Interface.METHOD});$PWT.Trait.create({$namespace:"$PWT.trait",$name:"Configurable",$implements:$PWT.iface.Configurable})({init:function(a){Object.extend(this.config,a)}});$PWT.Trait.create({$namespace:"$PWT.trait",$name:"Observable",$implements:$PWT.iface.Observable})({init:function(a){for(var b in a){if(!Object.isFunction(a[b])&&Object.isAssocArray(a[b])){if(!Object.isDefined(a[b].callback)){throw new Error('Invalid observer. Observers defined as objects must specify "callback" as the callback function.')}else{if(Object.isDefined(a[b].times)){this.observeTimes(a[b].times,b,a[b])}else{this.observe(b,a[b])}a[b]}}else{if(Object.isFunction(a[b])){this.observe(b,a[b])}else{throw new Error("Invalid observer. Observers can only be functions.")}}}},observe:function(c,d){if(!Object.isArray(this.events[c])){this.events[c]=[]}if(!Object.isArray(c)){c=[c]}for(var b=0,a=c.length;b<a;b++){this.events[c[b]].push(d);this.events[c[b]].last().times=0}return this},observeOnce:function(a,b){return this.observeTimes.call(this,1,a,b)},observeTimes:function(a,d,e){if(!Object.isArray(this.events[d])){this.events[d]=[]}if(!Object.isArray(d)){d=[d]}for(var c=0,b=d.length;c<b;c++){this.events[d[c]].push(e);this.events[d[c]].last().times=a}return this},unobserve:function(f,g){if(!Object.isArray(f)){f=[f]}for(var e=0,c=f.length;e<c;e++){if(!Object.isUndefined(this.events[f[e]])){var d=[];for(var b=0,a=this.events[f[e]].length;b<a;b++){if(this.events[f[e]][b]==g){delete this.events[f[e]][b]}else{d.push(this.events[f[e]][b])}}}this.events[f[e]]=d;if(!this.events[f[e]].length){this.events[f[e]]=true}}return this},fireEvent:function(){var d=$A(arguments),f=d.shift();if(!Object.isArray(f)){f=[f]}for(var e=0,c=f.length;e<c;e++){if(!Object.isUndefined(this.events[f[e]])&&Object.isArray(this.events[f[e]])){for(var b=0,a=this.events[f[e]].length;b<a;b++){if(Object.isFunction(this.events[f[e]][b])){if(this.events[f[e]][b].apply(this,d)===false){return false}if(Object.isDefined(this.events[f[e]][b])&&this.events[f[e]][b].times!==0){if(--this.events[f[e]][b].times===0){this.unobserve(f[e],this.events[f[e]][b])}}}}}}return true},clearEvent:function(a){if(!Object.isUndefined(this.events[a])){this.events[a]=true}return this}});$PWT.Trait.create({$namespace:"$PWT.trait",$name:"Timeable",$traits:$PWT.trait.Observable})({startTimer:function(){if(this.config.timeout){this.timeout=this.config.timeout;window.clearInterval(this.timer);this.timer=window.setInterval(function(){this.timeout--;this.fireEvent("onTimerInterval",this,this.getElapsedTime());if(this.timeout<=0){window.clearInterval(this.timer);this.fireEvent("onTimeout",this)}}.bind(this),1000)}},restartTimer:function(){this.startTimer()},pauseTimer:function(){window.clearInterval(this.timer)},resumeTimer:function(){this.startTimer()},stopTimer:function(){window.clearInterval(this.timer);this.timeout=this.config.timeout},resetTimer:function(){this.timeout=this.config.timeout},getElapsedTime:function(){return(this.config.timeout-this.timeout)},getRemainingTime:function(){return this.timeout}});