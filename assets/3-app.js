document.documentElement.classList.add("js");
addEventListener("DOMContentLoaded",function(){(function(){var d=document,r=d.documentElement,t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');r.setAttribute('data-theme',t);
d.getElementById('tt').addEventListener('click',function(){var n=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',n);localStorage.setItem('theme',n)});
d.getElementById('yr').textContent=new Date().getFullYear();
var h=d.getElementById('hd');function f(){h.classList.toggle('s',scrollY>24)}f();addEventListener('scroll',f,{passive:true});
var els=d.querySelectorAll('.rv');if('IntersectionObserver'in window){var o=new IntersectionObserver(function(e,ob){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('v');ob.unobserve(x.target)}})},{threshold:.12});els.forEach(function(e){o.observe(e)})}else els.forEach(function(e){e.classList.add('v')});
var ls=d.querySelectorAll('.links a'),secs=[].map.call(ls,function(a){return d.querySelector(a.getAttribute('href'))});
if('IntersectionObserver'in window){var o2=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)ls.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+x.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});secs.forEach(function(s){o2.observe(s)})}})();

(function(){var b=document.getElementById('mb'),l=document.getElementById('lk');b.addEventListener('click',function(){var o=l.classList.toggle('o');b.setAttribute('aria-expanded',o)});l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('o');b.setAttribute('aria-expanded',false)}})})();

});
