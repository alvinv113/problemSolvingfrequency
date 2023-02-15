var string = 'abba'
var  length= string.length;


    // loop through half of the string
    for (let i = 0; i < length / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[length - 1 - i]) {
        console.log('It is not a palindrome');
        }
    }
 console.log('It is a palindrome');