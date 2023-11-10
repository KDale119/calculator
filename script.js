
function calculate(event) {
     event.preventDefault();
     let opp1 = Number(document.getElementById("operand1").value)
     let opp2 = Number(document.getElementById("operand2").value)
     let optr = document.getElementById("operator").value
     let result = 0;
    
     if(optr === "add") {
        result = opp1 + opp2;
        console.log(result);
     } else if(optr === "subtract") {
        result = opp1 - opp2;
        console.log(result);
     } else if(optr === "multiply") {
        result = opp1 * opp2;
        console.log(result);
     } else {
        result = opp1 / opp2;
        console.log(result);
     } 

     document.getElementById('result').innerHTML = result;

     document.getElementById('store').innerHTML = "Insert Result= " + result;

     //if (document.getElementById('store').clicked === true) {
     //   result = opp1;
    //  }
     
}

function clearValues() {
    document.getElementById('operand1').value = ''
    document.getElementById('operand2').value = ''
    document.getElementById('operator').value = ''
}

function insertResult() {
   document.getElementById('operand1').value = document.getElementById('result').innerHTML;
   document.getElementById('operand2').value = ''
   document.getElementById('operator').value = ''
}








