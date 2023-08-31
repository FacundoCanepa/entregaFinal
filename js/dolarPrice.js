function prueba (){
    fetch('https://v6.exchangerate-api.com/v6/222aec119e229115384faf97/latest/usd') 
    .then(res => res.json())
    .then(data => {
        const carrito = []
        const carritoTotal = []
        var dolarHoy = data.conversion_rates.ARS 
        const listaProductos = [ {
            id: 1,
            nombre:"Ravioles de verdura",
            precio: Math.round(1.30 * dolarHoy),
            img: "../assets/img/ravioles-tiopelotte.jpg" ,
        } ,
        {
            id: 2,
            nombre:"Ravioles de verdura y pollo",
            precio: Math.round(1.36 * dolarHoy),
            img:  "../assets/img/ravioles-tiopelotte.jpg",
        } ,
        {
            id: 1,
            nombre:"Ravioles de verdura",
            precio: Math.round(1.30 * dolarHoy),
            img: "../assets/img/ravioles-tiopelotte.jpg" ,
        } ,
        {
            id: 2,
            nombre:"Ravioles de verdura y pollo",
            precio: Math.round(1.36 * dolarHoy),
            img:  "../assets/img/ravioles-tiopelotte.jpg",
        } ,
        {
            id: 1,
            nombre:"Ravioles de verdura",
            precio: Math.round(1.30 * dolarHoy),
            img: "../assets/img/ravioles-tiopelotte.jpg" ,
        } ,
        {
            id: 2,
            nombre:"Ravioles de verdura y pollo",
            precio: Math.round(1.36 * dolarHoy),
            img:  "../assets/img/ravioles-tiopelotte.jpg",
        } ,]
        listaProductos.forEach((i) =>{
            let listItem = document.createElement ("li");
            listItem.innerHTML = `
            <img src="${i.img}" >
            <h1>${i.nombre}</h1>
            <h4>${i.precio}$</H4>
            `;
            const button = document.createElement ("button")
            button.id = "carritoIndex"
            button.innerHTML = `
            <button> añadir carrito </button>
            `
            listItem.style.fontFamily = "'Quattrocento Sans', sans-serif";
            listItem.style.textAlign = "center";
            listItem.style.fontSize = "1.5rem";
            listItem.style.paddingTop = "0.5rem" ;
        
            listaProducto.append(listItem)
            listItem.append(button)
            
            
            button.addEventListener("click" , () => {
                carrito.push({
                    id : i.id,
                    nombre : i.nombre,
                    precio : i.precio,
                    img : i.img ,
                });
                carritoTotal.push({
                    id : i.id,
                    nombre : i.nombre,
                    precio : i.precio,
                    img : i.img ,
                });
                carrito.forEach ((i) => {
                    let contenidoCarrito = document.createElement ("ul");
                    contenidoCarrito.className = "carrito";
                    contenidoCarrito.innerHTML = `
                    <img src="${i.img}" >
                    <li>${i.nombre}</li>
                    <li>${i.precio} $</li>
                    `
                    contenidoCarrito.style.fontFamily = "'Quattrocento Sans', sans-serif";
                    contenidoCarrito.style.textAlign = "center";
                    contenidoCarrito.style.fontWeight = "600"
                    contenidoCarrito.style.fontSize = "2rem";
                    contenidoCarrito.style.paddingBottom = "2rem"
                    contenidoCarrito.style.width = "35rem";
                    contenedorCarritos.append(contenidoCarrito)
                })
                carrito.pop()
            })  
        })
        comprarTotal2.addEventListener("click" , () => {
            let sumaTotal = 0; 
            for (let i = 0; i < carritoTotal.length; i++) {
                sumaTotal += carritoTotal[i].precio;
            }
            Swal.fire({
                title: 'Quiere confirmar el pedido?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'confirmar'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire(
                    'tu pedido',
                    'fue confirmado',
                )
                const precioTotalH4 = document.createElement("h4")
                precioTotalH4.innerText = `
                Total : ${sumaTotal} $
            `
                precioTotal.append(precioTotalH4)
                const carritoTotalJS = JSON.stringify(carritoTotal)
                localStorage.setItem('carrito',carritoTotalJS)
                }
            })
        })
        

    }
    )
}

