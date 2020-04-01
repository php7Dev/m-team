


var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
    'side':'right'
  });

  // Toggle button
  window.onload = function() {
    document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
      slideout.toggle();
    });
    
}

document.addEventListener("deviceready", onDeviceReady, false);

       function onDeviceReady() {
      

            function checkConnection() {
           
                var networkState = navigator.connection.type;
                    
                    if (networkState !== Connection.NONE) {
                        return true;
                    }else
                    return false;
                }





document.addEventListener("deviceready", onDeviceReady, false);

       function onDeviceReady() {



        document.addEventListener("backbutton", onBackKeyDown, false);

        function onBackKeyDown() {
          
            $.alertable.confirm('هل أنت متأكد من إنهائك للتطبيق؟').then(function() {
                // OK was selected
                localStorage.clear();
                navigator.app.exitApp();
              }, function() {
                // Cancel was selected
              }).always(function() {
                // Modal was dismissed
              });

        }


        $('#logout').click(function(){

            $.alertable.confirm('هل أنت متأكد من إنهائك للتطبيق؟').then(function() {
                // OK was selected
                localStorage.clear();
                navigator.app.exitApp();
              }, function() {
                // Cancel was selected
              }).always(function() {
                // Modal was dismissed
              });

        });

            function checkConnection() {
           
                var networkState = navigator.connection.type;
                    
                    if (networkState !== Connection.NONE) {
                        return true;
                    }else
                    return false;
                }

        $(document).ready(function(){
           
            var myData;
            
            if(localStorage.getItem('uData')!=null){
                myData =JSON.parse(localStorage.getItem('uData'));
                $('#uName,#n').text(myData[1]);
                $('#uMobile').text(myData[3]);
                $('#uEmail').text(myData[2]);
                $('#uType,#t').text(myData[4]);
            }else{
                location.href="login.html"; 
            }
             
            

            if(myData.length>6){
              
              $('li.agent,.coordinator').css({'display':'none'});
              $('#tbl-data').append('<tr><td>الهاتف</td><td>'+myData[7]+'</td></tr><tr><td>الوكالة</td><td>'+myData[5]+'</td></tr>');
            } else{
                if(myData[5]==2)
                $('.coordinator').css({'display':'none'});
            }






            $('#save-location').click(function(){

                //coordinator location...
                 urlLink='';
                if(myData.length<8){
                    //Coordinator goes here...
                 urlLink='http://lab.ysys.co/agents/staff_loc.php'; 
                }else{
                    //Agent goes here...
                 urlLink='http://lab.ysys.co/agents/agent_loc.php';
                }



                                 
                                 if($("#lat").val()!="" && $("#long").val()!="" && $("#near").val()!="" && $("#agent-g option:selected").val() != "0" && $("#agent-d option:selected").val() != "0")
                                 {
             
                                     
                                 $.alertable.confirm('سيتم إسقاط الموقع بناء على هذه البيانات, هل أنت موافق ؟').then(function() {
             
                                 if(checkConnection()){
             
             
                                     const options = {
                                         method: 'post',
                                         data: {op:'new',myId:myData[0], near: $('#near-place').val().trim(), g: $("#agent-g option:selected").val(), d: $("#agent-d option:selected").val(),sub:$("#agent-s option:selected").val(),v:$("#agent-v option:selected").val(),pos:JSON.stringify(pos)}
                                     // headers: { Authorization: 'OAuth2: token' }
                                     };
                                     
                                     cordova.plugin.http.sendRequest(urlLink, options, function(response) {
                                         // prints 200
                                         //console.log(response.status);
                                         //alert(response.data);
                                         $('#near-place').val('');
                                         $("#lat").val('');
                                         $("#long").val('');
                                         $.alertable.alert(response.data);
             
                                     }, function(response) {
             
             
                                         $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                                         // prints 403
                                         //console.log(response.status);
                                     
                                         //prints Permission denied
                                         //console.log(response.error);
                                     });
             
                                 }else{
                                     $.alertable.alert("تأكد من إتصالك بالإنترنت");
                                 }
             
                                 });
             
                                 }else{
                                 $.alertable.alert("يُرجى ملئ كافة البيانات");
                                 }

                                 
});

            $("#get-location-by-map").click(function(){
                $("#map-wrapper").fadeIn(600);
            });

   
        $(".fader").delay(500).fadeOut(500);
           
        $(".agent").click(function(){
            $(this).children(".sub-menu").slideToggle(400);
            $('.coordinator').children(".sub-menu").slideUp(400);
        });

        $(".coordinator").click(function(){
            $(this).children(".sub-menu").slideToggle(400);
            $('.agent').children(".sub-menu").slideUp(400);
        });

        $(".pass-change .title").click(function(){
            $(".toggle-pass").slideToggle(600);
            $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        });

        $(".icon-eye").click(function(){
            $(this).toggleClass("icon-eye-off icon-eye");
            if($(this).hasClass("icon-eye-off"))
            {
                $(this).siblings("input").attr('type', 'text'); 
            }
            else
            {
                $(this).siblings("input").attr('type', 'password'); 
            }
        });
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



            $('#save-coor').click(function(){

                if($("#coor-name").val().trim().length > 0 && $("#coor-mobile").val().trim().length > 0 && $("#coor-email").val().trim().length > 0 && $("#agent-g option:selected").val() != "0" && $("#agent-d option:selected").val() != "0")
                {
                    
                    if(checkConnection()){
    
    
                                
     $.alertable.confirm('سيتم إنشاء منسق جديد في حال موافقتك').then(function() {

     
                        const options = {
                            method: 'post',
                            data: {op:'new', name: $('#coor-name').val().trim(), email: $('#coor-email').val().trim(), mobile: $('#coor-mobile').val().trim(),pwd:$("#coor-pass").val().trim(),'g': $("#agent-g option:selected").val(),'d':$("#agent-d option:selected").val(),'sub':$("#agent-s option:selected").val(),'v':$("#agent-v option:selected").val(),uid:myData[0],perm:1,state:1,type:1}
                           // headers: { Authorization: 'OAuth2: token' }
                          };
                           
                          cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/staff.php', options, function(response) {
                            // prints 200
                            //console.log(response.status);
                            //alert(response.data);
                            $('#coor-name').val('');
                            $("#coor-mobile").val('');
                            $("#coor-email").val('');

                            $.alertable.alert(response.data);
    
                          }, function(response) {
    
    
                            $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                            // prints 403
                            //console.log(response.status);
                           
                            //prints Permission denied
                            //console.log(response.error);
                          });
                        
                        });//confirm Box...

                    }else{
                        $.alertable.alert("تأكد من إتصالك بالإنترنت");
                    }

                    
                }else{
                    $.alertable.alert("يُرجى ملئ كافة البيانات");
                }
           


            });
   
            var pos;

            //Get current location...
            var onSuccess = function(position) {

               pos ={
                    lat:position.coords.latitude,
                    lang:position.coords.longitude
                };

                 $('#lat').val(position.coords.latitude);
                 $('#long').val(position.coords.longitude);
                /*alert('Latitude: '          + position.coords.latitude          + '\n' +
                      'Longitude: '         + position.coords.longitude         + '\n' +
                      'Altitude: '          + position.coords.altitude          + '\n' +
                      'Accuracy: '          + position.coords.accuracy          + '\n' +
                      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                      'Heading: '           + position.coords.heading           + '\n' +
                      'Speed: '             + position.coords.speed             + '\n' +
                      'Timestamp: '         + position.timestamp                + '\n');*/
            };
        
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                //alert('sdsds');
                //calldialog();
            }
        

            function calldialog() {
                   
                document.addEventListener("deviceready",function() {
              
			  cordova.plugins.dialogGPS("تم إيقافه , يجب إعادة تفعيلة GPS",//message
                                      "استخدم GPS ، مع واي فاي أو 3G.",//description
                                      function(buttonIndex){//callback
                                        switch(buttonIndex) {
                                          case 0: break;//cancel
                                          case 1: break;//neutro option
                                          case 2: break;//user go to configuration
                                        }},
                                        "رجاء",//title
                                        ["إلغاء","لاحقا","إنتقال"]);//buttons
                   });
               
              }

              



            //check if GPS is Open or Not.

            if(location.pathname.split("/").slice(-1)=="location.html"){
              cordova.plugins.diagnostic.isGpsLocationEnabled(function(enabled){
                if(!enabled){
					setTimeout(function(){
		  
		               calldialog();
	                 },2000);
				}
                      
			   

            }, function(error){
                console.error("The following error occurred: "+error);
            }); 
        }


            //cordova.plugins.diagnostic.switchToLocationSettings();
        
           $('#location-graber').click(function(){
            
            if(checkConnection()){
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
            }else{
                $.alertable.alert("تأكد من إتصالك بالإنترنت"); 
            }
           });
            


     $("#save-agent").click(function(){
        
        //alert(JSON.stringify(pos));
        
        if($("#agent-title").val().trim().length > 0 && $("#agent-mobile").val().trim().length > 0 && $("#agent-g option:selected").val() != "0" && $("#agent-d option:selected").val() != "0" && $("#agent-type option:selected").val() != "0")
            {
                
         $.alertable.confirm(' في حال موافقتك سيتم إنشاء وكيل').then(function() {

                if(checkConnection()){

                   // alert(JSON.stringify(pos)+'----'+$("#type option:selected").val());
                    var contacts={
                        'mobile':$("#agent-mobile").val().trim(),
                        'phone':$("#agent-phone").val().trim(),
                        'another-phone':$("#agent-another-num").val().trim()
                    };

                    const options = {
                        method: 'post',
                        data: {op:'new', title: $('#agent-title').val().trim(), g: $("#agent-g option:selected").val(), d: $("#agent-d option:selected").val(),sub:$("#agent-s option:selected").val(),v:$("#agent-v option:selected").val(),type:$("#agent-type option:selected").val(),contacts:JSON.stringify(contacts),uid:myData[0]}
                       // headers: { Authorization: 'OAuth2: token' }
                      };
                       
                      cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/agents.php', options, function(response) {
                        // prints 200
                        //console.log(response.status);
                        //alert(response.data);
                        $('#title').val('');
                        $("#agent-phone").val('');
                        $("#agents-another-phone").val('');
                        $("#agent-mobile").val('');
                        $.alertable.confirm(response.data).then(function() {
                          location.href="agent-account.html";
                        });
                        

                      }, function(response) {


                        $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                        // prints 403
                        //console.log(response.status);
                       
                        //prints Permission denied
                        //console.log(response.error);
                      });

                }else{
                    $.alertable.alert("تأكد من إتصالك بالإنترنت");
                }

            });

            }else{
                $.alertable.alert("يُرجى ملئ كافة البيانات");
            }


                
            });


            var place_no='';


            $("#create-agent-user").click(function(){
        
                //alert(JSON.stringify(pos));
                
                if($("#agent-user-name").val().trim().length > 0 && $("#agent-user-mobile").val().trim().length > 0 && $("#agent-user-email").val().trim().length > 0 && $("#agent-user-pass").val().trim().length > 0 && $("#agent-user-job-title option:selected").val() != "0" && $("#agent-user-agency option:selected").val() != "0")
                    {
                        
                        if(checkConnection()){
        
        
                                    
         $.alertable.confirm('سيتم إنشاء مستخدم للوكالة في حال موافقتك').then(function() {

         
                            const options = {
                                method: 'post',
                                data: {op:'new', name: $('#agent-user-name').val().trim(),type:$("#agent-user-job-title option:selected").val(),agent:$("#agent-user-agency option:selected").val(), phone: $('#agent-user-phone').val().trim(), email: $('#agent-user-email').val().trim(), mobile: $('#agent-user-mobile').val().trim(),pwd:$("#agent-user-pass").val().trim()}
                               // headers: { Authorization: 'OAuth2: token' }
                              };
                               
                              cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/agent-users.php', options, function(response) {
                                // prints 200
                                //console.log(response.status);
                                //alert(response.data);
                                $('#agent-user-name').val('');
                                $("#agent-user-phone").val('');
                                $("#agent-user-mobile").val('');
                                $("#agent-user-email").val('');

                                $.alertable.alert(response.data);
        
                              }, function(response) {
        
        
                                $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                                // prints 403
                                //console.log(response.status);
                               
                                //prints Permission denied
                                //console.log(response.error);
                              });
                            
                            });//confirm Box...

                        }else{
                            $.alertable.alert("تأكد من إتصالك بالإنترنت");
                        }

                        
                    }else{
                        $.alertable.alert("يُرجى ملئ كافة البيانات");
                    }
                        
                    });


                    $('#refresh-data').click(function(){

                        if(checkConnection()){
        
        
                            const options = {
                                method: 'post',
                                data: {place:place_no}
                               // headers: { Authorization: 'OAuth2: token' }
                              };
                               
                              $('.icon-spin3').addClass('animate-spin');
                              $('#refresh-data').attr('disabled','disabled');
                              
                             // alert(place_no);
                              cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/reload.php', options, function(response) {
                                
                               
                                $('#agent-user-agency').children().remove()
                                $('#agent-user-agency').append(response.data.split(',')[0]);

                                $('#agent-user-job-title').children().remove()
                                $('#agent-user-job-title').append(response.data.split(',')[1]);

                                $('select').niceSelect('update');

                                $('.icon-spin3').removeClass('animate-spin');
                                $('#refresh-data').removeAttr('disabled');
                              
                                $.alertable.alert('تم تحديث قائمة الوكلاء');
                              }, function(response) {
        
        
                                $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                                // prints 403
                                //console.log(response.status);
                               
                                //prints Permission denied
                                //console.log(response.error);
                              });
        
                        }else{
                            $.alertable.alert("تأكد من إتصالك بالإنترنت");
                        }

                    });


               //Check data for user while still wifi connection.
        /* if(location.pathname.split("/").slice(-1)=="agent-account.html" || location.pathname.split("/").slice(-1)=="agent-rating.html"){      
               if(checkConnection()){
        
        
                const options = {
                    method: 'post',
                    data: {place:place_no}
                   // headers: { Authorization: 'OAuth2: token' }
                  };
                   
                  cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/reload.php', options, function(response) {
                    
                   
                    $('#agent-user-agency').children().remove()
                    $('#agent-user-agency').append(response.data.split(',')[0]);

                    $('#agent-user-job-title').children().remove()
                    $('#agent-user-job-title').append(response.data.split(',')[1]);

                    $('select').niceSelect('update');

                    $.alertable.alert('تم تحديث قائمة الوكلاء');
                  }, function(response) {


                    $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                    // prints 403
                    //console.log(response.status);
                   
                    //prints Permission denied
                    //console.log(response.error);
                  });

            }else{
                $.alertable.alert("يرجى التحقق من إتصالك بالانترنت و من ثم أضغط زر تحديث");
            }


        }*/
            //end 



            $('#agent-g').change(function(){
                const options = {
                    method: 'post',
                    data: {g: $("#agent-g option:selected").val()}
                   // headers: { Authorization: 'OAuth2: token' }
                  };
                   
                  cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/getDist.php', options, function(response) {
                    $('#agent-d').children().remove();  
                  $('#agent-d').append(response.data);
                  $('select').niceSelect('update');
                  //alert(response.data);

                  }, function(response) {
                  
                    $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                  
                });

            });


            $('#agent-d').change(function(){
                const options = {
                    method: 'post',
                    data: {d: $("#agent-d option:selected").val()}
                   // headers: { Authorization: 'OAuth2: token' }
                  };
                   
                  cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/getSub.php', options, function(response) {
                    $('#agent-s').children().remove();  
                  $('#agent-s').append(response.data);
                  $('select').niceSelect('update');
                  //alert(response.data);

                  }, function(response) {
                  
                    $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                  
                });

            });


            $('#agent-s').change(function(){
                const options = {
                    method: 'post',
                    data: {s: $("#agent-s option:selected").val()}
                   // headers: { Authorization: 'OAuth2: token' }
                  };
                   
                  cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/getLoc.php', options, function(response) {
                    $('#agent-v').children().remove();  
                  $('#agent-v').append(response.data);
                  $('select').niceSelect('update');
                  //alert(response.data);

                  }, function(response) {
                  
                    $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                  
                });

            });



           $('#resetPass').click(function(){


            var resetUrl='';

            if(myData.length<8){
                //Coordinator goes here...
                resetUrl='http://lab.ysys.co/agents/reset.php'; 
            }else{
                //Agent goes here...
                resetUrl='http://lab.ysys.co/agents/agentReset.php';
            }


            //Check session.
            if(localStorage.getItem('uData')!=null){

                if($('#pass').val()!="" && $('#new-pass').val()!="" && $('#new-pass-confirm').val()!=""){

                    if(checkConnection()){    
                      
                        if($('#new-pass').val() != $('#new-pass-confirm').val()){
                            $.alertable.alert('! كلمتا المرور غير متطابقة ');
                        }else{
                            
                            $.alertable.confirm('سيتم إعتماد كلمة المرور الجديدة, هل أنت موافق ؟').then(function() {
                        
                        const options = {
                            method: 'post',
                            data: {myId:myData[0], pass: $('#pass').val().trim(), newPass: $("#new-pass").val().trim()}
                           // headers: { Authorization: 'OAuth2: token' }
                          };
                          
                           
                          $('#save').text(' تدقيق ');
                          $('.spinx').addClass('icon-spin4 animate-spin');
                          $('.paper').removeClass('icon-paper-plane');

                          cordova.plugin.http.sendRequest(resetUrl, options, function(response) {
                            // prints 200
                            //console.log(response.status);
                            $.alertable.alert(response.data).always(function() {
                                location.href="index.html";
                              });
                          
                              $('#save').text('حفظ');
                              $('.spinx').removeClass('icon-spin4 animate-spin');
                              $('.paper').addClass('icon-paper-plane');
                            
                          }, function(response) {
    
    
                            // prints 403
                            //console.log(response.status);
                           
                            //prints Permission denied
                            $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                          });




                      }, function() {
                        // Cancel was selected
                      }).always(function() {
                        // Modal was dismissed
                      });

                  }


                }else{
                    $.alertable.alert('تأكد من إتصالك بالانترنت');
                }

                }else{
                    $.alertable.alert('تأكد من إدخالك البيانات فضلا');
                }


              }//check session
           });


            $("#type").change(function(){
                alert($(this).val());
            });
    
          /*  $("button").click(function(){
                alert($("#location").val());
            });*/
    
            $("#gps").click(function(){
                $("#spin").css({
                   'transform':'scale(28)',
                   'background': '#fff'
                }).hide(600,function(){
                    $("#get-location").css({
                        'display': 'flex'
                    });
                });
            });

            $(".toggle-token").click(function(){
                $(this).css({
                    background: '#b2ae7e',
                    color: '#fff'
                }).siblings().css({
                    background: '#fff',
                    color: '#505050'
                }).parent().parent().attr("rate",$(this).text());
            });

            $("textarea.shifter").focus(function(){
                $(this).siblings("label").css({
                    "color" : "#b2ae7e",
                    "font-size" : "12px",
                    "font-weight" : "bold",
                    "top" : "-15px",
                    "padding" : "0 5px",
                    "background" : "#fff"
                });
                $(this).parent().css({
                    "border-color" : "#b2ae7e"
                });
            });
            $("textarea.shifter").blur(function(){
                if($(this).val().trim().length < 1)
                {
                    $(this).siblings("label").css({
                        "color" : "#b7b5b5",
                        "font-size" : "18px",
                        "font-weight" : "normal",
                        "top" : "10%",
                        "padding" : "0",
                        "background" : "transparent"
                    });
                    $(this).parent().css({
                    "border-color" : "#b7b5b5"
                });
                }
            });

            var rate=[];
            var vals='';
            var isExisted = true;

            $(".tab-next-btn").click(function(){
                var rateProgress = parseInt($("#progress #start").text());
                var currentTab = $("#step-"+rateProgress);
                
              /*  $('.tabs .active').children().find('.toggle-token-type-rating').each(function(){
                  if($(this).attr('rate')){
                    isExisted = true;
                   }else{
                   isExisted = false;
                   break;
                    }
                });*/

               
               // alert($('.tabs .active').children().find('.toggle-token-type-rating').attr('rate'));
               if(isExisted && $('#agent-user-agency option:selected').val()!=0){ 
                    vals+="{";
                    $('.tabs .active').children().find('.toggle-token-type-rating').each(function(){
                        //alert($(this).attr('rate'));
                    vals+='"'+$(this).find('.rating-point').text()+'":"'+$(this).attr('rate')+'",';
                    });

                    vals = vals.substring(0,vals.length-1);
                    vals+="}";
                    
                    rate.push(JSON.stringify(vals));

                    
                

                currentTab.fadeOut(500,function(){
                    currentTab.removeClass("active");
                });
                rateProgress = rateProgress + 1;
                $("#step-"+rateProgress).delay(200).fadeIn(500,function(){
                    $(this).addClass("active");
                    $("#progress #start").text(rateProgress);
                });
             

            }else
            $.alertable.alert('تأكد من تقييمك من كل النقاط او إنك لم تختار وكيل');   
            });




            $(".tab-prev-btn").click(function(){
                var rateProgress = parseInt($("#progress #start").text());
                var currentTab = $("#step-"+rateProgress);

                rate.pop();
                //alert(rate);

                currentTab.fadeOut(500,function(){
                    currentTab.removeClass("active");
                });
                rateProgress = rateProgress - 1;
                $("#step-"+rateProgress).delay(200).fadeIn(500,function(){
                    $(this).addClass("active");
                    $("#progress #start").text(rateProgress);
                });
            });

            
      

            $('#rate-save-btn').click(function(){
            
                    //alert('sjdsahdkj');
             $.alertable.confirm(' في حال موافقتك سيتم إنشاء تقييم').then(function() {
    
                    if(checkConnection()){
    
                        const options = {
                            method: 'post',
                            data: {agent:$('#agent-user-agency option:selected').val(),rate:JSON.stringify(rate),uid:myData[0]}
                           // headers: { Authorization: 'OAuth2: token' }
                          };
                           
                          cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/rate.php', options, function(response) {
                            // prints 200
                            //console.log(response.status);
                            //alert(response.data);
                            $.alertable.alert(response.data);
                            rate=[];
                            vals="";
                           // location.href="agent-rating.html";
                            
                            
    
                          }, function(response) {
    
    
                            $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                            // prints 403
                            //console.log(response.status);
                           
                            //prints Permission denied
                            //console.log(response.error);
                          });
    
                    }else{
                        $.alertable.alert("تأكد من إتصالك بالإنترنت");
                    }
    
                });
                

                
            });


            

            if(location.pathname.split("/").slice(-1)=="agent-account.html" || location.pathname.split("/").slice(-1)=="agent-rating.html"){

                
            $('#agent-g').change(function(){

               if($("#agent-g option:selected").val()!=0){
                place_no='';
                place_no+='a_g=';
                place_no+= $("#agent-g option:selected").val();
               // alert(place_no);
                
               } 
                const options = {
                    method: 'post',
                    data: {g: $("#agent-g option:selected").val()}
                   // headers: { Authorization: 'OAuth2: token' }
                  };
                   
                  cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/getDist.php', options, function(response) {
                    $('#agent-d').children().remove();  
                  $('#agent-d').append(response.data);
                  $('select').niceSelect('update');
                  //alert(response.data);

                  }, function(response) {
                  
                    $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                  
                });

            });


            $('#agent-d').change(function(){

                if($("#agent-d option:selected").val()!=0){
               
                place_no='';
                place_no+='a_d=';
                place_no+= $("#agent-d option:selected").val();
                }

                //alert(place_no);

                const options = {
                    method: 'post',
                    data: {d: $("#agent-d option:selected").val()}
                   // headers: { Authorization: 'OAuth2: token' }
                  };
                   
                  cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/getSub.php', options, function(response) {
                    $('#agent-s').children().remove();  
                  $('#agent-s').append(response.data);
                  $('select').niceSelect('update');
                  //alert(response.data);

                  }, function(response) {
                  
                    $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                  
                });

            });


            $('#agent-s').change(function(){
               
                if($("#agent-s option:selected").val()!=0){
               
                place_no='';
                place_no+='a_sub=';
                place_no+= $("#agent-s option:selected").val();
                //alert(place_no);
                }

                const options = {
                    method: 'post',
                    data: {s: $("#agent-s option:selected").val()}
                   // headers: { Authorization: 'OAuth2: token' }
                  };
                   
                  cordova.plugin.http.sendRequest('http://lab.ysys.co/agents/getLoc.php', options, function(response) {
                    $('#agent-v').children().remove();  
                  $('#agent-v').append(response.data);
                  $('select').niceSelect('update');
                  //alert(response.data);

                  }, function(response) {
                  
                    $.alertable.alert('ربما يكون لديك بطىء بالشبكة');
                  
                });

            });


            $('#agent-v').change(function(){
                
                if($("#agent-v option:selected").val()!=0){
               
                place_no='';
                place_no+='a_v=';
                place_no+= $("#agent-v option:selected").val();
                //alert(place_no);
                }
            });





            }


        });

      

      
    }
    
}