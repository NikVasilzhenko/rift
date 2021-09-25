window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.js-burger').addEventListener('click', function(){
    this.classList.toggle('open');
    document.querySelector('#js-mob-menu').classList.toggle('open');
  });
  
  //up
//  window.onscroll = function() {
//    if(document.getElementById('js-up')){
//      if(window.pageYOffset > window.innerHeight){
//        document.getElementById('js-up').classList.add('open');
//      } else{
//        document.getElementById('js-up').classList.remove('open');
//      }
//    }
//    if(window.pageYOffset > 10){
//      document.getElementById('js-header').classList.add('fix');
//    } else{
//      document.getElementById('js-header').classList.remove('fix');
//    }
//  }
  document.querySelector('.js-up').addEventListener('click', function(){
    document.querySelector('.header').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
