export function isCVVValid(val : number): any {
    const cvvpattern = new RegExp('/^[0-9]{3,4}$/');
    if (typeof(val) === 'number' && val.toString().match(cvvpattern)) {
        return true;
    }else{
        return false
    }
}

export function isNameValid(name: string){
    const exp = new RegExp('^[A-Z].*');
    if (name.length &&  name.match(exp)){
       
    }
}

export function getCardType(cardNumber: string): any  {

    if(cardNumber != null && cardNumber != undefined && cardNumber != ""){
      //JCB
      var jcb_pattern = new RegExp("^(?:2131|1800|35)[0-9]{0,}$"); //2131, 1800, 35 (3528-3589)
      // American Express
      var amex_pattern = new RegExp("^3[47][0-9]{0,}$"); //34, 37
      // Diners Club
      var diners_pattern = new RegExp("^3(?:0[0-59]{1}|[689])[0-9]{0,}$"); //300-305, 309, 36, 38-39
      // Visa
      var visa_pattern = new RegExp("^4[0-9]{0,}$"); //4
      // MasterCard
      var mastercard_pattern = new RegExp("^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$"); //2221-2720, 51-55
      var maestro_pattern = new RegExp("^(5[06789]|6)[0-9]{0,}$"); //always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
      //Discover
      var discover_pattern = new RegExp("^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$");
      ////6011, 622126-622925, 644-649, 65

      // get rid of anything but numbers
      cardNumber = cardNumber.replace(/\D/g, "");

      // checks per each, as their could be multiple hits
      //fix: ordering matter in detection, otherwise can give false results in rare cases
      var sel_brand = "Unidentified Card";
      if (cardNumber.match(jcb_pattern)) {
        sel_brand = "JCB";
      } else if (cardNumber.match(amex_pattern)) {
        sel_brand = "Amex";
      } else if (cardNumber.match(diners_pattern)) {
        sel_brand = "Diners_club";
      } else if (cardNumber.match(visa_pattern)) {
        sel_brand = "Visa";
      } else if (cardNumber.match(mastercard_pattern)) {
        sel_brand = "Mastercard";
      } else if (cardNumber.match(discover_pattern)) {
        sel_brand = "Discover";
      } else if (cardNumber.match(maestro_pattern)) {
        if (cardNumber[0] == "5") {
          //started 5 must be mastercard
          sel_brand = "MasterCard";
        } else {
          sel_brand = "Maestro"; //maestro is all 60-69 which is not something else, thats why this condition in the end
        }
      }

      return sel_brand;
    }
  }
