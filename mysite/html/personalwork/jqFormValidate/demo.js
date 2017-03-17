function funApplyAgentForm(){
  // QQ号码验证
  jQuery.validator.addMethod("isQQ", function(value, element) {
    var qq = /^[1-9][0-9]{4,}$/;
    return this.optional(element) || (qq.test(value));
  }, "请正确填写您的电话号码");

  // 手机号码验证
  jQuery.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    var mobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
  }, "请正确填写您的手机号码");

  // 电话号码验证
  jQuery.validator.addMethod("isTel", function(value, element) {
    var tel = /^\d{3,4}-?\d{7,9}$/; //电话号码格式010-12345678
    return this.optional(element) || (tel.test(value));
  }, "请正确填写您的电话号码");

  //邮编验证
  jQuery.validator.addMethod("isZipCode", function(value, element) {
      var tel = /^[0-9]{6}$/;
      return this.optional(element) || (tel.test(value));
  }, "请正确填写您的邮政编码");

  //邮箱验证
  jQuery.validator.addMethod("isEmail", function(value, element) {
      var tel = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      return this.optional(element) || (tel.test(value));
  }, "请正确填写您的邮箱");

  //下拉框选择验证
  jQuery.validator.addMethod("selectCheck", function(value, element) {
      if($(element).val()>0)
        return true;
      else
        return false;
  }, "请选择");

  //网址验证
  jQuery.validator.addMethod("isHttp", function(value, element) {
      if($(element).val().indexOf("http://")==0)
        return true;
      else
        return false;
  }, "网址以http://开头");

  // 身份证号码验证
  jQuery.validator.addMethod("isIdCardNo", function(value, element) {
    var idCardNo=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    return this.optional(element) || (idCardNo.test(value));
  }, "请正确填写您的身份证号码");

  //表单验证
  $('#apply-agent-form').validate({
      rules:{
          real_name: { required: true,minlength:2},
          id_card: { required: true,isIdCardNo: true},
          address: { minlength:10},
          web_site: { isHttp:true},
          tel: { isTel: true},
          qq: { required: true,isQQ: true},
      },
      messages:{
          real_name: { required: '请输入真实姓名',minlength:'姓名长度不能小于2'},
          id_card: { required: '请输入身份证号',isIdCardNo: '身份证号格式不正确'},
          address: { minlength:'地址长度不能少于10'},
          web_site: {isHttp:'以http://开头'},
          tel: { isTel: '固定电话格式不正确'},
          qq: { required: '请输入QQ号',isQQ: 'QQ格式不正确'}

      },
      errorPlacement: function(error, element) {
          error.appendTo(element.parent().parent());
      },
      submitHandler:function(form) {
        alert("验证通过啦");
      var data = {};
      data.real_name =  $("#real_name").val();
      data.invite_code =  $("#invite_code").val();
      data.id_card =  $("#id_card").val();
      data.address =  $("#address").val();
      data.web_site =  $("#web_site").val();
      data.is_shop =  $(".is_shop:checked").val();
      data.business_licence =  $("#business_licence").val();
      // data.mobile =  $("#mobile").val();
      data.tel =  $("#tel").val();
      data.qq =  $("#qq").val();
      data.weixin =  $("#weixin").val();
      data.weibo =  $("#weibo").val();
      data.wangwang =  $("#wangwang").val();
      data.sign =  $("#sign").val();
      
      }
  });
}


$(function(){
  funApplyAgentForm();
});
