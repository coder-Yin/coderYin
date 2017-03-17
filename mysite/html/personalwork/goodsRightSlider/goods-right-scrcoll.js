$(function () {
    $.fn.extend({
        Scroll: function (opt, callback) {
            if (!opt) var opt = {};
            var _btnUp = $("." + opt.up); //Shawphy:向上按钮
            var _btnDown = $("." + opt.down); //Shawphy:向下按钮
            var _this = this.eq(0).find("ul:first");
            var lineH = _this.find("li:first").height()+6; //获取行高
            var line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10); //每次滚动的行数，默认为一屏，即父容器高度
            var speed = opt.speed ? parseInt(opt.speed, 10) : 600; //卷动速度，数值越大，速度越慢（毫秒）
            var m = line; //用于计算的变量
            var count = _this.find("li").length; //总共的<li>元素的个数
            var upHeight = line * lineH;
            function scrollUp() {
                if (!_this.is(":animated")) { //判断元素是否正处于动画，如果不处于动画状态，则追加动画。
                    if (m < count) { //判断 m 是否小于总的个数
                        m += line;
                        _this.animate({ marginTop: "-=" + upHeight + "px" }, speed);
                    }
                }
            }
            function scrollDown() {
                if (!_this.is(":animated")) {
                    if (m > line) { //判断m 是否大于一屏个数
                        m -= line;
                        _this.animate({ marginTop: "+=" + upHeight + "px" }, speed);
                    }
                }
            }
            _btnUp.bind("click", scrollUp);
            _btnDown.bind("click", scrollDown);
        }
    });
    $("#tj-scroll").Scroll({ line: 3, speed: 500,up: "tj-next-btn", down: "tj-prev-btn" });
});