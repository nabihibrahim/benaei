$('#recipeCarousel').carousel({
        interval: 10000
      })
      
      $('#recipeCarousel .carousel-item').each(function(){
          var minPerSlide = 3;
          var next = $(this).next();
          if (!next.length) {
          next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<minPerSlide;i++) {
              next=next.next();
              if (!next.length) {
                      next = $(this).siblings(':first');
                    }
              
              next.children(':first-child').clone().appendTo($(this));
            }
      });
      
/*=================================
                side nav
===================================*/
function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    