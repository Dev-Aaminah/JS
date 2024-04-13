let isTodaySunday = true;

if(isTodaySunday){
    console.log('Today is Sunday');
}else{
    console.log('No today is not Sunday');
}

// *I have learnt something NEW*.

// Suppose I’ve declared the variable isTodaySunday but haven’t assigned any value to it.
// By default, JavaScript initializes variables to undefined, which is considered falsy. 
// Consequently, the else block executes, leading to the “No, today is not Sunday” message.


// Else-IF
const marks = 67;

if(marks>100){
    console.log("You have entered an invalid number");
}else if(marks<100 && marks>40){
    console.log("Congratulation! You have passed your exam. 😊😊😊");
}else{
    console.log("Try Again!");
}

// BTW shortcut key for emoji on win10 is "WinIcon + .(period)"