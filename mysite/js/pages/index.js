$(function(){

	//判断浏览器的版本，不符合要求则跳转至提示页面
	if(isLowerBrowser()){
		window.location="notice.html";
	}

	//统计首页被访问的次数
	getVisitNum();
});

function isLowerBrowser(){
	var flag=false;

	if(navigator.userAgent.indexOf("MSIE")>0){
        if(navigator.userAgent.indexOf("MSIE 6.0")>0){
	        flag=true;
      	}
	    else if(navigator.userAgent.indexOf("MSIE 7.0")>0){
	        flag=true;
	    }
	    else if(navigator.userAgent.indexOf("MSIE 8.0")>0){//这里是重点，区别ie9
	        flag=true;
	    }
	    else if(navigator.userAgent.indexOf("MSIE 9.0")>0){
	        flag=true;
	    }
    }
	return flag;
}

function getVisitNum(){
	var storage = window.localStorage;
	if(storage){
		if (!storage.getItem("pageLoadCount")){
			storage.setItem("pageLoadCount",0);
		}
		storage.pageLoadCount = parseInt(storage.getItem("pageLoadCount")) + 1;//必须格式转换
		console.log("首页已被访问："+storage.pageLoadCount+" 次，谢谢您的访问~");
	}
}




