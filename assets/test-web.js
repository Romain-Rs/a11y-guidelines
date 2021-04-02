$(document).ready(function(){//requette XMLHttpRequest
function a(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE)return 200===this.status?b(null,this.responseText):b({errCode:this.status,errMsg:this.statusText})},c.open("GET",a,!0),c.send(null)}//appel des Json
function b(){let a=document.getElementById("refTests");a.innerHTML="<div class=\"alert alert-warning\">Erreur chargement ressource JSON</div>"}//on concatene les 2 jsons en les réorganisant par tests
function c(c,a){// si les titres sont identiques, on regroupe par titre
for(var b=0;b<c.length;b++){let f=c[b].title;for(var d,e=0;e<a.length;e++)d=a[e].title,f==d&&(c.splice(b++,0,a[e]),a.splice(e,1))}//sinon on regroupe les tests par themes
for(var b=0;b<c.length;b++){let d=c[b].themes;for(var f,e=0;e<a.length;e++)f=a[e].themes,d==f&&(c.splice(b,0,a[e]),a.splice(e,1))}return c}// function encode(str){
// str=str.replace(/[\x26\x0A\<>'"^]/gi, function(r){return"&#"+r.charCodeAt(0)+";"});
// str=str.replace(/\&#60;code\&#62;([\s\S]*?)\&#60;\/code\&#62;/g, '<code>$1</code>');
// return str;
// }
function d(a){return a=a.toLowerCase(),a=a.replace(/é|è|ê/g,"e"),a=a.replace(/ /g,"-"),a}//supprimer les doublons dans les filtres
function e(a,b){for(var c=0;c<a.length;c++){//for (let condition of arrCond) {
let d=a[c];if(d.name==b){let b=a.indexOf(d);a.splice(b,1)}}return a}function f(a,b){var f=JSON.parse(a),g=JSON.parse(b),h=[],k=c(f.items,g);let l=new function(){// Récupération des données
//this.refTests = refTests;
var a={title1:"Proc\xE9dures",title2:"A v\xE9rifier",title3:"R\xE9sultats",title4:"Justification"};// Retourne la liste des checkboxes
// Retourne les tests filtrés
this.UpdateTypes=function(a,b){let c=[];for(let d in b)for(let a in b[d].type)c.push(b[d].type[a]);let d=c.filter(function(a,b,c){return c.indexOf(a)===b});for(let c in a){var e=document.getElementById("type"+c);e.disabled=!0;var f=document.getElementById("labelType"+c);f.classList.add("disabled")}for(let c in a)for(let b in d)if(a[c]==d[b]){var e=document.getElementById("type"+c);e.disabled=!1;var f=document.getElementById("labelType"+c);f.classList.remove("disabled")}},this.UpdateFeedback=function(a,b){let c=document.getElementById("reinit"),d=document.getElementById("feedback"),e="",f=1<b?"tests":"test";if(a){c.disabled=!1,e="<p><div><b>"+b+"</b> "+f+" dans les filtres en cours</div> <button type=\"button\" class=\"btn btn-secondary btn-sm mt-2 mb-3\" id=\"reinitLink\">R\xE9initialiser<span class=\"sr-only\">&nbsp;les filtres</span></a></p>",d.innerHTML=e;let a=document.getElementById("reinitLink");a.addEventListener("click",function(){l.FetchAll(k),l.FilterByType(),l.UpdateFeedback(!1,k.length)})}else c.disabled=!0,e="<p><b>"+b+"</b> tests en cours</p>",d.innerHTML=e},this.FetchAll=function(b){// Selection de l'élément
let c=document.getElementById("refTests"),e="",f="";//on boucle dans le tableau passé en paramètre de la fonction
for(let c in b){if(f!=b[c].themes){let a="0"===c?"":" class=\"pt-5\"";f=b[c].themes,e+="<h2 id=\"test-"+d(b[c].themes)+"\""+a+">"+b[c].themes+"</h2>"}for(let d in e+="<article class=\"card\"><div class=\"card-header\" id=\"heading"+c+"\"><h3 class=\"card-title mb-0\"><a class=\"\" role=\"button\" data-toggle=\"collapse\" href=\"#collapse"+c+"\" aria-expanded=\"false\" aria-controls=\"collapse"+c+"\"><span class=\"accordion-title h6 mb-0 flex-grow-1\">"+b[c].title+"</span><span class=\"badge badge-pill badge-light mr-2 align-self-center\">"+("Concepteur"==b[c].profils[0]?"Conception":"D\xE9veloppement")+"</span></a></h3>",e+="</div><div id=\"collapse"+c+"\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading"+c+"\">",e+="<div class=\"card-block\"><div class=\"row\">",e+="<div class=\"col-lg-6\"><h4>"+a.title1+"</h4><ol>",b[c].tests)e+="<li>"+b[c].tests[d]+"</li> ";for(let d in e+="</ol></div>",e+="<div class=\"col-lg-6\"><h4>"+a.title2+"</h4><ol>",b[c].verifier)e+="<li>"+b[c].verifier[d]+"</li> ";for(let d in e+="</ol></div>",e+="</div>",e+="<div class=\"row\">",e+="<div class=\"col-lg-12\"><h4>"+("Concepteur"==b[c].profils[0]?a.title4:a.title3)+"</h4><ol>",b[c].resultat)e+="<li>"+b[c].resultat[d]+"</li> ";for(let a in e+="</ol></div>",e+="</div>",b[c].exception&&(e+="<div class=\"row\"><div class=\"col-lg-12\" ><h4>Exceptions</h4>",e+="<p>"+b[c].exception+"</p> ",e+="</div>",e+="</div>"),e+="</div><div class=\"card-footer text-muted\"><b>Profils : </b>",b[c].profils)e+=b[c].profils[a],a==b[c].profils.length-1?"":e+=",  ";for(let a in e+="<br />"+(0<b[c].type.length?"<b>Outils : </b>":""),b[c].type)e+="<i class=\"fa fa-tag\" aria-hidden=\"true\"></i> "+b[c].type[a]+" ";e+="</div>",e+="</div></article>"}// Affichage de l'ensemble des lignes en HTML
c.innerHTML=0===b.length?"<div class=\"alert alert-warning\">Aucun r\xE9sultat ne correspond \xE0 votre s\xE9lection</div>":e},this.DisplayFilters=function(){let a=document.getElementById("filter-footer"),b="";b+="<button id=\"reinit\" class=\"btn btn-secondary\" disabled>R\xE9initialiser<span class=\"sr-only\">&nbsp;les filtres</span></button>",a.innerHTML=b;let c=document.getElementById("reinit");c.addEventListener("click",function(){l.FetchAll(k),l.FilterByType(),l.UpdateFeedback(!1,k.length)});// Selection de l'élément
let d=document.getElementById("types"),e=[],f=document.getElementById("profils"),g=[];// Chaque ligne (test)
for(let a in k){// Chaque "type" dans chaque ligne (test)
for(let b in k[a].type)e.push(k[a].type[b]);// Chaque "profil" dans chaque ligne (test)
for(let b in k[a].profils)g.push(k[a].profils[b])}//let uniqueTypes = types.filter( (value, index, self) => self.indexOf(value) === index );
h=e.filter(function(a,b,c){return c.indexOf(a)===b}),h.sort(function(c,a){return c.toLowerCase().localeCompare(a.toLowerCase())});let j="";for(let a in j+="<li><input type=\"radio\" id=\"typeAll\" name=\"types\" value=\"typeAll\" checked> <label for=\"typeAll\" >Tous les outils</label>",h)j+="<li><input type=\"radio\" id=\"type"+a+"\" name=\"types\" value=\""+h[a]+"\"> <label for=\"type"+a+"\" id=\"labelType"+a+"\">"+h[a]+"</label></li>";//let uniqueProfils = profils.filter( (value, index, self) => self.indexOf(value) === index );
let m=g.filter(function(a,b,c){return c.indexOf(a)===b}),n="";for(let a in m)n+="<li><input type=\"radio\" id=\"profil"+a+"\" name=\"profil\" value=\""+m[a]+"\"> <label for=\"profil"+a+"\">"+m[a]+"</label></li>";d.innerHTML=j,f.innerHTML=n},this.FilterByType=function(){this.DisplayFilters();let a=document.querySelectorAll("input"),b=[],c=[],f=[],g=this,j=!1;/*
        //init array conditions avec valeur Expert Accessibilité
        arrProfil.push("Expert Accessibilité");

        conditions.unshift(function(item) {
          return item.profils.indexOf(arrProfil[0]) !== -1;
        });

        //on nomme la fonction, pour les boutons radio on utilise this.name
        Object.defineProperty(conditions[0], 'name', {value: this.name, writable: false});
        */for(var m=0;m<a.length;m++){let d=a[m];d.addEventListener("click",function(){this.checked&&"profil"===this.name&&(c=[],c.push(d.value)),this.checked&&"typeAll"===this.id?b=[]:this.checked&&"types"===this.name&&(b=[],b.push(d.value));let a=b.length+c.length;0<a?(1==a?(1===c.length&&(e(f,this.name),f.unshift(function(a){//return item.profils === arrProfil[0];
return-1!==a.profils.indexOf(c[0])}),Object.defineProperty(f[0],"name",{value:this.name,writable:!1}),j=!0),1===b.length&&(e(f,this.name),f.unshift(function(a){return-1!==a.type.indexOf(b[0])}),Object.defineProperty(f[0],"name",{value:this.name,writable:!1}),j=!1)):(this.checked&&"profil"===this.name&&(e(f,this.name),f.unshift(function(a){return-1!==a.profils.indexOf(c[0])}),Object.defineProperty(f[0],"name",{value:this.name,writable:!1}),j=!0),this.checked&&"types"===this.name&&"allType"!=this.id&&(e(f,this.name),f.unshift(function(a){return-1!==a.type.indexOf(b[0])}),Object.defineProperty(f[0],"name",{value:this.name,writable:!1}),j=!1)),filteredTest=k.filter(function(a){return f.every(function(b){return b(a)})}),l.FetchAll(filteredTest),j&&l.UpdateTypes(h,filteredTest),l.UpdateFeedback(!0,filteredTest.length)):l.FetchAll(k)})}}};// Affichage de tous les tests
// Filtrage
l.FetchAll(k),l.FilterByType(),l.UpdateFeedback(!1,k.length)}const g=document.documentElement.getAttribute("lang");if(!g)throw new Error("A lang attribute must be set on the <html> tag !");a("https://a11y-guidelines.orange.com/fr/web/la-va11ydette/json/tests-web-"+g+".json",function(c,d){return c&&b(),a("https://a11y-guidelines.orange.com/assets/json/"+g+"/tests-concepteur.json",function(a,c){return a&&b(),f(d,c)})})});