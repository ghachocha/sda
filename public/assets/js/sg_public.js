/*
 * Author: Amani J. Ghachocha
 * Content: Public pages scripts
 */

 var host = "http://localhost:8000/";

 $('document').ready(function(){

    // JQuery UI date picker
     $(function(){
        $('.sg_datepicker').datepicker({
          changeMonth: true,
          changeYear: true,
          dateFormat: "dd-mm-yy"
        });
     });

    // Remove overlay on page load
    removeOverlay();

    // Fix content height
    fixContentHeight('.sg_fixed_min_height');

    // Apply margin 
    applyContentMargin('.sg_margin');

    // Apply content padding
    applyContentPadding('.sg_padding');

    // Apply position relative
    applyContentPostionRelative('.sg_position_relative');

   // Collapse paragraph with read more by default
    collapseReadMoreDefault(".sg_paragraph_read_more");

   // Break long paragraphs
   breakLongParagraph(".sg_text_minimize");

     // Enable tooltip
     $('.sg_tooltip').tooltip();

     // Toggle school list
     $('.sg_collapse_icon').bind('click',toggleSchoolList);
      
     // Highlight vertical navigateion links
     $('.sg_vertical_nav a').bind('click', function(e){
         $(e.target).css('background', 'lightblue');
     });

     $('section').load(function(){
         alert('Loaded');
     });

     // Show promotion on page load
    $('#sg_promo_page').load(function(){
      console.log('Loaded');
       var targetContent = $('#sg_promo_page').data('target');
       var targetOverlay = $('#sg_promo_page').data('active-overlay');
       if(targetOverlay == null){
          setOverlay(targetContent);
       }else{
          setOverlay(targetContent,targetOverlay);
       }
    });

     // Toggle check or radio
     var source = '.sg_toggle_radio input[type=radio], .sg_toggle_check input[type=checkbox]';
     toggleRow(source);
     $(source).click(function(e){
          toggleRow(source);
     });

     var unToggleSource = '.sg_untoggle_radio input[type=radio], .sg_untoggle_check input[type=checkbox]';
     unToggleRow(unToggleSource);
     $(unToggleSource).click(function(e){
          unToggleRow(unToggleSource);
     });


     // Bootstrap dismiss-popover
     $('.popover-dismiss').popover({
        trigger: 'focus'
     });
     // Toggle Comment

     // Toggle live chat
     $('.sg_live_chat_collapse').bind('click',toggleLiveChart);
     $('.sg_cancel_live_chat').bind('click',function(e){
         e.preventDefault();
         $('.sg_live_text').slideToggle('slow');
     });

     // Toggle vertical navigation for small screens
     $('.sg_nav_collapse').bind('click',toggleVerticalNav);

     // Submit login form
     /*
     $('#sg_login').submit(function(e){
           e.preventDefault();
           var user_email = $('#sg_login input[name=email]').val();
           var user_password = $('#sg_login input[name=password]').val();
           var message;
           if(user_email == "" && user_password == ""){
                 //alert('Please enter correct email or password');
                 message = '<p><span class="glyphicon glyphicon-info-sign"></span> Please enter valid email or password</p>';
                 $('.sg_failure_text').html(message);
                 $('.sg_failure_text').slideDown('slow');
           }else{
               $('.sg_failure_text').slideUp();
               $('.sg_progress_bar').slideDown();
               
               $.post('http://localhost/scholargate/index.php/public/user/authenticate_AJAX_login',
                     { 
                        email: user_email,
                        password: user_password
                     },
                     function(data,status){
                    if(status == "success"){
                         $('.sg_progress_load').css('width','100%');
                         $('.sg_success_text').css('color','#72BB53');
                         $('.sg_success_text').css('margin-top','10px');
                         message = '<p><span class="glyphicon glyphicon-ok-sign"></span> Logged in successfully</p>';
                         setTimeout(function(){
                            $('.sg_progress_bar').slideUp('slow');
                            $('.sg_success_text').html(message);
                         },2000);
                         setTimeout(function(){changeToPage('/scholargate/index.php/public/home');},3000);
                    }
               }); 
           }
      }); */

     // Load page with AJAX
     $('.sg_nav_link').click(function(e){
        e.preventDefault();
        changeToPage(e.target.href);
        //alert(e.target.href);
     });

     // Collapse content summary and display read more
     $('.sg_content_summary').each(function(){
        var length = $(this).data('character-length');
        var target = $(this).data('read-more-target');
        var link = '<a class="sg_read_more_link_block sg_read_more_'+$(this).data('read-more-position')+'" href="'+target+'">Read More <span class="glyphicon glyphicon-circle-arrow-right"></span></a>';
        var content = $(this).text();
        var buffer = "";
        if(content.length > length){
          for(var i = 0; i < length; i++){
            buffer += content[i];
          }
          buffer += "...";
          $(this).text(buffer);
          $(this).append(link);
        }
        
     });

      // Activate banner animation
      var animation = $("#sg_banner_slider .sg_animation_item");
      var numSlides = animation.length;
      var activeSlide = 0;
      var speed = 10000;
      var fade = 1000;
      var pause = false;
      var timer = setInterval(rotate, speed);
      animation.eq(activeSlide).show();

      $(".sg_slider_prev").click(function(event) {
       activeSlide--;
       forceRotate();
       event.preventDefault();
      });

      $(".sg_slider_next").click(function(event) {
       activeSlide++;
       forceRotate();
       event.preventDefault();
      });

      function rotate() {
       activeSlide++;
       if (activeSlide == numSlides) {
          activeSlide = 0;
       }

       if (activeSlide < 0) {
         activeSlide = numSlides - 1;
       }

       animation.not(activeSlide).fadeOut(fade);
       animation.eq(activeSlide).fadeIn(fade);
      }

      function forceRotate(){
         if (activeSlide == numSlides) {
          activeSlide = 0;
         }

         if (activeSlide < 0) {
           activeSlide = numSlides - 1;
         }

         animation.not(activeSlide).fadeOut(fade);
         animation.eq(activeSlide).fadeIn(fade);
      }

      // Pause banner animations on hover 
      $("#sg_banner_slider, .sg_slider_prev, .sg_slider_next").hover(function() {
         clearInterval(timer);
         pause = true;
      }, function() {
          timer = setInterval(rotate, speed);
          pause = false;
      });

     // Activate editable textarea
     tinymce.init({
       selector: ".sg_editable_textarea",
       content_css : host + "assets/css/sg_editable_textarea_style.css",
     });
     // Auto-focus WYSIWYG editor
     tinyMCE.activeEditor.focus();

     // Assign tag editor to multiple emails input
      $('.sg_tags_email').tagEditor({
        placeholder: "Enter email address"
      });
      
      // Assign tag editor to normal multiple input
      $('.sg_tags_input').tagEditor();
 });


