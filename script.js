



p=419; 
q=541 ; 
n = 226679 ;     // range from 0-226678
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
 

    msg= document.getElementById('msg').value ;
  Pmsg= parseInt(msg);
    if (Pmsg > 226679 ){
    document.getElementById("output").setAttribute("value", "you are out of range friend :) try less"); 
    document.getElementById("output").setAttribute("style", "color : red");     
    return;
    }
    let c ;
    c=expmod(Pmsg,e,n); 

  document.getElementById("output").setAttribute("value", c); 

  return ;
}


function decrypt() {

    msg= document.getElementById('msg').value ;
    Cmsg= parseInt(msg);
    if (Cmsg > 226679 ){
    document.getElementById("output").setAttribute("value", "you are out of range friend :) try less");   
    document.getElementById("output").setAttribute("style", "color : red");   

    return;
    }
    let p;
  p = expmod(Cmsg,d,n);
  document.getElementById("output").setAttribute("value", p); 
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
