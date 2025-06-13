hamburgerbtn = document.getElementById('hamburgerbtn');
menulist = document.getElementsByClassName('mobileView-menu');

let view = 0;
hamburgerbtn.addEventListener('click',(()=>{
  console.log(view)
  if(view == 0){
    menulist[0].style.display = "block";
    view=1;
  }
  else if(view == 1){
    menulist[0].style.display = "none";
    view=0;
  }
  
  console.log(view);
}))