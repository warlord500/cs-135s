/* 
 *  auth:  jadon belezos
 *  Date:  1/9/2023
 *  Assignment: the first week basic javascript
 *  Teacher: Debbie edging
 *  Class:  cs-133S-01
 *
 */
//okay not gonna lie, i may have gone a little over board. 
//with the prompt system. maybe i will go all out later on. 
// this may be too much? 
// limit the number of prompts to 9 now.
const prompts = [ { text: `hello advernturer, welcome to the land of belshock. as your standing in your farm tilling vegatables. 
		you hear scream across the hill. it seems forigen to you. not one of the many villagers that you have come to 
		known. as you approach, you notice that a boat has been shattered into pieces. looking around you notice several 
		people injured. an old man, on beach limping along. a woman who seemed to have the wind knocked out of her. 
		and a creature that seems humanoid but green and smaller than most with scratches all over it.`,
		options: [
		    ["goblin", 1],
		    ["old man" ,2],
		    ["woman" , 3],
		    ],
		promptNumber: 0},
		{ text: `you decide to approach the goblin, looking over the wounds you pick up the creature drawing it away 
			from   the  river bed. as you pull it away, it seems to moan in pain. twitch as if it was trying to escape.
			with small motions you realize that it wasnt quite concious as you picked it up. it begans to relax. 
			then turns to you speaking $%#%#$%. you cant make out what it is trying to say. then it stops and says "stupid human, i was just
			fine,why do you think i needed help?" you are baffled. dropping him with a small thud. despite his obvious injuries, he seems
			fine now. you know turn to help the others now!`,
		    options: [
			    ["old man",2,],
			    ["woman", 3],
			    ["shout for help",0],
			    ],
		    promptNumber : 1
		},
		{ text: `as you rush over to the old man, you notice he doesnt seem bothered by his wounds at all. he seems battled worn. however he is 
		bleeding profusely. you look over the field then realize the only way to bandage his wounds is to rip some of your clothes to form the 
		bandage on him. so you quickly rip your shirt. as you wrap the makeshift bandage around his leg. "dammn, that goblin he
		could have  gotten us all killed  with his damn stunt. you wonder if the green person is what he was talking about. `,
		options:[
			["woman",  3],
			["goblin", 1]
			["shout for help",4],
		],
		promptNumber:2},
		{text: `as you approach the woman, she is attempting to get up, you reach your hand out and she takes it. climbing from the river bed.
			she wipes her self off. "well i knew goblin were trouble but not that much trouble." "thank you kind stranger",  she steps aside
			from you with a wisk of her hand and single word "Heal" the others on the beach seem to heal their wounds iinstally."` ,
		options :[ 
			["end the game", 4],
			["end the game", 4],
			["end the game", 4],
			],
		    promptNumber : 3.
		    
		},
		{text: `sorry thats the end of the game so far there might be more coming later. 
			if you would like more email me at jjbelezos@gmail.com`,
		options: [
			    ["restart the game",0],
			    ["restart the game",0],
			    ["restart the game",0],
			],
		promptNumber: 4,
		},];



window.onload = function(){
    //start by acquiring the current story state.

    //adding a smaller acrynom. 
    document.gEId = document.getElementById;
    document.getElementById("buttonOne").addEventListener("click",loadStory);



    //setuping some global variables
    //index to the current prompt. 
    document.story = {};
    document.story.currentPrompt = 0;
    
    
}


function loadStory(){


// below we manipulate the html for a new stage of loading.
    //delete the text area.
     let name = document.getElementById("name")
    document.story.name = name.innerText;
    name.remove();

   
    //create the rest of the button options
    let buttonOptions = document.getElementById("buttonOptions")

    let buttonOne = document.getElementById("buttonOne");
    buttonOne.removeEventListener("click",loadStory);
    buttonOne.addEventListener("click",setPrompt);

    
    let buttonTwo = document.createElement("button");
    buttonTwo.id = "buttonTwo";
    buttonTwo.addEventListener("click",setPrompt);
    buttonOptions.appendChild(buttonTwo);

    let buttonThree = document.createElement("button");
    buttonThree.id = "buttonThree";
    buttonThree.addEventListener("click",setPrompt);
    buttonOptions.appendChild(buttonThree);

    //initial prompt
    displayPromptAndOptions(0);
}


function setPrompt(e){
	displayPromptAndOptions(e.target.promptNumber);
}

function displayPromptAndOptions(promptNum) {
    //quick debug code 
    if(promptNum > prompts.length){
	promptNum = prompts.length-1;
    }

    var story= document.gEId("prompt");
    story.innerHTML = prompts[promptNum].text;

    var buttonOne = document.getElementById("buttonOne");
    buttonOne.promptNumber = prompts[promptNum].options[0][1] 
    buttonOne.innerHTML = prompts[promptNum].options[0][0]

    var buttonTwo =document.getElementById("buttonTwo"); 
    buttonTwo.promptNumber = prompts[promptNum].options[1][1] 
    buttonTwo.innerHTML = prompts[promptNum].options[1][0]

    var buttonThree =document.getElementById("buttonThree"); 
    buttonThree.promptNumber = prompts[promptNum].options[2][1] 
    buttonThree.innerHTML = prompts[promptNum].options[2][0]

}




