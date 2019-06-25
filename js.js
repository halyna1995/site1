function myFunction(el) {
  if(el.previousElementSibling.clientHeight == 55){
	el.previousElementSibling.style.height = "100%";
	el.innerHTML = "SEE LESS";
  } else{
	el.previousElementSibling.style.height = "55px";
	el.innerHTML = "SEE MORE";
  }
}
$(document).ready(function(){
    $("menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});