// Collapse paragraph with read more
$(".classical-read-more").click(function(e){
    expandReadMore(e.target);
})

// Expand paragraph with read more
$(".classical-read-more-close").click(function(e){
    readMoreClose(e.target);
})
     
// Remove overlay when clicked div.sg_overlay, 
$('.sg_close_overlay, .sg_abort_action').click(removeOverlay);

// Fade image caption in and out on image hover
$('.sg_school_photo img').hover(function(){
   $('.sg_school_photo .sg_carousel_caption').stop(true).slideToggle('500');
});

// Fade image caption in and out on image hover wrapped in image wrapper
$('.sg_img_wrapper').hover(function(e){
    $(e.target).children('.sg_img_caption_fade').stop(true).slideToggle('500');
});

// Enlarge small image on hover relative to screen position
$('.sg_img_lg').hover(function(e){
    if($(window).width() > 480){
       var img = '<img src="'+e.target.src+'" class="sg_img_lg_after">';
       if(($(window).width() - ($(e.target).offset().left + $(e.target).width())) > 400){
          $(img).insertAfter(e.target);
       }else{
          $(img).insertBefore(e.target);
       }
       $(e.target).siblings('.sg_img_lg_after').fadeIn(400);
    }
}, function(e){
   //if($(e.target).siblings('.sg_img_lg_after').is(':hover') == false){
      $(e.target).siblings('.sg_img_lg_after').fadeOut(500).remove();
   //}  
});

// Remove enlarged image on other elements click
$(':not(.sg_img_lg_after)').click(function(){
   if($('.sg_img_lg_after').is(':visible')){
      $('.sg_img_lg_after').fadeOut(200).remove();
   }
});

function changeToPage(page){
    window.location.replace(page);
}

// Toggle overlay
 $('.sg_toggle_overlay').click(function(e){
     e.preventDefault();
     var targetContent = $(e.target).data('target');
     var targetOverlay = $(e.target).data('active-overlay');
     if(targetOverlay == null){
        setOverlay(targetContent);
     }else{
        setOverlay(targetContent,targetOverlay);
     }
     
 });

function setOverlay(activeContent, activeOverlay){
  var targetActiveContent = '#'+activeContent;
  if(activeOverlay == null){
     if(!$('.sg_overlay').is(':visible')){
       $('.sg_overlay').fadeIn();
       $('.sg_overlay '+targetActiveContent).slideDown();
     }
  }else{
     if(!$('#'+activeOverlay).is(':visible')){
       $('#'+activeOverlay).fadeIn();
       $('#'+activeOverlay+' '+targetActiveContent).slideDown();
     }
  }
}

