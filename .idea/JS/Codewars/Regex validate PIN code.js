//
function validatePIN (pin) {
  let res=true;
  if (pin.length==4||pin.length==6){
    {for(let i in pin){
      if(pin[i]>=0&&pin[i]!=' '&&pin[i]!='\n'){res=true;continue;}
      else res=false; break;
    }}
  }
  else res=false;
  return res;
}