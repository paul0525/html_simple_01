(function($){
	$(".menu").find("dt").on("mouseover mouseout",function(){
		if(event.type == "mouseover"){
  			$(this).find("ul").css({"display":"inline-block"});
 		}else if(event.type == "mouseout"){
  			$(this).find("ul").css({"display":"none"});
 		}
	});

	function testa(){
		alert("this is testA");
	}

	$("li").find("img").on("mouseover mouseout",function(){
		if(event.type == "mouseover"){
			$(this).prevAll("img").attr({"src":"images/rating_over.gif"});
			$(this).attr({"src":"images/rating_over.gif"});
			var text = $(this).attr("title");
  			$(this).nextAll("span").find("label").html(text);
 		}else if(event.type == "mouseout"){
 			$(this).prevAll("img").attr({"src":"images/rating_on.gif"});
 			$(this).attr({"src":"images/rating_on.gif"});
  			$(this).nextAll("span").find("label").html("");
 		}
	}).on("click",function(){
		alert("hello, I am  remark!");
	});

})(jQuery);


/*注意闭包的作用*/
function trigger(){
	alert('trigge the testA');
	//testa();
	alert('trigger the testA end');
}