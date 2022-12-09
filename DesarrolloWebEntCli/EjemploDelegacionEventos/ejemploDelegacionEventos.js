var d=document;

d.addEventListener("click", e=>{
    if (e.target.matches("#vermaszuheros")) {
        console.log(d.querySelector("#pzuheros").hidden=false);
        d.querySelector("#vermaszuheros").hidden=true;
    }

    if (e.target.matches("#vermenoszuheros")) {
        console.log(d.querySelector("#pzuheros").hidden=true);
        d.querySelector("#vermenoszuheros").hidden=false;
    }

    if (e.target.matches("#vermascabra")) {
        console.log(d.querySelector("#pcabra").hidden=false);
        d.querySelector("#vermascabra").hidden=true;
    }

    if (e.target.matches("#vermenoscabra")) {
        console.log(d.querySelector("#pcabra").hidden=true);
        d.querySelector("#vermenoscabra").hidden=false;
    }

    if (e.target.matches("#vermaslucena")) {
        console.log(d.querySelector("#plucena").hidden=false);
        d.querySelector("#vermaslucena").hidden=true;
    }

    if (e.target.matches("#vermenoslucena")) {
        console.log(d.querySelector("#plucena").hidden=true);
        d.querySelector("#vermenoslucena").hidden=false;
    }
})

d.addEventListener("mouseover",e=>{
    /*switch(e.target.id){
        case 'imagen${1}':
            console.log("Estoy en la imagen de zuheros");
            break;

        case 'imagen${2}':
            console.log("Estoy en la imagen de cabra");
            break;

        case 'imagen${3}':
        console.log("Estoy en la imagen de lucena");
        break;
    }*/
    e.target.style.width="400px";
    e.target.style.height="400px";
    
})

d.addEventListener("mousemove",e=>{
    console.log(e.clientX,e.clientY);
})