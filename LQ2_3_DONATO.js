let item_choice = prompt("Enter item choice (A-E):").toUpperCase();
let qty = parseInt(prompt("Enter quantity to order:"), 10);
let price;

switch (item_choice){
    case 'A':
        price = 15; //pepsi cola price
        break;
    case 'B':
        price = 20; //coca cola price
        break;
    case 'C':
        price = 100; //apple per kilogram
        break;
    case 'D':
        price = 70; //orange per kilogram
        break;
    case 'E':
        price = 140; //hotdog per kilogram
        break;
    default:
        alert("No matching item! Try to re-run the program.");
        price = null;
    }

    if (price !== null && !isNaN(qty) && qty > 0){
        let tot_price = price * qty;
        alert("The Total Price of the order" + item_choice + "x" + qty + ":" + tot_price);
    }else{
        alert("Invalid quantity entered. Please enter a valid positive number.");
    }