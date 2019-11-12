window.onload= function(){

	var searchbtn =document.getElementById("search");
	var httpRequest;
	//let userInput = document.getElementById("searchtxt");
	searchbtn.onclick=mkrequest;

	function mkrequest(){
		event.preventDefault()
		httpRequest = new XMLHttpRequest();
		var ser= document.getElementById("txt").value;
		var url = "superheroes.php?query="+ser;
		console.log(url);
		httpRequest.onreadystatechange = something;
		httpRequest.open('GET', url);
		httpRequest.send();

		
	}
	function something() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
		 if (httpRequest.status === 200) {
		 var response = httpRequest.responseText;
		 document.getElementById("result").innerHTML = response;
		 } else {
		 alert('There was a problem with the request.');
		 }
		}
	}
};

	


