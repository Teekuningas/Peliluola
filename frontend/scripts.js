(function () {

  var mobileState = 'main';

  function fitToContainer(canvas) {
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function layoutChange(toDesktop) {
    var divBanner = document.getElementById("grid-item-banner");
    var divUserlist = document.getElementById("grid-item-userlist");
    var divMain = document.getElementById("grid-item-main");
    var divSwitch = document.getElementById("switch-container");

    if (toDesktop == true) { 
      console.log('Going to desktop!');

      divBanner.style.display = "block";
      divUserlist.style.display = "block";
      divMain.style.display = "block";
      
      divSwitch.style.display = "none";

      divMain.style.gridRowStart = 2;
      divMain.style.gridRowEnd = 3;
      divMain.style.gridColumnStart = 2;
      divMain.style.gridColumnEnd = 3;
      divUserlist.style.gridRowStart = 2;
      divUserlist.style.gridRowEnd = 3;
      divUserlist.style.gridColumnStart = 1;
      divUserlist.style.gridColumnEnd = 2;
      
	} else {
      console.log('Going to mobile!');
      divBanner.style.display = "none";
      divUserlist.style.display = "block";
      divMain.style.display = "block";
      divSwitch.style.display  = "block";
      if (mobileState == 'main') {
        divUserlist.style.display = "none";
        divMain.style.gridRowStart = 1;
        divMain.style.gridRowEnd = 2;
        divMain.style.gridColumnStart = 1;
        divMain.style.gridColumnEnd = 2;
      }
      else if (mobileState == 'userlist') {
        divMain.style.display = "none";
        divUserlist.style.gridRowStart = 1;
        divUserlist.style.gridRowEnd = 2;
        divUserlist.style.gridColumnStart = 1;
        divUserlist.style.gridColumnEnd = 2;
      }
    }
  }

  function layoutChangeFromToggle(e) {
    if (e.target.checked) {
        mobileState = 'userlist';
    }
    else {
        mobileState = 'main';
    }
    layoutChange(false);
  }

  function layoutChangeFromQuery(x) {
    var toDesktop = false;
    if (x.matches) {
        toDesktop = true;
    }
    layoutChange(toDesktop);
  }

  var x = window.matchMedia("(min-width: 1025px)");
  layoutChangeFromQuery(x);
  x.addListener(layoutChangeFromQuery);
  var layoutToggle = document.getElementById('layout-switch');
  layoutToggle.checked = false;
  layoutToggle.addEventListener('change', layoutChangeFromToggle);

  var c = document.getElementById("main-canvas");
  fitToContainer(c);

  var ctx = c.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.moveTo(0, 0);
  ctx.lineTo(c.width, c.height);
  ctx.stroke();

}());
