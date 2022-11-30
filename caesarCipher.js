function caesarCipher(string, shift){
    //a-z (97-122)
    //A-Z (65-90)

    let caesar = '';
    for(let i=0; i<string.length;i++){
        let num = (string.charCodeAt(i)+shift);
        if(num>90 && num<97){
            num -= 26;
        }else if(num>122){
            num-=26;
        }

        caesar += String.fromCharCode(num);
    }
    return caesar
    
}


module.exports = caesarCipher;