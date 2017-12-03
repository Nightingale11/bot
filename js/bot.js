/**
 * Created by Qpp on 2017/12/3.
 */
(function(){
    $(".submit").click(function () {
        var input_content = $(".chat_input").val();
        if(input_content == ''){
            // alert("内容为空");
            return;
        }else{
            var $top = $(".top")
            var $div = $(".top_user");
            var $content="<div class='user_message'><img class='user_icon' src='img/1208228.png'><div class='input_word'><span>"+input_content+"</span><em></em></div></div>";
            $top.append($content);
            var input_content = $(".chat_input").val('');
            sendAjax(input_content);
            var i = $top[0].scrollHeight;
            $top.scrollTop(i);

        }
    });
    function sendAjax(input_content) {
        $.ajax({
            url: "http://rap.taobao.org/mockjsdata/29905/chat",
            data:input_content,
            async:false,
            type:"POST",
            
            success: function (data) {
                show_bot_response(data);
            },
            error:function (data) {
                alert(data);
            }
        })
   }
   function show_bot_response(data) {
       var $top = $(".top")
       // alert(data.bot_content);
       var $content="<div class='user_message'><img class='bot_icon' src='img/robot.png'><div class='bot_word'><span>"+data.bot_content+"</span><em></em></div></div>";
       $top.append($content);
    }

    $(".voice_icon").click(function(){

    });

})();
