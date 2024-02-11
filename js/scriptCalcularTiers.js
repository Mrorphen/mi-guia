let botonCalcular = document.querySelector("#botonCalcularTiers");
let resultado = document.querySelector("#resultado");
let menosIni = document.querySelector("#menosInicial");
let masIni = document.querySelector("#masInicial");
let menosFin = document.querySelector("#menosFinal");
let masFin = document.querySelector("#masFinal");
let mensaje;


botonCalcular.addEventListener("click",function (e){
    e.preventDefault();
    let tierEmpieza = document.getElementById("tiersInicial").value;
    let tierTermina = document.getElementById("tiersFinal").value;

    let itemsPara7 = 3;
    let cargasPara7 = 4;
    
    let tierInicial=parseInt(tierEmpieza);
    let tierFinal=parseInt(tierTermina);
    let cargas=0;
    let items=0;
    
    if (tierInicial>=tierFinal)
    {
        mensaje = ("Revisa datos");

    } 
    else if (tierInicial==6 && tierFinal==7)
    {
        mensaje = (`Items: ${itemsPara7}<br/> Cargas: ${cargasPara7}`);        
    }
    else
    {
        cargas=cargasPara7;
        items=itemsPara7;
        
        for(let i=tierInicial;i<tierFinal-1;i++)
        {
            cargas=(cargas*3)+1;
            items=items*3;
        }
        
        mensaje = (`Items: ${items}<br/>Cargas: ${cargas}`);
        
    }
    
    resultado.innerHTML = mensaje;

},false);


menosIni.addEventListener("click", function(){
    let tierEmpieza = document.getElementById("tiersInicial").value;    
    let tierE = parseInt(tierEmpieza);

    if(tierE>=7){
        document.getElementById("tiersInicial").value=--tierE;
    }
    
},false);


masIni.addEventListener("click", function(){
    let tierEmpieza = document.getElementById("tiersInicial").value;    
    let tierE = parseInt(tierEmpieza);

    document.getElementById("tiersInicial").value=++tierE;
    

},false);


menosFin.addEventListener("click", function(){
    let tierEmpieza = document.getElementById("tiersFinal").value;    
    let tierE = parseInt(tierEmpieza);

    if(tierE>=8){
        document.getElementById("tiersFinal").value=--tierE;
    }
},false);


masFin.addEventListener("click", function(){
    let tierEmpieza = document.getElementById("tiersFinal").value;    
    let tierE = parseInt(tierEmpieza);

    
    document.getElementById("tiersFinal").value=++tierE;
    
},false);
