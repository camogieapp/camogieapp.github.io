//Script by Tiphaine Pontdeme

//W3 Schools, How TO - Responsive Top Navigation, https://www.w3schools.com/howto/howto_js_topnav_responsive.asp, accessed on 12.11.2024
		function myFunction() {
			var x = document.getElementById("myNav");
			if (x.className === "nav") {
				x.className += " responsive";
			} else {
				x.className = "nav";
				}
		}