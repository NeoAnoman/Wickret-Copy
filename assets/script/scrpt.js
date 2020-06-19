function btnClk(prop) {
  document.querySelector('.slct').classList.remove('slct');
  document.querySelector('#'+prop).classList.add('slct');
}
function showAll() {
  document.querySelectorAll('.hideMe').forEach((item, i) => {
    item.classList.remove('hideMe')
  });
  document.querySelectorAll('.moveup').forEach((item, i) => {
    item.classList.remove('moveup')
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
