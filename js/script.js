/*
selector modo dia/noche
*/

let circulo = document.querySelector("#circle");
let vCocina = document.getElementById("cocina");
let vAlquimia = document.getElementById("alquimia");
let vlistados = document.querySelectorAll(".listado");


circulo.addEventListener("click", () => {    
    if (circulo.classList.contains("circle")) {
        circulo.classList.remove("circle");
        circulo.classList.add("circle-active");
        vCocina.classList.remove("cocina");
        vCocina.classList.add("cocinadark-mode");
        vAlquimia.classList.remove("alquimia");
        vAlquimia.classList.add("alquimiadark-mode");
        for(i = 0;i<vlistados.length;i++){
            vlistados[i].classList.add("listadodark-mode");
        }
    } else {
        circulo.classList.add("circle");
        circulo.classList.remove("circle-active");
        vCocina.classList.remove("cocinadark-mode");
        vCocina.classList.add("cocina");
        vAlquimia.classList.add("alquimia");
        vAlquimia.classList.remove("alquimiadark-mode");
        for(i = 0;i<vlistados.length;i++){
            vlistados[i].classList.remove("listadodark-mode");
        }
    }
});


/*
CARGAR RECETAS COCINA
*/

let vPescadoVapor = document.getElementById("pescadoVapor");
let vPanRon = document.getElementById("panRon");
let vCostillaMiel = document.getElementById("costillaMiel");
let vBocadilloVerduras = document.getElementById("bocadilloVerduras");
let vTartaLaor = document.getElementById("tartaLaor");
let vSerenstum = document.getElementById("serenstum");
let vBocadilloCaviar = document.getElementById("bocadilloCaviar");
let vRecetaSelecionada = document.getElementById("recetaSelecionada");

vPescadoVapor.addEventListener("click", () => {    
    vRecetaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Filete de pescado al vapor (N.98)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Aumenta el poder de ataque físico en (Poder de ataque fisico actual + 10.000) x 15% + 10.000 durante 900 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas activación</li>
                        <li>400 Gavila flores bivalvas</li>
                        <li>200 Madera en bruto de arbol de kandi</li>
                    </ul>
                </div>
            </div>`
});


vPanRon.addEventListener("click", () => {    
    vRecetaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Pan aromatizado con ron pigmeo (N.98)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Aumenta el poder de ataque mágico en (Poder de ataque mágico actual + 10.000) x 15% + 10.000 durante 900 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas activación</li>
                        <li>400 Gavila flores bivalvas</li>
                        <li>200 Madera en bruto de arbol de kandi</li>
                    </ul>
                </div>
            </div>`
});


vCostillaMiel.addEventListener("click", () => {    
    vRecetaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Costilla con miel (N.98)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Aumenta el daño físico en (Daño fisico actual + 400) x 12% + 400 durante 900 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas activación</li>
                        <li>400 Gavila flores bivalvas</li>
                        <li>200 Madera en bruto de arbol de kandi</li>
                    </ul>
                </div>
            </div>`
});


vBocadilloVerduras.addEventListener("click", () => {    
    vRecetaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Bocadillo de verduras (N.98)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Aumenta el daño mágico en (Daño mágico actual + 400) x 12% + 400 durante 900 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas activación</li>
                        <li>400 Gavila flores bivalvas</li>
                        <li>200 Madera en bruto de arbol de kandi</li>
                    </ul>
                </div>
            </div>`
});

vTartaLaor.addEventListener("click", () => {    
    vRecetaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Tarta del bosque de laor (N.50)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Inmune al daño físico durante 6.0 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas activación</li>
                        <li>200 Madera escuadra demoníaca de Tarslin (es en azul, 400 en verde)</li>
                        <li>600 Savia de palma del pecador (es en azul, 2400 en verde)</li>
                        <li>100 Fardo de hongo de paja</li>
                        <li>100 Carne animal singular</li>
                        <li>100 Harina dorada</li>
                    </ul>
                </div>
            </div>`
});


vSerenstum.addEventListener("click", () => {    
    vRecetaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Serenstum (N.54)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Inmune al daño máfico durante 6.0 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas activación</li>
                        <li>100 Troncos de guarida de dragón (es en azul, 400 en verde)</li>
                        <li>300 Savia de madera de dragón (es en azul, 1200 en verde)</li>
                        <li>100 Fardo de juncia de espejo</li>
                    </ul>
                </div>
            </div>`
});


