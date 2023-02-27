/*const h1=document.querySelector("h1");
const p=document.querySelector("p");
const parrafito=document.querySelector(".parrafito");
const pid=document.getElementById("pid");
const input=document.querySelector("input");

console.log({
    h1,
})

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML="patito <br> feo";
h1.innerText="patito <br> feo"//este se ejecuta como texto incluyendo el <br>
console.log(h1.getAttribute("perro"))

h1.classList.add("rojo");
h1.classList.remove("rojo");
// h1.classList.toggle("verde");
// h1.classList.contains("verde");

//input.value="456"

const img=document.createElement("img");
img.setAttribute("src", "https://i.pinimg.com/564x/ca/fc/f1/cafcf11b58f9528b223a866a2e1fa093.jpg")  
console.log(img)

pid.append(img);*/

const h1=document.querySelector("h1");
const form=document.querySelector("#form");
const input1=document.querySelector("#calculo1");
const input2=document.querySelector("#calculo2");
const btn=document.querySelector("#btnCalcular");
const pResult=document.querySelector("#result");

form.addEventListener("submit",sumarInputValues);


function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs=input1.value+input2.value;
    pResult.innerText="Resultado es:"+sumaInputs;
}

//otra forma de resolver el problema es:
//agregando el type="button" al <button>
/*btn.addEventListener("click", btnSumar);

function btnSumar(){
    const sumarInputs= input1.value+input2.value;
    pResult.innerText="Resultado es:" + sumarInputs;
}*/























