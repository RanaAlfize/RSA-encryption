



p=19; 
q=29 ; 
n = 551 ;     
phiN = 504 ; 
e = 17 ; 
d =89 ; 



function encrypt(e,n) {


    Pmsg= document.getElementById('msg').value ;
  const c = m ** e % n;

  document.getElementById("result").innerHTML+=c ; 

  return ;
}


function decrypt(n, d) {

    Cmsg= document.getElementById('msg').value ;
  const m = Cmsg ** d % n;
  document.getElementById("result").innerHTML+=c ; 

  return ;
}
