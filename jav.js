var stop;
var czas = 0;
var zapisane = [];

function wlaczenie(){
    document.getElementById("wlacznik").style.visibility = "hidden";
    document.getElementById("wylacznik").style.visibility = "visible";
    stop = false;
    czasstart();
    
}

function wylaczenie(){
    document.getElementById("wlacznik").style.visibility = "visible";
    document.getElementById("wylacznik").style.visibility = "hidden";
    stop = true;
    
}

function czasstart(){ 
    czas+= 0.01;
    document.getElementById("timer").innerHTML = parseFloat(czas).toFixed(2);
    if(stop != true){
        setTimeout("czasstart()", 10); 
    }     
}
    

function zapiszczas(){
    if(zapisane[zapisane.length-1] == czas) return false;
    if(czas > 0.1) {
        zapisane.push(czas);
        const div = document.createElement("div");
        var wiad = "";
        if(zapisane.length < 10) wiad += "0";
        div.textContent = wiad + zapisane.length + ". " + czas.toFixed(2);
        document.body.appendChild(div);
    }

}

function reset(){
    if(confirm("Czy chcesz zresetować tablice o długości " + zapisane.length + " znaków?")){
        location.reload();
    }
}