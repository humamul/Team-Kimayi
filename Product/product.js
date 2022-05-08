var product=JSON.parse(localStorage.getItem("product"));
console.log(product)
var image=document.createElement("img");
image.src=product.img_url;
image.setAttribute("class","jhakaas")
 
document.querySelector("#img1").append(image);
var image1=document.createElement("img");
image1.src=product.img_url;
image1.setAttribute("class","jhakaas")
 
document.querySelector("#smlimage>div:nth-child(1)").append(image1);
var image2=document.createElement("img");
image2.src=product.simg2;
image2.setAttribute("class","jhakaas")
 
document.querySelector("#smlimage>div:nth-child(2)").append(image2);
var image3=document.createElement("img");
image3.src=product.simg3;
image3.setAttribute("class","jhakaas")
 
document.querySelector("#smlimage>div:nth-child(3)").append(image3);
var image4=document.createElement("img");
image4.src=product.simg4;
image4.setAttribute("class","jhakaas")
 
document.querySelector("#smlimage>div:nth-child(4)").append(image4);
var h1=document.querySelector("h1");
h1.innerText=product.name;
var p1=document.querySelector("#det");
p1.innerText=product.details;
var p2=document.querySelector("#ori");
p2.innerText=product.origin;
var h2=document.querySelector("#h2");
h2.innerText="₹"+product.price;
var h5=document.querySelector("#h5");
h5.innerText=product.pack;
var cirimg=document.createElement("img");
cirimg.src=product.simg3;
cirimg.setAttribute("id","cirim")
document.querySelector("#cirimg").append(cirimg);
document.querySelector("#bigprice").innerText="₹"+product.price;
document.querySelector("#subins").innerText=product.ins;

document.querySelector("#smlimage>div:nth-child(1)").addEventListener("click",fun1)
function fun1(){
    
       image.src=product.img_url;
       document.querySelector("#img1").append(image);
}
document.querySelector("#smlimage>div:nth-child(2)").addEventListener("click",fun2)
function fun2(){
         image.src=product.simg2;
       document.querySelector("#img1").append(image);
}
document.querySelector("#smlimage>div:nth-child(3)").addEventListener("click",fun3)
function fun3(){
       image.src=product.simg3;
       document.querySelector("#img1").append(image);
}
document.querySelector("#smlimage>div:nth-child(4)").addEventListener("click",fun4)
function fun4(){
       image.src=product.simg4;
       document.querySelector("#img1").append(image);
}
// add to card//
document.querySelector("#quantity>div:nth-child(3)").addEventListener("click",addFun)
document.querySelector("#quantity>div:nth-child(1)").addEventListener("click",subFun)
var q = 1;
function addFun(){
    document.querySelector("#quantity>div:nth-child(2)").innerText = q
    q++
}

function subFun(){
    document.querySelector("#quantity>div:nth-child(2)").innerText = q
    q--
     
}
var x = document.querySelector("#quantity>div:nth-child(2)").innerText;


//pass 
var cartArr=JSON.parse(localStorage.getItem("cart"))||[];
var btn=document.querySelector("#cartBtn");
btn.addEventListener("click",btnfun)
function btnfun()
{     
      console.log(q-1)
      cartArr.push(product)
      
      localStorage.setItem("cart",JSON.stringify(cartArr))
      alert("Added to Cart")
    
      
}


// humam edit
function showFun(){
    if(showNav.value == "ALL FRUITS"){
        window.location = "/Team-Kimayi/Product/fruits.html";
    }
    if(showNav.value == "FRUIT COMBOS"){
        window.location = "/Team-Kimayi/Product/fruits.html";
    }
    if(showNav.value == "GIFTS BY KIMAYE"){
        window.location = "/Team-Kimayi/Product/fruits.html";
    }
    if(showNav.value == "GRAPE"){
        window.location = "/Team-Kimayi/Product/fruits.html";
    }
    if(showNav.value == "RETURN & REPLACE"){
        window.location = "https://kimaye.com/a/returns";
    }
    if(showNav.value == "COMMUNITY BUYING"){
        window.location = "https://kimaye.com/pages/community-buying";
    }
}
function learnfun(){
console.log(learnNav.value)
    if(learnNav.value == "OUR STORY")
    window.location = "/Team-Kimayi/pages/ourstory.html"
    if(learnNav.value == "WHY KIMAYE")
    window.location = "/Team-Kimayi/pages/why kiyame.html"
    if(learnNav.value == "TRACEABILITY")
    window.location = "https://kimaye.com/pages/traceability"
    if(learnNav.value == "BEYOND FRUITS")
    window.location = "https://kimaye.com/pages/beyond-fruits"
   
}
function allFruits(){
    window.location = '/Team-Kimayi/Product/fruits.html'
}
function freshCuts(){
    window.location = '/Team-Kimayi/Product/fruits.html'

}
function fruitCombos(){
    window.location = '/Team-Kimayi/Product/fruits.html'
}
function gifts(){
    window.location= '/Team-Kimayi/Product/fruits.html'
}
// nav end