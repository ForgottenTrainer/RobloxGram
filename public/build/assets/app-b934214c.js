var f=F;function F(){var n=[].slice.call(arguments),e=!1;typeof n[0]=="boolean"&&(e=n.shift());var t=n[0];if(g(t))throw new Error("extendee must be an object");for(var i=n.slice(1),s=i.length,l=0;l<s;l++){var r=i[l];for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var u=r[o];if(e&&C(u)){var d=Array.isArray(u)?[]:{};t[o]=F(!0,Object.prototype.hasOwnProperty.call(t,o)&&!g(t[o])?t[o]:d,u)}else t[o]=u}}return t}function C(n){return Array.isArray(n)||{}.toString.call(n)=="[object Object]"}function g(n){return!n||typeof n!="object"&&typeof n!="function"}function b(n){return n&&n.__esModule?n.default:n}class v{on(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}emit(e,...t){this._callbacks=this._callbacks||{};let i=this._callbacks[e];if(i)for(let s of i)s.apply(this,t);return this.element&&this.element.dispatchEvent(this.makeEvent("dropzone:"+e,{args:t})),this}makeEvent(e,t){let i={bubbles:!0,cancelable:!0,detail:t};if(typeof window.CustomEvent=="function")return new CustomEvent(e,i);var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,i.bubbles,i.cancelable,i.detail),s}off(e,t){if(!this._callbacks||arguments.length===0)return this._callbacks={},this;let i=this._callbacks[e];if(!i)return this;if(arguments.length===1)return delete this._callbacks[e],this;for(let s=0;s<i.length;s++)if(i[s]===t){i.splice(s,1);break}return this}}var y={};y=`<div class="dz-preview dz-file-preview">
  <div class="dz-image"><img data-dz-thumbnail=""></div>
  <div class="dz-details">
    <div class="dz-size"><span data-dz-size=""></span></div>
    <div class="dz-filename"><span data-dz-name=""></span></div>
  </div>
  <div class="dz-progress">
    <span class="dz-upload" data-dz-uploadprogress=""></span>
  </div>
  <div class="dz-error-message"><span data-dz-errormessage=""></span></div>
  <div class="dz-success-mark">
    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>
    </svg>
  </div>
  <div class="dz-error-mark">
    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>
    </svg>
  </div>
</div>
`;let z={url:null,method:"post",withCredentials:!1,timeout:null,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2097152,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,defaultHeaders:!0,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,disablePreviews:!1,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init(){},params(n,e,t){if(t)return{dzuuid:t.file.upload.uuid,dzchunkindex:t.index,dztotalfilesize:t.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:t.file.upload.totalChunkCount,dzchunkbyteoffset:t.index*this.options.chunkSize}},accept(n,e){return e()},chunksUploaded:function(n,e){e()},binaryBody:!1,fallback(){let n;this.element.className=`${this.element.className} dz-browser-not-supported`;for(let t of this.element.getElementsByTagName("div"))if(/(^| )dz-message($| )/.test(t.className)){n=t,t.className="dz-message";break}n||(n=a.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(n));let e=n.getElementsByTagName("span")[0];return e&&(e.textContent!=null?e.textContent=this.options.dictFallbackMessage:e.innerText!=null&&(e.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize(n,e,t,i){let s={srcX:0,srcY:0,srcWidth:n.width,srcHeight:n.height},l=n.width/n.height;e==null&&t==null?(e=s.srcWidth,t=s.srcHeight):e==null?e=t*l:t==null&&(t=e/l),e=Math.min(e,s.srcWidth),t=Math.min(t,s.srcHeight);let r=e/t;if(s.srcWidth>e||s.srcHeight>t)if(i==="crop")l>r?(s.srcHeight=n.height,s.srcWidth=s.srcHeight*r):(s.srcWidth=n.width,s.srcHeight=s.srcWidth/r);else if(i==="contain")l>r?t=e/l:e=t*l;else throw new Error(`Unknown resizeMethod '${i}'`);return s.srcX=(n.width-s.srcWidth)/2,s.srcY=(n.height-s.srcHeight)/2,s.trgWidth=e,s.trgHeight=t,s},transformFile(n,e){return(this.options.resizeWidth||this.options.resizeHeight)&&n.type.match(/image.*/)?this.resizeImage(n,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,e):e(n)},previewTemplate:b(y),drop(n){return this.element.classList.remove("dz-drag-hover")},dragstart(n){},dragend(n){return this.element.classList.remove("dz-drag-hover")},dragenter(n){return this.element.classList.add("dz-drag-hover")},dragover(n){return this.element.classList.add("dz-drag-hover")},dragleave(n){return this.element.classList.remove("dz-drag-hover")},paste(n){},reset(){return this.element.classList.remove("dz-started")},addedfile(n){if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer&&!this.options.disablePreviews){n.previewElement=a.createElement(this.options.previewTemplate.trim()),n.previewTemplate=n.previewElement,this.previewsContainer.appendChild(n.previewElement);for(var e of n.previewElement.querySelectorAll("[data-dz-name]"))e.textContent=n.name;for(e of n.previewElement.querySelectorAll("[data-dz-size]"))e.innerHTML=this.filesize(n.size);this.options.addRemoveLinks&&(n._removeLink=a.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`),n.previewElement.appendChild(n._removeLink));let t=i=>(i.preventDefault(),i.stopPropagation(),n.status===a.UPLOADING?a.confirm(this.options.dictCancelUploadConfirmation,()=>this.removeFile(n)):this.options.dictRemoveFileConfirmation?a.confirm(this.options.dictRemoveFileConfirmation,()=>this.removeFile(n)):this.removeFile(n));for(let i of n.previewElement.querySelectorAll("[data-dz-remove]"))i.addEventListener("click",t)}},removedfile(n){return n.previewElement!=null&&n.previewElement.parentNode!=null&&n.previewElement.parentNode.removeChild(n.previewElement),this._updateMaxFilesReachedClass()},thumbnail(n,e){if(n.previewElement){n.previewElement.classList.remove("dz-file-preview");for(let t of n.previewElement.querySelectorAll("[data-dz-thumbnail]"))t.alt=n.name,t.src=e;return setTimeout(()=>n.previewElement.classList.add("dz-image-preview"),1)}},error(n,e){if(n.previewElement){n.previewElement.classList.add("dz-error"),typeof e!="string"&&e.error&&(e=e.error);for(let t of n.previewElement.querySelectorAll("[data-dz-errormessage]"))t.textContent=e}},errormultiple(){},processing(n){if(n.previewElement&&(n.previewElement.classList.add("dz-processing"),n._removeLink))return n._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple(){},uploadprogress(n,e,t){if(n.previewElement)for(let i of n.previewElement.querySelectorAll("[data-dz-uploadprogress]"))i.nodeName==="PROGRESS"?i.value=e:i.style.width=`${e}%`},totaluploadprogress(){},sending(){},sendingmultiple(){},success(n){if(n.previewElement)return n.previewElement.classList.add("dz-success")},successmultiple(){},canceled(n){return this.emit("error",n,this.options.dictUploadCanceled)},canceledmultiple(){},complete(n){if(n._removeLink&&(n._removeLink.innerHTML=this.options.dictRemoveFile),n.previewElement)return n.previewElement.classList.add("dz-complete")},completemultiple(){},maxfilesexceeded(){},maxfilesreached(){},queuecomplete(){},addedfiles(){}};var S=z;class a extends v{static initClass(){this.prototype.Emitter=v,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}getAcceptedFiles(){return this.files.filter(e=>e.accepted).map(e=>e)}getRejectedFiles(){return this.files.filter(e=>!e.accepted).map(e=>e)}getFilesWithStatus(e){return this.files.filter(t=>t.status===e).map(t=>t)}getQueuedFiles(){return this.getFilesWithStatus(a.QUEUED)}getUploadingFiles(){return this.getFilesWithStatus(a.UPLOADING)}getAddedFiles(){return this.getFilesWithStatus(a.ADDED)}getActiveFiles(){return this.files.filter(e=>e.status===a.UPLOADING||e.status===a.QUEUED).map(e=>e)}init(){if(this.element.tagName==="form"&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(a.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`)),this.clickableElements.length){let i=()=>{this.hiddenFileInput&&this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=document.createElement("input"),this.hiddenFileInput.setAttribute("type","file"),(this.options.maxFiles===null||this.options.maxFiles>1)&&this.hiddenFileInput.setAttribute("multiple","multiple"),this.hiddenFileInput.className="dz-hidden-input",this.options.acceptedFiles!==null&&this.hiddenFileInput.setAttribute("accept",this.options.acceptedFiles),this.options.capture!==null&&this.hiddenFileInput.setAttribute("capture",this.options.capture),this.hiddenFileInput.setAttribute("tabindex","-1"),this.hiddenFileInput.style.visibility="hidden",this.hiddenFileInput.style.position="absolute",this.hiddenFileInput.style.top="0",this.hiddenFileInput.style.left="0",this.hiddenFileInput.style.height="0",this.hiddenFileInput.style.width="0",a.getElement(this.options.hiddenInputContainer,"hiddenInputContainer").appendChild(this.hiddenFileInput),this.hiddenFileInput.addEventListener("change",()=>{let{files:s}=this.hiddenFileInput;if(s.length)for(let l of s)this.addFile(l);this.emit("addedfiles",s),i()})};i()}this.URL=window.URL!==null?window.URL:window.webkitURL;for(let i of this.events)this.on(i,this.options[i]);this.on("uploadprogress",()=>this.updateTotalUploadProgress()),this.on("removedfile",()=>this.updateTotalUploadProgress()),this.on("canceled",i=>this.emit("complete",i)),this.on("complete",i=>{if(this.getAddedFiles().length===0&&this.getUploadingFiles().length===0&&this.getQueuedFiles().length===0)return setTimeout(()=>this.emit("queuecomplete"),0)});const e=function(i){if(i.dataTransfer.types){for(var s=0;s<i.dataTransfer.types.length;s++)if(i.dataTransfer.types[s]==="Files")return!0}return!1};let t=function(i){if(e(i))return i.stopPropagation(),i.preventDefault?i.preventDefault():i.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:i=>this.emit("dragstart",i),dragenter:i=>(t(i),this.emit("dragenter",i)),dragover:i=>{let s;try{s=i.dataTransfer.effectAllowed}catch{}return i.dataTransfer.dropEffect=s==="move"||s==="linkMove"?"move":"copy",t(i),this.emit("dragover",i)},dragleave:i=>this.emit("dragleave",i),drop:i=>(t(i),this.drop(i)),dragend:i=>this.emit("dragend",i)}}],this.clickableElements.forEach(i=>this.listeners.push({element:i,events:{click:s=>((i!==this.element||s.target===this.element||a.elementInside(s.target,this.element.querySelector(".dz-message")))&&this.hiddenFileInput.click(),!0)}})),this.enable(),this.options.init.call(this)}destroy(){return this.disable(),this.removeAllFiles(!0),this.hiddenFileInput!=null&&this.hiddenFileInput.parentNode&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,a.instances.splice(a.instances.indexOf(this),1)}updateTotalUploadProgress(){let e,t=0,i=0;if(this.getActiveFiles().length){for(let l of this.getActiveFiles())t+=l.upload.bytesSent,i+=l.upload.total;e=100*t/i}else e=100;return this.emit("totaluploadprogress",e,i,t)}_getParamName(e){return typeof this.options.paramName=="function"?this.options.paramName(e):`${this.options.paramName}${this.options.uploadMultiple?`[${e}]`:""}`}_renameFile(e){return typeof this.options.renameFile!="function"?e.name:this.options.renameFile(e)}getFallbackForm(){let e,t;if(e=this.getExistingFallback())return e;let i='<div class="dz-fallback">';this.options.dictFallbackText&&(i+=`<p>${this.options.dictFallbackText}</p>`),i+=`<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple?'multiple="multiple"':void 0} /><input type="submit" value="Upload!"></div>`;let s=a.createElement(i);return this.element.tagName!=="FORM"?(t=a.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`),t.appendChild(s)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),t??s}getExistingFallback(){let e=function(i){for(let s of i)if(/(^| )fallback($| )/.test(s.className))return s};for(let i of["div","form"]){var t;if(t=e(this.element.getElementsByTagName(i)))return t}}setupEventListeners(){return this.listeners.map(e=>(()=>{let t=[];for(let i in e.events){let s=e.events[i];t.push(e.element.addEventListener(i,s,!1))}return t})())}removeEventListeners(){return this.listeners.map(e=>(()=>{let t=[];for(let i in e.events){let s=e.events[i];t.push(e.element.removeEventListener(i,s,!1))}return t})())}disable(){return this.clickableElements.forEach(e=>e.classList.remove("dz-clickable")),this.removeEventListeners(),this.disabled=!0,this.files.map(e=>this.cancelUpload(e))}enable(){return delete this.disabled,this.clickableElements.forEach(e=>e.classList.add("dz-clickable")),this.setupEventListeners()}filesize(e){let t=0,i="b";if(e>0){let s=["tb","gb","mb","kb","b"];for(let l=0;l<s.length;l++){let r=s[l],o=Math.pow(this.options.filesizeBase,4-l)/10;if(e>=o){t=e/Math.pow(this.options.filesizeBase,4-l),i=r;break}}t=Math.round(10*t)/10}return`<strong>${t}</strong> ${this.options.dictFileSizeUnits[i]}`}_updateMaxFilesReachedClass(){return this.options.maxFiles!=null&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}drop(e){if(!e.dataTransfer)return;this.emit("drop",e);let t=[];for(let i=0;i<e.dataTransfer.files.length;i++)t[i]=e.dataTransfer.files[i];if(t.length){let{items:i}=e.dataTransfer;i&&i.length&&i[0].webkitGetAsEntry!=null?this._addFilesFromItems(i):this.handleFiles(t)}this.emit("addedfiles",t)}paste(e){if(U(e!=null?e.clipboardData:void 0,i=>i.items)==null)return;this.emit("paste",e);let{items:t}=e.clipboardData;if(t.length)return this._addFilesFromItems(t)}handleFiles(e){for(let t of e)this.addFile(t)}_addFilesFromItems(e){return(()=>{let t=[];for(let s of e){var i;s.webkitGetAsEntry!=null&&(i=s.webkitGetAsEntry())?i.isFile?t.push(this.addFile(s.getAsFile())):i.isDirectory?t.push(this._addFilesFromDirectory(i,i.name)):t.push(void 0):s.getAsFile!=null&&(s.kind==null||s.kind==="file")?t.push(this.addFile(s.getAsFile())):t.push(void 0)}return t})()}_addFilesFromDirectory(e,t){let i=e.createReader(),s=r=>M(console,"log",o=>o.log(r));var l=()=>i.readEntries(r=>{if(r.length>0){for(let o of r)o.isFile?o.file(u=>{if(!(this.options.ignoreHiddenFiles&&u.name.substring(0,1)==="."))return u.fullPath=`${t}/${u.name}`,this.addFile(u)}):o.isDirectory&&this._addFilesFromDirectory(o,`${t}/${o.name}`);l()}return null},s);return l()}accept(e,t){this.options.maxFilesize&&e.size>this.options.maxFilesize*1048576?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):a.isValidFile(e,this.options.acceptedFiles)?this.options.maxFiles!=null&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}addFile(e){e.upload={uuid:a.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e)},this.files.push(e),e.status=a.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,t=>{t?(e.accepted=!1,this._errorProcessing([e],t)):(e.accepted=!0,this.options.autoQueue&&this.enqueueFile(e)),this._updateMaxFilesReachedClass()})}enqueueFiles(e){for(let t of e)this.enqueueFile(t);return null}enqueueFile(e){if(e.status===a.ADDED&&e.accepted===!0){if(e.status=a.QUEUED,this.options.autoProcessQueue)return setTimeout(()=>this.processQueue(),0)}else throw new Error("This file can't be queued because it has already been processed or was rejected.")}_enqueueThumbnail(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=this.options.maxThumbnailFilesize*1048576)return this._thumbnailQueue.push(e),setTimeout(()=>this._processThumbnailQueue(),0)}_processThumbnailQueue(){if(this._processingThumbnail||this._thumbnailQueue.length===0)return;this._processingThumbnail=!0;let e=this._thumbnailQueue.shift();return this.createThumbnail(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,t=>(this.emit("thumbnail",e,t),this._processingThumbnail=!1,this._processThumbnailQueue()))}removeFile(e){if(e.status===a.UPLOADING&&this.cancelUpload(e),this.files=L(this.files,e),this.emit("removedfile",e),this.files.length===0)return this.emit("reset")}removeAllFiles(e){e==null&&(e=!1);for(let t of this.files.slice())(t.status!==a.UPLOADING||e)&&this.removeFile(t);return null}resizeImage(e,t,i,s,l){return this.createThumbnail(e,t,i,s,!0,(r,o)=>{if(o==null)return l(e);{let{resizeMimeType:u}=this.options;u==null&&(u=e.type);let d=o.toDataURL(u,this.options.resizeQuality);return(u==="image/jpeg"||u==="image/jpg")&&(d=E.restore(e.dataURL,d)),l(a.dataURItoBlob(d))}})}createThumbnail(e,t,i,s,l,r){let o=new FileReader;o.onload=()=>{if(e.dataURL=o.result,e.type==="image/svg+xml"){r!=null&&r(o.result);return}this.createThumbnailFromUrl(e,t,i,s,l,r)},o.readAsDataURL(e)}displayExistingFile(e,t,i,s,l=!0){if(this.emit("addedfile",e),this.emit("complete",e),!l)this.emit("thumbnail",e,t),i&&i();else{let r=o=>{this.emit("thumbnail",e,o),i&&i()};e.dataURL=t,this.createThumbnailFromUrl(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,this.options.fixOrientation,r,s)}}createThumbnailFromUrl(e,t,i,s,l,r,o){let u=document.createElement("img");return o&&(u.crossOrigin=o),l=getComputedStyle(document.body).imageOrientation=="from-image"?!1:l,u.onload=()=>{let d=h=>h(1);return typeof EXIF<"u"&&EXIF!==null&&l&&(d=h=>EXIF.getData(u,function(){return h(EXIF.getTag(this,"Orientation"))})),d(h=>{e.width=u.width,e.height=u.height;let p=this.options.resize.call(this,e,t,i,s),c=document.createElement("canvas"),m=c.getContext("2d");switch(c.width=p.trgWidth,c.height=p.trgHeight,h>4&&(c.width=p.trgHeight,c.height=p.trgWidth),h){case 2:m.translate(c.width,0),m.scale(-1,1);break;case 3:m.translate(c.width,c.height),m.rotate(Math.PI);break;case 4:m.translate(0,c.height),m.scale(1,-1);break;case 5:m.rotate(.5*Math.PI),m.scale(1,-1);break;case 6:m.rotate(.5*Math.PI),m.translate(0,-c.width);break;case 7:m.rotate(.5*Math.PI),m.translate(c.height,-c.width),m.scale(-1,1);break;case 8:m.rotate(-.5*Math.PI),m.translate(-c.height,0);break}A(m,u,p.srcX!=null?p.srcX:0,p.srcY!=null?p.srcY:0,p.srcWidth,p.srcHeight,p.trgX!=null?p.trgX:0,p.trgY!=null?p.trgY:0,p.trgWidth,p.trgHeight);let k=c.toDataURL("image/png");if(r!=null)return r(k,c)})},r!=null&&(u.onerror=r),u.src=e.dataURL}processQueue(){let{parallelUploads:e}=this.options,t=this.getUploadingFiles().length,i=t;if(t>=e)return;let s=this.getQueuedFiles();if(s.length>0){if(this.options.uploadMultiple)return this.processFiles(s.slice(0,e-t));for(;i<e;){if(!s.length)return;this.processFile(s.shift()),i++}}}processFile(e){return this.processFiles([e])}processFiles(e){for(let t of e)t.processing=!0,t.status=a.UPLOADING,this.emit("processing",t);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}_getFilesWithXhr(e){return this.files.filter(t=>t.xhr===e).map(t=>t)}cancelUpload(e){if(e.status===a.UPLOADING){let t=this._getFilesWithXhr(e.xhr);for(let i of t)i.status=a.CANCELED;typeof e.xhr<"u"&&e.xhr.abort();for(let i of t)this.emit("canceled",i);this.options.uploadMultiple&&this.emit("canceledmultiple",t)}else(e.status===a.ADDED||e.status===a.QUEUED)&&(e.status=a.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}resolveOption(e,...t){return typeof e=="function"?e.apply(this,t):e}uploadFile(e){return this.uploadFiles([e])}uploadFiles(e){this._transformFiles(e,t=>{if(this.options.chunking){let i=t[0];e[0].upload.chunked=this.options.chunking&&(this.options.forceChunking||i.size>this.options.chunkSize),e[0].upload.totalChunkCount=Math.ceil(i.size/this.options.chunkSize)}if(e[0].upload.chunked){let i=e[0],s=t[0];i.upload.chunks=[];let l=()=>{let r=0;for(;i.upload.chunks[r]!==void 0;)r++;if(r>=i.upload.totalChunkCount)return;let o=r*this.options.chunkSize,u=Math.min(o+this.options.chunkSize,s.size),d={name:this._getParamName(0),data:s.webkitSlice?s.webkitSlice(o,u):s.slice(o,u),filename:i.upload.filename,chunkIndex:r};i.upload.chunks[r]={file:i,index:r,dataBlock:d,status:a.UPLOADING,progress:0,retries:0},this._uploadData(e,[d])};if(i.upload.finishedChunkUpload=(r,o)=>{let u=!0;r.status=a.SUCCESS,r.dataBlock=null,r.response=r.xhr.responseText,r.responseHeaders=r.xhr.getAllResponseHeaders(),r.xhr=null;for(let d=0;d<i.upload.totalChunkCount;d++){if(i.upload.chunks[d]===void 0)return l();i.upload.chunks[d].status!==a.SUCCESS&&(u=!1)}u&&this.options.chunksUploaded(i,()=>{this._finished(e,o,null)})},this.options.parallelChunkUploads)for(let r=0;r<i.upload.totalChunkCount;r++)l();else l()}else{let i=[];for(let s=0;s<e.length;s++)i[s]={name:this._getParamName(s),data:t[s],filename:e[s].upload.filename};this._uploadData(e,i)}})}_getChunk(e,t){for(let i=0;i<e.upload.totalChunkCount;i++)if(e.upload.chunks[i]!==void 0&&e.upload.chunks[i].xhr===t)return e.upload.chunks[i]}_uploadData(e,t){let i=new XMLHttpRequest;for(let d of e)d.xhr=i;e[0].upload.chunked&&(e[0].upload.chunks[t[0].chunkIndex].xhr=i);let s=this.resolveOption(this.options.method,e,t),l=this.resolveOption(this.options.url,e,t);i.open(s,l,!0),this.resolveOption(this.options.timeout,e)&&(i.timeout=this.resolveOption(this.options.timeout,e)),i.withCredentials=!!this.options.withCredentials,i.onload=d=>{this._finishedUploading(e,i,d)},i.ontimeout=()=>{this._handleUploadError(e,i,`Request timedout after ${this.options.timeout/1e3} seconds`)},i.onerror=()=>{this._handleUploadError(e,i)};let o=i.upload!=null?i.upload:i;o.onprogress=d=>this._updateFilesUploadProgress(e,i,d);let u=this.options.defaultHeaders?{Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"}:{};this.options.binaryBody&&(u["Content-Type"]=e[0].type),this.options.headers&&f(u,this.options.headers);for(let d in u){let h=u[d];h&&i.setRequestHeader(d,h)}if(this.options.binaryBody){for(let d of e)this.emit("sending",d,i);this.options.uploadMultiple&&this.emit("sendingmultiple",e,i),this.submitRequest(i,null,e)}else{let d=new FormData;if(this.options.params){let h=this.options.params;typeof h=="function"&&(h=h.call(this,e,i,e[0].upload.chunked?this._getChunk(e[0],i):null));for(let p in h){let c=h[p];if(Array.isArray(c))for(let m=0;m<c.length;m++)d.append(p,c[m]);else d.append(p,c)}}for(let h of e)this.emit("sending",h,i,d);this.options.uploadMultiple&&this.emit("sendingmultiple",e,i,d),this._addFormElementData(d);for(let h=0;h<t.length;h++){let p=t[h];d.append(p.name,p.data,p.filename)}this.submitRequest(i,d,e)}}_transformFiles(e,t){let i=[],s=0;for(let l=0;l<e.length;l++)this.options.transformFile.call(this,e[l],r=>{i[l]=r,++s===e.length&&t(i)})}_addFormElementData(e){if(this.element.tagName==="FORM")for(let t of this.element.querySelectorAll("input, textarea, select, button")){let i=t.getAttribute("name"),s=t.getAttribute("type");if(s&&(s=s.toLowerCase()),!(typeof i>"u"||i===null))if(t.tagName==="SELECT"&&t.hasAttribute("multiple"))for(let l of t.options)l.selected&&e.append(i,l.value);else(!s||s!=="checkbox"&&s!=="radio"||t.checked)&&e.append(i,t.value)}}_updateFilesUploadProgress(e,t,i){if(e[0].upload.chunked){let s=e[0],l=this._getChunk(s,t);i?(l.progress=100*i.loaded/i.total,l.total=i.total,l.bytesSent=i.loaded):(l.progress=100,l.bytesSent=l.total),s.upload.progress=0,s.upload.total=0,s.upload.bytesSent=0;for(let r=0;r<s.upload.totalChunkCount;r++)s.upload.chunks[r]&&typeof s.upload.chunks[r].progress<"u"&&(s.upload.progress+=s.upload.chunks[r].progress,s.upload.total+=s.upload.chunks[r].total,s.upload.bytesSent+=s.upload.chunks[r].bytesSent);s.upload.progress=s.upload.progress/s.upload.totalChunkCount,this.emit("uploadprogress",s,s.upload.progress,s.upload.bytesSent)}else for(let s of e)s.upload.total&&s.upload.bytesSent&&s.upload.bytesSent==s.upload.total||(i?(s.upload.progress=100*i.loaded/i.total,s.upload.total=i.total,s.upload.bytesSent=i.loaded):(s.upload.progress=100,s.upload.bytesSent=s.upload.total),this.emit("uploadprogress",s,s.upload.progress,s.upload.bytesSent))}_finishedUploading(e,t,i){let s;if(e[0].status!==a.CANCELED&&t.readyState===4){if(t.responseType!=="arraybuffer"&&t.responseType!=="blob"&&(s=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{s=JSON.parse(s)}catch(l){i=l,s="Invalid JSON response from server."}this._updateFilesUploadProgress(e,t),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t),s):this._finished(e,s,i):this._handleUploadError(e,t,s)}}_handleUploadError(e,t,i){if(e[0].status!==a.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){let s=this._getChunk(e[0],t);if(s.retries++<this.options.retryChunksLimit){this._uploadData(e,[s.dataBlock]);return}else console.warn("Retried this chunk too often. Giving up.")}this._errorProcessing(e,i||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}submitRequest(e,t,i){if(e.readyState!=1){console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");return}if(this.options.binaryBody)if(i[0].upload.chunked){const s=this._getChunk(i[0],e);e.send(s.dataBlock.data)}else e.send(i[0]);else e.send(t)}_finished(e,t,i){for(let s of e)s.status=a.SUCCESS,this.emit("success",s,t,i),this.emit("complete",s);if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}_errorProcessing(e,t,i){for(let s of e)s.status=a.ERROR,this.emit("error",s,t,i),this.emit("complete",s);if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}static uuidv4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}constructor(e,t){super();let i,s;if(this.element=e,this.clickableElements=[],this.listeners=[],this.files=[],typeof this.element=="string"&&(this.element=document.querySelector(this.element)),!this.element||this.element.nodeType==null)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");a.instances.push(this),this.element.dropzone=this;let l=(s=a.optionsForElement(this.element))!=null?s:{};if(this.options=f(!0,{},S,l,t??{}),this.options.previewTemplate=this.options.previewTemplate.replace(/\n*/g,""),this.options.forceFallback||!a.isBrowserSupported())return this.options.fallback.call(this);if(this.options.url==null&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(this.options.uploadMultiple&&this.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");if(this.options.binaryBody&&this.options.uploadMultiple)throw new Error("You cannot set both: binaryBody and uploadMultiple.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.renameFilename!=null&&(this.options.renameFile=r=>this.options.renameFilename.call(this,r.name,r)),typeof this.options.method=="string"&&(this.options.method=this.options.method.toUpperCase()),(i=this.getExistingFallback())&&i.parentNode&&i.parentNode.removeChild(i),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=a.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=a.getElements(this.options.clickable,"clickable")),this.init()}}a.initClass();a.options={};a.optionsForElement=function(n){if(n.getAttribute("id"))return a.options[T(n.getAttribute("id"))]};a.instances=[];a.forElement=function(n){if(typeof n=="string"&&(n=document.querySelector(n)),(n!=null?n.dropzone:void 0)==null)throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return n.dropzone};a.discover=function(){let n;if(document.querySelectorAll)n=document.querySelectorAll(".dropzone");else{n=[];let e=t=>(()=>{let i=[];for(let s of t)/(^| )dropzone($| )/.test(s.className)?i.push(n.push(s)):i.push(void 0);return i})();e(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))}return(()=>{let e=[];for(let t of n)a.optionsForElement(t)!==!1?e.push(new a(t)):e.push(void 0);return e})()};a.blockedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i];a.isBrowserSupported=function(){let n=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if(!("classList"in document.createElement("a")))n=!1;else{a.blacklistedBrowsers!==void 0&&(a.blockedBrowsers=a.blacklistedBrowsers);for(let e of a.blockedBrowsers)if(e.test(navigator.userAgent)){n=!1;continue}}else n=!1;return n};a.dataURItoBlob=function(n){let e=atob(n.split(",")[1]),t=n.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(e.length),s=new Uint8Array(i);for(let l=0,r=e.length,o=0<=r;o?l<=r:l>=r;o?l++:l--)s[l]=e.charCodeAt(l);return new Blob([i],{type:t})};const L=(n,e)=>n.filter(t=>t!==e).map(t=>t),T=n=>n.replace(/[\-_](\w)/g,e=>e.charAt(1).toUpperCase());a.createElement=function(n){let e=document.createElement("div");return e.innerHTML=n,e.childNodes[0]};a.elementInside=function(n,e){if(n===e)return!0;for(;n=n.parentNode;)if(n===e)return!0;return!1};a.getElement=function(n,e){let t;if(typeof n=="string"?t=document.querySelector(n):n.nodeType!=null&&(t=n),t==null)throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector or a plain HTML element.`);return t};a.getElements=function(n,e){let t,i;if(n instanceof Array){i=[];try{for(t of n)i.push(this.getElement(t,e))}catch{i=null}}else if(typeof n=="string"){i=[];for(t of document.querySelectorAll(n))i.push(t)}else n.nodeType!=null&&(i=[n]);if(i==null||!i.length)throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);return i};a.confirm=function(n,e,t){if(window.confirm(n))return e();if(t!=null)return t()};a.isValidFile=function(n,e){if(!e)return!0;e=e.split(",");let t=n.type,i=t.replace(/\/.*$/,"");for(let s of e)if(s=s.trim(),s.charAt(0)==="."){if(n.name.toLowerCase().indexOf(s.toLowerCase(),n.name.length-s.length)!==-1)return!0}else if(/\/\*$/.test(s)){if(i===s.replace(/\/.*$/,""))return!0}else if(t===s)return!0;return!1};typeof jQuery<"u"&&jQuery!==null&&(jQuery.fn.dropzone=function(n){return this.each(function(){return new a(this,n)})});a.ADDED="added";a.QUEUED="queued";a.ACCEPTED=a.QUEUED;a.UPLOADING="uploading";a.PROCESSING=a.UPLOADING;a.CANCELED="canceled";a.ERROR="error";a.SUCCESS="success";let x=function(n){n.naturalWidth;let e=n.naturalHeight,t=document.createElement("canvas");t.width=1,t.height=e;let i=t.getContext("2d");i.drawImage(n,0,0);let{data:s}=i.getImageData(1,0,1,e),l=0,r=e,o=e;for(;o>l;)s[(o-1)*4+3]===0?r=o:l=o,o=r+l>>1;let u=o/e;return u===0?1:u};var A=function(n,e,t,i,s,l,r,o,u,d){let h=x(e);return n.drawImage(e,t,i,s,l,r,o,u,d/h)};class E{static initClass(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}static encode64(e){let t="",i,s,l="",r,o,u,d="",h=0;for(;i=e[h++],s=e[h++],l=e[h++],r=i>>2,o=(i&3)<<4|s>>4,u=(s&15)<<2|l>>6,d=l&63,isNaN(s)?u=d=64:isNaN(l)&&(d=64),t=t+this.KEY_STR.charAt(r)+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(u)+this.KEY_STR.charAt(d),i=s=l="",r=o=u=d="",h<e.length;);return t}static restore(e,t){if(!e.match("data:image/jpeg;base64,"))return t;let i=this.decode64(e.replace("data:image/jpeg;base64,","")),s=this.slice2Segments(i),l=this.exifManipulation(t,s);return`data:image/jpeg;base64,${this.encode64(l)}`}static exifManipulation(e,t){let i=this.getExifArray(t),s=this.insertExif(e,i);return new Uint8Array(s)}static getExifArray(e){let t,i=0;for(;i<e.length;){if(t=e[i],t[0]===255&t[1]===225)return t;i++}return[]}static insertExif(e,t){let i=e.replace("data:image/jpeg;base64,",""),s=this.decode64(i),l=s.indexOf(255,3),r=s.slice(0,l),o=s.slice(l),u=r;return u=u.concat(t),u=u.concat(o),u}static slice2Segments(e){let t=0,i=[];for(;;){var s;if(e[t]===255&e[t+1]===218)break;if(e[t]===255&e[t+1]===216)t+=2;else{s=e[t+2]*256+e[t+3];let l=t+s+2,r=e.slice(t,l);i.push(r),t=l}if(t>e.length)break}return i}static decode64(e){let t,i,s="",l,r,o,u="",d=0,h=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn(`There were invalid base64 characters in the input text.
Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='
Expect errors in decoding.`),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l=this.KEY_STR.indexOf(e.charAt(d++)),r=this.KEY_STR.indexOf(e.charAt(d++)),o=this.KEY_STR.indexOf(e.charAt(d++)),u=this.KEY_STR.indexOf(e.charAt(d++)),t=l<<2|r>>4,i=(r&15)<<4|o>>2,s=(o&3)<<6|u,h.push(t),o!==64&&h.push(i),u!==64&&h.push(s),t=i=s="",l=r=o=u="",d<e.length;);return h}}E.initClass();function U(n,e){return typeof n<"u"&&n!==null?e(n):void 0}function M(n,e,t){if(typeof n<"u"&&n!==null&&typeof n[e]=="function")return t(n,e)}a.autoDiscover=!1;const w=new a(".dropzone",{dictDefaultMessage:"Subir imagen",acceptedFiles:".png, .jpg, .jpeg, .gif",addRemoveLinks:!0,dictRemoveFile:"Eliminar Archivo",maxFiles:1,uploadMultiple:!1,init:function(){if(document.querySelector('[name="imagen"]').value.trim()){const n={};n.size=1234,n.name=document.querySelector('[name="imagen"]').value,this.options.addedfile.call(this,n),this.options.thumbnail.call(this,n,`/uploads/${n.name}`),n.previewElement.classList.add("dz-success","dz-complete")}}});w.on("success",function(n,e){console.log(e),document.querySelector('[name="imagen"]').value=e.imagen});w.on("removedfile",function(){document.querySelector('[name="imagen"]').value=""});
