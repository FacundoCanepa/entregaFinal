
const carritoBody = document.getElementById ("body-carrito")
const headerCarrito = document.createElement ("header")

headerCarrito.style.backgroundColor = "#FBE6D4";
headerCarrito.style.backgroundColor = "#FBE6D4"; 
headerCarrito.style.paddingTop = "2.5rem";
headerCarrito.style.paddingBottom = "2.5rem";

const listaMenu = document.createElement ("ul");
listaMenu.style.display = "flex" ;
listaMenu.style.justifyContent = "space-around";
listaMenu.style.flexWrap= "wrap";

const menu = [ "pastas", "recetas", "ubicacion", "carrito"]; 

for (let i = 0 ; i< menu.length; i++ ) {
    const menus = menu[i];
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <a href="../pages/${menus}.html">${menus}</a>
    `
    listItem.style.fontSize = "6rem" ;
    listItem.style.fontWeight = "600"
    listItem.style.fontFamily = "'Island Moments', cursive"
    listItem.style.paddingLeft = "4rem"
    listItem.style.paddingRight = "4rem"
    listaMenu.appendChild(listItem);
}

headerCarrito.appendChild(listaMenu)

const mainCarrito = document.createElement ("main")
mainCarrito.style.backgroundColor ="#FECB89"

const listaProducto = document.createElement ("ul");
listaProducto.style.display = "flex" ;
listaProducto.style.justifyContent = "space-around";
listaProducto.style.paddingTop = "2.5rem"; 
listaProducto.style.paddingBottom = "2.5rem" ;
listaProducto.style.flexWrap= "wrap";

const carritoImg = document.createElement ("div");
carritoImg.className = "carritoImg";
carritoImg.innerHTML= `
<h2>carrito</h2>
<img src="../assets/img/carrito.png" alt="">
`;
carritoImg.style.display = "flex" ;
carritoImg.style.justifyContent = "center" 
carritoImg.style.paddingBottom = "2rem" ;
carritoImg.style.fontSize = "4rem"
carritoImg.style.fontFamily = "'Quattrocento Sans', sans-serif";

const contenedorCarritos = document.createElement("div")
contenedorCarritos.style.display = "flex"; 
contenedorCarritos.style.justifyContent = "space-around"
contenedorCarritos.style.flexWrap= "wrap";
const comprarTotal = document.createElement("div")
comprarTotal.style.textAlign = "center" ;
comprarTotal.style.paddingBottom = "10rem"
const comprarTotal2 = document.createElement ("button");
comprarTotal2.innerHTML = `
comprar
`
comprarTotal.append(comprarTotal2)

const precioTotal = document.createElement("div")
precioTotal.style.textAlign ="center";
precioTotal.style.fontSize = "5rem"




prueba()

mainCarrito.append(listaProducto)
mainCarrito.append(carritoImg)
mainCarrito.append(contenedorCarritos)
mainCarrito.append(comprarTotal)
mainCarrito.append(precioTotal)
carritoBody.append(mainCarrito)
carritoBody.prepend(mainCarrito)
carritoBody.prepend(headerCarrito)
