function sueldosEmpl(){
    let resultado=2
    let sueldo_100_300=0,sueldo_300=0,sueldoTotal=0
    for(let empleado=1;empleado<=5;empleado++){

        let sueldos=parseInt(prompt("Introduce tu sueldo entre 100 y 500"))
        sueldoTotal=sueldoTotal+sueldos
        

if(sueldos>=100 && sueldos<300)
sueldo_100_300++
else if(sueldos>=300 && sueldos<=500){
sueldo_300++
}
else{
    "El numero introducido debe de ser entre 100 y 500"
}
}
return "El numero de empleados que cobran entre 100 y 300 es de "+sueldo_100_300+("<br>")+"El numero de empleados que cobran igaul o mas de 300 es de "+sueldo_300+("<br>")+"El sueldo que tiene que pagar la empresa es de "+sueldoTotal    
}
let resultado=sueldosEmpl(); 
document.write(resultado);


