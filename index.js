Pause =  document.getElementById("pause");
Start =  document.getElementById("start");

Pause.addEventListener("click", function () {
 i = "PAU";
 e = "SE";
        var Chrono = document.getElementById("ouais").childNodes; // Prend l'élément enfant du bloc parent soit class text
        Chrono[4].innerHTML = ""+e+"";
        
        var Chrono = document.getElementById("ouais").childNodes; // Prend l'élément enfant du bloc parent soit class text
        Chrono[0].innerHTML = ""+i+"";

    });



i = 25;
var e = 60;

Start.addEventListener("click", function () {
    setTimeout( function chronoSec(){

if (e == 0) {
    e = 60;
}
         e--;
        setTimeout(chronoSec,1000);  
        var Chrono = document.getElementById("ouais").childNodes; // Prend l'élément enfant du bloc parent soit class text
        Chrono[4].innerHTML = ""+e+"";
     });
    
    setTimeout( function chronoMin(){
       if (i != 0) {
        i--;
       }
       else if (i == 0) {
           i = "Pause clope";
       }
        setTimeout(chronoMin,60000);
        var Chrono = document.getElementById("ouais").childNodes; // Prend l'élément enfant du bloc parent soit class text
        Chrono[0].innerHTML = ""+i+"";
        console.log(i);
    });
});




ntm2 =  document.getElementById("pause");
ntm2.addEventListener("click", function () {
 i = "PAU";
 e = "SE";
        var Chrono = document.getElementById("ouais").childNodes; // Prend l'élément enfant du bloc parent soit class text
        Chrono[4].innerHTML = ""+e+"";

        var Chrono = document.getElementById("ouais").childNodes; // Prend l'élément enfant du bloc parent soit class text
        Chrono[0].innerHTML = ""+i+"";

    });



