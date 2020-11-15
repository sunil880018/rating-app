let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");
let total = document.getElementById("total");

let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let bar4 = document.getElementById("bar4");
let bar5 = document.getElementById("bar5");


let barPercent1 = document.getElementById("bar-percent1");
let barPercent2 = document.getElementById("bar-percent2");
let barPercent3 = document.getElementById("bar-percent3");
let barPercent4 = document.getElementById("bar-percent4");
let barPercent5 = document.getElementById("bar-percent5");

let total_star = 0;

let check = [false,false,false,false,false,false];

let total_customer = document.getElementById("total_customer");

star1.addEventListener("click",function(){
    if(check[1] == false){
        star1.style.color = "#fccc4d";
        check[1] = true;
        total_star++;
    }
    else{
        star1.style.color = "#bcbccc";
        check[1] = false;
        total_star--;
    }
    total.innerHTML = total_star;
});
star2.addEventListener("click",function(){
    if(check[2] == false){
        star2.style.color = "#fccc4d";
        check[2] = true;
        total_star++;
    }
    else{
        star2.style.color = "#bcbccc";
        check[2] = false;
        total_star--;
    }
    total.innerHTML = total_star;
});
star3.addEventListener("click",function(){
    if(check[3] == false){
        star3.style.color = "#fccc4d";
        check[3] = true;
        total_star++;
    }
    else{
        star3.style.color = "#bcbccc";
        check[3] = false;
        total_star--;
    }
    total.innerHTML = total_star;
});
star4.addEventListener("click",function(){
    if(check[4] == false){
        star4.style.color = "#fccc4d";
        check[4] = true;
        total_star++;
    }
    else{
        star4.style.color = "#bcbccc";
        check[4] = false;
        total_star--;
    }
    total.innerHTML = total_star;
});
star5.addEventListener("click",function(){
    if(check[5] == false){
        star5.style.color = "#fccc4d";
        check[5] = true;
        total_star++;
    }
    else{
        star5.style.color = "#bcbccc";
        check[5] = false;
        total_star--
    }
    total.innerHTML = total_star;
});

let btn = document.getElementById("btn");
let customer_count = 0;

var bar_increament1 = 95;
var bar_increament2 = 90;
var bar_increament3 = 50;
var bar_increament4 = 40;
var bar_increament5 = 30;


btn.addEventListener("click",function(){
    total.innerHTML = "0";
    if(total_star == 0) return;
    star1.style.color = "#bcbccc";
    star2.style.color = "#bcbccc";
    star3.style.color = "#bcbccc";
    star4.style.color = "#bcbccc";
    star5.style.color = "#bcbccc";

    customer_count++;
    total_customer.innerHTML = customer_count;
    
    var i ;
    
    for(i=0;i<check.length;i++){
        check[i] = false;
    }
    
    if(total_star == 5 && parseInt(barPercent1.innerHTML)+5 <=100){
        bar1.style.width = bar_increament1.toString()+"px";
        bar_increament1 = parseInt(bar_increament1) + 10;
        barPercent1.innerHTML = parseInt(barPercent1.innerHTML) + 5;
    }
    else if(total_star == 4 && parseInt(barPercent2.innerHTML)+5 <=100){
        bar2.style.width = bar_increament2.toString()+"px";
        bar_increament2 = parseInt(bar_increament2) + 10;
        barPercent2.innerHTML = parseInt(barPercent2.innerHTML) + 5;
    }
    else if(total_star == 3 && parseInt(barPercent3.innerHTML)+5 <=100){
        bar3.style.width = bar_increament3.toString()+"px";
        bar_increament3 = parseInt(bar_increament3) + 7;
        barPercent3.innerHTML = parseInt(barPercent3.innerHTML) + 5;
    }
    else if(total_star == 2 && parseInt(barPercent4.innerHTML)+5 <=100){
        bar4.style.width = bar_increament4.toString()+"px";
        bar_increament4 = parseInt(bar_increament4) + 7;
        barPercent4.innerHTML = parseInt(barPercent4.innerHTML) + 5;
    }
    else if(total_star == 1 && parseInt(barPercent5.innerHTML)+5 <=100){
        bar5.style.width = bar_increament5.toString()+"px";
        bar_increament5 = parseInt(bar_increament5) + 7;
        barPercent5.innerHTML = parseInt(barPercent5.innerHTML) + 5;
    }

    total_star = 0;
});