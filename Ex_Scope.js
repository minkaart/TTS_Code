var name = 'David'; 

var greet = function(name){
	name = name;
	console.log(name);  
}

var greet2 = function(other_name){
	var name = other_name;
	console.log(name);  
}

var greet3 = function(other_name){
	name = other_name;
	console.log(name);  
}

console.log(name); 
greet("Matt"); 
console.log(name); 
greet2('Scott'); 
console.log(name);
greet3("Joe");
console.log(name);