function removeOverlay(){
  if($('.sg_overlay').is(':visible')){
     $('.sg_overlay').fadeOut();
     $('.sg_overlay .sg_overlay_content').slideUp();
  }
}

function toggleSchoolList(){
	$('.sg_schools_list').slideToggle('slow');
}

function toggleLiveChart(){
  $('.sg_live_text').slideToggle('slow');
}


function toggleVerticalNav(){
    $('.sg_vertical_nav').animate({width:'toggle'},300);
    /*
    if($('.sg_vertical_nav').is(':visible')){
       $('.sg_vertical_nav').show("slide",{direction: "left"}, 1000);
    }else{
       $('.sg_vertical_nav').hide("slide",{direction: "right"}, 1000);
    } */
    
}

function changePage(source,target){
    $(source).click(function(e){
        e.preventDefault();
        $(source).load(target);
    });
}

function expandMainNav(division){
    $(division).slideDown(1200);
}


// Display collapsed row when checkbox above is checked
function toggleRow(source){
    // var target = null;
     $(source).each(function(){
           var target = '#'+$(this).parent().parent().data('target');
           if($(this).is(':checked')){
              $(target).slideDown();
           }else{
              $(target).slideUp();
           }
     });
}

// Untoggle row
function unToggleRow(source){
    // var target = null;
     $(source).each(function(){
           var target = '#'+$(this).parent().parent().data('untoggle-target');
           var tempTarget = '#'+$(this).parent().parent().data('temp-untoggle-target');
           if(target != null){
              if($(this).is(':checked')){
                $(target).slideUp();
              }
           }

           if(tempTarget != null){
              if($(this).is(':checked')){
                $(tempTarget).slideUp();
              }else{
                $(tempTarget).slideDown();
              }
           }
     });
}



// Show or collapse read more on paragraphs
function collapseReadMoreDefault(target){
   $(target).each(function(){
       var paragraph = $(this).text();
       var characters = $(this).attr('data-text-length');
       if(paragraph.length > characters){
           var link = '<span class="classical-read-more">Read more</span>';
           var bufferVissible = '<span class="classical-read-more-visible">';
           var bufferHidden = '<span class="classical-read-more-hidden">';
           bufferHidden += paragraph + '<span class="classical-read-more-close">Close</span></span>';

           for(var i=0; i < characters; i++){
              bufferVissible += paragraph[i];
           }
            
           bufferVissible += '<span class="classical-read-more-dots">...</span></span>'+ link + bufferHidden; 
           $(this).html(bufferVissible);
           //console.log("Buffer: "+bufferVissible+" Buffer length: " +bufferVissible.length);
       }
   }); 
}

// Breal long paragraphs
function breakLongParagraph(target){
   $(target).each(function(){
       var paragraph = $(this).text();
       var characters = $(this).attr('data-text-length');
       if(paragraph.length > characters){
           var bufferVissible = '';

           for(var i=0; i < characters; i++){
              bufferVissible += paragraph[i];
           }
            
           bufferVissible += '...'; 
           $(this).html(bufferVissible);
           //console.log("Buffer: "+bufferVissible+" Buffer length: " +bufferVissible.length);
       }
   }); 
}

function expandReadMore(target){
    $(target).siblings(".classical-read-more-visible").slideUp();
    $(target).siblings(".classical-read-more-hidden").slideDown('slow');
    $(target).hide();
}

function readMoreClose(target){
   $(target).parent().slideUp('slow');
   $(target).parent().siblings(".classical-read-more-visible").slideDown('slow');
   $(target).parent().siblings(".classical-read-more").show();
}

// Fix content height
function fixContentHeight(target){
   $(target).each(function(){
       var height = $(this).attr('data-min-height');
       $(this).css('min-height',height+'px');
   });
}

// Apply content margin 
function applyContentMargin(target){
   $(target).each(function(){
      var top = $(this).attr('data-margin-top');
      var bottom = $(this).attr('data-margin-bottom');
      var left = $(this).attr('data-margin-left');
      var right = $(this).attr('data-margin-right');
      $(this).css('margin-top',top+'px');
      $(this).css('margin-bottom',bottom+'px');
      $(this).css('margin-left',left+'px');
      $(this).css('margin-right',right+'px');
   });
}

