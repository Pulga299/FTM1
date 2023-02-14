'use strict';

function BinarioADecimal(num) {
   let numI = num.split("");
   numI = numI.reverse().join("");
   let acum = 0;

   for(let i=0; i<numI.length; i++){
      let resultado = (2 ** i) * parseInt(numI[i]);
      acum = acum + resultado;
   }
   return acum;
}


function DecimalABinario(num) {
   let numDecimal = num.toString();
   let divisor = 2;
   let numeroSalida = "";

   while(numDecimal >= 2){
      let cociente = Math.trunc(numDecimal/divisor);
      let modulo = Math.trunc(numDecimal % divisor);
      numeroSalida += modulo.toString();
      numDecimal = cociente;
   }

   let aux = numDecimal.toString();
   numeroSalida += aux;
   return numeroSalida.split("").reverse().join("");
  

   
}
DecimalABinario(234);

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
