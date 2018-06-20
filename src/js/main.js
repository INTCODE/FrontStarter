// COLORPICKER
//-------------------------------------------------------
function setTextColor(picker) {
    document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
}


// Price Calc
//-------------------------------------------------------

var cenaNetto = $('#pricing #proce_netto'),
    cenaBrutto = $('#pricing #proce_brutto'),
    podatek = $('#pricing #tax');


// Netto --> Brutto
//---------------------------------------------------------------
$(cenaNetto).on('keyup',function () {

    if( $(this).val().length > 0 ) {
        var netto = parseFloat($(cenaNetto).val());

        if( $(podatek).val().length > 0 ) {
           var  tax = $(podatek).val();
        }else{
            var tax = 23; // Domyślnie ustawiam 23
        }
        var brutto = netto + (netto * (tax/100));
        cenaBrutto.val(brutto.toFixed(2));
    }else{
        cenaNetto.val('');
        cenaBrutto.val('');
    }

});

// Brutto --> Netto
//--------------------------------------------------------------
$(cenaBrutto).on('keyup',function () {

    if( $(this).val().length > 0 ) {
        var brutto = parseFloat($(cenaBrutto).val());

        //oblicz wysokość vatu.....

        if( $(podatek).val().length > 0 ) {
            var  tax = $(podatek).val();
        }else{
            var tax = 23; // Domyślnie ustawiam 23
        }
        var netto = (brutto*100)/(100+100*(tax/100)) ;
        cenaNetto.val(netto.toFixed(2));
    }else{
        cenaNetto.val('');
        cenaBrutto.val('');
    }
});


// Zmiana podatku
//--------------------------------------------------------------

$(podatek).on('keyup',function () {

    var tax = $(podatek).val();
    var netto = parseFloat($(cenaNetto).val());

    if( $(cenaNetto).val().length > 0 ) {
        var brutto = netto + (netto * (tax/100));
        cenaBrutto.val(brutto.toFixed(2));
    }else{
        console.log("error");
    }

});
