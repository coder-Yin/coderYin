$(function(){
    topCarousel();
});


 /* [顶部轮播]
 * @return {[type]} [description]
 */
function topCarousel(){
	// 控制箭头位置
    var screenWidth=document.body.clientWidth;
    Offset=(screenWidth-1190)/2+190;
    $("#next-img").css("left",Offset+"px");
    $("#prev-img").css("right",Offset+"px");
	var focusBanner=function(){
        var $focusBanner=$("#focus-banner"),
            $bannerList=$("#focus-banner-list li"),
            $focusHandle=$(".focus-handle"),
            $bannerImg=$(".focus-banner-img"),
            $nextBnt=$("#next-img"),
            $prevBnt=$("#prev-img"),
            $focusBubble=$("#focus-bubble"),
            bannerLength=$bannerList.length,
            _index=0,
            _timer="";

            var _height=$(".focus-banner-img").find("img").height();
            $focusBanner.height(_height);
            $bannerImg.height(_height);


            for(var i=0; i<bannerLength; i++){
                $bannerList.eq(i).css("zIndex",bannerLength-i);
                $focusBubble.append("<li>"+(i+1)+"</li>");
            }
            $focusBubble.find("li").eq(0).addClass("current");
            var bubbleLength=$focusBubble.find("li").length;
            $focusBubble.css({
                // "width":bubbleLength*22,
                "marginLeft":-bubbleLength*11
            });//初始化

            $focusBubble.on("click","li",function(){
                $(this).addClass("current").siblings().removeClass("current");
                _index=$(this).index();
                changeImg(_index);
            });//点击轮换

            $prevBnt.on("click",function(){
                _index++
                if(_index>bannerLength-1){
                    _index=0;
                }
                changeImg(_index);
            });//下一张

            $nextBnt.on("click",function(){
                _index--
                if(_index<0){
                    _index=bannerLength-1;
                }
                changeImg(_index);
            });//上一张

            function changeImg(_index){
                $bannerList.eq(_index).fadeIn(250);
                $bannerList.eq(_index).siblings().fadeOut(200);
                $focusBubble.find("li").removeClass("current");
                $focusBubble.find("li").eq(_index).addClass("current");
                clearInterval(_timer);
                _timer=setInterval(function(){$prevBnt.click()},5000)
            }//切换主函数
            _timer=setInterval(function(){$prevBnt.click()},5000)
    }();
}


/**
 * [每一楼层轮播]
 * @return {[type]} [description]
 */
// function typeFloorCarousel(){
//     for (var j=1;j<=4;j++){
//         var str="focusBanner"+j;
//         str=function(){
//             var $focusBanner=$(".type-floor.floor"+j+" .focus-banner"),
//                 $bannerList=$(".type-floor.floor"+j+" .focus-banner-list li"),
//                 $focusHandle=$(".type-floor.floor"+j+" .focus-handle"),
//                 $bannerImg=$(".type-floor.floor"+j+" .focus-banner-img"),
//                 $nextBnt=$(".type-floor.floor"+j+" .next-img"),
//                 $prevBnt=$(".type-floor.floor"+j+" .prev-img"),
//                 $focusBubble=$(".type-floor.floor"+j+" .focus-bubble"),
//                 bannerLength=$bannerList.length,
//                 _index=0,
//                 _timer="";

//                 var _height=$(".type-floor.floor"+j+" .focus-banner-img").find("img").height();
//                 $focusBanner.height(_height);
//                 $bannerImg.height(_height);


//                 for(var i=0; i<bannerLength; i++){
//                     $bannerList.eq(i).css("zIndex",bannerLength-i);
//                     $focusBubble.append("<li>"+(i+1)+"</li>");
//                 }
//                 $focusBubble.find("li").eq(0).addClass("current");
//                 var bubbleLength=$focusBubble.find("li").length;
//                 $focusBubble.css({
//                     // "width":bubbleLength*22,
//                     "marginLeft":-bubbleLength*11
//                 });//初始化

//                 $focusBubble.on("click","li",function(){
//                     $(this).addClass("current").siblings().removeClass("current");
//                     _index=$(this).index();
//                     changeImg(_index);
//                 });//点击轮换

//                 $nextBnt.on("click",function(){
//                     _index++
//                     if(_index>bannerLength-1){
//                         _index=0;
//                     }
//                     changeImg(_index);
//                 });//下一张

//                 $prevBnt.on("click",function(){
//                     _index--
//                     if(_index<0){
//                         _index=bannerLength-1;
//                     }
//                     changeImg(_index);
//                 });//上一张

//                 function changeImg(_index){
//                     $bannerList.eq(_index).fadeIn(250);
//                     $bannerList.eq(_index).siblings().fadeOut(200);
//                     $focusBubble.find("li").removeClass("current");
//                     $focusBubble.find("li").eq(_index).addClass("current");
//                     clearInterval(_timer);
//                     _timer=setInterval(function(){$nextBnt.click()},5000)
//                 }//切换主函数
//                 _timer=setInterval(function(){$nextBnt.click()},5000)
//         }();
//     }
// }



