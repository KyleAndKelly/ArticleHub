(()=>{"use strict";var e=/^(?:submit|button|image|reset|file)$/i,t=/^(?:input|select|textarea|keygen)/i,o=/(\[[^\[\]]*\])/g;function n(e,t,o){if(0===t.length)return o;var r=t.shift(),a=r.match(/^\[(.+?)\]$/);if("[]"===r)return e=e||[],Array.isArray(e)?e.push(n(null,t,o)):(e._values=e._values||[],e._values.push(n(null,t,o))),e;if(a){var s=a[1],c=+s;isNaN(c)?(e=e||{})[s]=n(e[s],t,o):(e=e||[])[c]=n(e[c],t,o)}else e[r]=n(e[r],t,o);return e}function r(e,t,r){if(t.match(o))n(e,function(e){var t=[],n=new RegExp(o),r=/^([^\[\]]*)/.exec(e);for(r[1]&&t.push(r[1]);null!==(r=n.exec(e));)t.push(r[1]);return t}(t),r);else{var a=e[t];a?(Array.isArray(a)||(e[t]=[a]),e[t].push(r)):e[t]=r}return e}function a(e,t,o){return o=o.replace(/(\r)?\n/g,"\r\n"),o=(o=encodeURIComponent(o)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+o}axios.defaults.baseURL="https://geek.itheima.net/",axios.interceptors.request.use((function(e){const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(function(e){return Promise.reject(e)})),axios.interceptors.response.use((function(e){return e.data}),(function(e){return 401==e?.response?.status&&(alert("Login expired,Please login again!"),localStorage.clear(),location.href="../login/index.html"),Promise.reject(e)}));const s=axios,c=function(e,t){let o=document.querySelector(".alert");o.classList.remove("d-none"),o.innerText=e,o.classList.add("show"),o.classList.add(t?"alert-success":"alert-danger"),setTimeout((()=>{o.classList.add("d-none"),o.innerText="",o.classList.remove("show"),o.classList.remove(t?"alert-success":"alert-danger")}),1e3)},{createEditor:l,createToolbar:i}=window.wangEditor,u={placeholder:"Type here...",onChange(e){const t=e.getHtml();console.log("editor content",t),document.querySelector(".publish-content").value=t}},d=l({selector:"#editor-container",html:"<p><br></p>",config:u,mode:"default"});i({editor:d,selector:"#toolbar-container",config:{},mode:"default"}),async function(){let e='<option value="" selected>请选择文章频道</option>'+(await s({url:"/v1_0/channels"})).data.channels.map((e=>`<option value=${e.id}>${e.name}</option>`)).join("");console.log(e),document.querySelector(".form-select").innerHTML=e}(),document.querySelector(".img-file").addEventListener("change",(async e=>{console.log(e),image_file=e.target.files[0],console.log(image_file),f=new FormData,f.append("image",image_file);try{const e=await s({url:"/v1_0/upload",method:"POST",data:f});c("upload success!",1),console.log(e),console.log(e.data.url),document.querySelector(".rounded").src=e.data.url,document.querySelector(".rounded").classList.add("show"),document.querySelector(".place").classList.add("hide")}catch(e){console.log(e),c("upload success!",1)}})),document.querySelector(".send").addEventListener("click",(async o=>{const n=document.querySelector(".art-form"),l=function(o,n){"object"!=typeof n?n={hash:!!n}:void 0===n.hash&&(n.hash=!0);for(var s=n.hash?{}:"",c=n.serializer||(n.hash?r:a),l=o&&o.elements?o.elements:[],i=Object.create(null),u=0;u<l.length;++u){var d=l[u];if((n.disabled||!d.disabled)&&d.name&&t.test(d.nodeName)&&!e.test(d.type)){var m=d.name,h=d.value;if("checkbox"!==d.type&&"radio"!==d.type||d.checked||(h=void 0),n.empty){if("checkbox"!==d.type||d.checked||(h=""),"radio"===d.type&&(i[d.name]||d.checked?d.checked&&(i[d.name]=!0):i[d.name]=!1),null==h&&"radio"==d.type)continue}else if(!h)continue;if("select-multiple"!==d.type)s=c(s,m,h);else{h=[];for(var p=d.options,f=!1,g=0;g<p.length;++g){var y=p[g],v=n.empty&&!y.value,S=y.value||v;y.selected&&S&&(f=!0,s=n.hash&&"[]"!==m.slice(m.length-2)?c(s,m+"[]",y.value):c(s,m,y.value))}!f&&n.empty&&(s=c(s,m,""))}}}if(n.empty)for(var m in i)i[m]||(s=c(s,m,""));return s}(n,{hash:!0,empty:!0});l.cover={type:1,img:[document.querySelector(".rounded").src]},console.log(l);try{await s({url:"/v1_0/mp/articles",method:"POST",data:l}),c("publish success!",1),n.reset(),document.querySelector(".rounded").src="",document.querySelector(".rounded").classList.remove("show"),document.querySelector(".place").classList.remove("hide"),d.innerHTML="",setTimeout((()=>{location.href="../content/index.html"}),1500)}catch(e){console.log(e),c("publish failed!",1)}}))})();