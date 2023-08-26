const bodyIndex = document.getElementById ("body-index")

const headerIndex = document.createElement ("header")
headerIndex.className = `headerIndex`;
headerIndex.style.backgroundColor = `#FBE6D4`;
headerIndex.style.display = `flex`;
const headerImg = document.createElement ("div")
headerImg.className = `headerImg`;
headerImg.innerHTML = `
<img src="assets/img/negocio-removebg.png" alt="">
`;

const headerH1 = document.createElement ("div")
headerH1.className = `headerH1`
headerH1.style.justifyContent = `center`;

headerH1.style.width = `100%`;
headerH1.innerHTML = `
<h1>Tio Pelotte</h1>
`;

headerIndex.append(headerImg)
headerIndex.append(headerH1)

const mainIndex = document.createElement ("main")
mainIndex.style.backgroundColor = "white";
mainIndex.style.position = `relative` ;

const imgCarrusel = [
    {
    nombre:"./assets/img/ravioles-index.jpg"
},
{
    nombre:"./assets/img/fondo-ubicacion.jpg"
},
{
    nombre:"./assets/img/fideos-index.jpg "
},
{
    nombre:"./assets/img/carrusel1.jpg "
},
{
    nombre:"./assets/img/carrusel2.jpg "
},
{
    nombre:"./assets/img/carrusel3.jpg "
}
]




const carruselDiv = document.createElement ("div")
carruselDiv.className = "carrusel";
carruselDiv.style.display = "flex";
carruselDiv.style.justifyContent = "center";
carruselDiv.style.height = "100%" ;
const carruselDivI = document.createElement ("div")
carruselDivI.className = "carrusel-items";
carruselDivI.style.display = " flex"

carruselDiv.append(carruselDivI)

imgCarrusel.forEach((i) =>{
let carruselDivIts = document.createElement ("div")
carruselDivIts.className = "carrusel-item";
carruselDivIts.innerHTML = `
<img src="${i.nombre}"> 
`
carruselDivI.append(carruselDivIts)
})



let intervalo = null;
let step = 1; 


const start = () => {
    intervalo= setInterval(function () {
        carruselDivI.scrollLeft = carruselDivI.scrollLeft + step ;
        maxScrollLeft = carruselDivI.scrollWidth - carruselDivI.clientWidth ;
        if (Math.floor(carruselDivI.scrollLeft) === maxScrollLeft){
            step = -1 ;
        } else if (carruselDivI.scrollLeft === 0){
            step = 1 ;
        }
    } ,30 ); 
};

start();

const mainDivForm = document.createElement ("div")
mainDivForm.style.alignSelf = ` center` ; 

const mainForm = document.createElement ("div")
mainForm.style.position = "Absolute"
mainForm.style.width = "45rem"
mainForm.style.height = "40rem"
mainForm.style.left ="50%"
mainForm.style.top = "50%"
mainForm.style.transform = "translate(-50%, -50%)"
mainForm.style.backdropFilter = `blur(5px)`;
mainForm.style.zIndex = "1"
mainForm.style.borderRadius = `5rem` ;
mainForm.style.padding = "3rem" ;

const mainForm2 = document.createElement ("form")
mainForm2.id = `inicioSesion`;
mainForm2.style.position = "Absolute"
mainForm2.style.left ="50%"
mainForm2.style.top = "50%"
mainForm2.style.transform = "translate(-50%, -50%)"
mainForm2.style.zIndex = "2"
mainForm2.innerHTML = `
    <label class="formulario" >
    <img src="./assets/img/usuario.png" alt="">
    <input type="text" id="username" placeholder="Nombre y Apellido" required>
    </label>
    
    <label class="formulario" >
    <img src="./assets/img/email.png" alt="">
    <input type="text" id="gmail" placeholder="Correo electronico" required>
    </label>
    
    <label class="formulario" >
    <img src="./assets/img/telefono.png" alt="">
    <input type="number" id="telefono" placeholder="Telefono" required>
    </label>
    <label class="formulario iniciar" >
    <button type="submit">Iniciar sesión</button>
    </label>
`;

mainIndex.append(carruselDiv)

mainDivForm.append(mainForm)
mainDivForm.append(mainForm2)


mainIndex.append(mainDivForm)


bodyIndex.prepend(mainIndex)
bodyIndex.prepend(headerIndex)
