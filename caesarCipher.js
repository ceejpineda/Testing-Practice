function caesarCipher(string, shift){
    //a-z (97-122)
    //A-Z (65-90)

    let caesar = '';
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<string.length;i++){
        let charCode = string.charCodeAt(i);
        let num = (string.charCodeAt(i)+shift);

        if(!alpha.includes(string[i])){
            caesar += string[i];
            continue;
        }

        if(charCode>96 && charCode<123){
            while(num<97){
                num+=26;
            }
            while(num>122){
                num-=26;
            }
            caesar += String.fromCharCode(num);
        }
        if(charCode>64 && charCode<91){
            while(num<65){
                num+=26;
            }
            while(num>90){
                num-=26;
            }
            caesar += String.fromCharCode(num);
        }
        
    }
    return caesar
    
}

console.log(caesarCipher('abc',99));

module.exports = caesarCipher;