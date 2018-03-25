/*!
    Title: Tanner Lane's Portfolio Website
    Version: 1.0.1
    Last Change: 11/01/2017
    Author: Tanner Lane
    Repo: https://github.com/tal763/www.tanneralane.com.git

    Description: This file contains all the scripts associated with the page
    that don't come from third party libraries. This file gets compiled using
    Gulp and send to the /css folder which is then loaded on the page.
*/

(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('#menu-outer li a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Animate to section when nav is clicked
    $('.sidebar li a').click(function(e) {

       // Treat as normal link if no-scroll class
       if ($(this).hasClass('no-scroll')) return;

       e.preventDefault();
       var heading = $(this).attr('href');
       var scrollDistance = $(heading).offset().top;

       $('html, body').animate({
            scrollTop: scrollDistance + 'px'
       }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

       // Hide the menu once clicked if mobile
       if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
       }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

    // Fade the page out when the side bar button is clicked
    // $(".sidebarBtn").click(function(){
    //      $('#lead').animate({
    //           opacity: '0.5'
    //      });
    // });

    var clicks = 0;
     $('.sidebarBtn').click(function() {
         if (clicks %2 == 0){
              $('#lead').animate({
                  opacity: '0.2'
             });

             $('footer').animate({
                 opacity: '0.2'
            });

            $('.main-page').animate({
               opacity: '0.2'
          });
         } else{
              $('#lead').animate({
                 opacity: '1'
            });

            $('footer').animate({
               opacity: '1'
          });

          $('.main-page').animate({
             opacity: '1'
        });
         }
         ++clicks;
     });

     // var clicks = 0;
     // $('.sidebarBtn').click(function() {
     //     if (clicks %2 == 0){
     //          $('footer').animate({
     //              opacity: '0.4'
     //         });
     //     } else{
     //          $('footer').animate({
     //             opacity: '1'
     //        });
     //     }
     //     ++clicks;
     // });
     //
     // var clicks = 0;
     // $('.sidebarBtn').click(function() {
     //     if (clicks %2 == 0){
     //          $('.main-page').animate({
     //              opacity: '0.4'
     //         });
     //     } else{
     //          $('.main-page').animate({
     //             opacity: '1'
     //        });
     //     }
     //     ++clicks;
     // });

})(jQuery);
