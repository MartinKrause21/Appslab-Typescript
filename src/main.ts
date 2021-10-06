let a:string = "laafaal"

function checkPalindrome (b:string){
const reversestring = b.split ('').reverse().join('');


if (b = reversestring) {

    console.log ("It is palindrome");
}

else 
console.log ("It is not palindrome");

}

checkPalindrome (a);