// Apply content padding 
function applyContentPadding(target){
   $(target).each(function(){
      var top = $(this).attr('data-padding-top');
      var bottom = $(this).attr('data-padding-bottom');
      var left = $(this).attr('data-padding-left');
      var right = $(this).attr('data-padding-right');
      $(this).css('padding-top',top+'px');
      $(this).css('padding-bottom',bottom+'px');
      $(this).css('padding-left',left+'px');
      $(this).css('padding-right',right+'px');
   });
}

function applyContentPostionRelative(target){
   $(target).each(function(){
      var top = $(this).attr('data-position-top');
      var bottom = $(this).attr('data-position-bottom');
      var left = $(this).attr('data-position-left');
      var right = $(this).attr('data-position-right');
      $(this).css('position','relative')
      $(this).css('top',top+'px');
      $(this).css('bottom',bottom+'px');
      $(this).css('left',left+'px');
      $(this).css('right',right+'px');
   });
}

// Save and continue on form submit
$('.sg_save_continue').click(function(e){
   e.preventDefault();
   var action = $(e.target).data('action');
   var form = $(e.target).data('target-form');
   $('#'+form).attr('action',action);
   $('#'+form).submit();
});

// Prompt action confirmation before proceeding
$('.sg_confirmation').click(function(e){
    e.preventDefault();
    var warning = $(e.target).data('warning');
    var target = $(e.target).attr('href');
    var overlayContent = $(e.target).data('overlay-content');
    $('#sg_confirmation_container #sg_confirmation_text').html(warning);
    $('#sg_confirmation_container .sg_proceed_action').attr('href',target);
    setOverlay(overlayContent);
});

// Pop add on page load
$('.sg_pop_onload_page').load(function(e){
    alert("hello");
    setTimeout(setOverlay($(e.target).data('overlay-pop-content')), 4000);
});

// Prompt action confirmation before proceeding
$('.sg_stop_notice').click(function(e){
    e.preventDefault();
    var notice = $(e.target).data('notice');
    var overlayContent = $(e.target).data('overlay-content');
    $('#sg_notice_container #sg_notice_text').html(notice);
    setOverlay(overlayContent);
});

// Toggle edit image caption
$('.sg_edit_image_caption').click(function(e){
    e.preventDefault();
    var originalCaption = $(e.target).data('caption-content');
    var image_id = $(e.target).data('caption-id');
    var target = $(e.target).data('target');
    setOverlay(target);
    $("#"+target+" input[name='caption']").val(originalCaption);
    $("#"+target+" input[name='image_id']").val(image_id);
});

// Toggle application enquery form
$('.sg_send_enquery').click(function(e){
    e.preventDefault();
    var target = $(e.target).data('target');
    var userId = $(e.target).data('user-id');
    var applicationId = $(e.target).data('application-id');
    var applicationTitle = $(e.target).data('application-title');
    $("#"+target+" input[name='application_id']").val(applicationId);
    $("#"+target+" input[name='application_title']").val(applicationTitle);
    $("#"+target+" input[name='user_id']").val(userId);
    if($(e.target).data('applicant-id') != null){
       var applicantId = $(e.target).data('applicant-id');
       $("#"+target+" input[name='applicant_id']").val(applicantId);
       $("#"+target+" input[name='guardian_id']").val(null);
    }else{
       var guardianId = $(e.target).data('guardian-id');
       $("#"+target+" input[name='guardian_id']").val(guardianId);
       $("#"+target+" input[name='applicant_id']").val(null);
    }
    setOverlay(target);    
});

// Toggle share current page link
$('.sg_share_page_link').click(function(e){
    e.preventDefault();
    var target = $(e.target).data('target');
    setOverlay(target);
    $("#"+target+" input[name='link']").val(window.location.href);
});

// Convert currency on change
$('.sg_cart_currency').bind('change',function(e){
   //var value = Math.round($(e.target).siblings('.sg_price').data('original-price')/$(e.target).val(),2);
   var originalPrice = $(e.target).siblings('.sg_price').data('original-price');
   var targetPrice = $(e.target).val();
   var value = Number(Math.round((originalPrice*targetPrice)+'e'+2)+'e-'+2);
   //console.log(value);
   $(e.target).siblings('.sg_price').html(value);
});

// Trigger file download via ajax
$('.sg_download').click(function(e){
    e.preventDefault();
    var target = $(e.target).attr('href');
    $.post(target,{
       file_path:$(e.target).data('target-file'),
       file_name:$(e.target).data('filename'),
       _token:$(e.target).data('token')
    },function(data, status){
       console.log("Status is: "+status+" Data: " + data);
    });
});

