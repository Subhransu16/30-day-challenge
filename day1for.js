let str = "madam";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
if (str === rev) {    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
// We have the word "madam". We want to check if the word looks exactly the same when we read it backwards.
// First, we keep "madam" in str. Then we create an empty rev variable because we need somewhere to store the reversed word.
// The for loop starts from the last letter of "madam" and moves toward the first letter. It takes each letter and adds it to rev. So "madam" gets reversed and becomes "madam" again.
// Then we compare the original word with the reversed word. Since both are "madam", we know it reads the same from both directions, so it's a Palindrome.