Window.onload = function(){
let canvas = 
document.getElementById("theLostCanvas");
if(canvas && canvas.getContext){
    let ctx = canvas.getContext("2d");
    if(ctx){
        //definimos los colores
        // colores
        ctx.stroketyle = "#ff0000"; //pinta la parte de afuera
        ctx.fillStyle = "yellow"; // colorea la parte interna
        ctx.lineWidth = 5; // grosor de la linea
        //x,y,w,h
        ctx.filRect(50,50,100,100);//crea una linea
        ctx.strokeRect(50,50,100,100);//sombra del cuadro

        "rgb(0,42,255)";
        ctx.fillStyle = "rgb"
    }



    }else{
    alert("su navegador soporta canvas");
"su navegador soporta canvas"
    alert
}
}