// Submit form with ajax
$('.sg_form_ajax').submit(function(e){
    e.preventDefault();
    var id = $(e.target).attr('id');
    var target = $(e.target).attr('action');
    var postData =  $(e.target).serialize();
    var element = "";
    
    var callAJAX = $.ajax({
        url: target,
        method: 'POST',
        data: postData,
        beforeSend: function(){
           element = '<span class="sg_blue sg_bold"><img width="25" height="25" src="'+host+'assets/img/system-img/pending.gif"> Please wait...</span>';
           if(id == null){
             $(e.target).children('.sg_ajax_messages').html(element).slideDown();
           }else{
             $(e.target).children('#'+id+' .sg_ajax_messages').html(element).slideDown();
           }
        },
        statusCode: {
          404: function(){
            alert( "Page not found" );
          },
          405: function() {
            alert("Technical problem occured");
          },
          500: function() {
            alert("Internal Server Error");
          }
  }
    });

    callAJAX.done(function(data, status){
        
        if(status == 'success'){
           element = '<div class="alert ';
           if(data.error_messages != null){
              element += 'alert-danger alert-dismissible" role="alert">';
              element += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
              element += '<span aria-hidden="true">&times;</span></button>';
              for(var i=0; i<data.error_messages.length; i++){
                element += '<p><img width="20" height="20" src="'+host+'assets/img/system-img/warning-01.png">';
                element += ' '+data.error_messages[i]+'</p>';
              }
           }else{
              element += 'alert-success alert-dismissible" role="alert">';
              element += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
              element += '<span aria-hidden="true">&times;</span></button>';
              for(var i=0; i<data.success_messages.length; i++){
                element += '<p><img width="20" height="20" src="'+host+'assets/img/system-img/ok.png">';
                element += ' '+data.success_messages[i]+'</p>';
              }  
           }
           element += '</div>';
           if(id == null){
               $(e.target).children('.sg_ajax_messages').html(element).slideDown();
           }else{
               $(e.target).children('#'+id+' .sg_ajax_messages').html(element).slideDown();
           }
        }
    });
});

$('.sg_toggle_all input[type=checkbox]').click(function(event){
     var target = event.target;
     var toggleId = $(this).parent().parent().attr('id');
     if($(this).prop('checked')){
        var checkMarks = $('.sg_mass_toggle').filter(function() { 
                             return $(this).data("toggle-source") == toggleId 
                          });
           checkMarks.each(function(){
              $(this).children('label').children('input[type=checkbox]').prop('checked',true);
           });
     }else{
        var checkMarks = $('.sg_mass_toggle').filter(function() { 
                             return $(this).data("toggle-source") == toggleId 
                          });
           checkMarks.each(function(){
              $(this).children('label').children('input[type=checkbox]').prop('checked',false);
           });
     }
});

$('.sg_close_ajax_messages').click(function(e){
    $(e.target).remove();
    $(e.target).siblings().remove();
    $(e.target).parent().slideUp();
});


// Toggle link highlight on hover
$('.sg_nav_link').hover(function(e){
   //$(e.target).parent().children('.sg_link_highlight').stop(true).slideToggle('0.1');
   if($(window).width() > 768){
      $(e.target).parent().children('.sg_link_highlight').stop(true).animate({width:'toggle'},350);
   }else if($(window).width() > 600 && $(window).width() < 769){
      $(e.target).parent().children('.sg_link_highlight').stop(true).animate({width:'toggle'},700);
   }else if($(window).width() > 481 && $(window).width() < 599){
      $(e.target).parent().children('.sg_link_highlight').stop(true).animate({width:'toggle'},500);
   }else{
      $(e.target).parent().children('.sg_link_highlight').stop(true).animate({width:'toggle'},480);
   }
});

// Toggle image caption on image hover
$('.sg_img_wrapper img').hover(function(e){
   $(e.target).siblings('.sg_img_caption_fade').stop(true).slideToggle('0.5');
})

// Multi value text area gesture
$('.sg_multi_value_textarea').keypress(function(e){
   if((e.keyCode || e.which) == 32){
      var value = '<div class="sg_textarea_multi_value"><span class="sg_textarea_value">' + e.target.value;
          value += '</span><span class="glyphicon glyphicon-remove"></span></div>';
      console.log($(e.target).val(value));
   }
});

