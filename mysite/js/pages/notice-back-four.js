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

if(isLowerBrowser()){
	window.location="../../../../notice.html";
}
