// ------------- Conditional Task ------


//             -- Free drinks --

var burgerPrice= 509;
//const cokePrice= burgerPrice + 30;

if(burgerPrice>=500){
        console.log('Free Coke')

}
else{
    //console.log(cokePrice);
    console.log('Coke: 30TK');
}

//<------------ BMI Calculator ------------>

let bodyWeight = 65;
var bodyHeight = 1.6764;
const BMI = bodyWeight / ((bodyHeight )^2);

if (BMI <= 18.4){
    console.log('You are underweight');
}
else if( (BMI >= 18.5) && (BMI <=24.9) ) {

    console.log('You are normal')
}
else if((BMI >=25) && (BMI <=29.9)) {
    console.log('You are overweight')
    
}
else {
    console.log('You are obese')
}



//<------------ Grade Calculator ------------>
let studentScore= 35;

if (studentScore >= 90 && studentScore <= 100) {
  console.log("Student Grade: A");
} else if (studentScore >= 80 && studentScore <= 89) {
  console.log("Student Grade: B");
} else if (studentScore >= 70 && studentScore <= 79) {
  console.log("Student Grade: C");
} else if (studentScore >= 60 && studentScore <= 69) {
  console.log("Student Grade: D");
} else {
  console.log("Bro you are fucked up!");
}











