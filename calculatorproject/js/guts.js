 function divide(x, y) {
     if (y == 0) {
        return error;
    } else {
        return x/y;
        //Cannot divide by zero
    }
}
     /*This function allows two numbers to divide*/
function multiply(x, y) {
    return x*y;
    /*This function allows numbers to multiply*/
}
 function add(x, y) {
     return x+y;
     /*This function allows numbers to add*/
 }
 function subtract(x, y) {
     return x-y;
     /*This function allows numbers to subtract*/
 }
function power(x, y) {
    return Math.pow(x, y);
    /*This function allows the user of the 
    calculator to power any number*/
}
function square_root(x) {
    return Math.sqrt(x);
    /*This function allows the user to find the 
    square root of any number*/
}
function logBase10(x) {
    return Math.log(x);
    /*This function allows the user to find 
    log of any number*/
}
 function generateRandomNumber() {
     return Math.random();
     /*This function allows the user to use the 
     random button to get any number between 0 & 1*/
 }
