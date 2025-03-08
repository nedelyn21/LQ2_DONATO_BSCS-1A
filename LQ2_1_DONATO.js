// use prompt for username and password
let correct_user_password = "neds1205"
let user_name = prompt("Enter your username.");
let user_password = prompt("Enter your password.");

// check if the username and password are match
if(user_password === correct_user_password){
    alert("Welcome" + user_name);
}else{
    alert("Maybe Username or Password is Invalid or Does not Match");
}