function encriptar0(palabra) {
    var decodificada = "";
    for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] == "a") {
            decodificada = decodificada + "ai";
        } else if (palabra[i] == "e") {
            decodificada = decodificada + "enter";
        } else if (palabra[i] == "i") {
            decodificada = decodificada + "imes";
        } else if (palabra[i] == "o") {
            decodificada = decodificada + "ober";
        } else if (palabra[i] == "u") {
            decodificada = decodificada + "ufat";
        } else {
            decodificada = decodificada + palabra[i];
        }
    }
    return decodificada;
}

function encriptar() {
    var text = document.getElementById("text").value

    var txtCifrado = encriptar0(text);

    if (text.length != 0){
        document.getElementById("hidden").style.display = "none";
        document.getElementById("show").style.display = "flex";
        document.getElementById("text-2").value = txtCifrado;
    }
}

function desencriptar(){
    var text = document.getElementById("text").value

    var txtCifrado = desencriptar0(text);

    if (text.length != 0) {
        document.getElementById("hidden").style.display = "none";
    document.getElementById("show").style.display = "flex";
    document.getElementById("text-2").value = txtCifrado;
    }
}

function desencriptar0(palabra){
    var decodificada = "";
    for(var i=0; i <palabra.length;i++){
        if (palabra[i] == "a" && i+2<=palabra.length ){
            if(palabra.substring(i,i+2)=="ai" ){
                decodificada = decodificada+"a"
                i=i+1;
            }
        }
        else if (palabra[i] == "e" && i+2<=palabra.length ){
            if(palabra.substring(i,i+5)=="enter"){
                decodificada = decodificada+"e"
                i=i+4;
            }
        }
        else if (palabra[i] == "i" && i+4<=palabra.length ){
            if(palabra.substring(i,i+4)=="imes"){
                decodificada = decodificada+"i"
                i=i+3;
            }
        }
        else if (palabra[i] == "o"&& i+4<=palabra.length ){
            if(palabra.substring(i,i+4)=="ober"){
                decodificada = decodificada+"o"
                i=i+3;
            }
        }
        else if (palabra[i] == "u" && i+4<=palabra.length ){
            if(palabra.substring(i,i+4)=="ufat"){
                decodificada = decodificada+"u"
                i=i+3;
            }
        }
        else{
            decodificada = decodificada+palabra[i]
        }
    }
    return decodificada;
}


function copiar(){
    var content = document.querySelector("#text-2");
    content.select();
    document.execCommand("copy");
}
