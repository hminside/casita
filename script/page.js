
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $(".page").length;

$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});

     /* javascript */
      // Intersection Observer 생성
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 화면에 들어옴
              entry.target.classList.add("fade-in");
            } else {
              // 화면에서 나감
              entry.target.classList.remove("fade-in");
            }
          });
        },
        // 화면에서 해당 요소가 10% 이상 보일 경우 화면에 들어온 것으로 판단함
        { threshold: 0.1 }
      );

      // 관찰 대상 설정
      const targetElements = document.querySelectorAll(".fade-wrap");
      targetElements.forEach((element) => {
        observer.observe(element);
      });