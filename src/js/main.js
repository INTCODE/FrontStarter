// QUICK SEARCH JS
//-------------------------------------------------------
$('#search_product input').keyup(function () {
    var container = $('.item-container'),
        q = $(this).val();
        // AJAX HERE!
        // SPRAWDZ DŁUGOSC if > 0 esle BRAK WYNIKOW
        // SUKCES .html() RESULTS
        // container.append(q);
});
console.log(
    "asdsds"
);


function setTextColor(picker) {
    document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
}