function calcular(){
    let precio = parseFloat(document.getElementById("precio-compra").value);
    let cant = parseFloat(document.getElementById("cant").value);
    let gcia = parseFloat(document.getElementById("gcia").value);

    console.log(precio);
    console.log(typeof(precio));
    console.log(cant);
    console.log(typeof(cant));
    console.log(gcia);
    console.log(typeof(gcia));

    let precioVenta = ((precio/cant)*(1+(gcia/100))).toFixed(2);
    console.log(precioVenta)

    document.getElementById("pVenta").innerHTML = "$ " + (precioVenta);
}