vBocadilloCaviar.addEventListener("click", () => {    
    vRecetaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Bocadillo de caviar (N.20)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Inmune al daño máfico durante 6.0 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas activación</li>
                        <li>100 Troncos de roble (es en azul, 400 en verde)</li>
                        <li>200 Savia de artemisa (es en azul, 800 en verde)</li>
                        <li>100 Fardo de hierba de bisonte</li>
                        <li>100 Trucha azul</li>
                        <li>100 Harina</li>
                    </ul>
                </div>
            </div>`
});

/*
COPIAR MACRO
*/



/*
CARGAR RECETAS ALQUIMIA
*/
let vestimulanteFuerte = document.getElementById("estimulanteFuerte")
let vpolvoTranquilidad = document.getElementById("polvoTranquilidad")
let vtoqueUnicornio = document.getElementById("toqueUnicornio")
let vpocionHeroica = document.getElementById("pocionHeroica")
let vpocionExtincion = document.getElementById("pocionExtincion")
let vpocionApagado = document.getElementById("pocionApagado")
let valquimiaSelecionada = document.getElementById("alquimiaSelecionada")

vestimulanteFuerte.addEventListener("click", () => {    
    valquimiaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Estimulante fuerte (N.17)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Aumenta la velocidad de ataque 25% durante 30 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas combinación</li>
                        <li>100 Trozo de hierro (en azul, es 400 en verde)</li>
                        <li>300 Savia de vernonia (en azul, es 1200 en verde)</li>
                        <li>100 Fardo de hierba de bisonte</li>
                        <li>100 Frasquito</li>
                    </ul>
                </div>
            </div>`
});

vpolvoTranquilidad.addEventListener("click", () => {    
    valquimiaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Polvo de la tranquilidad (N.25)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Disminuye el agro 25% durante 30 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas combinación</li>
                        <li>200 Pepita de cobre (en azul, es 800 en verde)</li>
                        <li>500 Savia de artemisa (en azul, es 2000 en verde)</li>
                        <li>100 Mantequilla de nuez de Foloin</li>
                        <li>100 Botella de alquimia</li>
                    </ul>
                </div>
            </div>`
});

vtoqueUnicornio.addEventListener("click", () => {    
    valquimiaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Toque del unicornio (N.31)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Aumenta los PV 20% durante 180 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas combinación</li>
                        <li>200 Pepita de cristal opaco (en azul, es 800 en verde)</li>
                        <li>500 Savia de orquidea del crepúsculo (en azul, es 2000 en verde)</li>
                        <li>100 Fardo de cardo verde</li>
                        <li>100 Botella mágica</li>
                    </ul>
                </div>
            </div>`
});

vpocionHeroica.addEventListener("click", () => {    
    valquimiaSelecionada.innerHTML = ` <div class="receta">
                <div class="titulo">
                    Poción heroica (N.47)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Aumenta todos los atributos 20% durante 600 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas combinación</li>
                        <li>100 Trozo de plata lunar (en azul, es 400 en verde)</li>
                        <li>300 Savia de palma del pecador (en azul, es 1200 en verde)</li>
                        <li>100 Fardo de hongo de paja</li>
                        <li>100 Huevo filosofal</li>
                    </ul>
                </div>
            </div>`
});

vpocionExtincion.addEventListener("click", () => {    
    valquimiaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Poción de extinción (N.60)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Aumenta la tasa de golpes físicos criticos durante 20 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas combinación</li>
                        <li>100 Polvo de obsidiana rúnica</li>
                        <li>300 Fardo de estramonio</li>
                    </ul>
                </div>
            </div>
`
});

vpocionApagado.addEventListener("click", () => {    
    valquimiaSelecionada.innerHTML = `<div class="receta">
                <div class="titulo">
                    Poción de apagado (N.60)
                </div>
                
                <div class="materiales">
                    <p><i>Descripción: Aumenta la tasa de golpes mágicos criticos durante 20 segundos.</i></p>
                    <p>Materiales:</p>
                    <ul>                        
                        <li>100 Runas combinación</li>
                        <li>100 Polvo de obsidiana rúnica</li>
                        <li>300 Fardo de estramonio</li>
                    </ul>
                </div>
            </div>`
});