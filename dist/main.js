(()=>{const e=function(){const e=document.querySelectorAll(".dropdown-list");for(k=0;k<e.length;k++)e[k].classList.remove("show"),e[k].style.display="none"};(function(){const e=document.querySelectorAll(".dropdown-menu");for(i=0;i<e.length;i++){e[i].querySelector("button").classList.add("dropdown-open-button"),e[i].querySelector("ul").classList.add("dropdown-list"),e[i].querySelector("ul").style.display="none";const t=e[i].querySelectorAll("li");for(j=0;j<t.length;j++)t[j].classList.add("dropdown-list-button")}})(),document.addEventListener("mousedown",(function(t){console.log(t.target),console.log(t.target.parentNode),document.querySelectorAll(".dropdown-list"),t.target.matches(".dropdown-open-button")&&!t.target.parentNode.querySelector("ul").matches(".show")?(e(),t.target.parentNode.querySelector("ul").classList.add("show"),t.target.parentNode.querySelector("ul").style.display=""):e()}))})();