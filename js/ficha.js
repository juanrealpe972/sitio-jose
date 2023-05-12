const a = document.querySelector("#datoProducto")
const b = document.querySelector("#datoLinea")
const c = document.querySelector("#datoAnterior")
const d = document.querySelector("#datoActual")
const e = document.querySelector("#datoModulo")
const f = document.querySelector("#datoGeneral")
const g = document.querySelector("#datoDescripcion")
const h = document.querySelector("#datoHadware")
const i = document.querySelector("#datoSoftware")
const j = document.querySelector("#datoOtro")
const k = document.querySelector("#datoFuncional")
const l = document.querySelector("#datoAdicional")
const m = document.querySelector("#datoCliente")

function cargarData(){
    let nom,lin,ant,act,mod,gen,des,had,sof,otr,fun,adi,cli

    nom = localStorage.getItem("nombre");
    lin = localStorage.getItem("linea");
    ant = localStorage.getItem("anterior");
    act = localStorage.getItem("actual");
    mod = localStorage.getItem("modulo");
    gen = localStorage.getItem("general");
    des = localStorage.getItem("descripcion");
    had = localStorage.getItem("hadware");
    sof = localStorage.getItem("software");
    otr = localStorage.getItem("otro");
    fun = localStorage.getItem("funcional");
    adi = localStorage.getItem("adicional");
    cli = localStorage.getItem("cliente");

    a.innerHTML = nom;
    b.innerHTML = lin;
    c.innerHTML = ant;
    d.innerHTML = act;
    e.innerHTML = mod;
    f.innerHTML = gen;
    g.innerHTML = des;
    h.innerHTML = had;
    i.innerHTML = sof;
    j.innerHTML = otr;
    k.innerHTML = fun;
    l.innerHTML = adi;
    m.innerHTML = cli;
}

cargarData()


