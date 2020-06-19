function btnClk(prop) {
  document.querySelector('.slct').classList.remove('slct');
  document.querySelector('#'+prop).classList.add('slct');
}
function showAll() {
  document.querySelector('.bck').classList.remove('fa-credit-card');
  document.querySelector('.bck').classList.add('fa-step-backward');
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
// window.onscroll = function() {
//   var scroll = window.pageYOffset;
//   var Y = 100;
//   if (scroll > Y){
//     showAll();
//   }
//   else {
//     if(document.querySelectorAll('.hideMe').length==0) {
//       hideAll();
//     }
//   }
// }
$(document.body).on('touchmove', onScrl);
$(window).on('scroll', onScrl);

function onScrl() {
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
  document.querySelector('.bck').classList.remove('fa-step-backward');
  document.querySelector('.bck').classList.add('fa-credit-card');
  var j=1;
  document.querySelectorAll('.trns').forEach((item, i) => {
    if(item.classList.contains("mvp")) {
      item.classList.add("moveup"+j);
      j++;
    }
    else if (item.classList.contains("scl")) {
      item.classList.add("scaleMe");
    }
    else {
      item.classList.add("hideMe");
    }
  });

}
