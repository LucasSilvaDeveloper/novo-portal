function openCloseNav() {
	if (document.getElementById("mySidenav").style.width == '0px') {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("header").style.marginLeft = "250px";
        document.getElementById("footer").style.marginLeft = "250px";
    } else {
      	 document.getElementById("mySidenav").style.width = "0";
 		 document.getElementById("main").style.marginLeft= "0";
        document.getElementById("header").style.marginLeft = "0";
        document.getElementById("footer").style.marginLeft = "0";
    }
    
}