var a = Number(prompt('Insert a:'));
var b = Number(prompt('Insert b:'));
var c = Number(prompt('Insert c:'));
var x1;
var x2;
function discriminant(a1,b1,c1){
     var d = b1 * b1 - 4 * a1 * c1;
     if (d > 0){
         x1 = (- b1 + Math.sqrt(d)) / 2 * a1;  
         x2 = (- b1 - Math.sqrt(d)) / 2 * a1;
         return 'x1 = '+ x1 +' x2 = '+ x2;
     }
      if (d === 0) {
         x1 = x2 = - b1 / 2 * a1; 
          return 'x1 = '+ x1 +' x2 = '+ x2;
      }
      else {
      return 'no solutions';
      }
 }
 document.write(discriminant(a,b,c));