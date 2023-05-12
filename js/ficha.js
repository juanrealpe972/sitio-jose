function almacenarData(){
    let nom,lin,ant,act,mod,gen,des,har,sof,otr,fun,adi,cli
    nom = document.getElementById("nombre").value
    lin = document.getElementById("linea").value
    ant = document.getElementById("anterior").value
    act = document.getElementById("actual").value
    mod = document.getElementById("modulo").value
    gen = document.getElementById("general").value
    des = document.getElementById("descripcion").value
    har = document.getElementById("hardware").value
    sof = document.getElementById("software").value
    otr = document.getElementById("otro").value
    fun = document.getElementById("funcional").value
    adi = document.getElementById("adicional").value
    cli = document.getElementById("cliente").value

    localStorage.setItem("Nombre", nom);
    localStorage.setItem("Linea", lin);
    localStorage.setItem("Anterior", ant);
    localStorage.setItem("Actual", act);
    localStorage.setItem("Modulo", mod);
    localStorage.setItem("General", gen);
    localStorage.setItem("Descripcion", des);
    localStorage.setItem("Hardware", har);
    localStorage.setItem("Software", sof);
    localStorage.setItem("Otro", otr);
    localStorage.setItem("Funcional", fun);
    localStorage.setItem("Adicional", adi);
    localStorage.setItem("Cliente", cli);

    document.getElementById("nombre").value ="";
    document.getElementById("linea").value ="";
    document.getElementById("anterior").value ="";
    document.getElementById("actual").value ="";
    document.getElementById("modulo").value ="";
    document.getElementById("general").value ="";
    document.getElementById("descripcion").value ="";
    document.getElementById("hardware").value ="";
    document.getElementById("software").value ="";
    document.getElementById("otro").value ="";
    document.getElementById("funcional").value ="";
    document.getElementById("adicional").value ="";
    document.getElementById("cliente").value ="";
}
const a = document.querySelector("#datoProducto")
const b = document.querySelector("#datoLinea")
const c = document.querySelector("#datoAnterior")
const d = document.querySelector("#datoActual")
const e = document.querySelector("#datoModulo")
const f = document.querySelector("#datoGeneral")
const g = document.querySelector("#datoDescripcion")
const h = document.querySelector("#datoHardware")
const i = document.querySelector("#datoSoftware")
const j = document.querySelector("#datoOtro")
const k = document.querySelector("#datoFuncional")
const l = document.querySelector("#datoAdicional")
const m = document.querySelector("#datoCliente")

function cargarData(){
    let nom,lin,ant,act,mod,gen,des,har,sof,otr,fun,adi,cli;

    nom = localStorage.getItem("Nombre");
    lin = localStorage.getItem("Linea");
    ant = localStorage.getItem("Anterior");
    act = localStorage.getItem("Actual");
    mod = localStorage.getItem("Modulo");
    gen = localStorage.getItem("General");
    des = localStorage.getItem("Descripcion");
    har = localStorage.getItem("Hardware");
    sof = localStorage.getItem("Software");
    otr = localStorage.getItem("Otro");
    fun = localStorage.getItem("Funcional");
    adi = localStorage.getItem("Adicional");
    cli = localStorage.getItem("Cliente");

    a.innerHTML = nom;
    b.innerHTML = lin;
    c.innerHTML = ant;
    d.innerHTML = act;
    e.innerHTML = mod;
    f.innerHTML = gen;
    g.innerHTML = des;
    h.innerHTML = har;
    i.innerHTML = sof;
    j.innerHTML = otr;
    k.innerHTML = fun;
    l.innerHTML = adi;
    m.innerHTML = cli;
}
