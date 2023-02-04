
p=19; 
q=29 ; 
n = 551 ;     
phiN = 504 ; 
e = 17 ; 
d =89 ; 


//note that msg should noy be larger than n 
// sol اما اني ماادخل قيم اكبر من n 
// او اني اغير قيم p , q , e ,d 


//enc

msg= 456 ; 
const c = expmod(msg,e,n);

console.log("plaintext",msg,"cipher text is ",c);

//     Cmsg= 29 ; 
//   const m = Cmsg ** d % n;
//   document.getElementById("result").innerHTML+=m ; // m instead

//   console.log(m);

p = expmod(c,d,n);
console.log("cipher",c,"plain text is ",p);


 
function expmod( base, exp, mod ){
    if (exp == 0) return 1;
    if (exp % 2 == 0){
      return Math.pow( expmod( base, (exp / 2), mod), 2) % mod;
    }
    else {
      return (base * expmod( base, (exp - 1), mod)) % mod;
    }
  }



