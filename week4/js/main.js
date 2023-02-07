/* 
 *  auth:  jadon belezos
 *  Date:  1/9/2023
 *  Assignment: the first week basic javascript
 *  Teacher: Debbie edging
 *  Class:  cs-133S-01
 *
 */
//i am generally against global variables even in javascri
function getEid(id){
    return document.getElementById(id);
}
window.onload = function(){
	getEid("inputScore").addEventListener("click",calculateScores);

}

function calculateScores(){
let scores = [];
const message = "please enter a student score, when you are done please enter END";

    
    let valueInputted;
	 do {
	    valueInputted=window.prompt(message);
	    
	    if(Number.isNaN(Number.parseInt(valueInputted))){

		    //ignore the valu
	    } else if(valueInputted > 100){
		//also ignore the value
	    } else {
		    valueInputted = Number.parseInt(valueInputted);
		scores.push(valueInputted)
  		computeReport(scores);
	   }
	} while(!(valueInputted == "END" || valueInputted > 100 || valueInputted < 0  ))
}

    


//this doesnt update because the browser has not had a chance to rerender the page
function computeReport(scores){

    getEid("lastScore").innerHTML=scores[scores.length-1];
    //compute the sum of the array!
	//fancy functional method
	//very disappointed to find out their is no sum function.
	const total = scores.reduce((acc, curr) =>  Number(curr) + acc,0 
);
    getEid("totalScore").innerHTML = total; 
    getEid("avgScore").innerHTML = (total/scores.length);
    getEid("highScore").innerHTML = Math.max(...scores);
    getEid("lowScore").innerHTML = Math.min(...scores);


}

