/**
 * Created by mwq on 2017/12/4.
 */

var questionController = function () {
    var that = this;
    this.init= function () {
       that.regEvent() ;
    }
    this.regEvent = function () {
        that.checkInput();
        that.inputChange();
        that.deletebtnClick();
    }
 /*   this.regEventLogin = function(){
        var url = "http://www.log.php"
        $(document).delegate("#btn_submit","click",function(){
            if(that.input()){
                $.ajax({
                    url:url,
                    type:"post",
                    dataType:"json",
                    data:{
                        username: $("#user_name").val(),
                        password: $("#user_pwd").val(),

                    },
                    success:function(res,textStatus,request){
                        if(res.code == "000000"){
                            window.location.href = "index.html";
                        }else if(res.code == "2200"){

                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        Showbo.Msg.alert(XMLHttpRequest.responseText);
                    }

                })

            }

        })

    }*/
    this.inputChange = function(){

        //删除按钮的显示
        $(document).delegate("#user_name", "keyup", function () {

            $(this).next().each(function(){
                var user_name = $("#user_name");
                var user_pwd = $("#user_pwd");
                if(user_name.val() !== "") {
                    $(this).show();
                }else{
                    $(this).hide();
                }

                if ($.trim(user_name.val()) == "" || $.trim(user_pwd.val()) == "") {
                    $("#btn_submit").each(function(){
                        $(this).css("background-color","gray");
                    })
                }
                if ($.trim(user_name.val()) !== "" && $.trim(user_pwd.val()) !== "") {
                    $("#btn_submit").each(function(){
                        $(this).css("background-color","#00ae7d");
                    })
                }
            });
        });
        //密码有内容和无内容时的显示
        $(document).delegate("#user_pwd", "keyup", function () {
            $(this).next().each(function(){
                var user_name = $("#user_name");
                var user_pwd = $("#user_pwd");

                if(user_pwd.val() !== "") {
                    $(this).show();
                }else{
                    $(this).hide();
                }

                if ($.trim(user_name.val()) == "" || $.trim(user_pwd.val()) == "") {
                    $("#btn_submit").each(function(){
                        $(this).css("background-color","gray");
                    })
                }

                if ($.trim(user_name.val()) !== "" && $.trim(user_pwd.val()) !== "") {
                    $("#btn_submit").each(function(){
                        $(this).css("background-color","#00ae7d");
                    })
                }
            });
        });

    }
    //点击删除清空内容事件
    this.deletebtnClick=function () {
        $(document).delegate(".deletebtn","click",function () {
            $(this).hide();
            $(this).prev().each(
                function(){
                    $(this).val("");
                    $("p.submit_info a").each(function(){
                        $(this).css("background-color","gray");
                    })
                }
            )
        });
    }
    this.checkInput = function () {
        $(document).delegate("#btn_submit","click",function(){
            var user_name = $("#user_name");
            var user_pwd = $("#user_pwd");
            if ($.trim(user_name.val()) == "") {
                $("#inputMess").html("请输入用户名!").show();
                user_name.focus();
                return false;
            }
            if ($.trim(user_pwd.val()) == "") {
                $("#inputMess").html("请输入密码!").show();
                user_pwd.focus();
                return false;
            }
            return true;
        })

    }
}


var qst = new questionController();
qst.init();