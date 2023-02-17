// // Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();
//array de chistes
const reportAcudits = [];
// // Esta es la función que se ejecutará al finalizar la llamada
xhttp.onreadystatechange = function() {
//   // Si nada da error
if (this.readyState == 4 && this.status == 200) {
//     // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
    let chiste = JSON.parse(this.responseText).joke;
    console.log(chiste);
    document.getElementById('text').innerHTML=chiste;
    reportAcudits.push({

        joke: chiste,
      
        score: null,
      
        date: new Date().toISOString()
    });
      
   
    const demoClasses = document.querySelectorAll('.bb1');
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
        element.style = 'visibility:visible';
    }
    )

}
};

// // Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
function recibir (){
    // return xhttp.send(null);
    xhttp.open("GET", "https://icanhazdadjoke.com/", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send(null);
};


function evaluacion(puntuacion){
    reportAcudits[reportAcudits.length-1].score=puntuacion;
    console.log(reportAcudits);
}