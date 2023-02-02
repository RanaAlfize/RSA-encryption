



p=419; 
q=541 ; 
n = 226679 ;     // range from 0-226579
phiN = 225720 ; 
e = 2737 ; 
d =46513 ; 


// p=7 ;
// q = 17 ; 
// n = 119 ; 
// phiN = 96 ; 
// e=5 ;
// d=77;



function encrypt() {
 

    Pmsg= document.getElementById('msg').value ;

    if (parseInt(Pmsg) > 226579 )
    document.getElementById("output").innerText="you are out of range friend :)" ;  // 
    let c ;
    c=expmod(Pmsg,e,n); 

  document.getElementById("output").innerText=c ; // result is span inside result div

  return ;
}


function decrypt() {

    Cmsg= document.getElementById('msg').value ;
    if (Cmsg > 226579 )
    document.getElementById("output").innerText="you are out of range friend :)" ;  // 
    let p;
  p = expmod(Cmsg,d,n);
  document.getElementById("output").innerText=p ;  
  return ;
}


function expmod( base, exp, mod ){
  if (exp == 0) return 1;
  if (exp % 2 == 0){
    return Math.pow( expmod( base, (exp / 2), mod), 2) % mod;
  }
  else {
    return (base * expmod( base, (exp - 1), mod)) % mod;
  }
}
