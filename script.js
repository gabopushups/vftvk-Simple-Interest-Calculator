function compute(){

    // Create the neccessary variables to store the values given by the user
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var principal = Number(document.getElementById("principal").value); // Ensure that the datatype of this variable is a Number, and not a string
    var interest = principal*rate*years/100;
    var amount = interest;
    var year = new Date().getFullYear()+parseInt(years);

    if(isNaN(principal)){
        // Check that the user has entered a numeric value for the amount
        alert("Please enter a numeric value for the amount");
        principal.focus();
    }
    if(principal<=0){
        // Check for positive, non zero values. Refocus if a mistake was detected
        alert("Please enter a positive, non zero value for the amount");
        principal.focus();
    }
 
    // Notice the usage of a new span class to highlight the specific numbers
    document.getElementById("result").innerHTML="If you deposit <span class='highlight'>"+ principal +
            "</span>,\<br\>at an interest rate of <span class='highlight'>"+rate+
            "% </span>\<br\>You will receive an amount of <span class='highlight'>"+amount+"</span>,\<br\>in the year "+year+"\<br\>"
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval;

}