
window.onload = function() {
    
    var container = document.createElement('class');
    var wrap = document.getElementById('wrapper3');
    wrap.appendChild(container);
    container.style.width= "500px";
    container.style.height= "500px";
    container.style.marginRight= "0px";
    container.style.float= "left";

    for(var i = 1; i < 5; i++) {
        var box = document.createElement('article');
        box.style.width= "250px";
        box.style.height= "250px";
        box.style.float= "left";
        box.style.position= "relative";
        if (i == 1) box.style.backgroundColor= "#000000";
        if (i == 2) box.style.backgroundColor= "#5e1715";
        if (i == 3) box.style.backgroundColor= "#7e1e17";
        if (i == 4) box.style.backgroundColor= "#370d0a";
        console.log(box);
        container.appendChild(box);
    }  
}


function myFunction() {
    var wrap = document.getElementById('wrapper3');
    var container2 = document.createElement('class');
    wrap.appendChild(container2);
    container2.style.width= "1000px";
    container2.style.height= "500px";
    container2.style.display= "flex";
    container2.style.flexWrap= "wrap";
    container2.style.backgroundColor= "#9d261d";

    for(var i = 1; i < 8; i++) {
        var box = document.createElement('div');
        box.style.width= "250px";
        box.style.height= "250px";
        if (i == 1) box.style.backgroundColor= "#1f0806";
        if (i == 2) box.style.backgroundColor= "#5e1711";
        if (i == 3) box.style.backgroundColor= "#0f0403";
        if (i == 4) box.style.backgroundColor= "#8e221a";

        if (i == 5) box.style.backgroundColor= "#5e1711";
        if (i == 6) box.style.backgroundColor= "#0f0403";
        if (i == 7) box.style.backgroundColor= "#1f0806";
        if (i == 8) box.style.backgroundColor= "#9d261d";
        
        console.log(box);
        container2.appendChild(box);
    }  
};