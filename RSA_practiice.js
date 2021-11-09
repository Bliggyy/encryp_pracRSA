function encrypt(p, q, text) {
    let encrypted,n,z,e,d,x;
    n = p * q;
    z = (p - 1) * (q - 1);

    for (x=2; x<n && z % x == 0; x++) {}
    e = x;

    for (x=1; ((e*x)-1) % z != 0; x++){}
    d = x;

    function encrypt(n,e) {
        let str = "";
        for (x=0; x<text.length; x++) {
            let m = Math.pow(text.charCodeAt(x),e);
            // console.log(m);
            // console.log(m % n);
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

    encrypted = encrypt(n,e);

    let private_key = (n,d) => {

    }


    return encrypted;
}

const p = 11;
const q = 13;


const msg = "ENCRYPTION";

console.log("Original text: " + msg);

const cipher_text = encrypt(p,q,msg);

console.log("Encrypted text: " + cipher_text);

// console.log(String.fromCharCode(65));
// console.log(Math.pow(80,7) % 143);