// Public search
$('#sg_public_search').keypress(function(e){
  $('#sg_public_search_results').show()
   if(e.target.value == null){
            $('#sg_public_search_results').hide();
   }
   var target = $(e.target).data('target');
   $.post(target,{search_query: $(e.target).val(),_token:$(e.target).data('token') }, function(data, success){
        var results = '<div class="sg_search_results">';
        if(data.schools != null){
           var schools = '<div class="list-group">';
           for(var i = 0; i < data.schools.length; i++){
              schools += '<a class="list-group-item" href="http://localhost:8000/'+data.schools[i].hash_tag_name.toLowerCase()+'">';
              schools += '<span class="glyphicon glyphicon-home sg_icon"></span> ';
              schools += data.schools[i].name+'</a>';
           }
        }
        if(data.applications != null){
           var applications = "";
           for(var i = 0; i < data.applications.length; i++){
              applications += '<a class="list-group-item" href="http://localhost:8000/'+data.applications[i].school.hash_tag_name.toLowerCase()+'/applications/'+data.applications[i].id+'">';
              applications += '<span class="glyphicon glyphicon-envelope sg_icon"></span> ';
              applications += data.applications[i].title+' ('+data.applications[i].school.hash_tag_name.toLowerCase()+')</a>';
           }
        }
        if(data.issues != null){
           var issues = "";
           for(var i = 0; i < data.issues.length; i++){
              issues += '<a class="list-group-item" href="http://localhost:8000/issues/'+data.issues[i].id+'/'+data.issues[i].title.replace(/ /gi,'+')+'">';
              issues += '<span class="glyphicon glyphicon-comment sg_icon"></span> ';
              issues += data.issues[i].title+'</a>';
           }
        }
        results += schools+applications+issues+'</div>';
        $('#sg_public_search_results').html(results);
   });
});

// Search for school list on keypress
$('#sg_search_for_school').keypress(function(e){
     $('#sg_schools_search_results').show()
     if(e.target.value == null){
            $('#sg_schools_search_results').hide();
     }
     var target = $(e.target).data('target');
     $.post(target,{search_query: $(e.target).val(),_token:$(e.target).data('token') }, function(data, success){
          var results = '<div class="sg_search_results">';
          if(data.schools != null){
             var schools = '<div class="list-group sg_admin_nav">';
             for(var i = 0; i < data.schools.length; i++){
                schools += '<a class="list-group-item" href="http://localhost:8000/'+data.schools[i].hash_tag_name.toLowerCase()+'">';
                schools += '<span class="glyphicon glyphicon-home sg_icon"></span> ';
                schools += data.schools[i].name+'</a>';
             }
          }
          
          results += schools+'</div>';
          $('#sg_schools_search_results').html(results);
     });
});

// Auto submit form on select change
$('.sg_form_autosubmit').change(function(e){
   var target = $(e.target).data('form-target');
   $('#'+target).submit();
});

$(':not(#sg_public_search), :not(.sg_ajax_search_results_list), :not(#sg_schools_search_results)').click(function(e){
    if(e.target.value == null){
      $('#sg_public_search_results').fadeOut();
      $('.sg_ajax_search_results_list').fadeOut();
    }
});

$('.sg_search_box form').submit(function(e){
   e.preventDefault();
});

// Custom ajax search
$('.sg_ajax_search').keypress(function(e){
    var resultsContainer = $(e.target).data('results-target');
    var targetRoute = $(e.target).data('search-route');
    var token = $(e.target).data('token');
    $.post(targetRoute,{search_query:e.target.value,_token:token},function(data, success){
        var results = '<div class="list-group>';
        for(var i = 0; i < data.results.length; i++){
           results += '<a href="" class="list-group-item">'+data.results[i].title+'</a>';
        }
        results += '</div>';
        $(resultsContainer).css('position','absolute');
        $(resultsContainer).css('z-index','7500');
        $(resultsContainer).html(results);
    });
});

// Place upload image thumbnail
$('.sg_upload_img').change(function(e){
   var hasFileAPI = (window.File && window.FileReader);
    if(hasFileAPI){
        var files = e.target.files;
        var file = e.target.files[0];
        var name = file.name;
        var size = file.size;
        var type = file.type;
        var thumbTarget = $(e.target).data('thumb-target');

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(evt){
           if(file.type.match('image.*')){
             var image = new Image();
             image.height = 55;
             image.width = 55;
             image.src = evt.target.result;
             $('#'+thumbTarget).empty();
             $('#'+thumbTarget).append(image);
           }
        } 
    }
    
});

