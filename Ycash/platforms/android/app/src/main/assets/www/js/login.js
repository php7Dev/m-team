
document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
      

            function checkConnection() {
           
                var networkState = navigator.connection.type;
                    
                    if (networkState !== Connection.NONE) {
                        return true;
                    }else
                    return false;
                }

                
   $(document).ready(function(){
    
    $('select').niceSelect();
    $(".shifter").focus(function(){
        $(this).siblings("label").css({
            "color" : "#b2ae7e",
            "font-size" : "12px",
            "font-weight" : "bold",
            "top" : "-30%",
            "padding" : "0 5px",
            "background" : "#fff"
        });
        $(this).parent().css({
            "border-color" : "#b2ae7e"
        });
    });
    $(".shifter").blur(function(){
        if($(this).val().trim().length < 1)
        {
            $(this).siblings("label").css({
                "color" : "#b7b5b5",
                "font-size" : "18px",
                "font-weight" : "normal",
                "top" : "15%",
                "padding" : "0",
                "background" : "transparent"
            });
            $(this).parent().css({
            "border-color" : "#b7b5b5"
        });
        }
    });


   /* if(localStorage.getItem('uData')!=null){
        location.href="staff.html";
    }*/


$("#submit-data").click(function(){

//alert(JSON.stringify(pos));

if($("#mobile").val().trim().length > 0 && $("#pwd").val().trim().length > 0 && $("#type option:selected").val() != "0")
    {
        
        if(checkConnection()){

           // alert(JSON.stringify(pos)+'----'+$("#type option:selected").val());
//alert('pass condetions');
            const options = {
                method: 'post',
                data: { mobile: $('#mobile').val().trim(), pwd: $("#pwd").val().trim(),type:$("#type option:selected").val()}
               // headers: { Authorization: 'OAuth2: token' }
              };
               
               // $('#mobile').val('');
               $("#pwd").val('');

                $('#submit-data').fadeOut(100,function(){
                    $('.preloader').fadeIn(500);
                });

              cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/auth.php', options, function(response) {
                
                $('.preloader').fadeOut(function(){
                    $('#submit-data').fadeIn(500);
                });
                
               
               // alert(typeof response.data);
               
              if(jQuery.trim(response.data)==="0"){
                $.alertable.alert('رقم مستخدم خاطىء او كلمة مرور غير صحيحة');
                }else{
                        localStorage.setItem('uData',JSON.stringify(JSON.parse(response.data)));
                        location.href="staff.html";
                }
                    
                 

                 //alert(response.data);



              }, function(response) {
               
                $('.preloader').fadeOut(function(){
                    $('#submit-data').fadeIn(500);
                });
              /*  $.alertable.alert(response.data);
                if(response.data==''){
                    $.alertable.alert('هذا المستخدم غير موجود');
                }else{
                        localStorage.setItem('uData',JSON.stringify(JSON.parse(response.data)));
                        location.href="staff.html";
                }*/
              

                $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                // prints 403
                //console.log(response.status);
               
                //prints Permission denied
                //console.log(response.error);
              });

        }else{
       /*     $(".overlay").css({display:'flex'}).fadeIn(200,function(){
                $("#popup-info").text("تأكد من إتصالك بالإنترنت");
                $(".popup").css({display:'flex'}).animate({width:"65%"},300);
            });*/
            $.alertable.alert("تأكد من إتصالك بالإنترنت");
        }
    }else{
       /* $(".overlay").css({display:'flex'}).fadeIn(200,function(){
            $(".popup").css({display:'flex'}).animate({width:"80%"},300);
        });*/
        $.alertable.alert("يُرجى ملئ كافة البيانات");
        
    }

    /*$("#popup-dismiss").click(function(){
        $(".popup").animate({width:0},300).fadeOut(0,function(){
            $(".overlay").fadeOut(200);
        });
        $("#popup-info").text("يُرجى ملئ كافة البيانات");
    });*/

        
    });

});

}
