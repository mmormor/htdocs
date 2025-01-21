function valores(){
    let resultado
    let num, num2,num3;
    num=parseInt(prompt("Introdcue el primer valor"))
    num2=parseInt(prompt("Introdcue el segundo valor"))
    num3=parseInt(prompt("Introdcue el tercer valor"))
    if(num>num2 && num3>num2)
{resultado="De "+num+" "+num2+" "+num3+" El numero menor es "+num2;}
else if(num>num3 && num2>num3)
{resultado="De "+num+" "+num2+" "+num3+"El numero menor es "+num3;}
else if (num3>num && num2>num) {resultado="De "+num+" "+num2+" "+num3+"El numero menor es "+num;}
else{resultado="Los valores deben de ser diferentes"}
return resultado
}
let resultado=valores();
document.write(resultado)