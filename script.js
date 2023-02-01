



p=19; 
q=29 ; 
n = 551 ;     
phiN = 504 ; 
e = 17 ; 
d =89 ; 



function encrypt() {


    Pmsg= document.getElementById('msg').value ;
    const c = expmod(Pmsg,e,n);
  document.getElementById("result").innerText+=c ; // result is span inside result div

  return ;
}


function decrypt() {

    Cmsg= document.getElementById('msg').value ;
  const p = expmod(Cmsg,d,n);
  document.getElementById("result").innerText=p ; // سبان داخل دف الريزلت
  //console.log(m);
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
