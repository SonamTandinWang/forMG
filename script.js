var checkForVaugeLoadingSigns = function(){
	if(document.body.innerHTML = 'loading'){
		checkForVaugeLoadingSigns();
	} else {
		pageIsDone();
	}
}

var pageIsDone = function(){
	if (!window.onload){
		checkForVaugeLoadingSigns();
		console.log('it is not done');
	} else {
		itIsDone();
	}
};

var itIsDone = function(){
	console.log('It is done');
};

pageIsDone();