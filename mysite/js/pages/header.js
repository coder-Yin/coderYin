/**
 * @author  yinxiaofei
 * @date    2015-11-12
 * @version V 1.0
 * @email   yin_x_f@163.com
 */

$(function(){
	$(".js-navbar-collapse").click(function(){
		$(this).toggleClass("open");
	});
	arrowUpIsShow();
	goToTop();
	windScroll();
	mouseHover();
	//footerPos();

	console.log("有问题请联系	yin_x_f@163.com");
});

//回到顶部
function goToTop(){
    $("#goToTop").click(function(){
         $('body,html').animate({scrollTop:0},600);
    });
}

/**
* 获取滚动条距离顶端的距离
* @return {}支持IE6
*/
function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
    scrollPos = window.pageYOffset; }
    else if (document.compatMode && document.compatMode != 'BackCompat')
    { scrollPos = document.documentElement.scrollTop; }
    else if (document.body) { scrollPos = document.body.scrollTop; }
    return scrollPos;
}

//检测滚动事件
function windScroll(){
    //监听滚动事件
    $(window).scroll(function(event){
    	arrowUpIsShow();
    });
}

//右侧返回顶部是否显示
function arrowUpIsShow(){
	 // var screenHeight=window.screen.availHeight;
     var yheight=getScrollTop(); //滚动条距顶端的距离
     if(yheight>=200){
        $("#goToTop").css("display","block");
     }else{
        $("#goToTop").css("display","none");
     }
}

//鼠标悬浮
function mouseHover(){
	$("#qrcode").hover(function(){
		$(this).css({"background":"#F3F3F3"});
		$(".qr-big").css({"opacity":1,"right":55});
	},function(){
		$(".qr-big").css({"opacity":0,"right":20});
		$(this).css({"background":"#fff"});
	});

	$("#goToTop").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
}



//底部位置
// function footerPos(){
// 	if($(".index-main").length<1 || $(".footer").length<1 ){
// 		return false;
// 	}
// 	var mainHeight=$(".index-main").height();
// 	var mainOffset=$(".index-main").offset().top;
// 	var footerOffset=mainHeight+mainOffset+35;
// 	$(".footer").css({"position":"releative","margin-top":footerOffset+"px"});
// }

