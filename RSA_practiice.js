function encrypt(p, q, text) {
    let encrypted,n,z,e,d,x;
    n = p * q;
    z = (p - 1) * (q - 1);

    for (x=2; x<n && z % x == 0; x++) {}
    e = x;

    for (x=1; ((e*x)-1) % z != 0; x++){}
    d = x;

    encrypted = public_key(n, e, text);

    return encrypted;
}

function decrypt(p, q, text) {
    let decrypted,n,z,e,d,x;
    n = p * q;
    z = (p - 1) * (q - 1);

    for (x=2; x<n && z % x == 0; x++) {}
    e = x;

    for (x=1; ((e*x)-1) % z != 0; x++){}
    d = x;

    decrypted = private_key(n, d, text);

    return decrypted;
}

function public_key(n, e, text) {
    let str = "";
    for (x=0; x<text.length; x++) {
        let m = Math.pow(text.charCodeAt(x),e);
        if (m % n < 32) {
            str += String.fromCharCode((m % n) + 32);
        } else if (m % n > 126) {
            str += String.fromCharCode((m % n) - 44);
        } else {
            str += String.fromCharCode(m % n);
        }
    }
    return str;
}

function private_key(n, d, text) {
    let str = "";
    for (x=0; x<text.length; x++) {
        let m = Math.pow(text.charCodeAt(x),d);
        // I know there should be conditions here but my brain encrypted itself forcing me to not be able to think // 
        // just like this function I wasn't able to decrpyt it, sorry sir // 
        str += String.fromCharCode((m % n));
    }
    return str;
}

const p = 11;
const q = 13;


const msg = "ENCRYPTION";
const msg2 = "RASTAMAN";

console.log("Original text: " + msg);
console.log("Original text: " + msg2);

const cipher_text1 = encrypt(p,q,msg);
const cipher_text2 = encrypt(p,q,msg2);

console.log("Encrypted text: " + cipher_text1);
console.log("Encrypted text: " + cipher_text2);

const decipher1 = decrypt(p,q,cipher_text1);
const decipher2 = decrypt(p,q,cipher_text2);

console.log("Decryped text: " + decipher1);
console.log("Decryped text: " + decipher2);