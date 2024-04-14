const exponentFunc = (num) => {
    const exponent = num**2;
    console.log(exponent); //we can't console.log it outside this func because it is declared inside a function. We will call it as scope.  
    return exponent;
}
exponentFunc(2);