// Upload photo asynchronously
$('#sg_applicant_profile_photo').change(function(e){
    var hasFileAPI = (window.File && window.FileReader);
    if(!hasFileAPI){
        var files = this.files;
        var file = this.files[0];
        var name = file.name;
        var size = file.size;
        var type = file.type;
        var targetRoute = $(e.target).data('upload-route');
        var thumbTarget = $(e.target).data('thumb-target');

        var reader = new FileReader();
        reader.onload = function(evt){
           if(file.type.match('image.*')){
             var image = new Image();
             image.height = 80;
             image.width = 100;
             image.src = evt.target.result;
             document.getElementById('#'+thumbTarget).appendChild(image);
           }
        }
        
        reader.readAsDataURL(file);

       //  var formData = new FormData(file);
       //  $.ajax({
       //      url: targetRoute,  //Server script to process data
       //      type: 'POST',
       //      xhr: function() {  // Custom XMLHttpRequest
       //          var myXhr = $.ajaxSettings.xhr();
       //          if(myXhr.upload){ // Check if upload property exists
       //              myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // For handling the progress of the upload
       //          }
       //          return myXhr;
       //      },
       //      //Ajax events
       //      //beforeSend: beforeSendHandler,
       //      success: function(data){
       //          console.log(data.results);
       //      },
       //      //error: errorHandler,
       //      // Form data
       //      data: formData,
       //      //Options to tell jQuery not to process data or worry about content-type.
       //      cache: false,
       //      contentType: false,
       //      processData: false
       // });
    }
    
});

function progressHandlingFunction(e){
  if(e.lengthComputable){
       // $('.sg_progress_bar').attr({aria-valuenow:e.loaded,max:e.total});
       var loadedPercent = (e.loaded/e.total)*100;
      // $('.sg_progress_bar').attr(aria-valuenow,loadedPercent);
       //$('.sg_progress_bar').css(width,loadedPercent+'%');
    }
}

// Change graph type
$('.sg_graph_type_selector').change(function(e){
      //localStorage.removeItem("graph_type");
      localStorage.setItem("graph_type",e.target.value);
      $(window).trigger("load");
      //alert(e.target.value);
  });

// Toggle pop-up
$('.sg_toggle_pop').click(function(e){
   var popTarget = $(e.target).data('pop-target');
   if($('#'+popTarget).is(':visible')){
      $('#'+popTarget).fadeOut();
   }else{
      $('#'+popTarget).fadeIn();
   }
});

// Auto-select city on country change event
$('.sg_country_selector').on('change',function(e){
    $.post($(e.target).data('source'),{
       _token: $(e.target).data('token'),
       country_id: $(e.target).val()
    },function(data, success){
       var cities = "";
       if(success == "success"){
          if(data.cities.length != 0){
             for(var i=0; i<data.cities.length; i++){
                cities += '<option value="'+data.cities[i].id+'">'+data.cities[i].name+'</option>';
             }
             $('#'+$(e.target).data('city-selector-target')).html(cities);
          }else{
             cities = '<option value="0">Cities or towns unknown</option>';
             $('#'+$(e.target).data('city-selector-target')).html(cities);
          } 
       }
    });
});

// Auto-search streets on school search
$('.sg_school_street').on('keyup',function(e){
   $.post($(e.target).data('source'),{
     _token: $(e.target).data('token'),
     street: $(e.target).val()
   },function(data, success){
      var results = '<ul class="list-group sg_ajax_results_list">';
      if(success == "success"){
         for(var i=0; i<data.schools.length; i++){
            results += '<li class="list-group-item sg_ajax_list_item" data-input-source="'+$(e.target).attr('name')+'">'+data.schools[i].street+'</li>';
         }
      }
      results +="</ul>";
      $('#'+$(e.target).data('results-container')).html(results);
   });
});

// Auto-search vicinity on school search
$('.sg_school_vicinity').on('keyup',function(e){
   $.post($(e.target).data('source'),{
     _token: $(e.target).data('token'),
     vicinity: $(e.target).val()
   },function(data, success){
      var results = '<ul class="list-group sg_ajax_results_list">';
      if(success == "success"){
         for(var i=0; i<data.schools.length; i++){
            results += '<li class="list-group-item sg_ajax_list_item" data-input-source="'+$(e.target).attr('name')+'">'+data.schools[i].location_description+'</li>';
         }
      }
      results +="</ul>";
      $('#'+$(e.target).data('results-container')).html(results);
   });
});

// Auto-search extra-curricular activities on school search
$('.sg_school_activity_search').on('keyup',function(e){
   $.post($(e.target).data('source'),{
     _token: $(e.target).data('token'),
     activity: $(e.target).val()
   },function(data, success){
      var results = '<ul class="list-graoup sg_ajax_results_list">';
      if(success == "success"){
         for(var i=0; i<data.activities.length; i++){
            results += '<li class="list-group-item sg_ajax_list_item" data-input-source="'+$(e.target).attr('name')+'">'+data.activities[i].activity+'</li>';
         }
      }
      results +="</ul>";
      $('#'+$(e.target).data('results-container')).html(results);
   });
});

