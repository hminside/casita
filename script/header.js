

$(function() {
    $('.hamburger-button').on('click', function(event){
        event.preventDefault();
        
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');

    });
});

const header = document.querySelector(".header")

function scrollEvent(event){
    const STANDARD = 30;
    
    if(window.scrollY > STANDARD){
      header.classList.add("hide")
    }else {
      header.classList.remove("hide")
    }
    
  };

  function moveTop(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
}

window.addEventListener("scroll", scrollEvent);
