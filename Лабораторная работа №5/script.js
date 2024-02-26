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
});
