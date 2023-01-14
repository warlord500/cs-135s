/* 
 *  auth:  jadon belezos
 *  Date:  1/9/2023
 *  Assignment: the first week basic javascript
 *  Teacher: Debbie edging
 *  Class:  cs-133S-01
 *
 */
window.onload = function(){
    document.getElementById("theDate").innerHTML = (new Date()).toString();

    //the event listeners!!
    document.getElementById("btnGreetMe").addEventListener("click",greeting);
    document.getElementById("btnChangePic").addEventListener("click",newDate);


}

function greeting(){
    console.log("i am running");
	document.getElementById("theGreeting").innerHTML = "Good Day!";
}

function newDate() {
	var imageElm = document.getElementById("heroPic"); 
    imageElm.src = "cat_meme.jpg";
	//important not direct width attribute because it only allows for pixels
	//the default size is way too big for the screen.
    imageElm.style.width = "50%";
    imageElm.style.height = "50%";


}
