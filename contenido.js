/*var sequenceFibo = [];

sequenceFibo = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

var arreglos_pares = sequenceFibo.filter(function(numeros){
		
	return numeros % 2 == 0;
});

console.log(arreglos_pares);

let suma = 0;
for (let i = 0; i < arreglos_pares.length; i++){
	suma += arreglos_pares[i];	
}

console.log(suma);*/

var pf = 0;
var arrayFa = [];
//crear indice
var cf = 1;
var sum = 0;
while(cf < 4000000){
	
	let tempF = cf;
	cf = cf + pf;
	pf = tempF;	
	if ((cf & 1) === 0){
		sum += cf;
	}	
	
}

console.log(sum);
console.log(cf);