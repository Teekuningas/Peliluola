(function () {

  var mobile_state = 'main';

  function fitToContainer(canvas) {
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function layoutChange(x) {
    var div_banner = document.getElementById("grid-item-banner");
    var div_userlist = document.getElementById("grid-item-userlist");
    var div_main = document.getElementById("grid-item-main");

    if (x.matches) { // If media query matches
      console.log('Going to desktop!');

      div_banner.style.display = "block";
      div_userlist.style.display = "block";
      div_main.style.display = "block";

      div_main.style.gridRowStart = 2;
      div_main.style.gridRowEnd = 3;
      div_main.style.gridColumnStart = 2;
      div_main.style.gridColumnEnd = 3;
      div_userlist.style.gridRowStart = 2;
      div_userlist.style.gridRowEnd = 3;
      div_userlist.style.gridColumnStart = 1;
      div_userlist.style.gridColumnEnd = 2;
      
	} else {
      console.log('Going to mobile!');
      div_banner.style.display = "none";
      if (mobile_state == 'main') {
        div_userlist.style.display = "none";
        div_main.style.gridRowStart = 1;
        div_main.style.gridRowEnd = 2;
        div_main.style.gridColumnStart = 1;
        div_main.style.gridColumnEnd = 2;
      }
      else if (mobile_state == 'userlist') {
        div_main.style.display = "none";
        div_userlist.style.gridRowStart = 1;
        div_userlist.style.gridRowEnd = 2;
        div_userlist.style.gridColumnStart = 1;
        div_userlist.style.gridColumnEnd = 2;
      }
	}
  }

  var x = window.matchMedia("(min-width: 1025px)");
  layoutChange(x);
  x.addListener(layoutChange);

  var c = document.getElementById("main-canvas");
  fitToContainer(c);

  var ctx = c.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.moveTo(0, 0);
  ctx.lineTo(c.width, c.height);
  ctx.stroke();

}());

