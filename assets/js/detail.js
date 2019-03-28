// Script For Tab Header
function openCity(cityName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
  
  }
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// Script For Progressing Rate Star Block
$(document).ready(function () {
    $('.bar span').hide();
    $('#bar-five').animate({
      width: '100%' }, 1000);
    $('#bar-four').animate({
      width: '35%' }, 1000);
    $('#bar-three').animate({
      width: '20%' }, 1000);
    $('#bar-two').animate({
      width: '15%' }, 1000);
    $('#bar-one').animate({
      width: '30%' }, 1000);
  
    setTimeout(function () {
      $('.bar span').fadeIn('slow');
    }, 1000);
  
});



// Script For Rating Star
$(document).ready(function () {

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function () {
      var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this).parent().children('li.star').each(function (e) {
        if (e < onStar) {
          $(this).addClass('hover');
        } else
        {
          $(this).removeClass('hover');
        }
      });

    }).on('mouseout', function () {
      $(this).parent().children('li.star').each(function (e) {
        $(this).removeClass('hover');
      });
    });


    /* 2. Action to perform on click */
    $('#stars li').on('click', function () {
      var onStar = parseInt($(this).data('value'), 10); // The star currently selected
      var stars = $(this).parent().children('li.star');

      for (i = 0; i < stars.length; i++) {if (window.CP.shouldStopExecution(0)) break;
        $(stars[i]).removeClass('selected');
      }window.CP.exitedLoop(0);

      for (i = 0; i < onStar; i++) {if (window.CP.shouldStopExecution(1)) break;
        $(stars[i]).addClass('selected');
      }

      // JUST RESPONSE (Not needed)
      window.CP.exitedLoop(1);var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
      var msg = "";
      if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
      } else
      {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
      }
      responseMessage(msg);
    });
});


function responseMessage(msg) {
  $('.success-box').fadeIn(200);
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}



// Script For Comment Block