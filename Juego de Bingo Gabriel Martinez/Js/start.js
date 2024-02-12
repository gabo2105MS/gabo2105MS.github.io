var nuevoNumero=document.getElementById("nuevo-numero");
var divNuemero=document.getElementById("div-numero");

document.addEventListener("DOMContentLoaded", cearCarton)

//local storage
function cearCarton(){
    const columnas=localStorage.getItem("Columnas");
    const play=localStorage.getItem("players");
    console.log(columnas)
    console.log(play)
    const col=JSON.parse(columnas);
    var players=JSON.parse(play);
    console.log(col)
    console.log(players)

    //llamando a la funcion para crear cuatro matices
    const matrizSinRepetir = llenarMatriz(col);
    dibujarMatrizHTML(matrizSinRepetir);

    const matrizSinRepetir2 = llenarMatriz(col);
    dibujarMatrizHTML(matrizSinRepetir2);

    const matrizSinRepetir3 = llenarMatriz(col);
    dibujarMatrizHTML(matrizSinRepetir3);

    const matrizSinRepetir4 = llenarMatriz(col);
    dibujarMatrizHTML(matrizSinRepetir4);

    console.log(matrizSinRepetir)

    

    
    
}

//funcionar para llenar las matrices
function llenarMatriz(n) {
    let matriz = [];
    let numerosDisponibles = Array.from({ length: 51 }, (_, index) => index); // Array con todos los números disponibles del 0 al 50

    for (let i = 0; i < n; i++) {
        let fila = [];

        for (let j = 0; j < n; j++) {
            const indice = Math.floor(Math.random() * numerosDisponibles.length); // Seleccionar un índice aleatorio del array de números disponibles
            const numero = numerosDisponibles.splice(indice, 1)[0]; // Quitar el número seleccionado del array y obtenerlo
            fila.push(numero);
        }

        matriz.push(fila);
        //console.log(matriz,'matriz')
    }

    return matriz;
}

//funcion para dibujar las matrices
function dibujarMatrizHTML(matriz,id) {
    const matrizContainer = document.getElementById('matriz-container');
    const tabla = document.createElement('table');

    // Iterar sobre cada fila
    for (let fila of matriz) {
        const filaHTML = document.createElement('tr');

        // Iterar sobre cada elemento de la fila
        for (let elemento of fila) {
            const celda = document.createElement('td');
            celda.textContent = elemento;
            filaHTML.appendChild(celda);
        }


        tabla.appendChild(filaHTML);
        
    }
    const br=document.createElement('br');
    const nombre =  document.createElement('p')
    nombre.textContent = "luis"

    matrizContainer.appendChild(nombre)
    matrizContainer.appendChild(tabla);
    matrizContainer.appendChild(br);
    
}


let contadorTurnos = 0;
//funcion del boton nuevo numero (evento)
nuevoNumero.addEventListener("click",()=>{
   

    if (contadorTurnos < 25) {
        limpiarHTML();
        const numeroRandom = Math.floor(Math.random() * 50) + 1;

        // Mostrar el número aleatorio en el HTML
        const h2 = document.createElement("h2");
        h2.textContent = `${numeroRandom}`;
        h2.classList.add("numeroRam");
        divNuemero.appendChild(h2);

        // Buscar y resaltar el número aleatorio en las matrices
        buscarYResaltarNumeroEnMatrices(numeroRandom);
        //tests(numeroRandom);
        

        contadorTurnos++;

        if (contadorTurnos === 25) {
            if(confirm("¡El juego ha terminado!")){
                //console.log('redireccionar');
                window.location.href='../Html/finish.html'

            }else{
                console.log('no redireccionar')

            }
           // alert("¡El juego ha terminado!");
        }
    } else {
        //alert("¡El juego ha terminado!");
        if(confirm("¡El juego ha terminado!")){
            console.log('redireccionar')
        }else{
            console.log('no redireccionar')

        }

    }
});


//funcion para que los numeros aleatorios se vayan borrando

function limpiarHTML(){
    while(divNuemero.firstChild){
        divNuemero.removeChild(divNuemero.firstChild)
    }
}

//funcion para buscra un numero en las matrices y resaltarlo si coincide con el numero aleatorio generado
function buscarYResaltarNumeroEnMatrices(numero) {
    const matrices = document.querySelectorAll('#matriz-container table');
    

    matrices.forEach((tabla, index) => {
        const celdas = tabla.querySelectorAll('td');
        celdas.forEach(celda => {
            if (parseInt(celda.textContent) === numero) {
                celda.classList.add('resaltado');
        
            }
        });
    });
}

function tests(numero){
    const matrices = document.querySelectorAll('#matriz-container table');
    console.log(matrices,'matrices en mi funcion');
    matrices.forEach(tabla=>{
        //console.log(tabla,'tablas en mi funcion');
        const celda=tabla.querySelectorAll('td');
        celda.forEach(celda=>{
            //console.log(celda,'celda en mi funcion')
            if(celda.classList.contains("resaltado")){
                //console.log(celda.textContent,"esta resaltado")
                if (esLineaHorizontalCompleta(matrices[jugador], i)) {
                     console.log('la linea horizontal completa')
                    //break; // Solo se puede obtener una línea horizontal por cartón
                }
            }
        })
    })
}







