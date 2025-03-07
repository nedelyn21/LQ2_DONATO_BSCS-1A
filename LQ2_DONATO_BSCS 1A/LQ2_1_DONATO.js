let dog_breed = prompt("Enter dog breed:");
let print_count = parseInt(prompt("Enter the number of times to print:"), 7);

if(isNaN(print_count) && print_count > 0){
    for(let i = 0; i < print_count; i++){
        console.log(dog_breed);
    }
}else{
    alert("Invalid number entered. Please enter a valid positive number:");
}