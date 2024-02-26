$(document).ready(function(){
    $('.countryCheckbox').change(function(){
        let country = $(this).val();
        if($(this).is(":checked")){
            $("." + country).show();
        } else {
            $("." + country).hide();
        }
    });
    $( function() {
        $( "#schools" ).accordion();
      } );

    //Полоса загрузки

    let progressBar = $("#progress");
    let dialogMessage = $("#dialog-message").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        "OK": function () {
          $(this).dialog("close");
        }
      }
    });

    let totalTime = 60;
    let currentTime = 0;

    let interval = setInterval(function () {
      currentTime++;
      let progress = (currentTime / totalTime) * 100;
      progressBar.css("width", progress + "%");
      if (currentTime >= totalTime) {
        clearInterval(interval);
        dialogMessage.dialog("open");
      }
    }, 1000);
});
