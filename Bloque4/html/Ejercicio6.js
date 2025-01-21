
function presionar(){
    let h=screen.availHeight/2
    let w=screen.availWidth
    let ventana=open('', '', 'status=yes,width='+w+',height='+h+',menubar=yes')
    ventana.document.write('height :' + screen.height + '<br>');
    ventana.document.write('width :' + screen.width + '<br>');
  
}  

