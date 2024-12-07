/*Group Project
Michael V Flood
National College of Ireland
December 2024
*/

// Java Script re engineered from https://medium.com/@kthamodaran/html-81b54726ac9c

var slidePosition = 1,
	interval;
	// Run slides automatically 
	// https://stackoverflow.com/questions/54297012/progress-carousel-forward-or-backward-if-button-click-else-timed-progress-forwar

function stopAndStart() {
	if (interval) {
		clearInterval(interval)
		}
		// Change image every 5 seconds;
		interval = setInterval(showSlides, 5000); 
		}
		// Forward/Back controls
		function plusSlides(n) {
		SlideShow(slidePosition += n);
		stopAndStart()
		}
		function currentSlide(n) {
			SlideShow(slidePosition = n);
			stopAndStart()
			}
				// User input moves to desired slide
				function SlideShow(n) {
				var i;
				var slides = document.getElementsByClassName("Containers");
				var circles = document.getElementsByClassName("dots");
						if (n === undefined) {
						n = ++slidePosition;
						}
							if (n > slides.length) {slidePosition = 1}
								if (n < 1) {slidePosition = slides.length}
									for (i = 0; i < slides.length; i++) {
									slides[i].style.display = "none";
									}
										for (i = 0; i < circles.length; i++) {
										circles[i].className = circles[i].className.replace(" enable", "");
										}
										slides[slidePosition-1].style.display = "block";
										circles[slidePosition-1].className += " enable";
										// Duration between slides
										setTimeout(showSlides, 5000); 
						} 
										stopAndStart();

