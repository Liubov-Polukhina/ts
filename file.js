// // Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();

//array de chistes
const reportAcudits = [];

let noEsLaDeChuckNorris = true;
// // Esta es la función que se ejecutará al finalizar la llamada
xhttp.onreadystatechange = function() {
//   // Si nada da error
if (this.readyState == 4 && this.status == 200) {
    let chiste=""
//     // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
    if(noEsLaDeChuckNorris){
        chiste = JSON.parse(this.responseText).joke;
    }else{
        chiste = JSON.parse(this.responseText).value;
    }
    
    console.log(chiste);
    document.getElementById('text').innerHTML=chiste;
    reportAcudits.push({

        joke: chiste,
      
        score: "no ha votado",
      
        date: new Date().toISOString()
    });
      
   
    const demoClasses = document.querySelectorAll(".bb1, .bb2, .bb3");
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
    if(Math.random()>0.5){
        xhttp.open("GET", "https://icanhazdadjoke.com/", true);
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.send(null);
        noEsLaDeChuckNorris = true;
    }else{
        xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
        xhttp.send(null);
        noEsLaDeChuckNorris = false;
    }
        
};


function evaluacion(puntuacion){
    reportAcudits[reportAcudits.length-1].score=puntuacion;
    console.log(reportAcudits);
}

var xhttpWeather = new XMLHttpRequest();
xhttpWeather.onreadystatechange = function() {
    //   // Si nada da error
    if (this.readyState == 4 && this.status == 200) {
        let objeto = JSON.parse(this.responseText)
        let weathercode=objeto.daily.weathercode[0];
        let temperatura=objeto.daily.temperature_2m_max[0];
        console.log(temperatura);
        document.getElementById('temperatura').innerHTML=temperatura;
       
            if(weathercode <=3){
                let pic = document.getElementById('tiempo');
                pic.innerHTML = "<img src = '/f/icons8-weather-48.png'>";
            }
            else if (weathercode == 45 || weathercode == 48) {
                let pic = document.getElementById('tiempo');
                pic.innerHTML = "<img src = '/f/icons8-fog-32.png'>";
            }
            else {
                let pic = document.getElementById('tiempo');
                pic.innerHTML = "<img src = '/f/icons8-rainy-weather-40.png'>";
            }
                
        }
    }
xhttpWeather.open("GET", "https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.16&daily=weathercode,temperature_2m_max&timezone=Europe%2FBerlin", true);
xhttpWeather.send(null);