let create_matrix = prompt("Do you want to create a matrix?");

if(create_matrix){
    let limit1 = parseInt(propmt("Enter limit for first loop:"), 5);
    let limit2 = parseInt(prompt("Enter limit for second loop:"), 5);
    let limit3 = parseInt(prompt("Enter limt for third loop:"), 5);
    
    if(isNaN(limit1) || isNaN(limit2) || isNaN(limit3) || limit1 <= 0 ||
limit2 <= 0 || limit3 <= 0){
    alert ("Invalid input. Please enter positive numbers.");
}else{
    let string1 = prompt("Enter first string:");
    let string2 = prompt("Enter second string:");
    let string3 = prompt("Enter third string:");

    for (let i = 1; i< limit1; i++){
        for (let j = 2; j< limit2; j++){
            for (let k = 3; k< limit3; k++){
                console.log(string1 + "" + string2 + "" + string3);

            }
        }
    }
}
}else{
    console.log("Thank you, re-run the program if you change your mind.");
}

