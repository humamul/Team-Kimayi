var product=JSON.parse(localStorage.getItem("product"));
console.log(product)
var image=document.createElement("img");
image.src=product.img_url;
document.querySelector("#img1").append(image);
var image1=document.createElement("img");
image1.src=product.img_url;
document.querySelector("#smlimage>div:nth-child(1)").append(image1);
var image2=document.createElement("img");
image2.src=product.simg2;
document.querySelector("#smlimage>div:nth-child(2)").append(image2);
var image3=document.createElement("img");
image3.src=product.simg3;
document.querySelector("#smlimage>div:nth-child(3)").append(image3);
var image4=document.createElement("img");
image4.src=product.simg4;
document.querySelector("#smlimage>div:nth-child(4)").append(image4);
var h1=document.querySelector("h1");
h1.innerText=product.name;
var p1=document.querySelector("#det");
p1.innerText=product.details;
var p2=document.querySelector("#ori");
p2.innerText=product.origin;
var h2=document.querySelector("#h2");
h2.innerText=product.price;
var h5=document.querySelector("#h5");
h5.innerText=product.pack;
var cirimg=document.createElement("img");
cirimg.src=product.simg3;
cirimg.setAttribute("id","cirim")
document.querySelector("#cirimg").append(cirimg);
document.querySelector("#bigprice").innerText=product.price;
document.querySelector("#subins").innerText=product.ins;
var smallimg=document.querySelectorAll("#smlimage>div");
for(var i=0;i<smallimg.length;i++)
{
    smallimg[i].addEventListener("click",myfun2)
}
function myfun2()
{
    
    if(i==1)
    {
        image.src=product.image1;
        document.querySelector("#img1").append(image1);
    }
    else if(i==2)
    {
        image.src=product.image2;
        document.querySelector("#img1").append(image);
    }
    else if(i==3)
    {
        document.querySelector("#img1").append(image3);
    }else if(i==4)
    {
        document.querySelector("#img1").append(image4);
    }
        
}