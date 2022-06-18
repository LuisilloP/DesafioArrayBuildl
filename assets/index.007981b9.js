const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};y();const S=document.querySelector(".boton-svg"),b=document.querySelector(".nav");S.addEventListener("click",()=>{b.classList.toggle("active")});window.addEventListener("scroll",()=>{document.querySelector("header").classList.toggle("sigue",window.scrollY>0)});class i{constructor(o,t,c,n,r,s){this.id=o,this.nombre=t,this.img=c,this.precio=n,this.plataforma=r,this.stock=s}descontarStock(o){return this.stock<=0?"Agotado":this.stock=this.stock-o}}let l=[];function w(){let e=document.querySelectorAll(".radio-filter .boxRadio .radio-class");const o=document.querySelectorAll(".radio-class");for(let t=0;t<o.length;t++)o[t].addEventListener("click",()=>{o[t].checked?(e[t].classList.add("Check"),p(e[t].value,1)):(e[t].classList.remove("Check"),p(e[t].value,2))})}function p(e,o){console.log(l);const t=u.filter(c=>c.plataforma.includes(e));o==1?(l=l.concat(t),console.log(l),m(l)):o==2&&(l=l.filter(c=>!c.plataforma.includes(e)),console.log(l),m(l))}const g=[],k=[],v=[],a=["PS4","Nintendo Switch","Xbox"],L=()=>{const e=new i(0,"God of War","./Img/ps4/godJuego.jpg",5e4,a[0],7),o=new i(1,"GTA V","./Img/ps4/gtaJuego.jpg",4e4,a[0],3),t=new i(2,"Uncharted","./Img/ps4/unchar.png",3e4,a[0],5),c=new i(3,"Dragon Ball kakarot","./Img/ps4/dbzJuego.jpg",3e4,a[0],2);g.push(e,o,t,c),JSON.stringify(g)},C=()=>{const e=new i(4,"Super Mario Odyssey","./Img/nintendoSwitch/marioO.jpg",1e4,a[1],2),o=new i(5,"Super Smash Ultimate","./Img/nintendoSwitch/superSmash.jpg",7e4,a[1],4),t=new i(6,"Pokemon let's Go Pikachu","./Img/nintendoSwitch/pokemonPika.jpg",15e3,a[1],6),c=new i(7,"Zelda Breath of the wild","./Img/nintendoSwitch/zelda.jpg",5e4,a[1],5);k.push(e,o,t,c)},J=()=>{const e=new i(8,"Halo 5","./Img/xbox/xbox.jpg",35e3,a[2],2),o=new i(9,"Minecraft","./Img/xbox/minecraft.jpg",2e4,a[2],10);v.push(e,o)};L();C();J();let u=g.concat(k);u=u.concat(v);const h=e=>{const o=document.getElementById("contenedorJuegos");return e.forEach(t=>{let c=`
        <img src="${t.img}" class="img">
        <p class="nombreJuego">${t.nombre}</p>
        <div class="txtContenedor">
          <div class ="content">
            <p>Precio</p> <p class="precios" >${t.precio}</p>
          </div>
          <div class="content"> 
            <p>Stock </p><p class="stock">${t.stock}</p>
          </div>
       </div>
       <div class="id"><input type ="hidden" value =${t.id}></div>
        `;var n=document.createElement("div");n.setAttribute("class","contenedorJuego"),n.innerHTML=c,o.appendChild(n)}),e},m=e=>{console.log(e.length),e.length==0?(f(),h(u)):(f(),h(e)),E()};m(l);function E(){const e=document.querySelectorAll(".contenedorJuego");for(let o=0;o<e.length;o++)e[o].addEventListener("click",function(){e[o].classList.toggle("seleccionado")})}const x=document.getElementById("botonComprar");x.addEventListener("click",()=>{let e=0,o=[];const t=document.querySelectorAll(".contenedorJuego.seleccionado .id input "),c=document.querySelectorAll(".contenedorJuego.seleccionado .txtContenedor .content .stock");if(!confirm("Esta seguro de su compra ?"))alert("No se realizara la compra...");else{alert("Felicidades Por su Compra");for(let s=0;s<t.length;s++)l.forEach(d=>{d.id==t[s].value&&(d.stock==0?c[s].innerHTML="Agotado":(e+=d.precio,o.push(d.nombre+" :"+d.precio),c[s].innerHTML=d.descontarStock(1),d.stock==0&&(c[s].innerHTML="Agotado")),console.log(d.stock))});const r=o.join(`
`);alert(`Los items fueron:

`+r+`
La totalidad es: `+e)}});const I=e=>{let o=document.querySelector(".radio-filter");e.forEach(t=>{const c=document.createElement("DIV"),n=document.createElement("input"),r=document.createElement("label");n.type="checkbox",c.classList.add("boxRadio"),n.classList.add("radio-class"),n.value=t,r.textContent=t,c.appendChild(n),c.appendChild(r),o.appendChild(c)})};I(a);w();function f(){let e=document.querySelector(".contenedorJuegos"),o=e.lastElementChild;for(;o;)e.removeChild(o),o=e.lastElementChild}window.addEventListener("DOMContentLoaded",e=>{});
