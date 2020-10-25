function leiaMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.diplay == "none"){
        pontos.style.diplay = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia mais";
    }
    else{
        pontos.style.diplay = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia menos";
    }
}