/* 
 *  auth:  jadon belezos
 *  Date:  1/21/2023
 *  Assignment: the first week basic javascript
 *  Teacher: Debbie edging
 *  Class:  cs-133S-01
 *
 */
//a global constant 
const SALES_TAX = 0.06;
window.onload = function(){
    //load the event listener function
    document.getElementById("subtotal").addEventListener("click",calculate)
}
function calculate(){
    //this needs a better method for handling 
    //the prices. it works for now. but i would like to have different prices for each of the 
    //items
    
   const pinQty =  document.getElementById("pineappleQty").value;
   const pineapplePrice = 12
   const appleQty =  document.getElementById("appleQty").value;
   const orangeQty =  document.getElementById("orangeQty").value;

    const pineappleCost = pinQty * pineapplePrice;
    const appleCost = appleQty * pineapplePrice
    const orangeCost = orangeQty * pineapplePrice;
    document.getElementById("pineapplesSub").innerHTML = pineappleCost;
    document.getElementById("appleSub").innerHTML = appleCost;
    document.getElementById("orangeSub").innerHTML  = orangeCost;

    const pretaxValue =pineappleCost + appleCost + orangeCost; 
    document.getElementById("pretax").innerHTML = pretaxValue;
    //round the tax otherwise we get weired numbers
    document.getElementById("tax").innerHTML = roundPennies(pretaxValue * SALES_TAX);
    document.getElementById("total").innerHTML = roundPennies(pretaxValue * SALES_TAX + pretaxValue);

}
function roundPennies(value){
     return Math.round(value*100)/100;
}
