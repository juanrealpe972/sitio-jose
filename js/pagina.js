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
    document.getElementById("hadware").value ="";
    document.getElementById("software").value ="";
    document.getElementById("otro").value ="";
    document.getElementById("funcional").value ="";
    document.getElementById("adicional").value ="";
    document.getElementById("cliente").value ="";
}