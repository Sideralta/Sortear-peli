
const btn = document.getElementById('botoncito');
let films = [];
let number = null;

btn.addEventListener('click', function(){  
const pelis = document.getElementById('peliculaz');
const input = pelis.value;
const tag = document.createElement('p');
const txt = document.createTextNode(`${input}`)
const container = document.getElementById('contenedor');
tag.appendChild(txt);
container.appendChild(tag);
films.push(input);
if (input != ""){
    form.reset();
}
})

peliculaz.addEventListener('keydown', function(event){  
   if (event.key === "Enter"){
       btn.click();
   }
})

function randomMovie(){
number = Math.floor(Math.random() * films.length);
const container = document.getElementById('contenedor');
while (container.firstChild){
    container.removeChild(container.firstChild);
}
const tag = document.createElement('p');
const txt = document.createTextNode(`${films[number]}`);
tag.appendChild(txt);
container.appendChild(tag);
document.getElementById("peliculaz").readOnly = true;
}

function again(){
const container = document.getElementById('contenedor');
while (container.firstChild){
    container.removeChild(container.firstChild);
}
document.getElementById("peliculaz").readOnly = false;
}


