let all=document.getElementById("total")


let partie1=document.getElementById("part1")
let partie2=document.getElementById("part2")
let partie3=document.getElementById("part3")

let valeur1=document.getElementById("quant1")
let valeur2=document.getElementById("quant2")
let valeur3=document.getElementById("quant3")

let prix1=document.getElementById("price1")
let prix2=document.getElementById("price2")
let prix3=document.getElementById("price3")

let favoris1=document.getElementById("heart1")
let favoris2=document.getElementById("heart2")
let favoris3=document.getElementById("heart3")

let delet1=document.getElementById("remove1")
let delet2=document.getElementById("remove2")
let delet3=document.getElementById("remove3")

let croi1=document.getElementById("plus1")
let croi2=document.getElementById("plus2")
let croi3=document.getElementById("plus3")

let decroi1=document.getElementById("moin1")
let decroi2=document.getElementById("moin2")
let decroi3=document.getElementById("moin3")

function ht1(){
    if(favoris1.style.color=='red'){
        favoris1.style.color='black'
    }
    else{
        favoris1.style.color='red'
    }
}
function ht2(){
    if(favoris2.style.color=='red'){
        favoris2.style.color='black'
    }
    else{
        favoris2.style.color='red'
    }
}function ht3(){
    if(favoris3.style.color=='red'){
        favoris3.style.color='black'
    }
    else{
        favoris3.style.color='red'
    }
}
function rv1(){
    partie1.style.display='none'
    all.innerHTML=+all.innerHTML-prix1.innerHTML
}
function rv2(){
    partie2.style.display='none'
    all.innerHTML=+all.innerHTML-prix2.innerHTML
}
function rv3(){
    partie3.style.display='none'
    all.innerHTML=+all.innerHTML-prix3.innerHTML
}
function ps1(){
    valeur1.innerHTML=+valeur1.innerHTML+1
    prix1.innerHTML=+prix1.innerHTML+250
    all.innerHTML=+all.innerHTML+250
}
function ps2(){
    valeur2.innerHTML=+valeur2.innerHTML+1
    prix2.innerHTML=+prix2.innerHTML+250
    all.innerHTML=+all.innerHTML+250
}
function ps3(){
    valeur3.innerHTML=+valeur3.innerHTML+1
    prix3.innerHTML=+prix3.innerHTML+250
    all.innerHTML=+all.innerHTML+250
}
function mn1(){
    if (valeur1.innerHTML=="0"){
        prix1.innerHTML=prix1.innerHTML
        valeur1.innerHTML=valeur1.innerHTML
        all.innerHTML=+all.innerHTML
    }
    else {
        valeur1.innerHTML=+valeur1.innerHTML-1
        prix1.innerHTML=+prix1.innerHTML-250
        all.innerHTML=+all.innerHTML-250
    }
}
function mn2(){
    if (valeur2.innerHTML=="0"){
        prix2.innerHTML=prix2.innerHTML
        valeur2.innerHTML=valeur2.innerHTML
        all.innerHTML=+all.innerHTML
    }
    else {
        valeur2.innerHTML=+valeur2.innerHTML-1
        prix2.innerHTML=+prix2.innerHTML-250
        all.innerHTML=+all.innerHTML-250
    }
}
function mn3(){
    if (valeur3.innerHTML=="0"){
        prix3.innerHTML=prix3.innerHTML
        valeur3.innerHTML=valeur3.innerHTML
        all.innerHTML=+all.innerHTML
    }
    else {
        valeur3.innerHTML=+valeur3.innerHTML-1
        prix3.innerHTML=+prix3.innerHTML-250
        all.innerHTML=+all.innerHTML-250
    }
}


