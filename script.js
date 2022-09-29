let M_arr = [ "C", "back"]
let Oper_arr = ["+", "-", "/", "*", " = "] 
let Numb_arr = [1,2,3,4,5,6,7,8,9,0]

let mainAria= document.querySelector(".main")
let numbAria = document.querySelector(".number")
let operAria= document.querySelector(".operations")
let screan = document.getElementById("screan")

function addBut ( arr , aria){
  arr.forEach((elem )=> {
   let x = document.createElement('button')
   x.innerHTML = elem

   aria.appendChild(x)
  }); 

}
addBut( M_arr, mainAria)
addBut( Numb_arr, numbAria)
addBut(Oper_arr, operAria)

function inputText (aria){
  aria.onmousedown = function(event){
  
    let x = event.target.textContent   //    x  нажимаеммая кнопка функция вывода на экран
   switch (x) {
    case "1234567890"  :       //  исправление бага нажатия всех кнопок
        break;
   case " = "  :
           if ( screan.textContent == " " ) // баг с пустым полем
        {screan.innerHTML = " "}
           else
        {screan.innerHTML =  getResult(screan.innerHTML)}
        
      break;
       
   case "C":
        screan.innerHTML = " "
        break;
   case "back":
         screan.innerHTML =  screan.innerHTML.substring(0, screan.innerHTML.length -1)
        break;
        default:
          screan.innerHTML += x   
   }

}
}

inputText(mainAria)
inputText(numbAria)
inputText(operAria)
 
function getResult (val){
  return  eval(val)

}
