function getValorTotal(){
    let cantidad1, valor1, cantidad2, valor2

    cantidad1 = document.getElementById("cantidad1").value
    valor1 = document.getElementById("valor1").value
    cantidad2 = document.getElementById("cantidad2").value
    valor2 = document.getElementById("valor2").value

    res1 = cantidad1*valor1
    res2 = cantidad2*valor2
    restotaltodo = res1+res2

    document.getElementById("restotal1").innerHTML = "<div> Total de "+ res1 +"</div>"
    document.getElementById("restotal2").innerHTML = "<div> Total de "+ res2 +"</div>"
    document.getElementById("restotal").innerHTML = "<div> Valor total "+ restotaltodo +"</div>"
}
function getFactura(){
    let name_product;

    document.getElementById("name_sub").innerHTML = "Nombre del subproyecto"

    name_product = document.getElementById ("name_product").value
    document.getElementById("resname").innerText = name_product

    document.getElementById("Producto").innerHTML = "Producto"
    document.getElementById("Cantidad").innerHTML = "Cantidad"
    document.getElementById("ValorU").innerHTML = "Valor Unitario"
    document.getElementById("ValorT").innerHTML = "Valor Total"

    name_p1 = document.getElementById("name_p1").value
    document.getElementById("resname_p1").innerText = name_p1

    cantidad1 = document.getElementById("cantidad1").value
    document.getElementById("rescantidad1").innerText =cantidad1

    valor1 = document.getElementById("valor1").value
    document.getElementById("resvalor1").innerText = valor1

    restotal1 = cantidad1*valor1
    document.getElementById("total1").innerText = restotal1

    name_p2 = document.getElementById("name_p2").value
    document.getElementById("resname_p2").innerText = name_p2

    cantidad2 = document.getElementById("cantidad2").value
    document.getElementById("rescantidad2").innerText =cantidad2

    valor2 = document.getElementById("valor2").value
    document.getElementById("resvalor2").innerText = valor2

    restotal2 = cantidad2*valor2
    document.getElementById("total2").innerText = restotal2

    document.getElementById("TotalT").innerHTML = "Valor Total"

    todototal = restotal1+restotal2
    document.getElementById("todototal").innerText =todototal
}
