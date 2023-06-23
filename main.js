let value = ""
let amount = 0
document.getElementById("sign").innerHTML = ""
function tester(){
    value = document.getElementById("sign").innerHTML
    console.log(value)
    if(value == "+"){
        amount = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
    }
    else if(value == "-"){
        amount = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
    }
    else if(value == "x"){
        amount = Number(document.getElementById("number1").value) * Number(document.getElementById("number2").value);
    }
    else if(value == "/"){
        amount = Number(document.getElementById("number1").value) / Number(document.getElementById("number2").value);
    }
    else{
        return(0)
    }
    console.log(amount)
    return amount;
}
function amounter(){
    return amount
}
function add(){
    document.getElementById("sign").innerHTML = "+"
    console.log(document.getElementById("sign").innerHTML);
}
function subtract(){
    document.getElementById("sign").innerHTML = "-"
    console.log(document.getElementById("sign").innerHTML);
}
function multiply(){
    document.getElementById("sign").innerHTML = "x"
    console.log(document.getElementById("sign").innerHTML);
}
function divide(){
    document.getElementById("sign").innerHTML = "/"
    console.log(document.getElementById("sign").innerHTML);
}