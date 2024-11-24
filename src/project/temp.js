const textbox1=document.getElementById("textbox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius= document.getElementById("toCelsius");
const mysubmit=document.getElementById("subsub");
const statment=document.getElementById("p1");
let temp;

mysubmit.onclick=function(event){
    event.preventDefault();
    if(toFahrenheit.checked){
        temp=Number(textbox1.value);
        temp=temp*(9/5) + 32;
        statment.textContent=temp.toFixed(1) + "degree F";

    }
    else if(toCelsius.checked){
        temp=Number(textbox1.value);
        temp= (5/9)*(temp- 32);
        statment.textContent=temp.toFixed(1) + " "+"degree C";

    }
    else{
        statment.textContent="select a unit ";
    }

}
