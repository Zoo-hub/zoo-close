var count = 1;
setInterval(function autoslide(){
    document.getElementById('radio' + count).checked = true;
    count++;
    if(screen.width <= 1008){
        var max = 3;
    } else {
        var max = 5;
    }
    if(count > max){
        count = 1;
    }
}, 4000);

var img1 = document.getElementById("galleries1");
var img2 = document.getElementById("galleries2");
var img3 = document.getElementById("galleries3");
var img4 = document.getElementById("galleries4");
var img5 = document.getElementById("galleries5");
var exit1 = document.getElementById("exit-popup1");
var exit2 = document.getElementById("exit-popup2");
var exit3 = document.getElementById("exit-popup3");
var exit4 = document.getElementById("exit-popup4");
var bgpopup = document.getElementById("popup-image")


function imagepopup(x) {
    x.addEventListener("click", function() {
        bgpopup.style.display = "block";
        document.getElementById("selector").setAttribute("src", x.src);
    })
}

imagepopup(img1);
imagepopup(img2);
imagepopup(img3);
imagepopup(img4);
imagepopup(img5);

function exitpopup1() {
    document.getElementById("exit-popup1").addEventListener("click", function() {
    bgpopup.style.display = "none";
    })
}

function exitpopup2() {
    document.getElementById("exit-popup2").addEventListener("click", function() {
    bgpopup.style.display = "none";
    })
}

function exitpopup3() {
    document.getElementById("exit-popup3").addEventListener("click", function() {
    bgpopup.style.display = "none";
    })
}
function exitpopup4() {
    document.getElementById("exit-popup4").addEventListener("click", function() {
    bgpopup.style.display = "none";
    })
}

exitpopup1();
exitpopup2();
exitpopup3();
exitpopup4();

var mini = document.getElementById("mini-marathon");
var half = document.getElementById("half-marathon");
var full = document.getElementById("marathon");

mini.addEventListener("mouseover", function (){
    mini.style.animation = "none"
    mini.innerHTML = "MINI-MARATHON"
    mini.style.animation = "blur-in 0.7s"
});

mini.addEventListener("mouseout", function (){
    mini.style.animation = "none"
    mini.innerHTML = "10 KM";
    mini.style.animation = "blur-in2 0.7s"
});

half.addEventListener("mouseover", function (){
    half.style.animation = "none"
    half.innerHTML = "HALF-MARATHON"
    half.style.animation = "blur-in 0.7s"
});

half.addEventListener("mouseout", function (){
    half.style.animation = "none"
    half.innerHTML = "21 KM";
    half.style.animation = "blur-in2 0.7s"
});

full.addEventListener("mouseover", function (){
    full.style.animation = "none"
    full.innerHTML = "FULL-MARATHON"
    full.style.animation = "blur-in 0.7s"
});

full.addEventListener("mouseout", function (){
    full.style.animation = "none"
    full.innerHTML = "42 KM";
    full.style.animation = "blur-in2 0.7s"
});

var nav = document.getElementById("nav");
var menu = document.getElementById("menu");
var close = document.getElementById("close-menu");

menu.addEventListener("click",function() {
    nav.style.display = "block";
})

close.addEventListener("click",function() {
    nav.style.display = "none";
})
