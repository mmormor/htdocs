function imprimircadena() {
    let resultado, mitadcadena, cadena, ultimocaracter, cadenainversa, cadenaconguion;
  cadena=prompt("Ingrese la cadena de texto")
  mitadcadena = cadena.substr(0, cadena.length/2);
  ultimocaracter = cadena.charAt(cadena.length-1);
  cadenainversa="";
  for (let f = cadena.length - 1; f >= 0; f--) {
      cadenainversa += cadena.charAt(f);
    }
    cadenaconguion="";
    for (let f = 0; f < cadena.length; f++) {
      cadenaconguion += cadena.charAt(f);
      if (f < cadena.length - 1) {
        cadenaconguion += "-";
      }
    }
  resultado = "La cadena es: "+cadena+"<br>"+
  "La mitad de la cadena es: " +mitadcadena+
  "<br>"+"Por otro lado, el último carácter es: "+ultimocaracter+"<br>"+
  "La cadena inversa es: "+cadenainversa+"<br>"+
  "La cadena con guiones es: "+cadenaconguion;
  document.write(resultado);
}
imprimircadena();