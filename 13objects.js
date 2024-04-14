const myDetails = {
    name : "Aaminah",
    city : "Rawalpindi",
    phoneNumber : 0.090078601,
    student : true
}

console.log(myDetails);

console.log (`I am ${myDetails.name}. The city where I currently live in is ${myDetails.city}. My phone number is ${myDetails.phoneNumber}. ${myDetails.student} , I am a student.`);

// Objects are used in conjunction with functions they're very powerful. Take this example:

const person1 = {
    name : "David",
    ageRange : "22-32"
}
const person2 = {
    name : "Noah",
    ageRange : "33-43"
}
const suggestHobby = (hobby) =>{
    if(hobby.ageRange === "22-32"){
        console.log("Book Reading");
    }else if(hobby.ageRange === "33-43"){
        console.log("Gardening");
    }else{
        console.log("Please explore it by yourself!");
    }
}

suggestHobby(person1);
suggestHobby(person2);

// Objects can even have their functions! Let's see that.

const dog = {
    name : "Tommy",
    speak(){
        console.log("woof woof");
    }
}
dog.speak();

// Objects can as well have nested objects inside of them.