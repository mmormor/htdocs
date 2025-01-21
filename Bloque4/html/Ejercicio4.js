function abrir(){
    ventana=open('', '', 'status=yes,width=400,height=250,menubar=yes')
    ventana.document.write('height :' + screen.height + '<br>');
    ventana.document.write('width :' + screen.width + '<br>');
}  