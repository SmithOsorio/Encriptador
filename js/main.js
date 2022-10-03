function ocultarMuñecoTexto() {
  document.getElementById("muneco-texto").style.display = "none";
  document.getElementById("boton-copiar").style.display = "block";
}

function encriptar() {
  var textosalida;
  var textoentrada = document.getElementById("texto-entrada").value;
  ocultarMuñecoTexto();
  textoentrada = textoentrada.toLowerCase();
  textosalida = textoentrada.replace(/e/gim, "enter");
  textosalida = textosalida.replace(/i/gim, "imes");
  textosalida = textosalida.replace(/a/gim, "ai");
  textosalida = textosalida.replace(/o/gim, "ober");
  textosalida = textosalida.replace(/u/gim, "ufat");
  console.log(textosalida);

  document.getElementById("texto-salida").style.visibility = "";
  document.getElementById("texto-salida").innerHTML = textosalida;
}

function desencriptar() {
  var textosalida;
  var textoentrada = document.getElementById("texto-entrada").value;
  ocultarMuñecoTexto();
  textosalida = textoentrada.replace(/enter/gim, "e");
  textosalida = textosalida.replace(/imes/gim, "i");
  textosalida = textosalida.replace(/ai/gim, "a");
  textosalida = textosalida.replace(/ober/gim, "o");
  textosalida = textosalida.replace(/ufat/gim, "u");

  console.log(textosalida);
  document.getElementById("texto-salida").style.display = "inline";
  document.getElementById("texto-salida").innerHTML = textosalida;
}

function copiartexto(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
