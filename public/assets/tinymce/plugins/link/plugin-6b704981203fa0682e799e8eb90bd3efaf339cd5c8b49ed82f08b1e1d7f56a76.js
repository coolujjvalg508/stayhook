tinymce.PluginManager.add("link",function(e){function t(e){return e&&"A"===e.nodeName&&e.href}function n(e){return tinymce.util.Tools.grep(e,t).length>0}function r(t){return e.dom.getParent(t,"a[href]")}function i(){return r(e.selection.getStart())}function o(e){var t=e.getAttribute("data-mce-href");return t?t:e.getAttribute("href")}function a(){var t=e.plugins.contextmenu;return!!t&&t.isContextMenuVisible()}function s(n){var r,i,o;return!!(e.settings.link_context_toolbar&&!a()&&t(n)&&(r=e.selection,i=r.getRng(),o=i.startContainer,3==o.nodeType&&r.isCollapsed()&&i.startOffset>0&&i.startOffset<o.data.length))}function l(e,t){document.body.appendChild(e),e.dispatchEvent(t),document.body.removeChild(e)}function u(e){if(!tinymce.Env.ie||tinymce.Env.ie>10){var t=document.createElement("a");t.target="_blank",t.href=e,t.rel="noreferrer noopener";var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),l(t,n)}else{var r=window.open("","_blank");if(r){r.opener=null;var i=r.document;i.open(),i.write('<meta http-equiv="refresh" content="0; url='+tinymce.DOM.encode(e)+'">'),i.close()}}}function c(t){if(t){var n=o(t);if(/^#/.test(n)){var r=e.$(n);r.length&&e.selection.scrollIntoView(r[0],!0)}else u(t.href)}}function d(){c(i())}function f(){var t=this,r=function(e){n(e.parents)?t.show():t.hide()};n(e.dom.getParents(e.selection.getStart()))||t.hide(),e.on("nodechange",r),t.on("remove",function(){e.off("nodechange",r)})}function p(t){return function(){var n=e.settings.link_list;"string"==typeof n?tinymce.util.XHR.send({url:n,success:function(e){t(tinymce.util.JSON.parse(e))}}):"function"==typeof n?n(t):t(n)}}function h(e,t,n){function r(e,n){return n=n||[],tinymce.each(e,function(e){var i={text:e.text||e.title};e.menu?i.menu=r(e.menu):(i.value=e.value,t&&t(i)),n.push(i)}),n}return r(e,n||[])}function m(t){function n(e){var t=d.find("#text");(!t.value()||e.lastControl&&t.value()==e.lastControl.text())&&t.value(e.control.text()),d.find("#href").value(e.control.value())}function r(t){var r=[];if(tinymce.each(e.dom.select("a:not([href])"),function(e){var n=e.name||e.id;n&&r.push({text:n,value:"#"+n,selected:t.indexOf("#"+n)!=-1})}),r.length)return r.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:r,onselect:n}}function i(){!c&&0===w.text.length&&f&&this.parent().parent().find("#text")[0].value(this.value())}function o(t){var n=t.meta||{};m&&m.value(e.convertURL(this.value(),"href")),tinymce.each(t.meta,function(e,t){var n=d.find("#"+t);"text"===t?0===c.length&&(n.value(e),w.text=e):n.value(e)}),n.attach&&(g={href:this.value(),attach:n.attach}),n.text||i.call(this)}function a(e){var t=E.getContent();if(/</.test(t)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(t)||t.indexOf("href=")==-1))return!1;if(e){var n,r=e.childNodes;if(0===r.length)return!1;for(n=r.length-1;n>=0;n--)if(3!=r[n].nodeType)return!1}return!0}function s(e){e.meta=d.toJSON()}var l,u,c,d,f,p,m,v,y,b,C,x,w={},E=e.selection,N=e.dom;l=E.getNode(),u=N.getParent(l,"a[href]"),f=a(),w.text=c=u?u.innerText||u.textContent:E.getContent({format:"text"}),w.href=u?N.getAttrib(u,"href"):"",u?w.target=N.getAttrib(u,"target"):e.settings.default_link_target&&(w.target=e.settings.default_link_target),(x=N.getAttrib(u,"rel"))&&(w.rel=x),(x=N.getAttrib(u,"class"))&&(w["class"]=x),(x=N.getAttrib(u,"title"))&&(w.title=x),f&&(p={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){w.text=this.value()}}),t&&(m={type:"listbox",label:"Link list",values:h(t,function(t){t.value=e.convertURL(t.value||t.url,"href")},[{text:"None",value:""}]),onselect:n,value:e.convertURL(w.href,"href"),onPostRender:function(){m=this}}),e.settings.target_list!==!1&&(e.settings.target_list||(e.settings.target_list=[{text:"None",value:""},{text:"New window",value:"_blank"}]),y={name:"target",type:"listbox",label:"Target",values:h(e.settings.target_list)}),e.settings.rel_list&&(v={name:"rel",type:"listbox",label:"Rel",values:h(e.settings.rel_list)}),e.settings.link_class_list&&(b={name:"class",type:"listbox",label:"Class",values:h(e.settings.link_class_list,function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({inline:"a",classes:[t.value]})})})}),e.settings.link_title!==!1&&(C={name:"title",type:"textbox",label:"Title",value:w.title}),d=e.windowManager.open({title:"Insert link",data:w,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:o,onkeyup:i,onbeforecall:s},p,C,r(w.href),m,v,y,b],onSubmit:function(t){function n(t,n){var r=e.selection.getRng();tinymce.util.Delay.setEditorTimeout(e,function(){e.windowManager.confirm(t,function(t){e.selection.setRng(r),n(t)})})}function r(e,t){function n(e){return e=r(e),e?[e,i].join(" "):i}function r(e){var t=new RegExp("("+i.replace(" ","|")+")","g");return e&&(e=tinymce.trim(e.replace(t,""))),e?e:null}var i="noopener noreferrer";return t?n(e):r(e)}function i(){var t={href:a,target:w.target?w.target:null,rel:w.rel?w.rel:null,"class":w["class"]?w["class"]:null,title:w.title?w.title:null};e.settings.allow_unsafe_link_target||(t.rel=r(t.rel,"_blank"==t.target)),a===g.href&&(g.attach(),g={}),u?(e.focus(),f&&w.text!=c&&("innerText"in u?u.innerText=w.text:u.textContent=w.text),N.setAttribs(u,t),E.select(u),e.undoManager.add()):f?e.insertContent(N.createHTML("a",t,N.encode(w.text))):e.execCommand("mceInsertLink",!1,t)}function o(){e.undoManager.transact(i)}var a;return w=tinymce.extend(w,t.data),(a=w.href)?a.indexOf("@")>0&&a.indexOf("//")==-1&&a.indexOf("mailto:")==-1?void n("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(e){e&&(a="mailto:"+a),o()}):e.settings.link_assume_external_targets&&!/^\w+:/i.test(a)||!e.settings.link_assume_external_targets&&/^\s*www[\.|\d\.]/i.test(a)?void n("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(e){e&&(a="http://"+a),o()}):void o():void e.execCommand("unlink")}})}var g={},v=function(e){return e.altKey===!0&&e.shiftKey===!1&&e.ctrlKey===!1&&e.metaKey===!1};e.addButton("link",{icon:"link",tooltip:"Insert/edit link",shortcut:"Meta+K",onclick:p(m),stateSelector:"a[href]"}),e.addButton("unlink",{icon:"unlink",tooltip:"Remove link",cmd:"unlink",stateSelector:"a[href]"}),e.addContextToolbar&&(e.addButton("openlink",{icon:"newtab",tooltip:"Open link",onclick:d}),e.addContextToolbar(s,"openlink | link unlink")),e.addShortcut("Meta+K","",p(m)),e.addCommand("mceLink",p(m)),e.on("click",function(e){var t=r(e.target);t&&tinymce.util.VK.metaKeyPressed(e)&&(e.preventDefault(),c(t))}),e.on("keydown",function(e){var t=i();t&&13===e.keyCode&&v(e)&&(e.preventDefault(),c(t))}),this.showDialog=m,e.addMenuItem("openlink",{text:"Open link",icon:"newtab",onclick:d,onPostRender:f,prependToContext:!0}),e.addMenuItem("link",{icon:"link",text:"Link",shortcut:"Meta+K",onclick:p(m),stateSelector:"a[href]",context:"insert",prependToContext:!0})});
