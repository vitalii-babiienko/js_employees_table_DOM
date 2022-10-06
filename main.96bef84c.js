parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return a(e)||o(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return r(e)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var i,c=document.querySelector("body"),l=document.querySelector("thead"),s=document.querySelector("tbody"),u=!0;l.addEventListener("click",function(t){var n=e(s.rows),o=t.target.closest("th").cellIndex;n.sort(function(e,t){var n=e.cells[o].innerText.replace(/[$,]/g,""),a=t.cells[o].innerText.replace(/[$,]/g,"");return isNaN(n)?n.localeCompare(a):n-a}),u||i!==o?u=!u:(n.reverse(),u=!u),i=o,s.append.apply(s,e(n))}),s.addEventListener("click",function(e){var t=e.target.closest("tr"),n=document.querySelector(".active");n&&n.classList.remove("active"),t.classList.add("active")}),c.insertAdjacentHTML("beforeend",'\n  <form class="new-employee-form">\n    <label>Name:\n      <input \n        name="name" \n        data-qa="name"\n      >\n    </label>\n\n    <label>Position:\n      <input \n        name="position" \n        data-qa="position"\n      >\n    </label>\n\n    <label>Office:\n      <select name="office" data-qa="office">\n        <option value="Tokyo">Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n\n    <label>Age:\n      <input \n        name="age" \n        type="number" \n        data-qa="age"\n      >\n    </label>\n\n    <label>Salary:\n      <input \n        name="salary" \n        type="number" \n        data-qa="salary"\n      >\n    </label>\n    \n    <button type="submit" value="Submit">\n      Save to table\n    </button>\n  </form>\n');var d,m,p=function(e){var t=e.title,n=e.description,o=e.type,a=document.createElement("div");a.className="notification ".concat(o),a.innerHTML='\n    <h2 class = "title">'.concat(t,"</h2>\n    <p>").concat(n,"</p>\n  "),a.dataset.qa="notification",c.append(a),setTimeout(function(){return a.remove()},2e3)},f={title:"Wrong Name!",description:"The Name should have more than 4 letters!",type:"error"},v={title:"Wrong Position Name!",description:"The position name should have more than 2 letters!",type:"error"},y={title:"Wrong Office Name!",description:"The office name should have more than 2 letters!",type:"error"},b={title:"Wrong Age!",description:"The employee should be an adult and younger than 90 years!",type:"error"},h={title:"Wrong Salary!",description:"The salary should be a positive number!",type:"error"},g={title:"Success!",description:"A new employee was added to the table!",type:"success"},S=document.querySelector(".new-employee-form");function L(e){var t=e.target.closest("td");if(e.target.matches("td")&&s.contains(t)){switch(t.contenteditable=!0,d=t.textContent,t.cellIndex){case 3:case 4:t.innerHTML='\n        <input \n          class="cell-input"\n          name="cell-for-editing" \n          type="number"\n          value="'.concat(d,'"\n        >\n      ');break;default:t.innerHTML='\n        <input \n          class="cell-input"\n          name="cell-for-editing" \n          type="text"\n          value="'.concat(d,'"\n        >\n      ')}(m=document.querySelector(".cell-input")).focus(),t.focus()}}function T(e){var t=e.target.closest("td"),n=m.value.trim();switch(t.cellIndex){case 0:if(!n.match(/^([a-z ]{4,})$/gim))return p(f),t.textContent=d,void m.remove();break;case 1:if(!n.match(/^([a-z ]{2,})$/gim))return p(v),t.textContent=d,void m.remove();break;case 2:if(!n.match(/^([a-z ]{2,})$/gim))return p(y),t.textContent=d,void m.remove();break;case 3:if(!n.match(/^(1[89]|[2-8][0-9]|90)$/))return p(b),t.textContent=d,void m.remove();break;case 4:return n.match(/^([0-9]{1,})$/)?(t.textContent="$"+parseInt(n).toLocaleString("en-US"),void m.remove()):(p(h),t.textContent=d,void m.remove())}t.textContent=n,m.remove()}S.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(S),n=Object.fromEntries(t.entries()),o=n.position,a=n.office,r=n.age,i=n.salary,c="$"+parseInt(i).toLocaleString("en-US");n.name.length<4?p(f):o.length<2?p(v):r<18||r>90?p(b):i<0||""===i?p(h):(s.insertAdjacentHTML("beforeend","\n    <tr>\n      <td>".concat(n.name,"</td>\n      <td>").concat(o,"</td>\n      <td>").concat(a,"</td>\n      <td>").concat(r,"</td>\n      <td>").concat(c,"</td>\n    </tr>\n  ")),p(g),S.reset())}),s.addEventListener("dblclick",L),s.addEventListener("focusout",T),s.addEventListener("keypress",function(e){"Enter"===e.key&&T(e)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.96bef84c.js.map