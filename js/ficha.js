function getFicha(){
    let nom_producto = document.getElementById("nom_producto").value
    document.getElementById("resproduct").innerText = nom_producto

    let linea = document.getElementById("linea").value
    document.getElementById("reslinea").innerText = linea

    let versiones = document.getElementById("versiones").value
    document.getElementById("resanterior").innerText = versiones

    let version = document.getElementById("version").value
    document.getElementById("resactual").innerText = version

    let modulo = document.getElementById("modulo").value
    document.getElementById("resmodulo").innerText = modulo

    let descripcion = document.getElementById("descripcion").value
    document.getElementById("resdescripcion").innerText = descripcion

    let descripciones = document.getElementById("descripciones").value
    document.getElementById("resdescripciones").innerText = descripciones

    let productor = document.getElementById("productor").value
    document.getElementById("resproductor").innerText = productor

    let producto = document.getElementById("producto").value
    document.getElementById("resproducto").innerText = producto

    let otro = document.getElementById("otro").value
    document.getElementById("resotro").innerText = otro

    let requerimiento = document.getElementById("requerimiento").value
    document.getElementById("resrequerimiento").innerText = requerimiento

    let requerimientos = document.getElementById("requerimientos").value
    document.getElementById("resrequerimientos").innerText = requerimientos

    let cliente = document.getElementById("cliente").value
    document.getElementById("rescliente").innerText = cliente
}


