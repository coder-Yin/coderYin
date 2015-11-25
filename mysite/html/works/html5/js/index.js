$('.wp-inner').fullpage({
    loop:true,
    start:0,
    drag:true,
    change: function (e) {
    	if(e.next==1){
    		var screenHeight=document.body.scrollHeight-40;
    		var screenWidth=document.body.scrollWidth-40;
    		$(".page2-black,.temp-div").css({"height":screenHeight,"width":screenWidth,"top":20,"left":20});
    		$(".temp-div").css({"height":screenHeight,"width":screenWidth,"top":20,"left":20});
    	}else if(e.next==2){
            var screenWidth=document.body.scrollWidth-60;
            $(".page3 .content").css({"width":screenWidth,"top":5,"left":30});
        }else if(e.next==3){
            var screenWidth=document.body.scrollWidth-30;
            $(".page4 .content").css({"width":screenWidth,"top":5,"left":15});
        }
    },
});

$(function(){
    document.getElementById("btn-back").addEventListener('touchstart', function(e){
        window.location.href="../../../../index.html";
    });
});

