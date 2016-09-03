
function myFunction() {
	console.log("hi there")
    var x = document.getElementById("nav-menu");
    if (x.className === "clearfix") {
        x.className += " responsive";
    } else {
        x.className = "clearfix";
    }
}
