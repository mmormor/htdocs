
function valores()
        {
            let numNeg=0
            let numPos=0
            let multiplo15=0
            let valorPar=0
            for(let valor=1;valor<=10;valor++)
        {
            let num=parseInt(prompt("Introdcue un valor"))
        if(num<0)
        {numNeg=numNeg+1}
            else if(num>0)
            {numPos=numPos+1}
                if(num % 15 ==0)
                {multiplo15=multiplo15+1}
                    if(num % 2 ==0)
                    {valorPar=valorPar+1}
        }
        return "La cantidad de valores positivos es de "+numPos+
        " La cantidad de valores negativos es de "+numNeg+
        " La cantidad de valores multplos de 15 es de "+multiplo15+
        " La canidad de valores pares es de "+valorPar
    }
        let resultado=valores();
        document.write(resultado)