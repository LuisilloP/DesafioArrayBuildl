const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}};k();const C=document.querySelector(".boton-svg"),w=document.querySelector(".nav"),E=document.querySelector(".btn-carrito"),J=document.querySelector(".btn-cierra-carrito"),p=document.querySelector(".fondo-carrito");C.addEventListener("click",()=>{w.classList.toggle("active")});E.addEventListener("click",()=>{p.classList.add("transition"),p.classList.toggle("active")});J.addEventListener("click",()=>{p.classList.remove("active")});window.addEventListener("scroll",()=>{document.querySelector("header").classList.toggle("sigue",window.scrollY>0)});class d{constructor(t,o,r,n,c,a){this.id=t,this.nombre=o,this.img=r,this.precio=n,this.plataforma=c,this.stock=a}descontarStock(t){return this.stock<=0?"Agotado":this.stock=this.stock-t}}class q{constructor(t,o,r,n,c){this.id=t,this.nombre=o,this.precio=r,this.cantidad=n,this.img=c}multiplicarPrecio(t){return this.precio*t}sumaUnidad(t){this.cantidad=this.cantidad+t}}let s=[];function x(){let e=document.querySelectorAll(".radio-filter .boxRadio .radio-class");const t=document.querySelectorAll(".radio-class");for(let o=0;o<t.length;o++)t[o].addEventListener("click",()=>{t[o].checked?(e[o].classList.add("Check"),f(e[o].value,1)):(e[o].classList.remove("Check"),f(e[o].value,2))})}function f(e,t){const o=u.filter(r=>r.plataforma.includes(e));t==1?(s=s.concat(o),m(s)):t==2&&(s=s.filter(r=>!r.plataforma.includes(e)),m(s))}const A=document.querySelector("#inputNombre");function I(e){e.addEventListener("input",t=>{e.value?(console.log(e.value),s=u.filter(o=>o.nombre.toLowerCase().includes(e.value.toLowerCase().trim())),s.length==0&&alert("No existen juegos con estas Caracteristicas"),m(s)):(s=u,m(s))})}I(A);const h=[],S=[],L=[],l=["PS4","Nintendo Switch","Xbox"],g=[],P=()=>{const e=new d(0,"God of War","./Img/ps4/godJuego.jpg",5e4,l[0],100),t=new d(1,"GTA V","./Img/ps4/gtaJuego.jpg",4e4,l[0],200),o=new d(2,"Uncharted","./Img/ps4/unchar.png",3e4,l[0],100),r=new d(3,"Dragon Ball kakarot","./Img/ps4/dbzJuego.jpg",3e4,l[0],100);h.push(e,t,o,r),JSON.stringify(h)},M=()=>{const e=new d(4,"Super Mario Odyssey","./Img/nintendoSwitch/marioO.jpg",1e4,l[1],100),t=new d(5,"Super Smash Ultimate","./Img/nintendoSwitch/superSmash.jpg",7e4,l[1],100),o=new d(6,"Pokemon let's Go Pikachu","./Img/nintendoSwitch/pokemonPika.jpg",15e3,l[1],200),r=new d(7,"Zelda Breath of the wild","./Img/nintendoSwitch/zelda.jpg",5e4,l[1],100);S.push(e,t,o,r)},$=()=>{const e=new d(8,"Halo 5","./Img/xbox/xbox.jpg",35e3,l[2],200),t=new d(9,"Minecraft","./Img/xbox/minecraft.jpg",2e4,l[2],100);L.push(e,t)};P();M();$();let u=h.concat(S);u=u.concat(L);const v=e=>{const t=document.getElementById("contenedorJuegos");return e.forEach(o=>{let r=`
        <img src="${o.img}" class="img">
        <p class="nombreJuego">${o.nombre}</p>
        <div class="txtContenedor">
          <div class ="content">
            <p>Precio</p> <p class="precios" >${o.precio}</p>
          </div>
          <div class="content"> 
            <p>Stock </p><p class="stock">${o.stock}</p>
          </div>
       </div>
       <div class="id"><input type ="hidden" value =${o.id}></div>
        `;var n=document.createElement("div");n.setAttribute("class","contenedorJuego"),n.innerHTML=r,t.appendChild(n)}),e},m=e=>{e.length==0?(b(),v(u),console.log(e)):(b(),v(e)),H()};m(s);function H(){const e=document.querySelectorAll(".contenedorJuego");for(let t=0;t<e.length;t++)e[t].addEventListener("click",function(){e[t].classList.toggle("seleccionado")})}const O=document.getElementById("botonComprar");O.addEventListener("click",()=>{let e=0,t=[];const o=document.querySelectorAll(".contenedorJuego.seleccionado .id input "),r=document.querySelectorAll(".contenedorJuego.seleccionado .txtContenedor .content .stock");if(!confirm("Esta seguro de su compra ?"))alert("No se realizara la compra...");else{alert("Felicidades Por su Compra");for(let a=0;a<o.length;a++)console.log(s),u.forEach(i=>{i.id==o[a].value&&(i.stock==0?r[a].innerHTML="Agotado":(e+=i.precio,t.push(i.nombre+" :"+i.precio),r[a].innerHTML=i.descontarStock(1),i.stock==0&&(r[a].innerHTML="Agotado")),console.log(i.stock))});const c=t.join(`
`);alert(`Los items fueron:

`+c+`
La totalidad es: `+e)}});const T=e=>{let t=document.querySelector(".radio-filter");e.forEach(o=>{const r=document.createElement("DIV"),n=document.createElement("input"),c=document.createElement("label");n.type="checkbox",r.classList.add("boxRadio"),n.classList.add("radio-class"),n.value=o,c.textContent=o,r.appendChild(n),r.appendChild(c),t.appendChild(r)})};T(l);x();function b(){let e=document.querySelector(".contenedorJuegos"),t=e.lastElementChild;for(;t;)e.removeChild(t),t=e.lastElementChild}function N(){const e=document.querySelectorAll(".contenedorJuego");for(let t=0;t<e.length;t++)e[t].addEventListener("dblclick",function(){let o=document.querySelectorAll(".cantidad-carritoMod"),r=document.querySelectorAll(".id-carrito input");u.forEach(n=>{if(n.id==e[t].querySelector(".id input ").value){let c=new q(n.id,n.nombre,n.precio,1,n.img);if(g.length==0)g.push(c),y(c);else if(!g.find(i=>i.id==c.id))console.log("no se encuentra el dato lo agregare"),g.push(c),y(c);else{console.log("Solo agregare la cantidad");for(let i=0;i<g.length;i++)c.id==r[i].value&&(o[i].innerHTML=parseInt(o[i].innerHTML)+1)}}})})}N();function y(e){const t=document.querySelector(".tbody-carrito");let o=`
    <td><img class="img-min-carrito" src="${e.img}"></td>
      <td>${e.nombre}</td>
      <td class="cantidad-carritoMod">${e.cantidad}</td>
      <td>${e.precio}</td>
      <td>Eliminar</td>
      <div class="id-carrito"><input type ="hidden" value =${e.id}></div>
      `;const r=document.createElement("tr");r.innerHTML=o,t.appendChild(r)}window.addEventListener("DOMContentLoaded",e=>{alert("Doble Click agrega item al carrito")});
