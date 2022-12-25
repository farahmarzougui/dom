var deleteBtn = document.querySelectorAll(".delete")
for (let x=0 ; x<deleteBtn.length; x++){
 deleteBtn[x].addEventListener("click",function(){
 deleteBtn[x].parentElement.remove()
 totalprice()
 })
}
var plus = document.querySelectorAll(".plus-btn")
for ( let y=0 ; y<plus.length; y++){
    plus[y].addEventListener("click", function(){
    plus[y].previousElementSibling.value++
totalprice()
})
}
 /*var  minus=document.querySelectorAll(".minus-btn")
 /var quant=document.querySelectorAll(".Quant")
for (let y=0; y<minus.length; y++){
    minus[y].addEventlistenner("click",function(){
    quant[y].value--
    })
}*/
var minus=document.querySelectorAll(".minus-btn")
//console.log(minus)
var quant=document.querySelectorAll(".Quant")
//console.log(quant)
for (let f=0; f<minus.length;f++){
    minus[f].addEventListener("click",function(){
        quant[f].value--
        totalprice()
    })
}



function totalprice(){
    let quan = document.querySelectorAll(".Quant")
    var price= document.querySelectorAll(".price")
    let final = document.querySelector("#finalPrice")
    let sum = 0
    for ( let x =0 ; x<price.length ; x++){
        sum += price[x].innerHTML*quan[x].value
        console.log(price[x].innerHTML)
}
 
final.value = sum}


var heart=document.getElementsByClassName('like')
console.log(heart)
for (let f=0; f<heart.length;f++){
    heart[f].addEventListener("click",function(){
    
        if( heart[f].style.color === "red"){
        heart[f].style.color="black"
      }
      else{
        heart[f].style.color="red"
      }
    })

    
}


    
    
    


