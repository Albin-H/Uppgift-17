function text(){
	alert("Det fungerar");
}

function getInfo(){
	var url = new URL(window.location.href);
	var nisse = url.searchParams.get("nisse");
	console.log(nisse);
}