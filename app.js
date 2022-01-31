var totalDamage = 0;

document.body.querySelector(".opening").innerHTML="Welcome to the End Game... Defeat Thanos by choosing different super heroes and accumulating damage!";

function callHero (catchPhrase, damage) {
    var hero = document.createElement("div");
    hero.innerHTML = catchPhrase;
    hero.addEventListener("click", function (){
        increaseDamage(damage);
    })
    document.body.querySelector(".catchPhrase").appendChild(hero);
}

function increaseDamage (damage) {
    totalDamage = totalDamage + damage;
    document.body.querySelector(".totalDamage").innerHTML=totalDamage;
}

function resetPage () {
    totalDamage = 0;
    document.body.querySelector(".catchPhrase").innerHTML="";
    document.body.querySelector(".totalDamage").innerHTML=totalDamage;
}

document.body.querySelector(".ironMan").addEventListener("click",function (){
    document.body.querySelector(".catchPhrase").innerHTML="";
    callHero("I am Iron Man", 40);
})

document.body.querySelector(".captainAmerica").addEventListener("click",function (){
    document.body.querySelector(".catchPhrase").innerHTML="";
    callHero("Avengers Assemble!", 30);
})

document.body.querySelector(".hulk").addEventListener("click",function (){
    document.body.querySelector(".catchPhrase").innerHTML="";
    callHero("Hulk Smash!", 50);
})

document.body.querySelector(".thor").addEventListener("click",function (){
    document.body.querySelector(".catchPhrase").innerHTML="";
    callHero("I'm still worthy!", 70);
})

document.body.querySelector(".reset").addEventListener("click", function (){
    document.body.querySelector(".catchPhrase").innerHTML="";
    resetPage();
})