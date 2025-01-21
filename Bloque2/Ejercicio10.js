function mes(){
    let fecha = new Date()
    let mes =fecha.getMonth()
    let cuatrimestre
    let resultado
    if (mes>=0 && mes<=4)
{cuatrimestre=1}
else if(mes>=5 && mes<8)
{cuatrimestre=2}
else {cuatrimestre=3};
return "El cuatrimestre en el que nos encontramos es "+cuatrimestre;
}
let resultado=mes();
document.write(resultado);