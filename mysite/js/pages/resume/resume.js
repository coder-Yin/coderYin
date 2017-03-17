$(function(){
	//绑定每个楼层的位置
	$(".module").each(function(index){ //下标从0开始
		var offsetTop=$(this).offset().top || 0;
		$(".js-r-position li").eq(index).find("a").attr("data-pos",offsetTop);
	});

	//右侧导航的点击事件
	$(".js-r-position li a").click(function(){
		$offsetTop=$(this).attr("data-pos") - 20;
		$("body,html").animate({"scrollTop":$offsetTop+"px"},500);
	});

	//窗体滚动事件
	var $rOffsetTop = $(".js-r-position").offset().top || 0;
	var $width = $(".js-r-position").width();
	window.onscroll = function(){
	    var t = document.documentElement.scrollTop || document.body.scrollTop;
	    if( t >= $rOffsetTop ) {
	         $(".js-r-position").css({"position":"fixed","top":15,"width":$width});
	    } else {
	        $(".js-r-position").css({"position":"static","width":"auto"});
	    }
	}
});
