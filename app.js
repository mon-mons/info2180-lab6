window.onload= function(){

	var searchbtn =document.getElementById("search");
	var httpRequest;
	searchbtn.onclick=mkrequest;

	function mkrequest(){
		httpRequest = new XMLHttpRequest();
		var url = "superheroes.php";
		httpRequest.onreadystatechange = something;
		httpRequest.open('GET', url);
		httpRequest.send();

		
	}
	function something() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
		 if (httpRequest.status === 200) {
		 var response = httpRequest.responseText;
		 alert(response);
		 } else {
		 alert('There was a problem with the request.');
		 }
		}
	}
};

	


