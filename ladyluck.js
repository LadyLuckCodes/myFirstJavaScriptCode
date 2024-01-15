const prompt = require("prompt-sync")();
//let a = prompt("Enter the length of a: ");
//let b = prompt("Enter the length of b: ");
//let h = prompt("Enter the length of h: ");
//let area = (1/2) * (a + b) * h;
//console.log(area);
//console.log("The area of the trapezium is " + area + ".");
//console.log(1==1);
//console.log('1'==1);
//console.log(1===1);
//console.log('1'===1);
//if( true && b == h){

	//console.log("CANDL");
//}else{
//	console.log("ooops No")


//}
//let booleanValue = (7);
//console.log(typeof booleanValue)
let numberOfPeople = prompt("Enter number of people: ");
if(numberOfPeople <= 10){
	console.log("We're going to have a mini party!!")

}else if(numberOfPeople > 10 && numberOfPeople <= 20){
	console.log("We're going to have a party!!!!" )


}else if(numberOfPeople > 20 && numberOfPeople <= 30){
	console.log("We're going to have a mega party!!!!!")


}else{
	console.log("IT'S GONNA BE LITTT!!!!!")


}
let ternaryOperator = !(1==2)? "Hurrah" : "BBBBBRUUUUH";
console.log(ternaryOperator);

