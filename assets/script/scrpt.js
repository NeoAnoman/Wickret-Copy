function btnClk(prop) {
  document.querySelector('.slct').classList.remove('slct');
  document.querySelector('#'+prop).classList.add('slct');
}
function showAll() {
  document.querySelectorAll('.hideMe').forEach((item, i) => {
    item.classList.remove('hideMe')
  });
  document.querySelectorAll('.moveup1').forEach((item, i) => {
    item.classList.remove('moveup1')
  });
  document.querySelectorAll('.moveup2').forEach((item, i) => {
    item.classList.remove('moveup2')
  });
  document.querySelectorAll('.scaleMe').forEach((item, i) => {
    item.classList.remove('scaleMe')
  });
  document.querySelectorAll('.moveup3').forEach((item, i) => {
    item.classList.remove('moveup3')
  });
}
window.onscroll = function() {
  var scroll = window.pageYOffset;
  var Y = 100;
  if (scroll > Y){
    showAll();
  }
  else {
    if(document.querySelectorAll('.hideMe').length==0) {
      hideAll();
    }
  }
}
function hideAll() {
  var i=1;
  document.querySelectorAll('.trns').forEach((item, i) => {
    if(item.classList.contains("mvp")) {
      item.classList.add("moveup"+i);
      i++;
    }
    else if (item.classList.contains("scl")) {
      item.classList.add("scaleMe");
    }
    else {
      item.classList.add("hideMe");
    }
  });

}
