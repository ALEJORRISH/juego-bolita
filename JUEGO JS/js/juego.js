let posicion= Math.floor(Math.random() * 3);
function encuentre(num){
    alert(posicion);
    if(posicion==num){
        if(num==0){
            document.getElementById("b0").src="img/bolita.png";
        }
        else{
            if(num==1){
                document.getElementById("b1").src="img/bolita.png";
            }
            else{
                document.getElementById("b2").src="img/bolita.png";
            }
        }
    }
    else{
        alert("Intentelo de nuevo");
    }
}