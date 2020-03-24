//GLOBAL VARIABLES 

var billAmount = 100; 

//RUN PROGRAM
console.log("Your total including gratuity is: "+totalWithGrat(billAmount).toFixed(2)); 


//USER DEFINED FUNCTIONS
function gratuity(amount){
	var tip = amount*.2; 
	return tip; 
}

function totalWithGrat(bill){
	return gratuity(bill) + bill; 
}