// Auto-search school name or tag on school search
$('.sg_search_for_school').on('keyup',function(e){
   $.post($(e.target).data('source'),{
     _token: $(e.target).data('token'),
     search_query: $(e.target).val()
   },function(data, success){
      var results = '<ul class="list-graoup sg_ajax_results_list sg_admin_nav">';
      if(success == "success"){
         for(var i=0; i<data.schools.length; i++){
            results += '<li class="list-group-item sg_ajax_list_item" data-input-source="'+$(e.target).attr('name')+'">'+data.schools[i].name+'</li>';
         }
      }
      results +="</ul>";
      $('#'+$(e.target).data('results-container')).html(results);
   });
});

// Auto-search profesion
$('.sg_profession_search').on('keyup',function(e){
   $.post($(e.target).data('source'),{
     _token: $(e.target).data('token'),
     profession: $(e.target).val()
   },function(data, success){
      var results = '<div class="list-group sg_ajax_results_list sg_admin_nav">';
      if(success == "success"){
         for(var i=0; i<data.professions.length; i++){
            results += '<a href="#" class="list-group-item sg_ajax_list_item"  data-input-source="'+$(e.target).attr('name')+'">'+data.professions[i].title+'</a>';
         }
      }
      results +="</div>";
      $('#'+$(e.target).data('results-container')).html(results);
   });
});

// Auto-search applications by school name, hash-tag, country, city or street
$('.sg_school_applications_search').on('keyup',function(e){
   if($(e.target).val() == null){
      $('#'+$(e.target).data('results-container')).children().remove();
   }

   $.post($(e.target).data('source'),{
     _token: $(e.target).data('token'),
     search_query: $(e.target).val()
   },function(data, success){
      var results = '<div class="list-group sg_ajax_results_list sg_admin_nav">';
      if(success == "success"){
         data.applications.forEach(function(application, index, array){
             results += '<a href="'+host+application.school.hash_tag_name.toLowerCase()+'/applications/'+application.id+'" class="list-group-item sg_ajax_list_item"  data-input-source="'+$(e.target).attr('name')+'">'+application.title+'-('+application.school.name+')</a>';
         });
            
      }
      results +="</div>";
      $('#'+$(e.target).data('results-container')).html(results);
   });
});

// Auto-place ajax result item on source input
$('.sg_ajax_results_container').on('click',function(e){
     $('input[name='+$(e.target).data('input-source')+']').val($(e.target).text());
     $(e.target).parent().remove();
});

$(':not(.sg_ajax_results_container)').on('click',function(e){
     $('.sg_ajax_results_container').children().remove();
});

// Preview document on click
$('.sg_preview_doc').click(function(e){
    e.preventDefault();
    var source = $(e.target).data('doc-source');
    console.log(source);
    window.open(source);
});

// Show input field on select toggle
$('.sg_months_above').on('change',function(e){
    var target = $(e.target).data('input-target');
    var priceLabel = $(e.target).data('price');
    if(e.target.value == 'above'){
       $('#'+target).slideDown();
    }else{
       $('#'+target).slideUp();
       var targetPackage = $(e.target).data('package-target');
       var packages = $('#'+targetPackage).data('packages');
       var packageId = $('#'+targetPackage).val();
       for(var i=0; i<packages.length; i++){
         if(packages[i].id == packageId){
           var currentPackage = packages[i];
         }
       }
       var price = e.target.value*currentPackage.monthly_charge;
       $('#'+priceLabel+' span').text(price+' '+currentPackage.currency.code);
    }
});

// On scroll event of home page banner, change the background of top navigation bar
$(window).bind('scroll',function(){
   if($(window).width() > 991){
      if($(window).scrollTop() > 50){
         $('#sg_site_logo').removeClass('sg_site_logo_sm', {duration:1000});
         $('#sg_site_logo').css('height','50px',{duration:3000}); 
         $('#sg_site_logo').css('position','relative',{duration:3000}); 
         $('#sg_site_logo').css('top','12px',{duration:3000}); 
      }else{
         $('#sg_site_logo').addClass('sg_site_logo_lg', {duration:3000});
         $('#sg_site_logo').css('height','80px',{duration:3000}); 
         $('#sg_site_logo').css('position','relative',{duration:3000}); 
         $('#sg_site_logo').css('top','20px',{duration:3000}); 
      }
   }
});

// Enlarge small image on hover relative to screen position
// $('.sg_img_lg').on('hover',function(e){
//    console.log(e.target.src);
//    var img = '<img src="'+e.target.src+'" class="sg_img_lg_after">';
//    $(e.target).parent().parent().stop(true).append(img);
// });

// Hide pop-up
// $(':not(.sg_popup)').click(function(){
//    if($('.sg_popup').is(':visible')){
//       $('.sg_popup').fadeOut();
//    }
// });
