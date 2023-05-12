function almacenarData(){
    let nom,lin,ant,act,mod,gen,des,had,sof,otr,fun,adi,cli
    nom = document.getElementById("nombre").value
    lin = document.getElementById("linea").value
    ant = document.getElementById("anterior").value
    act = document.getElementById("actual").value
    mod = document.getElementById("modulo").value
    gen = document.getElementById("general").value
    des = document.getElementById("descripcion").value
    had = document.getElementById("hadware").value
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
    localStorage.setItem("Hadware", had);
    localStorage.setItem("Software", sof);
    localStorage.setItem("Otro", otr);
    localStorage.setItem("funcional", fun);
    localStorage.setItem("Adicional", adi);
    localStorage.setItem("Cliente", cli);

    document.getElementById("Nombre").value ="";
    document.getElementById("Linea").value ="";
    document.getElementById("Anterior").value ="";
    document.getElementById("Actual").value ="";
    document.getElementById("Modulo").value ="";
    document.getElementById("General").value ="";
    document.getElementById("Descripcion").value ="";
    document.getElementById("Hadware").value ="";
    document.getElementById("Software").value ="";
    document.getElementById("Otro").value ="";
    document.getElementById("Funcional").value ="";
    document.getElementById("Adicional").value ="";
    document.getElementById("Cliente").value ="";
}