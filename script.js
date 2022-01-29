function compute()
{
var principal = document.getElementById("principal").value;  
if(principal == "" || principal <= 0)
{
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
}    


var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var amount = principal * years * rate / 100;
var year = new Date().getFullYear()+parseInt(years);

document.getElementById("result").innerHTML="If you deposit " + "<span id='mark'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span id='mark'>" + rate + "</span>%." + "<br> You will receive an amount of " +"<span id='mark'>" + amount + "</span>" + ", <br> in the year " + "<span id='mark'>" + year+ "</span>";

}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
