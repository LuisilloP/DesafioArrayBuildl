const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};J();const q=document.querySelector(".boton-svg"),I=document.querySelector(".nav"),h=document.querySelector(".btn-carrito"),x=document.querySelector(".btn-cierra-carrito"),f=document.querySelector(".fondo-carrito");q.addEventListener("click",()=>{I.classList.toggle("active")});h.addEventListener("click",()=>{f.classList.add("transition"),f.classList.toggle("active"),h.classList.add("desactivoBtnCarrito")});x.addEventListener("click",()=>{f.classList.remove("active"),h.classList.remove("desactivoBtnCarrito")});window.addEventListener("scroll",()=>{document.querySelector("header").classList.toggle("sigue",window.scrollY>0)});class d{constructor(t,o,n,r,a,m){this.id=t,this.nombre=o,this.img=n,this.precio=r,this.plataforma=a,this.stock=m}descontarStock(t){return this.stock<=0?"Agotado":this.stock=this.stock-t}}class A{constructor(t,o,n,r,a){this.id=t,this.nombre=o,this.precio=n,this.cantidad=r,this.img=a}multiplicarPrecio(t){return this.precio*t}sumaUnidad(t){this.cantidad=this.cantidad+t}}let c=[];function $(){let e=document.querySelectorAll(".radio-filter .boxRadio .radio-class");const t=document.querySelectorAll(".radio-class");for(let o=0;o<t.length;o++)t[o].addEventListener("click",()=>{t[o].checked?(e[o].classList.add("Check"),S(e[o].value,1)):(e[o].classList.remove("Check"),S(e[o].value,2))})}function S(e,t){const o=u.filter(n=>n.plataforma.includes(e));t==1?(c=c.concat(o),g(c)):t==2&&(c=c.filter(n=>!n.plataforma.includes(e)),g(c))}const p=document.querySelector("#inputNombre");p.addEventListener("input",e=>{console.log(c),g(c),p.value?(c=c.filter(t=>t.nombre.toLowerCase().includes(p.value.toLowerCase().trim())),c.length==0&&alert("No existen juegos con estas Caracteristicas"),g(c)):(c=u,g(c))});const v=[],w=[],E=[],s=["PS4","Nintendo Switch","Xbox"];let i=[];const P=()=>{const e=new d(0,"God of War","./Img/ps4/godJuego.jpg",5e4,s[0],100),t=new d(1,"GTA V","./Img/ps4/gtaJuego.jpg",4e4,s[0],200),o=new d(2,"Uncharted","./Img/ps4/unchar.png",3e4,s[0],100),n=new d(3,"Dragon Ball kakarot","./Img/ps4/dbzJuego.jpg",3e4,s[0],100);v.push(e,t,o,n),JSON.stringify(v)},j=()=>{const e=new d(4,"Super Mario Odyssey","./Img/nintendoSwitch/marioO.jpg",1e4,s[1],100),t=new d(5,"Super Smash Ultimate","./Img/nintendoSwitch/superSmash.jpg",7e4,s[1],100),o=new d(6,"Pokemon let's Go Pikachu","./Img/nintendoSwitch/pokemonPika.jpg",15e3,s[1],200),n=new d(7,"Zelda Breath of the wild","./Img/nintendoSwitch/zelda.jpg",5e4,s[1],100);w.push(e,t,o,n)},M=()=>{const e=new d(8,"Halo 5","./Img/xbox/xbox.jpg",35e3,s[2],200),t=new d(9,"Minecraft","./Img/xbox/minecraft.jpg",2e4,s[2],100);E.push(e,t)};P();j();M();let b,u=v.concat(w);u=u.concat(E);const C=e=>{const t=document.getElementById("contenedorJuegos");return e.forEach(o=>{let n=`
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
        `;var r=document.createElement("div");r.setAttribute("class","contenedorJuego"),r.innerHTML=n,t.appendChild(r)}),e};function L(){const e=document.querySelectorAll(".contenedorJuego");for(let t=0;t<e.length;t++)e[t].addEventListener("dblclick",function(){let o=document.querySelectorAll(".cantidad-carritoMod"),n=document.querySelectorAll(".id-carrito input");u.forEach(r=>{if(r.id==e[t].querySelector(".id input ").value){let a=new A(r.id,r.nombre,r.precio,1,r.img);if(i.length==0)i.push(a),y(a);else if(!i.find(l=>l.id==a.id))console.log("no se encuentra el dato lo agregare"),i.push(a),y(a);else{console.log("Solo agregare la cantidad");for(let l=0;l<i.length;l++)a.id==n[l].value&&(i[l].cantidad=i[l].cantidad+1,o[l].innerHTML=parseInt(o[l].innerHTML)+1,console.log(i[l].cantidad))}}}),console.log(i),b=JSON.stringify(i),localStorage.setItem("carrito",b)})}const g=e=>{N(),e.length==0?(e=C(u),L()):(C(e),L())};g(c);const O=document.getElementById("botonComprar");O.addEventListener("click",()=>{if(i.length==0)alert("no hay nada en carro");else{let e="",t=0;i.forEach(o=>{e+=`Juego: ${o.nombre} Precio: $${o.precio} X ${o.cantidad}
`,t+=o.precio*o.cantidad,u.find(n=>{n.id==o.id&&(n.stock=n.stock-o.cantidad)}),console.log(u[o.id].stock)}),e+=`
 Su total es de $${t} gracias por su compra`,g(c),alert(e),alert("no se eliminara el carrito local actual "),location.reload()}});const B=e=>{let t=document.querySelector(".radio-filter");e.forEach(o=>{const n=document.createElement("DIV"),r=document.createElement("input"),a=document.createElement("label");r.type="checkbox",n.classList.add("boxRadio"),r.classList.add("radio-class"),r.value=o,a.textContent=o,n.appendChild(r),n.appendChild(a),t.appendChild(n)})};B(s);$();function N(){let e=document.querySelector(".contenedorJuegos"),t=e.lastElementChild;for(;t;)e.removeChild(t),t=e.lastElementChild}const D=()=>{const e=localStorage.getItem("carrito"),t=JSON.parse(e);t===null?console.log("no hay nada en almacenamiento local"):(i=t,t.forEach(o=>{y(o)}))};D();const k=document.querySelectorAll(".EliminaJuegoCarrito");let H=document.querySelectorAll(".id-carrito input");const T=()=>{for(let e=0;e<k.length;e++)k[e].addEventListener("click",()=>{alert("hola desde y la id es "+H[e].value)})};T();function y(e){const t=document.querySelector(".tbody-carrito");let o=`
    <td><img class="img-min-carrito" src="${e.img}"></td>
      <td>${e.nombre}</td>
      <td class="cantidad-carritoMod">${e.cantidad}</td>
      <td>${e.precio}</td>
      <td ><a class ="EliminaJuegoCarrito" >Eliminar</a></td>
      <div class="id-carrito"><input type ="hidden" value =${e.id}></div>
      `;const n=document.createElement("tr");n.classList.add("JuegoCarrito"),n.innerHTML=o,t.appendChild(n)}window.addEventListener("DOMContentLoaded",e=>{alert("Doble Click agrega item al carrito")});
