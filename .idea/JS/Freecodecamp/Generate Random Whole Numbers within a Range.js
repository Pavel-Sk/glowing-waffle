//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.
//
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN (pin) {
  let res=true;
  if (pin.length==4||pin.length==6){
    {for(let i in pin){
      if(pin[i]>=0&&pin[i]!=' '&&pin[i]!='\n'){res=true;continue;}
      else res=false; break;
    }
    }
  }
  else res=false;
  return res;
}