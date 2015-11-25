$(function(){
    numScroll();
});

/**
 * [numAnimation description]
 * @param  {[type]} currentNode [当前节点]
 * @param  {[type]} i           [第几列，从0开始]
 * @param  {[type]} countSrcoll [已经滚动了几波，从最后一个开始]
 * @return {[type]}             [description]
 */
function numAnimation(currentNode,i,countSrcoll){
    var num=$(currentNode).attr("data-num");
    if(num<1){
        clearInterval(c);
    }
    var index=1,
        isFirst=true,
        isStop=false,
        countSrcoll=countSrcoll;
    var c=setInterval(function(){
        //已经执行完毕，可以进行下一轮了
        if(countSrcoll>=4){
           clearInterval(c);
           return false;
        }
        if(isFirst && (num>0)){
            $(currentNode).removeClass("num-0").addClass("num-"+index);
            isFirst=false;
        }else if(index<=num){
            $(currentNode).removeClass("num-"+(index-1)).addClass("num-"+index);
        }else if(index>num){
            isStop=true;
            countSrcoll++;
            numAnimation($(".node"+i+(4-countSrcoll)),i,countSrcoll);
            clearInterval(c);
            return false;
        }
        index++;
    },50);
}

function numScroll(){
    for(var i=0;i<4;i++){
        numAnimation($(".node"+i+"4"),i,0);
    }
    //numAnimation($(".node0"+"4"),0,0);
}