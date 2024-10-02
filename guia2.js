window.onload = function (){
    let canvas =
    document.getElementById("theLost")
    if(canvas && canvas.getcontext){
        let ctx = canvas.getcontext("2d");
        if(ctx){
            //ancho de linea
            ctx.lineWhith = 15;
            ctx.strokeStyle = "yelow"; //borde amarillo


            //trazado
            ctx.begingpath();
            ctx.lineCap="round;" // punta de la linea redonda
            ctx.moveTo(50,50);//inicio del punto
            ctx.lineTo(350,50);// final del punto
            ctx.stroke();
        }
    }else{
        alert("su navegador no soporta canvas");
    }
}
