//console.log("This is a reference log of planets/// " + planets + words);


var planets = ["mercury ", " venus ", " earth ", " mars ", " jupiter ", " saturn ", " uranus ", " neptune"];
var el = document.getElementById("planets");


/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
//long version
function printPlanets(array){
	for (var i = 0; i < array.length; i++) {
		//console.log(array[i]);
		el.innerHTML += `<div>${array[i]}</div>`;
	}
	  
}
printPlanets(planets); 
function outputPlanets(planet){
	//console.log(planet)
};
planets.forEach(outputPlanets);


//compact version
planets.forEach(function(planet){
  el.innerHTML += `<div>${planet}</div>`;
});


// Use the map method to create a new array where the first letter of each planet is capitalized

var planetsCapped = planets.map(function(planets){
	return planets.charAt(0).toUpperCase() + planets.slice(1);
});
console.log(planetsCapped)

// Use the filter method to create a new array that contains planets with the letter 'e'

function filterPlanets(words){
	for (var i = 0; i < words.length; i++) {
		if(words[i] === "e"){
			return words;
		}
	}
}

var filteredPlans = planets.filter(filterPlanets);
console.log("I used the filter method to create a new array that contains planets with the letter 'e' :" + filteredPlans);

// Use the reduce method to create a sentence from the words in the following array


 var words = [" The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"] .reduce(function(previousValue, currentValue, index, array) {
   return previousValue + " " + currentValue;
 });
console.log(words);





