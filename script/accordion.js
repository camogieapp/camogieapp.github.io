//Script by Tiphaine Pontdeme

//W3 Schools, How TO - Collapsibles/Accordion, https://www.w3schools.com/howto/howto_js_accordion.asp, accessed on 20.11.2024
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}