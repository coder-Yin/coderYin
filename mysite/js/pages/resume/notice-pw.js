function isLowerBrowser(){
	var flag=false;
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/6./i)=="6."){ 
		flag=true;
	}
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7."){ 
		flag=true;
	}
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8."){ 
		flag=true;
	}
	return flag;
}

if(isLowerBrowser()){
	window.location="../../../notice.html";
	return false;
}
