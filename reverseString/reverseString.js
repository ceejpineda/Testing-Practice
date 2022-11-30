function reverseString(word){
    let reverse = '';
    for(let i=1; i<=word.length; i++){
        reverse = reverse + word[word.length-i];
    }
    return reverse;
}

module.exports = reverseString;