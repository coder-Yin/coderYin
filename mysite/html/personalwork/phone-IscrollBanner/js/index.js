
$(function(){
	navScroll();
	topCarousel();
});

	function navScroll(){
		var myScroll;
      	myScroll = new IScroll('#wrapper', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
	}

     /* [顶部轮播]
 * @return {[type]} [description]
 */
function topCarousel(){
	 var mySwiper = new Swiper('.swiper-container',{
        loop : true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
    });
}